#!/bin/sh
set -e

# Clean and copy custom nodes into the volume before starting n8n
mkdir -p /home/node/.n8n/custom

# Remove stale root-level files from previous broken deployments
# (these were created when package.json had wrong dist/ prefixed paths)
for item in bundled credentials icons nodes scripts src utils index.js index.d.ts index.js.map index.d.ts.map; do
  rm -rf "/home/node/.n8n/custom/$item"
done

# Fresh copy of the custom nodes package
rm -rf /home/node/.n8n/custom/n8n-nodes-openmercato
cp -r /opt/custom-nodes/* /home/node/.n8n/custom/

# Delegate to the original entrypoint
exec /docker-entrypoint.sh "$@"
