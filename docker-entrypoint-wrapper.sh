#!/bin/sh
set -e

# Copy custom nodes into the volume before starting n8n
mkdir -p /home/node/.n8n/custom
cp -r /opt/custom-nodes/* /home/node/.n8n/custom/

# Delegate to the original entrypoint
exec /docker-entrypoint.sh "$@"
