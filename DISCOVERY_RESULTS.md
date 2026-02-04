# OpenMercato Discovery Results

## 📊 Summary

**Discovery Date:** $(date)
**OpenMercato Path:** /home/szymon/work/freighttech/om_ft

### Commands Discovered: 10
- **auth:** 4 commands
- **customers:** 2 commands  
- **directory:** 4 commands

### Events Discovered: 83
- **auth:** 6 events
- **catalog:** 12 events
- **customers:** 26 events
- **directory:** 6 events
- **sales:** 24 events
- **workflows:** 9 events

---

## 🎯 Discovered Commands

### Auth Module (4 commands)
1. \`auth.roles.create\` - Create Roles
2. \`auth.roles.update\` - Update Roles
3. \`auth.users.create\` - Create Users
4. \`auth.users.update\` - Update Users

### Customers Module (2 commands)
1. \`customers.dictionaryEntries.create\` - Create Dictionary Entries
2. \`customers.dictionaryEntries.update\` - Update Dictionary Entries

### Directory Module (4 commands)
1. \`directory.organizations.create\` - Create Organizations
2. \`directory.organizations.update\` - Update Organizations
3. \`directory.tenants.create\` - Create Tenants
4. \`directory.tenants.update\` - Update Tenants

---

## 📡 Event Categories

### CRUD Events (Most events)
- Created, Updated, Deleted events for various entities
- Examples: \`catalog.product.created\`, \`sales.order.updated\`, \`customers.person.deleted\`

### Lifecycle Events
- Workflow lifecycle: started, completed, failed, cancelled, paused, resumed
- Activity lifecycle: started, completed, failed
- Examples: \`workflows.instance.started\`, \`workflows.activity.completed\`

---

## 📝 Generated Files

1. **src/generated/commands.json** (1.8K)
   - 10 command definitions with metadata
   - Grouped by module for easy navigation

2. **src/generated/events.json** (18K)
   - 83 event definitions with metadata
   - Categorized as 'crud' or 'lifecycle'
   - Filtered to exclude internal events

3. **src/generated/templates.json** (3.0K)
   - Basic message templates for all 10 commands
   - Includes placeholder values and comments
   - Ready for customization

---

## ✅ Next Steps

The nodes are now fully functional with:
- ✅ Command dropdown populated with 10 commands
- ✅ Event dropdown populated with 83 events
- ✅ Message templates for all commands
- ✅ Built and ready to use in n8n

### To use in n8n:
\`\`\`bash
# Link package (in this directory)
npm link

# In n8n directory
npm link n8n-nodes-openmercato

# Restart n8n
\`\`\`

---

## 🔄 Updating Metadata

When OpenMercato adds new commands or events:

\`\`\`bash
npm run refresh:metadata -- --path /home/szymon/work/freighttech/om_ft
npm run build
\`\`\`

This will re-scan the OpenMercato codebase and update the dropdowns.
