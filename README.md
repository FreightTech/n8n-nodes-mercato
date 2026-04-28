# n8n-nodes-openmercato

This is an n8n community node package for **OpenMercato** integration. It provides nodes for interacting with the OpenMercato REST API, sending commands, and consuming/publishing events through NATS messaging.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Features

This package includes four nodes for OpenMercato:

### 1. OpenMercato REST API

Interact with the OpenMercato REST API using auto-generated operations from the OpenAPI spec.

- **366 API endpoints** across 24 resource groups
- **Declarative HTTP node** -- no custom code needed, uses n8n's built-in routing
- **Bearer token authentication** via API keys
- **Auto-generated from OpenAPI spec** using [@algolia/n8n-openapi-node](https://www.npmjs.com/package/@algolia/n8n-openapi-node)

**Available resources:** Authentication & Accounts, Directory, Configuration, Audit & Action Logs, Attachments, API Keys, Onboarding, Business Rules, Feature Toggles, Workflows, Search, Currencies, Notifications, AI Assistant, Contractors, FMS Quotes & Offers, FMS Locations, FMS Products, FMS Documents, FMS Projects, FMS Financials, FMS Teams, Transports, Email Templates

### 2. OpenMercato Command

Send commands to OpenMercato via NATS JetStream.

- **250+ discovered commands** from all modules (auth, catalog, customers, sales, etc.)
- **Auto-populated templates** for each command
- **Automatic subject routing** with `inbound.` prefix
- **Tenant and organization scoping** from credentials

### 3. OpenMercato Event Consumer (Trigger)

Subscribe to OpenMercato events in real-time.

- **Subscribe to specific events** or custom subject patterns
- **Tenant-scoped subscriptions** (automatic prefix: `{tenantId}.{event}`)
- **Wildcard support** for flexible event matching (`*` and `>`)
- **Queue groups** for load balancing across multiple n8n instances
- **Best-effort JSON parsing** with graceful error handling

### 4. OpenMercato Event Publisher

Publish events to OpenMercato.

- **Publish to known events** or custom event identifiers
- **Automatic tenant prefixing** from credentials
- **Custom headers** support
- **Reliable delivery** via NATS Core

---

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Manual Installation

```bash
# Navigate to your n8n custom nodes folder
cd ~/.n8n/custom

# Clone this repository
git clone https://github.com/freighttech/n8n-nodes-openmercato.git

# Install dependencies
cd n8n-nodes-openmercato
npm install

# Build the nodes
npm run build
```

---

## Configuration

### Credentials

This package provides two credential types for different communication methods.

#### OpenMercato REST API Credentials

Used by the **OpenMercato REST API** node for HTTP API access.

1. In n8n, create new **OpenMercato REST API** credentials
2. Configure the following fields:

| Field         | Description                               | Required |
| ------------- | ----------------------------------------- | -------- |
| **Base URL**  | Base URL of the OpenMercato instance      | Yes      |
| **API Token** | Bearer token (API key) for authentication | Yes      |

**Example:**

```
Base URL: https://openmercato.freighttech.org
API Token: your-api-key-here
```

#### OpenMercato API Credentials (NATS)

Used by the **Command**, **Event Consumer**, and **Event Publisher** nodes for NATS messaging.

1. In n8n, create new **OpenMercato API** credentials
2. Configure the following fields:

| Field                   | Description                                                 | Required |
| ----------------------- | ----------------------------------------------------------- | -------- |
| **NATS Server URLs**    | Comma-separated list of NATS server URLs                    | Yes      |
| **Tenant ID**           | Your OpenMercato tenant ID (e.g., `acme-corp` or UUID)      | Yes      |
| **Organization ID**     | Default organization ID for commands                        | No       |
| **Authentication Type** | Choose: None, Credentials File, Username/Password, or Token | Yes      |

**Example Configuration:**

```
NATS Server URLs: nats://localhost:4222
Tenant ID: acme-corp
Organization ID: 550e8400-e29b-41d4-a716-446655440000
Authentication Type: Credentials File
```

For **Synadia Cloud**:

```
NATS Server URLs: tls://connect.ngs.global
Authentication Type: Credentials File
(Paste your .creds file content)
```

---

## Usage

### OpenMercato REST API Node

**Purpose:** Call any OpenMercato REST API endpoint directly from n8n.

**Example Workflow:**

```
Schedule Trigger → OpenMercato REST API (List Companies) → Spreadsheet File → Send Email
```

**Configuration:**

1. **Resource:** Select from 24 resource groups (e.g., Customers, FMS Projects, Transports)
2. **Operation:** Select the specific API operation (e.g., List companies, Create deal)
3. **Parameters:** Fill in any required/optional query parameters and request body fields

The node uses n8n's declarative HTTP routing -- all parameters, request bodies, and headers are automatically mapped from the OpenAPI spec.

---

### OpenMercato Command Node

**Purpose:** Execute commands in OpenMercato

**Example Workflow:**

```
HTTP Request → OpenMercato Command → Send Notification
```

**Configuration:**

1. **Select Command:** Choose from 250+ discovered commands (e.g., `catalog.products.create`)
2. **Command Input:** Provide the command payload (templates are auto-populated)
3. **Organization ID:** Override default from credentials (optional)

**Example Command Input:**

```json
{
	"title": "New Product",
	"sku": "PROD-001",
	"productType": "STANDARD",
	"isActive": true
}
```

The node automatically wraps your input with required fields:

```json
{
	"input": {
		/* your payload */
	},
	"tenantId": "acme-corp",
	"organizationId": "uuid..."
}
```

**Output:**

```json
{
	"success": true,
	"commandId": "catalog.products.create",
	"subject": "inbound.catalog.products.create",
	"sequence": 12345,
	"stream": "INBOUND_COMMANDS",
	"timestamp": "2024-02-04T10:00:00.000Z"
}
```

---

### OpenMercato Event Consumer (Trigger)

**Purpose:** Listen for events from OpenMercato

**Example Workflow:**

```
OpenMercato Event Consumer → Process Data → Save to Database
```

**Configuration:**

1. **Event Source:** Choose "Select from List" or "Custom Subject Pattern"
2. **Event:** Select an event (e.g., `catalog.product.created`)
3. **Queue Group:** Optional - for load balancing across multiple n8n instances

**Wildcard Examples:**

- `catalog.>` - All catalog events
- `catalog.product.*` - All product-related events (created, updated, deleted)
- `sales.orders.created` - Specific event

**Output:**

```json
{
	"event": "events.acme-corp.catalog.product.created",
	"data": {
		"id": "uuid...",
		"title": "New Product",
		"sku": "PROD-001",
		"tenantId": "acme-corp",
		"organizationId": "uuid...",
		"timestamp": "2024-02-04T10:00:00.000Z"
	},
	"headers": {
		"content-type": "application/json"
	},
	"metadata": {
		"subject": "events.acme-corp.catalog.product.created",
		"tenantId": "acme-corp",
		"eventId": "catalog.product.created",
		"receivedAt": "2024-02-04T10:00:00.000Z"
	}
}
```

---

### OpenMercato Event Publisher

**Purpose:** Publish events to OpenMercato

**Example Workflow:**

```
Webhook → Transform Data → OpenMercato Event Publisher → Success Response
```

**Configuration:**

1. **Event Source:** Choose "Select from List" or "Custom Event"
2. **Event:** Select or enter event identifier
3. **Event Data:** Provide the event payload

**Example Event Data:**

```json
{
	"id": "integration-123",
	"status": "completed",
	"timestamp": "2024-02-04T10:00:00.000Z",
	"data": {
		"recordsProcessed": 150
	}
}
```

**Output:**

```json
{
	"success": true,
	"eventId": "custom.integration.completed",
	"subject": "events.acme-corp.custom.integration.completed",
	"timestamp": "2024-02-04T10:00:00.000Z"
}
```

---

## NATS Subject Patterns

### Commands

Commands are published to JetStream with the `inbound.` prefix:

```
inbound.catalog.products.create
inbound.sales.orders.update
inbound.auth.users.delete
```

### Events

Events are published and consumed with tenant-scoping and the `events.` prefix:

```
events.{tenantId}.{eventId}

Examples:
  events.acme-corp.catalog.product.created
  events.acme-corp.sales.order.completed
  events.uuid-123.custom.integration.event
```

---

## Refreshing Metadata

### REST API Node (OpenAPI)

The REST API node properties are auto-generated from the OpenMercato OpenAPI spec.

```bash
# Regenerate from cached spec
npm run generate:openapi

# Force re-download the spec and regenerate
npm run generate:openapi -- --download

# Point different instance, filter module
npm run generate:openapi -- --url https://fms.infshipping.freighttech.org/api/docs/openapi --filter "fms"
```

This will:

1. Download the OpenAPI spec from `https://openmercato.freighttech.org/api/docs/openapi`
2. Pre-process the spec (resolve `$ref` references, apply compatibility fixes)
3. Generate n8n node properties using `@algolia/n8n-openapi-node`
4. Write the output to `nodes/OpenMercatoRestApi/properties.ts`

**When to regenerate:**

- After OpenMercato API endpoints are added or changed
- After updating the `@algolia/n8n-openapi-node` dependency

### Command/Event Metadata (NATS)

The Command and Event nodes use metadata discovered from the OpenMercato codebase.

```bash
# Discover commands and events
npm run discover -- --path /path/to/openmercato

# Alias
npm run refresh:metadata -- --path /path/to/openmercato
```

This will:

1. Scan OpenMercato codebase for registered commands
2. Extract event definitions from modules
3. Update `src/generated/commands.json` and `src/generated/events.json`

**When to refresh:**

- After adding new commands to OpenMercato
- After adding new events to OpenMercato
- After updating command input schemas

---

## Development

### Project Structure

```
n8n-nodes-openmercato/
├── credentials/
│   ├── OpenMercatoApi/             # NATS credentials (commands/events)
│   └── OpenMercatoRestApi/         # REST API credentials (HTTP/Bearer)
├── nodes/
│   ├── OpenMercatoCommand/         # Send commands via NATS
│   ├── OpenMercatoEventConsumer/   # Subscribe to events (trigger)
│   ├── OpenMercatoEventPublisher/  # Publish events via NATS
│   └── OpenMercatoRestApi/         # REST API node (auto-generated)
│       ├── OpenMercatoRestApi.node.ts
│       └── properties.ts           # Generated from OpenAPI spec
├── utils/
│   ├── MetadataLoader.ts           # Load commands/events metadata
│   ├── OpenMercatoConnection.ts    # NATS connection helpers
│   └── NodeLogger.ts               # Logging utilities
├── scripts/
│   ├── discover-commands-events.ts # NATS command/event discovery
│   └── generate-openapi-node.ts    # OpenAPI → n8n properties generator
├── src/generated/                  # Auto-generated metadata
│   ├── commands.json
│   ├── events.json
│   └── openapi.json                # Cached OpenAPI spec
└── icons/
    └── openmercato.svg
```

### Build & Test

```bash
# Install dependencies
npm install

# Run linter
npm run lint

# Build
npm run build

# Watch mode (development)
npm run dev

# Run tests
npm test
```

---

## Compatibility

- **Minimum n8n version:** 1.82.0
- **Node.js:** 18.x, 20.x
- **NATS Server:** 2.10.x+ (JetStream support required for commands)
- **OpenMercato:** Compatible with current messaging architecture

---

## Troubleshooting

### Commands not appearing in dropdown

**Solution:** Run `npm run refresh:metadata` to discover commands from OpenMercato.

### Connection errors

**Solution:** Check NATS server URLs and authentication credentials. For Synadia Cloud, ensure you're using `tls://connect.ngs.global`.

### Events not being received

**Solution:** Verify your tenant ID is correct. Events are tenant-scoped: `{tenantId}.{eventPattern}`.

### Icon not showing

**Solution:** Restart n8n after installing or updating the package.

---

## Resources

- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)
- [OpenMercato Documentation](https://github.com/freighttech/openmercato)
- [NATS Documentation](https://docs.nats.io)
- [NATS JetStream Guide](https://docs.nats.io/nats-concepts/jetstream)

---

## License

MIT

---

## Support

For issues and questions:

- **GitHub Issues:** [https://github.com/freighttech/n8n-nodes-openmercato/issues](https://github.com/freighttech/n8n-nodes-openmercato/issues)
- **OpenMercato Community:** Contact FreightTech team

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Changelog

### 0.3.0

- **NEW**: OpenMercato REST API node with 366 endpoints across 24 resources, auto-generated from the OpenAPI spec using `@algolia/n8n-openapi-node`
- **NEW**: OpenMercato REST API credentials with Bearer token authentication and connection testing
- **NEW**: `npm run generate:openapi` script to regenerate node properties from the OpenAPI spec

### 0.1.0 (Initial Release)

- **NEW**: OpenMercato Command node with 250+ discovered commands
- **NEW**: OpenMercato Event Consumer trigger with tenant-scoped subscriptions
- **NEW**: OpenMercato Event Publisher with automatic tenant prefixing
- **NEW**: Discovery scripts for commands and events
- **NEW**: Auto-generated message templates
