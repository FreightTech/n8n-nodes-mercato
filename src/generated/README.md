# Generated Metadata

This directory contains auto-generated metadata files extracted from the OpenMercato codebase.

## Files

- **commands.json** - List of all available commands with their metadata
- **events.json** - List of all available events with their metadata
- **templates.json** - Message templates for commands generated from Zod schemas

## Regenerating

To refresh the metadata after OpenMercato updates:

```bash
npm run refresh:metadata
```

This will:

1. Scan the OpenMercato codebase for commands and events
2. Extract Zod schemas and generate JSON templates
3. Update the JSON files in this directory

## Configuration

The discovery script looks for the OpenMercato codebase at the path specified when running:

```bash
npm run discover -- --path /path/to/openmercato
```

Or set the `OPENMERCATO_PATH` environment variable.
