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
import { loadEventOptions, generateEventSubject } from '../../utils/MetadataLoader';

export class OpenMercatoEventPublisher implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OpenMercato Event Publisher',
		name: 'openMercatoEventPublisher',
		icon: 'file:openmercato.svg',
		group: ['output'],
		version: 1,
		description: 'Publish events to OpenMercato via NATS',
		subtitle:
			'={{$parameter["eventSource"] === "predefined" ? $parameter["event"] : $parameter["customEvent"]}}',
		defaults: {
			name: 'OpenMercato Event Publisher',
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
				displayName: 'Event Source',
				name: 'eventSource',
				type: 'options',
				options: [
					{
						name: 'Select From List',
						value: 'predefined',
						description: 'Choose from discovered OpenMercato events',
					},
					{
						name: 'Custom Event',
						value: 'custom',
						description: 'Enter a custom event identifier',
					},
				],
				default: 'predefined',
				description: 'Choose event source',
			},
			{
				displayName: 'Event',
				name: 'event',
				type: 'options',
				displayOptions: {
					show: {
						eventSource: ['predefined'],
					},
				},
				options: loadEventOptions(),
				default: '',
				description: 'Select an event to publish',
			},
			{
				displayName: 'Custom Event Subject',
				name: 'customEvent',
				type: 'string',
				displayOptions: {
					show: {
						eventSource: ['custom'],
					},
				},
				default: '',
				placeholder: 'custom.integration.completed',
				description: 'Custom event identifier (will be prefixed with events.{tenantId})',
			},
			{
				displayName: 'Event Data',
				name: 'eventData',
				type: 'json',
				default: '={{ $json }}',
				typeOptions: {
					rows: 10,
				},
				description: 'Event payload data',
			},
			{
				displayName: 'Options',
				name: 'options',
				type: 'collection',
				placeholder: 'Add Option',
				default: {},
				options: [
					{
						displayName: 'Headers',
						name: 'headers',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						description: 'Headers to add to the message',
						options: [
							{
								name: 'headerValues',
								displayName: 'Header',
								values: [
									{
										displayName: 'Name',
										name: 'name',
										type: 'string',
										default: '',
										description: 'Header name',
									},
									{
										displayName: 'Value',
										name: 'value',
										type: 'string',
										default: '',
										description: 'Header value',
									},
								],
							},
						],
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

		if (!tenantId) {
			throw new NodeOperationError(this.getNode(), 'Tenant ID is required in credentials');
		}

		let nc: NatsConnection;

		try {
			nc = await createOpenMercatoConnection(credentials, nodeLogger);

			for (let i = 0; i < items.length; i++) {
				try {
					const eventSource = this.getNodeParameter('eventSource', i) as string;
					const eventData = this.getNodeParameter('eventData', i);
					const options = this.getNodeParameter('options', i, {}) as any;

					// Determine event ID
					let eventId: string;
					if (eventSource === 'predefined') {
						eventId = this.getNodeParameter('event', i) as string;

						// Skip separator items
						if (eventId.startsWith('__')) {
							continue;
						}
					} else {
						eventId = this.getNodeParameter('customEvent', i) as string;
						if (!eventId) {
							throw new NodeOperationError(this.getNode(), 'Custom event identifier is required');
						}
					}

					// Build tenant-prefixed subject
					const subject = generateEventSubject(tenantId, eventId);

					// Prepare headers if provided
					const headers: Record<string, string> = {};
					if (options.headers?.headerValues) {
						for (const header of options.headers.headerValues) {
							if (header.name && header.value) {
								headers[header.name] = header.value;
							}
						}
					}

					// Always add x-source header
					headers['x-source'] = 'open-mercato-n8n';

					// Publish event
					const data = JSON.stringify(eventData);

					// Create NATS headers
					const msgHeaders = natsHeaders();
					for (const [key, value] of Object.entries(headers)) {
						msgHeaders.set(key, value);
					}
					nc.publish(subject, data, { headers: msgHeaders });

					returnData.push({
						json: {
							success: true,
							eventId,
							subject,
							timestamp: new Date().toISOString(),
						},
						pairedItem: { item: i },
					});
				} catch (error: any) {
					if (this.continueOnFail()) {
						returnData.push({
							json: {
								error: error.message,
								eventId: this.getNodeParameter('event', i) as string,
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
			throw new NodeOperationError(
				this.getNode(),
				`OpenMercato event publish failed: ${error.message}`,
			);
		} finally {
			if (nc!) {
				await closeOpenMercatoConnection(nc, nodeLogger);
			}
		}

		return [returnData];
	}
}
