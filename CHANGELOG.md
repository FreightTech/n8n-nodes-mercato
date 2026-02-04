# Changelog

All notable changes to n8n-nodes-openmercato will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-02-04

### Changed

**BREAKING CHANGE**: Updated event subject pattern to include `events.` prefix to avoid conflicts with NATS internal subjects.

- **Event subjects** now use pattern: `events.{tenantId}.{eventId}`
  - Old: `acme-corp.catalog.product.created`
  - New: `events.acme-corp.catalog.product.created`

### Fixed

- Fixed JetStream stream creation error caused by wildcard pattern `*.>` overlapping with NATS internal subjects (`$JS.*`, `$SYS.*`, `_INBOX.*`)
- Event subjects now properly isolated from NATS system subjects

### Migration Guide

Existing workflows will continue to work but will subscribe to old event subjects. To receive events with the new format:

1. Open existing OpenMercato Event Consumer nodes
2. Re-save the workflow (no configuration changes needed)
3. The node will automatically use the new subject pattern: `events.{tenantId}.{eventPattern}`

**Note**: The OpenMercato backend must also be updated to publish events with the new `events.` prefix.

### Details

**Modified functions:**

- `generateEventSubject()` - Now adds `events.` prefix to all event subjects
- `parseEventSubject()` - Updated to parse new 3-part format while maintaining backward compatibility for parsing legacy subjects

**Commands unchanged:**

- Command subjects remain: `inbound.{commandId}`
- No changes required for OpenMercato Command nodes

---

## [0.1.0] - 2025-02-04

### Added

Initial release of n8n-nodes-openmercato

- OpenMercato Command node for executing commands via NATS JetStream
- OpenMercato Event Consumer trigger node for subscribing to events
- OpenMercato Event Publisher node for publishing events
- Discovery scripts for auto-generating command/event metadata from OpenMercato codebase
- Support for Synadia Cloud and local NATS servers
- Comprehensive documentation and examples
