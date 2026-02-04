import type {
	ITriggerFunctions,
	INodeType,
	INodeTypeDescription,
	ITriggerResponse,
} from 'n8n-workflow';
import { ApplicationError, NodeConnectionTypes } from 'n8n-workflow';
import { NatsConnection, Subscription } from '../../bundled/nats-bundled';
import {
	createOpenMercatoConnection,
	closeOpenMercatoConnection,
} from '../../utils/OpenMercatoConnection';
import { NodeLogger } from '../../utils/NodeLogger';
import {
	loadEventOptions,
	generateEventSubject,
	parseEventSubject,
} from '../../utils/MetadataLoader';

export class OpenMercatoEventConsumer implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OpenMercato Event Consumer',
		name: 'openMercatoEventConsumer',
		icon: 'file:openmercato.svg',
		group: ['trigger'],
		version: 1,
		description: 'Subscribe to OpenMercato events via NATS',
		subtitle:
			'={{$parameter["eventSource"] === "predefined" ? $parameter["event"] : $parameter["customSubject"]}}',
		defaults: {
			name: 'OpenMercato Event Consumer',
		},
		inputs: [],
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
						name: 'Custom Subject Pattern',
						value: 'custom',
						description: 'Enter a custom NATS subject pattern',
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
				description: 'Select an event to listen for',
			},
			{
				displayName: 'Custom Subject Pattern',
				name: 'customSubject',
				type: 'string',
				displayOptions: {
					show: {
						eventSource: ['custom'],
					},
				},
				default: '',
				placeholder: 'catalog.> or sales.orders.*',
				description:
					'NATS subject pattern (wildcards supported). Will be automatically prefixed with events.{tenantId}.',
				hint: 'Use * for single token wildcard, > for multi-token wildcard',
			},
			{
				displayName: 'Queue Group',
				name: 'queueGroup',
				type: 'string',
				default: '',
				placeholder: 'event-processors',
				description: 'Queue group name for load balancing across multiple n8n instances (optional)',
				hint: 'Only one subscriber in the group receives each message',
			},
		],
	};

	async trigger(this: ITriggerFunctions): Promise<ITriggerResponse> {
		const credentials = await this.getCredentials('openMercatoApi');
		const nodeLogger = new NodeLogger(this.logger, this.getNode());

		const tenantId = credentials.tenantId as string;
		const eventSource = this.getNodeParameter('eventSource') as string;
		const queueGroup = this.getNodeParameter('queueGroup') as string;

		if (!tenantId) {
			throw new ApplicationError('Tenant ID is required in credentials');
		}

		// Determine subject pattern
		let subjectPattern: string;
		if (eventSource === 'predefined') {
			const eventId = this.getNodeParameter('event') as string;

			// Skip separator items
			if (eventId.startsWith('__')) {
				throw new ApplicationError('Please select a valid event');
			}

			subjectPattern = generateEventSubject(tenantId, eventId);
		} else {
			const customSubject = this.getNodeParameter('customSubject') as string;
			if (!customSubject) {
				throw new ApplicationError('Custom subject pattern is required');
			}
			subjectPattern = generateEventSubject(tenantId, customSubject);
		}

		let nc: NatsConnection;
		let subscription: Subscription;

		const closeFunction = async () => {
			if (subscription) {
				try {
					subscription.unsubscribe();
				} catch (error) {
					nodeLogger.error('Error unsubscribing:', { error });
				}
			}
			if (nc) {
				await closeOpenMercatoConnection(nc, nodeLogger);
			}
		};

		const manualTriggerFunction = async () => {
			// Provide comprehensive sample data
			const parsedSubject = parseEventSubject(subjectPattern);
			const sampleData: any = {
				event: subjectPattern,
				data: {
					id: 'sample-' + Math.random().toString(36).substr(2, 9),
					tenantId,
					organizationId: credentials.organizationId || '00000000-0000-0000-0000-000000000000',
					timestamp: new Date().toISOString(),
					// Add example entity data
					entity: {
						id: '00000000-0000-0000-0000-000000000000',
						name: 'Sample Entity',
						createdAt: new Date().toISOString(),
					},
				},
				headers: {
					'content-type': 'application/json',
					'x-source': 'manual-trigger',
				},
				metadata: {
					subject: subjectPattern,
					tenantId: parsedSubject?.tenantId || tenantId,
					eventId: parsedSubject?.eventId || 'sample.event',
					receivedAt: new Date().toISOString(),
				},
			};

			this.emit([this.helpers.returnJsonArray([sampleData])]);
		};

		try {
			// Create connection with monitoring for long-running trigger
			nc = await createOpenMercatoConnection(credentials, nodeLogger, {
				monitor: true,
				onError: (error) => {
					nodeLogger.error('Event consumer connection lost:', { error });
				},
				onReconnect: (server) => {
					nodeLogger.info(`Event consumer reconnected to ${server}`);
				},
				onDisconnect: (server) => {
					nodeLogger.warn(`Event consumer disconnected from ${server}`);
				},
				onAsyncError: (error) => {
					nodeLogger.error('Event consumer async error:', { error });
				},
			});

			// Create subscription options
			const subOptions: any = {};
			if (queueGroup) {
				subOptions.queue = queueGroup;
			}

			subscription = nc.subscribe(subjectPattern, subOptions);

			nodeLogger.info(`Subscribed to: ${subjectPattern}`);

			// Process messages asynchronously
			(async () => {
				for await (const msg of subscription) {
					try {
						nodeLogger.info(`Received message on subject: ${msg.subject}`);

						// Parse message data
						let data: any;
						try {
							data = JSON.parse(new TextDecoder().decode(msg.data));
						} catch (parseError) {
							// Best-effort: use raw string if JSON parsing fails
							data = new TextDecoder().decode(msg.data);
							nodeLogger.warn('Failed to parse message as JSON, using raw string');
						}

						// Extract headers if present
						const headers: Record<string, string> = {};
						if (msg.headers) {
							for (const [key, values] of msg.headers) {
								headers[key] = values.join(', ');
							}
						}

						// Parse subject to extract tenant and event ID
						const parsedSubject = parseEventSubject(msg.subject);

						// Emit the message to the workflow
						this.emit([
							[
								{
									json: {
										event: msg.subject,
										data,
										headers: Object.keys(headers).length > 0 ? headers : undefined,
										metadata: {
											subject: msg.subject,
											tenantId: parsedSubject?.tenantId || tenantId,
											eventId: parsedSubject?.eventId || msg.subject,
											receivedAt: new Date().toISOString(),
											replyTo: msg.reply,
										},
									},
								},
							],
						]);
					} catch (error: any) {
						nodeLogger.error('Error processing message:', { error, subject: msg.subject });

						// Emit error as a message with parseError flag
						this.emit([
							[
								{
									json: {
										error: true,
										errorMessage: error.message,
										subject: msg.subject,
										rawData: new TextDecoder().decode(msg.data),
										timestamp: new Date().toISOString(),
									},
								},
							],
						]);
					}
				}
			})();

			return {
				closeFunction,
				manualTriggerFunction,
			};
		} catch (error: any) {
			throw new ApplicationError(`Failed to setup OpenMercato event consumer: ${error.message}`);
		}
	}
}
