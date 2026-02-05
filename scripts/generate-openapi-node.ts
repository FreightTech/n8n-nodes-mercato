/**
 * Generate n8n node properties from the OpenMercato OpenAPI spec
 * using @algolia/n8n-openapi-node.
 *
 * The library has a hardcoded filter that only includes paths matching /^\/\d+\//.
 * We work around this by:
 *   1. Pre-processing the spec to prefix all paths with /1/
 *   2. Generating the properties
 *   3. Post-processing to remove the /1/ prefix from routing URLs
 */

import * as fs from 'fs';
import * as path from 'path';
import { generateN8NNodes } from '@algolia/n8n-openapi-node';

const SPEC_URL = 'https://openmercato.freighttech.org/api/docs/openapi';
const SPEC_PATH = path.resolve(__dirname, '../src/generated/openapi.json');
const PROCESSED_SPEC_PATH = path.resolve(__dirname, '../src/generated/openapi-processed.json');
const OUTPUT_PATH = path.resolve(__dirname, '../nodes/OpenMercatoRestApi/properties.ts');

async function downloadSpec(): Promise<void> {
	console.log(`Downloading OpenAPI spec from ${SPEC_URL}...`);
	const response = await fetch(SPEC_URL);
	if (!response.ok) {
		throw new Error(`Failed to download spec: ${response.status} ${response.statusText}`);
	}
	const spec = await response.json();
	fs.writeFileSync(SPEC_PATH, JSON.stringify(spec, null, 2));
	console.log(
		`Spec saved to ${SPEC_PATH} (${(fs.statSync(SPEC_PATH).size / 1024 / 1024).toFixed(1)} MB)`,
	);
}

/**
 * Resolve a $ref string like "#/components/schemas/FooBar" against the spec
 */
function resolveRef(spec: Record<string, unknown>, ref: string): unknown {
	if (!ref.startsWith('#/')) return undefined;
	const parts = ref.slice(2).split('/');
	let current: unknown = spec;
	for (const part of parts) {
		if (current === null || current === undefined || typeof current !== 'object') return undefined;
		current = (current as Record<string, unknown>)[part];
	}
	return current;
}

/**
 * Recursively inline all $ref references in an object.
 * This is needed because the library doesn't fully dereference parameter schemas.
 */
function inlineRefs(
	spec: Record<string, unknown>,
	obj: unknown,
	seen = new Set<string>(),
): unknown {
	if (obj === null || obj === undefined) return obj;

	if (Array.isArray(obj)) {
		return obj.map((item) => inlineRefs(spec, item, seen));
	}

	if (typeof obj === 'object') {
		const record = obj as Record<string, unknown>;

		// If this is a $ref object, resolve it
		if (typeof record['$ref'] === 'string') {
			const refPath = record['$ref'] as string;
			if (seen.has(refPath)) {
				// Circular reference - return as string type to avoid infinite loop
				return { type: 'string', description: `Circular ref: ${refPath}` };
			}
			const resolved = resolveRef(spec, refPath);
			if (resolved !== undefined) {
				seen.add(refPath);
				const result = inlineRefs(spec, resolved, seen);
				seen.delete(refPath);
				return result;
			}
			// Can't resolve - default to string
			return { type: 'string' };
		}

		// Recurse into all properties
		const result: Record<string, unknown> = {};
		for (const [key, value] of Object.entries(record)) {
			result[key] = inlineRefs(spec, value, seen);
		}
		return result;
	}

	return obj;
}

