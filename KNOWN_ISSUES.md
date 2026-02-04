# Known Issues & Fixes

## Event Name Mismatches (Fixed)

### Issue

OpenMercato's `events.ts` files declare some events with plural entity names (e.g., `auth.roles.updated`, `auth.users.created`), but the actual entity constants and event emissions use singular names (e.g., `auth.role.updated`, `auth.user.created`).

This caused the Event Consumer node to subscribe to the wrong subject pattern.

### Root Cause

In OpenMercato:

- **Entity constants** use singular: `E.auth.role`, `E.auth.user`
- **Event declarations** use plural: `auth.roles.*`, `auth.users.*`
- **Actual event emissions** use the entity constant, resulting in singular subjects

### Example

```typescript
// OpenMercato events.ts (declared)
{ id: 'auth.roles.updated', label: 'Role Updated', entity: 'roles' }

// OpenMercato entity constant (actual)
entityType: E.auth.role  // singular!

// Actual NATS subject published
{tenantId}.auth.role.updated  // singular!
```

### Fix Applied

Manually corrected `src/generated/events.json` to use singular entity names for auth module:

- `auth.roles.*` → `auth.role.*`
- `auth.users.*` → `auth.user.*`

### Discovery Script Limitation

The discovery script (`scripts/discover-commands-events.ts`) reads event declarations from `events.ts` files, which may not match what's actually published. The script cannot automatically detect this mismatch because:

1. It scans static event declarations
2. It doesn't analyze runtime event emission code
3. Entity constants are defined separately

### Long-term Solution

**Option 1: Fix OpenMercato** (Recommended)
Update OpenMercato `packages/core/src/modules/auth/events.ts`:

```typescript
// Change from:
{ id: 'auth.roles.created', label: 'Role Created', entity: 'roles', category: 'crud' },
{ id: 'auth.users.created', label: 'User Created', entity: 'users', category: 'crud' },

// To:
{ id: 'auth.role.created', label: 'Role Created', entity: 'role', category: 'crud' },
{ id: 'auth.user.created', label: 'User Created', entity: 'user', category: 'crud' },
```

**Option 2: Enhanced Discovery**
Enhance the discovery script to:

1. Parse entity constants (e.g., `E.auth.role`)
2. Cross-reference with event declarations
3. Warn about mismatches
4. Use entity constant as source of truth

### Checking for Other Mismatches

To verify event names match what's actually published, compare:

1. **Event declaration** in `modules/*/events.ts`
2. **Entity constant** in commands (e.g., `E.module.entity`)
3. **Actual NATS subject** in logs

```bash
# Check entity constants in a module
grep -r "entityType: E\." packages/core/src/modules/catalog/commands/

# Compare with event declarations
cat packages/core/src/modules/catalog/events.ts
```

### Affected Events

Currently known mismatches (fixed):

- ✅ `auth.roles.*` → `auth.role.*` (3 events)
- ✅ `auth.users.*` → `auth.user.*` (3 events)

Potentially affected (verify if issues arise):

- Check any module where entity name in events.ts differs from entity constant
- Most modules use singular entity names consistently

## Workaround for Users

If you encounter events not being received:

1. **Check actual subject** in OpenMercato logs
2. **Use Custom Subject Pattern** in Event Consumer node
3. **Report mismatch** so it can be corrected

Example:

```
If OpenMercato logs show: {tenantId}.auth.role.updated
But node shows: auth.roles.updated
→ Use Custom Subject Pattern: "auth.role.updated"
```

## Prevention

After running discovery script, verify critical events by:

1. Publishing test events from OpenMercato
2. Checking NATS subject in logs
3. Comparing with n8n dropdown options
4. Updating `src/generated/events.json` if mismatch found

---

_Last updated: 2026-02-04_
