# n8n-nodes-openmercato Project Guide

## Project Overview

This package provides specialized n8n nodes for OpenMercato integration via NATS messaging. It includes nodes for sending commands, consuming events, and publishing events.

## Documentation Notes

- NATS.js documentation: https://nats-io.github.io/nats.js/
- OpenMercato messaging uses tenant-scoped subjects and JetStream for commands

## Project Structure

```
n8n-nodes-openmercato/
├── credentials/
│   └── OpenMercatoApi/          # OpenMercato NATS credentials
├── nodes/
│   ├── OpenMercatoCommand/      # Send commands to OpenMercato
│   ├── OpenMercatoEventConsumer/ # Subscribe to events (trigger)
│   └── OpenMercatoEventPublisher/ # Publish events
├── utils/
│   ├── MetadataLoader.ts        # Load commands/events metadata
│   ├── OpenMercatoConnection.ts # NATS connection management
│   └── NodeLogger.ts            # Logging wrapper
├── scripts/
│   └── discover-commands-events.ts # Scan OpenMercato for commands/events
├── src/generated/               # Auto-generated metadata
│   ├── commands.json
│   └── events.json
└── icons/
    └── openmercato.svg
```

## Key Commands

### Development

```bash
npm run dev          # Watch mode for development
npm run build        # Build TypeScript and copy assets
npm run lint         # Run ESLint
npm run test         # Run tests
```

### Discovery & Metadata

```bash
# Discover commands and events from OpenMercato
npm run discover -- --path /path/to/openmercato

# Alias for discover
npm run refresh:metadata -- --path /path/to/openmercato
```

## Important Conventions

### 1. OpenMercato Messaging Patterns

**Commands:**

- Published to JetStream `INBOUND_COMMANDS` stream
- Subject pattern: `inbound.{commandId}`
- Example: `inbound.catalog.products.create`

**Events:**

- Published/consumed via Core NATS
- Tenant-scoped: `{tenantId}.{eventId}`
- Example: `acme-corp.catalog.product.created`

### 2. Node Development

- All nodes extend `INodeType`
- Use `NodeConnectionType.Main` for inputs/outputs
- Trigger nodes must implement `ITriggerResponse`
- Always validate tenant ID in credentials
- Use `OpenMercatoConnection` utilities

### 3. Credentials

The `OpenMercatoApi` credentials require:

- **NATS Server URLs** (comma-separated)
- **Tenant ID** (required for event scoping)
- **Organization ID** (optional default for commands)
- **Authentication** (None, Creds File, Username/Password, or Token)

### 4. Message Formats

**Command Envelope:**

```json
{
	"input": {
		/* user payload */
	},
	"tenantId": "acme-corp",
	"organizationId": "uuid..."
}
```

**Event Output:**

```json
{
	"event": "acme-corp.catalog.product.created",
	"data": {
		/* payload */
	},
	"metadata": {
		"tenantId": "acme-corp",
		"eventId": "catalog.product.created"
	}
}
```

### 5. Discovery System

Commands and events are auto-discovered from OpenMercato:

- Run `npm run refresh:metadata -- --path /path/to/openmercato` after OpenMercato changes
- Scans TypeScript source files for `registerCommand()` calls
- Extracts event definitions from `events.ts` files

## Common Tasks

### Adding Support for New Commands

1. No code changes needed
2. Run: `npm run refresh:metadata -- --path /path/to/openmercato`
3. The command appears in dropdown automatically

### Testing Locally

```bash
npm run build
npm link
# In n8n: npm link n8n-nodes-openmercato
# Restart n8n
```

## Troubleshooting

### Commands not in dropdown

- Run `npm run refresh:metadata -- --path /path/to/openmercato`
- Check `src/generated/commands.json` has content
- Rebuild: `npm run build`

### Events not being received

- Verify tenant ID matches published messages
- Check subject pattern includes tenant: `{tenantId}.{eventPattern}`
- Use wildcards for broad matching: `catalog.>`

### Connection errors

- Verify NATS server URLs and authentication
- For Synadia Cloud: use `tls://connect.ngs.global`
- Ensure tenant ID is set in credentials

### Icons not showing

- Restart n8n after installing/updating
- Verify `icons/openmercato.svg` exists

## Version History

### 0.1.0 (Initial Release)

- OpenMercato Command node
- OpenMercato Event Consumer trigger
- OpenMercato Event Publisher node
- Discovery scripts for commands and events
- Comprehensive documentation
