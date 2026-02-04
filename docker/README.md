# Docker Setup for Testing n8n-nodes-openmercato

This Docker Compose setup allows you to quickly test the OpenMercato n8n nodes in a containerized n8n instance.

## Quick Start

### 1. Build the Nodes

```bash
npm run build
```

This compiles TypeScript and prepares the `dist/` directory.

### 2. Start n8n

```bash
docker-compose up -d
```

### 3. Access n8n

Open your browser and navigate to: **http://localhost:5678**

On first launch, you'll need to create an owner account.

### 4. Verify Nodes Are Loaded

1. Click **"+"** to add a new node
2. Search for **"OpenMercato"**
3. You should see three nodes:
   - **OpenMercato Command**
   - **OpenMercato Event Consumer**
   - **OpenMercato Event Publisher**

## Configuration

### Create OpenMercato Credentials

1. Go to **Credentials** → **Create New**
2. Select **"OpenMercato API"**
3. Configure the connection:

```yaml
NATS Server URLs: nats://your-server:4222
Tenant ID: your-tenant-id
Organization ID: your-org-id (optional)
Authentication Method: [Select your method]
  - None (for local NATS)
  - Credentials File (.creds)
  - Username/Password
  - Token
```

**Example for local NATS:**

```
NATS Server URLs: nats://host.docker.internal:4222
Tenant ID: test-tenant
Authentication: None
```

**Example for Synadia Cloud:**

```
NATS Server URLs: tls://connect.ngs.global
Tenant ID: acme-corp
Authentication: Credentials File
  - Upload your .creds file
```

### Environment Variables

The `docker-compose.yml` includes these environment variables:

- `N8N_CUSTOM_EXTENSIONS=/home/node/.n8n/custom` - Custom nodes directory
- `N8N_LOG_LEVEL=debug` - Detailed logging for troubleshooting
- `N8N_BASIC_AUTH_ACTIVE=false` - No basic auth (for easy testing)
- `N8N_PORT=5678` - Web UI port

To modify, edit `docker-compose.yml` and restart:

```bash
docker-compose restart n8n
```

## Testing the Nodes

### Test OpenMercato Command Node

1. Create a new workflow
2. Add **OpenMercato Command** node
3. Select your credentials
4. Choose a command from the dropdown (e.g., `catalog.products.create`)
5. Fill in the JSON payload
6. Execute the workflow
7. Verify the command was sent to JetStream

### Test OpenMercato Event Consumer

1. Create a new workflow with **OpenMercato Event Consumer** trigger
2. Select your credentials
3. Set the subject pattern:
   - `catalog.>` - All catalog events
   - `catalog.product.created` - Specific event
4. Add processing nodes (e.g., Set, HTTP Request)
5. **Activate** the workflow
6. Publish an event from OpenMercato
7. Check workflow executions

### Test OpenMercato Event Publisher

1. Create a workflow with **OpenMercato Event Publisher** node
2. Select your credentials
3. Choose an event from dropdown or enter custom event ID
4. Provide the event payload
5. Execute the workflow
6. Verify event was published with tenant prefix

## Development Workflow

### Making Changes to Nodes

When you modify the node code:

```bash
# 1. Rebuild the nodes
npm run build

# 2. Restart n8n to reload
docker-compose restart n8n

# 3. Check logs if issues occur
docker-compose logs -f n8n
```

### Refreshing Metadata

After OpenMercato code changes (new commands/events):

```bash
# 1. Discover new commands/events
npm run refresh:metadata -- --path /path/to/openmercato

# 2. Rebuild
npm run build

# 3. Restart n8n
docker-compose restart n8n
```

## Useful Commands

### View Logs

```bash
# Follow n8n logs
docker-compose logs -f n8n

# Last 100 lines
docker-compose logs --tail=100 n8n
```

### Check Mounted Files

```bash
# List mounted node files
docker-compose exec n8n ls -la /home/node/.n8n/custom/n8n-nodes-openmercato

# Check if package.json exists
docker-compose exec n8n cat /home/node/.n8n/custom/n8n-nodes-openmercato/package.json
```

### Access Container Shell

```bash
docker-compose exec n8n sh
```

### Restart Services

```bash
# Restart n8n
docker-compose restart n8n

# Stop all services
docker-compose stop

# Start all services
docker-compose start

# Recreate containers
docker-compose up -d --force-recreate
```

### Clean Up

```bash
# Stop and remove containers
docker-compose down

# Stop and remove containers + volumes (DELETES ALL DATA)
docker-compose down -v

# Remove just the n8n container
docker-compose rm -f n8n
```

