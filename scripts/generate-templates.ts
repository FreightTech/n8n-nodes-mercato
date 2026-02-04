#!/usr/bin/env tsx
/**
 * OpenMercato Template Generator
 *
 * Generates basic message templates for commands based on discovered commands.
 * For now, provides generic templates. In the future, this could be enhanced
 * to parse Zod schemas and generate more accurate templates.
 *
 * Outputs:
 * - src/generated/templates.json
 */

import * as fs from 'fs';
import * as path from 'path';

interface CommandDefinition {
	id: string;
	module: string;
	entity: string;
	action: string;
	label: string;
}

/**
 * Generate a basic template for a command
 */
function generateTemplate(command: CommandDefinition): any {
	const { action, entity } = command;

	// Base template with common fields
	const template: any = {
		tenantId: '00000000-0000-0000-0000-000000000000',
		organizationId: '00000000-0000-0000-0000-000000000000',
	};

	// Add entity-specific fields based on action
	if (action === 'create') {
		// Create operations typically need all required fields
		template._comment = `Create ${entity} - Add required fields here`;

		// Add common create fields
		if (entity === 'product' || entity === 'products') {
			template.title = `Example ${entity}`;
			template.sku = 'EXAMPLE-001';
			template.productType = 'STANDARD';
			template.isActive = true;
		} else if (entity === 'user' || entity === 'users') {
			template.email = 'user@example.com';
			template.name = 'John Doe';
		} else if (entity === 'customer' || entity === 'customers' || entity === 'people') {
			template.email = 'customer@example.com';
			template.name = 'Jane Customer';
		} else {
			template.name = `Example ${entity}`;
		}
	} else if (action === 'update') {
		// Update operations need ID + fields to update
		template.id = '00000000-0000-0000-0000-000000000000';
		template._comment = `Update ${entity} - Add fields to update`;
		template.name = `Updated ${entity}`;
	} else if (action === 'delete') {
		// Delete operations typically just need ID
		template.id = '00000000-0000-0000-0000-000000000000';
	} else {
		// Generic template
		template._comment = `${action} ${entity} - Add required fields`;
	}

	return template;
}

/**
 * Main execution
 */
async function main() {
	try {
		console.log('🔧 Generating command templates...');

		// Read discovered commands
		const commandsPath = path.join(__dirname, '..', 'src', 'generated', 'commands.json');

		if (!fs.existsSync(commandsPath)) {
			console.error('❌ Error: commands.json not found.');
			console.error('Run `npm run discover` first to discover commands.');
			process.exit(1);
		}

		const commands: CommandDefinition[] = JSON.parse(fs.readFileSync(commandsPath, 'utf-8'));

		console.log(`Found ${commands.length} commands`);

		// Generate templates
		const templates: Record<string, any> = {};

		for (const command of commands) {
			templates[command.id] = generateTemplate(command);
		}

		// Write output file
		const outputPath = path.join(__dirname, '..', 'src', 'generated', 'templates.json');
		fs.writeFileSync(outputPath, JSON.stringify(templates, null, 2) + '\n', 'utf-8');

		console.log(`✅ Generated ${Object.keys(templates).length} templates`);
		console.log(`💾 Wrote templates to src/generated/templates.json`);
		console.log('\n✨ Template generation complete!');
		console.log('\n📝 Note: Templates are generic. Customize them based on actual Zod schemas.');
	} catch (error) {
		console.error('❌ Error generating templates:', error);
		process.exit(1);
	}
}

main();