function preprocessSpec(): void {
	console.log('Pre-processing spec...');
	const spec = JSON.parse(fs.readFileSync(SPEC_PATH, 'utf-8'));

	// 1. Inline all $ref references and fix parameter schemas
	console.log('  Resolving $ref references and fixing schemas...');
	let fixCount = 0;
	for (const pathValue of Object.values(spec.paths || {})) {
		const pathObj = pathValue as Record<string, unknown>;
		for (const methodValue of Object.values(pathObj)) {
			if (!methodValue || typeof methodValue !== 'object') continue;
			const op = methodValue as Record<string, unknown>;
			if (Array.isArray(op.parameters)) {
				op.parameters = op.parameters.map((param: Record<string, unknown>) => {
					if (
						!param.schema ||
						(typeof param.schema === 'object' &&
							Object.keys(param.schema as Record<string, unknown>).length === 0)
					) {
						// Empty or missing schema - default to string
						fixCount++;
						return { ...param, schema: { type: 'string' } };
					}
					// Recursively inline all $refs in the schema
					const inlined = inlineRefs(spec, param.schema);
					if (JSON.stringify(inlined) !== JSON.stringify(param.schema)) {
						fixCount++;
					}
					return { ...param, schema: inlined };
				});
			}

			// Also inline $refs in requestBody schemas
			if (op.requestBody && typeof op.requestBody === 'object') {
				op.requestBody = inlineRefs(spec, op.requestBody);
			}
		}
	}
	console.log(`  Fixed ${fixCount} parameter schemas`);

	// 2. Prefix all paths with /1/ so they pass the library's filter
	console.log('  Adding /1/ prefix to paths...');
	const newPaths: Record<string, unknown> = {};
	for (const [pathKey, pathValue] of Object.entries(spec.paths || {})) {
		const newKey = `/1${pathKey}`;
		newPaths[newKey] = pathValue;
	}
	spec.paths = newPaths;

	fs.writeFileSync(PROCESSED_SPEC_PATH, JSON.stringify(spec, null, 2));
	console.log(`  Processed spec saved to ${PROCESSED_SPEC_PATH}`);
}

/**
 * Recursively walk an object and fix any routing URLs by removing the /1 prefix
 */
function removePathPrefix(obj: unknown): unknown {
	if (obj === null || obj === undefined) return obj;

	if (Array.isArray(obj)) {
		return obj.map(removePathPrefix);
	}

	if (typeof obj === 'object') {
		const result: Record<string, unknown> = {};
		for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
			if (key === 'url' && typeof value === 'string' && value.startsWith('=/1/')) {
				// Fix routing URL: =/1/dashboards/... -> =/dashboards/...
				result[key] = '=' + value.slice(3);
			} else {
				result[key] = removePathPrefix(value);
			}
		}
		return result;
	}

	return obj;
}

async function generate(): Promise<void> {
	const forceDownload = process.argv.includes('--download');

	// Download spec if not present or --download flag
	if (!fs.existsSync(SPEC_PATH) || forceDownload) {
		await downloadSpec();
	} else {
		console.log(`Using existing spec at ${SPEC_PATH}`);
	}

	// Pre-process: add /1/ prefix to paths
	preprocessSpec();

	// Generate n8n properties
	console.log('Generating n8n node properties...');
	const properties = await generateN8NNodes(PROCESSED_SPEC_PATH);

	if (!properties || properties.length === 0) {
		throw new Error('No properties generated! Check if the spec is valid.');
	}

	console.log(`Generated ${properties.length} property definitions`);

	// Post-process: remove the /1/ prefix from routing URLs
	const fixedProperties = removePathPrefix(properties);

	// Count resources and operations
	const resourceProp = (
		fixedProperties as Array<{ name: string; options?: Array<{ value: string }> }>
	).find((p) => p.name === 'resource');
	const operationProps = (fixedProperties as Array<{ name: string }>).filter(
		(p) => p.name === 'operation',
	);

	if (resourceProp?.options) {
		console.log(`Resources: ${resourceProp.options.length}`);
		for (const opt of resourceProp.options) {
			console.log(`  - ${opt.value}`);
		}
	}
	console.log(`Operation groups: ${operationProps.length}`);

	// Ensure output directory exists
	const outputDir = path.dirname(OUTPUT_PATH);
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	// Write TypeScript file
	const fileContent = `/* eslint-disable */
/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * Generated from OpenMercato OpenAPI spec using @algolia/n8n-openapi-node
 * Run \`npm run generate:openapi\` to regenerate.
 *
 * Source: ${SPEC_URL}
 * Generated: ${new Date().toISOString()}
 */

import { INodeProperties } from 'n8n-workflow';

const properties: INodeProperties[] = ${JSON.stringify(fixedProperties, null, '\t')};

export default properties;
`;

	fs.writeFileSync(OUTPUT_PATH, fileContent);
	console.log(`\nProperties written to ${OUTPUT_PATH}`);

	// Clean up processed spec
	if (fs.existsSync(PROCESSED_SPEC_PATH)) {
		fs.unlinkSync(PROCESSED_SPEC_PATH);
		console.log('Cleaned up processed spec.');
	}

	console.log('Done!');
}

generate().catch((err) => {
	console.error('Generation failed:', err);
	process.exit(1);
});