## Data Persistence

### Volumes

The setup uses a named Docker volume: `n8n_openmercato_data`

This persists:

- Workflows
- Credentials
- Execution history
- Settings

### Backup Workflows

To export workflows:

1. In n8n UI, go to **Workflows**
2. Click **"..."** → **Download**
3. Save JSON file

Or use CLI:

```bash
# Export all workflows
docker-compose exec n8n n8n export:workflow --all --output=/data/backup.json

# Copy to host
docker cp n8n-openmercato-test:/data/backup.json ./workflows-backup.json
```

### Reset to Fresh State

To start with a clean n8n instance:

```bash
docker-compose down -v
docker-compose up -d
```

## Troubleshooting

### Nodes Not Appearing

**Check if dist/ is mounted:**

```bash
docker-compose exec n8n ls -la /home/node/.n8n/custom/n8n-nodes-openmercato
```

**Verify package.json exists:**

```bash
docker-compose exec n8n cat /home/node/.n8n/custom/n8n-nodes-openmercato/package.json
```

**Check n8n logs:**

```bash
docker-compose logs -f n8n
```

**Rebuild and restart:**

```bash
npm run build
docker-compose restart n8n
```

### Connection Issues to NATS

**From container to host machine:**

Use `host.docker.internal` instead of `localhost`:

```
nats://host.docker.internal:4222
```

**From container to another container:**

If NATS is in Docker, use the service name:

```
nats://nats-server:4222
```

**Check network connectivity:**

```bash
docker-compose exec n8n ping host.docker.internal
docker-compose exec n8n nc -zv host.docker.internal 4222
```

### Permission Issues

If you see permission errors:

```bash
# Fix dist/ permissions
chmod -R 755 dist/

# Restart
docker-compose restart n8n
```

### Port Already in Use

If port 5678 is taken:

Edit `docker-compose.yml`:

```yaml
ports:
  - '8080:5678' # Use port 8080 instead
```

Then restart:

```bash
docker-compose down
docker-compose up -d
```

### Viewing n8n Database

n8n uses SQLite by default. To inspect:

```bash
# Copy database to host
docker cp n8n-openmercato-test:/home/node/.n8n/database.sqlite ./database.sqlite

# View with sqlite3
sqlite3 database.sqlite
```

## Architecture

```
┌─────────────────────────────────────────┐
│          Host Machine                    │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  n8n-nodes-mercato/                │ │
│  │                                    │ │
│  │  ├── dist/  (built nodes)         │ │
│  │  │   ├── nodes/                   │ │
│  │  │   ├── credentials/             │ │
│  │  │   └── package.json             │ │
│  │  │                                │ │
│  │  └── docker-compose.yml           │ │
│  └──────────────┬─────────────────────┘ │
│                 │ mount (read-only)     │
│                 ▼                       │
│  ┌────────────────────────────────────┐ │
│  │  Docker Container: n8n             │ │
│  │                                    │ │
│  │  /home/node/.n8n/                 │ │
│  │  ├── custom/                       │ │
│  │  │   └── n8n-nodes-openmercato/   │ │
│  │  │       (mounted from ./dist)    │ │
│  │  │                                │ │
│  │  └── [workflows, credentials]     │ │
│  │      (persisted in volume)        │ │
│  │                                    │ │
│  │  Port 5678 → localhost:5678       │ │
│  └────────────────────────────────────┘ │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  Docker Volume:                    │ │
│  │  n8n_openmercato_data             │ │
│  │                                    │ │
│  │  (persistent storage)              │ │
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

## Production Considerations

This setup is for **testing and development only**. For production:

1. **Use PostgreSQL** instead of SQLite
2. **Enable authentication** (`N8N_BASIC_AUTH_ACTIVE=true`)
3. **Use HTTPS** with proper certificates
4. **Set webhook URL** (`WEBHOOK_URL`)
5. **Install nodes properly** via npm/package
6. **Configure backups** for workflows and credentials
7. **Use secrets management** for credentials
8. **Set resource limits** in docker-compose.yml

## Additional Resources

- [n8n Documentation](https://docs.n8n.io/)
- [NATS Documentation](https://docs.nats.io/)
- [OpenMercato Nodes README](../README.md)
- [OpenMercato Nodes Implementation Guide](../IMPLEMENTATION_SUMMARY.md)

## Support

For issues with:

- **n8n itself**: Check [n8n docs](https://docs.n8n.io/) or [forum](https://community.n8n.io/)
- **OpenMercato nodes**: See project README and CLAUDE.md
- **Docker setup**: Review this file or Docker Compose logs
