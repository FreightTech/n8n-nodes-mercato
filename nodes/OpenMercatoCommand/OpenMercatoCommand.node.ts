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
import { loadCommandOptions, generateCommandSubject } from '../../utils/MetadataLoader';

export class OpenMercatoCommand implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OpenMercato Command',
		name: 'openMercatoCommand',
		icon: 'file:openmercato.svg',
		group: ['output'],
		version: 1,
		description: 'Send commands to OpenMercato via NATS JetStream',
		subtitle: '={{$parameter["command"]}}',
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
				displayName: 'Command',
				name: 'command',
				type: 'options',
				options: loadCommandOptions(),
				default: '',
				required: true,
				description: 'Select a command to execute',
			},
			{
				displayName: 'Command Input',
				name: 'commandInput',
				type: 'json',
				default: '={{ $json }}',
				typeOptions: {
					rows: 10,
				},
				description: 'Command input payload (will be wrapped with tenantId and organizationId)',
				hint: 'Enter payload as JSON',
			},
			{
				displayName: 'Organization ID',
				name: 'organizationId',
				type: 'string',
				default: '',
				placeholder: 'Override default from credentials',
				description: 'Organization ID for this command (optional if set in credentials)',
			},
			{
				displayName: 'Options',
				name: 'options',
				type: 'collection',
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
