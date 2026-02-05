/* eslint-disable */
/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * Generated from OpenMercato OpenAPI spec using @algolia/n8n-openapi-node
 * Run `npm run generate:openapi` to regenerate.
 *
 * Source: https://openmercato.freighttech.org/api/docs/openapi
 * Generated: 2026-02-05T08:54:41.940Z
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
				"name": "Configuration",
				"value": "Configuration",
				"description": "Shared configuration storage and helpers for module settings"
			},
			{
				"name": "Audit & Action Logs",
				"value": "Audit & Action Logs",
				"description": "Tracks user actions and data accesses with undo support scaffolding"
			},
			{
				"name": "Attachments",
				"value": "Attachments",
				"description": "File attachments and media management"
			},
			{
				"name": "API Keys",
				"value": "API Keys",
				"description": "Manage access tokens for external API access"
			},
			{
				"name": "Onboarding",
				"value": "Onboarding",
				"description": "Self-service tenant and organization onboarding flow"
			},
			{
				"name": "Business Rules",
				"value": "Business Rules",
				"description": "Business Rules Engine for defining, managing, and executing business logic and automation rules"
			},
			{
				"name": "Feature Toggles",
				"value": "Feature Toggles",
				"description": "Global feature flags with tenant-level overrides"
			},
			{
				"name": "Workflows",
				"value": "Workflows",
				"description": "Orchestrate business processes with state machines, transitions, and activities"
			},
			{
				"name": "Search",
				"value": "Search",
				"description": "Unified search module with pluggable strategies (Meilisearch, Vector, Tokens)"
			},
			{
				"name": "Currencies",
				"value": "Currencies",
				"description": "Currencies and Exchange rate management"
			},
			{
				"name": "Notifications",
				"value": "Notifications",
				"description": "In-app notifications with module-extensible types and actions"
			},
			{
				"name": "AI Assistant",
				"value": "AI Assistant",
				"description": "MCP server for AI assistant integration with multi-tenant support"
			},
			{
				"name": "Contractors",
				"value": "Contractors",
				"description": "Contractor management for freight operations"
			},
			{
				"name": "FMS Quotes & Offers",
				"value": "FMS Quotes & Offers",
				"description": "Freight quotes and offers management for the FMS module"
			},
			{
				"name": "FMS Locations",
				"value": "FMS Locations",
				"description": "Port and terminal locations management for the FMS module"
			},
			{
				"name": "Fms Products",
				"value": "Fms Products"
			},
			{
				"name": "FMS Documents",
				"value": "FMS Documents",
				"description": "Document management for freight management system (offers, invoices, customs, BOL)"
			},
			{
				"name": "FMS Projects",
				"value": "FMS Projects",
				"description": "Shipping project management with workflow orchestration"
			},
			{
				"name": "FMS Financials",
				"value": "FMS Financials",
				"description": "Invoice processing with AI-powered OCR extraction and charge code matching"
			},
			{
				"name": "Fms Teams",
				"value": "Fms Teams",
				"description": "Team management with contractor assignments for freight operations"
			},
			{
				"name": "Transports",
				"value": "Transports",
				"description": "Transport tracking and management"
			},
			{
				"name": "Email Templates",
				"value": "Email Templates",
				"description": "Configure email layouts and templates for transactional emails"
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
				"name": "Refresh auth cookie from session token",
				"value": "auth_get_auth_session_refresh",
				"action": "Refresh auth cookie from session token",
				"description": "Exchanges an existing `session_token` cookie for a fresh JWT auth cookie and redirects the browser.",
				"routing": {
					"request": {
						"method": "GET",
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
				"name": "GET /directory/tenants/lookup",
				"value": "directory_get_directory_tenants_lookup",
				"action": "GET /directory/tenants/lookup",
				"description": "GET /directory/tenants/lookup",
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
				"name": "List activitys",
				"value": "customers_get_customers_activities",
				"action": "List activitys",
				"description": "Returns a paginated collection of activitys scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/activities"
					}
				}
			},
			{
				"name": "Create activity",
				"value": "customers_post_customers_activities",
				"action": "Create activity",
				"description": "Creates a timeline activity linked to an entity or deal.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customers/activities"
					}
				}
			},
			{
				"name": "Update activity",
				"value": "customers_put_customers_activities",
				"action": "Update activity",
				"description": "Updates subject, body, scheduling, or custom fields for an existing activity.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customers/activities"
					}
				}
			},
			{
				"name": "Delete activity",
				"value": "customers_delete_customers_activities",
				"action": "Delete activity",
				"description": "Deletes an activity identified by `id`. Accepts id via body or query string.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/customers/activities"
					}
				}
			},
			{
				"name": "List addresss",
				"value": "customers_get_customers_addresses",
				"action": "List addresss",
				"description": "Returns a paginated collection of addresss scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/addresses"
					}
				}
			},
			{
				"name": "Create address",
				"value": "customers_post_customers_addresses",
				"action": "Create address",
				"description": "Creates a customer address record and associates it with the referenced entity.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customers/addresses"
					}
				}
			},
			{
				"name": "Update address",
				"value": "customers_put_customers_addresses",
				"action": "Update address",
				"description": "Updates fields on an existing customer address.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customers/addresses"
					}
				}
			},
			{
				"name": "Delete address",
				"value": "customers_delete_customers_addresses",
				"action": "Delete address",
				"description": "Deletes an address by id. The identifier may be included in the body or query.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/customers/addresses"
					}
				}
			},
			{
				"name": "List comments",
				"value": "customers_get_customers_comments",
				"action": "List comments",
				"description": "Returns a paginated collection of comments scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/comments"
					}
				}
			},
			{
				"name": "Create comment",
				"value": "customers_post_customers_comments",
				"action": "Create comment",
				"description": "Adds a comment to a customer timeline.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customers/comments"
					}
				}
			},
			{
				"name": "Update comment",
				"value": "customers_put_customers_comments",
				"action": "Update comment",
				"description": "Updates an existing timeline comment.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customers/comments"
					}
				}
			},
			{
				"name": "Delete comment",
				"value": "customers_delete_customers_comments",
				"action": "Delete comment",
				"description": "Deletes a comment identified by `id` supplied via body or query string.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/customers/comments"
					}
				}
			},
			{
				"name": "List companies",
				"value": "customers_get_customers_companies",
				"action": "List companies",
				"description": "Returns a paginated collection of companies scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/companies"
					}
				}
			},
			{
				"name": "Create company",
				"value": "customers_post_customers_companies",
				"action": "Create company",
				"description": "Creates a company record and associated profile data.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customers/companies"
					}
				}
			},
			{
				"name": "Update company",
				"value": "customers_put_customers_companies",
				"action": "Update company",
				"description": "Updates company profile fields, tags, or custom attributes.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customers/companies"
					}
				}
			},
			{
				"name": "Delete company",
				"value": "customers_delete_customers_companies",
				"action": "Delete company",
				"description": "Deletes a company by id. The identifier can be provided via body or query.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/customers/companies"
					}
				}
			},
			{
				"name": "Fetch recent customer todo links",
				"value": "customers_get_customers_dashboard_widgets_customer_todos",
				"action": "Fetch recent customer todo links",
				"description": "Returns the most recently created todo links for display on dashboards.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/dashboard/widgets/customer-todos"
					}
				}
			},
			{
				"name": "Fetch recently created customers",
				"value": "customers_get_customers_dashboard_widgets_new_customers",
				"action": "Fetch recently created customers",
				"description": "Returns the latest customers created within the scoped tenant/organization for dashboard display.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/dashboard/widgets/new-customers"
					}
				}
			},
			{
				"name": "Fetch recently created deals",
				"value": "customers_get_customers_dashboard_widgets_new_deals",
				"action": "Fetch recently created deals",
				"description": "Returns the latest deals created within the scoped tenant/organization for dashboard display.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/dashboard/widgets/new-deals"
					}
				}
			},
			{
				"name": "Fetch upcoming customer interactions",
				"value": "customers_get_customers_dashboard_widgets_next_interactions",
				"action": "Fetch upcoming customer interactions",
				"description": "Lists upcoming (or optionally past) customer interaction reminders ordered by interaction date.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/dashboard/widgets/next-interactions"
					}
				}
			},
			{
				"name": "List deals",
				"value": "customers_get_customers_deals",
				"action": "List deals",
				"description": "Returns a paginated collection of deals scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/deals"
					}
				}
			},
			{
				"name": "Create deal",
				"value": "customers_post_customers_deals",
				"action": "Create deal",
				"description": "Creates a sales deal, optionally associating people and companies.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customers/deals"
					}
				}
			},
			{
				"name": "Update deal",
				"value": "customers_put_customers_deals",
				"action": "Update deal",
				"description": "Updates pipeline position, metadata, or associations for an existing deal.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customers/deals"
					}
				}
			},
			{
				"name": "Delete deal",
				"value": "customers_delete_customers_deals",
				"action": "Delete deal",
				"description": "Deletes a deal by `id`. The identifier may be provided in the body or query parameters.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/customers/deals"
					}
				}
			},
			{
				"name": "Resolve currency dictionary",
				"value": "customers_get_customers_dictionaries_currency",
				"action": "Resolve currency dictionary",
				"description": "Returns the active currency dictionary for the current organization scope, falling back to shared entries when required.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/dictionaries/currency"
					}
				}
			},
			{
				"name": "Find person by phone digits",
				"value": "customers_get_customers_people_check_phone",
				"action": "Find person by phone digits",
				"description": "Performs an exact digits comparison (stripping non-numeric characters) to determine whether a customer contact matches the provided phone fragment.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/people/check-phone"
					}
				}
			},
			{
				"name": "List people",
				"value": "customers_get_customers_people",
				"action": "List people",
				"description": "Returns a paginated collection of people scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/people"
					}
				}
			},
			{
				"name": "Create person",
				"value": "customers_post_customers_people",
				"action": "Create person",
				"description": "Creates a person contact using scoped organization and tenant identifiers.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customers/people"
					}
				}
			},
			{
				"name": "Update person",
				"value": "customers_put_customers_people",
				"action": "Update person",
				"description": "Updates contact details or custom fields for a person.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customers/people"
					}
				}
			},
			{
				"name": "Delete person",
				"value": "customers_delete_customers_people",
				"action": "Delete person",
				"description": "Deletes a person by id. Request body or query may provide the identifier.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/customers/people"
					}
				}
			},
			{
				"name": "Retrieve address format",
				"value": "customers_get_customers_settings_address_format",
				"action": "Retrieve address format",
				"description": "Returns the current address formatting preference for the selected organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/settings/address-format"
					}
				}
			},
			{
				"name": "Update address format",
				"value": "customers_put_customers_settings_address_format",
				"action": "Update address format",
				"description": "Updates the address format preference for the selected organization.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customers/settings/address-format"
					}
				}
			},
			{
				"name": "Assign tag to customer entity",
				"value": "customers_post_customers_tags_assign",
				"action": "Assign tag to customer entity",
				"description": "Links a tag to a customer entity within the validated tenant / organization scope.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customers/tags/assign"
					}
				}
			},
			{
				"name": "List tags",
				"value": "customers_get_customers_tags",
				"action": "List tags",
				"description": "Returns a paginated collection of tags scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/tags"
					}
				}
			},
			{
				"name": "Create tag",
				"value": "customers_post_customers_tags",
				"action": "Create tag",
				"description": "Creates a tag scoped to the current tenant and organization.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customers/tags"
					}
				}
			},
			{
				"name": "Update tag",
				"value": "customers_put_customers_tags",
				"action": "Update tag",
				"description": "Updates label, color, or description for an existing tag.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customers/tags"
					}
				}
			},
			{
				"name": "Delete tag",
				"value": "customers_delete_customers_tags",
				"action": "Delete tag",
				"description": "Deletes a tag identified by `id`. The identifier may be provided via body or query string.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/customers/tags"
					}
				}
			},
			{
				"name": "Remove tag from customer entity",
				"value": "customers_post_customers_tags_unassign",
				"action": "Remove tag from customer entity",
				"description": "Detaches a tag from a customer entity within the validated tenant / organization scope.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customers/tags/unassign"
					}
				}
			},
			{
				"name": "Fetch company with related data",
				"value": "customers_get_customers_companies_id",
				"action": "Fetch company with related data",
				"description": "Returns a company customer record with optional related resources such as addresses, comments, activities, deals, todos, and linked people.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/companies/{{ $parameter.id_string }}"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"activities",
						"addresses",
						"comments",
						"company",
						"customFields",
						"deals",
						"people",
						"profile",
						"tags",
						"todos"
					]
				}
			},
			{
				"name": "Fetch deal with associations",
				"value": "customers_get_customers_deals_id",
				"action": "Fetch deal with associations",
				"description": "Returns a deal with linked people, companies, custom fields, and viewer context.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/deals/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Update dictionary entry",
				"value": "customers_patch_customers_dictionaries_kind_id",
				"action": "Update dictionary entry",
				"description": "Updates value, label, color, or icon for an existing customer dictionary entry.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/customers/dictionaries/{{ $parameter.kind_string }}/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Delete dictionary entry",
				"value": "customers_delete_customers_dictionaries_kind_id",
				"action": "Delete dictionary entry",
				"description": "Removes a customer dictionary entry by identifier.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/customers/dictionaries/{{ $parameter.kind_string }}/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "List dictionary entries",
				"value": "customers_get_customers_dictionaries_kind",
				"action": "List dictionary entries",
				"description": "Returns the merged dictionary entries for the requested kind, including inherited values.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/dictionaries/{{ $parameter.kind_string }}"
					}
				}
			},
			{
				"name": "Create or override dictionary entry",
				"value": "customers_post_customers_dictionaries_kind",
				"action": "Create or override dictionary entry",
				"description": "Creates a dictionary entry (or updates the existing entry for the same value) within the current organization scope.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customers/dictionaries/{{ $parameter.kind_string }}"
					}
				}
			},
			{
				"name": "Fetch person with related data",
				"value": "customers_get_customers_people_id",
				"action": "Fetch person with related data",
				"description": "Returns a person customer record with optional related resources such as addresses, comments, activities, deals, and todos.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customers/people/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
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
				"description": "Returns up to 50 option entries for populating relation dropdowns, automatically resolving label fields when omitted.",
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
				"name": "GET /configs/cache",
				"value": "configs_get_configs_cache",
				"action": "GET /configs/cache",
				"description": "Requires features: configs.cache.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/configs/cache"
					}
				}
			},
			{
				"name": "POST /configs/cache",
				"value": "configs_post_configs_cache",
				"action": "POST /configs/cache",
				"description": "Requires features: configs.cache.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/configs/cache"
					}
				}
			},
			{
				"name": "GET /configs/system-status",
				"value": "configs_get_configs_system_status",
				"action": "GET /configs/system-status",
				"description": "Requires features: configs.system_status.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/configs/system-status"
					}
				}
			},
			{
				"name": "POST /configs/system-status",
				"value": "configs_post_configs_system_status",
				"action": "POST /configs/system-status",
				"description": "Requires features: configs.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/configs/system-status"
					}
				}
			},
			{
				"name": "GET /configs/upgrade-actions",
				"value": "configs_get_configs_upgrade_actions",
				"action": "GET /configs/upgrade-actions",
				"description": "Requires features: configs.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/configs/upgrade-actions"
					}
				}
			},
			{
				"name": "POST /configs/upgrade-actions",
				"value": "configs_post_configs_upgrade_actions",
				"action": "POST /configs/upgrade-actions",
				"description": "Requires features: configs.manage",
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
					"Configuration"
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
				"name": "GET /attachments/library",
				"value": "attachments_get_attachments_library",
				"action": "GET /attachments/library",
				"description": "Requires features: attachments.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/attachments/library"
					}
				}
			},
			{
				"name": "GET /attachments/partitions",
				"value": "attachments_get_attachments_partitions",
				"action": "GET /attachments/partitions",
				"description": "Requires features: attachments.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/attachments/partitions"
					}
				}
			},
			{
				"name": "POST /attachments/partitions",
				"value": "attachments_post_attachments_partitions",
				"action": "POST /attachments/partitions",
				"description": "Requires features: attachments.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/attachments/partitions"
					}
				}
			},
			{
				"name": "PUT /attachments/partitions",
				"value": "attachments_put_attachments_partitions",
				"action": "PUT /attachments/partitions",
				"description": "Requires features: attachments.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/attachments/partitions"
					}
				}
			},
			{
				"name": "DELETE /attachments/partitions",
				"value": "attachments_delete_attachments_partitions",
				"action": "DELETE /attachments/partitions",
				"description": "Requires features: attachments.manage",
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
				"name": "POST /attachments/transfer",
				"value": "attachments_post_attachments_transfer",
				"action": "POST /attachments/transfer",
				"description": "Requires features: attachments.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/attachments/transfer"
					}
				}
			},
			{
				"name": "GET /attachments/file/{id}",
				"value": "attachments_get_attachments_file_id",
				"action": "GET /attachments/file/{id}",
				"description": "GET /attachments/file/{id}",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/attachments/file/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /attachments/image/{id}/{slug}",
				"value": "attachments_get_attachments_image_id_slug",
				"action": "GET /attachments/image/{id}/{slug}",
				"description": "GET /attachments/image/{id}/{slug}",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/attachments/image/{{ $parameter.id_string }}/{{ $parameter.slug_string }}"
					}
				}
			},
			{
				"name": "GET /attachments/library/{id}",
				"value": "attachments_get_attachments_library_id",
				"action": "GET /attachments/library/{id}",
				"description": "Requires features: attachments.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/attachments/library/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PATCH /attachments/library/{id}",
				"value": "attachments_patch_attachments_library_id",
				"action": "PATCH /attachments/library/{id}",
				"description": "Requires features: attachments.manage",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/attachments/library/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /attachments/library/{id}",
				"value": "attachments_delete_attachments_library_id",
				"action": "DELETE /attachments/library/{id}",
				"description": "Requires features: attachments.manage",
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
				"name": "List categories",
				"value": "catalog_get_catalog_categories",
				"action": "List categories",
				"description": "Returns a paginated collection of categories scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/catalog/categories"
					}
				}
			},
			{
				"name": "Create category",
				"value": "catalog_post_catalog_categories",
				"action": "Create category",
				"description": "Creates a new product category.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/catalog/categories"
					}
				}
			},
			{
				"name": "Update category",
				"value": "catalog_put_catalog_categories",
				"action": "Update category",
				"description": "Updates an existing category by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/catalog/categories"
					}
				}
			},
			{
				"name": "Delete category",
				"value": "catalog_delete_catalog_categories",
				"action": "Delete category",
				"description": "Deletes a category by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/catalog/categories"
					}
				}
			},
			{
				"name": "List offers",
				"value": "catalog_get_catalog_offers",
				"action": "List offers",
				"description": "Returns a paginated collection of offers scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/catalog/offers"
					}
				}
			},
			{
				"name": "Create offer",
				"value": "catalog_post_catalog_offers",
				"action": "Create offer",
				"description": "Creates a new offer linking a product to a sales channel.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/catalog/offers"
					}
				}
			},
			{
				"name": "Update offer",
				"value": "catalog_put_catalog_offers",
				"action": "Update offer",
				"description": "Updates an existing offer by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/catalog/offers"
					}
				}
			},
			{
				"name": "Delete offer",
				"value": "catalog_delete_catalog_offers",
				"action": "Delete offer",
				"description": "Deletes an offer by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/catalog/offers"
					}
				}
			},
			{
				"name": "List option schemas",
				"value": "catalog_get_catalog_option_schemas",
				"action": "List option schemas",
				"description": "Returns a paginated collection of option schemas scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/catalog/option-schemas"
					}
				}
			},
			{
				"name": "Create option schema",
				"value": "catalog_post_catalog_option_schemas",
				"action": "Create option schema",
				"description": "Creates a new option schema template for product configurations.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/catalog/option-schemas"
					}
				}
			},
			{
				"name": "Update option schema",
				"value": "catalog_put_catalog_option_schemas",
				"action": "Update option schema",
				"description": "Updates an existing option schema by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/catalog/option-schemas"
					}
				}
			},
			{
				"name": "Delete option schema",
				"value": "catalog_delete_catalog_option_schemas",
				"action": "Delete option schema",
				"description": "Deletes an option schema by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/catalog/option-schemas"
					}
				}
			},
			{
				"name": "List price kinds",
				"value": "catalog_get_catalog_price_kinds",
				"action": "List price kinds",
				"description": "Returns a paginated collection of price kinds scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/catalog/price-kinds"
					}
				}
			},
			{
				"name": "Create price kind",
				"value": "catalog_post_catalog_price_kinds",
				"action": "Create price kind",
				"description": "Creates a new price kind for categorizing product prices.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/catalog/price-kinds"
					}
				}
			},
			{
				"name": "Update price kind",
				"value": "catalog_put_catalog_price_kinds",
				"action": "Update price kind",
				"description": "Updates an existing price kind by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/catalog/price-kinds"
					}
				}
			},
			{
				"name": "Delete price kind",
				"value": "catalog_delete_catalog_price_kinds",
				"action": "Delete price kind",
				"description": "Deletes a price kind by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/catalog/price-kinds"
					}
				}
			},
			{
				"name": "List prices",
				"value": "catalog_get_catalog_prices",
				"action": "List prices",
				"description": "Returns a paginated collection of prices scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/catalog/prices"
					}
				}
			},
			{
				"name": "Create price",
				"value": "catalog_post_catalog_prices",
				"action": "Create price",
				"description": "Creates a new price entry for a product or variant.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/catalog/prices"
					}
				}
			},
			{
				"name": "Update price",
				"value": "catalog_put_catalog_prices",
				"action": "Update price",
				"description": "Updates an existing price by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/catalog/prices"
					}
				}
			},
			{
				"name": "Delete price",
				"value": "catalog_delete_catalog_prices",
				"action": "Delete price",
				"description": "Deletes a price by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/catalog/prices"
					}
				}
			},
			{
				"name": "List product media",
				"value": "catalog_get_catalog_product_media",
				"action": "List product media",
				"description": "Returns a list of media attachments for a specific product.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/catalog/product-media"
					}
				}
			},
			{
				"name": "List products",
				"value": "catalog_get_catalog_products",
				"action": "List products",
				"description": "Returns a paginated collection of products scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/catalog/products"
					}
				}
			},
			{
				"name": "Create product",
				"value": "catalog_post_catalog_products",
				"action": "Create product",
				"description": "Creates a new product in the catalog.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/catalog/products"
					}
				}
			},
			{
				"name": "Update product",
				"value": "catalog_put_catalog_products",
				"action": "Update product",
				"description": "Updates an existing product by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/catalog/products"
					}
				}
			},
			{
				"name": "Delete product",
				"value": "catalog_delete_catalog_products",
				"action": "Delete product",
				"description": "Deletes a product by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/catalog/products"
					}
				}
			},
			{
				"name": "List product tags",
				"value": "catalog_get_catalog_tags",
				"action": "List product tags",
				"description": "Returns a paginated collection of product tags scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/catalog/tags"
					}
				}
			},
			{
				"name": "List variants",
				"value": "catalog_get_catalog_variants",
				"action": "List variants",
				"description": "Returns a paginated collection of variants scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/catalog/variants"
					}
				}
			},
			{
				"name": "Create variant",
				"value": "catalog_post_catalog_variants",
				"action": "Create variant",
				"description": "Creates a new product variant.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/catalog/variants"
					}
				}
			},
			{
				"name": "Update variant",
				"value": "catalog_put_catalog_variants",
				"action": "Update variant",
				"description": "Updates an existing variant by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/catalog/variants"
					}
				}
			},
			{
				"name": "Delete variant",
				"value": "catalog_delete_catalog_variants",
				"action": "Delete variant",
				"description": "Deletes a variant by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/catalog/variants"
					}
				}
			},
			{
				"name": "Get dictionary entries by key",
				"value": "catalog_get_catalog_dictionaries_key",
				"action": "Get dictionary entries by key",
				"description": "Returns dictionary entries for a specific key (e.g., currency, unit).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/catalog/dictionaries/{{ $parameter.key_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
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
				"name": "List sales adjustment kinds",
				"value": "sales_get_sales_adjustment_kinds",
				"action": "List sales adjustment kinds",
				"description": "Returns a paginated collection of sales adjustment kinds that belong to the current organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/adjustment-kinds"
					}
				}
			},
			{
				"name": "Create sales adjustment kind",
				"value": "sales_post_sales_adjustment_kinds",
				"action": "Create sales adjustment kind",
				"description": "Creates an adjustment kind.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/adjustment-kinds"
					}
				}
			},
			{
				"name": "Update sales adjustment kind",
				"value": "sales_put_sales_adjustment_kinds",
				"action": "Update sales adjustment kind",
				"description": "Updates an adjustment kind.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/adjustment-kinds"
					}
				}
			},
			{
				"name": "Delete sales adjustment kind",
				"value": "sales_delete_sales_adjustment_kinds",
				"action": "Delete sales adjustment kind",
				"description": "Deletes an adjustment kind.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/adjustment-kinds"
					}
				}
			},
			{
				"name": "List sales channels",
				"value": "sales_get_sales_channels",
				"action": "List sales channels",
				"description": "Manage sales channels to segment orders and pricing across marketplaces or stores.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/channels"
					}
				}
			},
			{
				"name": "Create sales channel",
				"value": "sales_post_sales_channels",
				"action": "Create sales channel",
				"description": "Creates a new sales channel.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/channels"
					}
				}
			},
			{
				"name": "Update sales channel",
				"value": "sales_put_sales_channels",
				"action": "Update sales channel",
				"description": "Updates an existing sales channel by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/channels"
					}
				}
			},
			{
				"name": "Delete sales channel",
				"value": "sales_delete_sales_channels",
				"action": "Delete sales channel",
				"description": "Deletes a sales channel identified by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/channels"
					}
				}
			},
			{
				"name": "List delivery windows",
				"value": "sales_get_sales_delivery_windows",
				"action": "List delivery windows",
				"description": "Define delivery windows to communicate lead times and cut-off rules for sales orders.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/delivery-windows"
					}
				}
			},
			{
				"name": "Create delivery window",
				"value": "sales_post_sales_delivery_windows",
				"action": "Create delivery window",
				"description": "Creates a new delivery window.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/delivery-windows"
					}
				}
			},
			{
				"name": "Update delivery window",
				"value": "sales_put_sales_delivery_windows",
				"action": "Update delivery window",
				"description": "Updates an existing delivery window by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/delivery-windows"
					}
				}
			},
			{
				"name": "Delete delivery window",
				"value": "sales_delete_sales_delivery_windows",
				"action": "Delete delivery window",
				"description": "Deletes a delivery window identified by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/delivery-windows"
					}
				}
			},
			{
				"name": "List document addresss",
				"value": "sales_get_sales_document_addresses",
				"action": "List document addresss",
				"description": "Returns a paginated collection of document addresss that belong to the current organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/document-addresses"
					}
				}
			},
			{
				"name": "Create document address",
				"value": "sales_post_sales_document_addresses",
				"action": "Create document address",
				"description": "Creates a sales document address linked to an order or quote.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/document-addresses"
					}
				}
			},
			{
				"name": "Update document address",
				"value": "sales_put_sales_document_addresses",
				"action": "Update document address",
				"description": "Updates a sales document address.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/document-addresses"
					}
				}
			},
			{
				"name": "Delete document address",
				"value": "sales_delete_sales_document_addresses",
				"action": "Delete document address",
				"description": "Deletes a sales document address.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/document-addresses"
					}
				}
			},
			{
				"name": "Generate next number",
				"value": "sales_post_sales_document_numbers",
				"action": "Generate next number",
				"description": "Generates the next sales order or quote number using configured formatting rules.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/document-numbers"
					}
				}
			},
			{
				"name": "List sales notes",
				"value": "sales_get_sales_notes",
				"action": "List sales notes",
				"description": "Returns a paginated collection of sales notes that belong to the current organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/notes"
					}
				}
			},
			{
				"name": "Create sales note",
				"value": "sales_post_sales_notes",
				"action": "Create sales note",
				"description": "Creates a note attached to a sales document.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/notes"
					}
				}
			},
			{
				"name": "Update sales note",
				"value": "sales_put_sales_notes",
				"action": "Update sales note",
				"description": "Updates a sales note.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/notes"
					}
				}
			},
			{
				"name": "Delete sales note",
				"value": "sales_delete_sales_notes",
				"action": "Delete sales note",
				"description": "Deletes a sales note.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/notes"
					}
				}
			},
			{
				"name": "List order adjustments",
				"value": "sales_get_sales_order_adjustments",
				"action": "List order adjustments",
				"description": "Returns a paginated collection of order adjustments that belong to the current organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/order-adjustments"
					}
				}
			},
			{
				"name": "Create order adjustment",
				"value": "sales_post_sales_order_adjustments",
				"action": "Create order adjustment",
				"description": "Creates an order adjustment and recalculates totals.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/order-adjustments"
					}
				}
			},
			{
				"name": "Update order adjustment",
				"value": "sales_put_sales_order_adjustments",
				"action": "Update order adjustment",
				"description": "Updates an order adjustment and recalculates totals.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/order-adjustments"
					}
				}
			},
			{
				"name": "Delete order adjustment",
				"value": "sales_delete_sales_order_adjustments",
				"action": "Delete order adjustment",
				"description": "Deletes an order adjustment and recalculates totals.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/order-adjustments"
					}
				}
			},
			{
				"name": "List order line statuses",
				"value": "sales_get_sales_order_line_statuses",
				"action": "List order line statuses",
				"description": "Manage custom order line statuses available for sales documents.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/order-line-statuses"
					}
				}
			},
			{
				"name": "Create order line status",
				"value": "sales_post_sales_order_line_statuses",
				"action": "Create order line status",
				"description": "Creates a new order line status.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/order-line-statuses"
					}
				}
			},
			{
				"name": "Update order line status",
				"value": "sales_put_sales_order_line_statuses",
				"action": "Update order line status",
				"description": "Updates an existing order line status by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/order-line-statuses"
					}
				}
			},
			{
				"name": "Delete order line status",
				"value": "sales_delete_sales_order_line_statuses",
				"action": "Delete order line status",
				"description": "Deletes a order line status identified by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/order-line-statuses"
					}
				}
			},
			{
				"name": "List order lines",
				"value": "sales_get_sales_order_lines",
				"action": "List order lines",
				"description": "Returns a paginated collection of order lines that belong to the current organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/order-lines"
					}
				}
			},
			{
				"name": "Create order line",
				"value": "sales_post_sales_order_lines",
				"action": "Create order line",
				"description": "Creates an order line and recalculates totals.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/order-lines"
					}
				}
			},
			{
				"name": "Update order line",
				"value": "sales_put_sales_order_lines",
				"action": "Update order line",
				"description": "Updates an order line and recalculates totals.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/order-lines"
					}
				}
			},
			{
				"name": "Delete order line",
				"value": "sales_delete_sales_order_lines",
				"action": "Delete order line",
				"description": "Deletes an order line and recalculates totals.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/order-lines"
					}
				}
			},
			{
				"name": "List order statuses",
				"value": "sales_get_sales_order_statuses",
				"action": "List order statuses",
				"description": "Manage the lifecycle states available for sales orders.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/order-statuses"
					}
				}
			},
			{
				"name": "Create order status",
				"value": "sales_post_sales_order_statuses",
				"action": "Create order status",
				"description": "Creates a new order status.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/order-statuses"
					}
				}
			},
			{
				"name": "Update order status",
				"value": "sales_put_sales_order_statuses",
				"action": "Update order status",
				"description": "Updates an existing order status by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/order-statuses"
					}
				}
			},
			{
				"name": "Delete order status",
				"value": "sales_delete_sales_order_statuses",
				"action": "Delete order status",
				"description": "Deletes a order status identified by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/order-statuses"
					}
				}
			},
			{
				"name": "List orders",
				"value": "sales_get_sales_orders",
				"action": "List orders",
				"description": "Returns a paginated collection of orders that belong to the current organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/orders"
					}
				}
			},
			{
				"name": "Create order",
				"value": "sales_post_sales_orders",
				"action": "Create order",
				"description": "Creates a new sales order.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/orders"
					}
				}
			},
			{
				"name": "Order management",
				"value": "sales_put_sales_orders",
				"action": "Order management",
				"description": "Requires features: sales.orders.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/orders"
					}
				}
			},
			{
				"name": "Delete order",
				"value": "sales_delete_sales_orders",
				"action": "Delete order",
				"description": "Deletes a sales order.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/orders"
					}
				}
			},
			{
				"name": "List payment methods",
				"value": "sales_get_sales_payment_methods",
				"action": "List payment methods",
				"description": "Configure payment options that can be assigned to sales orders and invoices.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/payment-methods"
					}
				}
			},
			{
				"name": "Create payment method",
				"value": "sales_post_sales_payment_methods",
				"action": "Create payment method",
				"description": "Creates a new payment method.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/payment-methods"
					}
				}
			},
			{
				"name": "Update payment method",
				"value": "sales_put_sales_payment_methods",
				"action": "Update payment method",
				"description": "Updates an existing payment method by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/payment-methods"
					}
				}
			},
			{
				"name": "Delete payment method",
				"value": "sales_delete_sales_payment_methods",
				"action": "Delete payment method",
				"description": "Deletes a payment method identified by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/payment-methods"
					}
				}
			},
			{
				"name": "List payment statuses",
				"value": "sales_get_sales_payment_statuses",
				"action": "List payment statuses",
				"description": "Manage the lifecycle states available for payments.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/payment-statuses"
					}
				}
			},
			{
				"name": "Create payment status",
				"value": "sales_post_sales_payment_statuses",
				"action": "Create payment status",
				"description": "Creates a new payment status.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/payment-statuses"
					}
				}
			},
			{
				"name": "Update payment status",
				"value": "sales_put_sales_payment_statuses",
				"action": "Update payment status",
				"description": "Updates an existing payment status by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/payment-statuses"
					}
				}
			},
			{
				"name": "Delete payment status",
				"value": "sales_delete_sales_payment_statuses",
				"action": "Delete payment status",
				"description": "Deletes a payment status identified by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/payment-statuses"
					}
				}
			},
			{
				"name": "List payments",
				"value": "sales_get_sales_payments",
				"action": "List payments",
				"description": "Returns a paginated collection of payments that belong to the current organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/payments"
					}
				}
			},
			{
				"name": "Create payment",
				"value": "sales_post_sales_payments",
				"action": "Create payment",
				"description": "Creates a payment for a sales order.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/payments"
					}
				}
			},
			{
				"name": "Update payment",
				"value": "sales_put_sales_payments",
				"action": "Update payment",
				"description": "Updates a payment.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/payments"
					}
				}
			},
			{
				"name": "Delete payment",
				"value": "sales_delete_sales_payments",
				"action": "Delete payment",
				"description": "Deletes a payment.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/payments"
					}
				}
			},
			{
				"name": "List price kinds",
				"value": "sales_get_sales_price_kinds",
				"action": "List price kinds",
				"description": "Lists available price kinds that can be used when pricing sales channels and offers.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/price-kinds"
					}
				}
			},
			{
				"name": "List quote adjustments",
				"value": "sales_get_sales_quote_adjustments",
				"action": "List quote adjustments",
				"description": "Returns a paginated collection of quote adjustments that belong to the current organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/quote-adjustments"
					}
				}
			},
			{
				"name": "Create quote adjustment",
				"value": "sales_post_sales_quote_adjustments",
				"action": "Create quote adjustment",
				"description": "Creates a quote adjustment and recalculates totals.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/quote-adjustments"
					}
				}
			},
			{
				"name": "Update quote adjustment",
				"value": "sales_put_sales_quote_adjustments",
				"action": "Update quote adjustment",
				"description": "Updates a quote adjustment and recalculates totals.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/quote-adjustments"
					}
				}
			},
			{
				"name": "Delete quote adjustment",
				"value": "sales_delete_sales_quote_adjustments",
				"action": "Delete quote adjustment",
				"description": "Deletes a quote adjustment and recalculates totals.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/quote-adjustments"
					}
				}
			},
			{
				"name": "List quote lines",
				"value": "sales_get_sales_quote_lines",
				"action": "List quote lines",
				"description": "Returns a paginated collection of quote lines that belong to the current organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/quote-lines"
					}
				}
			},
			{
				"name": "Create quote line",
				"value": "sales_post_sales_quote_lines",
				"action": "Create quote line",
				"description": "Creates a quote line and recalculates totals.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/quote-lines"
					}
				}
			},
			{
				"name": "Update quote line",
				"value": "sales_put_sales_quote_lines",
				"action": "Update quote line",
				"description": "Updates a quote line and recalculates totals.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/quote-lines"
					}
				}
			},
			{
				"name": "Delete quote line",
				"value": "sales_delete_sales_quote_lines",
				"action": "Delete quote line",
				"description": "Deletes a quote line and recalculates totals.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/quote-lines"
					}
				}
			},
			{
				"name": "Accept quote and convert to order",
				"value": "sales_post_sales_quotes_accept",
				"action": "Accept quote and convert to order",
				"description": "Accept quote and convert to order",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/quotes/accept"
					}
				}
			},
			{
				"name": "Convert quote",
				"value": "sales_post_sales_quotes_convert",
				"action": "Convert quote",
				"description": "Creates a sales order from a quote and removes the original quote record.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/quotes/convert"
					}
				}
			},
			{
				"name": "List quotes",
				"value": "sales_get_sales_quotes",
				"action": "List quotes",
				"description": "Returns a paginated collection of quotes that belong to the current organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/quotes"
					}
				}
			},
			{
				"name": "Create quote",
				"value": "sales_post_sales_quotes",
				"action": "Create quote",
				"description": "Creates a new sales quote.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/quotes"
					}
				}
			},
			{
				"name": "Quote management",
				"value": "sales_put_sales_quotes",
				"action": "Quote management",
				"description": "Requires features: sales.quotes.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/quotes"
					}
				}
			},
			{
				"name": "Delete quote",
				"value": "sales_delete_sales_quotes",
				"action": "Delete quote",
				"description": "Deletes a sales quote.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/quotes"
					}
				}
			},
			{
				"name": "Send quote",
				"value": "sales_post_sales_quotes_send",
				"action": "Send quote",
				"description": "Requires features: sales.quotes.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/quotes/send"
					}
				}
			},
			{
				"name": "Get document numbering settings",
				"value": "sales_get_sales_settings_document_numbers",
				"action": "Get document numbering settings",
				"description": "Requires features: sales.settings.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/settings/document-numbers"
					}
				}
			},
			{
				"name": "Update document numbering settings",
				"value": "sales_put_sales_settings_document_numbers",
				"action": "Update document numbering settings",
				"description": "Requires features: sales.settings.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/settings/document-numbers"
					}
				}
			},
			{
				"name": "Get order editing guards",
				"value": "sales_get_sales_settings_order_editing",
				"action": "Get order editing guards",
				"description": "Requires features: sales.settings.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/settings/order-editing"
					}
				}
			},
			{
				"name": "Update order editing guards",
				"value": "sales_put_sales_settings_order_editing",
				"action": "Update order editing guards",
				"description": "Requires features: sales.settings.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/settings/order-editing"
					}
				}
			},
			{
				"name": "List shipment statuses",
				"value": "sales_get_sales_shipment_statuses",
				"action": "List shipment statuses",
				"description": "Manage the lifecycle states available for shipments.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/shipment-statuses"
					}
				}
			},
			{
				"name": "Create shipment status",
				"value": "sales_post_sales_shipment_statuses",
				"action": "Create shipment status",
				"description": "Creates a new shipment status.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/shipment-statuses"
					}
				}
			},
			{
				"name": "Update shipment status",
				"value": "sales_put_sales_shipment_statuses",
				"action": "Update shipment status",
				"description": "Updates an existing shipment status by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/shipment-statuses"
					}
				}
			},
			{
				"name": "Delete shipment status",
				"value": "sales_delete_sales_shipment_statuses",
				"action": "Delete shipment status",
				"description": "Deletes a shipment status identified by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/shipment-statuses"
					}
				}
			},
			{
				"name": "List shipments",
				"value": "sales_get_sales_shipments",
				"action": "List shipments",
				"description": "Returns a paginated collection of shipments that belong to the current organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/shipments"
					}
				}
			},
			{
				"name": "Create shipment",
				"value": "sales_post_sales_shipments",
				"action": "Create shipment",
				"description": "Creates a shipment for an order.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/shipments"
					}
				}
			},
			{
				"name": "Update shipment",
				"value": "sales_put_sales_shipments",
				"action": "Update shipment",
				"description": "Updates a shipment.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/shipments"
					}
				}
			},
			{
				"name": "Delete shipment",
				"value": "sales_delete_sales_shipments",
				"action": "Delete shipment",
				"description": "Deletes a shipment.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/shipments"
					}
				}
			},
			{
				"name": "List shipping methods",
				"value": "sales_get_sales_shipping_methods",
				"action": "List shipping methods",
				"description": "Maintain shipping services, carrier mappings, and pricing defaults for order fulfillment.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/shipping-methods"
					}
				}
			},
			{
				"name": "Create shipping method",
				"value": "sales_post_sales_shipping_methods",
				"action": "Create shipping method",
				"description": "Creates a new shipping method.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/shipping-methods"
					}
				}
			},
			{
				"name": "Update shipping method",
				"value": "sales_put_sales_shipping_methods",
				"action": "Update shipping method",
				"description": "Updates an existing shipping method by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/shipping-methods"
					}
				}
			},
			{
				"name": "Delete shipping method",
				"value": "sales_delete_sales_shipping_methods",
				"action": "Delete shipping method",
				"description": "Deletes a shipping method identified by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/shipping-methods"
					}
				}
			},
			{
				"name": "List sales tags",
				"value": "sales_get_sales_tags",
				"action": "List sales tags",
				"description": "Manage reusable tags to categorize sales orders and quotes.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/tags"
					}
				}
			},
			{
				"name": "Create sales tag",
				"value": "sales_post_sales_tags",
				"action": "Create sales tag",
				"description": "Creates a sales document tag.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/tags"
					}
				}
			},
			{
				"name": "Update sales tag",
				"value": "sales_put_sales_tags",
				"action": "Update sales tag",
				"description": "Updates an existing sales tag.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/tags"
					}
				}
			},
			{
				"name": "Delete sales tag",
				"value": "sales_delete_sales_tags",
				"action": "Delete sales tag",
				"description": "Deletes a sales tag.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/tags"
					}
				}
			},
			{
				"name": "List tax rates",
				"value": "sales_get_sales_tax_rates",
				"action": "List tax rates",
				"description": "Returns a paginated list of sales tax rates for the current organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/tax-rates"
					}
				}
			},
			{
				"name": "Create tax rate",
				"value": "sales_post_sales_tax_rates",
				"action": "Create tax rate",
				"description": "Creates a new tax rate record.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/sales/tax-rates"
					}
				}
			},
			{
				"name": "Update tax rate",
				"value": "sales_put_sales_tax_rates",
				"action": "Update tax rate",
				"description": "Updates an existing tax rate by identifier.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/sales/tax-rates"
					}
				}
			},
			{
				"name": "Delete tax rate",
				"value": "sales_delete_sales_tax_rates",
				"action": "Delete tax rate",
				"description": "Deletes a tax rate identified by `id`.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/sales/tax-rates"
					}
				}
			},
			{
				"name": "Get quote details by acceptance token",
				"value": "sales_get_sales_quotes_public_token",
				"action": "Get quote details by acceptance token",
				"description": "Get quote details by acceptance token",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/sales/quotes/public/{{ $parameter.token_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
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
				"name": "GET /onboarding/onboarding/verify",
				"value": "onboarding_get_onboarding_onboarding_verify",
				"action": "GET /onboarding/onboarding/verify",
				"description": "GET /onboarding/onboarding/verify",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/onboarding/onboarding/verify"
					}
				}
			},
			{
				"name": "POST /onboarding/onboarding",
				"value": "onboarding_post_onboarding_onboarding",
				"action": "POST /onboarding/onboarding",
				"description": "POST /onboarding/onboarding",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/onboarding/onboarding"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Onboarding"
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
				"name": "Execute rules for given context",
				"value": "business_rules_post_business_rules_execute",
				"action": "Execute rules for given context",
				"description": "Manually executes applicable business rules for the specified entity type, event, and data. Supports dry-run mode to test rules without executing actions.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/business_rules/execute"
					}
				}
			},
			{
				"name": "List rule execution logs",
				"value": "business_rules_get_business_rules_logs",
				"action": "List rule execution logs",
				"description": "Returns rule execution history for the current tenant and organization with filtering and pagination. Useful for audit trails and debugging.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/business_rules/logs"
					}
				}
			},
			{
				"name": "List business rules",
				"value": "business_rules_get_business_rules_rules",
				"action": "List business rules",
				"description": "Returns business rules for the current tenant and organization with filtering and pagination.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/business_rules/rules"
					}
				}
			},
			{
				"name": "Create business rule",
				"value": "business_rules_post_business_rules_rules",
				"action": "Create business rule",
				"description": "Creates a new business rule for the current tenant and organization.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/business_rules/rules"
					}
				}
			},
			{
				"name": "Update business rule",
				"value": "business_rules_put_business_rules_rules",
				"action": "Update business rule",
				"description": "Updates an existing business rule.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/business_rules/rules"
					}
				}
			},
			{
				"name": "Delete business rule",
				"value": "business_rules_delete_business_rules_rules",
				"action": "Delete business rule",
				"description": "Soft deletes a business rule by identifier.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/business_rules/rules"
					}
				}
			},
			{
				"name": "List rule sets",
				"value": "business_rules_get_business_rules_sets",
				"action": "List rule sets",
				"description": "Returns rule sets for the current tenant and organization with filtering and pagination.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/business_rules/sets"
					}
				}
			},
			{
				"name": "Create rule set",
				"value": "business_rules_post_business_rules_sets",
				"action": "Create rule set",
				"description": "Creates a new rule set for organizing business rules.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/business_rules/sets"
					}
				}
			},
			{
				"name": "Update rule set",
				"value": "business_rules_put_business_rules_sets",
				"action": "Update rule set",
				"description": "Updates an existing rule set.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/business_rules/sets"
					}
				}
			},
			{
				"name": "Delete rule set",
				"value": "business_rules_delete_business_rules_sets",
				"action": "Delete rule set",
				"description": "Soft deletes a rule set by identifier.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/business_rules/sets"
					}
				}
			},
			{
				"name": "Execute a specific rule by its database UUID",
				"value": "business_rules_post_business_rules_execute_ruleId",
				"action": "Execute a specific rule by its database UUID",
				"description": "Directly executes a specific business rule identified by its UUID, bypassing the normal entityType/eventType discovery mechanism. Useful for workflows and targeted rule execution.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/business_rules/execute/{{ $parameter.ruleId_string }}"
					}
				}
			},
			{
				"name": "Get execution log detail",
				"value": "business_rules_get_business_rules_logs_id",
				"action": "Get execution log detail",
				"description": "Returns detailed information about a specific rule execution, including full context and results.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/business_rules/logs/{{ $parameter.id_string }}"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"entityId",
						"entityType",
						"errorMessage",
						"executedAt",
						"executedBy",
						"executionResult",
						"executionTimeMs",
						"id",
						"inputContext",
						"organizationId"
					]
				}
			},
			{
				"name": "Fetch business rule by ID",
				"value": "business_rules_get_business_rules_rules_id",
				"action": "Fetch business rule by ID",
				"description": "Returns complete details of a business rule including conditions and actions.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/business_rules/rules/{{ $parameter.id_string }}"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"conditionExpression",
						"createdAt",
						"createdBy",
						"description",
						"effectiveFrom",
						"effectiveTo",
						"enabled",
						"entityType",
						"eventType",
						"failureActions"
					]
				}
			},
			{
				"name": "Add rule to set",
				"value": "business_rules_post_business_rules_sets_id_members",
				"action": "Add rule to set",
				"description": "Adds a business rule to a rule set with specified sequence and enabled state.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/business_rules/sets/{{ $parameter.id_string }}/members"
					}
				}
			},
			{
				"name": "Update set member",
				"value": "business_rules_put_business_rules_sets_id_members",
				"action": "Update set member",
				"description": "Updates sequence or enabled state of a rule set member.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/business_rules/sets/{{ $parameter.id_string }}/members"
					}
				}
			},
			{
				"name": "Remove rule from set",
				"value": "business_rules_delete_business_rules_sets_id_members",
				"action": "Remove rule from set",
				"description": "Removes a business rule from a rule set (hard delete).",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/business_rules/sets/{{ $parameter.id_string }}/members"
					}
				}
			},
			{
				"name": "Get rule set detail",
				"value": "business_rules_get_business_rules_sets_id",
				"action": "Get rule set detail",
				"description": "Returns detailed information about a specific rule set, including all member rules.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/business_rules/sets/{{ $parameter.id_string }}"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"createdAt",
						"createdBy",
						"description",
						"enabled",
						"id",
						"members",
						"organizationId",
						"setId",
						"setName",
						"tenantId"
					]
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
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
				"name": "GET /feature_toggles/global",
				"value": "feature_toggles_get_feature_toggles_global",
				"action": "GET /feature_toggles/global",
				"description": "Requires roles: superadmin",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/feature_toggles/global"
					}
				}
			},
			{
				"name": "POST /feature_toggles/global",
				"value": "feature_toggles_post_feature_toggles_global",
				"action": "POST /feature_toggles/global",
				"description": "Requires roles: superadmin",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/feature_toggles/global"
					}
				}
			},
			{
				"name": "PUT /feature_toggles/global",
				"value": "feature_toggles_put_feature_toggles_global",
				"action": "PUT /feature_toggles/global",
				"description": "Requires roles: superadmin",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/feature_toggles/global"
					}
				}
			},
			{
				"name": "DELETE /feature_toggles/global",
				"value": "feature_toggles_delete_feature_toggles_global",
				"action": "DELETE /feature_toggles/global",
				"description": "Requires roles: superadmin",
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
				"name": "List workflow definitions",
				"value": "workflows_get_workflows_definitions",
				"action": "List workflow definitions",
				"description": "Get a list of workflow definitions with optional filters. Supports pagination and search.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/workflows/definitions"
					}
				}
			},
			{
				"name": "Create workflow definition",
				"value": "workflows_post_workflows_definitions",
				"action": "Create workflow definition",
				"description": "Create a new workflow definition. The definition must include at least START and END steps with at least one transition connecting them.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/workflows/definitions"
					}
				}
			},
			{
				"name": "List all workflow events",
				"value": "workflows_get_workflows_events",
				"action": "List all workflow events",
				"description": "Get a paginated list of all workflow events with filtering options",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/workflows/events"
					}
				}
			},
			{
				"name": "List workflow instances",
				"value": "workflows_get_workflows_instances",
				"action": "List workflow instances",
				"description": "Get a list of workflow instances with optional filters. Supports pagination and filtering by status, workflowId, correlationKey, etc.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/workflows/instances"
					}
				}
			},
			{
				"name": "Start workflow instance",
				"value": "workflows_post_workflows_instances",
				"action": "Start workflow instance",
				"description": "Start a new workflow instance from a workflow definition. The workflow will execute immediately.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/workflows/instances"
					}
				}
			},
			{
				"name": "POST /workflows/instances/validate-start",
				"value": "workflows_post_workflows_instances_validate_start",
				"action": "POST /workflows/instances/validate-start",
				"description": "POST /workflows/instances/validate-start",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/workflows/instances/validate-start"
					}
				}
			},
			{
				"name": "POST /workflows/signals",
				"value": "workflows_post_workflows_signals",
				"action": "POST /workflows/signals",
				"description": "POST /workflows/signals",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/workflows/signals"
					}
				}
			},
			{
				"name": "GET /workflows/tasks",
				"value": "workflows_get_workflows_tasks",
				"action": "GET /workflows/tasks",
				"description": "GET /workflows/tasks",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/workflows/tasks"
					}
				}
			},
			{
				"name": "Get workflow definition",
				"value": "workflows_get_workflows_definitions_id",
				"action": "Get workflow definition",
				"description": "Get a single workflow definition by ID. Returns the complete workflow structure including steps and transitions (with embedded activities).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/workflows/definitions/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Update workflow definition",
				"value": "workflows_put_workflows_definitions_id",
				"action": "Update workflow definition",
				"description": "Update an existing workflow definition. Supports partial updates - only provided fields will be updated.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/workflows/definitions/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Delete workflow definition",
				"value": "workflows_delete_workflows_definitions_id",
				"action": "Delete workflow definition",
				"description": "Soft delete a workflow definition. Cannot be deleted if there are active workflow instances (RUNNING or WAITING status) using this definition.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/workflows/definitions/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Get workflow event by ID",
				"value": "workflows_get_workflows_events_id",
				"action": "Get workflow event by ID",
				"description": "Get detailed information about a specific workflow event",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/workflows/events/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "POST /workflows/instances/{id}/advance",
				"value": "workflows_post_workflows_instances_id_advance",
				"action": "POST /workflows/instances/{id}/advance",
				"description": "POST /workflows/instances/{id}/advance",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/workflows/instances/{{ $parameter.id_string }}/advance"
					}
				}
			},
			{
				"name": "Cancel workflow instance",
				"value": "workflows_post_workflows_instances_id_cancel",
				"action": "Cancel workflow instance",
				"description": "Cancel a running or paused workflow instance. The workflow will be marked as CANCELLED and will not execute further.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/workflows/instances/{{ $parameter.id_string }}/cancel"
					}
				}
			},
			{
				"name": "Get workflow instance events",
				"value": "workflows_get_workflows_instances_id_events",
				"action": "Get workflow instance events",
				"description": "Get a chronological list of events for a workflow instance. Events track all state changes, transitions, and activities.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/workflows/instances/{{ $parameter.id_string }}/events"
					}
				}
			},
			{
				"name": "Retry failed workflow instance",
				"value": "workflows_post_workflows_instances_id_retry",
				"action": "Retry failed workflow instance",
				"description": "Retry a failed workflow instance from its current step. The workflow will be reset to RUNNING status and execution will continue.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/workflows/instances/{{ $parameter.id_string }}/retry"
					}
				}
			},
			{
				"name": "Get workflow instance",
				"value": "workflows_get_workflows_instances_id",
				"action": "Get workflow instance",
				"description": "Get detailed information about a specific workflow instance including current state, context, and execution status.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/workflows/instances/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "POST /workflows/instances/{id}/signal",
				"value": "workflows_post_workflows_instances_id_signal",
				"action": "POST /workflows/instances/{id}/signal",
				"description": "POST /workflows/instances/{id}/signal",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/workflows/instances/{{ $parameter.id_string }}/signal"
					}
				}
			},
			{
				"name": "POST /workflows/tasks/{id}/claim",
				"value": "workflows_post_workflows_tasks_id_claim",
				"action": "POST /workflows/tasks/{id}/claim",
				"description": "POST /workflows/tasks/{id}/claim",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/workflows/tasks/{{ $parameter.id_string }}/claim"
					}
				}
			},
			{
				"name": "POST /workflows/tasks/{id}/complete",
				"value": "workflows_post_workflows_tasks_id_complete",
				"action": "POST /workflows/tasks/{id}/complete",
				"description": "POST /workflows/tasks/{id}/complete",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/workflows/tasks/{{ $parameter.id_string }}/complete"
					}
				}
			},
			{
				"name": "GET /workflows/tasks/{id}",
				"value": "workflows_get_workflows_tasks_id",
				"action": "GET /workflows/tasks/{id}",
				"description": "GET /workflows/tasks/{id}",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/workflows/tasks/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
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
				"name": "POST /search/embeddings/reindex/cancel",
				"value": "search_post_search_embeddings_reindex_cancel",
				"action": "POST /search/embeddings/reindex/cancel",
				"description": "Requires features: search.embeddings.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/search/embeddings/reindex/cancel"
					}
				}
			},
			{
				"name": "POST /search/embeddings/reindex",
				"value": "search_post_search_embeddings_reindex",
				"action": "POST /search/embeddings/reindex",
				"description": "Requires features: search.embeddings.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/search/embeddings/reindex"
					}
				}
			},
			{
				"name": "GET /search/embeddings",
				"value": "search_get_search_embeddings",
				"action": "GET /search/embeddings",
				"description": "Requires features: search.embeddings.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/embeddings"
					}
				}
			},
			{
				"name": "POST /search/embeddings",
				"value": "search_post_search_embeddings",
				"action": "POST /search/embeddings",
				"description": "Requires features: search.embeddings.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/search/embeddings"
					}
				}
			},
			{
				"name": "GET /search/index",
				"value": "search_get_search_index",
				"action": "GET /search/index",
				"description": "Requires features: search.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/index"
					}
				}
			},
			{
				"name": "DELETE /search/index",
				"value": "search_delete_search_index",
				"action": "DELETE /search/index",
				"description": "Requires features: search.embeddings.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/search/index"
					}
				}
			},
			{
				"name": "POST /search/reindex/cancel",
				"value": "search_post_search_reindex_cancel",
				"action": "POST /search/reindex/cancel",
				"description": "Requires features: search.reindex",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/search/reindex/cancel"
					}
				}
			},
			{
				"name": "POST /search/reindex",
				"value": "search_post_search_reindex",
				"action": "POST /search/reindex",
				"description": "Requires features: search.reindex",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/search/reindex"
					}
				}
			},
			{
				"name": "GET /search/search/global",
				"value": "search_get_search_search_global",
				"action": "GET /search/search/global",
				"description": "Requires features: search.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/search/global"
					}
				}
			},
			{
				"name": "GET /search/search",
				"value": "search_get_search_search",
				"action": "GET /search/search",
				"description": "Requires features: search.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/search"
					}
				}
			},
			{
				"name": "GET /search/settings/fulltext",
				"value": "search_get_search_settings_fulltext",
				"action": "GET /search/settings/fulltext",
				"description": "Requires features: search.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/settings/fulltext"
					}
				}
			},
			{
				"name": "GET /search/settings/global-search",
				"value": "search_get_search_settings_global_search",
				"action": "GET /search/settings/global-search",
				"description": "Requires features: search.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/settings/global-search"
					}
				}
			},
			{
				"name": "POST /search/settings/global-search",
				"value": "search_post_search_settings_global_search",
				"action": "POST /search/settings/global-search",
				"description": "Requires features: search.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/search/settings/global-search"
					}
				}
			},
			{
				"name": "GET /search/settings",
				"value": "search_get_search_settings",
				"action": "GET /search/settings",
				"description": "Requires features: search.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/search/settings"
					}
				}
			},
			{
				"name": "GET /search/settings/vector-store",
				"value": "search_get_search_settings_vector_store",
				"action": "GET /search/settings/vector-store",
				"description": "Requires features: search.view",
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
				"name": "Replace date-specific availability",
				"value": "planner_post_planner_availability_date_specific",
				"action": "Replace date-specific availability",
				"description": "Replaces date-specific availability rules for the subject in a single request.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/planner/availability-date-specific"
					}
				}
			},
			{
				"name": "List availability rule sets",
				"value": "planner_get_planner_availability_rule_sets",
				"action": "List availability rule sets",
				"description": "Returns a paginated collection of availability rule sets scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/planner/availability-rule-sets"
					}
				}
			},
			{
				"name": "Create availability rule set",
				"value": "planner_post_planner_availability_rule_sets",
				"action": "Create availability rule set",
				"description": "Creates a reusable availability rule set.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/planner/availability-rule-sets"
					}
				}
			},
			{
				"name": "Update availability rule set",
				"value": "planner_put_planner_availability_rule_sets",
				"action": "Update availability rule set",
				"description": "Updates an availability rule set by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/planner/availability-rule-sets"
					}
				}
			},
			{
				"name": "Delete availability rule set",
				"value": "planner_delete_planner_availability_rule_sets",
				"action": "Delete availability rule set",
				"description": "Deletes an availability rule set by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/planner/availability-rule-sets"
					}
				}
			},
			{
				"name": "Replace weekly availability",
				"value": "planner_post_planner_availability_weekly",
				"action": "Replace weekly availability",
				"description": "Replaces weekly availability rules for the subject in a single request.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/planner/availability-weekly"
					}
				}
			},
			{
				"name": "List availability rules",
				"value": "planner_get_planner_availability",
				"action": "List availability rules",
				"description": "Returns a paginated collection of availability rules scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/planner/availability"
					}
				}
			},
			{
				"name": "Create availability rule",
				"value": "planner_post_planner_availability",
				"action": "Create availability rule",
				"description": "Creates an availability rule for the selected subject.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/planner/availability"
					}
				}
			},
			{
				"name": "Update availability rule",
				"value": "planner_put_planner_availability",
				"action": "Update availability rule",
				"description": "Updates an availability rule by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/planner/availability"
					}
				}
			},
			{
				"name": "Delete availability rule",
				"value": "planner_delete_planner_availability",
				"action": "Delete availability rule",
				"description": "Deletes an availability rule by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/planner/availability"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
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
				"name": "Assign resource tag",
				"value": "resources_post_resources_resources_tags_assign",
				"action": "Assign resource tag",
				"description": "Assigns a tag to a resources resource.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/resources/resources/tags/assign"
					}
				}
			},
			{
				"name": "Unassign resource tag",
				"value": "resources_post_resources_resources_tags_unassign",
				"action": "Unassign resource tag",
				"description": "Removes a tag from a resources resource.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/resources/resources/tags/unassign"
					}
				}
			},
			{
				"name": "List resourceactivitys",
				"value": "resources_get_resources_activities",
				"action": "List resourceactivitys",
				"description": "Returns a paginated collection of resourceactivitys scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/resources/activities"
					}
				}
			},
			{
				"name": "Create resourceactivity",
				"value": "resources_post_resources_activities",
				"action": "Create resourceactivity",
				"description": "Adds an activity to a resource timeline.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/resources/activities"
					}
				}
			},
			{
				"name": "Update resourceactivity",
				"value": "resources_put_resources_activities",
				"action": "Update resourceactivity",
				"description": "Updates a resource activity.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/resources/activities"
					}
				}
			},
			{
				"name": "Delete resourceactivity",
				"value": "resources_delete_resources_activities",
				"action": "Delete resourceactivity",
				"description": "Deletes a resource activity.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/resources/activities"
					}
				}
			},
			{
				"name": "List resourcecomments",
				"value": "resources_get_resources_comments",
				"action": "List resourcecomments",
				"description": "Returns a paginated collection of resourcecomments scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/resources/comments"
					}
				}
			},
			{
				"name": "Create resourcecomment",
				"value": "resources_post_resources_comments",
				"action": "Create resourcecomment",
				"description": "Adds a note to a resource timeline.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/resources/comments"
					}
				}
			},
			{
				"name": "Update resourcecomment",
				"value": "resources_put_resources_comments",
				"action": "Update resourcecomment",
				"description": "Updates a resource note.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/resources/comments"
					}
				}
			},
			{
				"name": "Delete resourcecomment",
				"value": "resources_delete_resources_comments",
				"action": "Delete resourcecomment",
				"description": "Deletes a resource note.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/resources/comments"
					}
				}
			},
			{
				"name": "List resource types",
				"value": "resources_get_resources_resource_types",
				"action": "List resource types",
				"description": "Returns a paginated collection of resource types scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/resources/resource-types"
					}
				}
			},
			{
				"name": "Create resource type",
				"value": "resources_post_resources_resource_types",
				"action": "Create resource type",
				"description": "Creates a resource type for resources resources.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/resources/resource-types"
					}
				}
			},
			{
				"name": "Update resource type",
				"value": "resources_put_resources_resource_types",
				"action": "Update resource type",
				"description": "Updates a resource type by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/resources/resource-types"
					}
				}
			},
			{
				"name": "Delete resource type",
				"value": "resources_delete_resources_resource_types",
				"action": "Delete resource type",
				"description": "Deletes a resource type by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/resources/resource-types"
					}
				}
			},
			{
				"name": "List resources",
				"value": "resources_get_resources_resources",
				"action": "List resources",
				"description": "Returns a paginated collection of resources scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/resources/resources"
					}
				}
			},
			{
				"name": "Create resource",
				"value": "resources_post_resources_resources",
				"action": "Create resource",
				"description": "Creates a resource scoped to the selected organization.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/resources/resources"
					}
				}
			},
			{
				"name": "Update resource",
				"value": "resources_put_resources_resources",
				"action": "Update resource",
				"description": "Updates a resource by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/resources/resources"
					}
				}
			},
			{
				"name": "Delete resource",
				"value": "resources_delete_resources_resources",
				"action": "Delete resource",
				"description": "Deletes a resource by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/resources/resources"
					}
				}
			},
			{
				"name": "List resource tags",
				"value": "resources_get_resources_tags",
				"action": "List resource tags",
				"description": "Returns a paginated collection of resource tags scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/resources/tags"
					}
				}
			},
			{
				"name": "Create resource tag",
				"value": "resources_post_resources_tags",
				"action": "Create resource tag",
				"description": "Creates a tag for resources resources and services.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/resources/tags"
					}
				}
			},
			{
				"name": "Update resource tag",
				"value": "resources_put_resources_tags",
				"action": "Update resource tag",
				"description": "Updates a resource tag by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/resources/tags"
					}
				}
			},
			{
				"name": "Delete resource tag",
				"value": "resources_delete_resources_tags",
				"action": "Delete resource tag",
				"description": "Deletes a resource tag by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/resources/tags"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
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
				"name": "Approve leave request",
				"value": "staff_post_staff_leave_requests_accept",
				"action": "Approve leave request",
				"description": "Approves a leave request and adds unavailability rules for the staff member.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/leave-requests/accept"
					}
				}
			},
			{
				"name": "Reject leave request",
				"value": "staff_post_staff_leave_requests_reject",
				"action": "Reject leave request",
				"description": "Rejects a leave request with an optional comment.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/leave-requests/reject"
					}
				}
			},
			{
				"name": "Get current user team member profile",
				"value": "staff_get_staff_team_members_self",
				"action": "Get current user team member profile",
				"description": "Returns the staff team member linked to the current user, if any.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/staff/team-members/self"
					}
				}
			},
			{
				"name": "Create current user team member profile",
				"value": "staff_post_staff_team_members_self",
				"action": "Create current user team member profile",
				"description": "Creates a team member profile for the signed-in user.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/team-members/self"
					}
				}
			},
			{
				"name": "Assign team member tag",
				"value": "staff_post_staff_team_members_tags_assign",
				"action": "Assign team member tag",
				"description": "Assigns a tag to a staff team member.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/team-members/tags/assign"
					}
				}
			},
			{
				"name": "Unassign team member tag",
				"value": "staff_post_staff_team_members_tags_unassign",
				"action": "Unassign team member tag",
				"description": "Removes a tag from a staff team member.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/team-members/tags/unassign"
					}
				}
			},
			{
				"name": "List teammemberactivitys",
				"value": "staff_get_staff_activities",
				"action": "List teammemberactivitys",
				"description": "Returns a paginated collection of teammemberactivitys scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/staff/activities"
					}
				}
			},
			{
				"name": "Create teammemberactivity",
				"value": "staff_post_staff_activities",
				"action": "Create teammemberactivity",
				"description": "Adds an activity to a team member timeline.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/activities"
					}
				}
			},
			{
				"name": "Update teammemberactivity",
				"value": "staff_put_staff_activities",
				"action": "Update teammemberactivity",
				"description": "Updates a team member activity.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/staff/activities"
					}
				}
			},
			{
				"name": "Delete teammemberactivity",
				"value": "staff_delete_staff_activities",
				"action": "Delete teammemberactivity",
				"description": "Deletes a team member activity.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/staff/activities"
					}
				}
			},
			{
				"name": "List teammemberaddresss",
				"value": "staff_get_staff_addresses",
				"action": "List teammemberaddresss",
				"description": "Returns a paginated collection of teammemberaddresss scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/staff/addresses"
					}
				}
			},
			{
				"name": "Create teammemberaddress",
				"value": "staff_post_staff_addresses",
				"action": "Create teammemberaddress",
				"description": "Adds a team member address.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/addresses"
					}
				}
			},
			{
				"name": "Update teammemberaddress",
				"value": "staff_put_staff_addresses",
				"action": "Update teammemberaddress",
				"description": "Updates a team member address.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/staff/addresses"
					}
				}
			},
			{
				"name": "Delete teammemberaddress",
				"value": "staff_delete_staff_addresses",
				"action": "Delete teammemberaddress",
				"description": "Deletes a team member address.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/staff/addresses"
					}
				}
			},
			{
				"name": "List teammembercomments",
				"value": "staff_get_staff_comments",
				"action": "List teammembercomments",
				"description": "Returns a paginated collection of teammembercomments scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/staff/comments"
					}
				}
			},
			{
				"name": "Create teammembercomment",
				"value": "staff_post_staff_comments",
				"action": "Create teammembercomment",
				"description": "Adds a note to a team member timeline.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/comments"
					}
				}
			},
			{
				"name": "Update teammembercomment",
				"value": "staff_put_staff_comments",
				"action": "Update teammembercomment",
				"description": "Updates a team member note.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/staff/comments"
					}
				}
			},
			{
				"name": "Delete teammembercomment",
				"value": "staff_delete_staff_comments",
				"action": "Delete teammembercomment",
				"description": "Deletes a team member note.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/staff/comments"
					}
				}
			},
			{
				"name": "List teammemberjobhistorys",
				"value": "staff_get_staff_job_histories",
				"action": "List teammemberjobhistorys",
				"description": "Returns a paginated collection of teammemberjobhistorys scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/staff/job-histories"
					}
				}
			},
			{
				"name": "Create teammemberjobhistory",
				"value": "staff_post_staff_job_histories",
				"action": "Create teammemberjobhistory",
				"description": "Adds a team member job history entry.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/job-histories"
					}
				}
			},
			{
				"name": "Update teammemberjobhistory",
				"value": "staff_put_staff_job_histories",
				"action": "Update teammemberjobhistory",
				"description": "Updates a team member job history entry.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/staff/job-histories"
					}
				}
			},
			{
				"name": "Delete teammemberjobhistory",
				"value": "staff_delete_staff_job_histories",
				"action": "Delete teammemberjobhistory",
				"description": "Deletes a team member job history entry.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/staff/job-histories"
					}
				}
			},
			{
				"name": "List leave requests",
				"value": "staff_get_staff_leave_requests",
				"action": "List leave requests",
				"description": "Returns a paginated collection of leave requests scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/staff/leave-requests"
					}
				}
			},
			{
				"name": "Create leave request",
				"value": "staff_post_staff_leave_requests",
				"action": "Create leave request",
				"description": "Creates a leave request for a staff member.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/leave-requests"
					}
				}
			},
			{
				"name": "Update leave request",
				"value": "staff_put_staff_leave_requests",
				"action": "Update leave request",
				"description": "Updates a leave request by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/staff/leave-requests"
					}
				}
			},
			{
				"name": "Delete leave request",
				"value": "staff_delete_staff_leave_requests",
				"action": "Delete leave request",
				"description": "Deletes a leave request by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/staff/leave-requests"
					}
				}
			},
			{
				"name": "List team members",
				"value": "staff_get_staff_team_members",
				"action": "List team members",
				"description": "Returns a paginated collection of team members scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/staff/team-members"
					}
				}
			},
			{
				"name": "Create team member",
				"value": "staff_post_staff_team_members",
				"action": "Create team member",
				"description": "Creates a team member for staff assignments.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/team-members"
					}
				}
			},
			{
				"name": "Update team member",
				"value": "staff_put_staff_team_members",
				"action": "Update team member",
				"description": "Updates a team member by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/staff/team-members"
					}
				}
			},
			{
				"name": "Delete team member",
				"value": "staff_delete_staff_team_members",
				"action": "Delete team member",
				"description": "Deletes a team member by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/staff/team-members"
					}
				}
			},
			{
				"name": "List team roles",
				"value": "staff_get_staff_team_roles",
				"action": "List team roles",
				"description": "Returns a paginated collection of team roles scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/staff/team-roles"
					}
				}
			},
			{
				"name": "Create team role",
				"value": "staff_post_staff_team_roles",
				"action": "Create team role",
				"description": "Creates a team role for staff team members.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/team-roles"
					}
				}
			},
			{
				"name": "Update team role",
				"value": "staff_put_staff_team_roles",
				"action": "Update team role",
				"description": "Updates a team role by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/staff/team-roles"
					}
				}
			},
			{
				"name": "Delete team role",
				"value": "staff_delete_staff_team_roles",
				"action": "Delete team role",
				"description": "Deletes a team role by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/staff/team-roles"
					}
				}
			},
			{
				"name": "List teams",
				"value": "staff_get_staff_teams",
				"action": "List teams",
				"description": "Returns a paginated collection of teams scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/staff/teams"
					}
				}
			},
			{
				"name": "Create team",
				"value": "staff_post_staff_teams",
				"action": "Create team",
				"description": "Creates a staff team.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/staff/teams"
					}
				}
			},
			{
				"name": "Update team",
				"value": "staff_put_staff_teams",
				"action": "Update team",
				"description": "Updates a staff team by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/staff/teams"
					}
				}
			},
			{
				"name": "Delete team",
				"value": "staff_delete_staff_teams",
				"action": "Delete team",
				"description": "Deletes a staff team by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/staff/teams"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
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
				"name": "POST /ai_assistant/chat",
				"value": "ai_assistant_post_ai_assistant_chat",
				"action": "POST /ai_assistant/chat",
				"description": "Requires features: ai_assistant.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/ai_assistant/chat"
					}
				}
			},
			{
				"name": "GET /ai_assistant/health",
				"value": "ai_assistant_get_ai_assistant_health",
				"action": "GET /ai_assistant/health",
				"description": "Requires features: ai_assistant.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/ai_assistant/health"
					}
				}
			},
			{
				"name": "POST /ai_assistant/route",
				"value": "ai_assistant_post_ai_assistant_route",
				"action": "POST /ai_assistant/route",
				"description": "Requires features: ai_assistant.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/ai_assistant/route"
					}
				}
			},
			{
				"name": "Generate session key",
				"value": "ai_assistant_post_ai_assistant_session_key",
				"action": "Generate session key",
				"description": "Generates a new session token that can be included in MCP tool calls via the _sessionToken parameter. The token inherits the calling user's roles and organization context.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/ai_assistant/session-key"
					}
				}
			},
			{
				"name": "GET /ai_assistant/settings",
				"value": "ai_assistant_get_ai_assistant_settings",
				"action": "GET /ai_assistant/settings",
				"description": "Requires features: ai_assistant.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/ai_assistant/settings"
					}
				}
			},
			{
				"name": "POST /ai_assistant/tools/execute",
				"value": "ai_assistant_post_ai_assistant_tools_execute",
				"action": "POST /ai_assistant/tools/execute",
				"description": "Requires features: ai_assistant.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/ai_assistant/tools/execute"
					}
				}
			},
			{
				"name": "GET /ai_assistant/tools",
				"value": "ai_assistant_get_ai_assistant_tools",
				"action": "GET /ai_assistant/tools",
				"description": "Requires features: ai_assistant.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/ai_assistant/tools"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"AI Assistant"
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
				"name": "GET /contractors/addresses",
				"value": "contractors_get_contractors_addresses",
				"action": "GET /contractors/addresses",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/addresses"
					}
				}
			},
			{
				"name": "POST /contractors/addresses",
				"value": "contractors_post_contractors_addresses",
				"action": "POST /contractors/addresses",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/addresses"
					}
				}
			},
			{
				"name": "PUT /contractors/addresses",
				"value": "contractors_put_contractors_addresses",
				"action": "PUT /contractors/addresses",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/addresses"
					}
				}
			},
			{
				"name": "DELETE /contractors/addresses",
				"value": "contractors_delete_contractors_addresses",
				"action": "DELETE /contractors/addresses",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/addresses"
					}
				}
			},
			{
				"name": "GET /contractors/addresses/table-config",
				"value": "contractors_get_contractors_addresses_table_config",
				"action": "GET /contractors/addresses/table-config",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/addresses/table-config"
					}
				}
			},
			{
				"name": "GET /contractors/bank-accounts",
				"value": "contractors_get_contractors_bank_accounts",
				"action": "GET /contractors/bank-accounts",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/bank-accounts"
					}
				}
			},
			{
				"name": "POST /contractors/bank-accounts",
				"value": "contractors_post_contractors_bank_accounts",
				"action": "POST /contractors/bank-accounts",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/bank-accounts"
					}
				}
			},
			{
				"name": "PUT /contractors/bank-accounts",
				"value": "contractors_put_contractors_bank_accounts",
				"action": "PUT /contractors/bank-accounts",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/bank-accounts"
					}
				}
			},
			{
				"name": "DELETE /contractors/bank-accounts",
				"value": "contractors_delete_contractors_bank_accounts",
				"action": "DELETE /contractors/bank-accounts",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/bank-accounts"
					}
				}
			},
			{
				"name": "GET /contractors/contacts",
				"value": "contractors_get_contractors_contacts",
				"action": "GET /contractors/contacts",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contacts"
					}
				}
			},
			{
				"name": "POST /contractors/contacts",
				"value": "contractors_post_contractors_contacts",
				"action": "POST /contractors/contacts",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/contacts"
					}
				}
			},
			{
				"name": "PUT /contractors/contacts",
				"value": "contractors_put_contractors_contacts",
				"action": "PUT /contractors/contacts",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/contacts"
					}
				}
			},
			{
				"name": "DELETE /contractors/contacts",
				"value": "contractors_delete_contractors_contacts",
				"action": "DELETE /contractors/contacts",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/contacts"
					}
				}
			},
			{
				"name": "GET /contractors/contacts/table-config",
				"value": "contractors_get_contractors_contacts_table_config",
				"action": "GET /contractors/contacts/table-config",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contacts/table-config"
					}
				}
			},
			{
				"name": "GET /contractors/contractors",
				"value": "contractors_get_contractors_contractors",
				"action": "GET /contractors/contractors",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors"
					}
				}
			},
			{
				"name": "POST /contractors/contractors",
				"value": "contractors_post_contractors_contractors",
				"action": "POST /contractors/contractors",
				"description": "Requires features: contractors.create",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/contractors"
					}
				}
			},
			{
				"name": "PUT /contractors/contractors",
				"value": "contractors_put_contractors_contractors",
				"action": "PUT /contractors/contractors",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/contractors"
					}
				}
			},
			{
				"name": "DELETE /contractors/contractors",
				"value": "contractors_delete_contractors_contractors",
				"action": "DELETE /contractors/contractors",
				"description": "Requires features: contractors.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/contractors"
					}
				}
			},
			{
				"name": "GET /contractors/credit-limits",
				"value": "contractors_get_contractors_credit_limits",
				"action": "GET /contractors/credit-limits",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/credit-limits"
					}
				}
			},
			{
				"name": "POST /contractors/credit-limits",
				"value": "contractors_post_contractors_credit_limits",
				"action": "POST /contractors/credit-limits",
				"description": "Requires features: contractors.manage_financial",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/credit-limits"
					}
				}
			},
			{
				"name": "PUT /contractors/credit-limits",
				"value": "contractors_put_contractors_credit_limits",
				"action": "PUT /contractors/credit-limits",
				"description": "Requires features: contractors.manage_financial",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/credit-limits"
					}
				}
			},
			{
				"name": "DELETE /contractors/credit-limits",
				"value": "contractors_delete_contractors_credit_limits",
				"action": "DELETE /contractors/credit-limits",
				"description": "Requires features: contractors.manage_financial",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/credit-limits"
					}
				}
			},
			{
				"name": "GET /contractors/offers",
				"value": "contractors_get_contractors_offers",
				"action": "GET /contractors/offers",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/offers"
					}
				}
			},
			{
				"name": "GET /contractors/payment-terms",
				"value": "contractors_get_contractors_payment_terms",
				"action": "GET /contractors/payment-terms",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/payment-terms"
					}
				}
			},
			{
				"name": "POST /contractors/payment-terms",
				"value": "contractors_post_contractors_payment_terms",
				"action": "POST /contractors/payment-terms",
				"description": "Requires features: contractors.manage_financial",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/payment-terms"
					}
				}
			},
			{
				"name": "PUT /contractors/payment-terms",
				"value": "contractors_put_contractors_payment_terms",
				"action": "PUT /contractors/payment-terms",
				"description": "Requires features: contractors.manage_financial",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/payment-terms"
					}
				}
			},
			{
				"name": "DELETE /contractors/payment-terms",
				"value": "contractors_delete_contractors_payment_terms",
				"action": "DELETE /contractors/payment-terms",
				"description": "Requires features: contractors.manage_financial",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/payment-terms"
					}
				}
			},
			{
				"name": "GET /contractors/projects",
				"value": "contractors_get_contractors_projects",
				"action": "GET /contractors/projects",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/projects"
					}
				}
			},
			{
				"name": "GET /contractors/regon-lookup",
				"value": "contractors_get_contractors_regon_lookup",
				"action": "GET /contractors/regon-lookup",
				"description": "Requires features: contractors.create",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/regon-lookup"
					}
				}
			},
			{
				"name": "GET /contractors/role-types",
				"value": "contractors_get_contractors_role_types",
				"action": "GET /contractors/role-types",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/role-types"
					}
				}
			},
			{
				"name": "POST /contractors/role-types",
				"value": "contractors_post_contractors_role_types",
				"action": "POST /contractors/role-types",
				"description": "Requires features: contractors.admin",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/role-types"
					}
				}
			},
			{
				"name": "PUT /contractors/role-types",
				"value": "contractors_put_contractors_role_types",
				"action": "PUT /contractors/role-types",
				"description": "Requires features: contractors.admin",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/role-types"
					}
				}
			},
			{
				"name": "DELETE /contractors/role-types",
				"value": "contractors_delete_contractors_role_types",
				"action": "DELETE /contractors/role-types",
				"description": "Requires features: contractors.admin",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/role-types"
					}
				}
			},
			{
				"name": "GET /contractors/sop-comments",
				"value": "contractors_get_contractors_sop_comments",
				"action": "GET /contractors/sop-comments",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/sop-comments"
					}
				}
			},
			{
				"name": "POST /contractors/sop-comments",
				"value": "contractors_post_contractors_sop_comments",
				"action": "POST /contractors/sop-comments",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/sop-comments"
					}
				}
			},
			{
				"name": "PUT /contractors/sop-comments",
				"value": "contractors_put_contractors_sop_comments",
				"action": "PUT /contractors/sop-comments",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/sop-comments"
					}
				}
			},
			{
				"name": "DELETE /contractors/sop-comments",
				"value": "contractors_delete_contractors_sop_comments",
				"action": "DELETE /contractors/sop-comments",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/sop-comments"
					}
				}
			},
			{
				"name": "GET /contractors/table-config",
				"value": "contractors_get_contractors_table_config",
				"action": "GET /contractors/table-config",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/table-config"
					}
				}
			},
			{
				"name": "GET /contractors/contractors/{id}",
				"value": "contractors_get_contractors_contractors_id",
				"action": "GET /contractors/contractors/{id}",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /contractors/contractors/{id}",
				"value": "contractors_put_contractors_contractors_id",
				"action": "PUT /contractors/contractors/{id}",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /contractors/contractors/{id}",
				"value": "contractors_delete_contractors_contractors_id",
				"action": "DELETE /contractors/contractors/{id}",
				"description": "Requires features: contractors.delete",
				"routing": {
					"request": {
						"method": "DELETE",
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
				"name": "Fetch draft quotes metrics",
				"value": "fms_quotes_get_fms_quotes_dashboard_widgets_draft_quotes",
				"action": "Fetch draft quotes metrics",
				"description": "Returns count, max lag time, and trend for draft quotes within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/dashboard/widgets/draft-quotes"
					}
				}
			},
			{
				"name": "Fetch pending response offers metrics",
				"value": "fms_quotes_get_fms_quotes_dashboard_widgets_pending_response_offers",
				"action": "Fetch pending response offers metrics",
				"description": "Returns count, max lag time, and trend for sent offers pending customer response within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/dashboard/widgets/pending-response-offers"
					}
				}
			},
			{
				"name": "Fetch unsent offers metrics",
				"value": "fms_quotes_get_fms_quotes_dashboard_widgets_unsent_offers",
				"action": "Fetch unsent offers metrics",
				"description": "Returns count, max lag time, and trend for unsent offers within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/dashboard/widgets/unsent-offers"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Quotes"
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
				"name": "GET /fms_quotes/entities/contractors",
				"value": "fms_quotes_get_fms_quotes_entities_contractors",
				"action": "GET /fms_quotes/entities/contractors",
				"description": "Requires features: fms_quotes.quotes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/entities/contractors"
					}
				}
			},
			{
				"name": "GET /fms_quotes/entities/users",
				"value": "fms_quotes_get_fms_quotes_entities_users",
				"action": "GET /fms_quotes/entities/users",
				"description": "Requires features: fms_quotes.quotes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/entities/users"
					}
				}
			},
			{
				"name": "GET /fms_quotes/offer-lines",
				"value": "fms_quotes_get_fms_quotes_offer_lines",
				"action": "GET /fms_quotes/offer-lines",
				"description": "Requires features: fms_quotes.quotes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/offer-lines"
					}
				}
			},
			{
				"name": "POST /fms_quotes/offer-lines",
				"value": "fms_quotes_post_fms_quotes_offer_lines",
				"action": "POST /fms_quotes/offer-lines",
				"description": "Requires features: fms_quotes.quotes.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_quotes/offer-lines"
					}
				}
			},
			{
				"name": "GET /fms_quotes/offer-lines/table-config",
				"value": "fms_quotes_get_fms_quotes_offer_lines_table_config",
				"action": "GET /fms_quotes/offer-lines/table-config",
				"description": "Requires features: fms_quotes.quotes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/offer-lines/table-config"
					}
				}
			},
			{
				"name": "GET /fms_quotes/offers",
				"value": "fms_quotes_get_fms_quotes_offers",
				"action": "GET /fms_quotes/offers",
				"description": "Requires features: fms_quotes.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/offers"
					}
				}
			},
			{
				"name": "POST /fms_quotes/offers",
				"value": "fms_quotes_post_fms_quotes_offers",
				"action": "POST /fms_quotes/offers",
				"description": "Requires features: fms_quotes.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_quotes/offers"
					}
				}
			},
			{
				"name": "POST /fms_quotes/offers/version",
				"value": "fms_quotes_post_fms_quotes_offers_version",
				"action": "POST /fms_quotes/offers/version",
				"description": "Requires features: fms_quotes.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_quotes/offers/version"
					}
				}
			},
			{
				"name": "GET /fms_quotes/quote-lines",
				"value": "fms_quotes_get_fms_quotes_quote_lines",
				"action": "GET /fms_quotes/quote-lines",
				"description": "Requires features: fms_quotes.quotes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/quote-lines"
					}
				}
			},
			{
				"name": "POST /fms_quotes/quote-lines",
				"value": "fms_quotes_post_fms_quotes_quote_lines",
				"action": "POST /fms_quotes/quote-lines",
				"description": "Requires features: fms_quotes.quotes.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_quotes/quote-lines"
					}
				}
			},
			{
				"name": "GET /fms_quotes/quote-lines/table-config",
				"value": "fms_quotes_get_fms_quotes_quote_lines_table_config",
				"action": "GET /fms_quotes/quote-lines/table-config",
				"description": "Requires features: fms_quotes.quotes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/quote-lines/table-config"
					}
				}
			},
			{
				"name": "GET /fms_quotes",
				"value": "fms_quotes_get_fms_quotes",
				"action": "GET /fms_quotes",
				"description": "Requires features: fms_quotes.quotes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes"
					}
				}
			},
			{
				"name": "POST /fms_quotes",
				"value": "fms_quotes_post_fms_quotes",
				"action": "POST /fms_quotes",
				"description": "Requires features: fms_quotes.quotes.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_quotes"
					}
				}
			},
			{
				"name": "PUT /fms_quotes",
				"value": "fms_quotes_put_fms_quotes",
				"action": "PUT /fms_quotes",
				"description": "Requires features: fms_quotes.quotes.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_quotes"
					}
				}
			},
			{
				"name": "DELETE /fms_quotes",
				"value": "fms_quotes_delete_fms_quotes",
				"action": "DELETE /fms_quotes",
				"description": "Requires features: fms_quotes.quotes.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_quotes"
					}
				}
			},
			{
				"name": "GET /fms_quotes/table-config",
				"value": "fms_quotes_get_fms_quotes_table_config",
				"action": "GET /fms_quotes/table-config",
				"description": "Requires features: fms_quotes.quotes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/table-config"
					}
				}
			},
			{
				"name": "GET /fms_quotes/{id}",
				"value": "fms_quotes_get_fms_quotes_id",
				"action": "GET /fms_quotes/{id}",
				"description": "Requires features: fms_quotes.quotes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_quotes/{id}",
				"value": "fms_quotes_put_fms_quotes_id",
				"action": "PUT /fms_quotes/{id}",
				"description": "Requires features: fms_quotes.quotes.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_quotes/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_quotes/{id}",
				"value": "fms_quotes_delete_fms_quotes_id",
				"action": "DELETE /fms_quotes/{id}",
				"description": "Requires features: fms_quotes.quotes.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_quotes/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_quotes/offer-lines/{id}",
				"value": "fms_quotes_get_fms_quotes_offer_lines_id",
				"action": "GET /fms_quotes/offer-lines/{id}",
				"description": "Requires features: fms_quotes.quotes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/offer-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_quotes/offer-lines/{id}",
				"value": "fms_quotes_put_fms_quotes_offer_lines_id",
				"action": "PUT /fms_quotes/offer-lines/{id}",
				"description": "Requires features: fms_quotes.quotes.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_quotes/offer-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_quotes/offer-lines/{id}",
				"value": "fms_quotes_delete_fms_quotes_offer_lines_id",
				"action": "DELETE /fms_quotes/offer-lines/{id}",
				"description": "Requires features: fms_quotes.quotes.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_quotes/offer-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_quotes/offers/{id}/contacts",
				"value": "fms_quotes_get_fms_quotes_offers_id_contacts",
				"action": "GET /fms_quotes/offers/{id}/contacts",
				"description": "Requires features: fms_quotes.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/offers/{{ $parameter.id_string }}/contacts"
					}
				}
			},
			{
				"name": "POST /fms_quotes/offers/{id}/convert-to-project",
				"value": "fms_quotes_post_fms_quotes_offers_id_convert_to_project",
				"action": "POST /fms_quotes/offers/{id}/convert-to-project",
				"description": "Requires features: fms_quotes.offers.manage, fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_quotes/offers/{{ $parameter.id_string }}/convert-to-project"
					}
				}
			},
			{
				"name": "GET /fms_quotes/offers/{id}/pdf",
				"value": "fms_quotes_get_fms_quotes_offers_id_pdf",
				"action": "GET /fms_quotes/offers/{id}/pdf",
				"description": "Requires features: fms_quotes.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/offers/{{ $parameter.id_string }}/pdf"
					}
				}
			},
			{
				"name": "POST /fms_quotes/offers/{id}/pdf",
				"value": "fms_quotes_post_fms_quotes_offers_id_pdf",
				"action": "POST /fms_quotes/offers/{id}/pdf",
				"description": "Requires features: fms_quotes.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_quotes/offers/{{ $parameter.id_string }}/pdf"
					}
				}
			},
			{
				"name": "GET /fms_quotes/offers/{id}",
				"value": "fms_quotes_get_fms_quotes_offers_id",
				"action": "GET /fms_quotes/offers/{id}",
				"description": "Requires features: fms_quotes.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_quotes/offers/{id}",
				"value": "fms_quotes_put_fms_quotes_offers_id",
				"action": "PUT /fms_quotes/offers/{id}",
				"description": "Requires features: fms_quotes.offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_quotes/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_quotes/offers/{id}",
				"value": "fms_quotes_delete_fms_quotes_offers_id",
				"action": "DELETE /fms_quotes/offers/{id}",
				"description": "Requires features: fms_quotes.offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_quotes/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "POST /fms_quotes/offers/{id}/send",
				"value": "fms_quotes_post_fms_quotes_offers_id_send",
				"action": "POST /fms_quotes/offers/{id}/send",
				"description": "Requires features: fms_quotes.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_quotes/offers/{{ $parameter.id_string }}/send"
					}
				}
			},
			{
				"name": "GET /fms_quotes/quote-lines/{id}",
				"value": "fms_quotes_get_fms_quotes_quote_lines_id",
				"action": "GET /fms_quotes/quote-lines/{id}",
				"description": "Requires features: fms_quotes.quotes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_quotes/quote-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_quotes/quote-lines/{id}",
				"value": "fms_quotes_put_fms_quotes_quote_lines_id",
				"action": "PUT /fms_quotes/quote-lines/{id}",
				"description": "Requires features: fms_quotes.quotes.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_quotes/quote-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_quotes/quote-lines/{id}",
				"value": "fms_quotes_delete_fms_quotes_quote_lines_id",
				"action": "DELETE /fms_quotes/quote-lines/{id}",
				"description": "Requires features: fms_quotes.quotes.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_quotes/quote-lines/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Quotes & Offers"
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
				"name": "GET /fms_locations/contractor-addresses",
				"value": "fms_locations_get_fms_locations_contractor_addresses",
				"action": "GET /fms_locations/contractor-addresses",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/contractor-addresses"
					}
				}
			},
			{
				"name": "POST /fms_locations/contractor-addresses",
				"value": "fms_locations_post_fms_locations_contractor_addresses",
				"action": "POST /fms_locations/contractor-addresses",
				"description": "Requires features: contractors.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_locations/contractor-addresses"
					}
				}
			},
			{
				"name": "POST /fms_locations/import",
				"value": "fms_locations_post_fms_locations_import",
				"action": "POST /fms_locations/import",
				"description": "Requires features: fms_locations.import",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_locations/import"
					}
				}
			},
			{
				"name": "GET /fms_locations/locations",
				"value": "fms_locations_get_fms_locations_locations",
				"action": "GET /fms_locations/locations",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/locations"
					}
				}
			},
			{
				"name": "GET /fms_locations/places/autocomplete",
				"value": "fms_locations_get_fms_locations_places_autocomplete",
				"action": "GET /fms_locations/places/autocomplete",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/places/autocomplete"
					}
				}
			},
			{
				"name": "GET /fms_locations/places/details",
				"value": "fms_locations_get_fms_locations_places_details",
				"action": "GET /fms_locations/places/details",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/places/details"
					}
				}
			},
			{
				"name": "GET /fms_locations/places",
				"value": "fms_locations_get_fms_locations_places",
				"action": "GET /fms_locations/places",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/places"
					}
				}
			},
			{
				"name": "GET /fms_locations/ports",
				"value": "fms_locations_get_fms_locations_ports",
				"action": "GET /fms_locations/ports",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/ports"
					}
				}
			},
			{
				"name": "POST /fms_locations/ports",
				"value": "fms_locations_post_fms_locations_ports",
				"action": "POST /fms_locations/ports",
				"description": "Requires features: fms_locations.ports.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_locations/ports"
					}
				}
			},
			{
				"name": "GET /fms_locations/table-config",
				"value": "fms_locations_get_fms_locations_table_config",
				"action": "GET /fms_locations/table-config",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/table-config"
					}
				}
			},
			{
				"name": "GET /fms_locations/terminals",
				"value": "fms_locations_get_fms_locations_terminals",
				"action": "GET /fms_locations/terminals",
				"description": "Requires features: fms_locations.terminals.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/terminals"
					}
				}
			},
			{
				"name": "POST /fms_locations/terminals",
				"value": "fms_locations_post_fms_locations_terminals",
				"action": "POST /fms_locations/terminals",
				"description": "Requires features: fms_locations.terminals.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_locations/terminals"
					}
				}
			},
			{
				"name": "POST /fms_locations/unified",
				"value": "fms_locations_post_fms_locations_unified",
				"action": "POST /fms_locations/unified",
				"description": "Requires features: fms_locations.ports.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_locations/unified"
					}
				}
			},
			{
				"name": "GET /fms_locations/locations/{id}",
				"value": "fms_locations_get_fms_locations_locations_id",
				"action": "GET /fms_locations/locations/{id}",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/locations/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_locations/ports/{id}",
				"value": "fms_locations_get_fms_locations_ports_id",
				"action": "GET /fms_locations/ports/{id}",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/ports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_locations/ports/{id}",
				"value": "fms_locations_put_fms_locations_ports_id",
				"action": "PUT /fms_locations/ports/{id}",
				"description": "Requires features: fms_locations.ports.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_locations/ports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_locations/ports/{id}",
				"value": "fms_locations_delete_fms_locations_ports_id",
				"action": "DELETE /fms_locations/ports/{id}",
				"description": "Requires features: fms_locations.ports.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_locations/ports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_locations/terminals/{id}",
				"value": "fms_locations_get_fms_locations_terminals_id",
				"action": "GET /fms_locations/terminals/{id}",
				"description": "Requires features: fms_locations.terminals.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/terminals/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_locations/terminals/{id}",
				"value": "fms_locations_put_fms_locations_terminals_id",
				"action": "PUT /fms_locations/terminals/{id}",
				"description": "Requires features: fms_locations.terminals.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_locations/terminals/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_locations/terminals/{id}",
				"value": "fms_locations_delete_fms_locations_terminals_id",
				"action": "DELETE /fms_locations/terminals/{id}",
				"description": "Requires features: fms_locations.terminals.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_locations/terminals/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_locations/unified/{id}",
				"value": "fms_locations_get_fms_locations_unified_id",
				"action": "GET /fms_locations/unified/{id}",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/unified/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_locations/unified/{id}",
				"value": "fms_locations_put_fms_locations_unified_id",
				"action": "PUT /fms_locations/unified/{id}",
				"description": "Requires features: fms_locations.ports.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_locations/unified/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_locations/unified/{id}",
				"value": "fms_locations_delete_fms_locations_unified_id",
				"action": "DELETE /fms_locations/unified/{id}",
				"description": "Requires features: fms_locations.ports.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_locations/unified/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
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
				"name": "GET /fms_products/carriers",
				"value": "fms_products_get_fms_products_carriers",
				"action": "GET /fms_products/carriers",
				"description": "Requires features: fms_products.carriers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/carriers"
					}
				}
			},
			{
				"name": "POST /fms_products/carriers",
				"value": "fms_products_post_fms_products_carriers",
				"action": "POST /fms_products/carriers",
				"description": "Requires features: fms_products.carriers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_products/carriers"
					}
				}
			},
			{
				"name": "PUT /fms_products/carriers",
				"value": "fms_products_put_fms_products_carriers",
				"action": "PUT /fms_products/carriers",
				"description": "Requires features: fms_products.carriers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_products/carriers"
					}
				}
			},
			{
				"name": "DELETE /fms_products/carriers",
				"value": "fms_products_delete_fms_products_carriers",
				"action": "DELETE /fms_products/carriers",
				"description": "Requires features: fms_products.carriers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_products/carriers"
					}
				}
			},
			{
				"name": "GET /fms_products/carriers/table-config",
				"value": "fms_products_get_fms_products_carriers_table_config",
				"action": "GET /fms_products/carriers/table-config",
				"description": "Requires features: fms_products.carriers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/carriers/table-config"
					}
				}
			},
			{
				"name": "POST /fms_products/charge-codes/import",
				"value": "fms_products_post_fms_products_charge_codes_import",
				"action": "POST /fms_products/charge-codes/import",
				"description": "Requires features: fms_products.charge_codes.import",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_products/charge-codes/import"
					}
				}
			},
			{
				"name": "GET /fms_products/charge-codes",
				"value": "fms_products_get_fms_products_charge_codes",
				"action": "GET /fms_products/charge-codes",
				"description": "Requires features: fms_products.charge_codes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/charge-codes"
					}
				}
			},
			{
				"name": "POST /fms_products/charge-codes",
				"value": "fms_products_post_fms_products_charge_codes",
				"action": "POST /fms_products/charge-codes",
				"description": "Requires features: fms_products.charge_codes.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_products/charge-codes"
					}
				}
			},
			{
				"name": "PUT /fms_products/charge-codes",
				"value": "fms_products_put_fms_products_charge_codes",
				"action": "PUT /fms_products/charge-codes",
				"description": "Requires features: fms_products.charge_codes.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_products/charge-codes"
					}
				}
			},
			{
				"name": "DELETE /fms_products/charge-codes",
				"value": "fms_products_delete_fms_products_charge_codes",
				"action": "DELETE /fms_products/charge-codes",
				"description": "Requires features: fms_products.charge_codes.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_products/charge-codes"
					}
				}
			},
			{
				"name": "GET /fms_products/products/flat",
				"value": "fms_products_get_fms_products_products_flat",
				"action": "GET /fms_products/products/flat",
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/products/flat"
					}
				}
			},
			{
				"name": "GET /fms_products/products/flat/table-config",
				"value": "fms_products_get_fms_products_products_flat_table_config",
				"action": "GET /fms_products/products/flat/table-config",
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/products/flat/table-config"
					}
				}
			},
			{
				"name": "GET /fms_products/products",
				"value": "fms_products_get_fms_products_products",
				"action": "GET /fms_products/products",
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/products"
					}
				}
			},
			{
				"name": "POST /fms_products/products",
				"value": "fms_products_post_fms_products_products",
				"action": "POST /fms_products/products",
				"description": "Requires features: fms_products.products.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_products/products"
					}
				}
			},
			{
				"name": "GET /fms_products/products/table-config",
				"value": "fms_products_get_fms_products_products_table_config",
				"action": "GET /fms_products/products/table-config",
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/products/table-config"
					}
				}
			},
			{
				"name": "GET /fms_products/search",
				"value": "fms_products_get_fms_products_search",
				"action": "GET /fms_products/search",
				"description": "Requires features: fms_quotes.quotes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/search"
					}
				}
			},
			{
				"name": "GET /fms_products/table-config",
				"value": "fms_products_get_fms_products_table_config",
				"action": "GET /fms_products/table-config",
				"description": "Requires features: fms_products.charge_codes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/table-config"
					}
				}
			},
			{
				"name": "GET /fms_products/carriers/{id}",
				"value": "fms_products_get_fms_products_carriers_id",
				"action": "GET /fms_products/carriers/{id}",
				"description": "Requires features: fms_products.carriers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/carriers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_products/carriers/{id}",
				"value": "fms_products_put_fms_products_carriers_id",
				"action": "PUT /fms_products/carriers/{id}",
				"description": "Requires features: fms_products.carriers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_products/carriers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_products/carriers/{id}",
				"value": "fms_products_delete_fms_products_carriers_id",
				"action": "DELETE /fms_products/carriers/{id}",
				"description": "Requires features: fms_products.carriers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_products/carriers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_products/charge-codes/{id}",
				"value": "fms_products_get_fms_products_charge_codes_id",
				"action": "GET /fms_products/charge-codes/{id}",
				"description": "Requires features: fms_products.charge_codes.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/charge-codes/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_products/charge-codes/{id}",
				"value": "fms_products_put_fms_products_charge_codes_id",
				"action": "PUT /fms_products/charge-codes/{id}",
				"description": "Requires features: fms_products.charge_codes.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_products/charge-codes/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_products/charge-codes/{id}",
				"value": "fms_products_delete_fms_products_charge_codes_id",
				"action": "DELETE /fms_products/charge-codes/{id}",
				"description": "Requires features: fms_products.charge_codes.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_products/charge-codes/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_products/products/{id}",
				"value": "fms_products_get_fms_products_products_id",
				"action": "GET /fms_products/products/{id}",
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/products/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_products/products/{id}",
				"value": "fms_products_put_fms_products_products_id",
				"action": "PUT /fms_products/products/{id}",
				"description": "Requires features: fms_products.products.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_products/products/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_products/products/{id}",
				"value": "fms_products_delete_fms_products_products_id",
				"action": "DELETE /fms_products/products/{id}",
				"description": "Requires features: fms_products.products.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_products/products/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_products/products/{id}/variants/{variantId}",
				"value": "fms_products_get_fms_products_products_id_variants_variantId",
				"action": "GET /fms_products/products/{id}/variants/{variantId}",
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/products/{{ $parameter.id_string }}/variants/{{ $parameter.variantId_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_products/products/{id}/variants/{variantId}",
				"value": "fms_products_put_fms_products_products_id_variants_variantId",
				"action": "PUT /fms_products/products/{id}/variants/{variantId}",
				"description": "Requires features: fms_products.products.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_products/products/{{ $parameter.id_string }}/variants/{{ $parameter.variantId_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_products/products/{id}/variants/{variantId}",
				"value": "fms_products_delete_fms_products_products_id_variants_variantId",
				"action": "DELETE /fms_products/products/{id}/variants/{variantId}",
				"description": "Requires features: fms_products.products.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_products/products/{{ $parameter.id_string }}/variants/{{ $parameter.variantId_string }}"
					}
				}
			},
			{
				"name": "GET /fms_products/products/{id}/variants",
				"value": "fms_products_get_fms_products_products_id_variants",
				"action": "GET /fms_products/products/{id}/variants",
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/products/{{ $parameter.id_string }}/variants"
					}
				}
			},
			{
				"name": "POST /fms_products/products/{id}/variants",
				"value": "fms_products_post_fms_products_products_id_variants",
				"action": "POST /fms_products/products/{id}/variants",
				"description": "Requires features: fms_products.products.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_products/products/{{ $parameter.id_string }}/variants"
					}
				}
			},
			{
				"name": "GET /fms_products/variants/{id}",
				"value": "fms_products_get_fms_products_variants_id",
				"action": "GET /fms_products/variants/{id}",
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/variants/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_products/variants/{id}",
				"value": "fms_products_put_fms_products_variants_id",
				"action": "PUT /fms_products/variants/{id}",
				"description": "Requires features: fms_products.products.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_products/variants/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_products/variants/{id}",
				"value": "fms_products_delete_fms_products_variants_id",
				"action": "DELETE /fms_products/variants/{id}",
				"description": "Requires features: fms_products.products.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_products/variants/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Products"
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
				"name": "GET /fms_documents/documents",
				"value": "fms_documents_get_fms_documents_documents",
				"action": "GET /fms_documents/documents",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents"
					}
				}
			},
			{
				"name": "POST /fms_documents/documents",
				"value": "fms_documents_post_fms_documents_documents",
				"action": "POST /fms_documents/documents",
				"description": "Requires features: fms_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/documents"
					}
				}
			},
			{
				"name": "GET /fms_documents/table-config",
				"value": "fms_documents_get_fms_documents_table_config",
				"action": "GET /fms_documents/table-config",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/table-config"
					}
				}
			},
			{
				"name": "POST /fms_documents/upload",
				"value": "fms_documents_post_fms_documents_upload",
				"action": "POST /fms_documents/upload",
				"description": "Requires features: fms_documents.upload",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/upload"
					}
				}
			},
			{
				"name": "GET /fms_documents/documents/{id}/download",
				"value": "fms_documents_get_fms_documents_documents_id_download",
				"action": "GET /fms_documents/documents/{id}/download",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/download"
					}
				}
			},
			{
				"name": "GET /fms_documents/documents/{id}/extract",
				"value": "fms_documents_get_fms_documents_documents_id_extract",
				"action": "GET /fms_documents/documents/{id}/extract",
				"description": "GET /fms_documents/documents/{id}/extract",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/extract"
					}
				}
			},
			{
				"name": "POST /fms_documents/documents/{id}/extract",
				"value": "fms_documents_post_fms_documents_documents_id_extract",
				"action": "POST /fms_documents/documents/{id}/extract",
				"description": "Requires features: fms_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/extract"
					}
				}
			},
			{
				"name": "GET /fms_documents/documents/{id}",
				"value": "fms_documents_get_fms_documents_documents_id",
				"action": "GET /fms_documents/documents/{id}",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_documents/documents/{id}",
				"value": "fms_documents_put_fms_documents_documents_id",
				"action": "PUT /fms_documents/documents/{id}",
				"description": "Requires features: fms_documents.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_documents/documents/{id}",
				"value": "fms_documents_delete_fms_documents_documents_id",
				"action": "DELETE /fms_documents/documents/{id}",
				"description": "Requires features: fms_documents.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
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
				"name": "GET /fms_projects/projects",
				"value": "fms_projects_get_fms_projects_projects",
				"action": "GET /fms_projects/projects",
				"description": "Requires features: fms_projects.projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects",
				"value": "fms_projects_post_fms_projects_projects",
				"action": "POST /fms_projects/projects",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects",
				"value": "fms_projects_put_fms_projects_projects",
				"action": "PUT /fms_projects/projects",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects",
				"value": "fms_projects_delete_fms_projects_projects",
				"action": "DELETE /fms_projects/projects",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/air-units",
				"value": "fms_projects_get_fms_projects_projects_id_air_units",
				"action": "GET /fms_projects/projects/{id}/air-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/air-units"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/air-units",
				"value": "fms_projects_post_fms_projects_projects_id_air_units",
				"action": "POST /fms_projects/projects/{id}/air-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/air-units"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/air-units",
				"value": "fms_projects_put_fms_projects_projects_id_air_units",
				"action": "PUT /fms_projects/projects/{id}/air-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/air-units"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/air-units",
				"value": "fms_projects_delete_fms_projects_projects_id_air_units",
				"action": "DELETE /fms_projects/projects/{id}/air-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/air-units"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/cargo",
				"value": "fms_projects_get_fms_projects_projects_id_cargo",
				"action": "GET /fms_projects/projects/{id}/cargo",
				"description": "Requires features: fms_projects.cargo.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/cargo",
				"value": "fms_projects_post_fms_projects_projects_id_cargo",
				"action": "POST /fms_projects/projects/{id}/cargo",
				"description": "Requires features: fms_projects.cargo.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/cargo",
				"value": "fms_projects_put_fms_projects_projects_id_cargo",
				"action": "PUT /fms_projects/projects/{id}/cargo",
				"description": "Requires features: fms_projects.cargo.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/cargo",
				"value": "fms_projects_delete_fms_projects_projects_id_cargo",
				"action": "DELETE /fms_projects/projects/{id}/cargo",
				"description": "Requires features: fms_projects.cargo.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/containers",
				"value": "fms_projects_get_fms_projects_projects_id_containers",
				"action": "GET /fms_projects/projects/{id}/containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/containers"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/containers",
				"value": "fms_projects_post_fms_projects_projects_id_containers",
				"action": "POST /fms_projects/projects/{id}/containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/containers"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/containers",
				"value": "fms_projects_put_fms_projects_projects_id_containers",
				"action": "PUT /fms_projects/projects/{id}/containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/containers"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/containers",
				"value": "fms_projects_delete_fms_projects_projects_id_containers",
				"action": "DELETE /fms_projects/projects/{id}/containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/containers"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/documents",
				"value": "fms_projects_get_fms_projects_projects_id_documents",
				"action": "GET /fms_projects/projects/{id}/documents",
				"description": "Requires features: fms_projects.projects.view, fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/documents"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/documents",
				"value": "fms_projects_post_fms_projects_projects_id_documents",
				"action": "POST /fms_projects/projects/{id}/documents",
				"description": "Requires features: fms_projects.projects.manage, fms_documents.upload",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/documents"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/invoices",
				"value": "fms_projects_get_fms_projects_projects_id_invoices",
				"action": "GET /fms_projects/projects/{id}/invoices",
				"description": "Requires features: fms_projects.projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/invoices"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/invoices",
				"value": "fms_projects_put_fms_projects_projects_id_invoices",
				"action": "PUT /fms_projects/projects/{id}/invoices",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/invoices"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/legs",
				"value": "fms_projects_get_fms_projects_projects_id_legs",
				"action": "GET /fms_projects/projects/{id}/legs",
				"description": "Requires features: fms_projects.legs.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/legs"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/legs",
				"value": "fms_projects_post_fms_projects_projects_id_legs",
				"action": "POST /fms_projects/projects/{id}/legs",
				"description": "Requires features: fms_projects.legs.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/legs"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/legs",
				"value": "fms_projects_put_fms_projects_projects_id_legs",
				"action": "PUT /fms_projects/projects/{id}/legs",
				"description": "Requires features: fms_projects.legs.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/legs"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/legs",
				"value": "fms_projects_delete_fms_projects_projects_id_legs",
				"action": "DELETE /fms_projects/projects/{id}/legs",
				"description": "Requires features: fms_projects.legs.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/legs"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/lines/{lineId}",
				"value": "fms_projects_get_fms_projects_projects_id_lines_lineId",
				"action": "GET /fms_projects/projects/{id}/lines/{lineId}",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines/{{ $parameter.lineId_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/lines/{lineId}",
				"value": "fms_projects_put_fms_projects_projects_id_lines_lineId",
				"action": "PUT /fms_projects/projects/{id}/lines/{lineId}",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines/{{ $parameter.lineId_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/lines/{lineId}",
				"value": "fms_projects_delete_fms_projects_projects_id_lines_lineId",
				"action": "DELETE /fms_projects/projects/{id}/lines/{lineId}",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines/{{ $parameter.lineId_string }}"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/lines",
				"value": "fms_projects_get_fms_projects_projects_id_lines",
				"action": "GET /fms_projects/projects/{id}/lines",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/lines",
				"value": "fms_projects_post_fms_projects_projects_id_lines",
				"action": "POST /fms_projects/projects/{id}/lines",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/lines",
				"value": "fms_projects_put_fms_projects_projects_id_lines",
				"action": "PUT /fms_projects/projects/{id}/lines",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/lines",
				"value": "fms_projects_delete_fms_projects_projects_id_lines",
				"action": "DELETE /fms_projects/projects/{id}/lines",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/link-offer",
				"value": "fms_projects_post_fms_projects_projects_id_link_offer",
				"action": "POST /fms_projects/projects/{id}/link-offer",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/link-offer"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/notes",
				"value": "fms_projects_get_fms_projects_projects_id_notes",
				"action": "GET /fms_projects/projects/{id}/notes",
				"description": "Requires features: fms_projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/notes"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/notes",
				"value": "fms_projects_post_fms_projects_projects_id_notes",
				"action": "POST /fms_projects/projects/{id}/notes",
				"description": "Requires features: fms_projects.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/notes"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/notes",
				"value": "fms_projects_put_fms_projects_projects_id_notes",
				"action": "PUT /fms_projects/projects/{id}/notes",
				"description": "Requires features: fms_projects.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/notes"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/notes",
				"value": "fms_projects_delete_fms_projects_projects_id_notes",
				"action": "DELETE /fms_projects/projects/{id}/notes",
				"description": "Requires features: fms_projects.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/notes"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/road-units",
				"value": "fms_projects_get_fms_projects_projects_id_road_units",
				"action": "GET /fms_projects/projects/{id}/road-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/road-units"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/road-units",
				"value": "fms_projects_post_fms_projects_projects_id_road_units",
				"action": "POST /fms_projects/projects/{id}/road-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/road-units"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/road-units",
				"value": "fms_projects_put_fms_projects_projects_id_road_units",
				"action": "PUT /fms_projects/projects/{id}/road-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/road-units"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/road-units",
				"value": "fms_projects_delete_fms_projects_projects_id_road_units",
				"action": "DELETE /fms_projects/projects/{id}/road-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/road-units"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}",
				"value": "fms_projects_get_fms_projects_projects_id",
				"action": "GET /fms_projects/projects/{id}",
				"description": "Requires features: fms_projects.projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}",
				"value": "fms_projects_put_fms_projects_projects_id",
				"action": "PUT /fms_projects/projects/{id}",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}",
				"value": "fms_projects_delete_fms_projects_projects_id",
				"action": "DELETE /fms_projects/projects/{id}",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/sea-containers/{containerId}",
				"value": "fms_projects_get_fms_projects_projects_id_sea_containers_containerId",
				"action": "GET /fms_projects/projects/{id}/sea-containers/{containerId}",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers/{{ $parameter.containerId_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/sea-containers/{containerId}",
				"value": "fms_projects_put_fms_projects_projects_id_sea_containers_containerId",
				"action": "PUT /fms_projects/projects/{id}/sea-containers/{containerId}",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers/{{ $parameter.containerId_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/sea-containers/{containerId}",
				"value": "fms_projects_delete_fms_projects_projects_id_sea_containers_containerId",
				"action": "DELETE /fms_projects/projects/{id}/sea-containers/{containerId}",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers/{{ $parameter.containerId_string }}"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/sea-containers",
				"value": "fms_projects_get_fms_projects_projects_id_sea_containers",
				"action": "GET /fms_projects/projects/{id}/sea-containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/sea-containers",
				"value": "fms_projects_post_fms_projects_projects_id_sea_containers",
				"action": "POST /fms_projects/projects/{id}/sea-containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/sea-containers",
				"value": "fms_projects_put_fms_projects_projects_id_sea_containers",
				"action": "PUT /fms_projects/projects/{id}/sea-containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/sea-containers",
				"value": "fms_projects_delete_fms_projects_projects_id_sea_containers",
				"action": "DELETE /fms_projects/projects/{id}/sea-containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
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
				"name": "POST /fms_financials/invoices/extract",
				"value": "fms_financials_post_fms_financials_invoices_extract",
				"action": "POST /fms_financials/invoices/extract",
				"description": "Requires features: fms_financials.invoices.upload",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_financials/invoices/extract"
					}
				}
			},
			{
				"name": "GET /fms_financials/invoices",
				"value": "fms_financials_get_fms_financials_invoices",
				"action": "GET /fms_financials/invoices",
				"description": "Requires features: fms_financials.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_financials/invoices"
					}
				}
			},
			{
				"name": "POST /fms_financials/invoices",
				"value": "fms_financials_post_fms_financials_invoices",
				"action": "POST /fms_financials/invoices",
				"description": "Requires features: fms_financials.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_financials/invoices"
					}
				}
			},
			{
				"name": "POST /fms_financials/invoices/upload",
				"value": "fms_financials_post_fms_financials_invoices_upload",
				"action": "POST /fms_financials/invoices/upload",
				"description": "Requires features: fms_financials.invoices.upload",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_financials/invoices/upload"
					}
				}
			},
			{
				"name": "POST /fms_financials/invoices/{id}/extract",
				"value": "fms_financials_post_fms_financials_invoices_id_extract",
				"action": "POST /fms_financials/invoices/{id}/extract",
				"description": "Requires features: fms_financials.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}/extract"
					}
				}
			},
			{
				"name": "GET /fms_financials/invoices/{id}/line-items/{lineItemId}",
				"value": "fms_financials_get_fms_financials_invoices_id_line_items_lineItemId",
				"action": "GET /fms_financials/invoices/{id}/line-items/{lineItemId}",
				"description": "Requires features: fms_financials.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}/line-items/{{ $parameter.lineItemId_string }}"
					}
				}
			},
			{
				"name": "PATCH /fms_financials/invoices/{id}/line-items/{lineItemId}",
				"value": "fms_financials_patch_fms_financials_invoices_id_line_items_lineItemId",
				"action": "PATCH /fms_financials/invoices/{id}/line-items/{lineItemId}",
				"description": "Requires features: fms_financials.invoices.manage",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}/line-items/{{ $parameter.lineItemId_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_financials/invoices/{id}/line-items/{lineItemId}",
				"value": "fms_financials_delete_fms_financials_invoices_id_line_items_lineItemId",
				"action": "DELETE /fms_financials/invoices/{id}/line-items/{lineItemId}",
				"description": "Requires features: fms_financials.invoices.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}/line-items/{{ $parameter.lineItemId_string }}"
					}
				}
			},
			{
				"name": "POST /fms_financials/invoices/{id}/line-items",
				"value": "fms_financials_post_fms_financials_invoices_id_line_items",
				"action": "POST /fms_financials/invoices/{id}/line-items",
				"description": "Requires features: fms_financials.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}/line-items"
					}
				}
			},
			{
				"name": "GET /fms_financials/invoices/{id}/match-charges",
				"value": "fms_financials_get_fms_financials_invoices_id_match_charges",
				"action": "GET /fms_financials/invoices/{id}/match-charges",
				"description": "Requires features: fms_financials.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}/match-charges"
					}
				}
			},
			{
				"name": "POST /fms_financials/invoices/{id}/match-charges",
				"value": "fms_financials_post_fms_financials_invoices_id_match_charges",
				"action": "POST /fms_financials/invoices/{id}/match-charges",
				"description": "Requires features: fms_financials.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}/match-charges"
					}
				}
			},
			{
				"name": "GET /fms_financials/invoices/{id}/pages/{pageNum}/image",
				"value": "fms_financials_get_fms_financials_invoices_id_pages_pageNum_image",
				"action": "GET /fms_financials/invoices/{id}/pages/{pageNum}/image",
				"description": "Requires features: fms_financials.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}/pages/{{ $parameter.pageNum_string }}/image"
					}
				}
			},
			{
				"name": "GET /fms_financials/invoices/{id}/pages",
				"value": "fms_financials_get_fms_financials_invoices_id_pages",
				"action": "GET /fms_financials/invoices/{id}/pages",
				"description": "Requires features: fms_financials.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}/pages"
					}
				}
			},
			{
				"name": "GET /fms_financials/invoices/{id}",
				"value": "fms_financials_get_fms_financials_invoices_id",
				"action": "GET /fms_financials/invoices/{id}",
				"description": "Requires features: fms_financials.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "POST /fms_financials/invoices/{id}",
				"value": "fms_financials_post_fms_financials_invoices_id",
				"action": "POST /fms_financials/invoices/{id}",
				"description": "Requires features: fms_financials.invoices.approve",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_financials/invoices/{id}",
				"value": "fms_financials_put_fms_financials_invoices_id",
				"action": "PUT /fms_financials/invoices/{id}",
				"description": "Requires features: fms_financials.invoices.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_financials/invoices/{id}",
				"value": "fms_financials_delete_fms_financials_invoices_id",
				"action": "DELETE /fms_financials/invoices/{id}",
				"description": "Requires features: fms_financials.invoices.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_financials/invoices/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Financials"
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
				"name": "GET /fms_teams/members",
				"value": "fms_teams_get_fms_teams_members",
				"action": "GET /fms_teams/members",
				"description": "Requires features: fms_teams.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_teams/members"
					}
				}
			},
			{
				"name": "GET /fms_teams/table-config",
				"value": "fms_teams_get_fms_teams_table_config",
				"action": "GET /fms_teams/table-config",
				"description": "Requires features: fms_teams.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_teams/table-config"
					}
				}
			},
			{
				"name": "GET /fms_teams/team-contractors",
				"value": "fms_teams_get_fms_teams_team_contractors",
				"action": "GET /fms_teams/team-contractors",
				"description": "Requires features: fms_teams.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_teams/team-contractors"
					}
				}
			},
			{
				"name": "POST /fms_teams/team-contractors",
				"value": "fms_teams_post_fms_teams_team_contractors",
				"action": "POST /fms_teams/team-contractors",
				"description": "Requires features: fms_teams.assign_contractors",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_teams/team-contractors"
					}
				}
			},
			{
				"name": "DELETE /fms_teams/team-contractors",
				"value": "fms_teams_delete_fms_teams_team_contractors",
				"action": "DELETE /fms_teams/team-contractors",
				"description": "Requires features: fms_teams.assign_contractors",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_teams/team-contractors"
					}
				}
			},
			{
				"name": "GET /fms_teams/team-members",
				"value": "fms_teams_get_fms_teams_team_members",
				"action": "GET /fms_teams/team-members",
				"description": "Requires features: fms_teams.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_teams/team-members"
					}
				}
			},
			{
				"name": "GET /fms_teams/teams",
				"value": "fms_teams_get_fms_teams_teams",
				"action": "GET /fms_teams/teams",
				"description": "Requires features: fms_teams.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_teams/teams"
					}
				}
			},
			{
				"name": "POST /fms_teams/teams",
				"value": "fms_teams_post_fms_teams_teams",
				"action": "POST /fms_teams/teams",
				"description": "Requires features: fms_teams.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_teams/teams"
					}
				}
			},
			{
				"name": "GET /fms_teams/user-contractors",
				"value": "fms_teams_get_fms_teams_user_contractors",
				"action": "GET /fms_teams/user-contractors",
				"description": "Requires features: fms_teams.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_teams/user-contractors"
					}
				}
			},
			{
				"name": "POST /fms_teams/user-contractors",
				"value": "fms_teams_post_fms_teams_user_contractors",
				"action": "POST /fms_teams/user-contractors",
				"description": "Requires features: fms_teams.assign_contractors",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_teams/user-contractors"
					}
				}
			},
			{
				"name": "DELETE /fms_teams/user-contractors",
				"value": "fms_teams_delete_fms_teams_user_contractors",
				"action": "DELETE /fms_teams/user-contractors",
				"description": "Requires features: fms_teams.assign_contractors",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_teams/user-contractors"
					}
				}
			},
			{
				"name": "PUT /fms_teams/members/{userId}",
				"value": "fms_teams_put_fms_teams_members_userId",
				"action": "PUT /fms_teams/members/{userId}",
				"description": "Requires features: fms_teams.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_teams/members/{{ $parameter.userId_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Teams"
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
				"name": "GET /transports",
				"value": "transports_get_transports",
				"action": "GET /transports",
				"description": "Requires features: transports.transports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/transports"
					}
				}
			},
			{
				"name": "GET /transports/table-config",
				"value": "transports_get_transports_table_config",
				"action": "GET /transports/table-config",
				"description": "Requires features: transports.transports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/transports/table-config"
					}
				}
			},
			{
				"name": "GET /transports/{id}",
				"value": "transports_get_transports_id",
				"action": "GET /transports/{id}",
				"description": "Requires features: transports.transports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/transports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /transports/{id}",
				"value": "transports_put_transports_id",
				"action": "PUT /transports/{id}",
				"description": "Requires features: transports.transports.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/transports/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Transports"
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
				"name": "Get email settings",
				"value": "email_templates_get_email_templates_settings",
				"action": "Get email settings",
				"description": "Requires features: email_templates.settings.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/email_templates/settings"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"accentColor",
						"companyLogoUrl",
						"companyName",
						"contactEmail",
						"contactPhone",
						"footerDisclaimer",
						"footerText",
						"fromEmail",
						"fromName",
						"primaryColor"
					]
				}
			},
			{
				"name": "Update email settings",
				"value": "email_templates_put_email_templates_settings",
				"action": "Update email settings",
				"description": "Requires features: email_templates.settings.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/email_templates/settings"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"accentColor",
						"companyLogoUrl",
						"companyName",
						"contactEmail",
						"contactPhone",
						"footerDisclaimer",
						"footerText",
						"fromEmail",
						"fromName",
						"primaryColor"
					]
				}
			},
			{
				"name": "Get email template(s)",
				"value": "email_templates_get_email_templates_templates",
				"action": "Get email template(s)",
				"description": "Requires features: email_templates.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/email_templates/templates"
					}
				}
			},
			{
				"name": "Update email template",
				"value": "email_templates_put_email_templates_templates",
				"action": "Update email template",
				"description": "Requires features: email_templates.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/email_templates/templates"
					}
				}
			},
			{
				"name": "Delete email template",
				"value": "email_templates_delete_email_templates_templates",
				"action": "Delete email template",
				"description": "Requires features: email_templates.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/email_templates/templates"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Email Templates"
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
				"name": "List example assignees",
				"value": "example_get_example_assignees",
				"action": "List example assignees",
				"description": "Returns mock assignee options filtered by the optional `q` query parameter.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/example/assignees"
					}
				}
			},
			{
				"name": "Resolve organization labels",
				"value": "example_get_example_organizations",
				"action": "Resolve organization labels",
				"description": "Fetches organization names for the provided identifiers within the current tenant scope.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/example/organizations"
					}
				}
			},
			{
				"name": "List example tags",
				"value": "example_get_example_tags",
				"action": "List example tags",
				"description": "Returns tag options collected from custom field values and dictionary configuration.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/example/tags"
					}
				}
			},
			{
				"name": "List todos",
				"value": "example_get_example_todos",
				"action": "List todos",
				"description": "Returns a paginated collection of todos in the current tenant scope.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/example/todos"
					}
				}
			},
			{
				"name": "Create todo",
				"value": "example_post_example_todos",
				"action": "Create todo",
				"description": "Creates a todo record. Supports additional custom field keys prefixed with `cf_`.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/example/todos"
					}
				}
			},
			{
				"name": "Update todo",
				"value": "example_put_example_todos",
				"action": "Update todo",
				"description": "Updates an existing todo record by id. Accepts base fields and optional `cf_` custom fields.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/example/todos"
					}
				}
			},
			{
				"name": "Delete todo",
				"value": "example_delete_example_todos",
				"action": "Delete todo",
				"description": "Deletes a todo by id. Provide the identifier in the request body.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/example/todos"
					}
				}
			},
			{
				"name": "Fetch demo blog payload",
				"value": "example_get_example_blog_id",
				"action": "Fetch demo blog payload",
				"description": "Returns a placeholder blog record containing the provided identifier.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/example/blog/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Create demo blog payload",
				"value": "example_post_example_blog_id",
				"action": "Create demo blog payload",
				"description": "Echoes the provided identifier as a placeholder write endpoint.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/example/blog/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Example"
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
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
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
					"roles": "={{ JSON.parse($value.roles_json) }}"
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
				"name": "organizationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Actor User Id",
				"name": "actorUserId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Resource Kind",
				"name": "resourceKind_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Access Type",
				"name": "accessType_string"
			},
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
				"displayName": "Limit",
				"name": "limit_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Before",
				"name": "before_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "After",
				"name": "after_string"
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
				"name": "organizationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Actor User Id",
				"name": "actorUserId_string"
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
				"name": "undoableOnly_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Limit",
				"name": "limit_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Before",
				"name": "before_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "After",
				"name": "after_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"organizationId": "={{ $value.organizationId_string }}",
					"actorUserId": "={{ $value.actorUserId_string }}",
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
				"name": "redirect_string"
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
					"Authentication & Accounts"
				],
				"operation": [
					"auth_post_auth_roles"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"email": "={{ $value.email_string }}",
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"name": "={{ $value.name_string }}"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"isSuperAdmin": "={{ $value.isSuperAdmin_boolean }}",
					"features": "={{ JSON.parse($value.features_json) }}"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_delete_business_rules_rules"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_delete_business_rules_sets"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_delete_business_rules_sets_id_members"
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
					"memberId": "={{ $value }}"
				}
			}
		},
		"displayName": "Member Id",
		"name": "memberId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_delete_business_rules_sets_id_members"
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
				"displayName": "Id",
				"name": "id_number"
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
				"displayName": "Rule Id",
				"name": "ruleId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Type",
				"name": "entityType_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "SUCCESS",
						"value": "SUCCESS"
					},
					{
						"name": "FAILURE",
						"value": "FAILURE"
					},
					{
						"name": "ERROR",
						"value": "ERROR"
					}
				],
				"displayName": "Execution Result",
				"name": "executionResult_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Executed By",
				"name": "executedBy_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Executed At From",
				"name": "executedAtFrom_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Executed At To",
				"name": "executedAtTo_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value.id_number }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"ruleId": "={{ $value.ruleId_string }}",
					"entityId": "={{ $value.entityId_string }}",
					"entityType": "={{ $value.entityType_string }}",
					"executionResult": "={{ $value.executionResult_options }}",
					"executedBy": "={{ $value.executedBy_string }}",
					"executedAtFrom": "={{ $value.executedAtFrom_string }}",
					"executedAtTo": "={{ $value.executedAtTo_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_get_business_rules_logs"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_get_business_rules_logs_id"
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
				"displayName": "Rule Id",
				"name": "ruleId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "GUARD",
						"value": "GUARD"
					},
					{
						"name": "VALIDATION",
						"value": "VALIDATION"
					},
					{
						"name": "CALCULATION",
						"value": "CALCULATION"
					},
					{
						"name": "ACTION",
						"value": "ACTION"
					},
					{
						"name": "ASSIGNMENT",
						"value": "ASSIGNMENT"
					}
				],
				"displayName": "Rule Type",
				"name": "ruleType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Type",
				"name": "entityType_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Event Type",
				"name": "eventType_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Enabled",
				"name": "enabled_boolean"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Rule Category",
				"name": "ruleCategory_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value.id_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"ruleId": "={{ $value.ruleId_string }}",
					"ruleType": "={{ $value.ruleType_options }}",
					"entityType": "={{ $value.entityType_string }}",
					"eventType": "={{ $value.eventType_string }}",
					"enabled": "={{ $value.enabled_boolean }}",
					"ruleCategory": "={{ $value.ruleCategory_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_get_business_rules_rules"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_get_business_rules_rules_id"
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
				"displayName": "Set Id",
				"name": "setId_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Enabled",
				"name": "enabled_boolean"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value.id_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"setId": "={{ $value.setId_string }}",
					"enabled": "={{ $value.enabled_boolean }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_get_business_rules_sets"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_get_business_rules_sets_id"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_execute"
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
				"type": "string",
				"default": "",
				"displayName": "Event Type",
				"name": "eventType_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Dry Run",
				"name": "dryRun_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"entityId": "={{ $value.entityId_string }}",
					"eventType": "={{ $value.eventType_string }}",
					"dryRun": "={{ $value.dryRun_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_execute"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Rule Id",
		"name": "ruleId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_execute_ruleId"
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
				"displayName": "Dry Run",
				"name": "dryRun_boolean"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Type",
				"name": "entityType_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Event Type",
				"name": "eventType_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"dryRun": "={{ $value.dryRun_boolean }}",
					"entityType": "={{ $value.entityType_string }}",
					"entityId": "={{ $value.entityId_string }}",
					"eventType": "={{ $value.eventType_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_execute_ruleId"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_rules"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_rules"
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
				"property": "ruleId"
			}
		},
		"displayName": "Rule Id",
		"name": "ruleId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_rules"
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
				"property": "ruleName"
			}
		},
		"displayName": "Rule Name",
		"name": "ruleName_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_rules"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "GUARD",
				"value": "GUARD"
			},
			{
				"name": "VALIDATION",
				"value": "VALIDATION"
			},
			{
				"name": "CALCULATION",
				"value": "CALCULATION"
			},
			{
				"name": "ACTION",
				"value": "ACTION"
			},
			{
				"name": "ASSIGNMENT",
				"value": "ASSIGNMENT"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "ruleType"
			}
		},
		"displayName": "Rule Type",
		"name": "ruleType_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_rules"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_rules"
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
				"displayName": "Enabled",
				"name": "enabled_boolean"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Priority",
				"name": "priority_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Version",
				"name": "version_number"
			}
		],
		"routing": {
			"request": {
				"body": {
					"enabled": "={{ $value.enabled_boolean }}",
					"priority": "={{ $value.priority_number }}",
					"version": "={{ $value.version_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_rules"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_sets"
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
				"property": "setId"
			}
		},
		"displayName": "Set Id",
		"name": "setId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_sets"
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
				"property": "setName"
			}
		},
		"displayName": "Set Name",
		"name": "setName_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_sets"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_sets"
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
				"displayName": "Enabled",
				"name": "enabled_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"enabled": "={{ $value.enabled_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_sets"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_sets_id_members"
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
				"property": "ruleId"
			}
		},
		"displayName": "Rule Id",
		"name": "ruleId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_sets_id_members"
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
				"displayName": "Sequence",
				"name": "sequence_number"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Enabled",
				"name": "enabled_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"sequence": "={{ $value.sequence_number }}",
					"enabled": "={{ $value.enabled_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_post_business_rules_sets_id_members"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_put_business_rules_rules"
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
				"displayName": "Rule Id",
				"name": "ruleId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Rule Name",
				"name": "ruleName_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "GUARD",
						"value": "GUARD"
					},
					{
						"name": "VALIDATION",
						"value": "VALIDATION"
					},
					{
						"name": "CALCULATION",
						"value": "CALCULATION"
					},
					{
						"name": "ACTION",
						"value": "ACTION"
					},
					{
						"name": "ASSIGNMENT",
						"value": "ASSIGNMENT"
					}
				],
				"displayName": "Rule Type",
				"name": "ruleType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Type",
				"name": "entityType_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Enabled",
				"name": "enabled_boolean"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Priority",
				"name": "priority_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Version",
				"name": "version_number"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"ruleId": "={{ $value.ruleId_string }}",
					"ruleName": "={{ $value.ruleName_string }}",
					"ruleType": "={{ $value.ruleType_options }}",
					"entityType": "={{ $value.entityType_string }}",
					"enabled": "={{ $value.enabled_boolean }}",
					"priority": "={{ $value.priority_number }}",
					"version": "={{ $value.version_number }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_put_business_rules_rules"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_put_business_rules_sets"
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
				"displayName": "Set Id",
				"name": "setId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Set Name",
				"name": "setName_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Enabled",
				"name": "enabled_boolean"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"setId": "={{ $value.setId_string }}",
					"setName": "={{ $value.setName_string }}",
					"enabled": "={{ $value.enabled_boolean }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_put_business_rules_sets"
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
					"Business Rules"
				],
				"operation": [
					"business_rules_put_business_rules_sets_id_members"
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
				"property": "memberId"
			}
		},
		"displayName": "Member Id",
		"name": "memberId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_put_business_rules_sets_id_members"
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
				"displayName": "Sequence",
				"name": "sequence_number"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Enabled",
				"name": "enabled_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"sequence": "={{ $value.sequence_number }}",
					"enabled": "={{ $value.enabled_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Business Rules"
				],
				"operation": [
					"business_rules_put_business_rules_sets_id_members"
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
					"Catalog"
				],
				"operation": [
					"catalog_delete_catalog_categories"
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
					"Catalog"
				],
				"operation": [
					"catalog_delete_catalog_offers"
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
					"Catalog"
				],
				"operation": [
					"catalog_delete_catalog_option_schemas"
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
					"Catalog"
				],
				"operation": [
					"catalog_delete_catalog_price_kinds"
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
					"Catalog"
				],
				"operation": [
					"catalog_delete_catalog_prices"
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
					"Catalog"
				],
				"operation": [
					"catalog_delete_catalog_products"
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
					"Catalog"
				],
				"operation": [
					"catalog_delete_catalog_variants"
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
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ids",
				"name": "ids_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"view": "={{ $value.view_options }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"status": "={{ $value.status_options }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_get_catalog_categories"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Key",
		"name": "key_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_get_catalog_dictionaries_key"
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
				"displayName": "Product Id",
				"name": "productId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Id",
				"name": "channelId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Ids",
				"name": "channelIds_string"
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
				"type": "string",
				"default": "",
				"displayName": "Is Active",
				"name": "isActive_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "With Deleted",
				"name": "withDeleted_boolean"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"productId": "={{ $value.productId_string }}",
					"channelId": "={{ $value.channelId_string }}",
					"channelIds": "={{ $value.channelIds_string }}",
					"id": "={{ $value.id_string }}",
					"search": "={{ $value.search_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_get_catalog_offers"
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
				"type": "string",
				"default": "",
				"displayName": "Is Active",
				"name": "isActive_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "With Deleted",
				"name": "withDeleted_boolean"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"id": "={{ $value.id_string }}",
					"search": "={{ $value.search_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_get_catalog_option_schemas"
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
				"type": "string",
				"default": "",
				"displayName": "Is Promotion",
				"name": "isPromotion_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Is Active",
				"name": "isActive_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"isPromotion": "={{ $value.isPromotion_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_get_catalog_price_kinds"
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
				"displayName": "Product Id",
				"name": "productId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Variant Id",
				"name": "variantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Offer Id",
				"name": "offerId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Id",
				"name": "channelId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Price Kind Id",
				"name": "priceKindId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Kind",
				"name": "kind_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "User Id",
				"name": "userId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "User Group Id",
				"name": "userGroupId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Id",
				"name": "customerId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Group Id",
				"name": "customerGroupId_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "With Deleted",
				"name": "withDeleted_boolean"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"productId": "={{ $value.productId_string }}",
					"variantId": "={{ $value.variantId_string }}",
					"offerId": "={{ $value.offerId_string }}",
					"channelId": "={{ $value.channelId_string }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"priceKindId": "={{ $value.priceKindId_string }}",
					"kind": "={{ $value.kind_string }}",
					"userId": "={{ $value.userId_string }}",
					"userGroupId": "={{ $value.userGroupId_string }}",
					"customerId": "={{ $value.customerId_string }}",
					"customerGroupId": "={{ $value.customerGroupId_string }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_get_catalog_prices"
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
					"productId": "={{ $value }}"
				}
			}
		},
		"displayName": "Product Id",
		"name": "productId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_get_catalog_product_media"
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
				"type": "string",
				"default": "",
				"displayName": "Status",
				"name": "status_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Is Active",
				"name": "isActive_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Configurable",
				"name": "configurable_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "simple",
						"value": "simple"
					},
					{
						"name": "configurable",
						"value": "configurable"
					},
					{
						"name": "virtual",
						"value": "virtual"
					},
					{
						"name": "downloadable",
						"value": "downloadable"
					},
					{
						"name": "bundle",
						"value": "bundle"
					},
					{
						"name": "grouped",
						"value": "grouped"
					}
				],
				"displayName": "Product Type",
				"name": "productType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Ids",
				"name": "channelIds_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Id",
				"name": "channelId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Category Ids",
				"name": "categoryIds_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tag Ids",
				"name": "tagIds_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Offer Id",
				"name": "offerId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "User Id",
				"name": "userId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "User Group Id",
				"name": "userGroupId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Id",
				"name": "customerId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Group Id",
				"name": "customerGroupId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Quantity",
				"name": "quantity_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Price Date",
				"name": "priceDate_string"
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
				"type": "string",
				"default": "",
				"displayName": "Custom Fieldset",
				"name": "customFieldset_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"id": "={{ $value.id_string }}",
					"search": "={{ $value.search_string }}",
					"status": "={{ $value.status_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"configurable": "={{ $value.configurable_string }}",
					"productType": "={{ $value.productType_options }}",
					"channelIds": "={{ $value.channelIds_string }}",
					"channelId": "={{ $value.channelId_string }}",
					"categoryIds": "={{ $value.categoryIds_string }}",
					"tagIds": "={{ $value.tagIds_string }}",
					"offerId": "={{ $value.offerId_string }}",
					"userId": "={{ $value.userId_string }}",
					"userGroupId": "={{ $value.userGroupId_string }}",
					"customerId": "={{ $value.customerId_string }}",
					"customerGroupId": "={{ $value.customerGroupId_string }}",
					"quantity": "={{ $value.quantity_number }}",
					"priceDate": "={{ $value.priceDate_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}",
					"customFieldset": "={{ $value.customFieldset_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_get_catalog_products"
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
				"displayName": "Search",
				"name": "search_string"
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
					"search": "={{ $value.search_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_get_catalog_tags"
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
				"type": "string",
				"default": "",
				"displayName": "Product Id",
				"name": "productId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Sku",
				"name": "sku_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Is Active",
				"name": "isActive_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Is Default",
				"name": "isDefault_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "With Deleted",
				"name": "withDeleted_boolean"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"id": "={{ $value.id_string }}",
					"search": "={{ $value.search_string }}",
					"productId": "={{ $value.productId_string }}",
					"sku": "={{ $value.sku_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"isDefault": "={{ $value.isDefault_string }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_get_catalog_variants"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_categories"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_categories"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_categories"
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
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_categories"
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
				"property": "channelId"
			}
		},
		"displayName": "Channel Id",
		"name": "channelId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_offers"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_offers"
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
				"property": "productId"
			}
		},
		"displayName": "Product Id",
		"name": "productId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_offers"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_offers"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_offers"
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
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Localized Content",
				"name": "localized_content_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
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
					"localizedContent": "={{ JSON.parse($value.localized_content_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_offers"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_option_schemas"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_option_schemas"
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
				"property": "schema",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayName": "Schema",
		"name": "schema_object",
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_option_schemas"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_option_schemas"
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
				"displayName": "Code",
				"name": "code_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
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
					"code": "={{ $value.code_string }}",
					"description": "={{ $value.description_string }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_option_schemas"
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
				"property": "code"
			}
		},
		"displayName": "Code",
		"name": "code_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_price_kinds"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_price_kinds"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_price_kinds"
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
						"name": "including-tax",
						"value": "including-tax"
					},
					{
						"name": "excluding-tax",
						"value": "excluding-tax"
					}
				],
				"displayName": "Display Mode",
				"name": "displayMode_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Promotion",
				"name": "isPromotion_boolean"
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
					"displayMode": "={{ $value.displayMode_options }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"isPromotion": "={{ $value.isPromotion_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_price_kinds"
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
				"property": "currencyCode"
			}
		},
		"displayName": "Currency Code",
		"name": "currencyCode_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_prices"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_prices"
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
				"property": "priceKindId"
			}
		},
		"displayName": "Price Kind Id",
		"name": "priceKindId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_prices"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_prices"
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
				"displayName": "Variant Id",
				"name": "variantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Product Id",
				"name": "productId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Offer Id",
				"name": "offerId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Min Quantity",
				"name": "minQuantity_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Max Quantity",
				"name": "maxQuantity_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Unit Price Net",
				"name": "unitPriceNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Unit Price Gross",
				"name": "unitPriceGross_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Tax Rate",
				"name": "taxRate_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Id",
				"name": "channelId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "User Id",
				"name": "userId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "User Group Id",
				"name": "userGroupId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Id",
				"name": "customerId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Group Id",
				"name": "customerGroupId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Starts At",
				"name": "startsAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ends At",
				"name": "endsAt_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"variantId": "={{ $value.variantId_string }}",
					"productId": "={{ $value.productId_string }}",
					"offerId": "={{ $value.offerId_string }}",
					"minQuantity": "={{ $value.minQuantity_number }}",
					"maxQuantity": "={{ $value.maxQuantity_number }}",
					"unitPriceNet": "={{ $value.unitPriceNet_number }}",
					"unitPriceGross": "={{ $value.unitPriceGross_number }}",
					"taxRate": "={{ $value.taxRate_number }}",
					"channelId": "={{ $value.channelId_string }}",
					"userId": "={{ $value.userId_string }}",
					"userGroupId": "={{ $value.userGroupId_string }}",
					"customerId": "={{ $value.customerId_string }}",
					"customerGroupId": "={{ $value.customerGroupId_string }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"startsAt": "={{ $value.startsAt_string }}",
					"endsAt": "={{ $value.endsAt_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_prices"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_products"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_products"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_products"
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
				"displayName": "Subtitle",
				"name": "subtitle_string"
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
				"displayName": "Sku",
				"name": "sku_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Handle",
				"name": "handle_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "simple",
						"value": "simple"
					},
					{
						"name": "configurable",
						"value": "configurable"
					},
					{
						"name": "virtual",
						"value": "virtual"
					},
					{
						"name": "downloadable",
						"value": "downloadable"
					},
					{
						"name": "bundle",
						"value": "bundle"
					},
					{
						"name": "grouped",
						"value": "grouped"
					}
				],
				"displayName": "Product Type",
				"name": "productType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Primary Currency Code",
				"name": "primaryCurrencyCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Default Unit",
				"name": "defaultUnit_string"
			},
			{
				"type": "json",
				"required": true,
				"default": "{}",
				"displayName": "Option Schema",
				"name": "option_schema_object"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Configurable",
				"name": "isConfigurable_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "json",
				"displayName": "Offers",
				"name": "offers_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Category Ids",
				"name": "categoryIds_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Tags",
				"name": "tags_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"subtitle": "={{ $value.subtitle_string }}",
					"description": "={{ $value.description_string }}",
					"sku": "={{ $value.sku_string }}",
					"handle": "={{ $value.handle_string }}",
					"productType": "={{ $value.productType_options }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"primaryCurrencyCode": "={{ $value.primaryCurrencyCode_string }}",
					"defaultUnit": "={{ $value.defaultUnit_string }}",
					"optionSchema": "={{ JSON.parse($value.option_schema_object) }}",
					"isConfigurable": "={{ $value.isConfigurable_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"offers": "={{ JSON.parse($value.offers_json) }}",
					"categoryIds": "={{ JSON.parse($value.categoryIds_json) }}",
					"tags": "={{ JSON.parse($value.tags_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_products"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_variants"
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
				"property": "productId"
			}
		},
		"displayName": "Product Id",
		"name": "productId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_variants"
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
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_variants"
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
				"displayName": "Sku",
				"name": "sku_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Barcode",
				"name": "barcode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Default",
				"name": "isDefault_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Weight Value",
				"name": "weightValue_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Weight Unit",
				"name": "weightUnit_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Dimensions",
				"name": "dimensions_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Option Values",
				"name": "option_values_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"name": "={{ $value.name_string }}",
					"sku": "={{ $value.sku_string }}",
					"barcode": "={{ $value.barcode_string }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"isDefault": "={{ $value.isDefault_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"weightValue": "={{ $value.weightValue_number }}",
					"weightUnit": "={{ $value.weightUnit_string }}",
					"dimensions": "={{ JSON.parse($value.dimensions_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"optionValues": "={{ JSON.parse($value.option_values_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_post_catalog_variants"
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
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_categories"
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
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"name": "={{ $value.name_string }}",
					"description": "={{ $value.description_string }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_categories"
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
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_offers"
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
				"displayName": "Channel Id",
				"name": "channelId_string"
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
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Localized Content",
				"name": "localized_content_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
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
				"displayName": "Product Id",
				"name": "productId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"channelId": "={{ $value.channelId_string }}",
					"title": "={{ $value.title_string }}",
					"description": "={{ $value.description_string }}",
					"localizedContent": "={{ JSON.parse($value.localized_content_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"productId": "={{ $value.productId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_offers"
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
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_option_schemas"
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
				"displayName": "Name",
				"name": "name_string"
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
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "json",
				"required": true,
				"default": "{}",
				"displayName": "Schema",
				"name": "schema_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
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
					"name": "={{ $value.name_string }}",
					"code": "={{ $value.code_string }}",
					"description": "={{ $value.description_string }}",
					"schema": "={{ JSON.parse($value.schema_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_option_schemas"
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
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_price_kinds"
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
				"displayName": "Code",
				"name": "code_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Title",
				"name": "title_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "including-tax",
						"value": "including-tax"
					},
					{
						"name": "excluding-tax",
						"value": "excluding-tax"
					}
				],
				"displayName": "Display Mode",
				"name": "displayMode_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Promotion",
				"name": "isPromotion_boolean"
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
					"code": "={{ $value.code_string }}",
					"title": "={{ $value.title_string }}",
					"displayMode": "={{ $value.displayMode_options }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"isPromotion": "={{ $value.isPromotion_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_price_kinds"
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
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_prices"
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
				"displayName": "Variant Id",
				"name": "variantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Product Id",
				"name": "productId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Offer Id",
				"name": "offerId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Price Kind Id",
				"name": "priceKindId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Min Quantity",
				"name": "minQuantity_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Max Quantity",
				"name": "maxQuantity_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Unit Price Net",
				"name": "unitPriceNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Unit Price Gross",
				"name": "unitPriceGross_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Tax Rate",
				"name": "taxRate_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Id",
				"name": "channelId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "User Id",
				"name": "userId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "User Group Id",
				"name": "userGroupId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Id",
				"name": "customerId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Group Id",
				"name": "customerGroupId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Starts At",
				"name": "startsAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ends At",
				"name": "endsAt_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"variantId": "={{ $value.variantId_string }}",
					"productId": "={{ $value.productId_string }}",
					"offerId": "={{ $value.offerId_string }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"priceKindId": "={{ $value.priceKindId_string }}",
					"minQuantity": "={{ $value.minQuantity_number }}",
					"maxQuantity": "={{ $value.maxQuantity_number }}",
					"unitPriceNet": "={{ $value.unitPriceNet_number }}",
					"unitPriceGross": "={{ $value.unitPriceGross_number }}",
					"taxRate": "={{ $value.taxRate_number }}",
					"channelId": "={{ $value.channelId_string }}",
					"userId": "={{ $value.userId_string }}",
					"userGroupId": "={{ $value.userGroupId_string }}",
					"customerId": "={{ $value.customerId_string }}",
					"customerGroupId": "={{ $value.customerGroupId_string }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"startsAt": "={{ $value.startsAt_string }}",
					"endsAt": "={{ $value.endsAt_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_prices"
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
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_products"
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
				"displayName": "Title",
				"name": "title_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Subtitle",
				"name": "subtitle_string"
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
				"displayName": "Sku",
				"name": "sku_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Handle",
				"name": "handle_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "simple",
						"value": "simple"
					},
					{
						"name": "configurable",
						"value": "configurable"
					},
					{
						"name": "virtual",
						"value": "virtual"
					},
					{
						"name": "downloadable",
						"value": "downloadable"
					},
					{
						"name": "bundle",
						"value": "bundle"
					},
					{
						"name": "grouped",
						"value": "grouped"
					}
				],
				"displayName": "Product Type",
				"name": "productType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Primary Currency Code",
				"name": "primaryCurrencyCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Default Unit",
				"name": "defaultUnit_string"
			},
			{
				"type": "json",
				"required": true,
				"default": "{}",
				"displayName": "Option Schema",
				"name": "option_schema_object"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Configurable",
				"name": "isConfigurable_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "json",
				"displayName": "Offers",
				"name": "offers_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Category Ids",
				"name": "categoryIds_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Tags",
				"name": "tags_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"title": "={{ $value.title_string }}",
					"subtitle": "={{ $value.subtitle_string }}",
					"description": "={{ $value.description_string }}",
					"sku": "={{ $value.sku_string }}",
					"handle": "={{ $value.handle_string }}",
					"productType": "={{ $value.productType_options }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"primaryCurrencyCode": "={{ $value.primaryCurrencyCode_string }}",
					"defaultUnit": "={{ $value.defaultUnit_string }}",
					"optionSchema": "={{ JSON.parse($value.option_schema_object) }}",
					"isConfigurable": "={{ $value.isConfigurable_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"offers": "={{ JSON.parse($value.offers_json) }}",
					"categoryIds": "={{ JSON.parse($value.categoryIds_json) }}",
					"tags": "={{ JSON.parse($value.tags_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_products"
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
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_variants"
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
				"displayName": "Product Id",
				"name": "productId_string"
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
				"displayName": "Sku",
				"name": "sku_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Barcode",
				"name": "barcode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Default",
				"name": "isDefault_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Weight Value",
				"name": "weightValue_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Weight Unit",
				"name": "weightUnit_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Dimensions",
				"name": "dimensions_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Option Values",
				"name": "option_values_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"productId": "={{ $value.productId_string }}",
					"name": "={{ $value.name_string }}",
					"sku": "={{ $value.sku_string }}",
					"barcode": "={{ $value.barcode_string }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"isDefault": "={{ $value.isDefault_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"weightValue": "={{ $value.weightValue_number }}",
					"weightUnit": "={{ $value.weightUnit_string }}",
					"dimensions": "={{ JSON.parse($value.dimensions_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"optionValues": "={{ JSON.parse($value.option_values_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Catalog"
				],
				"operation": [
					"catalog_put_catalog_variants"
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
					"contractors_delete_contractors_contractors_id"
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
					"contractors_put_contractors_contractors_id"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"isEnabled": "={{ $value.isEnabled_boolean }}"
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
					"code": "={{ $value.code_string }}"
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
					"type": "={{ $value.type_options }}"
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
				"displayName": "Decimal Places",
				"name": "decimalPlaces_number"
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
					"decimalPlaces": "={{ $value.decimalPlaces_number }}",
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
				"type": "number",
				"default": "",
				"displayName": "Decimal Places",
				"name": "decimalPlaces_number"
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
					"decimalPlaces": "={{ $value.decimalPlaces_number }}",
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
				"type": "string",
				"default": "",
				"displayName": "Rate",
				"name": "rate_string"
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
					"Currencies"
				],
				"operation": [
					"deleteCurrencyFetchConfig"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"isEnabled": "={{ $value.isEnabled_boolean }}"
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
					"Customers"
				],
				"operation": [
					"customers_delete_customers_activities"
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
					"Customers"
				],
				"operation": [
					"customers_delete_customers_addresses"
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
					"Customers"
				],
				"operation": [
					"customers_delete_customers_comments"
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
					"Customers"
				],
				"operation": [
					"customers_delete_customers_companies"
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
					"Customers"
				],
				"operation": [
					"customers_delete_customers_deals"
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
					"Customers"
				],
				"operation": [
					"customers_delete_customers_dictionaries_kind_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Kind",
		"name": "kind_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_delete_customers_dictionaries_kind_id"
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
					"Customers"
				],
				"operation": [
					"customers_delete_customers_people"
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
					"Customers"
				],
				"operation": [
					"customers_delete_customers_tags"
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
				"displayName": "Entity Id",
				"name": "entityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Deal Id",
				"name": "dealId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Activity Type",
				"name": "activityType_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"entityId": "={{ $value.entityId_string }}",
					"dealId": "={{ $value.dealId_string }}",
					"activityType": "={{ $value.activityType_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_activities"
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
				"displayName": "Entity Id",
				"name": "entityId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"entityId": "={{ $value.entityId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_addresses"
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
				"displayName": "Entity Id",
				"name": "entityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Deal Id",
				"name": "dealId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"entityId": "={{ $value.entityId_string }}",
					"dealId": "={{ $value.dealId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_comments"
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
				"type": "string",
				"default": "",
				"displayName": "Email",
				"name": "email_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Email Starts With",
				"name": "emailStartsWith_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Email Contains",
				"name": "emailContains_string"
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
				"type": "string",
				"default": "",
				"displayName": "Status",
				"name": "status_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Lifecycle Stage",
				"name": "lifecycleStage_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source",
				"name": "source_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Has Email",
				"name": "hasEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Has Phone",
				"name": "hasPhone_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Has Next Interaction",
				"name": "hasNextInteraction_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Created From",
				"name": "createdFrom_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Created To",
				"name": "createdTo_string"
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
				"displayName": "Tag Ids",
				"name": "tagIds_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tag Ids Empty",
				"name": "tagIdsEmpty_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"email": "={{ $value.email_string }}",
					"emailStartsWith": "={{ $value.emailStartsWith_string }}",
					"emailContains": "={{ $value.emailContains_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"status": "={{ $value.status_string }}",
					"lifecycleStage": "={{ $value.lifecycleStage_string }}",
					"source": "={{ $value.source_string }}",
					"hasEmail": "={{ $value.hasEmail_string }}",
					"hasPhone": "={{ $value.hasPhone_string }}",
					"hasNextInteraction": "={{ $value.hasNextInteraction_string }}",
					"createdFrom": "={{ $value.createdFrom_string }}",
					"createdTo": "={{ $value.createdTo_string }}",
					"id": "={{ $value.id_string }}",
					"tagIds": "={{ $value.tagIds_string }}",
					"tagIdsEmpty": "={{ $value.tagIdsEmpty_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_companies"
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
					"Customers"
				],
				"operation": [
					"customers_get_customers_companies_id"
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
				"displayName": "Include",
				"name": "include_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"include": "={{ $value.include_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_companies_id"
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
				"name": "limit_number"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"limit": "={{ $value.limit_number }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_dashboard_widgets_customer_todos"
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
				"name": "limit_number"
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
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "person",
						"value": "person"
					},
					{
						"name": "company",
						"value": "company"
					}
				],
				"displayName": "Kind",
				"name": "kind_options"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"limit": "={{ $value.limit_number }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"kind": "={{ $value.kind_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_dashboard_widgets_new_customers"
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
				"name": "limit_number"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"limit": "={{ $value.limit_number }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_dashboard_widgets_new_deals"
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
				"name": "limit_number"
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
				"displayName": "Include Past",
				"name": "includePast_options"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"limit": "={{ $value.limit_number }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"includePast": "={{ $value.includePast_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_dashboard_widgets_next_interactions"
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
				"type": "string",
				"default": "",
				"displayName": "Status",
				"name": "status_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Pipeline Stage",
				"name": "pipelineStage_string"
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
				"type": "string",
				"default": "",
				"displayName": "Person Entity Id",
				"name": "personEntityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Company Entity Id",
				"name": "companyEntityId_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"status": "={{ $value.status_string }}",
					"pipelineStage": "={{ $value.pipelineStage_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"personEntityId": "={{ $value.personEntityId_string }}",
					"companyEntityId": "={{ $value.companyEntityId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_deals"
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
					"Customers"
				],
				"operation": [
					"customers_get_customers_deals_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Kind",
		"name": "kind_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_dictionaries_kind"
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
				"type": "string",
				"default": "",
				"displayName": "Email",
				"name": "email_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Email Starts With",
				"name": "emailStartsWith_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Email Contains",
				"name": "emailContains_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status",
				"name": "status_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Lifecycle Stage",
				"name": "lifecycleStage_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source",
				"name": "source_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Has Email",
				"name": "hasEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Has Phone",
				"name": "hasPhone_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Has Next Interaction",
				"name": "hasNextInteraction_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Created From",
				"name": "createdFrom_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Created To",
				"name": "createdTo_string"
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
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tag Ids",
				"name": "tagIds_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tag Ids Empty",
				"name": "tagIdsEmpty_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"email": "={{ $value.email_string }}",
					"emailStartsWith": "={{ $value.emailStartsWith_string }}",
					"emailContains": "={{ $value.emailContains_string }}",
					"status": "={{ $value.status_string }}",
					"lifecycleStage": "={{ $value.lifecycleStage_string }}",
					"source": "={{ $value.source_string }}",
					"hasEmail": "={{ $value.hasEmail_string }}",
					"hasPhone": "={{ $value.hasPhone_string }}",
					"hasNextInteraction": "={{ $value.hasNextInteraction_string }}",
					"createdFrom": "={{ $value.createdFrom_string }}",
					"createdTo": "={{ $value.createdTo_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"id": "={{ $value.id_string }}",
					"tagIds": "={{ $value.tagIds_string }}",
					"tagIdsEmpty": "={{ $value.tagIdsEmpty_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_people"
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
					"digits": "={{ $value }}"
				}
			}
		},
		"displayName": "Digits",
		"name": "digits_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_people_check_phone"
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
					"Customers"
				],
				"operation": [
					"customers_get_customers_people_id"
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
				"displayName": "Include",
				"name": "include_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"include": "={{ $value.include_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_people_id"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_get_customers_tags"
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
					"Customers"
				],
				"operation": [
					"customers_patch_customers_dictionaries_kind_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Kind",
		"name": "kind_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_patch_customers_dictionaries_kind_id"
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
				"type": "json",
				"name": "color",
				"displayName": "Color",
				"default": ""
			},
			{
				"type": "json",
				"name": "icon",
				"displayName": "Icon",
				"default": ""
			}
		],
		"routing": {
			"request": {
				"body": {
					"value": "={{ $value.value_string }}",
					"label": "={{ $value.label_string }}",
					"color": "={{ JSON.parse($value.color) }}",
					"icon": "={{ JSON.parse($value.icon) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_patch_customers_dictionaries_kind_id"
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
				"property": "activityType"
			}
		},
		"displayName": "Activity Type",
		"name": "activityType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_activities"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_activities"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_activities"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_activities"
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
				"displayName": "Subject",
				"name": "subject_string"
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
				"displayName": "Occurred At",
				"name": "occurredAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Deal Id",
				"name": "dealId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"subject": "={{ $value.subject_string }}",
					"body": "={{ $value.body_string }}",
					"occurredAt": "={{ $value.occurredAt_string }}",
					"dealId": "={{ $value.dealId_string }}",
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_activities"
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
				"property": "addressLine1"
			}
		},
		"displayName": "Address Line1",
		"name": "addressLine1_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_addresses"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_addresses"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_addresses"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_addresses"
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
				"displayName": "Purpose",
				"name": "purpose_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Company Name",
				"name": "companyName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Address Line2",
				"name": "addressLine2_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Building Number",
				"name": "buildingNumber_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Flat Number",
				"name": "flatNumber_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "City",
				"name": "city_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Region",
				"name": "region_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Postal Code",
				"name": "postalCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Country",
				"name": "country_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Latitude",
				"name": "latitude_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Longitude",
				"name": "longitude_number"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Primary",
				"name": "isPrimary_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"name": "={{ $value.name_string }}",
					"purpose": "={{ $value.purpose_string }}",
					"companyName": "={{ $value.companyName_string }}",
					"addressLine2": "={{ $value.addressLine2_string }}",
					"buildingNumber": "={{ $value.buildingNumber_string }}",
					"flatNumber": "={{ $value.flatNumber_string }}",
					"city": "={{ $value.city_string }}",
					"region": "={{ $value.region_string }}",
					"postalCode": "={{ $value.postalCode_string }}",
					"country": "={{ $value.country_string }}",
					"latitude": "={{ $value.latitude_number }}",
					"longitude": "={{ $value.longitude_number }}",
					"isPrimary": "={{ $value.isPrimary_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_addresses"
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
				"property": "body"
			}
		},
		"displayName": "Body",
		"name": "body_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_comments"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_comments"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_comments"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_comments"
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
				"displayName": "Deal Id",
				"name": "dealId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"dealId": "={{ $value.dealId_string }}",
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_comments"
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
				"property": "displayName"
			}
		},
		"displayName": "Display Name",
		"name": "displayName_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_companies"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_companies"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_companies"
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
				"displayName": "Owner User Id",
				"name": "ownerUserId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Primary Email",
				"name": "primaryEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Primary Phone",
				"name": "primaryPhone_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status",
				"name": "status_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Lifecycle Stage",
				"name": "lifecycleStage_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source",
				"name": "source_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"displayName": "Tags",
				"name": "tags_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Legal Name",
				"name": "legalName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Brand Name",
				"name": "brandName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Domain",
				"name": "domain_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Website Url",
				"name": "websiteUrl_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Industry",
				"name": "industry_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Size Bucket",
				"name": "sizeBucket_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Annual Revenue",
				"name": "annualRevenue_number"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"ownerUserId": "={{ $value.ownerUserId_string }}",
					"primaryEmail": "={{ $value.primaryEmail_string }}",
					"primaryPhone": "={{ $value.primaryPhone_string }}",
					"status": "={{ $value.status_string }}",
					"lifecycleStage": "={{ $value.lifecycleStage_string }}",
					"source": "={{ $value.source_string }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"tags": "={{ JSON.parse($value.tags_json) }}",
					"legalName": "={{ $value.legalName_string }}",
					"brandName": "={{ $value.brandName_string }}",
					"domain": "={{ $value.domain_string }}",
					"websiteUrl": "={{ $value.websiteUrl_string }}",
					"industry": "={{ $value.industry_string }}",
					"sizeBucket": "={{ $value.sizeBucket_string }}",
					"annualRevenue": "={{ $value.annualRevenue_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_companies"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_deals"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_deals"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_deals"
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
				"displayName": "Status",
				"name": "status_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Pipeline Stage",
				"name": "pipelineStage_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Value Amount",
				"name": "valueAmount_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Value Currency",
				"name": "valueCurrency_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Probability",
				"name": "probability_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Expected Close At",
				"name": "expectedCloseAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Owner User Id",
				"name": "ownerUserId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source",
				"name": "source_string"
			},
			{
				"type": "json",
				"displayName": "Company Ids",
				"name": "companyIds_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Person Ids",
				"name": "personIds_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"status": "={{ $value.status_string }}",
					"pipelineStage": "={{ $value.pipelineStage_string }}",
					"valueAmount": "={{ $value.valueAmount_number }}",
					"valueCurrency": "={{ $value.valueCurrency_string }}",
					"probability": "={{ $value.probability_number }}",
					"expectedCloseAt": "={{ $value.expectedCloseAt_string }}",
					"ownerUserId": "={{ $value.ownerUserId_string }}",
					"source": "={{ $value.source_string }}",
					"companyIds": "={{ JSON.parse($value.companyIds_json) }}",
					"personIds": "={{ JSON.parse($value.personIds_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_deals"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Kind",
		"name": "kind_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_dictionaries_kind"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_dictionaries_kind"
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
				"type": "json",
				"name": "color",
				"displayName": "Color",
				"default": ""
			},
			{
				"type": "json",
				"name": "icon",
				"displayName": "Icon",
				"default": ""
			}
		],
		"routing": {
			"request": {
				"body": {
					"label": "={{ $value.label_string }}",
					"color": "={{ JSON.parse($value.color) }}",
					"icon": "={{ JSON.parse($value.icon) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_dictionaries_kind"
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
				"property": "firstName"
			}
		},
		"displayName": "First Name",
		"name": "firstName_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_people"
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
				"property": "lastName"
			}
		},
		"displayName": "Last Name",
		"name": "lastName_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_people"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_people"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_people"
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
				"displayName": "Display Name",
				"name": "displayName_string"
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
				"displayName": "Owner User Id",
				"name": "ownerUserId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Primary Email",
				"name": "primaryEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Primary Phone",
				"name": "primaryPhone_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status",
				"name": "status_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Lifecycle Stage",
				"name": "lifecycleStage_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source",
				"name": "source_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"displayName": "Tags",
				"name": "tags_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Preferred Name",
				"name": "preferredName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Job Title",
				"name": "jobTitle_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Department",
				"name": "department_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Seniority",
				"name": "seniority_string"
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
				"displayName": "Linked In Url",
				"name": "linkedInUrl_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Twitter Url",
				"name": "twitterUrl_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"displayName": "={{ $value.displayName_string }}",
					"description": "={{ $value.description_string }}",
					"ownerUserId": "={{ $value.ownerUserId_string }}",
					"primaryEmail": "={{ $value.primaryEmail_string }}",
					"primaryPhone": "={{ $value.primaryPhone_string }}",
					"status": "={{ $value.status_string }}",
					"lifecycleStage": "={{ $value.lifecycleStage_string }}",
					"source": "={{ $value.source_string }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"tags": "={{ JSON.parse($value.tags_json) }}",
					"preferredName": "={{ $value.preferredName_string }}",
					"jobTitle": "={{ $value.jobTitle_string }}",
					"department": "={{ $value.department_string }}",
					"seniority": "={{ $value.seniority_string }}",
					"timezone": "={{ $value.timezone_string }}",
					"linkedInUrl": "={{ $value.linkedInUrl_string }}",
					"twitterUrl": "={{ $value.twitterUrl_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_people"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags"
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
				"property": "slug"
			}
		},
		"displayName": "Slug",
		"name": "slug_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags"
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
				"displayName": "Color",
				"name": "color_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"color": "={{ $value.color_string }}",
					"description": "={{ $value.description_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags_assign"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags_assign"
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
				"property": "tagId"
			}
		},
		"displayName": "Tag Id",
		"name": "tagId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags_assign"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags_assign"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags_unassign"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags_unassign"
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
				"property": "tagId"
			}
		},
		"displayName": "Tag Id",
		"name": "tagId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags_unassign"
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
					"Customers"
				],
				"operation": [
					"customers_post_customers_tags_unassign"
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
					"Customers"
				],
				"operation": [
					"customers_put_customers_activities"
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
				"displayName": "Entity Id",
				"name": "entityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Activity Type",
				"name": "activityType_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Subject",
				"name": "subject_string"
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
				"displayName": "Occurred At",
				"name": "occurredAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Deal Id",
				"name": "dealId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"entityId": "={{ $value.entityId_string }}",
					"activityType": "={{ $value.activityType_string }}",
					"subject": "={{ $value.subject_string }}",
					"body": "={{ $value.body_string }}",
					"occurredAt": "={{ $value.occurredAt_string }}",
					"dealId": "={{ $value.dealId_string }}",
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_put_customers_activities"
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
					"Customers"
				],
				"operation": [
					"customers_put_customers_addresses"
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
				"displayName": "Entity Id",
				"name": "entityId_string"
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
				"displayName": "Purpose",
				"name": "purpose_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Company Name",
				"name": "companyName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Address Line1",
				"name": "addressLine1_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Address Line2",
				"name": "addressLine2_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Building Number",
				"name": "buildingNumber_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Flat Number",
				"name": "flatNumber_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "City",
				"name": "city_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Region",
				"name": "region_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Postal Code",
				"name": "postalCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Country",
				"name": "country_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Latitude",
				"name": "latitude_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Longitude",
				"name": "longitude_number"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Primary",
				"name": "isPrimary_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"entityId": "={{ $value.entityId_string }}",
					"name": "={{ $value.name_string }}",
					"purpose": "={{ $value.purpose_string }}",
					"companyName": "={{ $value.companyName_string }}",
					"addressLine1": "={{ $value.addressLine1_string }}",
					"addressLine2": "={{ $value.addressLine2_string }}",
					"buildingNumber": "={{ $value.buildingNumber_string }}",
					"flatNumber": "={{ $value.flatNumber_string }}",
					"city": "={{ $value.city_string }}",
					"region": "={{ $value.region_string }}",
					"postalCode": "={{ $value.postalCode_string }}",
					"country": "={{ $value.country_string }}",
					"latitude": "={{ $value.latitude_number }}",
					"longitude": "={{ $value.longitude_number }}",
					"isPrimary": "={{ $value.isPrimary_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_put_customers_addresses"
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
					"Customers"
				],
				"operation": [
					"customers_put_customers_comments"
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
				"displayName": "Entity Id",
				"name": "entityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Deal Id",
				"name": "dealId_string"
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
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"entityId": "={{ $value.entityId_string }}",
					"dealId": "={{ $value.dealId_string }}",
					"body": "={{ $value.body_string }}",
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_put_customers_comments"
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
					"Customers"
				],
				"operation": [
					"customers_put_customers_companies"
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
				"displayName": "Display Name",
				"name": "displayName_string"
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
				"displayName": "Owner User Id",
				"name": "ownerUserId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Primary Email",
				"name": "primaryEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Primary Phone",
				"name": "primaryPhone_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status",
				"name": "status_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Lifecycle Stage",
				"name": "lifecycleStage_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source",
				"name": "source_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"displayName": "Tags",
				"name": "tags_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Legal Name",
				"name": "legalName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Brand Name",
				"name": "brandName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Domain",
				"name": "domain_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Website Url",
				"name": "websiteUrl_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Industry",
				"name": "industry_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Size Bucket",
				"name": "sizeBucket_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Annual Revenue",
				"name": "annualRevenue_number"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"displayName": "={{ $value.displayName_string }}",
					"description": "={{ $value.description_string }}",
					"ownerUserId": "={{ $value.ownerUserId_string }}",
					"primaryEmail": "={{ $value.primaryEmail_string }}",
					"primaryPhone": "={{ $value.primaryPhone_string }}",
					"status": "={{ $value.status_string }}",
					"lifecycleStage": "={{ $value.lifecycleStage_string }}",
					"source": "={{ $value.source_string }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"tags": "={{ JSON.parse($value.tags_json) }}",
					"legalName": "={{ $value.legalName_string }}",
					"brandName": "={{ $value.brandName_string }}",
					"domain": "={{ $value.domain_string }}",
					"websiteUrl": "={{ $value.websiteUrl_string }}",
					"industry": "={{ $value.industry_string }}",
					"sizeBucket": "={{ $value.sizeBucket_string }}",
					"annualRevenue": "={{ $value.annualRevenue_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_put_customers_companies"
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
					"Customers"
				],
				"operation": [
					"customers_put_customers_deals"
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
				"displayName": "Title",
				"name": "title_string"
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
				"displayName": "Status",
				"name": "status_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Pipeline Stage",
				"name": "pipelineStage_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Value Amount",
				"name": "valueAmount_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Value Currency",
				"name": "valueCurrency_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Probability",
				"name": "probability_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Expected Close At",
				"name": "expectedCloseAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Owner User Id",
				"name": "ownerUserId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source",
				"name": "source_string"
			},
			{
				"type": "json",
				"displayName": "Company Ids",
				"name": "companyIds_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Person Ids",
				"name": "personIds_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"title": "={{ $value.title_string }}",
					"description": "={{ $value.description_string }}",
					"status": "={{ $value.status_string }}",
					"pipelineStage": "={{ $value.pipelineStage_string }}",
					"valueAmount": "={{ $value.valueAmount_number }}",
					"valueCurrency": "={{ $value.valueCurrency_string }}",
					"probability": "={{ $value.probability_number }}",
					"expectedCloseAt": "={{ $value.expectedCloseAt_string }}",
					"ownerUserId": "={{ $value.ownerUserId_string }}",
					"source": "={{ $value.source_string }}",
					"companyIds": "={{ JSON.parse($value.companyIds_json) }}",
					"personIds": "={{ JSON.parse($value.personIds_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_put_customers_deals"
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
					"Customers"
				],
				"operation": [
					"customers_put_customers_people"
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
				"displayName": "Display Name",
				"name": "displayName_string"
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
				"displayName": "Owner User Id",
				"name": "ownerUserId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Primary Email",
				"name": "primaryEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Primary Phone",
				"name": "primaryPhone_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status",
				"name": "status_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Lifecycle Stage",
				"name": "lifecycleStage_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Source",
				"name": "source_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"displayName": "Tags",
				"name": "tags_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Preferred Name",
				"name": "preferredName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Job Title",
				"name": "jobTitle_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Department",
				"name": "department_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Seniority",
				"name": "seniority_string"
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
				"displayName": "Linked In Url",
				"name": "linkedInUrl_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Twitter Url",
				"name": "twitterUrl_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "First Name",
				"name": "firstName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Last Name",
				"name": "lastName_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"displayName": "={{ $value.displayName_string }}",
					"description": "={{ $value.description_string }}",
					"ownerUserId": "={{ $value.ownerUserId_string }}",
					"primaryEmail": "={{ $value.primaryEmail_string }}",
					"primaryPhone": "={{ $value.primaryPhone_string }}",
					"status": "={{ $value.status_string }}",
					"lifecycleStage": "={{ $value.lifecycleStage_string }}",
					"source": "={{ $value.source_string }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"tags": "={{ JSON.parse($value.tags_json) }}",
					"preferredName": "={{ $value.preferredName_string }}",
					"jobTitle": "={{ $value.jobTitle_string }}",
					"department": "={{ $value.department_string }}",
					"seniority": "={{ $value.seniority_string }}",
					"timezone": "={{ $value.timezone_string }}",
					"linkedInUrl": "={{ $value.linkedInUrl_string }}",
					"twitterUrl": "={{ $value.twitterUrl_string }}",
					"firstName": "={{ $value.firstName_string }}",
					"lastName": "={{ $value.lastName_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_put_customers_people"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "line_first",
				"value": "line_first"
			},
			{
				"name": "street_first",
				"value": "street_first"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "addressFormat"
			}
		},
		"displayName": "Address Format",
		"name": "addressFormat_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_put_customers_settings_address_format"
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
					"Customers"
				],
				"operation": [
					"customers_put_customers_settings_address_format"
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
					"Customers"
				],
				"operation": [
					"customers_put_customers_settings_address_format"
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
					"Customers"
				],
				"operation": [
					"customers_put_customers_tags"
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
				"displayName": "Slug",
				"name": "slug_string"
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
				"displayName": "Color",
				"name": "color_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"slug": "={{ $value.slug_string }}",
					"label": "={{ $value.label_string }}",
					"color": "={{ $value.color_string }}",
					"description": "={{ $value.description_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customers"
				],
				"operation": [
					"customers_put_customers_tags"
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
				]
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
					"Dashboards"
				],
				"operation": [
					"dashboards_put_dashboards_roles_widgets"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"value": "={{ $value.value_string }}",
					"label": "={{ $value.label_string }}"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"label": "={{ $value.label_string }}"
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
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
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
					"isActive": "={{ $value.isActive_boolean }}",
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
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
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
					"isActive": "={{ $value.isActive_boolean }}",
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
					"Email Templates"
				],
				"operation": [
					"email_templates_put_email_templates_settings"
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
					"Email Templates"
				],
				"operation": [
					"email_templates_put_email_templates_settings"
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
				"displayName": "Primary Color",
				"name": "primaryColor_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Accent Color",
				"name": "accentColor_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"primaryColor": "={{ $value.primaryColor_string }}",
					"accentColor": "={{ $value.accentColor_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Email Templates"
				],
				"operation": [
					"email_templates_put_email_templates_settings"
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
				"property": "htmlTemplate"
			}
		},
		"displayName": "Html Template",
		"name": "htmlTemplate_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Email Templates"
				],
				"operation": [
					"email_templates_put_email_templates_templates"
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
					"Email Templates"
				],
				"operation": [
					"email_templates_put_email_templates_templates"
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
				"property": "subjectTemplate"
			}
		},
		"displayName": "Subject Template",
		"name": "subjectTemplate_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Email Templates"
				],
				"operation": [
					"email_templates_put_email_templates_templates"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "offer",
				"value": "offer"
			},
			{
				"name": "invoice",
				"value": "invoice"
			},
			{
				"name": "quote_request",
				"value": "quote_request"
			},
			{
				"name": "shipment_notification",
				"value": "shipment_notification"
			},
			{
				"name": "booking_confirmation",
				"value": "booking_confirmation"
			},
			{
				"name": "general_message",
				"value": "general_message"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "templateType"
			}
		},
		"displayName": "Template Type",
		"name": "templateType_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Email Templates"
				],
				"operation": [
					"email_templates_put_email_templates_templates"
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
					"Email Templates"
				],
				"operation": [
					"email_templates_put_email_templates_templates"
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
					"Email Templates"
				],
				"operation": [
					"email_templates_put_email_templates_templates"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"labelField": "={{ $value.labelField_string }}",
					"q": "={{ $value.q_string }}"
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
				]
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
					"Entities"
				],
				"operation": [
					"entities_post_entities_encryption"
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
					"Example"
				],
				"operation": [
					"example_delete_example_todos"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"q": "={{ $value.q_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Example"
				],
				"operation": [
					"example_get_example_assignees"
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
					"Example"
				],
				"operation": [
					"example_get_example_blog_id"
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
				"displayName": "Ids",
				"name": "ids_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Example"
				],
				"operation": [
					"example_get_example_organizations"
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
				"type": "string",
				"default": "",
				"displayName": "Title",
				"name": "title_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Done",
				"name": "isDone_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "With Deleted",
				"name": "withDeleted_boolean"
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
				"displayName": "Created From",
				"name": "createdFrom_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Created To",
				"name": "createdTo_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "json",
						"value": "json"
					},
					{
						"name": "csv",
						"value": "csv"
					}
				],
				"displayName": "Format",
				"name": "format_options"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"id": "={{ $value.id_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"title": "={{ $value.title_string }}",
					"isDone": "={{ $value.isDone_boolean }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"createdFrom": "={{ $value.createdFrom_string }}",
					"createdTo": "={{ $value.createdTo_string }}",
					"format": "={{ $value.format_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Example"
				],
				"operation": [
					"example_get_example_todos"
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
					"Example"
				],
				"operation": [
					"example_post_example_blog_id"
				]
			}
		}
	},
	{
		"type": "json",
		"required": true,
		"default": "{}",
		"routing": {
			"request": {
				"body": "={{ JSON.parse($value) }}"
			}
		},
		"displayName": "Body",
		"name": "body_object",
		"displayOptions": {
			"show": {
				"resource": [
					"Example"
				],
				"operation": [
					"example_post_example_todos"
				]
			}
		}
	},
	{
		"type": "json",
		"required": true,
		"default": "{}",
		"routing": {
			"request": {
				"body": "={{ JSON.parse($value) }}"
			}
		},
		"displayName": "Body",
		"name": "body_object",
		"displayOptions": {
			"show": {
				"resource": [
					"Example"
				],
				"operation": [
					"example_put_example_todos"
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_delete_fms_documents_documents_id"
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_documents_id"
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_documents_id_download"
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_documents_id_extract"
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_documents_id_extract"
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_put_fms_documents_documents_id"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_delete_fms_financials_invoices_id"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_delete_fms_financials_invoices_id_line_items_lineItemId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Line Item Id",
		"name": "lineItemId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Financials"
				],
				"operation": [
					"fms_financials_delete_fms_financials_invoices_id_line_items_lineItemId"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_get_fms_financials_invoices_id"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_get_fms_financials_invoices_id_line_items_lineItemId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Line Item Id",
		"name": "lineItemId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Financials"
				],
				"operation": [
					"fms_financials_get_fms_financials_invoices_id_line_items_lineItemId"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_get_fms_financials_invoices_id_match_charges"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_get_fms_financials_invoices_id_pages"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_get_fms_financials_invoices_id_pages_pageNum_image"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_get_fms_financials_invoices_id_pages_pageNum_image"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_patch_fms_financials_invoices_id_line_items_lineItemId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Line Item Id",
		"name": "lineItemId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Financials"
				],
				"operation": [
					"fms_financials_patch_fms_financials_invoices_id_line_items_lineItemId"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_post_fms_financials_invoices_id"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_post_fms_financials_invoices_id_extract"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_post_fms_financials_invoices_id_line_items"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_post_fms_financials_invoices_id_match_charges"
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
					"FMS Financials"
				],
				"operation": [
					"fms_financials_put_fms_financials_invoices_id"
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
					"FMS Locations"
				],
				"operation": [
					"fms_locations_delete_fms_locations_ports_id"
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
					"FMS Locations"
				],
				"operation": [
					"fms_locations_delete_fms_locations_terminals_id"
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
					"FMS Locations"
				],
				"operation": [
					"fms_locations_delete_fms_locations_unified_id"
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
					"FMS Locations"
				],
				"operation": [
					"fms_locations_get_fms_locations_locations_id"
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
					"FMS Locations"
				],
				"operation": [
					"fms_locations_get_fms_locations_ports_id"
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
					"FMS Locations"
				],
				"operation": [
					"fms_locations_get_fms_locations_terminals_id"
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
					"FMS Locations"
				],
				"operation": [
					"fms_locations_get_fms_locations_unified_id"
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
					"FMS Locations"
				],
				"operation": [
					"fms_locations_put_fms_locations_ports_id"
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
					"FMS Locations"
				],
				"operation": [
					"fms_locations_put_fms_locations_terminals_id"
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
					"FMS Locations"
				],
				"operation": [
					"fms_locations_put_fms_locations_unified_id"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_air_units"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_cargo"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_containers"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_legs"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_lines"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_lines_lineId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Line Id",
		"name": "lineId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_lines_lineId"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_notes"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_road_units"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_sea_containers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Container Id",
		"name": "containerId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_sea_containers_containerId"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_sea_containers_containerId"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_air_units"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_cargo"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_containers"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_documents"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_invoices"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_legs"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_lines"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_lines_lineId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Line Id",
		"name": "lineId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_lines_lineId"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_notes"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_road_units"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_sea_containers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Container Id",
		"name": "containerId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_sea_containers_containerId"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_sea_containers_containerId"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_air_units"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_cargo"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_containers"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_documents"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_legs"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_lines"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_link_offer"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_notes"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_road_units"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_sea_containers"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_air_units"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_cargo"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_containers"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_invoices"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_legs"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_lines"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_lines_lineId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Line Id",
		"name": "lineId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_lines_lineId"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_notes"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_road_units"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_sea_containers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Container Id",
		"name": "containerId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_sea_containers_containerId"
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
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_sea_containers_containerId"
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
					"FMS Quotes"
				],
				"operation": [
					"fms_quotes_get_fms_quotes_dashboard_widgets_draft_quotes"
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
					"FMS Quotes"
				],
				"operation": [
					"fms_quotes_get_fms_quotes_dashboard_widgets_pending_response_offers"
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
					"FMS Quotes"
				],
				"operation": [
					"fms_quotes_get_fms_quotes_dashboard_widgets_unsent_offers"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_delete_fms_quotes_id"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_delete_fms_quotes_offer_lines_id"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_delete_fms_quotes_offers_id"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_delete_fms_quotes_quote_lines_id"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_get_fms_quotes_id"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_get_fms_quotes_offer_lines_id"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_get_fms_quotes_offers_id"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_get_fms_quotes_offers_id_contacts"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_get_fms_quotes_offers_id_pdf"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_get_fms_quotes_quote_lines_id"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_post_fms_quotes_offers_id_convert_to_project"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_post_fms_quotes_offers_id_pdf"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_post_fms_quotes_offers_id_send"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_put_fms_quotes_id"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_put_fms_quotes_offer_lines_id"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_put_fms_quotes_offers_id"
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
					"FMS Quotes & Offers"
				],
				"operation": [
					"fms_quotes_put_fms_quotes_quote_lines_id"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_delete_fms_products_carriers_id"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_delete_fms_products_charge_codes_id"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_delete_fms_products_products_id"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_delete_fms_products_products_id_variants_variantId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Variant Id",
		"name": "variantId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Products"
				],
				"operation": [
					"fms_products_delete_fms_products_products_id_variants_variantId"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_delete_fms_products_variants_id"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_get_fms_products_carriers_id"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_get_fms_products_charge_codes_id"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_get_fms_products_products_id"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_get_fms_products_products_id_variants"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_get_fms_products_products_id_variants_variantId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Variant Id",
		"name": "variantId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Products"
				],
				"operation": [
					"fms_products_get_fms_products_products_id_variants_variantId"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_get_fms_products_variants_id"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_post_fms_products_products_id_variants"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_put_fms_products_carriers_id"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_put_fms_products_charge_codes_id"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_put_fms_products_products_id"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_put_fms_products_products_id_variants_variantId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Variant Id",
		"name": "variantId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Products"
				],
				"operation": [
					"fms_products_put_fms_products_products_id_variants_variantId"
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
					"Fms Products"
				],
				"operation": [
					"fms_products_put_fms_products_variants_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "User Id",
		"name": "userId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Teams"
				],
				"operation": [
					"fms_teams_put_fms_teams_members_userId"
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
					"pageSize": "={{ $value.pageSize_number }}"
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
					"Planner"
				],
				"operation": [
					"planner_delete_planner_availability"
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
					"Planner"
				],
				"operation": [
					"planner_delete_planner_availability_rule_sets"
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
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "member",
						"value": "member"
					},
					{
						"name": "resource",
						"value": "resource"
					},
					{
						"name": "ruleset",
						"value": "ruleset"
					}
				],
				"displayName": "Subject Type",
				"name": "subjectType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Subject Ids",
				"name": "subjectIds_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"subjectType": "={{ $value.subjectType_options }}",
					"subjectIds": "={{ $value.subjectIds_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_get_planner_availability"
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
				"displayName": "Ids",
				"name": "ids_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"ids": "={{ $value.ids_string }}",
					"search": "={{ $value.search_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_get_planner_availability_rule_sets"
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
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability"
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
				"property": "rrule"
			}
		},
		"displayName": "Rrule",
		"name": "rrule_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability"
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
				"property": "subjectId"
			}
		},
		"displayName": "Subject Id",
		"name": "subjectId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "member",
				"value": "member"
			},
			{
				"name": "resource",
				"value": "resource"
			},
			{
				"name": "ruleset",
				"value": "ruleset"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "subjectType"
			}
		},
		"displayName": "Subject Type",
		"name": "subjectType_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability"
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
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability"
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
				"property": "timezone"
			}
		},
		"displayName": "Timezone",
		"name": "timezone_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability"
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
				"displayName": "Exdates",
				"name": "exdates_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "availability",
						"value": "availability"
					},
					{
						"name": "unavailability",
						"value": "unavailability"
					}
				],
				"displayName": "Kind",
				"name": "kind_options"
			}
		],
		"routing": {
			"request": {
				"body": {
					"exdates": "={{ JSON.parse($value.exdates_json) }}",
					"kind": "={{ $value.kind_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability"
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
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_date_specific"
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
				"property": "subjectId"
			}
		},
		"displayName": "Subject Id",
		"name": "subjectId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_date_specific"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "member",
				"value": "member"
			},
			{
				"name": "resource",
				"value": "resource"
			},
			{
				"name": "ruleset",
				"value": "ruleset"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "subjectType"
			}
		},
		"displayName": "Subject Type",
		"name": "subjectType_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_date_specific"
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
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_date_specific"
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
				"property": "timezone"
			}
		},
		"displayName": "Timezone",
		"name": "timezone_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_date_specific"
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
				"displayName": "Dates",
				"name": "dates_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Windows",
				"name": "windows_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Available",
				"name": "isAvailable_boolean"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "availability",
						"value": "availability"
					},
					{
						"name": "unavailability",
						"value": "unavailability"
					}
				],
				"displayName": "Kind",
				"name": "kind_options"
			}
		],
		"routing": {
			"request": {
				"body": {
					"date": "={{ $value.date_string }}",
					"dates": "={{ JSON.parse($value.dates_json) }}",
					"windows": "={{ JSON.parse($value.windows_json) }}",
					"isAvailable": "={{ $value.isAvailable_boolean }}",
					"kind": "={{ $value.kind_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_date_specific"
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
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_rule_sets"
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
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_rule_sets"
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
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_rule_sets"
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
				"property": "timezone"
			}
		},
		"displayName": "Timezone",
		"name": "timezone_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_rule_sets"
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
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_rule_sets"
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
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_weekly"
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
				"property": "subjectId"
			}
		},
		"displayName": "Subject Id",
		"name": "subjectId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_weekly"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "member",
				"value": "member"
			},
			{
				"name": "resource",
				"value": "resource"
			},
			{
				"name": "ruleset",
				"value": "ruleset"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "subjectType"
			}
		},
		"displayName": "Subject Type",
		"name": "subjectType_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_weekly"
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
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_weekly"
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
				"property": "timezone"
			}
		},
		"displayName": "Timezone",
		"name": "timezone_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_weekly"
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
				"displayName": "Windows",
				"name": "windows_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"windows": "={{ JSON.parse($value.windows_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_post_planner_availability_weekly"
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
					"Planner"
				],
				"operation": [
					"planner_put_planner_availability"
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
						"name": "member",
						"value": "member"
					},
					{
						"name": "resource",
						"value": "resource"
					},
					{
						"name": "ruleset",
						"value": "ruleset"
					}
				],
				"displayName": "Subject Type",
				"name": "subjectType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Subject Id",
				"name": "subjectId_string"
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
				"displayName": "Rrule",
				"name": "rrule_string"
			},
			{
				"type": "json",
				"displayName": "Exdates",
				"name": "exdates_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "availability",
						"value": "availability"
					},
					{
						"name": "unavailability",
						"value": "unavailability"
					}
				],
				"displayName": "Kind",
				"name": "kind_options"
			}
		],
		"routing": {
			"request": {
				"body": {
					"subjectType": "={{ $value.subjectType_options }}",
					"subjectId": "={{ $value.subjectId_string }}",
					"timezone": "={{ $value.timezone_string }}",
					"rrule": "={{ $value.rrule_string }}",
					"exdates": "={{ JSON.parse($value.exdates_json) }}",
					"kind": "={{ $value.kind_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_put_planner_availability"
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
					"Planner"
				],
				"operation": [
					"planner_put_planner_availability_rule_sets"
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
				"displayName": "Timezone",
				"name": "timezone_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"name": "={{ $value.name_string }}",
					"timezone": "={{ $value.timezone_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Planner"
				],
				"operation": [
					"planner_put_planner_availability_rule_sets"
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
					"Resources"
				],
				"operation": [
					"resources_delete_resources_activities"
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
					"Resources"
				],
				"operation": [
					"resources_delete_resources_comments"
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
					"Resources"
				],
				"operation": [
					"resources_delete_resources_resource_types"
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
					"Resources"
				],
				"operation": [
					"resources_delete_resources_resources"
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
					"Resources"
				],
				"operation": [
					"resources_delete_resources_tags"
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
				"displayName": "Entity Id",
				"name": "entityId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"entityId": "={{ $value.entityId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_get_resources_activities"
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
				"displayName": "Entity Id",
				"name": "entityId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"entityId": "={{ $value.entityId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_get_resources_comments"
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
				"type": "string",
				"default": "",
				"displayName": "Ids",
				"name": "ids_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"ids": "={{ $value.ids_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_get_resources_resource_types"
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
				"type": "string",
				"default": "",
				"displayName": "Ids",
				"name": "ids_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Resource Type Id",
				"name": "resourceTypeId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Is Active",
				"name": "isActive_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tag Ids",
				"name": "tagIds_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"ids": "={{ $value.ids_string }}",
					"resourceTypeId": "={{ $value.resourceTypeId_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"tagIds": "={{ $value.tagIds_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_get_resources_resources"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_get_resources_tags"
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
				"property": "activityType"
			}
		},
		"displayName": "Activity Type",
		"name": "activityType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_post_resources_activities"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_activities"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_activities"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_activities"
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
				"displayName": "Subject",
				"name": "subject_string"
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
				"displayName": "Occurred At",
				"name": "occurredAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"subject": "={{ $value.subject_string }}",
					"body": "={{ $value.body_string }}",
					"occurredAt": "={{ $value.occurredAt_string }}",
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_post_resources_activities"
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
				"property": "body"
			}
		},
		"displayName": "Body",
		"name": "body_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_post_resources_comments"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_comments"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_comments"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_comments"
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
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_post_resources_comments"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_resource_types"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_resource_types"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_resource_types"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_resource_types"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_resources"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_resources"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_resources"
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
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"tags": "={{ JSON.parse($value.tags_json) }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_post_resources_resources"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_resources_tags_assign"
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
				"property": "resourceId"
			}
		},
		"displayName": "Resource Id",
		"name": "resourceId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_post_resources_resources_tags_assign"
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
				"property": "tagId"
			}
		},
		"displayName": "Tag Id",
		"name": "tagId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_post_resources_resources_tags_assign"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_resources_tags_assign"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_resources_tags_unassign"
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
				"property": "resourceId"
			}
		},
		"displayName": "Resource Id",
		"name": "resourceId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_post_resources_resources_tags_unassign"
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
				"property": "tagId"
			}
		},
		"displayName": "Tag Id",
		"name": "tagId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_post_resources_resources_tags_unassign"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_resources_tags_unassign"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_tags"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_tags"
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
					"Resources"
				],
				"operation": [
					"resources_post_resources_tags"
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
				"displayName": "Slug",
				"name": "slug_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"slug": "={{ $value.slug_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_post_resources_tags"
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
					"Resources"
				],
				"operation": [
					"resources_put_resources_activities"
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
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Activity Type",
				"name": "activityType_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Subject",
				"name": "subject_string"
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
				"displayName": "Occurred At",
				"name": "occurredAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"entityId": "={{ $value.entityId_string }}",
					"activityType": "={{ $value.activityType_string }}",
					"subject": "={{ $value.subject_string }}",
					"body": "={{ $value.body_string }}",
					"occurredAt": "={{ $value.occurredAt_string }}",
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_put_resources_activities"
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
					"Resources"
				],
				"operation": [
					"resources_put_resources_comments"
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
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string"
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
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"entityId": "={{ $value.entityId_string }}",
					"body": "={{ $value.body_string }}",
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_put_resources_comments"
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
					"Resources"
				],
				"operation": [
					"resources_put_resources_resource_types"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"name": "={{ $value.name_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_put_resources_resource_types"
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
					"Resources"
				],
				"operation": [
					"resources_put_resources_resources"
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
				"type": "json",
				"displayName": "Tags",
				"name": "tags_json",
				"default": "[]",
				"required": false
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
					"tags": "={{ JSON.parse($value.tags_json) }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_put_resources_resources"
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
					"Resources"
				],
				"operation": [
					"resources_put_resources_tags"
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
				"displayName": "Slug",
				"name": "slug_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Label",
				"name": "label_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"slug": "={{ $value.slug_string }}",
					"label": "={{ $value.label_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Resources"
				],
				"operation": [
					"resources_put_resources_tags"
				]
			}
		}
	},
	{
		"type": "json",
		"required": true,
		"default": "{}",
		"routing": {
			"request": {
				"body": "={{ JSON.parse($value) }}"
			}
		},
		"displayName": "Body",
		"name": "body_object",
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_delete_sales_adjustment_kinds"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_channels"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_delivery_windows"
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
				"property": "documentId"
			}
		},
		"displayName": "Document Id",
		"name": "documentId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_delete_sales_document_addresses"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "order",
				"value": "order"
			},
			{
				"name": "quote",
				"value": "quote"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "documentKind"
			}
		},
		"displayName": "Document Kind",
		"name": "documentKind_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_delete_sales_document_addresses"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_document_addresses"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_notes"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_order_adjustments"
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
				"property": "orderId"
			}
		},
		"displayName": "Order Id",
		"name": "orderId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_delete_sales_order_adjustments"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_order_line_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_order_lines"
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
				"property": "orderId"
			}
		},
		"displayName": "Order Id",
		"name": "orderId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_delete_sales_order_lines"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_order_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_orders"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_payment_methods"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_payment_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_payments"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_quote_adjustments"
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
				"property": "quoteId"
			}
		},
		"displayName": "Quote Id",
		"name": "quoteId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_delete_sales_quote_adjustments"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_quote_lines"
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
				"property": "quoteId"
			}
		},
		"displayName": "Quote Id",
		"name": "quoteId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_delete_sales_quote_lines"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_quotes"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_shipment_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_shipments"
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
				"displayName": "Order Id",
				"name": "orderId_string"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"orderId": "={{ $value.orderId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_delete_sales_shipments"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_shipping_methods"
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
					"Sales"
				],
				"operation": [
					"sales_delete_sales_tax_rates"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_adjustment_kinds"
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
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
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
				"displayName": "Is Active",
				"name": "isActive_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"id": "={{ $value.id_string }}",
					"ids": "={{ $value.ids_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_channels"
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
				"type": "string",
				"default": "",
				"displayName": "Is Active",
				"name": "isActive_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_delivery_windows"
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
					"documentId": "={{ $value }}"
				}
			}
		},
		"displayName": "Document Id",
		"name": "documentId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_document_addresses"
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
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "order",
						"value": "order"
					},
					{
						"name": "quote",
						"value": "quote"
					}
				],
				"displayName": "Document Kind",
				"name": "documentKind_options"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"documentKind": "={{ $value.documentKind_options }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_document_addresses"
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
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "order",
						"value": "order"
					},
					{
						"name": "quote",
						"value": "quote"
					},
					{
						"name": "invoice",
						"value": "invoice"
					},
					{
						"name": "credit_memo",
						"value": "credit_memo"
					}
				],
				"displayName": "Context Type",
				"name": "contextType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Context Id",
				"name": "contextId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Order Id",
				"name": "orderId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Quote Id",
				"name": "quoteId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"contextType": "={{ $value.contextType_options }}",
					"contextId": "={{ $value.contextId_string }}",
					"orderId": "={{ $value.orderId_string }}",
					"quoteId": "={{ $value.quoteId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_notes"
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
				"displayName": "Order Id",
				"name": "orderId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"orderId": "={{ $value.orderId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_order_adjustments"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_order_line_statuses"
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
				"displayName": "Order Id",
				"name": "orderId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"id": "={{ $value.id_string }}",
					"orderId": "={{ $value.orderId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_order_lines"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_order_statuses"
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
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Id",
				"name": "customerId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Id",
				"name": "channelId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Line Item Count Min",
				"name": "lineItemCountMin_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Line Item Count Max",
				"name": "lineItemCountMax_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Net Min",
				"name": "totalNetMin_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Net Max",
				"name": "totalNetMax_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Gross Min",
				"name": "totalGrossMin_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Gross Max",
				"name": "totalGrossMax_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Date From",
				"name": "dateFrom_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Date To",
				"name": "dateTo_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tag Ids",
				"name": "tagIds_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tag Ids Empty",
				"name": "tagIdsEmpty_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"id": "={{ $value.id_string }}",
					"customerId": "={{ $value.customerId_string }}",
					"channelId": "={{ $value.channelId_string }}",
					"lineItemCountMin": "={{ $value.lineItemCountMin_number }}",
					"lineItemCountMax": "={{ $value.lineItemCountMax_number }}",
					"totalNetMin": "={{ $value.totalNetMin_number }}",
					"totalNetMax": "={{ $value.totalNetMax_number }}",
					"totalGrossMin": "={{ $value.totalGrossMin_number }}",
					"totalGrossMax": "={{ $value.totalGrossMax_number }}",
					"dateFrom": "={{ $value.dateFrom_string }}",
					"dateTo": "={{ $value.dateTo_string }}",
					"tagIds": "={{ $value.tagIds_string }}",
					"tagIdsEmpty": "={{ $value.tagIdsEmpty_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_orders"
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
				"type": "string",
				"default": "",
				"displayName": "Is Active",
				"name": "isActive_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_payment_methods"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_payment_statuses"
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
				"displayName": "Order Id",
				"name": "orderId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Payment Method Id",
				"name": "paymentMethodId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"orderId": "={{ $value.orderId_string }}",
					"paymentMethodId": "={{ $value.paymentMethodId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_payments"
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
				"type": "string",
				"default": "",
				"displayName": "Is Active",
				"name": "isActive_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"isActive": "={{ $value.isActive_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_price_kinds"
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
				"displayName": "Quote Id",
				"name": "quoteId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"quoteId": "={{ $value.quoteId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_quote_adjustments"
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
				"displayName": "Quote Id",
				"name": "quoteId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"id": "={{ $value.id_string }}",
					"quoteId": "={{ $value.quoteId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_quote_lines"
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
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Id",
				"name": "customerId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Id",
				"name": "channelId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Line Item Count Min",
				"name": "lineItemCountMin_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Line Item Count Max",
				"name": "lineItemCountMax_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Net Min",
				"name": "totalNetMin_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Net Max",
				"name": "totalNetMax_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Gross Min",
				"name": "totalGrossMin_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Gross Max",
				"name": "totalGrossMax_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Date From",
				"name": "dateFrom_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Date To",
				"name": "dateTo_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tag Ids",
				"name": "tagIds_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tag Ids Empty",
				"name": "tagIdsEmpty_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"id": "={{ $value.id_string }}",
					"customerId": "={{ $value.customerId_string }}",
					"channelId": "={{ $value.channelId_string }}",
					"lineItemCountMin": "={{ $value.lineItemCountMin_number }}",
					"lineItemCountMax": "={{ $value.lineItemCountMax_number }}",
					"totalNetMin": "={{ $value.totalNetMin_number }}",
					"totalNetMax": "={{ $value.totalNetMax_number }}",
					"totalGrossMin": "={{ $value.totalGrossMin_number }}",
					"totalGrossMax": "={{ $value.totalGrossMax_number }}",
					"dateFrom": "={{ $value.dateFrom_string }}",
					"dateTo": "={{ $value.dateTo_string }}",
					"tagIds": "={{ $value.tagIds_string }}",
					"tagIdsEmpty": "={{ $value.tagIdsEmpty_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_quotes"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Token",
		"name": "token_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_quotes_public_token"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_shipment_statuses"
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
				"displayName": "Order Id",
				"name": "orderId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"orderId": "={{ $value.orderId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_shipments"
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
				"type": "string",
				"default": "",
				"displayName": "Currency",
				"name": "currency_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Is Active",
				"name": "isActive_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"currency": "={{ $value.currency_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_shipping_methods"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_tags"
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
				"type": "string",
				"default": "",
				"displayName": "Country",
				"name": "country_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Region",
				"name": "region_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Id",
				"name": "channelId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Is Compound",
				"name": "isCompound_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"country": "={{ $value.country_string }}",
					"region": "={{ $value.region_string }}",
					"channelId": "={{ $value.channelId_string }}",
					"isCompound": "={{ $value.isCompound_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"withDeleted": "={{ $value.withDeleted_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_get_sales_tax_rates"
				]
			}
		}
	},
	{
		"type": "json",
		"required": true,
		"default": "{}",
		"routing": {
			"request": {
				"body": "={{ JSON.parse($value) }}"
			}
		},
		"displayName": "Body",
		"name": "body_object",
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_adjustment_kinds"
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
				"property": "code"
			}
		},
		"displayName": "Code",
		"name": "code_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_channels"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_channels"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_channels"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_channels"
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
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Website Url",
				"name": "websiteUrl_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contact Email",
				"name": "contactEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contact Phone",
				"name": "contactPhone_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Address Line1",
				"name": "addressLine1_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Address Line2",
				"name": "addressLine2_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "City",
				"name": "city_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Region",
				"name": "region_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Postal Code",
				"name": "postalCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Country",
				"name": "country_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Latitude",
				"name": "latitude_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Longitude",
				"name": "longitude_number"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"websiteUrl": "={{ $value.websiteUrl_string }}",
					"contactEmail": "={{ $value.contactEmail_string }}",
					"contactPhone": "={{ $value.contactPhone_string }}",
					"addressLine1": "={{ $value.addressLine1_string }}",
					"addressLine2": "={{ $value.addressLine2_string }}",
					"city": "={{ $value.city_string }}",
					"region": "={{ $value.region_string }}",
					"postalCode": "={{ $value.postalCode_string }}",
					"country": "={{ $value.country_string }}",
					"latitude": "={{ $value.latitude_number }}",
					"longitude": "={{ $value.longitude_number }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_channels"
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
				"property": "code"
			}
		},
		"displayName": "Code",
		"name": "code_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_delivery_windows"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_delivery_windows"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_delivery_windows"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_delivery_windows"
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
				"type": "number",
				"default": "",
				"displayName": "Lead Time Days",
				"name": "leadTimeDays_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Cutoff Time",
				"name": "cutoffTime_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Timezone",
				"name": "timezone_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"leadTimeDays": "={{ $value.leadTimeDays_number }}",
					"cutoffTime": "={{ $value.cutoffTime_string }}",
					"timezone": "={{ $value.timezone_string }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_delivery_windows"
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
				"property": "addressLine1"
			}
		},
		"displayName": "Address Line1",
		"name": "addressLine1_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_document_addresses"
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
				"property": "documentId"
			}
		},
		"displayName": "Document Id",
		"name": "documentId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_document_addresses"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "order",
				"value": "order"
			},
			{
				"name": "quote",
				"value": "quote"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "documentKind"
			}
		},
		"displayName": "Document Kind",
		"name": "documentKind_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_document_addresses"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_document_addresses"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_document_addresses"
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
				"displayName": "Customer Address Id",
				"name": "customerAddressId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"customerAddressId": "={{ $value.customerAddressId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_document_addresses"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "order",
				"value": "order"
			},
			{
				"name": "quote",
				"value": "quote"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_document_numbers"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_document_numbers"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_document_numbers"
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
				"displayName": "Format",
				"name": "format_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"format": "={{ $value.format_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_document_numbers"
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
				"property": "body"
			}
		},
		"displayName": "Body",
		"name": "body_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_notes"
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
				"property": "contextId"
			}
		},
		"displayName": "Context Id",
		"name": "contextId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_notes"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "order",
				"value": "order"
			},
			{
				"name": "quote",
				"value": "quote"
			},
			{
				"name": "invoice",
				"value": "invoice"
			},
			{
				"name": "credit_memo",
				"value": "credit_memo"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "contextType"
			}
		},
		"displayName": "Context Type",
		"name": "contextType_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_notes"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_notes"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_notes"
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
				"displayName": "Order Id",
				"name": "orderId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Quote Id",
				"name": "quoteId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"orderId": "={{ $value.orderId_string }}",
					"quoteId": "={{ $value.quoteId_string }}",
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_notes"
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
				"property": "orderId"
			}
		},
		"displayName": "Order Id",
		"name": "orderId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_adjustments"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_adjustments"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_adjustments"
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
				"displayName": "Order Line Id",
				"name": "orderLineId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "order",
						"value": "order"
					},
					{
						"name": "line",
						"value": "line"
					}
				],
				"displayName": "Scope",
				"name": "scope_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Kind",
				"name": "kind_string"
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
				"displayName": "Label",
				"name": "label_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Calculator Key",
				"name": "calculatorKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Promotion Id",
				"name": "promotionId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Rate",
				"name": "rate_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Amount Net",
				"name": "amountNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Amount Gross",
				"name": "amountGross_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Custom Fields",
				"name": "custom_fields_object"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Position",
				"name": "position_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"orderLineId": "={{ $value.orderLineId_string }}",
					"scope": "={{ $value.scope_options }}",
					"kind": "={{ $value.kind_string }}",
					"code": "={{ $value.code_string }}",
					"label": "={{ $value.label_string }}",
					"calculatorKey": "={{ $value.calculatorKey_string }}",
					"promotionId": "={{ $value.promotionId_string }}",
					"rate": "={{ $value.rate_number }}",
					"amountNet": "={{ $value.amountNet_number }}",
					"amountGross": "={{ $value.amountGross_number }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"customFields": "={{ JSON.parse($value.custom_fields_object) }}",
					"position": "={{ $value.position_number }}",
					"id": "={{ $value.id_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_adjustments"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_line_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_line_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_line_statuses"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"label": "={{ $value.label_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_line_statuses"
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
				"property": "currencyCode"
			}
		},
		"displayName": "Currency Code",
		"name": "currencyCode_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_lines"
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
				"property": "orderId"
			}
		},
		"displayName": "Order Id",
		"name": "orderId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_lines"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_lines"
				]
			}
		}
	},
	{
		"type": "number",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "quantity"
			}
		},
		"displayName": "Quantity",
		"name": "quantity_number",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_lines"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_lines"
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
				"displayName": "Line Number",
				"name": "lineNumber_number"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "product",
						"value": "product"
					},
					{
						"name": "service",
						"value": "service"
					},
					{
						"name": "shipping",
						"value": "shipping"
					},
					{
						"name": "discount",
						"value": "discount"
					},
					{
						"name": "adjustment",
						"value": "adjustment"
					}
				],
				"displayName": "Kind",
				"name": "kind_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Product Id",
				"name": "productId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Product Variant Id",
				"name": "productVariantId_string"
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
				"displayName": "Comment",
				"name": "comment_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Configuration",
				"name": "configuration_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Promotion Code",
				"name": "promotionCode_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Promotion Snapshot",
				"name": "promotion_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Custom Field Set Id",
				"name": "customFieldSetId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Custom Fields",
				"name": "custom_fields_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Quantity Unit",
				"name": "quantityUnit_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Unit Price Net",
				"name": "unitPriceNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Unit Price Gross",
				"name": "unitPriceGross_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Price Id",
				"name": "priceId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "net",
						"value": "net"
					},
					{
						"name": "gross",
						"value": "gross"
					}
				],
				"displayName": "Price Mode",
				"name": "priceMode_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tax Rate Id",
				"name": "taxRateId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Discount Amount",
				"name": "discountAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Discount Percent",
				"name": "discountPercent_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Tax Rate",
				"name": "taxRate_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Tax Amount",
				"name": "taxAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Net Amount",
				"name": "totalNetAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Gross Amount",
				"name": "totalGrossAmount_number"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Catalog Snapshot",
				"name": "catalog_snapshot_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"lineNumber": "={{ $value.lineNumber_number }}",
					"kind": "={{ $value.kind_options }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"productId": "={{ $value.productId_string }}",
					"productVariantId": "={{ $value.productVariantId_string }}",
					"name": "={{ $value.name_string }}",
					"description": "={{ $value.description_string }}",
					"comment": "={{ $value.comment_string }}",
					"configuration": "={{ JSON.parse($value.configuration_object) }}",
					"promotionCode": "={{ $value.promotionCode_string }}",
					"promotionSnapshot": "={{ JSON.parse($value.promotion_snapshot_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"customFieldSetId": "={{ $value.customFieldSetId_string }}",
					"customFields": "={{ JSON.parse($value.custom_fields_object) }}",
					"quantityUnit": "={{ $value.quantityUnit_string }}",
					"unitPriceNet": "={{ $value.unitPriceNet_number }}",
					"unitPriceGross": "={{ $value.unitPriceGross_number }}",
					"priceId": "={{ $value.priceId_string }}",
					"priceMode": "={{ $value.priceMode_options }}",
					"taxRateId": "={{ $value.taxRateId_string }}",
					"discountAmount": "={{ $value.discountAmount_number }}",
					"discountPercent": "={{ $value.discountPercent_number }}",
					"taxRate": "={{ $value.taxRate_number }}",
					"taxAmount": "={{ $value.taxAmount_number }}",
					"totalNetAmount": "={{ $value.totalNetAmount_number }}",
					"totalGrossAmount": "={{ $value.totalGrossAmount_number }}",
					"catalogSnapshot": "={{ JSON.parse($value.catalog_snapshot_object) }}",
					"id": "={{ $value.id_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_lines"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_statuses"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"label": "={{ $value.label_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_order_statuses"
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
				"property": "currencyCode"
			}
		},
		"displayName": "Currency Code",
		"name": "currencyCode_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_orders"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_orders"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_orders"
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
				"displayName": "Order Number",
				"name": "orderNumber_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "External Reference",
				"name": "externalReference_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Reference",
				"name": "customerReference_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Entity Id",
				"name": "customerEntityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Contact Id",
				"name": "customerContactId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Customer Snapshot",
				"name": "customer_snapshot_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Billing Address Id",
				"name": "billingAddressId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Shipping Address Id",
				"name": "shippingAddressId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Billing Address Snapshot",
				"name": "billing_address_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Shipping Address Snapshot",
				"name": "shipping_address_snapshot_object"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Exchange Rate",
				"name": "exchangeRate_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Fulfillment Status Entry Id",
				"name": "fulfillmentStatusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Payment Status Entry Id",
				"name": "paymentStatusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tax Strategy Key",
				"name": "taxStrategyKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Discount Strategy Key",
				"name": "discountStrategyKey_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Tax Info",
				"name": "tax_info_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Shipping Method Id",
				"name": "shippingMethodId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Shipping Method Code",
				"name": "shippingMethodCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Delivery Window Id",
				"name": "deliveryWindowId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Delivery Window Code",
				"name": "deliveryWindowCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Payment Method Id",
				"name": "paymentMethodId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Payment Method Code",
				"name": "paymentMethodCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Id",
				"name": "channelId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Placed At",
				"name": "placedAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Expected Delivery At",
				"name": "expectedDeliveryAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Due At",
				"name": "dueAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Comments",
				"name": "comments_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Internal Notes",
				"name": "internalNotes_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Shipping Method Snapshot",
				"name": "shipping_method_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Delivery Window Snapshot",
				"name": "delivery_window_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Payment Method Snapshot",
				"name": "payment_method_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Custom Field Set Id",
				"name": "customFieldSetId_string"
			},
			{
				"type": "json",
				"displayName": "Lines",
				"name": "lines_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Adjustments",
				"name": "adjustments_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Tags",
				"name": "tags_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Subtotal Net Amount",
				"name": "subtotalNetAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Subtotal Gross Amount",
				"name": "subtotalGrossAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Discount Total Amount",
				"name": "discountTotalAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Tax Total Amount",
				"name": "taxTotalAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Shipping Net Amount",
				"name": "shippingNetAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Shipping Gross Amount",
				"name": "shippingGrossAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Surcharge Total Amount",
				"name": "surchargeTotalAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Grand Total Net Amount",
				"name": "grandTotalNetAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Grand Total Gross Amount",
				"name": "grandTotalGrossAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Paid Total Amount",
				"name": "paidTotalAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Refunded Total Amount",
				"name": "refundedTotalAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Outstanding Amount",
				"name": "outstandingAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Line Item Count",
				"name": "lineItemCount_number"
			}
		],
		"routing": {
			"request": {
				"body": {
					"orderNumber": "={{ $value.orderNumber_string }}",
					"externalReference": "={{ $value.externalReference_string }}",
					"customerReference": "={{ $value.customerReference_string }}",
					"customerEntityId": "={{ $value.customerEntityId_string }}",
					"customerContactId": "={{ $value.customerContactId_string }}",
					"customerSnapshot": "={{ JSON.parse($value.customer_snapshot_object) }}",
					"billingAddressId": "={{ $value.billingAddressId_string }}",
					"shippingAddressId": "={{ $value.shippingAddressId_string }}",
					"billingAddressSnapshot": "={{ JSON.parse($value.billing_address_snapshot_object) }}",
					"shippingAddressSnapshot": "={{ JSON.parse($value.shipping_address_snapshot_object) }}",
					"exchangeRate": "={{ $value.exchangeRate_number }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"fulfillmentStatusEntryId": "={{ $value.fulfillmentStatusEntryId_string }}",
					"paymentStatusEntryId": "={{ $value.paymentStatusEntryId_string }}",
					"taxStrategyKey": "={{ $value.taxStrategyKey_string }}",
					"discountStrategyKey": "={{ $value.discountStrategyKey_string }}",
					"taxInfo": "={{ JSON.parse($value.tax_info_object) }}",
					"shippingMethodId": "={{ $value.shippingMethodId_string }}",
					"shippingMethodCode": "={{ $value.shippingMethodCode_string }}",
					"deliveryWindowId": "={{ $value.deliveryWindowId_string }}",
					"deliveryWindowCode": "={{ $value.deliveryWindowCode_string }}",
					"paymentMethodId": "={{ $value.paymentMethodId_string }}",
					"paymentMethodCode": "={{ $value.paymentMethodCode_string }}",
					"channelId": "={{ $value.channelId_string }}",
					"placedAt": "={{ $value.placedAt_string }}",
					"expectedDeliveryAt": "={{ $value.expectedDeliveryAt_string }}",
					"dueAt": "={{ $value.dueAt_string }}",
					"comments": "={{ $value.comments_string }}",
					"internalNotes": "={{ $value.internalNotes_string }}",
					"shippingMethodSnapshot": "={{ JSON.parse($value.shipping_method_snapshot_object) }}",
					"deliveryWindowSnapshot": "={{ JSON.parse($value.delivery_window_snapshot_object) }}",
					"paymentMethodSnapshot": "={{ JSON.parse($value.payment_method_snapshot_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"customFieldSetId": "={{ $value.customFieldSetId_string }}",
					"lines": "={{ JSON.parse($value.lines_json) }}",
					"adjustments": "={{ JSON.parse($value.adjustments_json) }}",
					"tags": "={{ JSON.parse($value.tags_json) }}",
					"subtotalNetAmount": "={{ $value.subtotalNetAmount_number }}",
					"subtotalGrossAmount": "={{ $value.subtotalGrossAmount_number }}",
					"discountTotalAmount": "={{ $value.discountTotalAmount_number }}",
					"taxTotalAmount": "={{ $value.taxTotalAmount_number }}",
					"shippingNetAmount": "={{ $value.shippingNetAmount_number }}",
					"shippingGrossAmount": "={{ $value.shippingGrossAmount_number }}",
					"surchargeTotalAmount": "={{ $value.surchargeTotalAmount_number }}",
					"grandTotalNetAmount": "={{ $value.grandTotalNetAmount_number }}",
					"grandTotalGrossAmount": "={{ $value.grandTotalGrossAmount_number }}",
					"paidTotalAmount": "={{ $value.paidTotalAmount_number }}",
					"refundedTotalAmount": "={{ $value.refundedTotalAmount_number }}",
					"outstandingAmount": "={{ $value.outstandingAmount_number }}",
					"lineItemCount": "={{ $value.lineItemCount_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_orders"
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
				"property": "code"
			}
		},
		"displayName": "Code",
		"name": "code_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_payment_methods"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_payment_methods"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_payment_methods"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_payment_methods"
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
				"displayName": "Provider Key",
				"name": "providerKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Terms",
				"name": "terms_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Provider Settings",
				"name": "provider_settings_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"providerKey": "={{ $value.providerKey_string }}",
					"terms": "={{ $value.terms_string }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"providerSettings": "={{ JSON.parse($value.provider_settings_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_payment_methods"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_payment_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_payment_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_payment_statuses"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"label": "={{ $value.label_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_payment_statuses"
				]
			}
		}
	},
	{
		"type": "number",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "amount"
			}
		},
		"displayName": "Amount",
		"name": "amount_number",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_payments"
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
				"property": "currencyCode"
			}
		},
		"displayName": "Currency Code",
		"name": "currencyCode_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_payments"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_payments"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_payments"
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
				"displayName": "Order Id",
				"name": "orderId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Payment Method Id",
				"name": "paymentMethodId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Payment Reference",
				"name": "paymentReference_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Document Status Entry Id",
				"name": "documentStatusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Line Status Entry Id",
				"name": "lineStatusEntryId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Captured Amount",
				"name": "capturedAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Refunded Amount",
				"name": "refundedAmount_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Received At",
				"name": "receivedAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Captured At",
				"name": "capturedAt_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Custom Field Set Id",
				"name": "customFieldSetId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Custom Fields",
				"name": "custom_fields_object"
			},
			{
				"type": "json",
				"displayName": "Allocations",
				"name": "allocations_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"orderId": "={{ $value.orderId_string }}",
					"paymentMethodId": "={{ $value.paymentMethodId_string }}",
					"paymentReference": "={{ $value.paymentReference_string }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"documentStatusEntryId": "={{ $value.documentStatusEntryId_string }}",
					"lineStatusEntryId": "={{ $value.lineStatusEntryId_string }}",
					"capturedAmount": "={{ $value.capturedAmount_number }}",
					"refundedAmount": "={{ $value.refundedAmount_number }}",
					"receivedAt": "={{ $value.receivedAt_string }}",
					"capturedAt": "={{ $value.capturedAt_string }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"customFieldSetId": "={{ $value.customFieldSetId_string }}",
					"customFields": "={{ JSON.parse($value.custom_fields_object) }}",
					"allocations": "={{ JSON.parse($value.allocations_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_payments"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_quote_adjustments"
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
				"property": "quoteId"
			}
		},
		"displayName": "Quote Id",
		"name": "quoteId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_quote_adjustments"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_quote_adjustments"
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
				"displayName": "Quote Line Id",
				"name": "quoteLineId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "order",
						"value": "order"
					},
					{
						"name": "line",
						"value": "line"
					}
				],
				"displayName": "Scope",
				"name": "scope_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Kind",
				"name": "kind_string"
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
				"displayName": "Label",
				"name": "label_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Calculator Key",
				"name": "calculatorKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Promotion Id",
				"name": "promotionId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Rate",
				"name": "rate_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Amount Net",
				"name": "amountNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Amount Gross",
				"name": "amountGross_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Custom Fields",
				"name": "custom_fields_object"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Position",
				"name": "position_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"quoteLineId": "={{ $value.quoteLineId_string }}",
					"scope": "={{ $value.scope_options }}",
					"kind": "={{ $value.kind_string }}",
					"code": "={{ $value.code_string }}",
					"label": "={{ $value.label_string }}",
					"calculatorKey": "={{ $value.calculatorKey_string }}",
					"promotionId": "={{ $value.promotionId_string }}",
					"rate": "={{ $value.rate_number }}",
					"amountNet": "={{ $value.amountNet_number }}",
					"amountGross": "={{ $value.amountGross_number }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"customFields": "={{ JSON.parse($value.custom_fields_object) }}",
					"position": "={{ $value.position_number }}",
					"id": "={{ $value.id_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_quote_adjustments"
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
				"property": "currencyCode"
			}
		},
		"displayName": "Currency Code",
		"name": "currencyCode_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_quote_lines"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_quote_lines"
				]
			}
		}
	},
	{
		"type": "number",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "quantity"
			}
		},
		"displayName": "Quantity",
		"name": "quantity_number",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_quote_lines"
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
				"property": "quoteId"
			}
		},
		"displayName": "Quote Id",
		"name": "quoteId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_quote_lines"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_quote_lines"
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
				"displayName": "Line Number",
				"name": "lineNumber_number"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "product",
						"value": "product"
					},
					{
						"name": "service",
						"value": "service"
					},
					{
						"name": "shipping",
						"value": "shipping"
					},
					{
						"name": "discount",
						"value": "discount"
					},
					{
						"name": "adjustment",
						"value": "adjustment"
					}
				],
				"displayName": "Kind",
				"name": "kind_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Product Id",
				"name": "productId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Product Variant Id",
				"name": "productVariantId_string"
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
				"displayName": "Comment",
				"name": "comment_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Configuration",
				"name": "configuration_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Promotion Code",
				"name": "promotionCode_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Promotion Snapshot",
				"name": "promotion_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Custom Field Set Id",
				"name": "customFieldSetId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Custom Fields",
				"name": "custom_fields_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Quantity Unit",
				"name": "quantityUnit_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Unit Price Net",
				"name": "unitPriceNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Unit Price Gross",
				"name": "unitPriceGross_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Price Id",
				"name": "priceId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "net",
						"value": "net"
					},
					{
						"name": "gross",
						"value": "gross"
					}
				],
				"displayName": "Price Mode",
				"name": "priceMode_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tax Rate Id",
				"name": "taxRateId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Discount Amount",
				"name": "discountAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Discount Percent",
				"name": "discountPercent_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Tax Rate",
				"name": "taxRate_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Tax Amount",
				"name": "taxAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Net Amount",
				"name": "totalNetAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Gross Amount",
				"name": "totalGrossAmount_number"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Catalog Snapshot",
				"name": "catalog_snapshot_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"lineNumber": "={{ $value.lineNumber_number }}",
					"kind": "={{ $value.kind_options }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"productId": "={{ $value.productId_string }}",
					"productVariantId": "={{ $value.productVariantId_string }}",
					"name": "={{ $value.name_string }}",
					"description": "={{ $value.description_string }}",
					"comment": "={{ $value.comment_string }}",
					"configuration": "={{ JSON.parse($value.configuration_object) }}",
					"promotionCode": "={{ $value.promotionCode_string }}",
					"promotionSnapshot": "={{ JSON.parse($value.promotion_snapshot_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"customFieldSetId": "={{ $value.customFieldSetId_string }}",
					"customFields": "={{ JSON.parse($value.custom_fields_object) }}",
					"quantityUnit": "={{ $value.quantityUnit_string }}",
					"unitPriceNet": "={{ $value.unitPriceNet_number }}",
					"unitPriceGross": "={{ $value.unitPriceGross_number }}",
					"priceId": "={{ $value.priceId_string }}",
					"priceMode": "={{ $value.priceMode_options }}",
					"taxRateId": "={{ $value.taxRateId_string }}",
					"discountAmount": "={{ $value.discountAmount_number }}",
					"discountPercent": "={{ $value.discountPercent_number }}",
					"taxRate": "={{ $value.taxRate_number }}",
					"taxAmount": "={{ $value.taxAmount_number }}",
					"totalNetAmount": "={{ $value.totalNetAmount_number }}",
					"totalGrossAmount": "={{ $value.totalGrossAmount_number }}",
					"catalogSnapshot": "={{ JSON.parse($value.catalog_snapshot_object) }}",
					"id": "={{ $value.id_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_quote_lines"
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
				"property": "currencyCode"
			}
		},
		"displayName": "Currency Code",
		"name": "currencyCode_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_quotes"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_quotes"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_quotes"
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
				"displayName": "Quote Number",
				"name": "quoteNumber_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Entity Id",
				"name": "customerEntityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Contact Id",
				"name": "customerContactId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Id",
				"name": "channelId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Customer Snapshot",
				"name": "customer_snapshot_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Billing Address Id",
				"name": "billingAddressId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Shipping Address Id",
				"name": "shippingAddressId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Billing Address Snapshot",
				"name": "billing_address_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Shipping Address Snapshot",
				"name": "shipping_address_snapshot_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Valid From",
				"name": "validFrom_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Valid Until",
				"name": "validUntil_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Comments",
				"name": "comments_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Tax Info",
				"name": "tax_info_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Shipping Method Id",
				"name": "shippingMethodId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Shipping Method Code",
				"name": "shippingMethodCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Delivery Window Id",
				"name": "deliveryWindowId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Delivery Window Code",
				"name": "deliveryWindowCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Payment Method Id",
				"name": "paymentMethodId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Payment Method Code",
				"name": "paymentMethodCode_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Shipping Method Snapshot",
				"name": "shipping_method_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Delivery Window Snapshot",
				"name": "delivery_window_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Payment Method Snapshot",
				"name": "payment_method_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Custom Field Set Id",
				"name": "customFieldSetId_string"
			},
			{
				"type": "json",
				"displayName": "Lines",
				"name": "lines_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Adjustments",
				"name": "adjustments_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Tags",
				"name": "tags_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Subtotal Net Amount",
				"name": "subtotalNetAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Subtotal Gross Amount",
				"name": "subtotalGrossAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Discount Total Amount",
				"name": "discountTotalAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Tax Total Amount",
				"name": "taxTotalAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Grand Total Net Amount",
				"name": "grandTotalNetAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Grand Total Gross Amount",
				"name": "grandTotalGrossAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Line Item Count",
				"name": "lineItemCount_number"
			}
		],
		"routing": {
			"request": {
				"body": {
					"quoteNumber": "={{ $value.quoteNumber_string }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"customerEntityId": "={{ $value.customerEntityId_string }}",
					"customerContactId": "={{ $value.customerContactId_string }}",
					"channelId": "={{ $value.channelId_string }}",
					"customerSnapshot": "={{ JSON.parse($value.customer_snapshot_object) }}",
					"billingAddressId": "={{ $value.billingAddressId_string }}",
					"shippingAddressId": "={{ $value.shippingAddressId_string }}",
					"billingAddressSnapshot": "={{ JSON.parse($value.billing_address_snapshot_object) }}",
					"shippingAddressSnapshot": "={{ JSON.parse($value.shipping_address_snapshot_object) }}",
					"validFrom": "={{ $value.validFrom_string }}",
					"validUntil": "={{ $value.validUntil_string }}",
					"comments": "={{ $value.comments_string }}",
					"taxInfo": "={{ JSON.parse($value.tax_info_object) }}",
					"shippingMethodId": "={{ $value.shippingMethodId_string }}",
					"shippingMethodCode": "={{ $value.shippingMethodCode_string }}",
					"deliveryWindowId": "={{ $value.deliveryWindowId_string }}",
					"deliveryWindowCode": "={{ $value.deliveryWindowCode_string }}",
					"paymentMethodId": "={{ $value.paymentMethodId_string }}",
					"paymentMethodCode": "={{ $value.paymentMethodCode_string }}",
					"shippingMethodSnapshot": "={{ JSON.parse($value.shipping_method_snapshot_object) }}",
					"deliveryWindowSnapshot": "={{ JSON.parse($value.delivery_window_snapshot_object) }}",
					"paymentMethodSnapshot": "={{ JSON.parse($value.payment_method_snapshot_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"customFieldSetId": "={{ $value.customFieldSetId_string }}",
					"lines": "={{ JSON.parse($value.lines_json) }}",
					"adjustments": "={{ JSON.parse($value.adjustments_json) }}",
					"tags": "={{ JSON.parse($value.tags_json) }}",
					"subtotalNetAmount": "={{ $value.subtotalNetAmount_number }}",
					"subtotalGrossAmount": "={{ $value.subtotalGrossAmount_number }}",
					"discountTotalAmount": "={{ $value.discountTotalAmount_number }}",
					"taxTotalAmount": "={{ $value.taxTotalAmount_number }}",
					"grandTotalNetAmount": "={{ $value.grandTotalNetAmount_number }}",
					"grandTotalGrossAmount": "={{ $value.grandTotalGrossAmount_number }}",
					"lineItemCount": "={{ $value.lineItemCount_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_quotes"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_quotes_accept"
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
				"property": "quoteId"
			}
		},
		"displayName": "Quote Id",
		"name": "quoteId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_quotes_convert"
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
				"displayName": "Order Id",
				"name": "orderId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Order Number",
				"name": "orderNumber_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"orderId": "={{ $value.orderId_string }}",
					"orderNumber": "={{ $value.orderNumber_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_quotes_convert"
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
				"property": "quoteId"
			}
		},
		"displayName": "Quote Id",
		"name": "quoteId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_quotes_send"
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
				"displayName": "Valid For Days",
				"name": "validForDays_number"
			}
		],
		"routing": {
			"request": {
				"body": {
					"validForDays": "={{ $value.validForDays_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_quotes_send"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipment_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipment_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipment_statuses"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"label": "={{ $value.label_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipment_statuses"
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
				"property": "orderId"
			}
		},
		"displayName": "Order Id",
		"name": "orderId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipments"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipments"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipments"
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
				"displayName": "Shipment Number",
				"name": "shipmentNumber_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Shipping Method Id",
				"name": "shippingMethodId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Document Status Entry Id",
				"name": "documentStatusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Line Status Entry Id",
				"name": "lineStatusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Carrier Name",
				"name": "carrierName_string"
			},
			{
				"type": "json",
				"displayName": "Tracking Numbers",
				"name": "trackingNumbers_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Shipped At",
				"name": "shippedAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Delivered At",
				"name": "deliveredAt_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Weight Value",
				"name": "weightValue_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Weight Unit",
				"name": "weightUnit_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Declared Value Net",
				"name": "declaredValueNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Declared Value Gross",
				"name": "declaredValueGross_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Notes",
				"name": "notes_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Shipment Address Snapshot",
				"name": "shipment_address_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Custom Fields",
				"name": "custom_fields_object"
			},
			{
				"type": "json",
				"displayName": "Items",
				"name": "items_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"shipmentNumber": "={{ $value.shipmentNumber_string }}",
					"shippingMethodId": "={{ $value.shippingMethodId_string }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"documentStatusEntryId": "={{ $value.documentStatusEntryId_string }}",
					"lineStatusEntryId": "={{ $value.lineStatusEntryId_string }}",
					"carrierName": "={{ $value.carrierName_string }}",
					"trackingNumbers": "={{ JSON.parse($value.trackingNumbers_json) }}",
					"shippedAt": "={{ $value.shippedAt_string }}",
					"deliveredAt": "={{ $value.deliveredAt_string }}",
					"weightValue": "={{ $value.weightValue_number }}",
					"weightUnit": "={{ $value.weightUnit_string }}",
					"declaredValueNet": "={{ $value.declaredValueNet_number }}",
					"declaredValueGross": "={{ $value.declaredValueGross_number }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"notes": "={{ $value.notes_string }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"shipmentAddressSnapshot": "={{ JSON.parse($value.shipment_address_snapshot_object) }}",
					"customFields": "={{ JSON.parse($value.custom_fields_object) }}",
					"items": "={{ JSON.parse($value.items_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipments"
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
				"property": "code"
			}
		},
		"displayName": "Code",
		"name": "code_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipping_methods"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipping_methods"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipping_methods"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipping_methods"
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
				"displayName": "Carrier Code",
				"name": "carrierCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Provider Key",
				"name": "providerKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Service Level",
				"name": "serviceLevel_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Estimated Transit Days",
				"name": "estimatedTransitDays_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Base Rate Net",
				"name": "baseRateNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Base Rate Gross",
				"name": "baseRateGross_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Provider Settings",
				"name": "provider_settings_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"carrierCode": "={{ $value.carrierCode_string }}",
					"providerKey": "={{ $value.providerKey_string }}",
					"serviceLevel": "={{ $value.serviceLevel_string }}",
					"estimatedTransitDays": "={{ $value.estimatedTransitDays_number }}",
					"baseRateNet": "={{ $value.baseRateNet_number }}",
					"baseRateGross": "={{ $value.baseRateGross_number }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"providerSettings": "={{ JSON.parse($value.provider_settings_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_shipping_methods"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_tags"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_tags"
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
				"property": "slug"
			}
		},
		"displayName": "Slug",
		"name": "slug_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_tags"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_tags"
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
				"displayName": "Color",
				"name": "color_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"color": "={{ $value.color_string }}",
					"description": "={{ $value.description_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_tags"
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
				"property": "code"
			}
		},
		"displayName": "Code",
		"name": "code_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_tax_rates"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_tax_rates"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_tax_rates"
				]
			}
		}
	},
	{
		"type": "number",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "rate"
			}
		},
		"displayName": "Rate",
		"name": "rate_number",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_tax_rates"
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
					"Sales"
				],
				"operation": [
					"sales_post_sales_tax_rates"
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
				"displayName": "Country Code",
				"name": "countryCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Region Code",
				"name": "regionCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Postal Code",
				"name": "postalCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "City",
				"name": "city_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Group Id",
				"name": "customerGroupId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Product Category Id",
				"name": "productCategoryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Id",
				"name": "channelId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Priority",
				"name": "priority_number"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Compound",
				"name": "isCompound_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Default",
				"name": "isDefault_boolean"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Starts At",
				"name": "startsAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ends At",
				"name": "endsAt_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"countryCode": "={{ $value.countryCode_string }}",
					"regionCode": "={{ $value.regionCode_string }}",
					"postalCode": "={{ $value.postalCode_string }}",
					"city": "={{ $value.city_string }}",
					"customerGroupId": "={{ $value.customerGroupId_string }}",
					"productCategoryId": "={{ $value.productCategoryId_string }}",
					"channelId": "={{ $value.channelId_string }}",
					"priority": "={{ $value.priority_number }}",
					"isCompound": "={{ $value.isCompound_boolean }}",
					"isDefault": "={{ $value.isDefault_boolean }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"startsAt": "={{ $value.startsAt_string }}",
					"endsAt": "={{ $value.endsAt_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_post_sales_tax_rates"
				]
			}
		}
	},
	{
		"type": "json",
		"required": true,
		"default": "{}",
		"routing": {
			"request": {
				"body": "={{ JSON.parse($value) }}"
			}
		},
		"displayName": "Body",
		"name": "body_object",
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_adjustment_kinds"
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
				"property": "code"
			}
		},
		"displayName": "Code",
		"name": "code_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_channels"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_channels"
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
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Website Url",
				"name": "websiteUrl_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contact Email",
				"name": "contactEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contact Phone",
				"name": "contactPhone_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Address Line1",
				"name": "addressLine1_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Address Line2",
				"name": "addressLine2_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "City",
				"name": "city_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Region",
				"name": "region_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Postal Code",
				"name": "postalCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Country",
				"name": "country_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Latitude",
				"name": "latitude_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Longitude",
				"name": "longitude_number"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"name": "={{ $value.name_string }}",
					"description": "={{ $value.description_string }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"websiteUrl": "={{ $value.websiteUrl_string }}",
					"contactEmail": "={{ $value.contactEmail_string }}",
					"contactPhone": "={{ $value.contactPhone_string }}",
					"addressLine1": "={{ $value.addressLine1_string }}",
					"addressLine2": "={{ $value.addressLine2_string }}",
					"city": "={{ $value.city_string }}",
					"region": "={{ $value.region_string }}",
					"postalCode": "={{ $value.postalCode_string }}",
					"country": "={{ $value.country_string }}",
					"latitude": "={{ $value.latitude_number }}",
					"longitude": "={{ $value.longitude_number }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_channels"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_delivery_windows"
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
				"displayName": "Name",
				"name": "name_string"
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
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Lead Time Days",
				"name": "leadTimeDays_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Cutoff Time",
				"name": "cutoffTime_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Timezone",
				"name": "timezone_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"name": "={{ $value.name_string }}",
					"code": "={{ $value.code_string }}",
					"description": "={{ $value.description_string }}",
					"leadTimeDays": "={{ $value.leadTimeDays_number }}",
					"cutoffTime": "={{ $value.cutoffTime_string }}",
					"timezone": "={{ $value.timezone_string }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_delivery_windows"
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
				"property": "addressLine1"
			}
		},
		"displayName": "Address Line1",
		"name": "addressLine1_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_document_addresses"
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
				"property": "documentId"
			}
		},
		"displayName": "Document Id",
		"name": "documentId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_document_addresses"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "order",
				"value": "order"
			},
			{
				"name": "quote",
				"value": "quote"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "documentKind"
			}
		},
		"displayName": "Document Kind",
		"name": "documentKind_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_document_addresses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_document_addresses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_document_addresses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_document_addresses"
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
				"displayName": "Customer Address Id",
				"name": "customerAddressId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"customerAddressId": "={{ $value.customerAddressId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_document_addresses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_notes"
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
				"displayName": "Body",
				"name": "body_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"body": "={{ $value.body_string }}",
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_notes"
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
				"property": "orderId"
			}
		},
		"displayName": "Order Id",
		"name": "orderId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_adjustments"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_adjustments"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_adjustments"
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
				"displayName": "Order Line Id",
				"name": "orderLineId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "order",
						"value": "order"
					},
					{
						"name": "line",
						"value": "line"
					}
				],
				"displayName": "Scope",
				"name": "scope_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Kind",
				"name": "kind_string"
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
				"displayName": "Label",
				"name": "label_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Calculator Key",
				"name": "calculatorKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Promotion Id",
				"name": "promotionId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Rate",
				"name": "rate_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Amount Net",
				"name": "amountNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Amount Gross",
				"name": "amountGross_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Custom Fields",
				"name": "custom_fields_object"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Position",
				"name": "position_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"orderLineId": "={{ $value.orderLineId_string }}",
					"scope": "={{ $value.scope_options }}",
					"kind": "={{ $value.kind_string }}",
					"code": "={{ $value.code_string }}",
					"label": "={{ $value.label_string }}",
					"calculatorKey": "={{ $value.calculatorKey_string }}",
					"promotionId": "={{ $value.promotionId_string }}",
					"rate": "={{ $value.rate_number }}",
					"amountNet": "={{ $value.amountNet_number }}",
					"amountGross": "={{ $value.amountGross_number }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"customFields": "={{ JSON.parse($value.custom_fields_object) }}",
					"position": "={{ $value.position_number }}",
					"id": "={{ $value.id_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_adjustments"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_line_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_line_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_line_statuses"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"value": "={{ $value.value_string }}",
					"label": "={{ $value.label_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_line_statuses"
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
				"property": "currencyCode"
			}
		},
		"displayName": "Currency Code",
		"name": "currencyCode_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_lines"
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
				"property": "orderId"
			}
		},
		"displayName": "Order Id",
		"name": "orderId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_lines"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_lines"
				]
			}
		}
	},
	{
		"type": "number",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "quantity"
			}
		},
		"displayName": "Quantity",
		"name": "quantity_number",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_lines"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_lines"
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
				"displayName": "Line Number",
				"name": "lineNumber_number"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "product",
						"value": "product"
					},
					{
						"name": "service",
						"value": "service"
					},
					{
						"name": "shipping",
						"value": "shipping"
					},
					{
						"name": "discount",
						"value": "discount"
					},
					{
						"name": "adjustment",
						"value": "adjustment"
					}
				],
				"displayName": "Kind",
				"name": "kind_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Product Id",
				"name": "productId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Product Variant Id",
				"name": "productVariantId_string"
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
				"displayName": "Comment",
				"name": "comment_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Configuration",
				"name": "configuration_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Promotion Code",
				"name": "promotionCode_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Promotion Snapshot",
				"name": "promotion_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Custom Field Set Id",
				"name": "customFieldSetId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Custom Fields",
				"name": "custom_fields_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Quantity Unit",
				"name": "quantityUnit_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Unit Price Net",
				"name": "unitPriceNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Unit Price Gross",
				"name": "unitPriceGross_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Price Id",
				"name": "priceId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "net",
						"value": "net"
					},
					{
						"name": "gross",
						"value": "gross"
					}
				],
				"displayName": "Price Mode",
				"name": "priceMode_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tax Rate Id",
				"name": "taxRateId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Discount Amount",
				"name": "discountAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Discount Percent",
				"name": "discountPercent_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Tax Rate",
				"name": "taxRate_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Tax Amount",
				"name": "taxAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Net Amount",
				"name": "totalNetAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Gross Amount",
				"name": "totalGrossAmount_number"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Catalog Snapshot",
				"name": "catalog_snapshot_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"lineNumber": "={{ $value.lineNumber_number }}",
					"kind": "={{ $value.kind_options }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"productId": "={{ $value.productId_string }}",
					"productVariantId": "={{ $value.productVariantId_string }}",
					"name": "={{ $value.name_string }}",
					"description": "={{ $value.description_string }}",
					"comment": "={{ $value.comment_string }}",
					"configuration": "={{ JSON.parse($value.configuration_object) }}",
					"promotionCode": "={{ $value.promotionCode_string }}",
					"promotionSnapshot": "={{ JSON.parse($value.promotion_snapshot_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"customFieldSetId": "={{ $value.customFieldSetId_string }}",
					"customFields": "={{ JSON.parse($value.custom_fields_object) }}",
					"quantityUnit": "={{ $value.quantityUnit_string }}",
					"unitPriceNet": "={{ $value.unitPriceNet_number }}",
					"unitPriceGross": "={{ $value.unitPriceGross_number }}",
					"priceId": "={{ $value.priceId_string }}",
					"priceMode": "={{ $value.priceMode_options }}",
					"taxRateId": "={{ $value.taxRateId_string }}",
					"discountAmount": "={{ $value.discountAmount_number }}",
					"discountPercent": "={{ $value.discountPercent_number }}",
					"taxRate": "={{ $value.taxRate_number }}",
					"taxAmount": "={{ $value.taxAmount_number }}",
					"totalNetAmount": "={{ $value.totalNetAmount_number }}",
					"totalGrossAmount": "={{ $value.totalGrossAmount_number }}",
					"catalogSnapshot": "={{ JSON.parse($value.catalog_snapshot_object) }}",
					"id": "={{ $value.id_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_lines"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_statuses"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"value": "={{ $value.value_string }}",
					"label": "={{ $value.label_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_order_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_payment_methods"
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
				"displayName": "Name",
				"name": "name_string"
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
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Provider Key",
				"name": "providerKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Terms",
				"name": "terms_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Provider Settings",
				"name": "provider_settings_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"name": "={{ $value.name_string }}",
					"code": "={{ $value.code_string }}",
					"description": "={{ $value.description_string }}",
					"providerKey": "={{ $value.providerKey_string }}",
					"terms": "={{ $value.terms_string }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"providerSettings": "={{ JSON.parse($value.provider_settings_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_payment_methods"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_payment_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_payment_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_payment_statuses"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"value": "={{ $value.value_string }}",
					"label": "={{ $value.label_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_payment_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_payments"
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
				"displayName": "Order Id",
				"name": "orderId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Payment Method Id",
				"name": "paymentMethodId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Payment Reference",
				"name": "paymentReference_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Document Status Entry Id",
				"name": "documentStatusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Line Status Entry Id",
				"name": "lineStatusEntryId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Amount",
				"name": "amount_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Captured Amount",
				"name": "capturedAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Refunded Amount",
				"name": "refundedAmount_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Received At",
				"name": "receivedAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Captured At",
				"name": "capturedAt_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Custom Field Set Id",
				"name": "customFieldSetId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Custom Fields",
				"name": "custom_fields_object"
			},
			{
				"type": "json",
				"displayName": "Allocations",
				"name": "allocations_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"orderId": "={{ $value.orderId_string }}",
					"paymentMethodId": "={{ $value.paymentMethodId_string }}",
					"paymentReference": "={{ $value.paymentReference_string }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"documentStatusEntryId": "={{ $value.documentStatusEntryId_string }}",
					"lineStatusEntryId": "={{ $value.lineStatusEntryId_string }}",
					"amount": "={{ $value.amount_number }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"capturedAmount": "={{ $value.capturedAmount_number }}",
					"refundedAmount": "={{ $value.refundedAmount_number }}",
					"receivedAt": "={{ $value.receivedAt_string }}",
					"capturedAt": "={{ $value.capturedAt_string }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"customFieldSetId": "={{ $value.customFieldSetId_string }}",
					"customFields": "={{ JSON.parse($value.custom_fields_object) }}",
					"allocations": "={{ JSON.parse($value.allocations_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_payments"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_quote_adjustments"
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
				"property": "quoteId"
			}
		},
		"displayName": "Quote Id",
		"name": "quoteId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_quote_adjustments"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_quote_adjustments"
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
				"displayName": "Quote Line Id",
				"name": "quoteLineId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "order",
						"value": "order"
					},
					{
						"name": "line",
						"value": "line"
					}
				],
				"displayName": "Scope",
				"name": "scope_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Kind",
				"name": "kind_string"
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
				"displayName": "Label",
				"name": "label_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Calculator Key",
				"name": "calculatorKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Promotion Id",
				"name": "promotionId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Rate",
				"name": "rate_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Amount Net",
				"name": "amountNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Amount Gross",
				"name": "amountGross_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Custom Fields",
				"name": "custom_fields_object"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Position",
				"name": "position_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"quoteLineId": "={{ $value.quoteLineId_string }}",
					"scope": "={{ $value.scope_options }}",
					"kind": "={{ $value.kind_string }}",
					"code": "={{ $value.code_string }}",
					"label": "={{ $value.label_string }}",
					"calculatorKey": "={{ $value.calculatorKey_string }}",
					"promotionId": "={{ $value.promotionId_string }}",
					"rate": "={{ $value.rate_number }}",
					"amountNet": "={{ $value.amountNet_number }}",
					"amountGross": "={{ $value.amountGross_number }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"customFields": "={{ JSON.parse($value.custom_fields_object) }}",
					"position": "={{ $value.position_number }}",
					"id": "={{ $value.id_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_quote_adjustments"
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
				"property": "currencyCode"
			}
		},
		"displayName": "Currency Code",
		"name": "currencyCode_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_quote_lines"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_quote_lines"
				]
			}
		}
	},
	{
		"type": "number",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "quantity"
			}
		},
		"displayName": "Quantity",
		"name": "quantity_number",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_quote_lines"
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
				"property": "quoteId"
			}
		},
		"displayName": "Quote Id",
		"name": "quoteId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_quote_lines"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_quote_lines"
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
				"displayName": "Line Number",
				"name": "lineNumber_number"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "product",
						"value": "product"
					},
					{
						"name": "service",
						"value": "service"
					},
					{
						"name": "shipping",
						"value": "shipping"
					},
					{
						"name": "discount",
						"value": "discount"
					},
					{
						"name": "adjustment",
						"value": "adjustment"
					}
				],
				"displayName": "Kind",
				"name": "kind_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Product Id",
				"name": "productId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Product Variant Id",
				"name": "productVariantId_string"
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
				"displayName": "Comment",
				"name": "comment_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Configuration",
				"name": "configuration_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Promotion Code",
				"name": "promotionCode_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Promotion Snapshot",
				"name": "promotion_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Custom Field Set Id",
				"name": "customFieldSetId_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Custom Fields",
				"name": "custom_fields_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Quantity Unit",
				"name": "quantityUnit_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Unit Price Net",
				"name": "unitPriceNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Unit Price Gross",
				"name": "unitPriceGross_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Price Id",
				"name": "priceId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "net",
						"value": "net"
					},
					{
						"name": "gross",
						"value": "gross"
					}
				],
				"displayName": "Price Mode",
				"name": "priceMode_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Tax Rate Id",
				"name": "taxRateId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Discount Amount",
				"name": "discountAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Discount Percent",
				"name": "discountPercent_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Tax Rate",
				"name": "taxRate_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Tax Amount",
				"name": "taxAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Net Amount",
				"name": "totalNetAmount_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Total Gross Amount",
				"name": "totalGrossAmount_number"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Catalog Snapshot",
				"name": "catalog_snapshot_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Id",
				"name": "id_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"lineNumber": "={{ $value.lineNumber_number }}",
					"kind": "={{ $value.kind_options }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"productId": "={{ $value.productId_string }}",
					"productVariantId": "={{ $value.productVariantId_string }}",
					"name": "={{ $value.name_string }}",
					"description": "={{ $value.description_string }}",
					"comment": "={{ $value.comment_string }}",
					"configuration": "={{ JSON.parse($value.configuration_object) }}",
					"promotionCode": "={{ $value.promotionCode_string }}",
					"promotionSnapshot": "={{ JSON.parse($value.promotion_snapshot_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"customFieldSetId": "={{ $value.customFieldSetId_string }}",
					"customFields": "={{ JSON.parse($value.custom_fields_object) }}",
					"quantityUnit": "={{ $value.quantityUnit_string }}",
					"unitPriceNet": "={{ $value.unitPriceNet_number }}",
					"unitPriceGross": "={{ $value.unitPriceGross_number }}",
					"priceId": "={{ $value.priceId_string }}",
					"priceMode": "={{ $value.priceMode_options }}",
					"taxRateId": "={{ $value.taxRateId_string }}",
					"discountAmount": "={{ $value.discountAmount_number }}",
					"discountPercent": "={{ $value.discountPercent_number }}",
					"taxRate": "={{ $value.taxRate_number }}",
					"taxAmount": "={{ $value.taxAmount_number }}",
					"totalNetAmount": "={{ $value.totalNetAmount_number }}",
					"totalGrossAmount": "={{ $value.totalGrossAmount_number }}",
					"catalogSnapshot": "={{ JSON.parse($value.catalog_snapshot_object) }}",
					"id": "={{ $value.id_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_quote_lines"
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
				"property": "orderNumberFormat"
			}
		},
		"displayName": "Order Number Format",
		"name": "orderNumberFormat_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_settings_document_numbers"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_settings_document_numbers"
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
				"property": "quoteNumberFormat"
			}
		},
		"displayName": "Quote Number Format",
		"name": "quoteNumberFormat_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_settings_document_numbers"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_settings_document_numbers"
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
				"displayName": "Order Next Number",
				"name": "orderNextNumber_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Quote Next Number",
				"name": "quoteNextNumber_number"
			}
		],
		"routing": {
			"request": {
				"body": {
					"orderNextNumber": "={{ $value.orderNextNumber_number }}",
					"quoteNextNumber": "={{ $value.quoteNextNumber_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_settings_document_numbers"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_settings_order_editing"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_settings_order_editing"
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
				"displayName": "Order Number Format",
				"name": "orderNumberFormat_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Quote Number Format",
				"name": "quoteNumberFormat_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"orderNumberFormat": "={{ $value.orderNumberFormat_string }}",
					"quoteNumberFormat": "={{ $value.quoteNumberFormat_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_settings_order_editing"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_shipment_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_shipment_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_shipment_statuses"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"value": "={{ $value.value_string }}",
					"label": "={{ $value.label_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_shipment_statuses"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_shipments"
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
				"displayName": "Order Id",
				"name": "orderId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Shipment Number",
				"name": "shipmentNumber_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Shipping Method Id",
				"name": "shippingMethodId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Status Entry Id",
				"name": "statusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Document Status Entry Id",
				"name": "documentStatusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Line Status Entry Id",
				"name": "lineStatusEntryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Carrier Name",
				"name": "carrierName_string"
			},
			{
				"type": "json",
				"displayName": "Tracking Numbers",
				"name": "trackingNumbers_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Shipped At",
				"name": "shippedAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Delivered At",
				"name": "deliveredAt_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Weight Value",
				"name": "weightValue_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Weight Unit",
				"name": "weightUnit_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Declared Value Net",
				"name": "declaredValueNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Declared Value Gross",
				"name": "declaredValueGross_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Notes",
				"name": "notes_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Shipment Address Snapshot",
				"name": "shipment_address_snapshot_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Custom Fields",
				"name": "custom_fields_object"
			},
			{
				"type": "json",
				"displayName": "Items",
				"name": "items_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"orderId": "={{ $value.orderId_string }}",
					"shipmentNumber": "={{ $value.shipmentNumber_string }}",
					"shippingMethodId": "={{ $value.shippingMethodId_string }}",
					"statusEntryId": "={{ $value.statusEntryId_string }}",
					"documentStatusEntryId": "={{ $value.documentStatusEntryId_string }}",
					"lineStatusEntryId": "={{ $value.lineStatusEntryId_string }}",
					"carrierName": "={{ $value.carrierName_string }}",
					"trackingNumbers": "={{ JSON.parse($value.trackingNumbers_json) }}",
					"shippedAt": "={{ $value.shippedAt_string }}",
					"deliveredAt": "={{ $value.deliveredAt_string }}",
					"weightValue": "={{ $value.weightValue_number }}",
					"weightUnit": "={{ $value.weightUnit_string }}",
					"declaredValueNet": "={{ $value.declaredValueNet_number }}",
					"declaredValueGross": "={{ $value.declaredValueGross_number }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"notes": "={{ $value.notes_string }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"shipmentAddressSnapshot": "={{ JSON.parse($value.shipment_address_snapshot_object) }}",
					"customFields": "={{ JSON.parse($value.custom_fields_object) }}",
					"items": "={{ JSON.parse($value.items_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_shipments"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_shipping_methods"
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
				"displayName": "Name",
				"name": "name_string"
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
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Carrier Code",
				"name": "carrierCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Provider Key",
				"name": "providerKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Service Level",
				"name": "serviceLevel_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Estimated Transit Days",
				"name": "estimatedTransitDays_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Base Rate Net",
				"name": "baseRateNet_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Base Rate Gross",
				"name": "baseRateGross_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Currency Code",
				"name": "currencyCode_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Active",
				"name": "isActive_boolean"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Provider Settings",
				"name": "provider_settings_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"name": "={{ $value.name_string }}",
					"code": "={{ $value.code_string }}",
					"description": "={{ $value.description_string }}",
					"carrierCode": "={{ $value.carrierCode_string }}",
					"providerKey": "={{ $value.providerKey_string }}",
					"serviceLevel": "={{ $value.serviceLevel_string }}",
					"estimatedTransitDays": "={{ $value.estimatedTransitDays_number }}",
					"baseRateNet": "={{ $value.baseRateNet_number }}",
					"baseRateGross": "={{ $value.baseRateGross_number }}",
					"currencyCode": "={{ $value.currencyCode_string }}",
					"isActive": "={{ $value.isActive_boolean }}",
					"providerSettings": "={{ JSON.parse($value.provider_settings_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_shipping_methods"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_tags"
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
				"displayName": "Slug",
				"name": "slug_string"
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
				"displayName": "Color",
				"name": "color_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"slug": "={{ $value.slug_string }}",
					"label": "={{ $value.label_string }}",
					"color": "={{ $value.color_string }}",
					"description": "={{ $value.description_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_tags"
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
					"Sales"
				],
				"operation": [
					"sales_put_sales_tax_rates"
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
				"displayName": "Name",
				"name": "name_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Code",
				"name": "code_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Rate",
				"name": "rate_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Country Code",
				"name": "countryCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Region Code",
				"name": "regionCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Postal Code",
				"name": "postalCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "City",
				"name": "city_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Customer Group Id",
				"name": "customerGroupId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Product Category Id",
				"name": "productCategoryId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Channel Id",
				"name": "channelId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Priority",
				"name": "priority_number"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Compound",
				"name": "isCompound_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Default",
				"name": "isDefault_boolean"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Starts At",
				"name": "startsAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Ends At",
				"name": "endsAt_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"organizationId": "={{ $value.organizationId_string }}",
					"tenantId": "={{ $value.tenantId_string }}",
					"name": "={{ $value.name_string }}",
					"code": "={{ $value.code_string }}",
					"rate": "={{ $value.rate_number }}",
					"countryCode": "={{ $value.countryCode_string }}",
					"regionCode": "={{ $value.regionCode_string }}",
					"postalCode": "={{ $value.postalCode_string }}",
					"city": "={{ $value.city_string }}",
					"customerGroupId": "={{ $value.customerGroupId_string }}",
					"productCategoryId": "={{ $value.productCategoryId_string }}",
					"channelId": "={{ $value.channelId_string }}",
					"priority": "={{ $value.priority_number }}",
					"isCompound": "={{ $value.isCompound_boolean }}",
					"isDefault": "={{ $value.isDefault_boolean }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}",
					"startsAt": "={{ $value.startsAt_string }}",
					"endsAt": "={{ $value.endsAt_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Sales"
				],
				"operation": [
					"sales_put_sales_tax_rates"
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
					"Staff"
				],
				"operation": [
					"staff_delete_staff_activities"
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
					"Staff"
				],
				"operation": [
					"staff_delete_staff_addresses"
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
					"Staff"
				],
				"operation": [
					"staff_delete_staff_comments"
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
					"Staff"
				],
				"operation": [
					"staff_delete_staff_job_histories"
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
					"Staff"
				],
				"operation": [
					"staff_delete_staff_leave_requests"
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
					"Staff"
				],
				"operation": [
					"staff_delete_staff_team_members"
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
					"Staff"
				],
				"operation": [
					"staff_delete_staff_team_roles"
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
					"Staff"
				],
				"operation": [
					"staff_delete_staff_teams"
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
				"displayName": "Entity Id",
				"name": "entityId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"entityId": "={{ $value.entityId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_get_staff_activities"
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
				"displayName": "Entity Id",
				"name": "entityId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"entityId": "={{ $value.entityId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_get_staff_addresses"
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
				"displayName": "Entity Id",
				"name": "entityId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"entityId": "={{ $value.entityId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_get_staff_comments"
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
				"displayName": "Entity Id",
				"name": "entityId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"entityId": "={{ $value.entityId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_get_staff_job_histories"
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
						"name": "pending",
						"value": "pending"
					},
					{
						"name": "approved",
						"value": "approved"
					},
					{
						"name": "rejected",
						"value": "rejected"
					}
				],
				"displayName": "Status",
				"name": "status_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Member Id",
				"name": "memberId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"status": "={{ $value.status_options }}",
					"memberId": "={{ $value.memberId_string }}",
					"ids": "={{ $value.ids_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_get_staff_leave_requests"
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
				"type": "string",
				"default": "",
				"displayName": "Is Active",
				"name": "isActive_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Team Id",
				"name": "teamId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Role Id",
				"name": "roleId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"teamId": "={{ $value.teamId_string }}",
					"roleId": "={{ $value.roleId_string }}",
					"ids": "={{ $value.ids_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_get_staff_team_members"
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
				"type": "string",
				"default": "",
				"displayName": "Ids",
				"name": "ids_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Team Id",
				"name": "teamId_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"ids": "={{ $value.ids_string }}",
					"teamId": "={{ $value.teamId_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_get_staff_team_roles"
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
				"type": "string",
				"default": "",
				"displayName": "Ids",
				"name": "ids_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Is Active",
				"name": "isActive_string"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"search": "={{ $value.search_string }}",
					"ids": "={{ $value.ids_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_get_staff_teams"
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
				"property": "activityType"
			}
		},
		"displayName": "Activity Type",
		"name": "activityType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_activities"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_activities"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_activities"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_activities"
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
				"displayName": "Subject",
				"name": "subject_string"
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
				"displayName": "Occurred At",
				"name": "occurredAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"subject": "={{ $value.subject_string }}",
					"body": "={{ $value.body_string }}",
					"occurredAt": "={{ $value.occurredAt_string }}",
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_activities"
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
				"property": "addressLine1"
			}
		},
		"displayName": "Address Line1",
		"name": "addressLine1_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_addresses"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_addresses"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_addresses"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_addresses"
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
				"displayName": "Purpose",
				"name": "purpose_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Company Name",
				"name": "companyName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Address Line2",
				"name": "addressLine2_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Building Number",
				"name": "buildingNumber_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Flat Number",
				"name": "flatNumber_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "City",
				"name": "city_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Region",
				"name": "region_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Postal Code",
				"name": "postalCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Country",
				"name": "country_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Latitude",
				"name": "latitude_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Longitude",
				"name": "longitude_number"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Primary",
				"name": "isPrimary_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"name": "={{ $value.name_string }}",
					"purpose": "={{ $value.purpose_string }}",
					"companyName": "={{ $value.companyName_string }}",
					"addressLine2": "={{ $value.addressLine2_string }}",
					"buildingNumber": "={{ $value.buildingNumber_string }}",
					"flatNumber": "={{ $value.flatNumber_string }}",
					"city": "={{ $value.city_string }}",
					"region": "={{ $value.region_string }}",
					"postalCode": "={{ $value.postalCode_string }}",
					"country": "={{ $value.country_string }}",
					"latitude": "={{ $value.latitude_number }}",
					"longitude": "={{ $value.longitude_number }}",
					"isPrimary": "={{ $value.isPrimary_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_addresses"
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
				"property": "body"
			}
		},
		"displayName": "Body",
		"name": "body_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_comments"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_comments"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_comments"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_comments"
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
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_comments"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_job_histories"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_job_histories"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_job_histories"
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
				"property": "startDate"
			}
		},
		"displayName": "Start Date",
		"name": "startDate_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_job_histories"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_job_histories"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_job_histories"
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
				"property": "endDate"
			}
		},
		"displayName": "End Date",
		"name": "endDate_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_leave_requests"
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
				"property": "memberId"
			}
		},
		"displayName": "Member Id",
		"name": "memberId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_leave_requests"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_leave_requests"
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
				"property": "startDate"
			}
		},
		"displayName": "Start Date",
		"name": "startDate_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_leave_requests"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_leave_requests"
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
				"property": "timezone"
			}
		},
		"displayName": "Timezone",
		"name": "timezone_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_leave_requests"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_leave_requests"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_leave_requests_accept"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_leave_requests_accept"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_leave_requests_reject"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_leave_requests_reject"
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
				"property": "displayName"
			}
		},
		"displayName": "Display Name",
		"name": "displayName_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members"
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
				"displayName": "Role Ids",
				"name": "roleIds_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Tags",
				"name": "tags_json",
				"default": "[]",
				"required": false
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
					"roleIds": "={{ JSON.parse($value.roleIds_json) }}",
					"tags": "={{ JSON.parse($value.tags_json) }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members"
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
				"property": "displayName"
			}
		},
		"displayName": "Display Name",
		"name": "displayName_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members_self"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members_self"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members_self"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members_self"
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
				"property": "memberId"
			}
		},
		"displayName": "Member Id",
		"name": "memberId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members_tags_assign"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members_tags_assign"
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
				"property": "tag"
			}
		},
		"displayName": "Tag",
		"name": "tag_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members_tags_assign"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members_tags_assign"
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
				"property": "memberId"
			}
		},
		"displayName": "Member Id",
		"name": "memberId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members_tags_unassign"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members_tags_unassign"
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
				"property": "tag"
			}
		},
		"displayName": "Tag",
		"name": "tag_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members_tags_unassign"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_members_tags_unassign"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_roles"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_roles"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_roles"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_team_roles"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_teams"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_teams"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_teams"
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
					"Staff"
				],
				"operation": [
					"staff_post_staff_teams"
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
					"Staff"
				],
				"operation": [
					"staff_put_staff_activities"
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
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Activity Type",
				"name": "activityType_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Subject",
				"name": "subject_string"
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
				"displayName": "Occurred At",
				"name": "occurredAt_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"entityId": "={{ $value.entityId_string }}",
					"activityType": "={{ $value.activityType_string }}",
					"subject": "={{ $value.subject_string }}",
					"body": "={{ $value.body_string }}",
					"occurredAt": "={{ $value.occurredAt_string }}",
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_put_staff_activities"
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
					"Staff"
				],
				"operation": [
					"staff_put_staff_addresses"
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
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string"
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
				"displayName": "Purpose",
				"name": "purpose_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Company Name",
				"name": "companyName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Address Line1",
				"name": "addressLine1_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Address Line2",
				"name": "addressLine2_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Building Number",
				"name": "buildingNumber_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Flat Number",
				"name": "flatNumber_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "City",
				"name": "city_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Region",
				"name": "region_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Postal Code",
				"name": "postalCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Country",
				"name": "country_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Latitude",
				"name": "latitude_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Longitude",
				"name": "longitude_number"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Primary",
				"name": "isPrimary_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"entityId": "={{ $value.entityId_string }}",
					"name": "={{ $value.name_string }}",
					"purpose": "={{ $value.purpose_string }}",
					"companyName": "={{ $value.companyName_string }}",
					"addressLine1": "={{ $value.addressLine1_string }}",
					"addressLine2": "={{ $value.addressLine2_string }}",
					"buildingNumber": "={{ $value.buildingNumber_string }}",
					"flatNumber": "={{ $value.flatNumber_string }}",
					"city": "={{ $value.city_string }}",
					"region": "={{ $value.region_string }}",
					"postalCode": "={{ $value.postalCode_string }}",
					"country": "={{ $value.country_string }}",
					"latitude": "={{ $value.latitude_number }}",
					"longitude": "={{ $value.longitude_number }}",
					"isPrimary": "={{ $value.isPrimary_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_put_staff_addresses"
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
					"Staff"
				],
				"operation": [
					"staff_put_staff_comments"
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
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string"
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
				"displayName": "Author User Id",
				"name": "authorUserId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"entityId": "={{ $value.entityId_string }}",
					"body": "={{ $value.body_string }}",
					"authorUserId": "={{ $value.authorUserId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_put_staff_comments"
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
					"Staff"
				],
				"operation": [
					"staff_put_staff_job_histories"
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
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string"
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
				"displayName": "Start Date",
				"name": "startDate_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"entityId": "={{ $value.entityId_string }}",
					"name": "={{ $value.name_string }}",
					"startDate": "={{ $value.startDate_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_put_staff_job_histories"
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
					"Staff"
				],
				"operation": [
					"staff_put_staff_leave_requests"
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
				"displayName": "Timezone",
				"name": "timezone_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Member Id",
				"name": "memberId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Start Date",
				"name": "startDate_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "End Date",
				"name": "endDate_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"timezone": "={{ $value.timezone_string }}",
					"memberId": "={{ $value.memberId_string }}",
					"startDate": "={{ $value.startDate_string }}",
					"endDate": "={{ $value.endDate_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_put_staff_leave_requests"
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
					"Staff"
				],
				"operation": [
					"staff_put_staff_team_members"
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
				"displayName": "Display Name",
				"name": "displayName_string"
			},
			{
				"type": "json",
				"displayName": "Role Ids",
				"name": "roleIds_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Tags",
				"name": "tags_json",
				"default": "[]",
				"required": false
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
					"displayName": "={{ $value.displayName_string }}",
					"roleIds": "={{ JSON.parse($value.roleIds_json) }}",
					"tags": "={{ JSON.parse($value.tags_json) }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_put_staff_team_members"
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
					"Staff"
				],
				"operation": [
					"staff_put_staff_team_roles"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"name": "={{ $value.name_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Staff"
				],
				"operation": [
					"staff_put_staff_team_roles"
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
					"Staff"
				],
				"operation": [
					"staff_put_staff_teams"
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
					"Staff"
				],
				"operation": [
					"staff_put_staff_teams"
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
					"Transports"
				],
				"operation": [
					"transports_get_transports_id"
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
					"Transports"
				],
				"operation": [
					"transports_put_transports_id"
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
					"Workflows"
				],
				"operation": [
					"workflows_delete_workflows_definitions_id"
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
					"workflowId": "={{ $value }}"
				}
			}
		},
		"displayName": "Workflow Id",
		"name": "workflowId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
				],
				"operation": [
					"workflows_get_workflows_definitions"
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
				"type": "boolean",
				"default": false,
				"displayName": "Enabled",
				"name": "enabled_boolean"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Search",
				"name": "search_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Limit",
				"name": "limit_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Offset",
				"name": "offset_number"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"enabled": "={{ $value.enabled_boolean }}",
					"search": "={{ $value.search_string }}",
					"limit": "={{ $value.limit_number }}",
					"offset": "={{ $value.offset_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
				],
				"operation": [
					"workflows_get_workflows_definitions"
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
					"Workflows"
				],
				"operation": [
					"workflows_get_workflows_definitions_id"
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
				"displayName": "Event Type",
				"name": "eventType_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Workflow Instance Id",
				"name": "workflowInstanceId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "User Id",
				"name": "userId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Occurred At From",
				"name": "occurredAtFrom_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Occurred At To",
				"name": "occurredAtTo_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "occurredAt",
						"value": "occurredAt"
					},
					{
						"name": "eventType",
						"value": "eventType"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}",
					"eventType": "={{ $value.eventType_string }}",
					"workflowInstanceId": "={{ $value.workflowInstanceId_string }}",
					"userId": "={{ $value.userId_string }}",
					"occurredAtFrom": "={{ $value.occurredAtFrom_string }}",
					"occurredAtTo": "={{ $value.occurredAtTo_string }}",
					"sortField": "={{ $value.sortField_options }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
				],
				"operation": [
					"workflows_get_workflows_events"
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
					"Workflows"
				],
				"operation": [
					"workflows_get_workflows_events_id"
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
				"displayName": "Workflow Id",
				"name": "workflowId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "RUNNING",
						"value": "RUNNING"
					},
					{
						"name": "PAUSED",
						"value": "PAUSED"
					},
					{
						"name": "COMPLETED",
						"value": "COMPLETED"
					},
					{
						"name": "FAILED",
						"value": "FAILED"
					},
					{
						"name": "CANCELLED",
						"value": "CANCELLED"
					},
					{
						"name": "COMPENSATING",
						"value": "COMPENSATING"
					},
					{
						"name": "COMPENSATED",
						"value": "COMPENSATED"
					},
					{
						"name": "WAITING_FOR_ACTIVITIES",
						"value": "WAITING_FOR_ACTIVITIES"
					}
				],
				"displayName": "Status",
				"name": "status_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Correlation Key",
				"name": "correlationKey_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Type",
				"name": "entityType_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Entity Id",
				"name": "entityId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Limit",
				"name": "limit_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Offset",
				"name": "offset_number"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"workflowId": "={{ $value.workflowId_string }}",
					"status": "={{ $value.status_options }}",
					"correlationKey": "={{ $value.correlationKey_string }}",
					"entityType": "={{ $value.entityType_string }}",
					"entityId": "={{ $value.entityId_string }}",
					"limit": "={{ $value.limit_number }}",
					"offset": "={{ $value.offset_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
				],
				"operation": [
					"workflows_get_workflows_instances"
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
					"Workflows"
				],
				"operation": [
					"workflows_get_workflows_instances_id"
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
					"Workflows"
				],
				"operation": [
					"workflows_get_workflows_instances_id_events"
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
				"displayName": "Event Type",
				"name": "eventType_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Limit",
				"name": "limit_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Offset",
				"name": "offset_number"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"eventType": "={{ $value.eventType_string }}",
					"limit": "={{ $value.limit_number }}",
					"offset": "={{ $value.offset_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
				],
				"operation": [
					"workflows_get_workflows_instances_id_events"
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
					"Workflows"
				],
				"operation": [
					"workflows_get_workflows_tasks_id"
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
				"property": "definition",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayName": "Definition",
		"name": "definition_object",
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
				],
				"operation": [
					"workflows_post_workflows_definitions"
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
				"property": "workflowId"
			}
		},
		"displayName": "Workflow Id",
		"name": "workflowId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
				],
				"operation": [
					"workflows_post_workflows_definitions"
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
				"property": "workflowName"
			}
		},
		"displayName": "Workflow Name",
		"name": "workflowName_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
				],
				"operation": [
					"workflows_post_workflows_definitions"
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
				"type": "boolean",
				"default": false,
				"displayName": "Enabled",
				"name": "enabled_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"version": "={{ $value.version_number }}",
					"enabled": "={{ $value.enabled_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
				],
				"operation": [
					"workflows_post_workflows_definitions"
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
				"property": "workflowId"
			}
		},
		"displayName": "Workflow Id",
		"name": "workflowId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
				],
				"operation": [
					"workflows_post_workflows_instances"
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
				"type": "string",
				"default": "",
				"displayName": "Correlation Key",
				"name": "correlationKey_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Initial Context",
				"name": "initial_context_object"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Metadata",
				"name": "metadata_object"
			}
		],
		"routing": {
			"request": {
				"body": {
					"version": "={{ $value.version_number }}",
					"correlationKey": "={{ $value.correlationKey_string }}",
					"initialContext": "={{ JSON.parse($value.initial_context_object) }}",
					"metadata": "={{ JSON.parse($value.metadata_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
				],
				"operation": [
					"workflows_post_workflows_instances"
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
					"Workflows"
				],
				"operation": [
					"workflows_post_workflows_instances_id_advance"
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
					"Workflows"
				],
				"operation": [
					"workflows_post_workflows_instances_id_cancel"
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
					"Workflows"
				],
				"operation": [
					"workflows_post_workflows_instances_id_retry"
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
					"Workflows"
				],
				"operation": [
					"workflows_post_workflows_instances_id_signal"
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
					"Workflows"
				],
				"operation": [
					"workflows_post_workflows_tasks_id_claim"
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
					"Workflows"
				],
				"operation": [
					"workflows_post_workflows_tasks_id_complete"
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
					"Workflows"
				],
				"operation": [
					"workflows_put_workflows_definitions_id"
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
				"displayName": "Definition",
				"name": "definition_object"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Enabled",
				"name": "enabled_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"definition": "={{ JSON.parse($value.definition_object) }}",
					"enabled": "={{ $value.enabled_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Workflows"
				],
				"operation": [
					"workflows_put_workflows_definitions_id"
				]
			}
		}
	}
];

export default properties;
