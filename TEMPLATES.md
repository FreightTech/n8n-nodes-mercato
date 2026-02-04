# Command Templates Guide

## Overview

The **OpenMercato Command** node includes a built-in template retrieval feature that helps you discover the structure and required fields for any command.

## How to Use Templates

### Step 1: Get a Template

1. **Add** OpenMercato Command node to your workflow
2. **Select Operation:** "Get Template"
3. **Choose Command:** Select the command you want to use (e.g., `auth.users.create`)
4. **Select Format:**
   - **Input Only** - Just the payload (recommended for most cases)
   - **Full Envelope** - Complete message with tenantId/organizationId wrapper
5. **Execute** the node

### Step 2: View the Template

The node output will show:

```json
{
	"commandId": "auth.users.create",
	"template": {
		"email": "user@example.com",
		"name": "John Doe",
		"_comment": "Create users - Add required fields here"
	},
	"subject": "inbound.auth.users.create",
	"note": "Copy the template object above to use in Command Input field"
}
```

### Step 3: Copy & Use the Template

1. **Copy** the `template` value from the output
2. **Switch Operation** back to "Execute Command"
3. **Paste** the template into the "Command Input" field
4. **Modify** the values to match your needs
5. **Execute** to send the command

## Template Formats

### Input Only (Recommended)

Returns just the payload that goes in the `input` field:

```json
{
	"email": "user@example.com",
	"name": "John Doe",
	"roles": ["admin"]
}
```

**Use this when:** You want to copy directly to Command Input field.

### Full Envelope

Returns the complete message structure:

```json
{
	"input": {
		"email": "user@example.com",
		"name": "John Doe"
	},
	"tenantId": "your-tenant-id",
	"organizationId": "your-org-id"
}
```

**Use this when:** You want to see the complete message that will be sent to NATS.

## Template Contents

### What's Included

Templates include:

- ✅ **Common required fields** (id, name, email, etc.)
- ✅ **Placeholder values** for reference
- ✅ **Comments** describing the command purpose
- ✅ **tenantId/organizationId** placeholders

### What's Not Included

Templates are **basic examples** and may not include:

- ⚠️ All possible fields (only common ones)
- ⚠️ Complex nested structures
- ⚠️ Module-specific custom fields
- ⚠️ Validation rules or constraints

### Enhancing Templates

You can enhance templates by:

1. Looking at OpenMercato command definitions
2. Checking command Zod schemas
3. Testing with minimal fields first
4. Adding fields incrementally

## Examples

### Example 1: Create a User

**Get Template:**

```
Operation: Get Template
Command: auth.users.create
Format: Input Only
```

**Output:**

```json
{
	"template": {
		"email": "user@example.com",
		"name": "John Doe",
		"_comment": "Create users - Add required fields here"
	}
}
```

**Use in Execute Command:**

```json
{
	"email": "alice@example.com",
	"name": "Alice Smith",
	"roles": ["viewer"],
	"password": "secure-password-123"
}
```

### Example 2: Update an Organization

**Get Template:**

```
Operation: Get Template
Command: directory.organizations.update
Format: Input Only
```

**Output:**

```json
{
	"template": {
		"id": "00000000-0000-0000-0000-000000000000",
		"name": "Updated organizations",
		"_comment": "Update organizations - Add fields to update"
	}
}
```

**Use in Execute Command:**

```json
{
	"id": "550e8400-e29b-41d4-a716-446655440000",
	"name": "Acme Corp",
	"website": "https://acme.com"
}
```

### Example 3: See Full Message Envelope

**Get Template:**

```
Operation: Get Template
Command: catalog.products.create
Format: Full Envelope
```

**Output:**

```json
{
	"template": {
		"input": {
			"name": "Example Product",
			"sku": "PROD-001",
			"_comment": "Create products - Add required fields here"
		},
		"tenantId": "your-tenant-id",
		"organizationId": "your-org-id"
	}
}
```

This shows exactly what OpenMercato will receive on the NATS subject `inbound.catalog.products.create`.

## Workflow Pattern

### Recommended Development Workflow

```
1. Get Template → View structure
2. Copy template → Understand fields
3. Execute Command → Test with real data
4. Iterate → Refine payload
```

### Using with Expression Editor

You can combine templates with n8n expressions:

```json
{
	"email": "{{ $json.email }}",
	"name": "{{ $json.firstName }} {{ $json.lastName }}",
	"roles": "{{ $json.roles.split(',') }}"
}
```

### Using with Previous Node Data

Default `commandInput` value is `={{ $json }}` which uses output from previous node:

**Previous Node Output:**

```json
{
	"email": "bob@example.com",
	"name": "Bob Johnson"
}
```

**Command Node:** Will automatically use this data.

## Tips & Best Practices

### 💡 Development Tips

1. **Start with templates** - Always get the template first to see structure
2. **Test minimal fields** - Start with required fields, add optional ones later
3. **Use Manual Trigger** - Test template retrieval without workflow execution
4. **Check comments** - Template `_comment` fields explain the command purpose
5. **Compare formats** - Use both formats to understand full message structure

### ⚡ Production Tips

1. **Remove comments** - `_comment` fields are not needed in actual commands
2. **Validate data** - Ensure required fields are present before execution
3. **Handle errors** - Use "Continue on Fail" for batch operations
4. **Log payloads** - Keep audit trail of commands sent

### 🔍 Troubleshooting

**Template shows generic placeholders:**

- Templates are auto-generated with basic fields
- Check OpenMercato command definition for complete field list
- Add fields based on your requirements

**Template has wrong field names:**

- Template generation is basic - verify against OpenMercato docs
- Report mismatches so they can be corrected

**No template available:**

- Returns generic placeholder template
- Check if command exists in `src/generated/commands.json`
- Run `npm run refresh:metadata` to update

## Regenerating Templates

Templates are generated during discovery:

```bash
# Regenerate from OpenMercato source
npm run refresh:metadata -- --path /path/to/openmercato

# Just regenerate templates (if commands.json exists)
npm run generate:templates

# Rebuild nodes
npm run build
```

## Template Generation Logic

Templates are generated by `scripts/generate-templates.ts`:

1. **Scans** `commands.json` for all commands
2. **Creates** basic template with common fields:
   - `tenantId`, `organizationId` for all commands
   - `id` for update/delete commands
   - `name` for create commands
   - `_comment` with command description
3. **Saves** to `src/generated/templates.json`

### Enhancing Template Generation

You can enhance the generator to:

- Parse Zod schemas for accurate field types
- Include nested objects and arrays
- Add field descriptions and constraints
- Use actual OpenMercato examples

See `scripts/generate-templates.ts` for details.

## API Reference

### Get Template Operation

**Parameters:**

| Field             | Type    | Description                     |
| ----------------- | ------- | ------------------------------- |
| `Operation`       | options | Select "Get Template"           |
| `Command`         | options | Command ID to get template for  |
| `Template Format` | options | "Input Only" or "Full Envelope" |

**Output:**

```json
{
	"commandId": "string",
	"template": "object",
	"subject": "string",
	"note": "string"
}
```

**Output Fields:**

- `commandId` - The command ID selected
- `template` - The template object (format depends on Template Format)
- `subject` - The NATS subject that will be used
- `note` - Helpful note about using the template

## Support

If templates are missing or incorrect:

1. **Check** if command exists in dropdown
2. **Run** discovery: `npm run refresh:metadata`
3. **Verify** `src/generated/templates.json` has entry
4. **Report** issues for missing/incorrect templates

---

**Last updated:** 2026-02-04  
**Version:** 0.1.0
