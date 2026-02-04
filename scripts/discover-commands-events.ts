#!/usr/bin/env tsx
/**
 * OpenMercato Command & Event Discovery Script
 *
 * Scans the OpenMercato codebase to extract:
 * - All registered commands from modules
 * - All declared events from modules
 *
 * Outputs:
 * - src/generated/commands.json
 * - src/generated/events.json
 */

import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';

interface CommandDefinition {
	id: string;
	module: string;
	entity: string;
	action: string;
	label: string;
	description?: string;
}

interface EventDefinition {
	id: string;
	module: string;
	entity: string;
	category: 'crud' | 'lifecycle';
	label: string;
	excludeFromTriggers?: boolean;
}

// Get OpenMercato path from args or environment
const args = process.argv.slice(2);
const pathArgIndex = args.indexOf('--path');
const OPENMERCATO_PATH =
	pathArgIndex >= 0 && args[pathArgIndex + 1]
		? args[pathArgIndex + 1]
		: process.env.OPENMERCATO_PATH || '';

if (!OPENMERCATO_PATH) {
	console.error('Error: OpenMercato path not specified.');
	console.error('Usage: npm run discover -- --path /path/to/openmercato');
	console.error('Or set OPENMERCATO_PATH environment variable');
	process.exit(1);
}

if (!fs.existsSync(OPENMERCATO_PATH)) {
	console.error(`Error: OpenMercato path does not exist: ${OPENMERCATO_PATH}`);
	process.exit(1);
}

console.log(`🔍 Discovering commands and events in: ${OPENMERCATO_PATH}`);

/**
 * Discover commands by scanning command files
 */
async function discoverCommands(): Promise<CommandDefinition[]> {
	console.log('\n📦 Scanning for commands...');

	// Scan all packages for command files
	const commandFiles = await glob('packages/*/src/modules/*/commands/*.ts', {
		cwd: OPENMERCATO_PATH,
		ignore: ['**/__tests__/**', '**/*.test.ts', '**/node_modules/**'],
	});

	console.log(`Found ${commandFiles.length} command files`);

	const commands: CommandDefinition[] = [];

	for (const file of commandFiles) {
		const filePath = path.join(OPENMERCATO_PATH, file);
		const content = fs.readFileSync(filePath, 'utf-8');

		// Extract module name from path
		// e.g., packages/core/src/modules/catalog/commands/products.ts -> catalog
		const moduleMatch = file.match(/modules\/([^/]+)\//);
		if (!moduleMatch) continue;
		const moduleName = moduleMatch[1];

		// Look for registerCommand calls
		// Pattern: registerCommand(createSomethingCommand)
		const registerCommandRegex = /registerCommand\s*\(\s*(\w+)\s*\)/g;
		const commandMatches = [...content.matchAll(registerCommandRegex)];

		for (const match of commandMatches) {
			const commandVarName = match[1];

			// Find the command definition
			// Pattern: const createProductCommand: CommandHandler = {
			//   id: 'catalog.products.create',
			//   ...
			// }
			// More flexible regex to handle various formatting styles
			const commandDefRegex = new RegExp(
				`const\\s+${commandVarName}[^{]*\\{[\\s\\S]*?id:\\s*['"]([^'"]+)['"]`,
				'm',
			);
			const commandDefMatch = content.match(commandDefRegex);

			if (commandDefMatch) {
				const commandId = commandDefMatch[1];
				const parts = commandId.split('.');

				if (parts.length >= 3) {
					const [module, entity, action] = parts;

					// Generate a label from the command ID
					const label = generateLabel(commandId);

					commands.push({
						id: commandId,
						module,
						entity,
						action,
						label,
					});
				}
			} else {
				// Debug: log when we can't find the definition
				console.log(`  ⚠️  Could not find definition for ${commandVarName} in ${file}`);
			}
		}
	}

	console.log(`✅ Discovered ${commands.length} commands`);
	return commands.sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * Discover events by scanning events.ts files
 */
async function discoverEvents(): Promise<EventDefinition[]> {
	console.log('\n📡 Scanning for events...');

	// Scan all packages for event files
	const eventFiles = await glob('packages/*/src/modules/*/events.ts', {
		cwd: OPENMERCATO_PATH,
		ignore: ['**/node_modules/**'],
	});

	console.log(`Found ${eventFiles.length} event files`);

	const events: EventDefinition[] = [];

	for (const file of eventFiles) {
		const filePath = path.join(OPENMERCATO_PATH, file);
		const content = fs.readFileSync(filePath, 'utf-8');

		// Extract module name from path
		const moduleMatch = file.match(/modules\/([^/]+)\//);
		if (!moduleMatch) continue;
		const moduleName = moduleMatch[1];

		// Parse the events array
		// Pattern: const events = [
		//   { id: 'catalog.product.created', label: 'Product Created', entity: 'product', category: 'crud' },
		//   ...
		// ] as const

		const eventsArrayRegex = /const\s+events\s*=\s*\[([\s\S]*?)\]\s*as\s*const/;
		const eventsArrayMatch = content.match(eventsArrayRegex);

		if (eventsArrayMatch) {
			const eventsContent = eventsArrayMatch[1];

			// Parse individual event objects
			// Pattern: { id: 'catalog.product.created', label: 'Product Created', entity: 'product', category: 'crud' }
			const eventObjRegex =
				/\{\s*id:\s*['"]([^'"]+)['"][^}]*label:\s*['"]([^'"]+)['"][^}]*entity:\s*['"]([^'"]+)['"][^}]*category:\s*['"]([^'"]+)['"]([^}]*)\}/g;
			const eventMatches = [...eventsContent.matchAll(eventObjRegex)];

			for (const match of eventMatches) {
				const [, id, label, entity, category, rest] = match;

				const parts = id.split('.');
				const module = parts[0];

				// Check for excludeFromTriggers flag
				const excludeFromTriggers = rest.includes('excludeFromTriggers');

				events.push({
					id,
					module,
					entity,
					category: category as 'crud' | 'lifecycle',
					label,
					excludeFromTriggers,
				});
			}
		}
	}

	console.log(`✅ Discovered ${events.length} events`);
	return events.sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * Generate a human-readable label from command ID
 */
