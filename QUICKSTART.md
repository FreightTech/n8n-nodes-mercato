# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Start n8n with OpenMercato Nodes

```bash
docker-compose up -d
```

### 2. Access n8n

Open your browser: **http://localhost:5678**

Create your owner account on first launch.

### 3. Verify Nodes Are Available

1. Click **"+"** to add a node
2. Search for **"OpenMercato"**
3. You should see:
   - ✅ **OpenMercato Command**
   - ✅ **OpenMercato Event Consumer** (trigger)
   - ✅ **OpenMercato Event Publisher**

---

## 📝 Create Credentials

Before using the nodes, create OpenMercato API credentials:

1. Go to **Credentials** → **Create New**
2. Select **"OpenMercato API"**
3. Configure:

```yaml
NATS Server URLs: nats://your-server:4222
Tenant ID: your-tenant-id
Organization ID: your-org-id (optional)
Authentication: [Select method]
```

**For local NATS (on your host machine):**

```
NATS Server URLs: nats://host.docker.internal:4222
Tenant ID: test-tenant
Authentication: None
```

> 💡 **Linux Note:** The docker-compose.yml includes `extra_hosts` config to make `host.docker.internal` work on Linux. See `docker/LINUX_SETUP.md` for details.
> NATS Server URLs: nats://host.docker.internal:4222
> Tenant ID: test-tenant
> Authentication: None

```

**For Synadia Cloud:**

```

NATS Server URLs: tls://connect.ngs.global
Tenant ID: acme-corp
Authentication: Credentials File (.creds)

````

---

## 🧪 Test the Nodes

### Test Command Node

1. Create a workflow
2. Add **OpenMercato Command** node
3. Select credentials
4. Choose a command (e.g., `catalog.products.create`)
5. Fill in JSON payload
6. Execute!

### Test Event Consumer

1. Add **OpenMercato Event Consumer** trigger
2. Select credentials
3. Set subject pattern: `catalog.>` (all catalog events)
4. **Activate** the workflow
5. Publish an event and watch it arrive!

### Test Event Publisher

1. Add **OpenMercato Event Publisher** node
2. Select credentials
3. Choose event or enter custom event ID
4. Provide payload
5. Execute!

---

## 🔄 Making Changes

When you modify the node code:

```bash
# 1. Rebuild
npm run build

# 2. Restart n8n
docker-compose restart n8n

# 3. Refresh browser
````

---

## 📊 View Logs

```bash
# Follow logs
docker-compose logs -f n8n

# Last 100 lines
docker-compose logs --tail=100 n8n
```

---

## 🛑 Stop n8n

```bash
# Stop (keeps data)
docker-compose down

# Stop and delete all data
docker-compose down -v
```

---

## 📚 More Information

- **Detailed Setup Guide:** See `docker/README.md`
- **User Documentation:** See `README.md`
- **Developer Guide:** See `CLAUDE.md`
- **Implementation Details:** See `IMPLEMENTATION_SUMMARY.md`

---

## ⚡ Quick Commands Reference

```bash
# Start
docker-compose up -d

# Stop
docker-compose down

# View logs
docker-compose logs -f n8n

# Restart after code changes
npm run build && docker-compose restart n8n

# Check if nodes are mounted
docker-compose exec n8n ls /home/node/.n8n/custom/n8n-nodes-openmercato

# Fresh start (deletes data!)
docker-compose down -v && docker-compose up -d
```

---

## 🐛 Troubleshooting

**Nodes not showing?**

```bash
npm run build
docker-compose restart n8n
```

**Can't connect to NATS?**

Use `host.docker.internal` instead of `localhost` when connecting from n8n container to host machine.

**Port 5678 already in use?**

Edit `docker-compose.yml` and change the port mapping:

```yaml
ports:
  - '8080:5678' # Use port 8080 instead
```

---

## 🎉 You're Ready!

Your OpenMercato n8n nodes are now running in Docker!

- **n8n UI:** http://localhost:5678
- **Container:** `n8n-openmercato-test`
- **Volume:** `n8n_openmercato_data`

Happy automating! 🚀
