/**
 * Metadata Loader
 *
 * Loads OpenMercato commands, events, and templates from generated JSON files.
 * Used by n8n nodes to populate dropdowns and provide message templates.
 */

import { INodePropertyOptions } from 'n8n-workflow';

// Import generated metadata
// @ts-ignore - generated files may not exist during development
import commandsData from '../src/generated/commands.json';
// @ts-ignore
import eventsData from '../src/generated/events.json';
// @ts-ignore
import templatesData from '../src/generated/templates.json';

export interface CommandDefinition {
	id: string;
	module: string;
	entity: string;
	action: string;
	label: string;
	description?: string;
}

export interface EventDefinition {
	id: string;
	module: string;
	entity: string;
	category: 'crud' | 'lifecycle';
	label: string;
	excludeFromTriggers?: boolean;
}

/**
 * Load all discovered commands
 */
export function loadCommands(): CommandDefinition[] {
	try {
		return commandsData as CommandDefinition[];
	} catch (error) {
		console.warn('Failed to load commands metadata:', error);
		return [];
	}
}

/**
 * Load all discovered events
 */
export function loadEvents(): EventDefinition[] {
	try {
		const events = eventsData as EventDefinition[];
		// Filter out events marked as excludeFromTriggers
		return events.filter((event) => !event.excludeFromTriggers);
	} catch (error) {
		console.warn('Failed to load events metadata:', error);
		return [];
	}
}

/**
 * Load message templates for commands
 */
export function loadTemplates(): Record<string, any> {
	try {
		return templatesData as Record<string, any>;
	} catch (error) {
		console.warn('Failed to load templates metadata:', error);
		return {};
	}
}

/**
 * Get template for a specific command
 */
export function getCommandTemplate(commandId: string): any {
	const templates = loadTemplates();
	return (
		templates[commandId] || {
			tenantId: '00000000-0000-0000-0000-000000000000',
			organizationId: '00000000-0000-0000-0000-000000000000',
			_comment: 'No template available for this command',
		}
	);
}

/**
 * Convert commands to n8n dropdown options, grouped by module
 */
export function loadCommandOptions(): INodePropertyOptions[] {
	const commands = loadCommands();

	if (commands.length === 0) {
		return [
			{
				name: 'No commands found - Run: npm run refresh:metadata',
				value: '',
				description: 'Discovery script needs to be run',
			},
		];
	}

	// Group commands by module
	const grouped = commands.reduce(
		(acc, cmd) => {
			if (!acc[cmd.module]) {
				acc[cmd.module] = [];
			}
			acc[cmd.module].push(cmd);
			return acc;
		},
		{} as Record<string, CommandDefinition[]>,
	);

	// Build options with module headers
	const options: INodePropertyOptions[] = [];

	const modules = Object.keys(grouped).sort();

	for (const module of modules) {
		// Add module header (separator)
		options.push({
			name: `━━━ ${module.toUpperCase()} ━━━`,
			value: `__${module}__`,
			description: `${module} module commands`,
		});

		// Add commands for this module
		const moduleCommands = grouped[module].sort((a, b) => a.id.localeCompare(b.id));
		for (const cmd of moduleCommands) {
			options.push({
				name: cmd.label,
				value: cmd.id,
				description: cmd.description || `${cmd.action} ${cmd.entity}`,
			});
		}
	}

	return options;
}

/**
 * Convert events to n8n dropdown options, grouped by module
 */
export function loadEventOptions(): INodePropertyOptions[] {
	const events = loadEvents();

	if (events.length === 0) {
		return [
			{
				name: 'No events found - Run: npm run refresh:metadata',
				value: '',
				description: 'Discovery script needs to be run',
			},
		];
	}

	// Group events by module
	const grouped = events.reduce(
		(acc, evt) => {
			if (!acc[evt.module]) {
				acc[evt.module] = [];
			}
			acc[evt.module].push(evt);
			return acc;
		},
		{} as Record<string, EventDefinition[]>,
	);

	// Build options with module headers
	const options: INodePropertyOptions[] = [];

	const modules = Object.keys(grouped).sort();

	for (const module of modules) {
		// Add module header (separator)
		options.push({
			name: `━━━ ${module.toUpperCase()} ━━━`,
			value: `__${module}__`,
			description: `${module} module events`,
		});

		// Add events for this module
		const moduleEvents = grouped[module].sort((a, b) => a.id.localeCompare(b.id));
		for (const evt of moduleEvents) {
			options.push({
				name: evt.label,
				value: evt.id,
				description: `${evt.category} - ${evt.entity}`,
			});
		}
	}

	return options;
}

/**
 * Generate command subject with inbound prefix
 */
export function generateCommandSubject(commandId: string): string {
	return `inbound.${commandId}`;
}

/**
 * Generate event subject with tenant prefix
 */
export function generateEventSubject(tenantId: string, eventId: string): string {
	return `${tenantId}.${eventId}`;
}

/**
 * Parse tenant-prefixed event subject to extract event ID
 */
export function parseEventSubject(subject: string): { tenantId: string; eventId: string } | null {
	const parts = subject.split('.');
	if (parts.length < 2) {
		return null;
	}

	const tenantId = parts[0];
	const eventId = parts.slice(1).join('.');

	return { tenantId, eventId };
}
