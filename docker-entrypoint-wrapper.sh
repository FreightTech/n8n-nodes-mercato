#!/bin/sh
set -e

# Clean and copy custom nodes into the volume before starting n8n
# Remove stale files from previous deployments and ensure a clean state
rm -rf /home/node/.n8n/custom
mkdir -p /home/node/.n8n/custom
cp -r /opt/custom-nodes/* /home/node/.n8n/custom/

# Delegate to the original entrypoint
exec /docker-entrypoint.sh "$@"