function generateLabel(commandId: string): string {
	const parts = commandId.split('.');
	const action = parts[parts.length - 1];
	const entity = parts[parts.length - 2];

	// Capitalize and format
	const actionLabel = action.charAt(0).toUpperCase() + action.slice(1);
	const entityLabel = entity.charAt(0).toUpperCase() + entity.slice(1);

	return `${actionLabel} ${entityLabel}`;
}

/**
 * Write JSON to file
 */
function writeJsonFile(filePath: string, data: any) {
	const dir = path.dirname(filePath);
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
}

/**
 * Main execution
 */
async function main() {
	try {
		// Discover commands
		const commands = await discoverCommands();

		// Discover events
		const events = await discoverEvents();

		// Write output files
		const outputDir = path.join(__dirname, '..', 'src', 'generated');

		writeJsonFile(path.join(outputDir, 'commands.json'), commands);
		console.log(`\n💾 Wrote ${commands.length} commands to src/generated/commands.json`);

		writeJsonFile(path.join(outputDir, 'events.json'), events);
		console.log(`💾 Wrote ${events.length} events to src/generated/events.json`);

		console.log('\n✨ Discovery complete!');

		// Print summary by module
		console.log('\n📊 Summary:');
		const commandsByModule = commands.reduce(
			(acc, cmd) => {
				acc[cmd.module] = (acc[cmd.module] || 0) + 1;
				return acc;
			},
			{} as Record<string, number>,
		);

		const eventsByModule = events.reduce(
			(acc, evt) => {
				acc[evt.module] = (acc[evt.module] || 0) + 1;
				return acc;
			},
			{} as Record<string, number>,
		);

		console.log('\nCommands by module:');
		Object.entries(commandsByModule)
			.sort(([a], [b]) => a.localeCompare(b))
			.forEach(([module, count]) => {
				console.log(`  ${module}: ${count}`);
			});

		console.log('\nEvents by module:');
		Object.entries(eventsByModule)
			.sort(([a], [b]) => a.localeCompare(b))
			.forEach(([module, count]) => {
				console.log(`  ${module}: ${count}`);
			});
	} catch (error) {
		console.error('❌ Error during discovery:', error);
		process.exit(1);
	}
}

main();
