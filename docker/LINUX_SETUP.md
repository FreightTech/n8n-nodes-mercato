# Docker Setup on Linux

## Important: host.docker.internal Support

On Linux, Docker doesn't automatically provide `host.docker.internal` like it does on Mac/Windows. The `docker-compose.yml` file includes this configuration to enable it:

```yaml
extra_hosts:
  - 'host.docker.internal:host-gateway'
```

This allows the n8n container to connect to services running on your host machine.

## Connecting to Host Services

When configuring OpenMercato credentials in n8n to connect to a NATS server running on your host machine:

```
NATS Server URLs: nats://host.docker.internal:4222
```

**NOT:**

```
# This won't work from inside the container!
NATS Server URLs: nats://localhost:4222
```

## Verifying host.docker.internal Works

```bash
# Test from n8n container
docker-compose exec n8n ping -c 2 host.docker.internal

# Test NATS connectivity
docker-compose exec n8n nc -zv host.docker.internal 4222
```

## Alternative: Using Host IP Address

If `host.docker.internal` doesn't work for some reason, you can use your host's IP address:

```bash
# Find your host IP
ip addr show docker0 | grep inet | awk '{print $2}' | cut -d/ -f1

# Example result: 172.17.0.1
```

Then use that IP in credentials:

```
NATS Server URLs: nats://172.17.0.1:4222
```

## Network Modes

### Bridge Mode (Default)

The docker-compose setup uses bridge mode, which isolates containers but allows them to communicate with the host via `host.docker.internal`.

### Host Mode (Alternative)

If you need the container to use the host's network directly:

Edit `docker-compose.yml`:

```yaml
services:
  n8n:
    # Remove 'ports' and 'extra_hosts'
    network_mode: host
```

Then use `localhost` directly:

```
NATS Server URLs: nats://localhost:4222
```

**Note:** Host mode only works on Linux and removes network isolation.

## Common Issues

### "host.docker.internal: bad address"

**Solution:** Make sure you restarted docker-compose after adding `extra_hosts`:

```bash
docker-compose down
docker-compose up -d
```

### "Connection refused" when connecting to NATS

**Check if NATS is running:**

```bash
ss -tulpn | grep 4222
# or
netstat -tulpn | grep 4222
```

**Check if firewall is blocking:**

```bash
# Allow Docker to connect to NATS
sudo ufw allow from 172.17.0.0/16 to any port 4222
```

### "Connection cannot be established"

**Verify from container:**

```bash
# 1. Can you ping the host?
docker-compose exec n8n ping -c 2 host.docker.internal

# 2. Can you reach NATS port?
docker-compose exec n8n nc -zv host.docker.internal 4222

# 3. Test NATS connection (if nats-cli available)
docker-compose exec n8n sh -c "echo 'PING' | nc host.docker.internal 4222"
```

## SELinux Considerations

If you're using SELinux (Fedora, RHEL, CentOS), you might need to adjust policies:

```bash
# Check SELinux status
sestatus

# If enforcing, allow container access
sudo setsebool -P container_connect_any on
```

## Running NATS in Docker

If you want to run NATS in Docker alongside n8n, add it to `docker-compose.yml`:

```yaml
services:
  nats:
    image: nats:latest
    command: ['-js', '-m', '8222']
    ports:
      - '4222:4222'
      - '8222:8222'
    networks:
      - n8n-network

  n8n:
    # ... existing config
    depends_on:
      - nats
```

Then use the service name:

```
NATS Server URLs: nats://nats:4222
```

## Performance Tips

### Use Unix Sockets (Advanced)

For best performance when NATS is on the same host:

1. Configure NATS to listen on Unix socket
2. Mount socket into container:
   ```yaml
   volumes:
     - /var/run/nats.sock:/var/run/nats.sock
   ```
3. Use socket URL:
   ```
   NATS Server URLs: unix:///var/run/nats.sock
   ```

### Network Optimization

For high-throughput scenarios:

```yaml
services:
  n8n:
    sysctls:
      - net.ipv4.tcp_keepalive_time=600
      - net.ipv4.tcp_keepalive_intvl=60
      - net.ipv4.tcp_keepalive_probes=3
```

## Testing Setup

```bash
#!/bin/bash
# test-nats-connectivity.sh

echo "Testing n8n → host NATS connectivity..."

# 1. Check host.docker.internal resolves
echo "1. Checking host.docker.internal..."
docker-compose exec n8n getent hosts host.docker.internal
if [ $? -eq 0 ]; then
  echo "✓ host.docker.internal resolves"
else
  echo "✗ host.docker.internal does not resolve"
  exit 1
fi

# 2. Check ping
echo "2. Pinging host..."
docker-compose exec n8n ping -c 2 host.docker.internal > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "✓ Host is reachable"
else
  echo "✗ Cannot ping host"
  exit 1
fi

# 3. Check NATS port
echo "3. Checking NATS port 4222..."
docker-compose exec n8n nc -zv host.docker.internal 4222 > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "✓ NATS port 4222 is open"
else
  echo "✗ Cannot reach NATS port 4222"
  exit 1
fi

echo ""
echo "✓ All connectivity tests passed!"
echo "You can now configure OpenMercato credentials with:"
echo "  NATS Server URLs: nats://host.docker.internal:4222"
```

Make it executable and run:

```bash
chmod +x test-nats-connectivity.sh
./test-nats-connectivity.sh
```

## Summary

✅ **Use:** `nats://host.docker.internal:4222` for host services  
✅ **Use:** `nats://nats:4222` if NATS is in docker-compose  
✅ **Use:** `nats://your-server:4222` for remote servers  
❌ **Don't use:** `nats://localhost:4222` (won't work from container)

The `extra_hosts` configuration in docker-compose.yml makes this work seamlessly on Linux! 🐧
