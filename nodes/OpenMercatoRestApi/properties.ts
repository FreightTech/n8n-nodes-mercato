/* eslint-disable */
// @ts-nocheck
/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * Generated from OpenMercato OpenAPI spec using @algolia/n8n-openapi-node
 * Run `npm run generate:openapi` to regenerate.
 *
 * Source: https://backstage.freighttech.org/api/docs/openapi
 * Generated: 2026-05-03T15:41:47.235Z
 */

import { INodeProperties } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		"displayName": "Resource",
		"name": "resource",
		"type": "options",
		"default": "",
		"description": "Select the resource to work with",
		"options": [
			{
				"name": "Authentication & Accounts",
				"value": "Authentication & Accounts",
				"description": "User accounts, sessions, roles and password resets"
			},
			{
				"name": "Directory (Tenants & Organizations)",
				"value": "Directory (Tenants & Organizations)",
				"description": "Multi-tenant directory with tenants and organizations"
			},
			{
				"name": "API Keys",
				"value": "API Keys",
				"description": "Manage access tokens for external API access"
			},
			{
				"name": "Feature Toggles",
				"value": "Feature Toggles",
				"description": "Global feature flags with tenant-level overrides"
			},
			{
				"name": "Audit & Action Logs",
				"value": "Audit & Action Logs",
				"description": "Tracks user actions and data accesses with undo support scaffolding"
			},
			{
				"name": "Currencies",
				"value": "Currencies",
				"description": "Currencies and Exchange rate management"
			},
			{
				"name": "Attachments",
				"value": "Attachments",
				"description": "File attachments and media management"
			},
			{
				"name": "Notifications",
				"value": "Notifications",
				"description": "In-app notifications with module-extensible types and actions"
			},
			{
				"name": "Entity Translations",
				"value": "Entity Translations",
				"description": "System-wide entity translation storage and locale overlay for CRUD responses"
			},
			{
				"name": "Integrations",
				"value": "Integrations",
				"description": "Core integration framework — external ID mapping, status badges, and integration registry"
			},
			{
				"name": "Scheduler",
				"value": "Scheduler",
				"description": "Database-managed scheduled jobs with admin UI"
			},
			{
				"name": "Search",
				"value": "Search",
				"description": "Unified search module with pluggable strategies (Meilisearch, Vector, Tokens)"
			},
			{
				"name": "Finance",
				"value": "Finance",
				"description": "Financial overview — invoices from KSeF and other integrations"
			},
			{
				"name": "Contractors",
				"value": "Contractors",
				"description": "Contractor management — synced from invoices"
			},
			{
				"name": "Freight Documents",
				"value": "Freight Documents",
				"description": "Unified document management with AI-powered OCR extraction, invoice processing, and charge code matching"
			},
			{
				"name": "Annotations",
				"value": "Annotations",
				"description": "Cell-level annotations and comments for data tables"
			}
		]
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Load the current dashboard layout",
				"value": "dashboards_get_dashboards_layout",
				"action": "Load the current dashboard layout",
				"description": "Returns the saved widget layout together with the widgets the current user is allowed to place.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/dashboards/layout"
					}
				}
			},
			{
				"name": "Persist dashboard layout changes",
				"value": "dashboards_put_dashboards_layout",
				"action": "Persist dashboard layout changes",
				"description": "Saves the provided widget ordering, sizes, and settings for the current user.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/dashboards/layout"
					}
				}
			},
			{
				"name": "Fetch widget assignments for a role",
				"value": "dashboards_get_dashboards_roles_widgets",
				"action": "Fetch widget assignments for a role",
				"description": "Returns the widgets explicitly assigned to the given role together with the evaluation scope.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/dashboards/roles/widgets"
					}
				}
			},
			{
				"name": "Update widgets assigned to a role",
				"value": "dashboards_put_dashboards_roles_widgets",
				"action": "Update widgets assigned to a role",
				"description": "Persists the widget list for a role within the provided tenant and organization scope.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/dashboards/roles/widgets"
					}
				}
			},
			{
				"name": "Read widget overrides for a user",
				"value": "dashboards_get_dashboards_users_widgets",
				"action": "Read widget overrides for a user",
				"description": "Returns the widgets inherited and explicitly configured for the requested user within the current scope.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/dashboards/users/widgets"
					}
				}
			},
			{
				"name": "Update user-specific dashboard widgets",
				"value": "dashboards_put_dashboards_users_widgets",
				"action": "Update user-specific dashboard widgets",
				"description": "Sets the widget override mode and allowed widgets for a user. Passing `mode: inherit` clears overrides.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/dashboards/users/widgets"
					}
				}
			},
			{
				"name": "Fetch aggregated data for dashboard widgets",
				"value": "dashboards_post_dashboards_widgets_data",
				"action": "Fetch aggregated data for dashboard widgets",
				"description": "Executes an aggregation query against the specified entity type and returns the result. Supports date range filtering, grouping, and period-over-period comparison.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/dashboards/widgets/data"
					}
				}
			},
			{
				"name": "Update a dashboard layout item",
				"value": "dashboards_patch_dashboards_layout_itemId",
				"action": "Update a dashboard layout item",
				"description": "Adjusts the size or settings for a single widget within the dashboard layout.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/dashboards/layout/{{ $parameter.itemId_string }}"
					}
				}
			},
			{
				"name": "List available dashboard widgets",
				"value": "dashboards_get_dashboards_widgets_catalog",
				"action": "List available dashboard widgets",
				"description": "Returns the catalog of widgets that modules expose, including defaults and feature requirements.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/dashboards/widgets/catalog"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "GET /auth/locale",
				"value": "auth_get_auth_locale",
				"action": "GET /auth/locale",
				"description": "GET /auth/locale",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/auth/locale"
					}
				}
			},
			{
				"name": "POST /auth/locale",
				"value": "auth_post_auth_locale",
				"action": "POST /auth/locale",
				"description": "POST /auth/locale",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/auth/locale"
					}
				}
			},
			{
				"name": "Get current profile",
				"value": "auth_get_auth_profile",
				"action": "Get current profile",
				"description": "Returns the email address for the signed-in user.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/auth/profile"
					}
				}
			},
			{
				"name": "Update current profile",
				"value": "auth_put_auth_profile",
				"action": "Update current profile",
				"description": "Updates the email address or password for the signed-in user.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/auth/profile"
					}
				}
			},
			{
				"name": "Fetch role ACL",
				"value": "auth_get_auth_roles_acl",
				"action": "Fetch role ACL",
				"description": "Returns the feature and organization assignments associated with a role within the current tenant.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/auth/roles/acl"
					}
				}
			},
			{
				"name": "Update role ACL",
				"value": "auth_put_auth_roles_acl",
				"action": "Update role ACL",
				"description": "Replaces the feature list, super admin flag, and optional organization assignments for a role.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/auth/roles/acl"
					}
				}
			},
			{
				"name": "List roles",
				"value": "auth_get_auth_roles",
				"action": "List roles",
				"description": "Returns available roles within the current tenant. Super administrators receive visibility across tenants.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/auth/roles"
					}
				}
			},
			{
				"name": "Create role",
				"value": "auth_post_auth_roles",
				"action": "Create role",
				"description": "Creates a new role for the current tenant or globally when `tenantId` is omitted.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/auth/roles"
					}
				}
			},
			{
				"name": "Update role",
				"value": "auth_put_auth_roles",
				"action": "Update role",
				"description": "Updates mutable fields on an existing role.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/auth/roles"
					}
				}
			},
			{
				"name": "Delete role",
				"value": "auth_delete_auth_roles",
				"action": "Delete role",
				"description": "Deletes a role by identifier. Fails when users remain assigned.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/auth/roles"
					}
				}
			},
			{
				"name": "Get sidebar preferences",
				"value": "auth_get_auth_sidebar_preferences",
				"action": "Get sidebar preferences",
				"description": "Returns personal sidebar customization and any role-level preferences the user can manage.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/auth/sidebar/preferences"
					}
				}
			},
			{
				"name": "Update sidebar preferences",
				"value": "auth_put_auth_sidebar_preferences",
				"action": "Update sidebar preferences",
				"description": "Updates personal sidebar configuration and, optionally, applies the same settings to selected roles.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/auth/sidebar/preferences"
					}
				}
			},
			{
				"name": "Fetch user ACL",
				"value": "auth_get_auth_users_acl",
				"action": "Fetch user ACL",
				"description": "Returns custom ACL overrides for a user within the current tenant, if any.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/auth/users/acl"
					}
				}
			},
			{
				"name": "Update user ACL",
				"value": "auth_put_auth_users_acl",
				"action": "Update user ACL",
				"description": "Configures per-user ACL overrides, including super admin access, feature list, and organization scope.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/auth/users/acl"
					}
				}
			},
			{
				"name": "Resend invitation email",
				"value": "auth_post_auth_users_resend_invite",
				"action": "Resend invitation email",
				"description": "Resends the invitation email to a user who has not yet set up their password. Generates a new 48-hour setup token and invalidates prior tokens.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/auth/users/resend-invite"
					}
				}
			},
			{
				"name": "List users",
				"value": "auth_get_auth_users",
				"action": "List users",
				"description": "Returns users for the current tenant. Super administrators may scope the response via organization or role filters.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/auth/users"
					}
				}
			},
			{
				"name": "Create user",
				"value": "auth_post_auth_users",
				"action": "Create user",
				"description": "Creates a new confirmed user within the specified organization and optional roles.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/auth/users"
					}
				}
			},
			{
				"name": "Update user",
				"value": "auth_put_auth_users",
				"action": "Update user",
				"description": "Updates profile fields, organization assignment, credentials, or role memberships.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/auth/users"
					}
				}
			},
			{
				"name": "Delete user",
				"value": "auth_delete_auth_users",
				"action": "Delete user",
				"description": "Deletes a user by identifier. Undo support is provided via the command bus.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/auth/users"
					}
				}
			},
			{
				"name": "Resolve sidebar entries",
				"value": "auth_get_auth_admin_nav",
				"action": "Resolve sidebar entries",
				"description": "Returns the backend navigation tree available to the authenticated administrator after applying role and personal sidebar preferences.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/auth/admin/nav"
					}
				}
			},
			{
				"name": "Check feature grants for the current user",
				"value": "auth_post_auth_feature_check",
				"action": "Check feature grants for the current user",
				"description": "Evaluates which of the requested features are available to the signed-in user within the active tenant / organization context.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/auth/feature-check"
					}
				}
			},
			{
				"name": "List declared feature flags",
				"value": "auth_get_auth_features",
				"action": "List declared feature flags",
				"description": "Returns all static features contributed by the enabled modules along with their module source.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/auth/features"
					}
				}
			},
			{
				"name": "Authenticate user credentials",
				"value": "auth_post_auth_login",
				"action": "Authenticate user credentials",
				"description": "Validates the submitted credentials and issues a bearer token cookie for subsequent API calls.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/auth/login"
					}
				}
			},
			{
				"name": "Log out (legacy GET)",
				"value": "auth_get_auth_logout",
				"action": "Log out (legacy GET)",
				"description": "For convenience, the GET variant performs the same logout logic as POST and issues a redirect.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/auth/logout"
					}
				}
			},
			{
				"name": "Invalidate session and redirect",
				"value": "auth_post_auth_logout",
				"action": "Invalidate session and redirect",
				"description": "Clears authentication cookies and redirects the browser to the login page.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/auth/logout"
					}
				}
			},
			{
				"name": "Complete password reset",
				"value": "auth_post_auth_reset_confirm",
				"action": "Complete password reset",
				"description": "Validates the reset token and updates the user password.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/auth/reset/confirm"
					}
				}
			},
			{
				"name": "Send reset email",
				"value": "auth_post_auth_reset",
				"action": "Send reset email",
				"description": "Requests a password reset email for the given account. The endpoint always returns `ok: true` to avoid leaking account existence.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/auth/reset"
					}
				}
			},
			{
				"name": "Refresh auth cookie from session token (browser)",
				"value": "auth_get_auth_session_refresh",
				"action": "Refresh auth cookie from session token (browser)",
				"description": "Exchanges an existing `session_token` cookie for a fresh JWT auth cookie and redirects the browser.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/auth/session/refresh"
					}
				}
			},
			{
				"name": "Refresh access token (API/mobile)",
				"value": "auth_post_auth_session_refresh",
				"action": "Refresh access token (API/mobile)",
				"description": "Exchanges a refresh token for a new JWT access token. Pass the refresh token obtained from login in the request body.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/auth/session/refresh"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "List user consents",
				"value": "auth_get_auth_users_consents",
				"action": "List user consents",
				"description": "Returns all consent records for a given user, with integrity verification status.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/auth/users/consents"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Auth"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Load organization switcher menu",
				"value": "directory_get_directory_organization_switcher",
				"action": "Load organization switcher menu",
				"description": "Returns the hierarchical menu of organizations the current user may switch to within the active tenant.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/directory/organization-switcher"
					}
				}
			},
			{
				"name": "List organizations",
				"value": "directory_get_directory_organizations",
				"action": "List organizations",
				"description": "Returns organizations using options, tree, or paginated manage view depending on the `view` parameter.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/directory/organizations"
					}
				}
			},
			{
				"name": "Create organization",
				"value": "directory_post_directory_organizations",
				"action": "Create organization",
				"description": "Creates a new organization within a tenant and optionally assigns hierarchy relationships.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/directory/organizations"
					}
				}
			},
			{
				"name": "Update organization",
				"value": "directory_put_directory_organizations",
				"action": "Update organization",
				"description": "Updates organization details and hierarchy assignments.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/directory/organizations"
					}
				}
			},
			{
				"name": "Delete organization",
				"value": "directory_delete_directory_organizations",
				"action": "Delete organization",
				"description": "Soft deletes an organization identified by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/directory/organizations"
					}
				}
			},
			{
				"name": "List tenants",
				"value": "directory_get_directory_tenants",
				"action": "List tenants",
				"description": "Returns tenants visible to the current user with optional search and pagination.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/directory/tenants"
					}
				}
			},
			{
				"name": "Create tenant",
				"value": "directory_post_directory_tenants",
				"action": "Create tenant",
				"description": "Creates a new tenant and returns its identifier.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/directory/tenants"
					}
				}
			},
			{
				"name": "Update tenant",
				"value": "directory_put_directory_tenants",
				"action": "Update tenant",
				"description": "Updates tenant properties such as name or activation state.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/directory/tenants"
					}
				}
			},
			{
				"name": "Delete tenant",
				"value": "directory_delete_directory_tenants",
				"action": "Delete tenant",
				"description": "Soft deletes the tenant identified by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/directory/tenants"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Public organization lookup by slug",
				"value": "directory_get_directory_organizations_lookup",
				"action": "Public organization lookup by slug",
				"description": "Public organization lookup by slug",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/directory/organizations/lookup"
					}
				}
			},
			{
				"name": "Public tenant lookup",
				"value": "directory_get_directory_tenants_lookup",
				"action": "Public tenant lookup",
				"description": "Public tenant lookup",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/directory/tenants/lookup"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Directory (Tenants & Organizations)"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Delete a personal perspective",
				"value": "perspectives_delete_perspectives_tableId_perspectiveId",
				"action": "Delete a personal perspective",
				"description": "Removes a perspective owned by the current user for the given table.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/perspectives/{{ $parameter.tableId_string }}/{{ $parameter.perspectiveId_string }}"
					}
				}
			},
			{
				"name": "Clear role perspectives for a table",
				"value": "perspectives_delete_perspectives_tableId_roles_roleId",
				"action": "Clear role perspectives for a table",
				"description": "Removes all role-level perspectives associated with the provided role identifier for the table.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/perspectives/{{ $parameter.tableId_string }}/roles/{{ $parameter.roleId_string }}"
					}
				}
			},
			{
				"name": "Load perspectives for a table",
				"value": "perspectives_get_perspectives_tableId",
				"action": "Load perspectives for a table",
				"description": "Returns personal perspectives and available role defaults for the requested table identifier.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/perspectives/{{ $parameter.tableId_string }}"
					}
				}
			},
			{
				"name": "Create or update a perspective",
				"value": "perspectives_post_perspectives_tableId",
				"action": "Create or update a perspective",
				"description": "Saves a personal perspective and optionally applies the same configuration to selected roles.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/perspectives/{{ $parameter.tableId_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Perspectives"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Save multiple custom field definitions",
				"value": "entities_post_entities_definitions_batch",
				"action": "Save multiple custom field definitions",
				"description": "Creates or updates multiple definitions for a single entity in one transaction.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/entities/definitions.batch"
					}
				}
			},
			{
				"name": "Get management snapshot",
				"value": "entities_get_entities_definitions_manage",
				"action": "Get management snapshot",
				"description": "Returns scoped custom field definitions (including inactive tombstones) for administration interfaces.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/entities/definitions.manage"
					}
				}
			},
			{
				"name": "Restore definition",
				"value": "entities_post_entities_definitions_restore",
				"action": "Restore definition",
				"description": "Reactivates a previously soft-deleted definition within the current tenant/org scope.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/entities/definitions.restore"
					}
				}
			},
			{
				"name": "List active custom field definitions",
				"value": "entities_get_entities_definitions",
				"action": "List active custom field definitions",
				"description": "Returns active custom field definitions for the supplied entity ids, respecting tenant scope and tombstones.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/entities/definitions"
					}
				}
			},
			{
				"name": "Upsert custom field definition",
				"value": "entities_post_entities_definitions",
				"action": "Upsert custom field definition",
				"description": "Creates or updates a custom field definition for the current tenant/org scope.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/entities/definitions"
					}
				}
			},
			{
				"name": "Soft delete custom field definition",
				"value": "entities_delete_entities_definitions",
				"action": "Soft delete custom field definition",
				"description": "Marks the specified definition inactive and tombstones it for the current scope.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/entities/definitions"
					}
				}
			},
			{
				"name": "Fetch encryption map",
				"value": "entities_get_entities_encryption",
				"action": "Fetch encryption map",
				"description": "Returns the encrypted field map for the current tenant/organization scope.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/entities/encryption"
					}
				}
			},
			{
				"name": "Upsert encryption map",
				"value": "entities_post_entities_encryption",
				"action": "Upsert encryption map",
				"description": "Creates or updates the encryption map for the current tenant/organization scope.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/entities/encryption"
					}
				}
			},
			{
				"name": "List available entities",
				"value": "entities_get_entities_entities",
				"action": "List available entities",
				"description": "Returns generated and custom entities scoped to the caller with field counts per entity.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/entities/entities"
					}
				}
			},
			{
				"name": "Upsert custom entity",
				"value": "entities_post_entities_entities",
				"action": "Upsert custom entity",
				"description": "Creates or updates a tenant/org scoped custom entity definition.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/entities/entities"
					}
				}
			},
			{
				"name": "Soft delete custom entity",
				"value": "entities_delete_entities_entities",
				"action": "Soft delete custom entity",
				"description": "Marks the specified custom entity inactive within the current scope.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/entities/entities"
					}
				}
			},
			{
				"name": "Get filter suggestions for a field",
				"value": "entities_get_entities_filter_suggestions",
				"action": "Get filter suggestions for a field",
				"description": "Returns distinct values for a specific field from any entity. Used by DynamicTable filter popover to provide autocomplete suggestions for large datasets.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/entities/filter-suggestions"
					}
				}
			},
			{
				"name": "List records",
				"value": "entities_get_entities_records",
				"action": "List records",
				"description": "Returns paginated records for the supplied entity. Supports custom field filters, exports, and soft-delete toggles.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/entities/records"
					}
				}
			},
			{
				"name": "Create record",
				"value": "entities_post_entities_records",
				"action": "Create record",
				"description": "Creates a record for the given entity. When `recordId` is omitted or not a UUID the data engine will generate one automatically.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/entities/records"
					}
				}
			},
			{
				"name": "Update record",
				"value": "entities_put_entities_records",
				"action": "Update record",
				"description": "Updates an existing record. If the provided recordId is not a UUID the record will be created instead to support optimistic flows.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/entities/records"
					}
				}
			},
			{
				"name": "Delete record",
				"value": "entities_delete_entities_records",
				"action": "Delete record",
				"description": "Soft deletes the specified record within the current tenant/org scope.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/entities/records"
					}
				}
			},
			{
				"name": "List relation options",
				"value": "entities_get_entities_relations_options",
				"action": "List relation options",
				"description": "Returns up to 200 option entries for populating relation dropdowns, automatically resolving label fields when omitted.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/entities/relations/options"
					}
				}
			},
			{
				"name": "Get sidebar entities",
				"value": "entities_get_entities_sidebar_entities",
				"action": "Get sidebar entities",
				"description": "Returns custom entities flagged with `showInSidebar` for the current tenant/org scope.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/entities/sidebar-entities"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Get cache statistics",
				"value": "configs_get_configs_cache",
				"action": "Get cache statistics",
				"description": "Returns detailed cache statistics including total entries and breakdown by cache segments. Requires cache service to be available.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/configs/cache"
					}
				}
			},
			{
				"name": "Purge cache",
				"value": "configs_post_configs_cache",
				"action": "Purge cache",
				"description": "Purges cache entries. Supports two actions: purgeAll (clears entire cache) or purgeSegment (clears specific segment). Returns updated cache statistics after purge.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/configs/cache"
					}
				}
			},
			{
				"name": "Get system health status",
				"value": "configs_get_configs_system_status",
				"action": "Get system health status",
				"description": "Returns comprehensive system health information including environment details, version, resource usage, and service connectivity status.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/configs/system-status"
					}
				}
			},
			{
				"name": "Clear system cache",
				"value": "configs_post_configs_system_status",
				"action": "Clear system cache",
				"description": "Purges the entire cache for the current tenant. Useful for troubleshooting or forcing fresh data loading.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/configs/system-status"
					}
				}
			},
			{
				"name": "List pending upgrade actions",
				"value": "configs_get_configs_upgrade_actions",
				"action": "List pending upgrade actions",
				"description": "Returns a list of pending upgrade actions for the current version. These are one-time setup tasks that need to be executed after upgrading to a new version. Requires organization and tenant context.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/configs/upgrade-actions"
					}
				}
			},
			{
				"name": "Execute upgrade action",
				"value": "configs_post_configs_upgrade_actions",
				"action": "Execute upgrade action",
				"description": "Executes a specific upgrade action by ID. Typically used for one-time setup tasks like seeding example data after version upgrade. Returns execution status and localized success message.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/configs/upgrade-actions"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Configs"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Purge query index records",
				"value": "query_index_post_query_index_purge",
				"action": "Purge query index records",
				"description": "Queues a purge job to remove indexed records for an entity type within the active scope.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/query_index/purge"
					}
				}
			},
			{
				"name": "Trigger query index rebuild",
				"value": "query_index_post_query_index_reindex",
				"action": "Trigger query index rebuild",
				"description": "Queues a reindex job for the specified entity type within the current tenant scope.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/query_index/reindex"
					}
				}
			},
			{
				"name": "Inspect query index coverage",
				"value": "query_index_get_query_index_status",
				"action": "Inspect query index coverage",
				"description": "Returns entity counts comparing base tables with the query index along with the latest job status.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/query_index/status"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Query Index"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "List API keys",
				"value": "api_keys_get_api_keys_keys",
				"action": "List API keys",
				"description": "Returns paginated API keys visible to the current user, including per-key role assignments and organization context.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api_keys/keys"
					}
				}
			},
			{
				"name": "Create API key",
				"value": "api_keys_post_api_keys_keys",
				"action": "Create API key",
				"description": "Creates a new API key, returning the one-time secret value together with the generated key prefix and scope details.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api_keys/keys"
					}
				}
			},
			{
				"name": "Delete API key",
				"value": "api_keys_delete_api_keys_keys",
				"action": "Delete API key",
				"description": "Removes an API key by identifier. The key must belong to the current tenant and fall within the requester organization scope.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api_keys/keys"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"API Keys"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Check if feature is enabled",
				"value": "feature_toggles_get_feature_toggles_check_boolean",
				"action": "Check if feature is enabled",
				"description": "Checks if a feature toggle is enabled for the current context.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/feature_toggles/check/boolean"
					}
				}
			},
			{
				"name": "Get json config",
				"value": "feature_toggles_get_feature_toggles_check_json",
				"action": "Get json config",
				"description": "Gets the json configuration for a feature toggle.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/feature_toggles/check/json"
					}
				}
			},
			{
				"name": "Get number config",
				"value": "feature_toggles_get_feature_toggles_check_number",
				"action": "Get number config",
				"description": "Gets the number configuration for a feature toggle.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/feature_toggles/check/number"
					}
				}
			},
			{
				"name": "Get string config",
				"value": "feature_toggles_get_feature_toggles_check_string",
				"action": "Get string config",
				"description": "Gets the string configuration for a feature toggle.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/feature_toggles/check/string"
					}
				}
			},
			{
				"name": "List global feature toggles",
				"value": "feature_toggles_get_feature_toggles_global",
				"action": "List global feature toggles",
				"description": "Returns all global feature toggles with filtering and pagination. Requires superadmin role.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/feature_toggles/global"
					}
				}
			},
			{
				"name": "Create global feature toggle",
				"value": "feature_toggles_post_feature_toggles_global",
				"action": "Create global feature toggle",
				"description": "Creates a new global feature toggle. Requires superadmin role.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/feature_toggles/global"
					}
				}
			},
			{
				"name": "Update global feature toggle",
				"value": "feature_toggles_put_feature_toggles_global",
				"action": "Update global feature toggle",
				"description": "Updates an existing global feature toggle. Requires superadmin role.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/feature_toggles/global"
					}
				}
			},
			{
				"name": "Delete global feature toggle",
				"value": "feature_toggles_delete_feature_toggles_global",
				"action": "Delete global feature toggle",
				"description": "Soft deletes a global feature toggle by ID. Requires superadmin role.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/feature_toggles/global"
					}
				}
			},
			{
				"name": "List overrides",
				"value": "feature_toggles_get_feature_toggles_overrides",
				"action": "List overrides",
				"description": "Returns list of feature toggle overrides.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/feature_toggles/overrides"
					}
				}
			},
			{
				"name": "Change override state",
				"value": "feature_toggles_put_feature_toggles_overrides",
				"action": "Change override state",
				"description": "Enable, disable or inherit a feature toggle for a specific tenant.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/feature_toggles/overrides"
					}
				}
			},
			{
				"name": "Fetch feature toggle override",
				"value": "feature_toggles_get_feature_toggles_global_id_override",
				"action": "Fetch feature toggle override",
				"description": "Returns feature toggle override.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/feature_toggles/global/{{ $parameter.id_string }}/override"
					}
				}
			},
			{
				"name": "Fetch feature toggle by ID",
				"value": "feature_toggles_get_feature_toggles_global_id",
				"action": "Fetch feature toggle by ID",
				"description": "Returns complete details of a feature toggle.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/feature_toggles/global/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Retrieve access logs",
				"value": "audit_logs_get_audit_logs_audit_logs_access",
				"action": "Retrieve access logs",
				"description": "Fetches paginated access audit logs scoped to the authenticated user. Tenant administrators can optionally expand the search to other actors or organizations.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/audit_logs/audit-logs/access"
					}
				}
			},
			{
				"name": "Redo by action log id",
				"value": "audit_logs_post_audit_logs_audit_logs_actions_redo",
				"action": "Redo by action log id",
				"description": "Redoes the latest undone command owned by the caller. Requires the action to still be eligible for redo within tenant and organization scope.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/audit_logs/audit-logs/actions/redo"
					}
				}
			},
			{
				"name": "Fetch action logs",
				"value": "audit_logs_get_audit_logs_audit_logs_actions",
				"action": "Fetch action logs",
				"description": "Returns recent action audit log entries. Tenant administrators can widen the scope to other actors or organizations, and callers can optionally restrict results to undoable actions.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/audit_logs/audit-logs/actions"
					}
				}
			},
			{
				"name": "Undo action by token",
				"value": "audit_logs_post_audit_logs_audit_logs_actions_undo",
				"action": "Undo action by token",
				"description": "Replays the undo handler registered for a command. The provided undo token must match the latest undoable log entry accessible to the caller.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/audit_logs/audit-logs/actions/undo"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Audit & Action Logs"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "List currency options",
				"value": "currencies_get_currencies_currencies_options",
				"action": "List currency options",
				"description": "Returns currencies formatted for select inputs.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/currencies/currencies/options"
					}
				}
			},
			{
				"name": "List currencies",
				"value": "currencies_get_currencies_currencies",
				"action": "List currencies",
				"description": "Returns a paginated collection of currencies scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/currencies/currencies"
					}
				}
			},
			{
				"name": "Create currency",
				"value": "currencies_post_currencies_currencies",
				"action": "Create currency",
				"description": "Creates a new currency.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/currencies/currencies"
					}
				}
			},
			{
				"name": "Update currency",
				"value": "currencies_put_currencies_currencies",
				"action": "Update currency",
				"description": "Updates an existing currency by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/currencies/currencies"
					}
				}
			},
			{
				"name": "Delete currency",
				"value": "currencies_delete_currencies_currencies",
				"action": "Delete currency",
				"description": "Deletes a currency by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/currencies/currencies"
					}
				}
			},
			{
				"name": "List exchangerates",
				"value": "currencies_get_currencies_exchange_rates",
				"action": "List exchangerates",
				"description": "Returns a paginated collection of exchangerates scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/currencies/exchange-rates"
					}
				}
			},
			{
				"name": "Create exchangerate",
				"value": "currencies_post_currencies_exchange_rates",
				"action": "Create exchangerate",
				"description": "Creates a new exchange rate.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/currencies/exchange-rates"
					}
				}
			},
			{
				"name": "Update exchangerate",
				"value": "currencies_put_currencies_exchange_rates",
				"action": "Update exchangerate",
				"description": "Updates an existing exchange rate by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/currencies/exchange-rates"
					}
				}
			},
			{
				"name": "Delete exchangerate",
				"value": "currencies_delete_currencies_exchange_rates",
				"action": "Delete exchangerate",
				"description": "Deletes an exchange rate by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/currencies/exchange-rates"
					}
				}
			},
			{
				"name": "List currency fetch configurations",
				"value": "listCurrencyFetchConfigs",
				"action": "List currency fetch configurations",
				"description": "Returns all currency fetch configurations scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/currencies/fetch-configs"
					}
				}
			},
			{
				"name": "Create currency fetch configuration",
				"value": "createCurrencyFetchConfig",
				"action": "Create currency fetch configuration",
				"description": "Creates a new currency fetch configuration.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/currencies/fetch-configs"
					}
				}
			},
			{
				"name": "Update currency fetch configuration",
				"value": "updateCurrencyFetchConfig",
				"action": "Update currency fetch configuration",
				"description": "Updates an existing currency fetch configuration by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/currencies/fetch-configs"
					}
				}
			},
			{
				"name": "Delete currency fetch configuration",
				"value": "deleteCurrencyFetchConfig",
				"action": "Delete currency fetch configuration",
				"description": "Deletes a currency fetch configuration by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/currencies/fetch-configs"
					}
				}
			},
			{
				"name": "Fetch currency rates",
				"value": "fetchCurrencyRates",
				"action": "Fetch currency rates",
				"description": "Fetches currency exchange rates from configured providers for a specific date.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/currencies/fetch-rates"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "List dictionaries",
				"value": "dictionaries_get_dictionaries",
				"action": "List dictionaries",
				"description": "Returns dictionaries accessible to the current organization, optionally including inactive records.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/dictionaries"
					}
				}
			},
			{
				"name": "Create dictionary",
				"value": "dictionaries_post_dictionaries",
				"action": "Create dictionary",
				"description": "Registers a dictionary scoped to the current organization.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/dictionaries"
					}
				}
			},
			{
				"name": "Update dictionary entry",
				"value": "dictionaries_patch_dictionaries_dictionaryId_entries_entryId",
				"action": "Update dictionary entry",
				"description": "Updates the specified dictionary entry using the command bus pipeline.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/dictionaries/{{ $parameter.dictionaryId_string }}/entries/{{ $parameter.entryId_string }}"
					}
				}
			},
			{
				"name": "Delete dictionary entry",
				"value": "dictionaries_delete_dictionaries_dictionaryId_entries_entryId",
				"action": "Delete dictionary entry",
				"description": "Deletes the specified dictionary entry via the command bus.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/dictionaries/{{ $parameter.dictionaryId_string }}/entries/{{ $parameter.entryId_string }}"
					}
				}
			},
			{
				"name": "List dictionary entries",
				"value": "dictionaries_get_dictionaries_dictionaryId_entries",
				"action": "List dictionary entries",
				"description": "Returns entries for the specified dictionary ordered alphabetically.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/dictionaries/{{ $parameter.dictionaryId_string }}/entries"
					}
				}
			},
			{
				"name": "Create dictionary entry",
				"value": "dictionaries_post_dictionaries_dictionaryId_entries",
				"action": "Create dictionary entry",
				"description": "Creates a new entry in the specified dictionary.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/dictionaries/{{ $parameter.dictionaryId_string }}/entries"
					}
				}
			},
			{
				"name": "Get dictionary",
				"value": "dictionaries_get_dictionaries_dictionaryId",
				"action": "Get dictionary",
				"description": "Returns details for the specified dictionary, including inheritance flags.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/dictionaries/{{ $parameter.dictionaryId_string }}"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"createdAt",
						"description",
						"id",
						"isActive",
						"isSystem",
						"key",
						"name",
						"organizationId",
						"updatedAt"
					]
				}
			},
			{
				"name": "Update dictionary",
				"value": "dictionaries_patch_dictionaries_dictionaryId",
				"action": "Update dictionary",
				"description": "Updates mutable attributes of the dictionary. Currency dictionaries are protected from modification.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/dictionaries/{{ $parameter.dictionaryId_string }}"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"createdAt",
						"description",
						"id",
						"isActive",
						"isSystem",
						"key",
						"name",
						"organizationId",
						"updatedAt"
					]
				}
			},
			{
				"name": "Delete dictionary",
				"value": "dictionaries_delete_dictionaries_dictionaryId",
				"action": "Delete dictionary",
				"description": "Soft deletes the dictionary unless it is the protected currency dictionary.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/dictionaries/{{ $parameter.dictionaryId_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "List attachments",
				"value": "attachments_get_attachments_library",
				"action": "List attachments",
				"description": "Returns paginated list of attachments with optional filtering by search term, partition, and tags. Includes available tags and partitions.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/attachments/library"
					}
				}
			},
			{
				"name": "List all attachment partitions",
				"value": "attachments_get_attachments_partitions",
				"action": "List all attachment partitions",
				"description": "Returns all configured attachment partitions with storage settings, OCR configuration, and access control settings.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/attachments/partitions"
					}
				}
			},
			{
				"name": "Create new partition",
				"value": "attachments_post_attachments_partitions",
				"action": "Create new partition",
				"description": "Creates a new attachment partition with specified storage and OCR settings. Requires unique partition code.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/attachments/partitions"
					}
				}
			},
			{
				"name": "Update partition",
				"value": "attachments_put_attachments_partitions",
				"action": "Update partition",
				"description": "Updates an existing partition. Partition code cannot be changed. Title, description, OCR settings, and access control can be modified.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/attachments/partitions"
					}
				}
			},
			{
				"name": "Delete partition",
				"value": "attachments_delete_attachments_partitions",
				"action": "Delete partition",
				"description": "Deletes a partition. Default partitions cannot be deleted. Partitions with existing attachments cannot be deleted.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/attachments/partitions"
					}
				}
			},
			{
				"name": "List attachments for a record",
				"value": "attachments_get_attachments",
				"action": "List attachments for a record",
				"description": "Returns uploaded attachments for the given entity record, ordered by newest first.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/attachments"
					}
				}
			},
			{
				"name": "Upload attachment",
				"value": "attachments_post_attachments",
				"action": "Upload attachment",
				"description": "Uploads a new attachment using multipart form-data and stores metadata for later retrieval.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/attachments"
					}
				}
			},
			{
				"name": "Delete attachment",
				"value": "attachments_delete_attachments",
				"action": "Delete attachment",
				"description": "Removes an uploaded attachment and deletes the stored asset.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/attachments"
					}
				}
			},
			{
				"name": "Transfer attachments to different record",
				"value": "attachments_post_attachments_transfer",
				"action": "Transfer attachments to different record",
				"description": "Transfers one or more attachments from one record to another within the same entity type. Updates attachment assignments and metadata to reflect the new record.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/attachments/transfer"
					}
				}
			},
			{
				"name": "Download or serve attachment file",
				"value": "attachments_get_attachments_file_id",
				"action": "Download or serve attachment file",
				"description": "Returns the raw file content for an attachment. Path parameter: {id} - Attachment UUID. Query parameter: ?download=1 - Force file download with Content-Disposition header. Access control is enforced based on partition settings.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/attachments/file/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Serve image with optional resizing",
				"value": "attachments_get_attachments_image_id_slug",
				"action": "Serve image with optional resizing",
				"description": "Returns an image attachment with optional on-the-fly resizing and cropping. Resized images are cached for performance. Only works with image MIME types. Path parameter: {id} - Attachment UUID. Query parameters: ?width=N (1-4000 pixels), ?height=N (1-4000 pixels), ?cropType=cover|contain (resize behavior).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/attachments/image/{{ $parameter.id_string }}/{{ $parameter.slug_string }}"
					}
				}
			},
			{
				"name": "Get attachment details",
				"value": "attachments_get_attachments_library_id",
				"action": "Get attachment details",
				"description": "Returns complete details of an attachment including metadata, tags, assignments, and custom fields.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/attachments/library/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Update attachment metadata",
				"value": "attachments_patch_attachments_library_id",
				"action": "Update attachment metadata",
				"description": "Updates attachment tags, assignments, and custom fields. Emits CRUD side effects for indexing and events.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/attachments/library/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Delete attachment",
				"value": "attachments_delete_attachments_library_id",
				"action": "Delete attachment",
				"description": "Permanently deletes an attachment file from storage and database. Emits CRUD side effects.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/attachments/library/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "POST /notifications/batch",
				"value": "notifications_post_notifications_batch",
				"action": "POST /notifications/batch",
				"description": "Requires features: notifications.create",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/notifications/batch"
					}
				}
			},
			{
				"name": "POST /notifications/feature",
				"value": "notifications_post_notifications_feature",
				"action": "POST /notifications/feature",
				"description": "Requires features: notifications.create",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/notifications/feature"
					}
				}
			},
			{
				"name": "PUT /notifications/mark-all-read",
				"value": "notifications_put_notifications_mark_all_read",
				"action": "PUT /notifications/mark-all-read",
				"description": "PUT /notifications/mark-all-read",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/notifications/mark-all-read"
					}
				}
			},
			{
				"name": "POST /notifications/role",
				"value": "notifications_post_notifications_role",
				"action": "POST /notifications/role",
				"description": "Requires features: notifications.create",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/notifications/role"
					}
				}
			},
			{
				"name": "List notifications",
				"value": "notifications_get_notifications",
				"action": "List notifications",
				"description": "Returns a paginated collection of notifications.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/notifications"
					}
				}
			},
			{
				"name": "Create notification",
				"value": "notifications_post_notifications",
				"action": "Create notification",
				"description": "Creates a notification for a user.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/notifications"
					}
				}
			},
			{
				"name": "GET /notifications/settings",
				"value": "notifications_get_notifications_settings",
				"action": "GET /notifications/settings",
				"description": "Requires features: notifications.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/notifications/settings"
					}
				}
			},
			{
				"name": "POST /notifications/settings",
				"value": "notifications_post_notifications_settings",
				"action": "POST /notifications/settings",
				"description": "Requires features: notifications.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/notifications/settings"
					}
				}
			},
			{
				"name": "GET /notifications/unread-count",
				"value": "notifications_get_notifications_unread_count",
				"action": "GET /notifications/unread-count",
				"description": "GET /notifications/unread-count",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/notifications/unread-count"
					}
				}
			},
			{
				"name": "POST /notifications/{id}/action",
				"value": "notifications_post_notifications_id_action",
				"action": "POST /notifications/{id}/action",
				"description": "POST /notifications/{id}/action",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/notifications/{{ $parameter.id_string }}/action"
					}
				}
			},
			{
				"name": "PUT /notifications/{id}/dismiss",
				"value": "notifications_put_notifications_id_dismiss",
				"action": "PUT /notifications/{id}/dismiss",
				"description": "PUT /notifications/{id}/dismiss",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/notifications/{{ $parameter.id_string }}/dismiss"
					}
				}
			},
			{
				"name": "PUT /notifications/{id}/read",
				"value": "notifications_put_notifications_id_read",
				"action": "PUT /notifications/{id}/read",
				"description": "PUT /notifications/{id}/read",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/notifications/{{ $parameter.id_string }}/read"
					}
				}
			},
			{
				"name": "PUT /notifications/{id}/restore",
				"value": "notifications_put_notifications_id_restore",
				"action": "PUT /notifications/{id}/restore",
				"description": "PUT /notifications/{id}/restore",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/notifications/{{ $parameter.id_string }}/restore"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Notifications"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Get entity translations",
				"value": "translations_get_translations_entityType_entityId",
				"action": "Get entity translations",
				"description": "Returns the full translation record for a single entity.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/translations/{{ $parameter.entityType_string }}/{{ $parameter.entityId_string }}"
					}
				}
			},
			{
				"name": "Create or update entity translations",
				"value": "translations_put_translations_entityType_entityId",
				"action": "Create or update entity translations",
				"description": "Full replacement of translations JSONB for an entity.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/translations/{{ $parameter.entityType_string }}/{{ $parameter.entityId_string }}"
					}
				}
			},
			{
				"name": "Delete entity translations",
				"value": "translations_delete_translations_entityType_entityId",
				"action": "Delete entity translations",
				"description": "Removes all translations for an entity.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/translations/{{ $parameter.entityType_string }}/{{ $parameter.entityId_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Translations"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "List supported translation locales",
				"value": "translations_get_translations_locales",
				"action": "List supported translation locales",
				"description": "List supported translation locales",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/translations/locales"
					}
				}
			},
			{
				"name": "Update supported translation locales",
				"value": "translations_put_translations_locales",
				"action": "Update supported translation locales",
				"description": "Update supported translation locales",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/translations/locales"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Entity Translations"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "List integration logs",
				"value": "integrations_get_integrations_logs",
				"action": "List integration logs",
				"description": "Requires features: integrations.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/integrations/logs"
					}
				}
			},
			{
				"name": "List integrations",
				"value": "integrations_get_integrations",
				"action": "List integrations",
				"description": "Returns a paginated collection of integrations.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/integrations"
					}
				}
			},
			{
				"name": "Get, save, or delete integration credentials",
				"value": "integrations_get_integrations_id_credentials",
				"action": "Get, save, or delete integration credentials",
				"description": "Requires features: integrations.credentials.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/integrations/{{ $parameter.id_string }}/credentials"
					}
				}
			},
			{
				"name": "Get, save, or delete integration credentials",
				"value": "integrations_put_integrations_id_credentials",
				"action": "Get, save, or delete integration credentials",
				"description": "Requires features: integrations.credentials.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/integrations/{{ $parameter.id_string }}/credentials"
					}
				}
			},
			{
				"name": "Get, save, or delete integration credentials",
				"value": "integrations_delete_integrations_id_credentials",
				"action": "Get, save, or delete integration credentials",
				"description": "Requires features: integrations.credentials.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/integrations/{{ $parameter.id_string }}/credentials"
					}
				}
			},
			{
				"name": "Run health check for an integration",
				"value": "integrations_post_integrations_id_health",
				"action": "Run health check for an integration",
				"description": "Requires features: integrations.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/integrations/{{ $parameter.id_string }}/health"
					}
				}
			},
			{
				"name": "Get integration detail",
				"value": "integrations_get_integrations_id",
				"action": "Get integration detail",
				"description": "Requires features: integrations.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/integrations/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Update integration state",
				"value": "integrations_put_integrations_id_state",
				"action": "Update integration state",
				"description": "Requires features: integrations.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/integrations/{{ $parameter.id_string }}/state"
					}
				}
			},
			{
				"name": "Change integration API version",
				"value": "integrations_put_integrations_id_version",
				"action": "Change integration API version",
				"description": "Requires features: integrations.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/integrations/{{ $parameter.id_string }}/version"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "List scheduledjobs",
				"value": "scheduler_get_scheduler_jobs",
				"action": "List scheduledjobs",
				"description": "Returns a paginated collection of scheduledjobs scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/scheduler/jobs"
					}
				}
			},
			{
				"name": "Create scheduledjob",
				"value": "scheduler_post_scheduler_jobs",
				"action": "Create scheduledjob",
				"description": "Creates a new scheduled job with cron or interval-based scheduling.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/scheduler/jobs"
					}
				}
			},
			{
				"name": "Update scheduledjob",
				"value": "scheduler_put_scheduler_jobs",
				"action": "Update scheduledjob",
				"description": "Updates an existing scheduled job by ID.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/scheduler/jobs"
					}
				}
			},
			{
				"name": "Delete scheduledjob",
				"value": "scheduler_delete_scheduler_jobs",
				"action": "Delete scheduledjob",
				"description": "Deletes a scheduled job by ID.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/scheduler/jobs"
					}
				}
			},
			{
				"name": "List available queues and commands",
				"value": "listScheduleTargets",
				"action": "List available queues and commands",
				"description": "Returns all registered queue names (from module workers) and command IDs (from the command registry) that can be used as schedule targets.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/scheduler/targets"
					}
				}
			},
			{
				"name": "Manually trigger a schedule",
				"value": "triggerScheduledJob",
				"action": "Manually trigger a schedule",
				"description": "Executes a scheduled job immediately, bypassing the scheduled time. Only works with async queue strategy.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/scheduler/trigger"
					}
				}
			},
			{
				"name": "Get execution history for a schedule",
				"value": "getScheduleExecutions",
				"action": "Get execution history for a schedule",
				"description": "Fetch recent executions from BullMQ for a scheduled job. Requires QUEUE_STRATEGY=async.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/scheduler/jobs/{{ $parameter.id_string }}/executions"
					}
				}
			},
			{
				"name": "Get BullMQ job details and logs",
				"value": "getQueueJobDetails",
				"action": "Get BullMQ job details and logs",
				"description": "Fetch detailed information and logs for a queue job. Requires QUEUE_STRATEGY=async.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/scheduler/queue-jobs/{{ $parameter.jobId_string }}"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"attemptsMade",
						"data",
						"failedReason",
						"finishedOn",
						"id",
						"logs",
						"name",
						"processedOn",
						"progress",
						"returnvalue"
					]
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Cancel vector reindex",
				"value": "search_post_search_embeddings_reindex_cancel",
				"action": "Cancel vector reindex",
				"description": "Cancels an in-progress vector reindex operation.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/search/embeddings/reindex/cancel"
					}
				}
			},
			{
				"name": "Trigger vector reindex",
				"value": "search_post_search_embeddings_reindex",
				"action": "Trigger vector reindex",
				"description": "Starts a vector embedding reindex operation.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/search/embeddings/reindex"
					}
				}
			},
			{
				"name": "Get embeddings configuration",
				"value": "search_get_search_embeddings",
				"action": "Get embeddings configuration",
				"description": "Returns current embedding provider and model configuration.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/embeddings"
					}
				}
			},
			{
				"name": "Update embeddings configuration",
				"value": "search_post_search_embeddings",
				"action": "Update embeddings configuration",
				"description": "Updates the embedding provider and model settings.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/search/embeddings"
					}
				}
			},
			{
				"name": "List vector index entries",
				"value": "search_get_search_index",
				"action": "List vector index entries",
				"description": "Returns paginated list of entries in the vector search index.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/index"
					}
				}
			},
			{
				"name": "Purge vector index",
				"value": "search_delete_search_index",
				"action": "Purge vector index",
				"description": "Purges entries from the vector search index. Requires confirmAll=true when purging all entities.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/search/index"
					}
				}
			},
			{
				"name": "Cancel fulltext reindex",
				"value": "search_post_search_reindex_cancel",
				"action": "Cancel fulltext reindex",
				"description": "Cancels an in-progress fulltext reindex operation.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/search/reindex/cancel"
					}
				}
			},
			{
				"name": "Trigger fulltext reindex",
				"value": "search_post_search_reindex",
				"action": "Trigger fulltext reindex",
				"description": "Starts a fulltext (Meilisearch) reindex operation. Can clear, recreate, or fully reindex.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/search/reindex"
					}
				}
			},
			{
				"name": "Global search (Cmd+K)",
				"value": "search_get_search_search_global",
				"action": "Global search (Cmd+K)",
				"description": "Performs a global search using saved tenant strategies. Does NOT accept strategies from URL.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/search/global"
					}
				}
			},
			{
				"name": "Search across all indexed entities",
				"value": "search_get_search_search",
				"action": "Search across all indexed entities",
				"description": "Performs a search using configured strategies (fulltext, vector, tokens). Use for search playground.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/search"
					}
				}
			},
			{
				"name": "Get fulltext search configuration",
				"value": "search_get_search_settings_fulltext",
				"action": "Get fulltext search configuration",
				"description": "Returns Meilisearch configuration status and index statistics.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/settings/fulltext"
					}
				}
			},
			{
				"name": "Get global search strategies",
				"value": "search_get_search_settings_global_search",
				"action": "Get global search strategies",
				"description": "Returns the enabled strategies for Cmd+K global search.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/settings/global-search"
					}
				}
			},
			{
				"name": "Update global search strategies",
				"value": "search_post_search_settings_global_search",
				"action": "Update global search strategies",
				"description": "Sets which strategies are enabled for Cmd+K global search.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/search/settings/global-search"
					}
				}
			},
			{
				"name": "Get search settings and status",
				"value": "search_get_search_settings",
				"action": "Get search settings and status",
				"description": "Returns search module configuration, available strategies, and reindex lock status.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/settings"
					}
				}
			},
			{
				"name": "Get vector store configuration",
				"value": "search_get_search_settings_vector_store",
				"action": "Get vector store configuration",
				"description": "Returns vector store configuration status.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/settings/vector-store"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Get stored company profile",
				"value": "ksef_get_ksef_company_profile",
				"action": "Get stored company profile",
				"description": "Returns the company profile, or null if not yet set up",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/ksef/company-profile"
					}
				}
			},
			{
				"name": "Save company profile manually",
				"value": "ksef_put_ksef_company_profile",
				"action": "Save company profile manually",
				"description": "Manually set the company profile for KSeF invoice generation",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/ksef/company-profile"
					}
				}
			},
			{
				"name": "Delete all synced KSeF invoices",
				"value": "ksef_delete_ksef_invoices_clear_synced",
				"action": "Delete all synced KSeF invoices",
				"description": "Removes synced invoices and their submissions from the database. Use for testing to allow re-syncing.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/ksef/invoices/clear-synced"
					}
				}
			},
			{
				"name": "Import invoice from FA(3) XML",
				"value": "ksef_post_ksef_invoices_import_xml",
				"action": "Import invoice from FA(3) XML",
				"description": "Parse a FA(3) XML file and create a KSeF invoice with line items",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/ksef/invoices/import-xml"
					}
				}
			},
			{
				"name": "List KSeF invoices",
				"value": "ksef_get_ksef_invoices",
				"action": "List KSeF invoices",
				"description": "Returns paginated list of KSeF invoices with filtering by direction, date, and search",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/ksef/invoices"
					}
				}
			},
			{
				"name": "Create KSeF invoice",
				"value": "ksef_post_ksef_invoices",
				"action": "Create KSeF invoice",
				"description": "Create a new invoice for KSeF submission",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/ksef/invoices"
					}
				}
			},
			{
				"name": "Lookup company by NIP via White List API",
				"value": "ksef_post_ksef_lookup_nip",
				"action": "Lookup company by NIP via White List API",
				"description": "Returns company data from the Ministry of Finance White List API without saving it. Use for buyer NIP verification on invoice forms.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/ksef/lookup-nip"
					}
				}
			},
			{
				"name": "List KSeF sessions",
				"value": "ksef_get_ksef_sessions",
				"action": "List KSeF sessions",
				"description": "Returns paginated list of KSeF authentication sessions",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/ksef/sessions"
					}
				}
			},
			{
				"name": "Get KSeF sync settings",
				"value": "ksef_get_ksef_settings",
				"action": "Get KSeF sync settings",
				"description": "Returns the current automatic sync configuration for KSeF received invoices",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/ksef/settings"
					}
				}
			},
			{
				"name": "Update KSeF sync settings",
				"value": "ksef_put_ksef_settings",
				"action": "Update KSeF sync settings",
				"description": "Configure automatic scheduled syncing of received invoices from KSeF",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/ksef/settings"
					}
				}
			},
			{
				"name": "Submit multiple invoices to KSeF",
				"value": "ksef_post_ksef_submit_batch",
				"action": "Submit multiple invoices to KSeF",
				"description": "Queue multiple KSeF invoices for submission in batch",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/ksef/submit-batch"
					}
				}
			},
			{
				"name": "Sync received invoices from KSeF",
				"value": "ksef_post_ksef_sync_received",
				"action": "Sync received invoices from KSeF",
				"description": "Start a background job to download and import received invoices from KSeF",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/ksef/sync-received"
					}
				}
			},
			{
				"name": "Verify NIP against Polish White List API",
				"value": "ksef_post_ksef_verify_nip",
				"action": "Verify NIP against Polish White List API",
				"description": "Fetches company data from the Ministry of Finance White List API (Biała Lista) and stores the company profile",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/ksef/verify-nip"
					}
				}
			},
			{
				"name": "Generate FA(3) XML for an invoice",
				"value": "ksef_post_ksef_generate_xml_id",
				"action": "Generate FA(3) XML for an invoice",
				"description": "Preview the FA(3) XML that would be submitted to KSeF for the specified invoice",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/ksef/generate-xml/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Get KSeF invoice detail",
				"value": "ksef_get_ksef_invoices_id",
				"action": "Get KSeF invoice detail",
				"description": "Returns invoice with line items and KSeF submission status",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/ksef/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Update KSeF invoice",
				"value": "ksef_put_ksef_invoices_id",
				"action": "Update KSeF invoice",
				"description": "Update an existing KSeF invoice and its line items",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/ksef/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Delete KSeF invoice",
				"value": "ksef_delete_ksef_invoices_id",
				"action": "Delete KSeF invoice",
				"description": "Soft-delete a KSeF invoice (cannot delete if submission is active)",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/ksef/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Get KSeF session details",
				"value": "ksef_get_ksef_sessions_id",
				"action": "Get KSeF session details",
				"description": "Returns details of a specific KSeF session",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/ksef/sessions/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Get KSeF submission status for an invoice",
				"value": "ksef_get_ksef_status_id",
				"action": "Get KSeF submission status for an invoice",
				"description": "Returns the current KSeF submission status for the specified invoice",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/ksef/status/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Submit a single invoice to KSeF",
				"value": "ksef_post_ksef_submit_id",
				"action": "Submit a single invoice to KSeF",
				"description": "Queue a KSeF invoice for submission to the Polish KSeF system",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/ksef/submit/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"KSeF"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "List available bank statement parsers",
				"value": "finance_get_finance_bank_parsers",
				"action": "List available bank statement parsers",
				"description": "Returns list of supported bank statement parsers for file upload",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/bank-parsers"
					}
				}
			},
			{
				"name": "List bank statements",
				"value": "finance_get_finance_bank_statements",
				"action": "List bank statements",
				"description": "Returns paginated list of uploaded bank statements",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/bank-statements"
					}
				}
			},
			{
				"name": "Upload bank statement PDFs",
				"value": "finance_post_finance_bank_statements",
				"action": "Upload bank statement PDFs",
				"description": "Upload one or more bank statement PDFs for parsing and import. Requires parserId and files in multipart form data.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/bank-statements"
					}
				}
			},
			{
				"name": "List bank transactions",
				"value": "finance_get_finance_bank_transactions",
				"action": "List bank transactions",
				"description": "Returns paginated list of bank transactions with full-text search across all fields",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/bank-transactions"
					}
				}
			},
			{
				"name": "Batch assign category to bank transactions and invoice line items",
				"value": "finance_post_finance_expense_categories_assign",
				"action": "Batch assign category to bank transactions and invoice line items",
				"description": "Requires features: finance.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/expense-categories/assign"
					}
				}
			},
			{
				"name": "Batch auto-categorize uncategorized items via vector similarity with LLM fallback",
				"value": "finance_post_finance_expense_categories_auto_categorize",
				"action": "Batch auto-categorize uncategorized items via vector similarity with LLM fallback",
				"description": "Requires features: finance.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/expense-categories/auto-categorize"
					}
				}
			},
			{
				"name": "List expense categories",
				"value": "finance_get_finance_expense_categories",
				"action": "List expense categories",
				"description": "Requires features: finance.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/expense-categories"
					}
				}
			},
			{
				"name": "Create expense category or seed defaults",
				"value": "finance_post_finance_expense_categories",
				"action": "Create expense category or seed defaults",
				"description": "Requires features: finance.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/expense-categories"
					}
				}
			},
			{
				"name": "Suggest category for a bank transaction or invoice line item using vector similarity",
				"value": "finance_post_finance_expense_categories_suggest",
				"action": "Suggest category for a bank transaction or invoice line item using vector similarity",
				"description": "Requires features: finance.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/expense-categories/suggest"
					}
				}
			},
			{
				"name": "Get invoice counts grouped by tab",
				"value": "finance_get_finance_invoices_counts",
				"action": "Get invoice counts grouped by tab",
				"description": "Requires features: finance.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/invoices/counts"
					}
				}
			},
			{
				"name": "Create draft (planned cost) invoice",
				"value": "finance_post_finance_invoices_draft",
				"action": "Create draft (planned cost) invoice",
				"description": "Lightweight invoice creation with minimal fields — no number, no line items required.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/invoices/draft"
					}
				}
			},
			{
				"name": "List finance invoices",
				"value": "finance_get_finance_invoices",
				"action": "List finance invoices",
				"description": "Returns paginated list of finance invoices with full-text search",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/invoices"
					}
				}
			},
			{
				"name": "Create finance invoice",
				"value": "finance_post_finance_invoices",
				"action": "Create finance invoice",
				"description": "Create a new invoice with line items",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/invoices"
					}
				}
			},
			{
				"name": "Fetch NBP Table A mid rate for a currency",
				"value": "finance_get_finance_nbp_rate",
				"action": "Fetch NBP Table A mid rate for a currency",
				"description": "Returns the NBP mid rate (Table A) on the business day preceding the given date — complies with Polish VAT Act day-before rule for FA(3) invoices.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/nbp-rate"
					}
				}
			},
			{
				"name": "GET /finance/planned-payments",
				"value": "finance_get_finance_planned_payments",
				"action": "GET /finance/planned-payments",
				"description": "Requires features: finance.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/planned-payments"
					}
				}
			},
			{
				"name": "POST /finance/planned-payments",
				"value": "finance_post_finance_planned_payments",
				"action": "POST /finance/planned-payments",
				"description": "Requires features: finance.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/planned-payments"
					}
				}
			},
			{
				"name": "PUT /finance/planned-payments",
				"value": "finance_put_finance_planned_payments",
				"action": "PUT /finance/planned-payments",
				"description": "Requires features: finance.view",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/finance/planned-payments"
					}
				}
			},
			{
				"name": "DELETE /finance/planned-payments",
				"value": "finance_delete_finance_planned_payments",
				"action": "DELETE /finance/planned-payments",
				"description": "Requires features: finance.view",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/finance/planned-payments"
					}
				}
			},
			{
				"name": "GET /finance/stats/annotations",
				"value": "finance_get_finance_stats_annotations",
				"action": "GET /finance/stats/annotations",
				"description": "Requires features: finance.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/stats/annotations"
					}
				}
			},
			{
				"name": "Historical cash flow + projected balance from unpaid invoices",
				"value": "finance_get_finance_stats_cash_flow_forecast",
				"action": "Historical cash flow + projected balance from unpaid invoices",
				"description": "Shows past paid invoice cash flow (history param, default 90 days) and forward forecast from unpaid invoices (horizon param, default 90 days), bucketed weekly.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/stats/cash-flow-forecast"
					}
				}
			},
			{
				"name": "Get grouped expenses/income data for the explorer widget",
				"value": "finance_get_finance_stats_expenses_explorer",
				"action": "Get grouped expenses/income data for the explorer widget",
				"description": "Returns bank transactions and invoice line items grouped by category, counterparty, month, or week, with invoice-bank matching",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/stats/expenses-explorer"
					}
				}
			},
			{
				"name": "Get finance dashboard statistics",
				"value": "finance_get_finance_stats",
				"action": "Get finance dashboard statistics",
				"description": "Requires features: finance.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/stats"
					}
				}
			},
			{
				"name": "Bank transfer inflows/outflows over time",
				"value": "finance_get_finance_stats_transfers_timeseries",
				"action": "Bank transfer inflows/outflows over time",
				"description": "Aggregates bank transactions by day or week. Outflows are returned as positive numbers for charting.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/stats/transfers-timeseries"
					}
				}
			},
			{
				"name": "Update expense category",
				"value": "finance_patch_finance_expense_categories_id",
				"action": "Update expense category",
				"description": "Requires features: finance.edit",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/finance/expense-categories/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Delete expense category",
				"value": "finance_delete_finance_expense_categories_id",
				"action": "Delete expense category",
				"description": "Requires features: finance.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/finance/expense-categories/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Approve and submit invoice to KSeF",
				"value": "finance_post_finance_invoices_id_approve",
				"action": "Approve and submit invoice to KSeF",
				"description": "Marks invoice as confirmed and queues it for KSeF submission",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/invoices/{{ $parameter.id_string }}/approve"
					}
				}
			},
			{
				"name": "List likely bank payments for an invoice",
				"value": "finance_get_finance_invoices_id_bank_matches",
				"action": "List likely bank payments for an invoice",
				"description": "Returns ranked candidate bank transactions that may correspond to this invoice payment, based on amount, counterparty, and date proximity.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/invoices/{{ $parameter.id_string }}/bank-matches"
					}
				}
			},
			{
				"name": "Cancel a KSeF-accepted invoice by creating a correction-to-zero",
				"value": "finance_post_finance_invoices_id_cancel",
				"action": "Cancel a KSeF-accepted invoice by creating a correction-to-zero",
				"description": "KSeF does not support true cancellation. This creates a KOR invoice that negates all line items.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/invoices/{{ $parameter.id_string }}/cancel"
					}
				}
			},
			{
				"name": "Promote draft invoice",
				"value": "finance_post_finance_invoices_id_convert_draft",
				"action": "Promote draft invoice",
				"description": "Sets isDraft=false and applies the given invoice number and details.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/invoices/{{ $parameter.id_string }}/convert-draft"
					}
				}
			},
			{
				"name": "Create a KOR correction invoice from an accepted invoice",
				"value": "finance_post_finance_invoices_id_create_correction",
				"action": "Create a KOR correction invoice from an accepted invoice",
				"description": "Only works on KSeF-accepted invoices. Creates a linked KOR draft with original line items as pre-state rows.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/invoices/{{ $parameter.id_string }}/create-correction"
					}
				}
			},
			{
				"name": "Mark invoice as paid",
				"value": "finance_post_finance_invoices_id_payment",
				"action": "Mark invoice as paid",
				"description": "Sets the paid_at timestamp on an invoice. If body.paidAt is null/omitted, uses current time.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/invoices/{{ $parameter.id_string }}/payment"
					}
				}
			},
			{
				"name": "Mark invoice as unpaid",
				"value": "finance_delete_finance_invoices_id_payment",
				"action": "Mark invoice as unpaid",
				"description": "Clears the paid_at timestamp on an invoice.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/finance/invoices/{{ $parameter.id_string }}/payment"
					}
				}
			},
			{
				"name": "Generate invoice PDF",
				"value": "finance_get_finance_invoices_id_pdf",
				"action": "Generate invoice PDF",
				"description": "Returns a PDF document for the invoice with KSeF QR code if submitted",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/invoices/{{ $parameter.id_string }}/pdf"
					}
				}
			},
			{
				"name": "Reset a KSeF-rejected invoice to draft for editing and resubmission",
				"value": "finance_post_finance_invoices_id_resubmit",
				"action": "Reset a KSeF-rejected invoice to draft for editing and resubmission",
				"description": "Only works on invoices with ksefStatus rejected or error. Clears KSeF state, returns invoice to unconfirmed draft.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/invoices/{{ $parameter.id_string }}/resubmit"
					}
				}
			},
			{
				"name": "Get invoice by ID",
				"value": "finance_get_finance_invoices_id",
				"action": "Get invoice by ID",
				"description": "Returns invoice with line items",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Update invoice",
				"value": "finance_put_finance_invoices_id",
				"action": "Update invoice",
				"description": "Update invoice fields and optionally replace line items",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/finance/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Delete invoice",
				"value": "finance_delete_finance_invoices_id",
				"action": "Delete invoice",
				"description": "Soft-delete an invoice",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/finance/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Send invoice PDF via email",
				"value": "finance_post_finance_invoices_id_send_email",
				"action": "Send invoice PDF via email",
				"description": "Generates a PDF and sends it as an email attachment",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/finance/invoices/{{ $parameter.id_string }}/send-email"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "List contractors",
				"value": "contractors_get_contractors_contractors",
				"action": "List contractors",
				"description": "Returns paginated list of contractors with full-text search",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors"
					}
				}
			},
			{
				"name": "Create contractor",
				"value": "contractors_post_contractors_contractors",
				"action": "Create contractor",
				"description": "Create a new contractor manually",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/contractors"
					}
				}
			},
			{
				"name": "Update contractor",
				"value": "contractors_patch_contractors_contractors",
				"action": "Update contractor",
				"description": "Update contractor details or change verification status",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/contractors/contractors"
					}
				}
			},
			{
				"name": "Fetch a single contractor by its UUID",
				"value": "contractors_get_contractors_contractors_id",
				"action": "Fetch a single contractor by its UUID",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Contractors"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "GET /freight_documents/documents",
				"value": "freight_documents_get_freight_documents_documents",
				"action": "GET /freight_documents/documents",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents"
					}
				}
			},
			{
				"name": "POST /freight_documents/documents",
				"value": "freight_documents_post_freight_documents_documents",
				"action": "POST /freight_documents/documents",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/freight_documents/documents"
					}
				}
			},
			{
				"name": "Upload document",
				"value": "freight_documents_post_freight_documents_upload",
				"action": "Upload document",
				"description": "Upload a new FMS document with metadata. The file is stored as an attachment and PDF pages are extracted automatically.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/freight_documents/upload"
					}
				}
			},
			{
				"name": "GET /freight_documents/documents/{id}/download",
				"value": "freight_documents_get_freight_documents_documents_id_download",
				"action": "GET /freight_documents/documents/{id}/download",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/download"
					}
				}
			},
			{
				"name": "GET /freight_documents/documents/{id}/extract",
				"value": "freight_documents_get_freight_documents_documents_id_extract",
				"action": "GET /freight_documents/documents/{id}/extract",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/extract"
					}
				}
			},
			{
				"name": "POST /freight_documents/documents/{id}/extract",
				"value": "freight_documents_post_freight_documents_documents_id_extract",
				"action": "POST /freight_documents/documents/{id}/extract",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/extract"
					}
				}
			},
			{
				"name": "POST /freight_documents/documents/{id}/feedback",
				"value": "freight_documents_post_freight_documents_documents_id_feedback",
				"action": "POST /freight_documents/documents/{id}/feedback",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/feedback"
					}
				}
			},
			{
				"name": "POST /freight_documents/documents/{id}/link",
				"value": "freight_documents_post_freight_documents_documents_id_link",
				"action": "POST /freight_documents/documents/{id}/link",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/link"
					}
				}
			},
			{
				"name": "GET /freight_documents/documents/{id}/pages/{pageNum}/image",
				"value": "freight_documents_get_freight_documents_documents_id_pages_pageNum_image",
				"action": "GET /freight_documents/documents/{id}/pages/{pageNum}/image",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/pages/{{ $parameter.pageNum_string }}/image"
					}
				}
			},
			{
				"name": "GET /freight_documents/documents/{id}/pages",
				"value": "freight_documents_get_freight_documents_documents_id_pages",
				"action": "GET /freight_documents/documents/{id}/pages",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/pages"
					}
				}
			},
			{
				"name": "GET /freight_documents/documents/{id}",
				"value": "freight_documents_get_freight_documents_documents_id",
				"action": "GET /freight_documents/documents/{id}",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /freight_documents/documents/{id}",
				"value": "freight_documents_put_freight_documents_documents_id",
				"action": "PUT /freight_documents/documents/{id}",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PATCH /freight_documents/documents/{id}",
				"value": "freight_documents_patch_freight_documents_documents_id",
				"action": "PATCH /freight_documents/documents/{id}",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /freight_documents/documents/{id}",
				"value": "freight_documents_delete_freight_documents_documents_id",
				"action": "DELETE /freight_documents/documents/{id}",
				"description": "Requires features: freight_documents.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PATCH /freight_documents/documents/{id}/sections/{sectionId}",
				"value": "freight_documents_patch_freight_documents_documents_id_sections_sectionId",
				"action": "PATCH /freight_documents/documents/{id}/sections/{sectionId}",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/sections/{{ $parameter.sectionId_string }}"
					}
				}
			},
			{
				"name": "POST /freight_documents/documents/{id}/sections/{sectionId}/set-label",
				"value": "freight_documents_post_freight_documents_documents_id_sections_sectionId_set_label",
				"action": "POST /freight_documents/documents/{id}/sections/{sectionId}/set-label",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/sections/{{ $parameter.sectionId_string }}/set-label"
					}
				}
			},
			{
				"name": "GET /freight_documents/documents/{id}/sections",
				"value": "freight_documents_get_freight_documents_documents_id_sections",
				"action": "GET /freight_documents/documents/{id}/sections",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/sections"
					}
				}
			},
			{
				"name": "POST /freight_documents/documents/{id}/unlink",
				"value": "freight_documents_post_freight_documents_documents_id_unlink",
				"action": "POST /freight_documents/documents/{id}/unlink",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/unlink"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Generate PDF from document template",
				"value": "templating_post_templating_templates_generate",
				"action": "Generate PDF from document template",
				"description": "Requires features: templating.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/templating/templates/generate"
					}
				}
			},
			{
				"name": "Get document template(s)",
				"value": "templating_get_templating_templates",
				"action": "Get document template(s)",
				"description": "Requires features: templating.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/templating/templates"
					}
				}
			},
			{
				"name": "Create document template",
				"value": "templating_post_templating_templates",
				"action": "Create document template",
				"description": "Requires features: templating.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/templating/templates"
					}
				}
			},
			{
				"name": "Update document template (upsert)",
				"value": "templating_put_templating_templates",
				"action": "Update document template (upsert)",
				"description": "Requires features: templating.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/templating/templates"
					}
				}
			},
			{
				"name": "Delete document template",
				"value": "templating_delete_templating_templates",
				"action": "Delete document template",
				"description": "Requires features: templating.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/templating/templates"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Batch get annotations",
				"value": "annotations_get_annotations_annotations",
				"action": "Batch get annotations",
				"description": "Returns annotations for a given entity type and set of row IDs, including nested comments.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/annotations/annotations"
					}
				}
			},
			{
				"name": "Create or update annotation",
				"value": "annotations_post_annotations_annotations",
				"action": "Create or update annotation",
				"description": "Creates a cell annotation. If one already exists for the same cell, updates it instead.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/annotations/annotations"
					}
				}
			},
			{
				"name": "Batch set color",
				"value": "annotations_put_annotations_annotations",
				"action": "Batch set color",
				"description": "Sets the color for multiple cells at once. Creates annotations for cells that do not have one yet.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/annotations/annotations"
					}
				}
			},
			{
				"name": "Update annotation color",
				"value": "annotations_patch_annotations_annotations",
				"action": "Update annotation color",
				"description": "Updates the color of an existing cell annotation. Pass annotation id via query string.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/annotations/annotations"
					}
				}
			},
			{
				"name": "Delete annotation",
				"value": "annotations_delete_annotations_annotations",
				"action": "Delete annotation",
				"description": "Soft-deletes an annotation. Pass annotation id via query string or body.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/annotations/annotations"
					}
				}
			},
			{
				"name": "Add comment to annotation",
				"value": "annotations_post_annotations_annotations_annotationId_comments",
				"action": "Add comment to annotation",
				"description": "Creates a new comment on a cell annotation.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/annotations/annotations/{{ $parameter.annotationId_string }}/comments"
					}
				}
			},
			{
				"name": "Delete comment",
				"value": "annotations_delete_annotations_annotations_annotationId_comments",
				"action": "Delete comment",
				"description": "Soft-deletes a comment. Pass commentId via query string or body.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/annotations/annotations/{{ $parameter.annotationId_string }}/comments"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value }}"
				}
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"description": "API key identifier to delete",
		"displayOptions": {
			"show": {
				"resource": [
					"API Keys"
				],
				"operation": [
					"api_keys_delete_api_keys_keys"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Page",
				"name": "page_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Search",
				"name": "search_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_string }}",
					"pageSize": "={{ $value.pageSize_string }}",
					"search": "={{ $value.search_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"API Keys"
				],
				"operation": [
					"api_keys_get_api_keys_keys"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"API Keys"
				],
				"operation": [
					"api_keys_post_api_keys_keys"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_api_keys_post_api_keys_keys",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"API Keys"
				],
				"operation": [
					"api_keys_post_api_keys_keys"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			},
			{
				"type": "json",
				"displayName": "Roles",
				"name": "roles_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Expires At",
				"name": "expiresAt_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"roles": "={{ JSON.parse($value.roles_json) }}",
					"expiresAt": "={{ $value.expiresAt_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"API Keys"
				],
				"operation": [
					"api_keys_post_api_keys_keys"
				],
				"bodyInputMode_api_keys_post_api_keys_keys": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_api_keys_post_api_keys_keys",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"API Keys"
				],
				"operation": [
					"api_keys_post_api_keys_keys"
				],
				"bodyInputMode_api_keys_post_api_keys_keys": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value.id_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_delete_annotations_annotations"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Annotation Id",
		"name": "annotationId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_delete_annotations_annotations_annotationId_comments"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Comment Id",
				"name": "commentId_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"commentId": "={{ $value.commentId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_delete_annotations_annotations_annotationId_comments"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"entityType": "={{ $value }}"
				}
			}
		},
		"displayName": "Entity Type",
		"name": "entityType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_get_annotations_annotations"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"rowIds": "={{ $value }}"
				}
			}
		},
		"displayName": "Row Ids",
		"name": "rowIds_string",
		"required": true,
		"description": "Comma-separated row IDs",
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_get_annotations_annotations"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "gray",
				"value": "gray"
			},
			{
				"name": "pink",
				"value": "pink"
			},
			{
				"name": "orange",
				"value": "orange"
			},
			{
				"name": "yellow",
				"value": "yellow"
			},
			{
				"name": "green",
				"value": "green"
			},
			{
				"name": "blue",
				"value": "blue"
			},
			{
				"name": "purple",
				"value": "purple"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "color"
			}
		},
		"displayName": "Color",
		"name": "color_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_patch_annotations_annotations"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value }}"
				}
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_patch_annotations_annotations"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "columnKey"
			}
		},
		"displayName": "Column Key",
		"name": "columnKey_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_post_annotations_annotations"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityType"
			}
		},
		"displayName": "Entity Type",
		"name": "entityType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_post_annotations_annotations"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "rowId"
			}
		},
		"displayName": "Row Id",
		"name": "rowId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_post_annotations_annotations"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_annotations_post_annotations_annotations",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_post_annotations_annotations"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Table Id",
				"name": "tableId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "gray",
						"value": "gray"
					},
					{
						"name": "pink",
						"value": "pink"
					},
					{
						"name": "orange",
						"value": "orange"
					},
					{
						"name": "yellow",
						"value": "yellow"
					},
					{
						"name": "green",
						"value": "green"
					},
					{
						"name": "blue",
						"value": "blue"
					},
					{
						"name": "purple",
						"value": "purple"
					}
				],
				"displayName": "Color",
				"name": "color_options"
			}
		],
		"routing": {
			"request": {
				"body": {
					"tableId": "={{ $value.tableId_string }}",
					"color": "={{ $value.color_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_post_annotations_annotations"
				],
				"bodyInputMode_annotations_post_annotations_annotations": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_annotations_post_annotations_annotations",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_post_annotations_annotations"
				],
				"bodyInputMode_annotations_post_annotations_annotations": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Annotation Id",
		"name": "annotationId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_post_annotations_annotations_annotationId_comments"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "content"
			}
		},
		"displayName": "Content",
		"name": "content_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_post_annotations_annotations_annotationId_comments"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_annotations_post_annotations_annotations_annotationId_comments",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_post_annotations_annotations_annotationId_comments"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "json",
				"displayName": "Mentioned User Ids",
				"name": "mentionedUserIds_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"mentionedUserIds": "={{ JSON.parse($value.mentionedUserIds_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_post_annotations_annotations_annotationId_comments"
				],
				"bodyInputMode_annotations_post_annotations_annotations_annotationId_comments": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_annotations_post_annotations_annotations_annotationId_comments",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_post_annotations_annotations_annotationId_comments"
				],
				"bodyInputMode_annotations_post_annotations_annotations_annotationId_comments": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "json",
		"displayName": "Cells",
		"name": "cells_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "cells"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_put_annotations_annotations"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityType"
			}
		},
		"displayName": "Entity Type",
		"name": "entityType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_put_annotations_annotations"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_annotations_put_annotations_annotations",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_put_annotations_annotations"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Table Id",
				"name": "tableId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "gray",
						"value": "gray"
					},
					{
						"name": "pink",
						"value": "pink"
					},
					{
						"name": "orange",
						"value": "orange"
					},
					{
						"name": "yellow",
						"value": "yellow"
					},
					{
						"name": "green",
						"value": "green"
					},
					{
						"name": "blue",
						"value": "blue"
					},
					{
						"name": "purple",
						"value": "purple"
					}
				],
				"displayName": "Color",
				"name": "color_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Comment",
				"name": "comment_string"
			},
			{
				"type": "json",
				"displayName": "Mentioned User Ids",
				"name": "mentionedUserIds_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"tableId": "={{ $value.tableId_string }}",
					"color": "={{ $value.color_options }}",
					"comment": "={{ $value.comment_string }}",
					"mentionedUserIds": "={{ JSON.parse($value.mentionedUserIds_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_put_annotations_annotations"
				],
				"bodyInputMode_annotations_put_annotations_annotations": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_annotations_put_annotations_annotations",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Annotations"
				],
				"operation": [
					"annotations_put_annotations_annotations"
				],
				"bodyInputMode_annotations_put_annotations_annotations": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value }}"
				}
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_delete_attachments"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_delete_attachments_library_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"entityId": "={{ $value }}"
				}
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"description": "Entity identifier that owns the attachments",
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_get_attachments"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"recordId": "={{ $value }}"
				}
			}
		},
		"displayName": "Record Id",
		"name": "recordId_string",
		"required": true,
		"description": "Record identifier within the entity",
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_get_attachments"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_get_attachments_file_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_get_attachments_image_id_slug"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Slug",
				"name": "slug_string"
			}
		],
		"routing": {
			"request": {}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_get_attachments_image_id_slug"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number",
				"description": "Page number for pagination"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number",
				"description": "Number of items per page (max 100)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Search",
				"name": "search_string",
				"description": "Search by file name (case-insensitive)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Partition",
				"name": "partition_string",
				"description": "Filter by partition code"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tags",
				"name": "tags_string",
				"description": "Filter by tags (comma-separated)"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "fileName",
						"value": "fileName"
					},
					{
						"name": "fileSize",
						"value": "fileSize"
					},
					{
						"name": "createdAt",
						"value": "createdAt"
					}
				],
				"displayName": "Sort Field",
				"name": "sortField_options",
				"description": "Field to sort by"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "asc",
						"value": "asc"
					},
					{
						"name": "desc",
						"value": "desc"
					}
				],
				"displayName": "Sort Dir",
				"name": "sortDir_options",
				"description": "Sort direction"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"partition": "={{ $value.partition_string }}",
					"tags": "={{ $value.tags_string }}",
					"sortField": "={{ $value.sortField_options }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_get_attachments_library"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_get_attachments_library_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_patch_attachments_library_id"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_attachments_patch_attachments_library_id",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_patch_attachments_library_id"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "json",
				"displayName": "Tags",
				"name": "tags_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Assignments",
				"name": "assignments_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"tags": "={{ JSON.parse($value.tags_json) }}",
					"assignments": "={{ JSON.parse($value.assignments_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_patch_attachments_library_id"
				],
				"bodyInputMode_attachments_patch_attachments_library_id": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_attachments_patch_attachments_library_id",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_patch_attachments_library_id"
				],
				"bodyInputMode_attachments_patch_attachments_library_id": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityId"
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "file"
			}
		},
		"displayName": "File",
		"name": "file_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "recordId"
			}
		},
		"displayName": "Record Id",
		"name": "recordId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_attachments_post_attachments",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Field Key",
				"name": "fieldKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Custom Fields",
				"name": "customFields_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"fieldKey": "={{ $value.fieldKey_string }}",
					"customFields": "={{ $value.customFields_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments"
				],
				"bodyInputMode_attachments_post_attachments": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_attachments_post_attachments",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments"
				],
				"bodyInputMode_attachments_post_attachments": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[A-Za-z0-9_-]+$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "code"
			}
		},
		"displayName": "Code",
		"name": "code_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments_partitions"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "title"
			}
		},
		"displayName": "Title",
		"name": "title_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments_partitions"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_attachments_post_attachments_partitions",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments_partitions"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Public",
				"name": "isPublic_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Requires Ocr",
				"name": "requiresOcr_boolean"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ocr Model",
				"name": "ocrModel_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"isPublic": "={{ $value.isPublic_boolean }}",
					"requiresOcr": "={{ $value.requiresOcr_boolean }}",
					"ocrModel": "={{ $value.ocrModel_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments_partitions"
				],
				"bodyInputMode_attachments_post_attachments_partitions": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_attachments_post_attachments_partitions",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments_partitions"
				],
				"bodyInputMode_attachments_post_attachments_partitions": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "json",
		"displayName": "Attachment Ids",
		"name": "attachmentIds_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "attachmentIds"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments_transfer"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityId"
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments_transfer"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "toRecordId"
			}
		},
		"displayName": "To Record Id",
		"name": "toRecordId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments_transfer"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_attachments_post_attachments_transfer",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments_transfer"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "From Record Id",
				"name": "fromRecordId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"fromRecordId": "={{ $value.fromRecordId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments_transfer"
				],
				"bodyInputMode_attachments_post_attachments_transfer": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_attachments_post_attachments_transfer",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_post_attachments_transfer"
				],
				"bodyInputMode_attachments_post_attachments_transfer": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[A-Za-z0-9_-]+$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "code"
			}
		},
		"displayName": "Code",
		"name": "code_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_put_attachments_partitions"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_put_attachments_partitions"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "title"
			}
		},
		"displayName": "Title",
		"name": "title_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_put_attachments_partitions"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_attachments_put_attachments_partitions",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_put_attachments_partitions"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Public",
				"name": "isPublic_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Requires Ocr",
				"name": "requiresOcr_boolean"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ocr Model",
				"name": "ocrModel_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"isPublic": "={{ $value.isPublic_boolean }}",
					"requiresOcr": "={{ $value.requiresOcr_boolean }}",
					"ocrModel": "={{ $value.ocrModel_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_put_attachments_partitions"
				],
				"bodyInputMode_attachments_put_attachments_partitions": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_attachments_put_attachments_partitions",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Attachments"
				],
				"operation": [
					"attachments_put_attachments_partitions"
				],
				"bodyInputMode_attachments_put_attachments_partitions": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string",
				"description": "Limit results to a specific organization"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Actor User Id",
				"name": "actorUserId_string",
				"description": "Filter by actor user id (tenant administrators only)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Resource Kind",
				"name": "resourceKind_string",
				"description": "Restrict to a resource kind such as `order` or `product`"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Access Type",
				"name": "accessType_string",
				"description": "Access type filter, e.g. `read` or `export`"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Page",
				"name": "page_string",
				"description": "Page number (default 1)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_string",
				"description": "Page size (default 50)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Limit",
				"name": "limit_string",
				"description": "Explicit maximum number of records when paginating manually"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Before",
				"name": "before_string",
				"description": "Return logs created before this ISO-8601 timestamp"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "After",
				"name": "after_string",
				"description": "Return logs created after this ISO-8601 timestamp"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"organizationId": "={{ $value.organizationId_string }}",
					"actorUserId": "={{ $value.actorUserId_string }}",
					"resourceKind": "={{ $value.resourceKind_string }}",
					"accessType": "={{ $value.accessType_string }}",
					"page": "={{ $value.page_string }}",
					"pageSize": "={{ $value.pageSize_string }}",
					"limit": "={{ $value.limit_string }}",
					"before": "={{ $value.before_string }}",
					"after": "={{ $value.after_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Audit & Action Logs"
				],
				"operation": [
					"audit_logs_get_audit_logs_audit_logs_access"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string",
				"description": "Limit results to a specific organization"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Actor User Id",
				"name": "actorUserId_string",
				"description": "Filter logs created by a specific actor (tenant administrators only)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Resource Kind",
				"name": "resourceKind_string",
				"description": "Filter by resource kind (e.g., \"order\", \"product\")"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Resource Id",
				"name": "resourceId_string",
				"description": "Filter by resource ID (UUID of the specific record)"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "true",
						"value": "true"
					},
					{
						"name": "false",
						"value": "false"
					}
				],
				"displayName": "Include Related",
				"name": "includeRelated_options",
				"description": "When `true`, also returns changes to child entities linked via parentResourceKind/parentResourceId"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "true",
						"value": "true"
					},
					{
						"name": "false",
						"value": "false"
					}
				],
				"displayName": "Undoable Only",
				"name": "undoableOnly_options",
				"description": "When `true`, only undoable actions are returned"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Limit",
				"name": "limit_string",
				"description": "Maximum number of records to return (default 50)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Before",
				"name": "before_string",
				"description": "Return actions created before this ISO-8601 timestamp"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "After",
				"name": "after_string",
				"description": "Return actions created after this ISO-8601 timestamp"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"organizationId": "={{ $value.organizationId_string }}",
					"actorUserId": "={{ $value.actorUserId_string }}",
					"resourceKind": "={{ $value.resourceKind_string }}",
					"resourceId": "={{ $value.resourceId_string }}",
					"includeRelated": "={{ $value.includeRelated_options }}",
					"undoableOnly": "={{ $value.undoableOnly_options }}",
					"limit": "={{ $value.limit_string }}",
					"before": "={{ $value.before_string }}",
					"after": "={{ $value.after_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Audit & Action Logs"
				],
				"operation": [
					"audit_logs_get_audit_logs_audit_logs_actions"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "logId"
			}
		},
		"displayName": "Log Id",
		"name": "logId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Audit & Action Logs"
				],
				"operation": [
					"audit_logs_post_audit_logs_audit_logs_actions_redo"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "undoToken"
			}
		},
		"displayName": "Undo Token",
		"name": "undoToken_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Audit & Action Logs"
				],
				"operation": [
					"audit_logs_post_audit_logs_audit_logs_actions_undo"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"userId": "={{ $value }}"
				}
			}
		},
		"displayName": "User Id",
		"name": "userId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Auth"
				],
				"operation": [
					"auth_get_auth_users_consents"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value }}"
				}
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"description": "Role identifier",
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_delete_auth_roles"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value }}"
				}
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"description": "User identifier",
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_delete_auth_users"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Search",
				"name": "search_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value.id_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"tenantId": "={{ $value.tenantId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_get_auth_roles"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"roleId": "={{ $value }}"
				}
			}
		},
		"displayName": "Role Id",
		"name": "roleId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_get_auth_roles_acl"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_get_auth_roles_acl"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Redirect",
				"name": "redirect_string",
				"description": "Absolute or relative URL to redirect after refresh"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"redirect": "={{ $value.redirect_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_get_auth_session_refresh"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Search",
				"name": "search_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			},
			{
				"type": "json",
				"displayName": "Role Ids",
				"name": "roleIds_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value.id_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"roleIds": "={{ JSON.parse($value.roleIds_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_get_auth_users"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"userId": "={{ $value }}"
				}
			}
		},
		"displayName": "User Id",
		"name": "userId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_get_auth_users_acl"
				]
			}
		}
	},
	{
		"type": "json",
		"displayName": "Features",
		"name": "features_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "features"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_feature_check"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "email"
			}
		},
		"displayName": "Email",
		"name": "email_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_login"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "password"
			}
		},
		"displayName": "Password",
		"name": "password_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_login"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_auth_post_auth_login",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_login"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Require Role",
				"name": "requireRole_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "1",
						"value": "1"
					},
					{
						"name": "on",
						"value": "on"
					},
					{
						"name": "true",
						"value": "true"
					}
				],
				"displayName": "Remember",
				"name": "remember_options"
			}
		],
		"routing": {
			"request": {
				"body": {
					"requireRole": "={{ $value.requireRole_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"remember": "={{ $value.remember_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_login"
				],
				"bodyInputMode_auth_post_auth_login": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_auth_post_auth_login",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_login"
				],
				"bodyInputMode_auth_post_auth_login": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "email"
			}
		},
		"displayName": "Email",
		"name": "email_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_reset"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "password"
			}
		},
		"displayName": "Password",
		"name": "password_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_reset_confirm"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "token"
			}
		},
		"displayName": "Token",
		"name": "token_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_reset_confirm"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_roles"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_auth_post_auth_roles",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_roles"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"tenantId": "={{ $value.tenantId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_roles"
				],
				"bodyInputMode_auth_post_auth_roles": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_auth_post_auth_roles",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_roles"
				],
				"bodyInputMode_auth_post_auth_roles": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "refreshToken"
			}
		},
		"displayName": "Refresh Token",
		"name": "refreshToken_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_session_refresh"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "email"
			}
		},
		"displayName": "Email",
		"name": "email_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_users"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "organizationId"
			}
		},
		"displayName": "Organization Id",
		"name": "organizationId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_users"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_auth_post_auth_users",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_users"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Password",
				"name": "password_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Send Invite Email",
				"name": "sendInviteEmail_boolean"
			},
			{
				"type": "json",
				"displayName": "Roles",
				"name": "roles_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"password": "={{ $value.password_string }}",
					"sendInviteEmail": "={{ $value.sendInviteEmail_boolean }}",
					"roles": "={{ JSON.parse($value.roles_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_users"
				],
				"bodyInputMode_auth_post_auth_users": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_auth_post_auth_users",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_users"
				],
				"bodyInputMode_auth_post_auth_users": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_users_resend_invite"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_auth_put_auth_profile",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_profile"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Email",
				"name": "email_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Current Password",
				"name": "currentPassword_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Password",
				"name": "password_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"email": "={{ $value.email_string }}",
					"currentPassword": "={{ $value.currentPassword_string }}",
					"password": "={{ $value.password_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_profile"
				],
				"bodyInputMode_auth_put_auth_profile": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_auth_put_auth_profile",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_profile"
				],
				"bodyInputMode_auth_put_auth_profile": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_roles"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_auth_put_auth_roles",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_roles"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Name",
				"name": "name_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"name": "={{ $value.name_string }}",
					"tenantId": "={{ $value.tenantId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_roles"
				],
				"bodyInputMode_auth_put_auth_roles": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_auth_put_auth_roles",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_roles"
				],
				"bodyInputMode_auth_put_auth_roles": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "roleId"
			}
		},
		"displayName": "Role Id",
		"name": "roleId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_roles_acl"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_auth_put_auth_roles_acl",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_roles_acl"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Super Admin",
				"name": "isSuperAdmin_boolean"
			},
			{
				"type": "json",
				"displayName": "Features",
				"name": "features_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Organizations",
				"name": "organizations_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"isSuperAdmin": "={{ $value.isSuperAdmin_boolean }}",
					"features": "={{ JSON.parse($value.features_json) }}",
					"organizations": "={{ JSON.parse($value.organizations_json) }}",
					"tenantId": "={{ $value.tenantId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_roles_acl"
				],
				"bodyInputMode_auth_put_auth_roles_acl": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_auth_put_auth_roles_acl",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_roles_acl"
				],
				"bodyInputMode_auth_put_auth_roles_acl": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_auth_put_auth_sidebar_preferences",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_sidebar_preferences"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "number",
				"default": "",
				"displayName": "Version",
				"name": "version_number"
			},
			{
				"type": "json",
				"displayName": "Group Order",
				"name": "groupOrder_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Group Labels",
				"name": "group_labels_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Item Labels",
				"name": "item_labels_object"
			},
			{
				"type": "json",
				"displayName": "Hidden Items",
				"name": "hiddenItems_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Apply To Roles",
				"name": "applyToRoles_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Clear Role Ids",
				"name": "clearRoleIds_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"version": "={{ $value.version_number }}",
					"groupOrder": "={{ JSON.parse($value.groupOrder_json) }}",
					"groupLabels": "={{ JSON.parse($value.group_labels_object) }}",
					"itemLabels": "={{ JSON.parse($value.item_labels_object) }}",
					"hiddenItems": "={{ JSON.parse($value.hiddenItems_json) }}",
					"applyToRoles": "={{ JSON.parse($value.applyToRoles_json) }}",
					"clearRoleIds": "={{ JSON.parse($value.clearRoleIds_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_sidebar_preferences"
				],
				"bodyInputMode_auth_put_auth_sidebar_preferences": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_auth_put_auth_sidebar_preferences",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_sidebar_preferences"
				],
				"bodyInputMode_auth_put_auth_sidebar_preferences": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_users"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_auth_put_auth_users",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_users"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Email",
				"name": "email_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Password",
				"name": "password_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			},
			{
				"type": "json",
				"displayName": "Roles",
				"name": "roles_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"email": "={{ $value.email_string }}",
					"password": "={{ $value.password_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"roles": "={{ JSON.parse($value.roles_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_users"
				],
				"bodyInputMode_auth_put_auth_users": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_auth_put_auth_users",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_users"
				],
				"bodyInputMode_auth_put_auth_users": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "userId"
			}
		},
		"displayName": "User Id",
		"name": "userId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_users_acl"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_auth_put_auth_users_acl",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_users_acl"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Super Admin",
				"name": "isSuperAdmin_boolean"
			},
			{
				"type": "json",
				"displayName": "Features",
				"name": "features_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Organizations",
				"name": "organizations_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"isSuperAdmin": "={{ $value.isSuperAdmin_boolean }}",
					"features": "={{ JSON.parse($value.features_json) }}",
					"organizations": "={{ JSON.parse($value.organizations_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_users_acl"
				],
				"bodyInputMode_auth_put_auth_users_acl": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_auth_put_auth_users_acl",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Authentication & Accounts"
				],
				"operation": [
					"auth_put_auth_users_acl"
				],
				"bodyInputMode_auth_put_auth_users_acl": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "purgeAll",
				"value": "purgeAll"
			},
			{
				"name": "purgeSegment",
				"value": "purgeSegment"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "action"
			}
		},
		"displayName": "Action",
		"name": "action_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Configs"
				],
				"operation": [
					"configs_post_configs_cache"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_configs_post_configs_cache",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Configs"
				],
				"operation": [
					"configs_post_configs_cache"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Segment",
				"name": "segment_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"segment": "={{ $value.segment_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Configs"
				],
				"operation": [
					"configs_post_configs_cache"
				],
				"bodyInputMode_configs_post_configs_cache": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_configs_post_configs_cache",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Configs"
				],
				"operation": [
					"configs_post_configs_cache"
				],
				"bodyInputMode_configs_post_configs_cache": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "actionId"
			}
		},
		"displayName": "Action Id",
		"name": "actionId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Configs"
				],
				"operation": [
					"configs_post_configs_upgrade_actions"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Contractors"
				],
				"operation": [
					"contractors_get_contractors_contractors_id"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "NBP",
				"value": "NBP"
			},
			{
				"name": "Raiffeisen Bank Polska",
				"value": "Raiffeisen Bank Polska"
			},
			{
				"name": "Custom",
				"value": "Custom"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "provider"
			}
		},
		"displayName": "Provider",
		"name": "provider_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"createCurrencyFetchConfig"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_createCurrencyFetchConfig",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"createCurrencyFetchConfig"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Enabled",
				"name": "isEnabled_boolean"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^([01]\\d|2[0-3]):([0-5]\\d)$"
				},
				"displayName": "Sync Time",
				"name": "syncTime_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Config",
				"name": "config_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"isEnabled": "={{ $value.isEnabled_boolean }}",
					"syncTime": "={{ $value.syncTime_string }}",
					"config": "={{ JSON.parse($value.config_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"createCurrencyFetchConfig"
				],
				"bodyInputMode_createCurrencyFetchConfig": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_createCurrencyFetchConfig",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"createCurrencyFetchConfig"
				],
				"bodyInputMode_createCurrencyFetchConfig": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_delete_currencies_currencies"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_delete_currencies_exchange_rates"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Search",
				"name": "search_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "code",
						"value": "code"
					},
					{
						"name": "name",
						"value": "name"
					},
					{
						"name": "createdAt",
						"value": "createdAt"
					},
					{
						"name": "updatedAt",
						"value": "updatedAt"
					}
				],
				"displayName": "Sort Field",
				"name": "sortField_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "asc",
						"value": "asc"
					},
					{
						"name": "desc",
						"value": "desc"
					}
				],
				"displayName": "Sort Dir",
				"name": "sortDir_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "true",
						"value": "true"
					},
					{
						"name": "false",
						"value": "false"
					}
				],
				"displayName": "Is Base",
				"name": "isBase_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "true",
						"value": "true"
					},
					{
						"name": "false",
						"value": "false"
					}
				],
				"displayName": "Is Active",
				"name": "isActive_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Code",
				"name": "code_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ids",
				"name": "ids_string",
				"description": "Comma-separated list of record UUIDs to filter by (max 200)."
			}
		],
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value.id_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"sortField": "={{ $value.sortField_options }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"isBase": "={{ $value.isBase_options }}",
					"isActive": "={{ $value.isActive_options }}",
					"code": "={{ $value.code_string }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_get_currencies_currencies"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Q",
				"name": "q_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Query",
				"name": "query_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Search",
				"name": "search_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "true",
						"value": "true"
					},
					{
						"name": "false",
						"value": "false"
					}
				],
				"displayName": "Include Inactive",
				"name": "includeInactive_options"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Limit",
				"name": "limit_number"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"q": "={{ $value.q_string }}",
					"query": "={{ $value.query_string }}",
					"search": "={{ $value.search_string }}",
					"includeInactive": "={{ $value.includeInactive_options }}",
					"limit": "={{ $value.limit_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_get_currencies_currencies_options"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "fromCurrencyCode",
						"value": "fromCurrencyCode"
					},
					{
						"name": "toCurrencyCode",
						"value": "toCurrencyCode"
					},
					{
						"name": "date",
						"value": "date"
					},
					{
						"name": "createdAt",
						"value": "createdAt"
					},
					{
						"name": "updatedAt",
						"value": "updatedAt"
					}
				],
				"displayName": "Sort Field",
				"name": "sortField_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "asc",
						"value": "asc"
					},
					{
						"name": "desc",
						"value": "desc"
					}
				],
				"displayName": "Sort Dir",
				"name": "sortDir_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "From Currency Code",
				"name": "fromCurrencyCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "To Currency Code",
				"name": "toCurrencyCode_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "true",
						"value": "true"
					},
					{
						"name": "false",
						"value": "false"
					}
				],
				"displayName": "Is Active",
				"name": "isActive_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source",
				"name": "source_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "buy",
						"value": "buy"
					},
					{
						"name": "sell",
						"value": "sell"
					}
				],
				"displayName": "Type",
				"name": "type_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ids",
				"name": "ids_string",
				"description": "Comma-separated list of record UUIDs to filter by (max 200)."
			}
		],
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value.id_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"sortField": "={{ $value.sortField_options }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"fromCurrencyCode": "={{ $value.fromCurrencyCode_string }}",
					"toCurrencyCode": "={{ $value.toCurrencyCode_string }}",
					"isActive": "={{ $value.isActive_options }}",
					"source": "={{ $value.source_string }}",
					"type": "={{ $value.type_options }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_get_currencies_exchange_rates"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[A-Z]{3}$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "code"
			}
		},
		"displayName": "Code",
		"name": "code_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_currencies"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_currencies"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "organizationId"
			}
		},
		"displayName": "Organization Id",
		"name": "organizationId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_currencies"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "tenantId"
			}
		},
		"displayName": "Tenant Id",
		"name": "tenantId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_currencies"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_currencies_post_currencies_currencies",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_currencies"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Symbol",
				"name": "symbol_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Decimal Places",
				"name": "decimalPlaces_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Thousands Separator",
				"name": "thousandsSeparator_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Decimal Separator",
				"name": "decimalSeparator_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Base",
				"name": "isBase_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"symbol": "={{ $value.symbol_string }}",
					"decimalPlaces": "={{ $value.decimalPlaces_number }}",
					"thousandsSeparator": "={{ $value.thousandsSeparator_string }}",
					"decimalSeparator": "={{ $value.decimalSeparator_string }}",
					"isBase": "={{ $value.isBase_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_currencies"
				],
				"bodyInputMode_currencies_post_currencies_currencies": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_currencies_post_currencies_currencies",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_currencies"
				],
				"bodyInputMode_currencies_post_currencies_currencies": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[A-Z]{3}$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "fromCurrencyCode"
			}
		},
		"displayName": "From Currency Code",
		"name": "fromCurrencyCode_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_exchange_rates"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "organizationId"
			}
		},
		"displayName": "Organization Id",
		"name": "organizationId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_exchange_rates"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^\\d+(\\.\\d{1,8})?$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "rate"
			}
		},
		"displayName": "Rate",
		"name": "rate_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_exchange_rates"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "tenantId"
			}
		},
		"displayName": "Tenant Id",
		"name": "tenantId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_exchange_rates"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[A-Z]{3}$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "toCurrencyCode"
			}
		},
		"displayName": "To Currency Code",
		"name": "toCurrencyCode_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_exchange_rates"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_currencies_post_currencies_exchange_rates",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_exchange_rates"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "buy",
						"value": "buy"
					},
					{
						"name": "sell",
						"value": "sell"
					}
				],
				"displayName": "Type",
				"name": "type_options"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"type": "={{ $value.type_options }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_exchange_rates"
				],
				"bodyInputMode_currencies_post_currencies_exchange_rates": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_currencies_post_currencies_exchange_rates",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_post_currencies_exchange_rates"
				],
				"bodyInputMode_currencies_post_currencies_exchange_rates": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_put_currencies_currencies"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_currencies_put_currencies_currencies",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_put_currencies_currencies"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^[A-Z]{3}$"
				},
				"displayName": "Code",
				"name": "code_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Name",
				"name": "name_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Symbol",
				"name": "symbol_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Decimal Places",
				"name": "decimalPlaces_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Thousands Separator",
				"name": "thousandsSeparator_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Decimal Separator",
				"name": "decimalSeparator_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Base",
				"name": "isBase_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"code": "={{ $value.code_string }}",
					"name": "={{ $value.name_string }}",
					"symbol": "={{ $value.symbol_string }}",
					"decimalPlaces": "={{ $value.decimalPlaces_number }}",
					"thousandsSeparator": "={{ $value.thousandsSeparator_string }}",
					"decimalSeparator": "={{ $value.decimalSeparator_string }}",
					"isBase": "={{ $value.isBase_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_put_currencies_currencies"
				],
				"bodyInputMode_currencies_put_currencies_currencies": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_currencies_put_currencies_currencies",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_put_currencies_currencies"
				],
				"bodyInputMode_currencies_put_currencies_currencies": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_put_currencies_exchange_rates"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_currencies_put_currencies_exchange_rates",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_put_currencies_exchange_rates"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^[A-Z]{3}$"
				},
				"displayName": "From Currency Code",
				"name": "fromCurrencyCode_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^[A-Z]{3}$"
				},
				"displayName": "To Currency Code",
				"name": "toCurrencyCode_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^\\d+(\\.\\d{1,8})?$"
				},
				"displayName": "Rate",
				"name": "rate_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "buy",
						"value": "buy"
					},
					{
						"name": "sell",
						"value": "sell"
					}
				],
				"displayName": "Type",
				"name": "type_options"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"fromCurrencyCode": "={{ $value.fromCurrencyCode_string }}",
					"toCurrencyCode": "={{ $value.toCurrencyCode_string }}",
					"rate": "={{ $value.rate_string }}",
					"type": "={{ $value.type_options }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_put_currencies_exchange_rates"
				],
				"bodyInputMode_currencies_put_currencies_exchange_rates": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_currencies_put_currencies_exchange_rates",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"currencies_put_currencies_exchange_rates"
				],
				"bodyInputMode_currencies_put_currencies_exchange_rates": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value }}"
				}
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"description": "Currency fetch configuration identifier to delete",
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"deleteCurrencyFetchConfig"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_fetchCurrencyRates",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"fetchCurrencyRates"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Date",
				"name": "date_string"
			},
			{
				"type": "json",
				"displayName": "Providers",
				"name": "providers_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"date": "={{ $value.date_string }}",
					"providers": "={{ JSON.parse($value.providers_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"fetchCurrencyRates"
				],
				"bodyInputMode_fetchCurrencyRates": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_fetchCurrencyRates",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"fetchCurrencyRates"
				],
				"bodyInputMode_fetchCurrencyRates": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"updateCurrencyFetchConfig"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_updateCurrencyFetchConfig",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"updateCurrencyFetchConfig"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Enabled",
				"name": "isEnabled_boolean"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^([01]\\d|2[0-3]):([0-5]\\d)$"
				},
				"displayName": "Sync Time",
				"name": "syncTime_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Config",
				"name": "config_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"isEnabled": "={{ $value.isEnabled_boolean }}",
					"syncTime": "={{ $value.syncTime_string }}",
					"config": "={{ JSON.parse($value.config_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"updateCurrencyFetchConfig"
				],
				"bodyInputMode_updateCurrencyFetchConfig": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_updateCurrencyFetchConfig",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Currencies"
				],
				"operation": [
					"updateCurrencyFetchConfig"
				],
				"bodyInputMode_updateCurrencyFetchConfig": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"roleId": "={{ $value }}"
				}
			}
		},
		"displayName": "Role Id",
		"name": "roleId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_get_dashboards_roles_widgets"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_get_dashboards_roles_widgets"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"userId": "={{ $value }}"
				}
			}
		},
		"displayName": "User Id",
		"name": "userId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_get_dashboards_users_widgets"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_get_dashboards_users_widgets"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Item Id",
		"name": "itemId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_patch_dashboards_layout_itemId"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_dashboards_patch_dashboards_layout_itemId",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_patch_dashboards_layout_itemId"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "sm",
						"value": "sm"
					},
					{
						"name": "md",
						"value": "md"
					},
					{
						"name": "lg",
						"value": "lg"
					}
				],
				"displayName": "Size",
				"name": "size_options"
			}
		],
		"routing": {
			"request": {
				"body": {
					"size": "={{ $value.size_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_patch_dashboards_layout_itemId"
				],
				"bodyInputMode_dashboards_patch_dashboards_layout_itemId": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_dashboards_patch_dashboards_layout_itemId",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_patch_dashboards_layout_itemId"
				],
				"bodyInputMode_dashboards_patch_dashboards_layout_itemId": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityType"
			}
		},
		"displayName": "Entity Type",
		"name": "entityType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_post_dashboards_widgets_data"
				]
			}
		}
	},
	{
		"type": "json",
		"required": true,
		"default": "{}",
		"routing": {
			"send": {
				"type": "body",
				"property": "metric",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayName": "Metric",
		"name": "metric_object",
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_post_dashboards_widgets_data"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_dashboards_post_dashboards_widgets_data",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_post_dashboards_widgets_data"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "json",
				"required": true,
				"default": "{}",
				"displayName": "Group By",
				"name": "group_by_object"
			},
			{
				"type": "json",
				"displayName": "Filters",
				"name": "filters_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"required": true,
				"default": "{}",
				"displayName": "Date Range",
				"name": "date_range_object"
			},
			{
				"type": "json",
				"required": true,
				"default": "{}",
				"displayName": "Comparison",
				"name": "comparison_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"groupBy": "={{ JSON.parse($value.group_by_object) }}",
					"filters": "={{ JSON.parse($value.filters_json) }}",
					"dateRange": "={{ JSON.parse($value.date_range_object) }}",
					"comparison": "={{ JSON.parse($value.comparison_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_post_dashboards_widgets_data"
				],
				"bodyInputMode_dashboards_post_dashboards_widgets_data": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_dashboards_post_dashboards_widgets_data",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_post_dashboards_widgets_data"
				],
				"bodyInputMode_dashboards_post_dashboards_widgets_data": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "json",
		"displayName": "Items",
		"name": "items_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "items"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_put_dashboards_layout"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "roleId"
			}
		},
		"displayName": "Role Id",
		"name": "roleId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_put_dashboards_roles_widgets"
				]
			}
		}
	},
	{
		"type": "json",
		"displayName": "Widget Ids",
		"name": "widgetIds_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "widgetIds"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_put_dashboards_roles_widgets"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_dashboards_put_dashboards_roles_widgets",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_put_dashboards_roles_widgets"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_put_dashboards_roles_widgets"
				],
				"bodyInputMode_dashboards_put_dashboards_roles_widgets": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_dashboards_put_dashboards_roles_widgets",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_put_dashboards_roles_widgets"
				],
				"bodyInputMode_dashboards_put_dashboards_roles_widgets": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "userId"
			}
		},
		"displayName": "User Id",
		"name": "userId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_put_dashboards_users_widgets"
				]
			}
		}
	},
	{
		"type": "json",
		"displayName": "Widget Ids",
		"name": "widgetIds_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "widgetIds"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_put_dashboards_users_widgets"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_dashboards_put_dashboards_users_widgets",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_put_dashboards_users_widgets"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "inherit",
						"value": "inherit"
					},
					{
						"name": "override",
						"value": "override"
					}
				],
				"displayName": "Mode",
				"name": "mode_options"
			}
		],
		"routing": {
			"request": {
				"body": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"mode": "={{ $value.mode_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_put_dashboards_users_widgets"
				],
				"bodyInputMode_dashboards_put_dashboards_users_widgets": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_dashboards_put_dashboards_users_widgets",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dashboards"
				],
				"operation": [
					"dashboards_put_dashboards_users_widgets"
				],
				"bodyInputMode_dashboards_put_dashboards_users_widgets": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Dictionary Id",
		"name": "dictionaryId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_delete_dictionaries_dictionaryId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Dictionary Id",
		"name": "dictionaryId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_delete_dictionaries_dictionaryId_entries_entryId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Entry Id",
		"name": "entryId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_delete_dictionaries_dictionaryId_entries_entryId"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "true",
						"value": "true"
					},
					{
						"name": "false",
						"value": "false"
					}
				],
				"displayName": "Include Inactive",
				"name": "includeInactive_options"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"includeInactive": "={{ $value.includeInactive_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_get_dictionaries"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Dictionary Id",
		"name": "dictionaryId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_get_dictionaries_dictionaryId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Dictionary Id",
		"name": "dictionaryId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_get_dictionaries_dictionaryId_entries"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Dictionary Id",
		"name": "dictionaryId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_patch_dictionaries_dictionaryId"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_dictionaries_patch_dictionaries_dictionaryId",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_patch_dictionaries_dictionaryId"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^[a-z0-9][a-z0-9_-]*$"
				},
				"displayName": "Key",
				"name": "key_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Name",
				"name": "name_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is System",
				"name": "isSystem_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"key": "={{ $value.key_string }}",
					"name": "={{ $value.name_string }}",
					"description": "={{ $value.description_string }}",
					"isSystem": "={{ $value.isSystem_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_patch_dictionaries_dictionaryId"
				],
				"bodyInputMode_dictionaries_patch_dictionaries_dictionaryId": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_dictionaries_patch_dictionaries_dictionaryId",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_patch_dictionaries_dictionaryId"
				],
				"bodyInputMode_dictionaries_patch_dictionaries_dictionaryId": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Dictionary Id",
		"name": "dictionaryId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_patch_dictionaries_dictionaryId_entries_entryId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Entry Id",
		"name": "entryId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_patch_dictionaries_dictionaryId_entries_entryId"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_dictionaries_patch_dictionaries_dictionaryId_entries_entryId",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_patch_dictionaries_dictionaryId_entries_entryId"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Value",
				"name": "value_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Label",
				"name": "label_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^#([0-9a-fA-F]{6})$"
				},
				"displayName": "Color",
				"name": "color_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Icon",
				"name": "icon_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"value": "={{ $value.value_string }}",
					"label": "={{ $value.label_string }}",
					"color": "={{ $value.color_string }}",
					"icon": "={{ $value.icon_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_patch_dictionaries_dictionaryId_entries_entryId"
				],
				"bodyInputMode_dictionaries_patch_dictionaries_dictionaryId_entries_entryId": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_dictionaries_patch_dictionaries_dictionaryId_entries_entryId",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_patch_dictionaries_dictionaryId_entries_entryId"
				],
				"bodyInputMode_dictionaries_patch_dictionaries_dictionaryId_entries_entryId": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[a-z0-9][a-z0-9_-]*$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "key"
			}
		},
		"displayName": "Key",
		"name": "key_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_post_dictionaries"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_post_dictionaries"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_dictionaries_post_dictionaries",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_post_dictionaries"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is System",
				"name": "isSystem_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"isSystem": "={{ $value.isSystem_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_post_dictionaries"
				],
				"bodyInputMode_dictionaries_post_dictionaries": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_dictionaries_post_dictionaries",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_post_dictionaries"
				],
				"bodyInputMode_dictionaries_post_dictionaries": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Dictionary Id",
		"name": "dictionaryId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_post_dictionaries_dictionaryId_entries"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "value"
			}
		},
		"displayName": "Value",
		"name": "value_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_post_dictionaries_dictionaryId_entries"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_dictionaries_post_dictionaries_dictionaryId_entries",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_post_dictionaries_dictionaryId_entries"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Label",
				"name": "label_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^#([0-9a-fA-F]{6})$"
				},
				"displayName": "Color",
				"name": "color_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Icon",
				"name": "icon_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"label": "={{ $value.label_string }}",
					"color": "={{ $value.color_string }}",
					"icon": "={{ $value.icon_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_post_dictionaries_dictionaryId_entries"
				],
				"bodyInputMode_dictionaries_post_dictionaries_dictionaryId_entries": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_dictionaries_post_dictionaries_dictionaryId_entries",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Dictionaries"
				],
				"operation": [
					"dictionaries_post_dictionaries_dictionaryId_entries"
				],
				"bodyInputMode_dictionaries_post_dictionaries_dictionaryId_entries": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_delete_directory_organizations"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_delete_directory_tenants"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Search",
				"name": "search_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "options",
						"value": "options"
					},
					{
						"name": "manage",
						"value": "manage"
					},
					{
						"name": "tree",
						"value": "tree"
					}
				],
				"displayName": "View",
				"name": "view_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ids",
				"name": "ids_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "true",
						"value": "true"
					},
					{
						"name": "false",
						"value": "false"
					}
				],
				"displayName": "Include Inactive",
				"name": "includeInactive_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "all",
						"value": "all"
					},
					{
						"name": "active",
						"value": "active"
					},
					{
						"name": "inactive",
						"value": "inactive"
					}
				],
				"displayName": "Status",
				"name": "status_options"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"view": "={{ $value.view_options }}",
					"ids": "={{ $value.ids_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"includeInactive": "={{ $value.includeInactive_options }}",
					"status": "={{ $value.status_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_get_directory_organizations"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Search",
				"name": "search_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "name",
						"value": "name"
					},
					{
						"name": "createdAt",
						"value": "createdAt"
					},
					{
						"name": "updatedAt",
						"value": "updatedAt"
					}
				],
				"displayName": "Sort Field",
				"name": "sortField_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "asc",
						"value": "asc"
					},
					{
						"name": "desc",
						"value": "desc"
					}
				],
				"displayName": "Sort Dir",
				"name": "sortDir_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "true",
						"value": "true"
					},
					{
						"name": "false",
						"value": "false"
					}
				],
				"displayName": "Is Active",
				"name": "isActive_options"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value.id_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"sortField": "={{ $value.sortField_options }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"isActive": "={{ $value.isActive_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_get_directory_tenants"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_post_directory_organizations"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_directory_post_directory_organizations",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_post_directory_organizations"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^[a-z0-9\\-_]+$"
				},
				"displayName": "Slug",
				"name": "slug_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Parent Id",
				"name": "parentId_string"
			},
			{
				"type": "json",
				"displayName": "Child Ids",
				"name": "childIds_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"tenantId": "={{ $value.tenantId_string }}",
					"slug": "={{ $value.slug_string }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"parentId": "={{ $value.parentId_string }}",
					"childIds": "={{ JSON.parse($value.childIds_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_post_directory_organizations"
				],
				"bodyInputMode_directory_post_directory_organizations": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_directory_post_directory_organizations",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_post_directory_organizations"
				],
				"bodyInputMode_directory_post_directory_organizations": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_post_directory_tenants"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_directory_post_directory_tenants",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_post_directory_tenants"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_post_directory_tenants"
				],
				"bodyInputMode_directory_post_directory_tenants": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_directory_post_directory_tenants",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_post_directory_tenants"
				],
				"bodyInputMode_directory_post_directory_tenants": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_put_directory_organizations"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_directory_put_directory_organizations",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_put_directory_organizations"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Name",
				"name": "name_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^[a-z0-9\\-_]+$"
				},
				"displayName": "Slug",
				"name": "slug_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Parent Id",
				"name": "parentId_string"
			},
			{
				"type": "json",
				"displayName": "Child Ids",
				"name": "childIds_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"tenantId": "={{ $value.tenantId_string }}",
					"name": "={{ $value.name_string }}",
					"slug": "={{ $value.slug_string }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"parentId": "={{ $value.parentId_string }}",
					"childIds": "={{ JSON.parse($value.childIds_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_put_directory_organizations"
				],
				"bodyInputMode_directory_put_directory_organizations": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_directory_put_directory_organizations",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_put_directory_organizations"
				],
				"bodyInputMode_directory_put_directory_organizations": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_put_directory_tenants"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_directory_put_directory_tenants",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_put_directory_tenants"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Name",
				"name": "name_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"name": "={{ $value.name_string }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_put_directory_tenants"
				],
				"bodyInputMode_directory_put_directory_tenants": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_directory_put_directory_tenants",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Directory"
				],
				"operation": [
					"directory_put_directory_tenants"
				],
				"bodyInputMode_directory_put_directory_tenants": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_post_templating_templates"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "organizationId"
			}
		},
		"displayName": "Organization Id",
		"name": "organizationId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_post_templating_templates"
				]
			}
		}
	},
	{
		"type": "json",
		"required": true,
		"default": "{}",
		"routing": {
			"send": {
				"type": "body",
				"property": "templateJson",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayName": "Template Json",
		"name": "template_json_object",
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_post_templating_templates"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "templateType"
			}
		},
		"displayName": "Template Type",
		"name": "templateType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_post_templating_templates"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "tenantId"
			}
		},
		"displayName": "Tenant Id",
		"name": "tenantId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_post_templating_templates"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_templating_post_templating_templates",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_post_templating_templates"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Preview Image Url",
				"name": "previewImageUrl_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"previewImageUrl": "={{ $value.previewImageUrl_string }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_post_templating_templates"
				],
				"bodyInputMode_templating_post_templating_templates": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_templating_post_templating_templates",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_post_templating_templates"
				],
				"bodyInputMode_templating_post_templating_templates": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "json",
		"displayName": "Inputs",
		"name": "inputs_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "inputs"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_post_templating_templates_generate"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_templating_post_templating_templates_generate",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_post_templating_templates_generate"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Template Id",
				"name": "templateId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Template Type",
				"name": "templateType_string"
			},
			{
				"type": "json",
				"required": true,
				"default": "{}",
				"displayName": "Template Json",
				"name": "template_json_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"templateId": "={{ $value.templateId_string }}",
					"templateType": "={{ $value.templateType_string }}",
					"templateJson": "={{ JSON.parse($value.template_json_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_post_templating_templates_generate"
				],
				"bodyInputMode_templating_post_templating_templates_generate": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_templating_post_templating_templates_generate",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_post_templating_templates_generate"
				],
				"bodyInputMode_templating_post_templating_templates_generate": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_put_templating_templates"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "organizationId"
			}
		},
		"displayName": "Organization Id",
		"name": "organizationId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_put_templating_templates"
				]
			}
		}
	},
	{
		"type": "json",
		"required": true,
		"default": "{}",
		"routing": {
			"send": {
				"type": "body",
				"property": "templateJson",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayName": "Template Json",
		"name": "template_json_object",
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_put_templating_templates"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "templateType"
			}
		},
		"displayName": "Template Type",
		"name": "templateType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_put_templating_templates"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "tenantId"
			}
		},
		"displayName": "Tenant Id",
		"name": "tenantId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_put_templating_templates"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_templating_put_templating_templates",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_put_templating_templates"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Preview Image Url",
				"name": "previewImageUrl_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"previewImageUrl": "={{ $value.previewImageUrl_string }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_put_templating_templates"
				],
				"bodyInputMode_templating_put_templating_templates": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_templating_put_templating_templates",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Document Templates"
				],
				"operation": [
					"templating_put_templating_templates"
				],
				"bodyInputMode_templating_put_templating_templates": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityId"
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_delete_entities_definitions"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "key"
			}
		},
		"displayName": "Key",
		"name": "key_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_delete_entities_definitions"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityId"
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_delete_entities_entities"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityId"
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_delete_entities_records"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "recordId"
			}
		},
		"displayName": "Record Id",
		"name": "recordId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_delete_entities_records"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "json",
				"name": "entityId",
				"displayName": "Entity Id",
				"default": ""
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Ids",
				"name": "entityIds_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^[a-z0-9_\\-]+$"
				},
				"displayName": "Fieldset",
				"name": "fieldset_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"entityId": "={{ JSON.parse($value.entityId) }}",
					"entityIds": "={{ $value.entityIds_string }}",
					"fieldset": "={{ $value.fieldset_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_get_entities_definitions"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"entityId": "={{ $value }}"
				}
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_get_entities_definitions_manage"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"entityId": "={{ $value }}"
				}
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_get_entities_encryption"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"entityId": "={{ $value }}"
				}
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_get_entities_filter_suggestions"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"field": "={{ $value }}"
				}
			}
		},
		"displayName": "Field",
		"name": "field_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_get_entities_filter_suggestions"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Query",
				"name": "query_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Limit",
				"name": "limit_number"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"query": "={{ $value.query_string }}",
					"limit": "={{ $value.limit_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_get_entities_filter_suggestions"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"entityId": "={{ $value }}"
				}
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_get_entities_records"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Sort Field",
				"name": "sortField_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "asc",
						"value": "asc"
					},
					{
						"name": "desc",
						"value": "desc"
					}
				],
				"displayName": "Sort Dir",
				"name": "sortDir_options"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "With Deleted",
				"name": "withDeleted_boolean"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "csv",
						"value": "csv"
					},
					{
						"name": "json",
						"value": "json"
					},
					{
						"name": "xml",
						"value": "xml"
					},
					{
						"name": "markdown",
						"value": "markdown"
					}
				],
				"displayName": "Format",
				"name": "format_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "full",
						"value": "full"
					}
				],
				"displayName": "Export Scope",
				"name": "exportScope_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "full",
						"value": "full"
					}
				],
				"displayName": "Export Scope",
				"name": "export_scope_options"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "All",
				"name": "all_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Full",
				"name": "full_boolean"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}",
					"format": "={{ $value.format_options }}",
					"exportScope": "={{ $value.exportScope_options }}",
					"export_scope": "={{ $value.export_scope_options }}",
					"all": "={{ $value.all_boolean }}",
					"full": "={{ $value.full_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_get_entities_records"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"entityId": "={{ $value }}"
				}
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_get_entities_relations_options"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Label Field",
				"name": "labelField_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Q",
				"name": "q_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ids",
				"name": "ids_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Route Context Fields",
				"name": "routeContextFields_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"labelField": "={{ $value.labelField_string }}",
					"q": "={{ $value.q_string }}",
					"ids": "={{ $value.ids_string }}",
					"routeContextFields": "={{ $value.routeContextFields_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_get_entities_relations_options"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[a-z0-9_]+:[a-z0-9_]+$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityId"
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[a-z0-9_]+$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "key"
			}
		},
		"displayName": "Key",
		"name": "key_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "text",
				"value": "text"
			},
			{
				"name": "multiline",
				"value": "multiline"
			},
			{
				"name": "integer",
				"value": "integer"
			},
			{
				"name": "float",
				"value": "float"
			},
			{
				"name": "boolean",
				"value": "boolean"
			},
			{
				"name": "select",
				"value": "select"
			},
			{
				"name": "currency",
				"value": "currency"
			},
			{
				"name": "relation",
				"value": "relation"
			},
			{
				"name": "attachment",
				"value": "attachment"
			},
			{
				"name": "dictionary",
				"value": "dictionary"
			},
			{
				"name": "date",
				"value": "date"
			},
			{
				"name": "datetime",
				"value": "datetime"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "kind"
			}
		},
		"displayName": "Kind",
		"name": "kind_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_entities_post_entities_definitions",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Config Json",
				"name": "config_json_object"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"configJson": "={{ JSON.parse($value.config_json_object) }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions"
				],
				"bodyInputMode_entities_post_entities_definitions": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_entities_post_entities_definitions",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions"
				],
				"bodyInputMode_entities_post_entities_definitions": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "json",
		"displayName": "Definitions",
		"name": "definitions_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "definitions"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions_batch"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[a-z0-9_]+:[a-z0-9_]+$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityId"
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions_batch"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_entities_post_entities_definitions_batch",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions_batch"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "json",
				"displayName": "Fieldsets",
				"name": "fieldsets_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Single Fieldset Per Record",
				"name": "singleFieldsetPerRecord_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"fieldsets": "={{ JSON.parse($value.fieldsets_json) }}",
					"singleFieldsetPerRecord": "={{ $value.singleFieldsetPerRecord_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions_batch"
				],
				"bodyInputMode_entities_post_entities_definitions_batch": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_entities_post_entities_definitions_batch",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions_batch"
				],
				"bodyInputMode_entities_post_entities_definitions_batch": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityId"
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions_restore"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "key"
			}
		},
		"displayName": "Key",
		"name": "key_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_definitions_restore"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[a-z0-9_]+:[a-z0-9_]+$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityId"
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_encryption"
				]
			}
		}
	},
	{
		"type": "json",
		"displayName": "Fields",
		"name": "fields_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "fields"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_encryption"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_entities_post_entities_encryption",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_encryption"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_encryption"
				],
				"bodyInputMode_entities_post_entities_encryption": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_entities_post_entities_encryption",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_encryption"
				],
				"bodyInputMode_entities_post_entities_encryption": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[a-z0-9_]+:[a-z0-9_]+$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityId"
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_entities"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "label"
			}
		},
		"displayName": "Label",
		"name": "label_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_entities"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_entities_post_entities_entities",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_entities"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^[a-zA-Z_][a-zA-Z0-9_]*$"
				},
				"displayName": "Label Field",
				"name": "labelField_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "markdown",
						"value": "markdown"
					},
					{
						"name": "simpleMarkdown",
						"value": "simpleMarkdown"
					},
					{
						"name": "htmlRichText",
						"value": "htmlRichText"
					}
				],
				"displayName": "Default Editor",
				"name": "defaultEditor_options"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Show In Sidebar",
				"name": "showInSidebar_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"labelField": "={{ $value.labelField_string }}",
					"defaultEditor": "={{ $value.defaultEditor_options }}",
					"showInSidebar": "={{ $value.showInSidebar_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_entities"
				],
				"bodyInputMode_entities_post_entities_entities": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_entities_post_entities_entities",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_entities"
				],
				"bodyInputMode_entities_post_entities_entities": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityId"
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_records"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_entities_post_entities_records",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_records"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Record Id",
				"name": "recordId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Values",
				"name": "values_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"recordId": "={{ $value.recordId_string }}",
					"values": "={{ JSON.parse($value.values_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_records"
				],
				"bodyInputMode_entities_post_entities_records": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_entities_post_entities_records",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_post_entities_records"
				],
				"bodyInputMode_entities_post_entities_records": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityId"
			}
		},
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_put_entities_records"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "recordId"
			}
		},
		"displayName": "Record Id",
		"name": "recordId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_put_entities_records"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_entities_put_entities_records",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_put_entities_records"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Values",
				"name": "values_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"values": "={{ JSON.parse($value.values_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_put_entities_records"
				],
				"bodyInputMode_entities_put_entities_records": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_entities_put_entities_records",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Entities"
				],
				"operation": [
					"entities_put_entities_records"
				],
				"bodyInputMode_entities_put_entities_records": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value }}"
				}
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"description": "Feature toggle identifier",
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_delete_feature_toggles_global"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"identifier": "={{ $value }}"
				}
			}
		},
		"displayName": "Identifier",
		"name": "identifier_string",
		"required": true,
		"description": "Feature toggle identifier",
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_get_feature_toggles_check_boolean"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"identifier": "={{ $value }}"
				}
			}
		},
		"displayName": "Identifier",
		"name": "identifier_string",
		"required": true,
		"description": "Feature toggle identifier",
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_get_feature_toggles_check_json"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"identifier": "={{ $value }}"
				}
			}
		},
		"displayName": "Identifier",
		"name": "identifier_string",
		"required": true,
		"description": "Feature toggle identifier",
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_get_feature_toggles_check_number"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"identifier": "={{ $value }}"
				}
			}
		},
		"displayName": "Identifier",
		"name": "identifier_string",
		"required": true,
		"description": "Feature toggle identifier",
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_get_feature_toggles_check_string"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number",
				"description": "Page number for pagination"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number",
				"description": "Number of items per page (max 200)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Search",
				"name": "search_string",
				"description": "Case-insensitive search across identifier, name, description, and category"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "boolean",
						"value": "boolean"
					},
					{
						"name": "string",
						"value": "string"
					},
					{
						"name": "number",
						"value": "number"
					},
					{
						"name": "json",
						"value": "json"
					}
				],
				"displayName": "Type",
				"name": "type_options",
				"description": "Filter by toggle type (boolean, string, number, json)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Category",
				"name": "category_string",
				"description": "Filter by category (case-insensitive partial match)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Name",
				"name": "name_string",
				"description": "Filter by name (case-insensitive partial match)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Identifier",
				"name": "identifier_string",
				"description": "Filter by identifier (case-insensitive partial match)"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "id",
						"value": "id"
					},
					{
						"name": "category",
						"value": "category"
					},
					{
						"name": "identifier",
						"value": "identifier"
					},
					{
						"name": "name",
						"value": "name"
					},
					{
						"name": "createdAt",
						"value": "createdAt"
					},
					{
						"name": "updatedAt",
						"value": "updatedAt"
					},
					{
						"name": "type",
						"value": "type"
					}
				],
				"displayName": "Sort Field",
				"name": "sortField_options",
				"description": "Field to sort by"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "asc",
						"value": "asc"
					},
					{
						"name": "desc",
						"value": "desc"
					}
				],
				"displayName": "Sort Dir",
				"name": "sortDir_options",
				"description": "Sort direction (ascending or descending)"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"type": "={{ $value.type_options }}",
					"category": "={{ $value.category_string }}",
					"name": "={{ $value.name_string }}",
					"identifier": "={{ $value.identifier_string }}",
					"sortField": "={{ $value.sortField_options }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_get_feature_toggles_global"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_get_feature_toggles_global_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_get_feature_toggles_global_id_override"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Category",
				"name": "category_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Name",
				"name": "name_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Identifier",
				"name": "identifier_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "identifier",
						"value": "identifier"
					},
					{
						"name": "name",
						"value": "name"
					},
					{
						"name": "category",
						"value": "category"
					}
				],
				"displayName": "Sort Field",
				"name": "sortField_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "asc",
						"value": "asc"
					},
					{
						"name": "desc",
						"value": "desc"
					}
				],
				"displayName": "Sort Dir",
				"name": "sortDir_options"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"category": "={{ $value.category_string }}",
					"name": "={{ $value.name_string }}",
					"identifier": "={{ $value.identifier_string }}",
					"sortField": "={{ $value.sortField_options }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_get_feature_toggles_overrides"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[a-z][a-z0-9_]*$"
		},
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "identifier"
			}
		},
		"displayName": "Identifier",
		"name": "identifier_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_post_feature_toggles_global"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_post_feature_toggles_global"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "boolean",
				"value": "boolean"
			},
			{
				"name": "string",
				"value": "string"
			},
			{
				"name": "number",
				"value": "number"
			},
			{
				"name": "json",
				"value": "json"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "type"
			}
		},
		"displayName": "Type",
		"name": "type_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_post_feature_toggles_global"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_feature_toggles_post_feature_toggles_global",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_post_feature_toggles_global"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Category",
				"name": "category_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"category": "={{ $value.category_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_post_feature_toggles_global"
				],
				"bodyInputMode_feature_toggles_post_feature_toggles_global": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_feature_toggles_post_feature_toggles_global",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_post_feature_toggles_global"
				],
				"bodyInputMode_feature_toggles_post_feature_toggles_global": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_put_feature_toggles_global"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_feature_toggles_put_feature_toggles_global",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_put_feature_toggles_global"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^[a-z][a-z0-9_]*$"
				},
				"displayName": "Identifier",
				"name": "identifier_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Name",
				"name": "name_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Category",
				"name": "category_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "boolean",
						"value": "boolean"
					},
					{
						"name": "string",
						"value": "string"
					},
					{
						"name": "number",
						"value": "number"
					},
					{
						"name": "json",
						"value": "json"
					}
				],
				"displayName": "Type",
				"name": "type_options"
			}
		],
		"routing": {
			"request": {
				"body": {
					"identifier": "={{ $value.identifier_string }}",
					"name": "={{ $value.name_string }}",
					"description": "={{ $value.description_string }}",
					"category": "={{ $value.category_string }}",
					"type": "={{ $value.type_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_put_feature_toggles_global"
				],
				"bodyInputMode_feature_toggles_put_feature_toggles_global": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_feature_toggles_put_feature_toggles_global",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_put_feature_toggles_global"
				],
				"bodyInputMode_feature_toggles_put_feature_toggles_global": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "boolean",
		"default": false,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "isOverride"
			}
		},
		"displayName": "Is Override",
		"name": "isOverride_boolean",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_put_feature_toggles_overrides"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "toggleId"
			}
		},
		"displayName": "Toggle Id",
		"name": "toggleId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_put_feature_toggles_overrides"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_feature_toggles_put_feature_toggles_overrides",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_put_feature_toggles_overrides"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [],
		"routing": {
			"request": {}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_put_feature_toggles_overrides"
				],
				"bodyInputMode_feature_toggles_put_feature_toggles_overrides": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_feature_toggles_put_feature_toggles_overrides",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Feature Toggles"
				],
				"operation": [
					"feature_toggles_put_feature_toggles_overrides"
				],
				"bodyInputMode_feature_toggles_put_feature_toggles_overrides": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_delete_finance_expense_categories_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_delete_finance_invoices_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_delete_finance_invoices_id_payment"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_get_finance_invoices_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_get_finance_invoices_id_bank_matches"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_get_finance_invoices_id_pdf"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_patch_finance_expense_categories_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_post_finance_invoices_id_approve"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_post_finance_invoices_id_cancel"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_post_finance_invoices_id_convert_draft"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_post_finance_invoices_id_create_correction"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_post_finance_invoices_id_payment"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_post_finance_invoices_id_resubmit"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_post_finance_invoices_id_send_email"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Finance"
				],
				"operation": [
					"finance_put_finance_invoices_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_delete_freight_documents_documents_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_get_freight_documents_documents_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_get_freight_documents_documents_id_download"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_get_freight_documents_documents_id_extract"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_get_freight_documents_documents_id_pages"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_get_freight_documents_documents_id_pages_pageNum_image"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Page Num",
		"name": "pageNum_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_get_freight_documents_documents_id_pages_pageNum_image"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_get_freight_documents_documents_id_sections"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_patch_freight_documents_documents_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_patch_freight_documents_documents_id_sections_sectionId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Section Id",
		"name": "sectionId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_patch_freight_documents_documents_id_sections_sectionId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_post_freight_documents_documents_id_extract"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_post_freight_documents_documents_id_feedback"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_post_freight_documents_documents_id_link"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_post_freight_documents_documents_id_sections_sectionId_set_label"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Section Id",
		"name": "sectionId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_post_freight_documents_documents_id_sections_sectionId_set_label"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_post_freight_documents_documents_id_unlink"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "file"
			}
		},
		"displayName": "File",
		"name": "file_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_post_freight_documents_upload"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_post_freight_documents_upload"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_freight_documents_post_freight_documents_upload",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_post_freight_documents_upload"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Related Entity Id",
				"name": "relatedEntityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Related Entity Type",
				"name": "relatedEntityType_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"relatedEntityId": "={{ $value.relatedEntityId_string }}",
					"relatedEntityType": "={{ $value.relatedEntityType_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_post_freight_documents_upload"
				],
				"bodyInputMode_freight_documents_post_freight_documents_upload": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_freight_documents_post_freight_documents_upload",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_post_freight_documents_upload"
				],
				"bodyInputMode_freight_documents_post_freight_documents_upload": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Freight Documents"
				],
				"operation": [
					"freight_documents_put_freight_documents_documents_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"integrations_delete_integrations_id_credentials"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"integrations_get_integrations_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"integrations_get_integrations_id_credentials"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"integrations_post_integrations_id_health"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"integrations_put_integrations_id_credentials"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"integrations_put_integrations_id_state"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"integrations_put_integrations_id_version"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"KSeF"
				],
				"operation": [
					"ksef_delete_ksef_invoices_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"KSeF"
				],
				"operation": [
					"ksef_get_ksef_invoices_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"KSeF"
				],
				"operation": [
					"ksef_get_ksef_sessions_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"KSeF"
				],
				"operation": [
					"ksef_get_ksef_status_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"KSeF"
				],
				"operation": [
					"ksef_post_ksef_generate_xml_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"KSeF"
				],
				"operation": [
					"ksef_post_ksef_submit_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"KSeF"
				],
				"operation": [
					"ksef_put_ksef_invoices_id"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "json",
				"name": "status",
				"displayName": "Status",
				"default": ""
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Type",
				"name": "type_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "info",
						"value": "info"
					},
					{
						"name": "warning",
						"value": "warning"
					},
					{
						"name": "success",
						"value": "success"
					},
					{
						"name": "error",
						"value": "error"
					}
				],
				"displayName": "Severity",
				"name": "severity_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source Entity Type",
				"name": "sourceEntityType_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source Entity Id",
				"name": "sourceEntityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Since",
				"name": "since_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ids",
				"name": "ids_string",
				"description": "Comma-separated list of record UUIDs to filter by (max 200)."
			}
		],
		"routing": {
			"request": {
				"qs": {
					"status": "={{ JSON.parse($value.status) }}",
					"type": "={{ $value.type_string }}",
					"severity": "={{ $value.severity_options }}",
					"sourceEntityType": "={{ $value.sourceEntityType_string }}",
					"sourceEntityId": "={{ $value.sourceEntityId_string }}",
					"since": "={{ $value.since_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Notifications"
				],
				"operation": [
					"notifications_get_notifications"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "recipientUserId"
			}
		},
		"displayName": "Recipient User Id",
		"name": "recipientUserId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Notifications"
				],
				"operation": [
					"notifications_post_notifications"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "type"
			}
		},
		"displayName": "Type",
		"name": "type_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Notifications"
				],
				"operation": [
					"notifications_post_notifications"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_notifications_post_notifications",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Notifications"
				],
				"operation": [
					"notifications_post_notifications"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Title Key",
				"name": "titleKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Body Key",
				"name": "bodyKey_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Title Variables",
				"name": "title_variables_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Body Variables",
				"name": "body_variables_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Title",
				"name": "title_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Body",
				"name": "body_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Icon",
				"name": "icon_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "info",
						"value": "info"
					},
					{
						"name": "warning",
						"value": "warning"
					},
					{
						"name": "success",
						"value": "success"
					},
					{
						"name": "error",
						"value": "error"
					}
				],
				"displayName": "Severity",
				"name": "severity_options"
			},
			{
				"type": "json",
				"displayName": "Actions",
				"name": "actions_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Primary Action Id",
				"name": "primaryActionId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source Module",
				"name": "sourceModule_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source Entity Type",
				"name": "sourceEntityType_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source Entity Id",
				"name": "sourceEntityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Link Href",
				"name": "linkHref_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Group Key",
				"name": "groupKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Expires At",
				"name": "expiresAt_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"titleKey": "={{ $value.titleKey_string }}",
					"bodyKey": "={{ $value.bodyKey_string }}",
					"titleVariables": "={{ JSON.parse($value.title_variables_object) }}",
					"bodyVariables": "={{ JSON.parse($value.body_variables_object) }}",
					"title": "={{ $value.title_string }}",
					"body": "={{ $value.body_string }}",
					"icon": "={{ $value.icon_string }}",
					"severity": "={{ $value.severity_options }}",
					"actions": "={{ JSON.parse($value.actions_json) }}",
					"primaryActionId": "={{ $value.primaryActionId_string }}",
					"sourceModule": "={{ $value.sourceModule_string }}",
					"sourceEntityType": "={{ $value.sourceEntityType_string }}",
					"sourceEntityId": "={{ $value.sourceEntityId_string }}",
					"linkHref": "={{ $value.linkHref_string }}",
					"groupKey": "={{ $value.groupKey_string }}",
					"expiresAt": "={{ $value.expiresAt_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Notifications"
				],
				"operation": [
					"notifications_post_notifications"
				],
				"bodyInputMode_notifications_post_notifications": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_notifications_post_notifications",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Notifications"
				],
				"operation": [
					"notifications_post_notifications"
				],
				"bodyInputMode_notifications_post_notifications": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Notifications"
				],
				"operation": [
					"notifications_post_notifications_id_action"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Notifications"
				],
				"operation": [
					"notifications_put_notifications_id_dismiss"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Notifications"
				],
				"operation": [
					"notifications_put_notifications_id_read"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Notifications"
				],
				"operation": [
					"notifications_put_notifications_id_restore"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Perspective Id",
		"name": "perspectiveId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Perspectives"
				],
				"operation": [
					"perspectives_delete_perspectives_tableId_perspectiveId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Table Id",
		"name": "tableId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Perspectives"
				],
				"operation": [
					"perspectives_delete_perspectives_tableId_perspectiveId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Role Id",
		"name": "roleId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Perspectives"
				],
				"operation": [
					"perspectives_delete_perspectives_tableId_roles_roleId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Table Id",
		"name": "tableId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Perspectives"
				],
				"operation": [
					"perspectives_delete_perspectives_tableId_roles_roleId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Table Id",
		"name": "tableId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Perspectives"
				],
				"operation": [
					"perspectives_get_perspectives_tableId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Perspectives"
				],
				"operation": [
					"perspectives_post_perspectives_tableId"
				]
			}
		}
	},
	{
		"type": "json",
		"required": true,
		"default": "{}",
		"routing": {
			"send": {
				"type": "body",
				"property": "settings",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayName": "Settings",
		"name": "settings_object",
		"displayOptions": {
			"show": {
				"resource": [
					"Perspectives"
				],
				"operation": [
					"perspectives_post_perspectives_tableId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Table Id",
		"name": "tableId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Perspectives"
				],
				"operation": [
					"perspectives_post_perspectives_tableId"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_perspectives_post_perspectives_tableId",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Perspectives"
				],
				"operation": [
					"perspectives_post_perspectives_tableId"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Perspective Id",
				"name": "perspectiveId_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Default",
				"name": "isDefault_boolean"
			},
			{
				"type": "json",
				"displayName": "Apply To Roles",
				"name": "applyToRoles_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Clear Role Ids",
				"name": "clearRoleIds_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Set Role Default",
				"name": "setRoleDefault_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"perspectiveId": "={{ $value.perspectiveId_string }}",
					"isDefault": "={{ $value.isDefault_boolean }}",
					"applyToRoles": "={{ JSON.parse($value.applyToRoles_json) }}",
					"clearRoleIds": "={{ JSON.parse($value.clearRoleIds_json) }}",
					"setRoleDefault": "={{ $value.setRoleDefault_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Perspectives"
				],
				"operation": [
					"perspectives_post_perspectives_tableId"
				],
				"bodyInputMode_perspectives_post_perspectives_tableId": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_perspectives_post_perspectives_tableId",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Perspectives"
				],
				"operation": [
					"perspectives_post_perspectives_tableId"
				],
				"bodyInputMode_perspectives_post_perspectives_tableId": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityType"
			}
		},
		"displayName": "Entity Type",
		"name": "entityType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Query Index"
				],
				"operation": [
					"query_index_post_query_index_purge"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "entityType"
			}
		},
		"displayName": "Entity Type",
		"name": "entityType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Query Index"
				],
				"operation": [
					"query_index_post_query_index_reindex"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_query_index_post_query_index_reindex",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Query Index"
				],
				"operation": [
					"query_index_post_query_index_reindex"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "boolean",
				"default": false,
				"displayName": "Force",
				"name": "force_boolean"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Batch Size",
				"name": "batchSize_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Partition Count",
				"name": "partitionCount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Partition Index",
				"name": "partitionIndex_number"
			}
		],
		"routing": {
			"request": {
				"body": {
					"force": "={{ $value.force_boolean }}",
					"batchSize": "={{ $value.batchSize_number }}",
					"partitionCount": "={{ $value.partitionCount_number }}",
					"partitionIndex": "={{ $value.partitionIndex_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Query Index"
				],
				"operation": [
					"query_index_post_query_index_reindex"
				],
				"bodyInputMode_query_index_post_query_index_reindex": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_query_index_post_query_index_reindex",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Query Index"
				],
				"operation": [
					"query_index_post_query_index_reindex"
				],
				"bodyInputMode_query_index_post_query_index_reindex": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Job Id",
		"name": "jobId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"getQueueJobDetails"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"queue": "={{ $value }}"
				}
			}
		},
		"displayName": "Queue",
		"name": "queue_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"getQueueJobDetails"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"getScheduleExecutions"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"pageSize": "={{ $value.pageSize_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"getScheduleExecutions"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_delete_scheduler_jobs"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"isEnabled": "={{ $value }}"
				}
			}
		},
		"displayName": "Is Enabled",
		"name": "isEnabled_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_get_scheduler_jobs"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page Size",
				"name": "pageSize_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Search",
				"name": "search_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "system",
						"value": "system"
					},
					{
						"name": "organization",
						"value": "organization"
					},
					{
						"name": "tenant",
						"value": "tenant"
					}
				],
				"displayName": "Scope Type",
				"name": "scopeType_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "user",
						"value": "user"
					},
					{
						"name": "module",
						"value": "module"
					}
				],
				"displayName": "Source Type",
				"name": "sourceType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source Module",
				"name": "sourceModule_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Sort",
				"name": "sort_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "asc",
						"value": "asc"
					},
					{
						"name": "desc",
						"value": "desc"
					}
				],
				"displayName": "Order",
				"name": "order_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ids",
				"name": "ids_string",
				"description": "Comma-separated list of record UUIDs to filter by (max 200)."
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"id": "={{ $value.id_string }}",
					"search": "={{ $value.search_string }}",
					"scopeType": "={{ $value.scopeType_options }}",
					"sourceType": "={{ $value.sourceType_options }}",
					"sourceModule": "={{ $value.sourceModule_string }}",
					"sort": "={{ $value.sort_string }}",
					"order": "={{ $value.order_options }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_get_scheduler_jobs"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_post_scheduler_jobs"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "cron",
				"value": "cron"
			},
			{
				"name": "interval",
				"value": "interval"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "scheduleType"
			}
		},
		"displayName": "Schedule Type",
		"name": "scheduleType_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_post_scheduler_jobs"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "scheduleValue"
			}
		},
		"displayName": "Schedule Value",
		"name": "scheduleValue_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_post_scheduler_jobs"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "system",
				"value": "system"
			},
			{
				"name": "organization",
				"value": "organization"
			},
			{
				"name": "tenant",
				"value": "tenant"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "scopeType"
			}
		},
		"displayName": "Scope Type",
		"name": "scopeType_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_post_scheduler_jobs"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "queue",
				"value": "queue"
			},
			{
				"name": "command",
				"value": "command"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "targetType"
			}
		},
		"displayName": "Target Type",
		"name": "targetType_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_post_scheduler_jobs"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_scheduler_post_scheduler_jobs",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_post_scheduler_jobs"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Timezone",
				"name": "timezone_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Target Queue",
				"name": "targetQueue_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Target Command",
				"name": "targetCommand_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Target Payload",
				"name": "target_payload_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Require Feature",
				"name": "requireFeature_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Enabled",
				"name": "isEnabled_boolean"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "user",
						"value": "user"
					},
					{
						"name": "module",
						"value": "module"
					}
				],
				"displayName": "Source Type",
				"name": "sourceType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source Module",
				"name": "sourceModule_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"timezone": "={{ $value.timezone_string }}",
					"targetQueue": "={{ $value.targetQueue_string }}",
					"targetCommand": "={{ $value.targetCommand_string }}",
					"targetPayload": "={{ JSON.parse($value.target_payload_object) }}",
					"requireFeature": "={{ $value.requireFeature_string }}",
					"isEnabled": "={{ $value.isEnabled_boolean }}",
					"sourceType": "={{ $value.sourceType_options }}",
					"sourceModule": "={{ $value.sourceModule_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_post_scheduler_jobs"
				],
				"bodyInputMode_scheduler_post_scheduler_jobs": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_scheduler_post_scheduler_jobs",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_post_scheduler_jobs"
				],
				"bodyInputMode_scheduler_post_scheduler_jobs": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_put_scheduler_jobs"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_scheduler_put_scheduler_jobs",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_put_scheduler_jobs"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Name",
				"name": "name_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "cron",
						"value": "cron"
					},
					{
						"name": "interval",
						"value": "interval"
					}
				],
				"displayName": "Schedule Type",
				"name": "scheduleType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Schedule Value",
				"name": "scheduleValue_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Timezone",
				"name": "timezone_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "queue",
						"value": "queue"
					},
					{
						"name": "command",
						"value": "command"
					}
				],
				"displayName": "Target Type",
				"name": "targetType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Target Queue",
				"name": "targetQueue_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Target Command",
				"name": "targetCommand_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Target Payload",
				"name": "target_payload_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Require Feature",
				"name": "requireFeature_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Enabled",
				"name": "isEnabled_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"name": "={{ $value.name_string }}",
					"description": "={{ $value.description_string }}",
					"scheduleType": "={{ $value.scheduleType_options }}",
					"scheduleValue": "={{ $value.scheduleValue_string }}",
					"timezone": "={{ $value.timezone_string }}",
					"targetType": "={{ $value.targetType_options }}",
					"targetQueue": "={{ $value.targetQueue_string }}",
					"targetCommand": "={{ $value.targetCommand_string }}",
					"targetPayload": "={{ JSON.parse($value.target_payload_object) }}",
					"requireFeature": "={{ $value.requireFeature_string }}",
					"isEnabled": "={{ $value.isEnabled_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_put_scheduler_jobs"
				],
				"bodyInputMode_scheduler_put_scheduler_jobs": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_scheduler_put_scheduler_jobs",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"scheduler_put_scheduler_jobs"
				],
				"bodyInputMode_scheduler_put_scheduler_jobs": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "id"
			}
		},
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Scheduler"
				],
				"operation": [
					"triggerScheduledJob"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string",
				"description": "Specific entity ID to purge (e.g., \"customers:customer_person_profile\", \"catalog:catalog_product\")"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "true",
						"value": "true"
					}
				],
				"displayName": "Confirm All",
				"name": "confirmAll_options",
				"description": "Required when purging all entities"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"entityId": "={{ $value.entityId_string }}",
					"confirmAll": "={{ $value.confirmAll_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_delete_search_index"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string",
				"description": "Filter by entity ID (e.g., \"customers:customer_person_profile\", \"catalog:catalog_product\")"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Limit",
				"name": "limit_number",
				"description": "Maximum entries to return (default: 50, max: 200)"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Offset",
				"name": "offset_number",
				"description": "Offset for pagination (default: 0)"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"entityId": "={{ $value.entityId_string }}",
					"limit": "={{ $value.limit_number }}",
					"offset": "={{ $value.offset_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_get_search_index"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"q": "={{ $value }}"
				}
			}
		},
		"displayName": "Q",
		"name": "q_string",
		"required": true,
		"description": "Search query (required)",
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_get_search_search"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "number",
				"default": "",
				"displayName": "Limit",
				"name": "limit_number",
				"description": "Maximum results to return (default: 50, max: 100)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Strategies",
				"name": "strategies_string",
				"description": "Comma-separated strategies to use: fulltext, vector, tokens (e.g., \"fulltext,vector\")"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Types",
				"name": "entityTypes_string",
				"description": "Comma-separated entity types to filter results (e.g., \"customers:customer_person_profile,catalog:catalog_product,sales:sales_order\")"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"limit": "={{ $value.limit_number }}",
					"strategies": "={{ $value.strategies_string }}",
					"entityTypes": "={{ $value.entityTypes_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_get_search_search"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"q": "={{ $value }}"
				}
			}
		},
		"displayName": "Q",
		"name": "q_string",
		"required": true,
		"description": "Search query (required)",
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_get_search_search_global"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "number",
				"default": "",
				"displayName": "Limit",
				"name": "limit_number",
				"description": "Maximum results to return (default: 50, max: 100)"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Types",
				"name": "entityTypes_string",
				"description": "Comma-separated entity types to filter results (e.g., \"customers:customer_person_profile,catalog:catalog_product,sales:sales_order\")"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"limit": "={{ $value.limit_number }}",
					"entityTypes": "={{ $value.entityTypes_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_get_search_search_global"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_search_post_search_embeddings",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_post_search_embeddings"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "boolean",
				"default": false,
				"displayName": "Auto Indexing Enabled",
				"name": "autoIndexingEnabled_boolean"
			},
			{
				"type": "json",
				"required": true,
				"default": "{}",
				"displayName": "Embedding Config",
				"name": "embedding_config_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"autoIndexingEnabled": "={{ $value.autoIndexingEnabled_boolean }}",
					"embeddingConfig": "={{ JSON.parse($value.embedding_config_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_post_search_embeddings"
				],
				"bodyInputMode_search_post_search_embeddings": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_search_post_search_embeddings",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_post_search_embeddings"
				],
				"bodyInputMode_search_post_search_embeddings": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_search_post_search_embeddings_reindex",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_post_search_embeddings_reindex"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Purge First",
				"name": "purgeFirst_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"entityId": "={{ $value.entityId_string }}",
					"purgeFirst": "={{ $value.purgeFirst_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_post_search_embeddings_reindex"
				],
				"bodyInputMode_search_post_search_embeddings_reindex": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_search_post_search_embeddings_reindex",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_post_search_embeddings_reindex"
				],
				"bodyInputMode_search_post_search_embeddings_reindex": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_search_post_search_reindex",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_post_search_reindex"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "clear",
						"value": "clear"
					},
					{
						"name": "recreate",
						"value": "recreate"
					},
					{
						"name": "reindex",
						"value": "reindex"
					}
				],
				"displayName": "Action",
				"name": "action_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Use Queue",
				"name": "useQueue_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"action": "={{ $value.action_options }}",
					"entityId": "={{ $value.entityId_string }}",
					"useQueue": "={{ $value.useQueue_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_post_search_reindex"
				],
				"bodyInputMode_search_post_search_reindex": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_search_post_search_reindex",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_post_search_reindex"
				],
				"bodyInputMode_search_post_search_reindex": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "json",
		"displayName": "Enabled Strategies",
		"name": "enabledStrategies_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "enabledStrategies"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Search"
				],
				"operation": [
					"search_post_search_settings_global_search"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Translations"
				],
				"operation": [
					"translations_delete_translations_entityType_entityId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[a-z_]+:[a-z_]+$"
		},
		"displayName": "Entity Type",
		"name": "entityType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Translations"
				],
				"operation": [
					"translations_delete_translations_entityType_entityId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Translations"
				],
				"operation": [
					"translations_get_translations_entityType_entityId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[a-z_]+:[a-z_]+$"
		},
		"displayName": "Entity Type",
		"name": "entityType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Translations"
				],
				"operation": [
					"translations_get_translations_entityType_entityId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Entity Id",
		"name": "entityId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Translations"
				],
				"operation": [
					"translations_put_translations_entityType_entityId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[a-z_]+:[a-z_]+$"
		},
		"displayName": "Entity Type",
		"name": "entityType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Translations"
				],
				"operation": [
					"translations_put_translations_entityType_entityId"
				]
			}
		}
	}
];

export default properties;
