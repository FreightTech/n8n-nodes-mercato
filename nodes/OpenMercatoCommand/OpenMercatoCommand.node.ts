import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeOperationError, NodeConnectionTypes } from 'n8n-workflow';
import { NatsConnection, jetstream, headers as natsHeaders } from '../../bundled/nats-bundled';
import {
	createOpenMercatoConnection,
	closeOpenMercatoConnection,
} from '../../utils/OpenMercatoConnection';
import { NodeLogger } from '../../utils/NodeLogger';
import {
	loadCommandOptions,
	generateCommandSubject,
	getCommandTemplate,
} from '../../utils/MetadataLoader';

export class OpenMercatoCommand implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OpenMercato Command',
		name: 'openMercatoCommand',
		icon: 'file:openmercato.svg',
		group: ['output'],
		version: 1,
		description: 'Send commands to OpenMercato via NATS JetStream',
		subtitle: '={{$parameter["resource"] === "template" ? "Get Template" : $parameter["command"]}}',
		defaults: {
			name: 'OpenMercato Command',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'openMercatoApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Operation',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Execute Command',
						value: 'command',
						description: 'Send a command to OpenMercato via JetStream',
					},
					{
						name: 'Get Template',
						value: 'template',
						description: 'Retrieve a message template for a command',
					},
				],
				default: 'command',
			},
			// Execute Command fields
			{
				displayName: 'Command',
				name: 'command',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['command'],
					},
				},
				options: loadCommandOptions(),
				default: '',
				required: true,
				description: 'Select a command to execute',
			},
			{
				displayName: 'Command Input',
				name: 'commandInput',
				type: 'json',
				displayOptions: {
					show: {
						resource: ['command'],
					},
				},
				default: '={{ $json }}',
				typeOptions: {
					rows: 10,
				},
				description: 'Command input payload (will be wrapped with tenantId and organizationId)',
				hint: 'Use "Get Template" operation to see example payload for this command',
			},
			{
				displayName: 'Organization ID',
				name: 'organizationId',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['command'],
					},
				},
				default: '',
				placeholder: 'Override default from credentials',
				description: 'Organization ID for this command (optional if set in credentials)',
			},
			// Get Template fields
			{
				displayName: 'Command',
				name: 'templateCommand',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['template'],
					},
				},
				options: loadCommandOptions(),
				default: '',
				required: true,
				description: 'Select a command to get its template',
			},
			{
				displayName: 'Template Format',
				name: 'templateFormat',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['template'],
					},
				},
				options: [
					{
						name: 'Input Only',
						value: 'input',
						description: 'Just the input payload (copy to Command Input field)',
					},
					{
						name: 'Full Envelope',
						value: 'full',
						description: 'Complete message with tenantId and organizationId wrapper',
					},
				],
				default: 'input',
				description: 'Which format to return',
			},
			// Execute Command options
			{
				displayName: 'Options',
				name: 'options',
				type: 'collection',
				displayOptions: {
					show: {
						resource: ['command'],
					},
				},
				placeholder: 'Add Option',
				default: {},
				options: [
					{
						displayName: 'Subject Override',
						name: 'subjectOverride',
						type: 'string',
						default: '',
						placeholder: 'inbound.catalog.products.create',
						description: 'Override the auto-generated NATS subject (advanced)',
					},
				],
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;

		// Handle template retrieval (no NATS connection needed)
		if (resource === 'template') {
			for (let i = 0; i < items.length; i++) {
				const commandId = this.getNodeParameter('templateCommand', i) as string;
				const templateFormat = this.getNodeParameter('templateFormat', i) as string;

				// Skip separator items
				if (commandId.startsWith('__')) {
					continue;
				}

				const template = getCommandTemplate(commandId);
				const credentials = await this.getCredentials('openMercatoApi');
				const tenantId = credentials.tenantId as string;
				const defaultOrgId = credentials.organizationId as string;

				let output: any;
				if (templateFormat === 'full') {
					// Full envelope format
					output = {
						input: template,
						tenantId: tenantId || '00000000-0000-0000-0000-000000000000',
						organizationId: defaultOrgId || '00000000-0000-0000-0000-000000000000',
					};
				} else {
					// Just the input payload
					output = template;
				}

				returnData.push({
					json: {
						commandId,
						template: output,
						subject: generateCommandSubject(commandId),
						note:
							templateFormat === 'input'
								? 'Copy the template object above to use in Command Input field'
								: 'This is the complete message envelope that will be sent',
					},
					pairedItem: { item: i },
				});
			}

			return [returnData];
		}

		// Handle command execution
		const credentials = await this.getCredentials('openMercatoApi');
		const nodeLogger = new NodeLogger(this.logger, this.getNode());

		const tenantId = credentials.tenantId as string;
		const defaultOrgId = credentials.organizationId as string;

		if (!tenantId) {
			throw new NodeOperationError(this.getNode(), 'Tenant ID is required in credentials');
		}

		let nc: NatsConnection;

		try {
			nc = await createOpenMercatoConnection(credentials, nodeLogger);
			const js = jetstream(nc);

			for (let i = 0; i < items.length; i++) {
				try {
					const commandId = this.getNodeParameter('command', i) as string;

					// Skip separator items (module headers)
					if (commandId.startsWith('__')) {
						continue;
					}

					const commandInput = this.getNodeParameter('commandInput', i);
					const organizationId =
						(this.getNodeParameter('organizationId', i) as string) || defaultOrgId;
					const options = this.getNodeParameter('options', i, {}) as any;

					// Build subject: inbound.{commandId}
					const subject = options.subjectOverride || generateCommandSubject(commandId);

					// Build command payload with required envelope
					const payload = {
						input: commandInput,
						tenantId,
						organizationId: organizationId || undefined,
					};

					// Create headers with x-source identifier
					const msgHeaders = natsHeaders();
					msgHeaders.set('x-source', 'open-mercato-n8n');

					// Publish to JetStream INBOUND_COMMANDS stream
					const data = JSON.stringify(payload);
					const ack = await js.publish(subject, data, { headers: msgHeaders });

					returnData.push({
						json: {
							success: true,
							commandId,
							subject,
							sequence: Number(ack.seq),
							stream: ack.stream,
							duplicate: ack.duplicate || false,
							timestamp: new Date().toISOString(),
						},
						pairedItem: { item: i },
					});
				} catch (error: any) {
					if (this.continueOnFail()) {
						returnData.push({
							json: {
								error: error.message,
								commandId: this.getNodeParameter('command', i) as string,
							},
							pairedItem: { item: i },
						});
					} else {
						throw error;
					}
				}
			}

			// Ensure messages are flushed before closing
			await nc.flush();
		} catch (error: any) {
			throw new NodeOperationError(this.getNode(), `OpenMercato command failed: ${error.message}`);
		} finally {
			if (nc!) {
				await closeOpenMercatoConnection(nc, nodeLogger);
			}
		}

		return [returnData];
	}
}
