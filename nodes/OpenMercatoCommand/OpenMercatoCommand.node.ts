import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeOperationError, NodeConnectionTypes } from 'n8n-workflow';
import { NatsConnection, headers as natsHeaders } from '../../bundled/nats-bundled';
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
		description: 'Execute commands in OpenMercato via NATS request-reply',
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
				displayName: 'Options',
				name: 'options',
				type: 'collection',
				placeholder: 'Add Option',
				default: {},
				options: [
					{
						displayName: 'Organization ID',
						name: 'organizationId',
						type: 'string',
						default: '',
						placeholder: 'Override default from credentials',
						description: 'Organization ID for this command (optional if set in credentials)',
					},
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

			for (let i = 0; i < items.length; i++) {
				try {
					const commandId = this.getNodeParameter('command', i) as string;

					// Skip separator items (module headers)
					if (commandId.startsWith('__')) {
						continue;
					}

					const commandInput = this.getNodeParameter('commandInput', i);
					const options = this.getNodeParameter('options', i, {}) as any;
					const organizationId = options.organizationId || defaultOrgId;

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

					// Log what we're sending
					nodeLogger.info(`Sending command to subject: ${subject}`);
					nodeLogger.debug('Payload:', payload);

					// Execute command via request-reply (synchronous)
					const data = JSON.stringify(payload);
					const response = await nc.request(subject, data, {
						timeout: 30000,
						headers: msgHeaders,
					});

					// Parse response
					const result = JSON.parse(new TextDecoder().decode(response.data));
					nodeLogger.debug('Received response:', result);

					if (result.success) {
						returnData.push({
							json: {
								success: true,
								commandId,
								subject,
								result: result.result,
								timestamp: new Date().toISOString(),
							},
							pairedItem: { item: i },
						});
					} else {
						// Command failed - log full response for debugging
						nodeLogger.error('Command failed with response:', result);

						// Extract error message - prioritize errorMsg (string) over error (object)
						const errorMessage =
							result.errorMsg ||
							(typeof result.error === 'string' ? result.error : result.error?.message) ||
							result.message ||
							JSON.stringify(result);

						if (this.continueOnFail()) {
							returnData.push({
								json: {
									success: false,
									error: result.error,
									errorMsg: result.errorMsg,
									code: result.code,
									fullResponse: result,
									commandId,
									subject,
								},
								pairedItem: { item: i },
							});
						} else {
							throw new NodeOperationError(
								this.getNode(),
								`Command ${commandId} failed: ${errorMessage}`,
								{ itemIndex: i },
							);
						}
					}
				} catch (error: any) {
					if (this.continueOnFail()) {
						returnData.push({
							json: {
								success: false,
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
