/* eslint-disable */
// @ts-nocheck
/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * Generated from OpenMercato OpenAPI spec using @algolia/n8n-openapi-node
 * Run `npm run generate:openapi` to regenerate.
 *
 * Source: https://fto-test.freighttech.org/api/docs/openapi
 * Generated: 2026-05-20T11:33:53.693Z
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
				"name": "Messages",
				"value": "Messages",
				"description": "Internal messaging system with attachments, actions, and email forwarding"
			},
			{
				"name": "Customer Portal",
				"value": "Customer Portal",
				"description": "Self-contained customer portal: identity, RBAC, portal shell, and auth flow for FreightTech"
			},
			{
				"name": "Annotations",
				"value": "Annotations",
				"description": "Cell-level annotations and comments for data tables"
			},
			{
				"name": "Shipment Tracking",
				"value": "Shipment Tracking",
				"description": "Ocean container shipment tracking with pluggable carrier adapters and webhooks"
			},
			{
				"name": "Facilities",
				"value": "Facilities",
				"description": "Facility master data (ports, terminals, airports, contractor addresses) for freight operations"
			},
			{
				"name": "Products",
				"value": "Products",
				"description": "Products and carriers master data for freight operations"
			},
			{
				"name": "Contractors",
				"value": "Contractors",
				"description": "Contractor management for freight operations"
			},
			{
				"name": "Back Office",
				"value": "Back Office",
				"description": "Management dashboard with company settings, user admin, and cross-module status widgets"
			},
			{
				"name": "Offers",
				"value": "Offers",
				"description": "Freight offers and RFQ management"
			},
			{
				"name": "Folders",
				"value": "Folders",
				"description": "Lightweight file (teczka) management for FCL and LCL shipments"
			},
			{
				"name": "Freight Documents",
				"value": "Freight Documents",
				"description": "Unified document management with AI-powered OCR extraction, invoice processing, and charge code matching"
			},
			{
				"name": "Invoicing",
				"value": "Invoicing",
				"description": "Invoicing module for managing invoices, approvals, and PDF generation"
			},
			{
				"name": "Email Templates",
				"value": "Email Templates",
				"description": "Configure email layouts and templates for transactional emails"
			},
			{
				"name": "Air Cargo",
				"value": "Air Cargo",
				"description": "Standalone air cargo management for 4R Cargo operations"
			},
			{
				"name": "Frc Rfqs",
				"value": "Frc Rfqs",
				"description": "Request for Quote management for 4R Cargo air freight operations"
			},
			{
				"name": "4R Cargo Offers",
				"value": "4R Cargo Offers",
				"description": "Offer management for 4R Cargo air freight operations"
			},
			{
				"name": "4R Cargo Trucks",
				"value": "4R Cargo Trucks",
				"description": "Truck management for 4R Cargo consolidation operations"
			},
			{
				"name": "4R Cargo Projects",
				"value": "4R Cargo Projects",
				"description": "Project management for 4R Cargo air freight operations"
			},
			{
				"name": "4R Cargo Console",
				"value": "4R Cargo Console",
				"description": "Truck loading console for 4R Cargo - visualize package loading for trucks"
			},
			{
				"name": "Frc Contractors",
				"value": "Frc Contractors",
				"description": "Contractor management for 4R Cargo operations"
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
				"name": "List registered message object types for a message type",
				"value": "messages_get_messages_object_types",
				"action": "List registered message object types for a message type",
				"description": "Requires features: messages.compose",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/messages/object-types"
					}
				}
			},
			{
				"name": "List messages",
				"value": "messages_get_messages",
				"action": "List messages",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/messages"
					}
				}
			},
			{
				"name": "Compose a message",
				"value": "messages_post_messages",
				"action": "Compose a message",
				"description": "Requires features: messages.compose",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/messages"
					}
				}
			},
			{
				"name": "List registered message types",
				"value": "messages_get_messages_types",
				"action": "List registered message types",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/messages/types"
					}
				}
			},
			{
				"name": "Get unread message count",
				"value": "messages_get_messages_unread_count",
				"action": "Get unread message count",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/messages/unread-count"
					}
				}
			},
			{
				"name": "Execute message action",
				"value": "messages_post_messages_id_actions_actionId",
				"action": "Execute message action",
				"description": "Requires features: messages.actions",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/messages/{{ $parameter.id_string }}/actions/{{ $parameter.actionId_string }}"
					}
				}
			},
			{
				"name": "Archive message",
				"value": "messages_put_messages_id_archive",
				"action": "Archive message",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/messages/{{ $parameter.id_string }}/archive"
					}
				}
			},
			{
				"name": "Unarchive message",
				"value": "messages_delete_messages_id_archive",
				"action": "Unarchive message",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/messages/{{ $parameter.id_string }}/archive"
					}
				}
			},
			{
				"name": "List message attachments",
				"value": "messages_get_messages_id_attachments",
				"action": "List message attachments",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/messages/{{ $parameter.id_string }}/attachments"
					}
				}
			},
			{
				"name": "Link attachments to draft message",
				"value": "messages_post_messages_id_attachments",
				"action": "Link attachments to draft message",
				"description": "Requires features: messages.attach_files",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/messages/{{ $parameter.id_string }}/attachments"
					}
				}
			},
			{
				"name": "Unlink attachments from draft message",
				"value": "messages_delete_messages_id_attachments",
				"action": "Unlink attachments from draft message",
				"description": "Requires features: messages.attach_files",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/messages/{{ $parameter.id_string }}/attachments"
					}
				}
			},
			{
				"name": "Read message confirmation status",
				"value": "messages_get_messages_id_confirmation",
				"action": "Read message confirmation status",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/messages/{{ $parameter.id_string }}/confirmation"
					}
				}
			},
			{
				"name": "Archive conversation for current actor",
				"value": "messages_put_messages_id_conversation_archive",
				"action": "Archive conversation for current actor",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/messages/{{ $parameter.id_string }}/conversation/archive"
					}
				}
			},
			{
				"name": "Mark entire conversation as unread for current actor",
				"value": "messages_delete_messages_id_conversation_read",
				"action": "Mark entire conversation as unread for current actor",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/messages/{{ $parameter.id_string }}/conversation/read"
					}
				}
			},
			{
				"name": "Delete conversation for current actor",
				"value": "messages_delete_messages_id_conversation",
				"action": "Delete conversation for current actor",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/messages/{{ $parameter.id_string }}/conversation"
					}
				}
			},
			{
				"name": "Get forward preview for a message",
				"value": "messages_get_messages_id_forward_preview",
				"action": "Get forward preview for a message",
				"description": "Requires features: messages.compose",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/messages/{{ $parameter.id_string }}/forward-preview"
					}
				}
			},
			{
				"name": "Forward a message and optionally include attachments from the forwarded conversation slice",
				"value": "messages_post_messages_id_forward",
				"action": "Forward a message and optionally include attachments from the forwarded conversation slice",
				"description": "Requires features: messages.compose",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/messages/{{ $parameter.id_string }}/forward"
					}
				}
			},
			{
				"name": "Mark message as read",
				"value": "messages_put_messages_id_read",
				"action": "Mark message as read",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/messages/{{ $parameter.id_string }}/read"
					}
				}
			},
			{
				"name": "Mark message as unread",
				"value": "messages_delete_messages_id_read",
				"action": "Mark message as unread",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/messages/{{ $parameter.id_string }}/read"
					}
				}
			},
			{
				"name": "Reply to message",
				"value": "messages_post_messages_id_reply",
				"action": "Reply to message",
				"description": "Requires features: messages.compose",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/messages/{{ $parameter.id_string }}/reply"
					}
				}
			},
			{
				"name": "Get message detail",
				"value": "messages_get_messages_id",
				"action": "Get message detail",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/messages/{{ $parameter.id_string }}"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"body",
						"bodyFormat",
						"canEditDraft",
						"id",
						"isDraft",
						"isRead",
						"objects",
						"priority",
						"recipients",
						"senderUserId"
					]
				}
			},
			{
				"name": "Update draft message",
				"value": "messages_patch_messages_id",
				"action": "Update draft message",
				"description": "Requires features: messages.compose",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/messages/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Delete message for current sender/recipient context",
				"value": "messages_delete_messages_id",
				"action": "Delete message for current sender/recipient context",
				"description": "Requires features: messages.view",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/messages/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Access message via token",
				"value": "messages_get_messages_token_token",
				"action": "Access message via token",
				"description": "Access message via token",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/messages/token/{{ $parameter.token_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
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
				"name": "List contractor contacts with portal-access status",
				"value": "customer_portal_get_customer_portal_admin_contacts",
				"action": "List contractor contacts with portal-access status",
				"description": "Joins contractor_contacts → contractors and LEFT-joins customer_users (by FK, falling back to email match) so the Users tab can show every CRM contact alongside their portal access state. Cross-module read via raw SQL — no ORM relationships are declared into the contractors package.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/admin/contacts"
					}
				}
			},
			{
				"name": "List declared customer-portal ACL features",
				"value": "customer_portal_get_customer_portal_admin_features",
				"action": "List declared customer-portal ACL features",
				"description": "Returns the static catalog of customer-portal features admins can grant.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/admin/features"
					}
				}
			},
			{
				"name": "List customer-portal invitations",
				"value": "customer_portal_get_customer_portal_admin_invitations",
				"action": "List customer-portal invitations",
				"description": "Requires features: customer_portal.invitations.send",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/admin/invitations"
					}
				}
			},
			{
				"name": "Send a new customer-portal invitation",
				"value": "customer_portal_post_customer_portal_admin_invitations",
				"action": "Send a new customer-portal invitation",
				"description": "Creates an invitation, generates a token, and dispatches the invitation email.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/admin/invitations"
					}
				}
			},
			{
				"name": "List customer-portal roles",
				"value": "customer_portal_get_customer_portal_admin_roles",
				"action": "List customer-portal roles",
				"description": "Returns tenant-wide system roles plus the current organization's custom roles.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/admin/roles"
					}
				}
			},
			{
				"name": "Create a custom customer-portal role",
				"value": "customer_portal_post_customer_portal_admin_roles",
				"action": "Create a custom customer-portal role",
				"description": "Creates a per-org custom role. System roles are seeded only.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/admin/roles"
					}
				}
			},
			{
				"name": "Get customer-portal settings for current org",
				"value": "customer_portal_get_customer_portal_admin_settings",
				"action": "Get customer-portal settings for current org",
				"description": "Returns settings, lazy-creating with defaults if absent.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/admin/settings"
					}
				}
			},
			{
				"name": "Update customer-portal settings",
				"value": "customer_portal_patch_customer_portal_admin_settings",
				"action": "Update customer-portal settings",
				"description": "Updates a subset of TTL / email-override fields. Omitted fields are unchanged.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/customer_portal/admin/settings"
					}
				}
			},
			{
				"name": "List customer-portal users (admin)",
				"value": "customer_portal_get_customer_portal_admin_users",
				"action": "List customer-portal users (admin)",
				"description": "Lists portal users for the current org with role assignments.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/admin/users"
					}
				}
			},
			{
				"name": "Cancel a pending customer-portal invitation",
				"value": "customer_portal_post_customer_portal_admin_invitations_id_cancel",
				"action": "Cancel a pending customer-portal invitation",
				"description": "Requires features: customer_portal.invitations.cancel",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/admin/invitations/{{ $parameter.id_string }}/cancel"
					}
				}
			},
			{
				"name": "Resend a pending customer-portal invitation",
				"value": "customer_portal_post_customer_portal_admin_invitations_id_resend",
				"action": "Resend a pending customer-portal invitation",
				"description": "Rotates the invitation token and re-sends the invitation email. Forward-only.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/admin/invitations/{{ $parameter.id_string }}/resend"
					}
				}
			},
			{
				"name": "Hard-delete a customer-portal invitation and any portal account it produced",
				"value": "customer_portal_delete_customer_portal_admin_invitations_id",
				"action": "Hard-delete a customer-portal invitation and any portal account it produced",
				"description": "Removes the invitation row. If the invitation had been accepted, also deletes the resulting CustomerUser, their sessions, role links, direct ACL grants, magic-link tokens, and password-reset tokens. Cross-module data referencing customer_entity_id / person_entity_id (folders, documents, offer drafts, notifications) is preserved.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/customer_portal/admin/invitations/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Get a customer-portal role",
				"value": "customer_portal_get_customer_portal_admin_roles_id",
				"action": "Get a customer-portal role",
				"description": "Requires features: customer_portal.roles.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/admin/roles/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Update a custom customer-portal role",
				"value": "customer_portal_patch_customer_portal_admin_roles_id",
				"action": "Update a custom customer-portal role",
				"description": "Requires features: customer_portal.roles.manage",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/customer_portal/admin/roles/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Delete a custom customer-portal role",
				"value": "customer_portal_delete_customer_portal_admin_roles_id",
				"action": "Delete a custom customer-portal role",
				"description": "Requires features: customer_portal.roles.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/customer_portal/admin/roles/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Replace direct ACL grants for a customer user",
				"value": "customer_portal_patch_customer_portal_admin_users_id_acl",
				"action": "Replace direct ACL grants for a customer user",
				"description": "Replaces the user's direct feature grants. Bumps sessionsRevokedAt.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/customer_portal/admin/users/{{ $parameter.id_string }}/acl"
					}
				}
			},
			{
				"name": "Lock a customer-portal user account",
				"value": "customer_portal_post_customer_portal_admin_users_id_lock",
				"action": "Lock a customer-portal user account",
				"description": "Sets lockedUntil. Omitting `until` (or null) locks indefinitely.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/admin/users/{{ $parameter.id_string }}/lock"
					}
				}
			},
			{
				"name": "Revoke all sessions for a customer-portal user",
				"value": "customer_portal_post_customer_portal_admin_users_id_revoke_sessions",
				"action": "Revoke all sessions for a customer-portal user",
				"description": "Bumps sessionsRevokedAt and soft-deletes existing session rows. Returns the count of rows that were live before the revoke. Forward-only.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/admin/users/{{ $parameter.id_string }}/revoke-sessions"
					}
				}
			},
			{
				"name": "Replace a customer user's role assignments",
				"value": "customer_portal_patch_customer_portal_admin_users_id_roles",
				"action": "Replace a customer user's role assignments",
				"description": "Diffs against existing user-role rows and emits role.assigned/role.revoked per delta. Bumps sessionsRevokedAt.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/customer_portal/admin/users/{{ $parameter.id_string }}/roles"
					}
				}
			},
			{
				"name": "Get a customer-portal user with role + direct ACL info",
				"value": "customer_portal_get_customer_portal_admin_users_id",
				"action": "Get a customer-portal user with role + direct ACL info",
				"description": "Requires features: customer_portal.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/admin/users/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Unlock a customer-portal user account",
				"value": "customer_portal_post_customer_portal_admin_users_id_unlock",
				"action": "Unlock a customer-portal user account",
				"description": "Requires features: customer_portal.users.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/admin/users/{{ $parameter.id_string }}/unlock"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
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
				"name": "List folders with outstanding required documents",
				"value": "customer_portal_get_customer_portal_portal_documents_outstanding",
				"action": "List folders with outstanding required documents",
				"description": "Returns folders in scope where at least one required document slot is missing. Per-folder `requirements` is the list of missing extraction labels (e.g. `sea_freight_bill_of_lading`).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/documents/outstanding"
					}
				}
			},
			{
				"name": "Upload a customer document for a folder",
				"value": "customer_portal_post_customer_portal_portal_documents_upload",
				"action": "Upload a customer document for a folder",
				"description": "Multipart upload (`file` + JSON `metadata` containing `folderId` and `documentLabel`). The label must be currently on the folder's outstanding requirements list (server-side re-check). Persists in `freight_documents` and creates a `freight_document_folder_links` row with `link_source=manual_upload`, customer provenance, and the customer-claimed label.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/portal/documents/upload"
					}
				}
			},
			{
				"name": "List the customer's files",
				"value": "customer_portal_get_customer_portal_portal_files",
				"action": "List the customer's files",
				"description": "Returns folders where the authenticated customer's contractor matches any of: client, shipper, consignee, notify. Excludes folders where the contractor only matches as carrier.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/files"
					}
				}
			},
			{
				"name": "Customer-portal locations list",
				"value": "customer_portal_get_customer_portal_portal_locations",
				"action": "Customer-portal locations list",
				"description": "Returns facilities scoped to the customer's contractor — both staff-curated and customer-added (Google Places) entries.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/locations"
					}
				}
			},
			{
				"name": "List offers visible to the customer",
				"value": "customer_portal_get_customer_portal_portal_offers",
				"action": "List offers visible to the customer",
				"description": "Returns offers in `sent` or `accepted` status whose `contractorId` matches the customer's contractor. Restaurant-menu mode — no totals, no per-line quantities. Each row carries: number, route summary (origin → destination), carrier(s), transport mode, valid-until, status, and groupId for client-side variant grouping.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/offers"
					}
				}
			},
			{
				"name": "Customer-portal Google Places autocomplete",
				"value": "customer_portal_get_customer_portal_portal_places_autocomplete",
				"action": "Customer-portal Google Places autocomplete",
				"description": "Server-proxied autocomplete. Customer-portal users only. Returns empty suggestions when the API key is not configured (graceful degradation — UI falls back to facility list).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/places/autocomplete"
					}
				}
			},
			{
				"name": "Customer-portal Google Places details",
				"value": "customer_portal_get_customer_portal_portal_places_details",
				"action": "Customer-portal Google Places details",
				"description": "Server-proxied place details for a placeId returned from autocomplete.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/places/details"
					}
				}
			},
			{
				"name": "Cancel a pending customer draft folder request",
				"value": "customer_portal_post_customer_portal_portal_folders_id_cancel_draft",
				"action": "Cancel a pending customer draft folder request",
				"description": "Customer-initiated cancel. Authorized only for the customer user who originally submitted the draft. Pre-condition: `customer_draft_status=pending_approval`.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/portal/folders/{{ $parameter.id_string }}/cancel-draft"
					}
				}
			},
			{
				"name": "Submit a customer transport request from an offer (\"Utwórz zlecenie\")",
				"value": "customer_portal_post_customer_portal_portal_offers_id_convert_to_draft",
				"action": "Submit a customer transport request from an offer (\"Utwórz zlecenie\")",
				"description": "Customer-initiated convert: creates a folder with `customer_draft_status=pending_approval`. No cost lines are copied — staff apply pricing on approval based on the FK link to the offer. Customer-supplied Google Places addresses are materialized as `Facility` rows scoped to the customer's contractor. Container plan is expanded into one `FolderUnit` per container; planned ETD is written into the main `FolderLeg`.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/portal/offers/{{ $parameter.id_string }}/convert-to-draft"
					}
				}
			},
			{
				"name": "Download the customer-facing offer PDF",
				"value": "customer_portal_get_customer_portal_portal_offers_id_pdf",
				"action": "Download the customer-facing offer PDF",
				"description": "Streams the existing offer PDF when present; otherwise generates one on-the-fly. Same scope check (contractor + sent/accepted) as the offer detail endpoint.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/offers/{{ $parameter.id_string }}/pdf"
					}
				}
			},
			{
				"name": "Get a single customer-visible offer",
				"value": "customer_portal_get_customer_portal_portal_offers_id",
				"action": "Get a single customer-visible offer",
				"description": "Returns the offer detail with per-OfferCalculation cards (route, containers, menu-style line list — product, basis, container type, rate, currency). Internal cost data (buy price, rate, quantity, totals, guardian IDs) is excluded by the central serializer (`serializeOfferForCustomer`). Carriers resolved by name when present. Group variants surfaced when the offer has siblings.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Subscribe to portal events via SSE (Portal Event Bridge)",
				"value": "customer_portal_get_customer_portal_portal_events_stream",
				"action": "Subscribe to portal events via SSE (Portal Event Bridge)",
				"description": "Long-lived SSE connection that receives server-side events marked with portalBroadcast: true. Events are filtered by the customer's tenant and organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/events/stream"
					}
				}
			},
			{
				"name": "Check customer portal feature access",
				"value": "customer_portal_post_customer_portal_portal_feature_check",
				"action": "Check customer portal feature access",
				"description": "Checks which of the requested features the authenticated customer user has. Used by portal menu injection for feature-gating.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/portal/feature-check"
					}
				}
			},
			{
				"name": "Get a single file",
				"value": "customer_portal_get_customer_portal_portal_files_id",
				"action": "Get a single file",
				"description": "Returns file detail (legs + units) when the authenticated customer is linked to it via client/shipper/consignee/notify. Returns 404 (not 403) when the file is not in scope to avoid leaking existence.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/files/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Customer logout",
				"value": "customer_portal_post_customer_portal_portal_logout",
				"action": "Customer logout",
				"description": "Revokes the current session and clears authentication cookies.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/portal/logout"
					}
				}
			},
			{
				"name": "Portal sidebar navigation",
				"value": "customer_portal_get_customer_portal_portal_nav",
				"action": "Portal sidebar navigation",
				"description": "Returns the portal sidebar for the authenticated customer. Items are derived from each portal page's `nav` metadata and filtered by `requireCustomerFeatures` against the customer's grants (wildcards honored).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/nav"
					}
				}
			},
			{
				"name": "Dismiss notification",
				"value": "customer_portal_put_customer_portal_portal_notifications_id_dismiss",
				"action": "Dismiss notification",
				"description": "Dismisses a single notification for the authenticated customer user.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customer_portal/portal/notifications/{{ $parameter.id_string }}/dismiss"
					}
				}
			},
			{
				"name": "Mark notification as read",
				"value": "customer_portal_put_customer_portal_portal_notifications_id_read",
				"action": "Mark notification as read",
				"description": "Marks a single notification as read for the authenticated customer user.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customer_portal/portal/notifications/{{ $parameter.id_string }}/read"
					}
				}
			},
			{
				"name": "Mark all notifications as read",
				"value": "customer_portal_put_customer_portal_portal_notifications_mark_all_read",
				"action": "Mark all notifications as read",
				"description": "Marks all unread notifications as read for the authenticated customer user.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customer_portal/portal/notifications/mark-all-read"
					}
				}
			},
			{
				"name": "Get unread notification count",
				"value": "customer_portal_get_customer_portal_portal_notifications_unread_count",
				"action": "Get unread notification count",
				"description": "Returns the number of unread notifications for the authenticated customer user.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/notifications/unread-count"
					}
				}
			},
			{
				"name": "List customer notifications",
				"value": "customer_portal_get_customer_portal_portal_notifications",
				"action": "List customer notifications",
				"description": "Returns paginated notifications for the authenticated customer user. Dismissed notifications are excluded by default unless ?status=dismissed is specified.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/notifications"
					}
				}
			},
			{
				"name": "Get customer profile",
				"value": "customer_portal_get_customer_portal_portal_profile",
				"action": "Get customer profile",
				"description": "Returns the authenticated customer user profile with roles and permissions.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/profile"
					}
				}
			},
			{
				"name": "Update customer profile",
				"value": "customer_portal_put_customer_portal_portal_profile",
				"action": "Update customer profile",
				"description": "Updates the authenticated customer user profile.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customer_portal/portal/profile"
					}
				}
			},
			{
				"name": "Revoke a customer session",
				"value": "customer_portal_delete_customer_portal_portal_sessions_id",
				"action": "Revoke a customer session",
				"description": "Revokes a specific session (not the current one).",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/customer_portal/portal/sessions/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Refresh customer JWT from session token",
				"value": "customer_portal_post_customer_portal_portal_sessions_refresh",
				"action": "Refresh customer JWT from session token",
				"description": "Uses the session cookie to issue a fresh JWT access token.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/portal/sessions-refresh"
					}
				}
			},
			{
				"name": "List customer sessions",
				"value": "customer_portal_get_customer_portal_portal_sessions",
				"action": "List customer sessions",
				"description": "Returns active sessions for the authenticated customer user.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/sessions"
					}
				}
			},
			{
				"name": "Update portal user roles",
				"value": "customer_portal_put_customer_portal_portal_users_id_roles",
				"action": "Update portal user roles",
				"description": "Assigns new roles to a company portal user.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/customer_portal/portal/users/{{ $parameter.id_string }}/roles"
					}
				}
			},
			{
				"name": "Delete a company portal user",
				"value": "customer_portal_delete_customer_portal_portal_users_id",
				"action": "Delete a company portal user",
				"description": "Soft deletes a portal user and revokes all their sessions.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/customer_portal/portal/users/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Invite a user to the company portal",
				"value": "customer_portal_post_customer_portal_portal_users_invite",
				"action": "Invite a user to the company portal",
				"description": "Creates an invitation for a new user to join the company portal.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/customer_portal/portal/users-invite"
					}
				}
			},
			{
				"name": "List company portal users",
				"value": "customer_portal_get_customer_portal_portal_users",
				"action": "List company portal users",
				"description": "Lists portal users associated with the same company. Paginated (default pageSize 25, max 100).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/customer_portal/portal/users"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal"
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
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "List bicconfigs",
				"value": "shipment_tracking_get_shipment_tracking_bic_configs",
				"action": "List bicconfigs",
				"description": "Returns a paginated collection of bicconfigs scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/shipment_tracking/bic-configs"
					}
				}
			},
			{
				"name": "Update bicconfig",
				"value": "shipment_tracking_put_shipment_tracking_bic_configs",
				"action": "Update bicconfig",
				"description": "Creates or updates the BIC API configuration for the current organization.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/shipment_tracking/bic-configs"
					}
				}
			},
			{
				"name": "Delete bicconfig",
				"value": "shipment_tracking_delete_shipment_tracking_bic_configs",
				"action": "Delete bicconfig",
				"description": "Deletes the BIC API configuration.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/shipment_tracking/bic-configs"
					}
				}
			},
			{
				"name": "POST /shipment_tracking/bic-configs/test",
				"value": "shipment_tracking_post_shipment_tracking_bic_configs_test",
				"action": "POST /shipment_tracking/bic-configs/test",
				"description": "Requires features: shipment_tracking.carrier_configs.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/shipment_tracking/bic-configs/test"
					}
				}
			},
			{
				"name": "List trackingevents",
				"value": "shipment_tracking_get_shipment_tracking_cargo_events",
				"action": "List trackingevents",
				"description": "Returns a paginated collection of trackingevents scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/shipment_tracking/cargo-events"
					}
				}
			},
			{
				"name": "List carrierconfigs",
				"value": "shipment_tracking_get_shipment_tracking_carrier_configs",
				"action": "List carrierconfigs",
				"description": "Returns a paginated collection of carrierconfigs scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/shipment_tracking/carrier-configs"
					}
				}
			},
			{
				"name": "Create carrierconfig",
				"value": "shipment_tracking_post_shipment_tracking_carrier_configs",
				"action": "Create carrierconfig",
				"description": "Creates a new carrier configuration.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/shipment_tracking/carrier-configs"
					}
				}
			},
			{
				"name": "Update carrierconfig",
				"value": "shipment_tracking_put_shipment_tracking_carrier_configs",
				"action": "Update carrierconfig",
				"description": "Updates an existing carrier configuration.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/shipment_tracking/carrier-configs"
					}
				}
			},
			{
				"name": "Delete carrierconfig",
				"value": "shipment_tracking_delete_shipment_tracking_carrier_configs",
				"action": "Delete carrierconfig",
				"description": "Deletes a carrier configuration.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/shipment_tracking/carrier-configs"
					}
				}
			},
			{
				"name": "List locationoverrides",
				"value": "shipment_tracking_get_shipment_tracking_location_overrides",
				"action": "List locationoverrides",
				"description": "Returns a paginated collection of locationoverrides scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/shipment_tracking/location-overrides"
					}
				}
			},
			{
				"name": "Create locationoverride",
				"value": "shipment_tracking_post_shipment_tracking_location_overrides",
				"action": "Create locationoverride",
				"description": "Creates a new location override for BIC/SMDG facility data correction.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/shipment_tracking/location-overrides"
					}
				}
			},
			{
				"name": "Update locationoverride",
				"value": "shipment_tracking_put_shipment_tracking_location_overrides",
				"action": "Update locationoverride",
				"description": "Updates an existing location override.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/shipment_tracking/location-overrides"
					}
				}
			},
			{
				"name": "Delete locationoverride",
				"value": "shipment_tracking_delete_shipment_tracking_location_overrides",
				"action": "Delete locationoverride",
				"description": "Deletes a location override (soft delete).",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/shipment_tracking/location-overrides"
					}
				}
			},
			{
				"name": "List shipments",
				"value": "shipment_tracking_get_shipment_tracking_shipments",
				"action": "List shipments",
				"description": "Returns a paginated collection of shipments scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/shipment_tracking/shipments"
					}
				}
			},
			{
				"name": "Create shipment",
				"value": "shipment_tracking_post_shipment_tracking_shipments",
				"action": "Create shipment",
				"description": "Creates a new shipment.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/shipment_tracking/shipments"
					}
				}
			},
			{
				"name": "Update shipment",
				"value": "shipment_tracking_put_shipment_tracking_shipments",
				"action": "Update shipment",
				"description": "Updates an existing shipment by id.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/shipment_tracking/shipments"
					}
				}
			},
			{
				"name": "Delete shipment",
				"value": "shipment_tracking_delete_shipment_tracking_shipments",
				"action": "Delete shipment",
				"description": "Soft-deletes a shipment by id.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/shipment_tracking/shipments"
					}
				}
			},
			{
				"name": "List trackingjobs",
				"value": "shipment_tracking_get_shipment_tracking_tracking_jobs",
				"action": "List trackingjobs",
				"description": "Returns a paginated collection of trackingjobs scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/shipment_tracking/tracking-jobs"
					}
				}
			},
			{
				"name": "Create trackingjob",
				"value": "shipment_tracking_post_shipment_tracking_tracking_jobs",
				"action": "Create trackingjob",
				"description": "Creates a new tracking job. The system will auto-discover containers from carrier events.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/shipment_tracking/tracking-jobs"
					}
				}
			},
			{
				"name": "Update trackingjob",
				"value": "shipment_tracking_put_shipment_tracking_tracking_jobs",
				"action": "Update trackingjob",
				"description": "Pauses a tracking job.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/shipment_tracking/tracking-jobs"
					}
				}
			},
			{
				"name": "Delete trackingjob",
				"value": "shipment_tracking_delete_shipment_tracking_tracking_jobs",
				"action": "Delete trackingjob",
				"description": "Deactivates a tracking job.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/shipment_tracking/tracking-jobs"
					}
				}
			},
			{
				"name": "POST /shipment_tracking/tracking-jobs/sync",
				"value": "shipment_tracking_post_shipment_tracking_tracking_jobs_sync",
				"action": "POST /shipment_tracking/tracking-jobs/sync",
				"description": "Requires features: shipment_tracking.tracking_jobs.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/shipment_tracking/tracking-jobs/sync"
					}
				}
			},
			{
				"name": "List webhookdeliveries",
				"value": "shipment_tracking_get_shipment_tracking_webhooks_deliveries",
				"action": "List webhookdeliveries",
				"description": "Returns a paginated collection of webhookdeliveries scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/shipment_tracking/webhooks/deliveries"
					}
				}
			},
			{
				"name": "List webhooks",
				"value": "shipment_tracking_get_shipment_tracking_webhooks",
				"action": "List webhooks",
				"description": "Returns a paginated collection of webhooks scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/shipment_tracking/webhooks"
					}
				}
			},
			{
				"name": "Create webhook",
				"value": "shipment_tracking_post_shipment_tracking_webhooks",
				"action": "Create webhook",
				"description": "Creates a new webhook subscription.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/shipment_tracking/webhooks"
					}
				}
			},
			{
				"name": "Update webhook",
				"value": "shipment_tracking_put_shipment_tracking_webhooks",
				"action": "Update webhook",
				"description": "Updates an existing webhook.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/shipment_tracking/webhooks"
					}
				}
			},
			{
				"name": "Delete webhook",
				"value": "shipment_tracking_delete_shipment_tracking_webhooks",
				"action": "Delete webhook",
				"description": "Deletes a webhook.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/shipment_tracking/webhooks"
					}
				}
			},
			{
				"name": "POST /shipment_tracking/webhooks/test",
				"value": "shipment_tracking_post_shipment_tracking_webhooks_test",
				"action": "POST /shipment_tracking/webhooks/test",
				"description": "Requires features: shipment_tracking.webhooks.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/shipment_tracking/webhooks/test"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Shipment Tracking"
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
				"name": "GET /facilities/airports",
				"value": "facilities_get_facilities_airports",
				"action": "GET /facilities/airports",
				"description": "Requires features: facilities.airports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/airports"
					}
				}
			},
			{
				"name": "POST /facilities/airports",
				"value": "facilities_post_facilities_airports",
				"action": "POST /facilities/airports",
				"description": "Requires features: facilities.airports.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/facilities/airports"
					}
				}
			},
			{
				"name": "GET /facilities/contractor-addresses",
				"value": "facilities_get_facilities_contractor_addresses",
				"action": "GET /facilities/contractor-addresses",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/contractor-addresses"
					}
				}
			},
			{
				"name": "POST /facilities/contractor-addresses",
				"value": "facilities_post_facilities_contractor_addresses",
				"action": "POST /facilities/contractor-addresses",
				"description": "Requires features: contractors.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/facilities/contractor-addresses"
					}
				}
			},
			{
				"name": "POST /facilities/import",
				"value": "facilities_post_facilities_import",
				"action": "POST /facilities/import",
				"description": "Requires features: facilities.import",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/facilities/import"
					}
				}
			},
			{
				"name": "GET /facilities/locations",
				"value": "facilities_get_facilities_locations",
				"action": "GET /facilities/locations",
				"description": "Requires features: facilities.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/locations"
					}
				}
			},
			{
				"name": "GET /facilities/places/autocomplete",
				"value": "facilities_get_facilities_places_autocomplete",
				"action": "GET /facilities/places/autocomplete",
				"description": "Requires features: facilities.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/places/autocomplete"
					}
				}
			},
			{
				"name": "GET /facilities/places/details",
				"value": "facilities_get_facilities_places_details",
				"action": "GET /facilities/places/details",
				"description": "Requires features: facilities.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/places/details"
					}
				}
			},
			{
				"name": "GET /facilities/places",
				"value": "facilities_get_facilities_places",
				"action": "GET /facilities/places",
				"description": "Requires features: facilities.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/places"
					}
				}
			},
			{
				"name": "GET /facilities/ports",
				"value": "facilities_get_facilities_ports",
				"action": "GET /facilities/ports",
				"description": "Requires features: facilities.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/ports"
					}
				}
			},
			{
				"name": "POST /facilities/ports",
				"value": "facilities_post_facilities_ports",
				"action": "POST /facilities/ports",
				"description": "Requires features: facilities.ports.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/facilities/ports"
					}
				}
			},
			{
				"name": "GET /facilities/table-config",
				"value": "facilities_get_facilities_table_config",
				"action": "GET /facilities/table-config",
				"description": "Requires features: facilities.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/table-config"
					}
				}
			},
			{
				"name": "GET /facilities/terminals",
				"value": "facilities_get_facilities_terminals",
				"action": "GET /facilities/terminals",
				"description": "Requires features: facilities.terminals.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/terminals"
					}
				}
			},
			{
				"name": "POST /facilities/terminals",
				"value": "facilities_post_facilities_terminals",
				"action": "POST /facilities/terminals",
				"description": "Requires features: facilities.terminals.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/facilities/terminals"
					}
				}
			},
			{
				"name": "POST /facilities/unified",
				"value": "facilities_post_facilities_unified",
				"action": "POST /facilities/unified",
				"description": "Requires features: facilities.ports.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/facilities/unified"
					}
				}
			},
			{
				"name": "GET /facilities/airports/{id}",
				"value": "facilities_get_facilities_airports_id",
				"action": "GET /facilities/airports/{id}",
				"description": "Requires features: facilities.airports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/airports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /facilities/airports/{id}",
				"value": "facilities_put_facilities_airports_id",
				"action": "PUT /facilities/airports/{id}",
				"description": "Requires features: facilities.airports.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/facilities/airports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /facilities/airports/{id}",
				"value": "facilities_delete_facilities_airports_id",
				"action": "DELETE /facilities/airports/{id}",
				"description": "Requires features: facilities.airports.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/facilities/airports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /facilities/locations/{id}",
				"value": "facilities_get_facilities_locations_id",
				"action": "GET /facilities/locations/{id}",
				"description": "Requires features: facilities.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/locations/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /facilities/ports/{id}",
				"value": "facilities_get_facilities_ports_id",
				"action": "GET /facilities/ports/{id}",
				"description": "Requires features: facilities.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/ports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /facilities/ports/{id}",
				"value": "facilities_put_facilities_ports_id",
				"action": "PUT /facilities/ports/{id}",
				"description": "Requires features: facilities.ports.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/facilities/ports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /facilities/ports/{id}",
				"value": "facilities_delete_facilities_ports_id",
				"action": "DELETE /facilities/ports/{id}",
				"description": "Requires features: facilities.ports.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/facilities/ports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /facilities/terminals/{id}",
				"value": "facilities_get_facilities_terminals_id",
				"action": "GET /facilities/terminals/{id}",
				"description": "Requires features: facilities.terminals.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/terminals/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /facilities/terminals/{id}",
				"value": "facilities_put_facilities_terminals_id",
				"action": "PUT /facilities/terminals/{id}",
				"description": "Requires features: facilities.terminals.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/facilities/terminals/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /facilities/terminals/{id}",
				"value": "facilities_delete_facilities_terminals_id",
				"action": "DELETE /facilities/terminals/{id}",
				"description": "Requires features: facilities.terminals.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/facilities/terminals/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /facilities/unified/{id}",
				"value": "facilities_get_facilities_unified_id",
				"action": "GET /facilities/unified/{id}",
				"description": "Requires features: facilities.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/facilities/unified/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /facilities/unified/{id}",
				"value": "facilities_put_facilities_unified_id",
				"action": "PUT /facilities/unified/{id}",
				"description": "Requires features: facilities.ports.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/facilities/unified/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /facilities/unified/{id}",
				"value": "facilities_delete_facilities_unified_id",
				"action": "DELETE /facilities/unified/{id}",
				"description": "Requires features: facilities.ports.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/facilities/unified/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Facilities"
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
				"name": "GET /products/carriers",
				"value": "products_get_products_carriers",
				"action": "GET /products/carriers",
				"description": "Requires features: products.carriers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/products/carriers"
					}
				}
			},
			{
				"name": "POST /products/carriers",
				"value": "products_post_products_carriers",
				"action": "POST /products/carriers",
				"description": "Requires features: products.carriers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/products/carriers"
					}
				}
			},
			{
				"name": "PUT /products/carriers",
				"value": "products_put_products_carriers",
				"action": "PUT /products/carriers",
				"description": "Requires features: products.carriers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/products/carriers"
					}
				}
			},
			{
				"name": "DELETE /products/carriers",
				"value": "products_delete_products_carriers",
				"action": "DELETE /products/carriers",
				"description": "Requires features: products.carriers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/products/carriers"
					}
				}
			},
			{
				"name": "GET /products/carriers/table-config",
				"value": "products_get_products_carriers_table_config",
				"action": "GET /products/carriers/table-config",
				"description": "Requires features: products.carriers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/products/carriers/table-config"
					}
				}
			},
			{
				"name": "GET /products/products",
				"value": "products_get_products_products",
				"action": "GET /products/products",
				"description": "Requires features: products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/products/products"
					}
				}
			},
			{
				"name": "POST /products/products",
				"value": "products_post_products_products",
				"action": "POST /products/products",
				"description": "Requires features: products.products.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/products/products"
					}
				}
			},
			{
				"name": "GET /products/products/table-config",
				"value": "products_get_products_products_table_config",
				"action": "GET /products/products/table-config",
				"description": "Requires features: products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/products/products/table-config"
					}
				}
			},
			{
				"name": "GET /products/search",
				"value": "products_get_products_search",
				"action": "GET /products/search",
				"description": "Requires features: products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/products/search"
					}
				}
			},
			{
				"name": "GET /products/carriers/{id}",
				"value": "products_get_products_carriers_id",
				"action": "GET /products/carriers/{id}",
				"description": "Requires features: products.carriers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/products/carriers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /products/carriers/{id}",
				"value": "products_put_products_carriers_id",
				"action": "PUT /products/carriers/{id}",
				"description": "Requires features: products.carriers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/products/carriers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /products/carriers/{id}",
				"value": "products_delete_products_carriers_id",
				"action": "DELETE /products/carriers/{id}",
				"description": "Requires features: products.carriers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/products/carriers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /products/products/{id}",
				"value": "products_get_products_products_id",
				"action": "GET /products/products/{id}",
				"description": "Requires features: products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/products/products/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /products/products/{id}",
				"value": "products_put_products_products_id",
				"action": "PUT /products/products/{id}",
				"description": "Requires features: products.products.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/products/products/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /products/products/{id}",
				"value": "products_delete_products_products_id",
				"action": "DELETE /products/products/{id}",
				"description": "Requires features: products.products.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/products/products/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Products"
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
				"name": "GET /contractors/comments",
				"value": "contractors_get_contractors_comments",
				"action": "GET /contractors/comments",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/comments"
					}
				}
			},
			{
				"name": "POST /contractors/comments",
				"value": "contractors_post_contractors_comments",
				"action": "POST /contractors/comments",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/comments"
					}
				}
			},
			{
				"name": "PUT /contractors/comments",
				"value": "contractors_put_contractors_comments",
				"action": "PUT /contractors/comments",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/comments"
					}
				}
			},
			{
				"name": "DELETE /contractors/comments",
				"value": "contractors_delete_contractors_comments",
				"action": "DELETE /contractors/comments",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/comments"
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
				"name": "GET /contractors/contractors/category-counts",
				"value": "contractors_get_contractors_contractors_category_counts",
				"action": "GET /contractors/contractors/category-counts",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors/category-counts"
					}
				}
			},
			{
				"name": "GET /contractors/contractors/cross-module-counts",
				"value": "contractors_get_contractors_contractors_cross_module_counts",
				"action": "GET /contractors/contractors/cross-module-counts",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors/cross-module-counts"
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
				"name": "DELETE /contractors/contractors/{id}/account-assignees/{userId}",
				"value": "contractors_delete_contractors_contractors_id_account_assignees_userId",
				"action": "DELETE /contractors/contractors/{id}/account-assignees/{userId}",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}/account-assignees/{{ $parameter.userId_string }}"
					}
				}
			},
			{
				"name": "POST /contractors/contractors/{id}/account-assignees",
				"value": "contractors_post_contractors_contractors_id_account_assignees",
				"action": "POST /contractors/contractors/{id}/account-assignees",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}/account-assignees"
					}
				}
			},
			{
				"name": "GET /contractors/contractors/{id}/activity",
				"value": "contractors_get_contractors_contractors_id_activity",
				"action": "GET /contractors/contractors/{id}/activity",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}/activity"
					}
				}
			},
			{
				"name": "GET /contractors/contractors/{id}/finance-summary",
				"value": "contractors_get_contractors_contractors_id_finance_summary",
				"action": "GET /contractors/contractors/{id}/finance-summary",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}/finance-summary"
					}
				}
			},
			{
				"name": "GET /contractors/contractors/{id}/folders",
				"value": "contractors_get_contractors_contractors_id_folders",
				"action": "GET /contractors/contractors/{id}/folders",
				"description": "Requires features: contractors.view_projects",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}/folders"
					}
				}
			},
			{
				"name": "GET /contractors/contractors/{id}/invoices",
				"value": "contractors_get_contractors_contractors_id_invoices",
				"action": "GET /contractors/contractors/{id}/invoices",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}/invoices"
					}
				}
			},
			{
				"name": "GET /contractors/contractors/{id}/offers",
				"value": "contractors_get_contractors_contractors_id_offers",
				"action": "GET /contractors/contractors/{id}/offers",
				"description": "Requires features: contractors.view_offers",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}/offers"
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
			},
			{
				"name": "GET /contractors/contractors/{id}/tab-counts",
				"value": "contractors_get_contractors_contractors_id_tab_counts",
				"action": "GET /contractors/contractors/{id}/tab-counts",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}/tab-counts"
					}
				}
			},
			{
				"name": "PUT /contractors/role-types/{id}",
				"value": "contractors_put_contractors_role_types_id",
				"action": "PUT /contractors/role-types/{id}",
				"description": "Requires features: contractors.admin",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/role-types/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /contractors/role-types/{id}",
				"value": "contractors_delete_contractors_role_types_id",
				"action": "DELETE /contractors/role-types/{id}",
				"description": "Requires features: contractors.admin",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/role-types/{{ $parameter.id_string }}"
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
				"name": "GET /back_office/company/comparison",
				"value": "back_office_get_back_office_company_comparison",
				"action": "GET /back_office/company/comparison",
				"description": "Requires features: back_office.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/back_office/company/comparison"
					}
				}
			},
			{
				"name": "POST /back_office/company/push",
				"value": "back_office_post_back_office_company_push",
				"action": "POST /back_office/company/push",
				"description": "Requires features: back_office.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/back_office/company/push"
					}
				}
			},
			{
				"name": "GET /back_office/company",
				"value": "back_office_get_back_office_company",
				"action": "GET /back_office/company",
				"description": "Requires features: back_office.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/back_office/company"
					}
				}
			},
			{
				"name": "PUT /back_office/company",
				"value": "back_office_put_back_office_company",
				"action": "PUT /back_office/company",
				"description": "Requires features: back_office.view",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/back_office/company"
					}
				}
			},
			{
				"name": "GET /back_office/context",
				"value": "back_office_get_back_office_context",
				"action": "GET /back_office/context",
				"description": "Requires features: back_office.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/back_office/context"
					}
				}
			},
			{
				"name": "GET /back_office/templating",
				"value": "back_office_get_back_office_templating",
				"action": "GET /back_office/templating",
				"description": "Requires features: back_office.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/back_office/templating"
					}
				}
			},
			{
				"name": "POST /back_office/users/photo",
				"value": "back_office_post_back_office_users_photo",
				"action": "POST /back_office/users/photo",
				"description": "Requires features: back_office.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/back_office/users/photo"
					}
				}
			},
			{
				"name": "GET /back_office/users",
				"value": "back_office_get_back_office_users",
				"action": "GET /back_office/users",
				"description": "Requires features: back_office.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/back_office/users"
					}
				}
			},
			{
				"name": "POST /back_office/users",
				"value": "back_office_post_back_office_users",
				"action": "POST /back_office/users",
				"description": "Requires features: back_office.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/back_office/users"
					}
				}
			},
			{
				"name": "PUT /back_office/users/{id}",
				"value": "back_office_put_back_office_users_id",
				"action": "PUT /back_office/users/{id}",
				"description": "Requires features: back_office.view",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/back_office/users/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /back_office/users/{id}",
				"value": "back_office_delete_back_office_users_id",
				"action": "DELETE /back_office/users/{id}",
				"description": "Requires features: back_office.view",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/back_office/users/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Back Office"
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
				"name": "Create a calculation for an offer",
				"value": "offers_post_offers_calculations",
				"action": "Create a calculation for an offer",
				"description": "Requires features: offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/offers/calculations"
					}
				}
			},
			{
				"name": "Fetch pending response offers metrics",
				"value": "offers_get_offers_dashboard_widgets_pending_response_offers",
				"action": "Fetch pending response offers metrics",
				"description": "Returns count, max lag time, and trend for sent offers pending customer response within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/dashboard/widgets/pending-response-offers"
					}
				}
			},
			{
				"name": "Fetch unsent offers metrics",
				"value": "offers_get_offers_dashboard_widgets_unsent_offers",
				"action": "Fetch unsent offers metrics",
				"description": "Returns count, max lag time, and trend for unsent offers within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/dashboard/widgets/unsent-offers"
					}
				}
			},
			{
				"name": "GET /offers/notes",
				"value": "offers_get_offers_notes",
				"action": "GET /offers/notes",
				"description": "Requires features: offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/notes"
					}
				}
			},
			{
				"name": "POST /offers/notes",
				"value": "offers_post_offers_notes",
				"action": "POST /offers/notes",
				"description": "Requires features: offers.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/offers/notes"
					}
				}
			},
			{
				"name": "PUT /offers/notes",
				"value": "offers_put_offers_notes",
				"action": "PUT /offers/notes",
				"description": "Requires features: offers.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/offers/notes"
					}
				}
			},
			{
				"name": "DELETE /offers/notes",
				"value": "offers_delete_offers_notes",
				"action": "DELETE /offers/notes",
				"description": "Requires features: offers.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/offers/notes"
					}
				}
			},
			{
				"name": "GET /offers/offer-group-pdf",
				"value": "offers_get_offers_offer_group_pdf",
				"action": "GET /offers/offer-group-pdf",
				"description": "Requires features: offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/offer-group-pdf"
					}
				}
			},
			{
				"name": "GET /offers/offer-group-preview-images",
				"value": "offers_get_offers_offer_group_preview_images",
				"action": "GET /offers/offer-group-preview-images",
				"description": "Requires features: offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/offer-group-preview-images"
					}
				}
			},
			{
				"name": "GET /offers/offer-lines",
				"value": "offers_get_offers_offer_lines",
				"action": "GET /offers/offer-lines",
				"description": "Requires features: offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/offer-lines"
					}
				}
			},
			{
				"name": "POST /offers/offer-lines",
				"value": "offers_post_offers_offer_lines",
				"action": "POST /offers/offer-lines",
				"description": "Requires features: offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/offers/offer-lines"
					}
				}
			},
			{
				"name": "GET /offers/offer-lines/table-config",
				"value": "offers_get_offers_offer_lines_table_config",
				"action": "GET /offers/offer-lines/table-config",
				"description": "Requires features: offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/offer-lines/table-config"
					}
				}
			},
			{
				"name": "GET /offers/offers",
				"value": "offers_get_offers_offers",
				"action": "GET /offers/offers",
				"description": "Requires features: offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/offers"
					}
				}
			},
			{
				"name": "POST /offers/offers",
				"value": "offers_post_offers_offers",
				"action": "POST /offers/offers",
				"description": "Requires features: offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/offers/offers"
					}
				}
			},
			{
				"name": "POST /offers/offers/version",
				"value": "offers_post_offers_offers_version",
				"action": "POST /offers/offers/version",
				"description": "Requires features: offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/offers/offers/version"
					}
				}
			},
			{
				"name": "Get RFQ board cards",
				"value": "offers_get_offers_rfq_board",
				"action": "Get RFQ board cards",
				"description": "Returns all RFQs formatted as board cards with assignee info and latest offer details.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/rfq/board"
					}
				}
			},
			{
				"name": "Extract charge lines from carrier rate text or image",
				"value": "offers_post_offers_rfq_extract_charges",
				"action": "Extract charge lines from carrier rate text or image",
				"description": "Uses an LLM to extract structured freight charge lines (product name, charge code, basis, currency, rate, buy price, category) from raw carrier rate text or an image screenshot. Does not persist anything.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/offers/rfq/extract-charges"
					}
				}
			},
			{
				"name": "Extract structured RFQ data from text",
				"value": "offers_post_offers_rfq_extract",
				"action": "Extract structured RFQ data from text",
				"description": "Uses an LLM to extract structured freight data (company, routes, containers, cargo) from raw email/message text. Does not persist anything.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/offers/rfq/extract"
					}
				}
			},
			{
				"name": "Create an RFQ from raw email content",
				"value": "offers_post_offers_rfq_from_email",
				"action": "Create an RFQ from raw email content",
				"description": "Single-step endpoint for email-to-RFQ conversion. Accepts raw email fields, cleans the text, extracts structured freight data via LLM, matches against tenant entities (locations, contractors), and persists the RFQ. Designed for n8n/webhook integration — replaces the two-call extract+create flow.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/offers/rfq/from-email"
					}
				}
			},
			{
				"name": "List rfqs",
				"value": "offers_get_offers_rfq",
				"action": "List rfqs",
				"description": "Returns a paginated collection of rfqs scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/rfq"
					}
				}
			},
			{
				"name": "Create rfq",
				"value": "offers_post_offers_rfq",
				"action": "Create rfq",
				"description": "Creates a new RFQ (Request for Quotation) scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/offers/rfq"
					}
				}
			},
			{
				"name": "GET /offers/calculations/{id}",
				"value": "offers_get_offers_calculations_id",
				"action": "GET /offers/calculations/{id}",
				"description": "Requires features: offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/calculations/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /offers/calculations/{id}",
				"value": "offers_put_offers_calculations_id",
				"action": "PUT /offers/calculations/{id}",
				"description": "Requires features: offers.offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/offers/calculations/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /offers/calculations/{id}",
				"value": "offers_delete_offers_calculations_id",
				"action": "DELETE /offers/calculations/{id}",
				"description": "Requires features: offers.offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/offers/calculations/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /offers/offer-lines/{id}",
				"value": "offers_get_offers_offer_lines_id",
				"action": "GET /offers/offer-lines/{id}",
				"description": "Requires features: offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/offer-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /offers/offer-lines/{id}",
				"value": "offers_put_offers_offer_lines_id",
				"action": "PUT /offers/offer-lines/{id}",
				"description": "Requires features: offers.offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/offers/offer-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /offers/offer-lines/{id}",
				"value": "offers_delete_offers_offer_lines_id",
				"action": "DELETE /offers/offer-lines/{id}",
				"description": "Requires features: offers.offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/offers/offer-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /offers/offers/{id}/activity",
				"value": "offers_get_offers_offers_id_activity",
				"action": "GET /offers/offers/{id}/activity",
				"description": "Requires features: offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/offers/{{ $parameter.id_string }}/activity"
					}
				}
			},
			{
				"name": "GET /offers/offers/{id}/contacts",
				"value": "offers_get_offers_offers_id_contacts",
				"action": "GET /offers/offers/{id}/contacts",
				"description": "Requires features: offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/offers/{{ $parameter.id_string }}/contacts"
					}
				}
			},
			{
				"name": "POST /offers/offers/{id}/convert-to-project",
				"value": "offers_post_offers_offers_id_convert_to_project",
				"action": "POST /offers/offers/{id}/convert-to-project",
				"description": "Requires features: offers.offers.manage, folders.files.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/offers/offers/{{ $parameter.id_string }}/convert-to-project"
					}
				}
			},
			{
				"name": "GET /offers/offers/{id}/email-preview",
				"value": "offers_get_offers_offers_id_email_preview",
				"action": "GET /offers/offers/{id}/email-preview",
				"description": "Requires features: offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/offers/{{ $parameter.id_string }}/email-preview"
					}
				}
			},
			{
				"name": "GET /offers/offers/{id}/pdf",
				"value": "offers_get_offers_offers_id_pdf",
				"action": "GET /offers/offers/{id}/pdf",
				"description": "Requires features: offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/offers/{{ $parameter.id_string }}/pdf"
					}
				}
			},
			{
				"name": "POST /offers/offers/{id}/pdf",
				"value": "offers_post_offers_offers_id_pdf",
				"action": "POST /offers/offers/{id}/pdf",
				"description": "Requires features: offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/offers/offers/{{ $parameter.id_string }}/pdf"
					}
				}
			},
			{
				"name": "GET /offers/offers/{id}/preview-images",
				"value": "offers_get_offers_offers_id_preview_images",
				"action": "GET /offers/offers/{id}/preview-images",
				"description": "Requires features: offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/offers/{{ $parameter.id_string }}/preview-images"
					}
				}
			},
			{
				"name": "GET /offers/offers/{id}",
				"value": "offers_get_offers_offers_id",
				"action": "GET /offers/offers/{id}",
				"description": "Requires features: offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /offers/offers/{id}",
				"value": "offers_put_offers_offers_id",
				"action": "PUT /offers/offers/{id}",
				"description": "Requires features: offers.offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /offers/offers/{id}",
				"value": "offers_delete_offers_offers_id",
				"action": "DELETE /offers/offers/{id}",
				"description": "Requires features: offers.offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "POST /offers/offers/{id}/send",
				"value": "offers_post_offers_offers_id_send",
				"action": "POST /offers/offers/{id}/send",
				"description": "Requires features: offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/offers/offers/{{ $parameter.id_string }}/send"
					}
				}
			},
			{
				"name": "GET /offers/rfq/{id}/activity",
				"value": "offers_get_offers_rfq_id_activity",
				"action": "GET /offers/rfq/{id}/activity",
				"description": "Requires features: offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/rfq/{{ $parameter.id_string }}/activity"
					}
				}
			},
			{
				"name": "Get RFQ by ID",
				"value": "offers_get_offers_rfq_id",
				"action": "Get RFQ by ID",
				"description": "Returns a single RFQ with its associated offers.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/offers/rfq/{{ $parameter.id_string }}"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"assignedToId",
						"cargoType",
						"companyName",
						"contactPerson",
						"contactPersonId",
						"containerCount",
						"context",
						"contractorId",
						"createdAt",
						"description"
					]
				}
			},
			{
				"name": "Update RFQ",
				"value": "offers_put_offers_rfq_id",
				"action": "Update RFQ",
				"description": "Updates an existing RFQ by ID.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/offers/rfq/{{ $parameter.id_string }}"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"assignedToId",
						"cargoType",
						"companyName",
						"contactPerson",
						"contactPersonId",
						"containerCount",
						"context",
						"contractorId",
						"createdAt",
						"description"
					]
				}
			},
			{
				"name": "Delete RFQ",
				"value": "offers_delete_offers_rfq_id",
				"action": "Delete RFQ",
				"description": "Soft-deletes an RFQ by ID.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/offers/rfq/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
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
				"name": "List pending customer drafts",
				"value": "folders_get_folders_customer_drafts",
				"action": "List pending customer drafts",
				"description": "Returns folders awaiting forwarder approval (with offer + customer user lookup).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/customer-drafts"
					}
				}
			},
			{
				"name": "GET /folders/files",
				"value": "folders_get_folders_files",
				"action": "GET /folders/files",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files"
					}
				}
			},
			{
				"name": "POST /folders/files",
				"value": "folders_post_folders_files",
				"action": "POST /folders/files",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files"
					}
				}
			},
			{
				"name": "DELETE /folders/files",
				"value": "folders_delete_folders_files",
				"action": "DELETE /folders/files",
				"description": "DELETE /folders/files",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/folders/files"
					}
				}
			},
			{
				"name": "GET /folders/files/table-config",
				"value": "folders_get_folders_files_table_config",
				"action": "GET /folders/files/table-config",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/table-config"
					}
				}
			},
			{
				"name": "GET /folders/transport",
				"value": "folders_get_folders_transport",
				"action": "GET /folders/transport",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/transport"
					}
				}
			},
			{
				"name": "GET /folders/transport/table-config",
				"value": "folders_get_folders_transport_table_config",
				"action": "GET /folders/transport/table-config",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/transport/table-config"
					}
				}
			},
			{
				"name": "GET /folders/unit-legs",
				"value": "folders_get_folders_unit_legs",
				"action": "GET /folders/unit-legs",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/unit-legs"
					}
				}
			},
			{
				"name": "POST /folders/unit-legs",
				"value": "folders_post_folders_unit_legs",
				"action": "POST /folders/unit-legs",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/unit-legs"
					}
				}
			},
			{
				"name": "DELETE /folders/unit-legs",
				"value": "folders_delete_folders_unit_legs",
				"action": "DELETE /folders/unit-legs",
				"description": "DELETE /folders/unit-legs",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/folders/unit-legs"
					}
				}
			},
			{
				"name": "Approve a pending customer draft folder",
				"value": "folders_post_folders_customer_drafts_id_approve",
				"action": "Approve a pending customer draft folder",
				"description": "Activates the folder and atomically transitions the source offer to `accepted`. Idempotent on already-accepted offers.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/customer-drafts/{{ $parameter.id_string }}/approve"
					}
				}
			},
			{
				"name": "Reject a pending customer draft folder",
				"value": "folders_post_folders_customer_drafts_id_reject",
				"action": "Reject a pending customer draft folder",
				"description": "Sets `customer_draft_status=rejected` with the provided reason. Folder remains in DB but inert.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/customer-drafts/{{ $parameter.id_string }}/reject"
					}
				}
			},
			{
				"name": "Apply selected populator writes",
				"value": "folders_post_folders_document_links_linkId_confirm",
				"action": "Apply selected populator writes",
				"description": "Re-runs populator detection, applies the filtered subset of writes (acceptedFields/rejectedFields), sets populationStatus=applied, and dispatches the tracking trigger when booking/BL fields landed.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/document-links/{{ $parameter.linkId_string }}/confirm"
					}
				}
			},
			{
				"name": "Reject a pending document review",
				"value": "folders_post_folders_document_links_linkId_reject",
				"action": "Reject a pending document review",
				"description": "Soft-deletes the FreightDocumentFolderLink. populationStatus is unchanged on the row — soft-delete is the canonical \"no longer applies\" signal. Writes a folders.document.review-rejected ActionLog with the prior status in payload.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/document-links/{{ $parameter.linkId_string }}/reject"
					}
				}
			},
			{
				"name": "Get a link plus the live populator diff",
				"value": "folders_get_folders_document_links_linkId",
				"action": "Get a link plus the live populator diff",
				"description": "Re-runs populator detection at request time; the diff always reflects current folder state. Returns the link metadata, the writes/conflicts/proposedContainers, and a preview URL for the document.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/document-links/{{ $parameter.linkId_string }}"
					}
				}
			},
			{
				"name": "GET /folders/files/{id}/activity",
				"value": "folders_get_folders_files_id_activity",
				"action": "GET /folders/files/{id}/activity",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/activity"
					}
				}
			},
			{
				"name": "Cost rollup for the folder detail Koszty tab",
				"value": "folders_get_folders_files_id_cost_rollup",
				"action": "Cost rollup for the folder detail Koszty tab",
				"description": "Per-FolderLine cost summary with linked invoice line + paid + settlement status, orphan allocations (spoza oferty), and a banner summary.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/cost-rollup"
					}
				}
			},
			{
				"name": "List pending freight-document reviews",
				"value": "folders_get_folders_files_id_document_reviews",
				"action": "List pending freight-document reviews",
				"description": "Returns one entry per FreightDocumentFolderLink with `population_status=pending_review` for this folder, plus a tier-aware diff summary re-detected at request time.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/document-reviews"
					}
				}
			},
			{
				"name": "DELETE /folders/files/{id}/documents/{docId}",
				"value": "folders_delete_folders_files_id_documents_docId",
				"action": "DELETE /folders/files/{id}/documents/{docId}",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/folders/files/{{ $parameter.id_string }}/documents/{{ $parameter.docId_string }}"
					}
				}
			},
			{
				"name": "GET /folders/files/{id}/documents",
				"value": "folders_get_folders_files_id_documents",
				"action": "GET /folders/files/{id}/documents",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/documents"
					}
				}
			},
			{
				"name": "POST /folders/files/{id}/documents",
				"value": "folders_post_folders_files_id_documents",
				"action": "POST /folders/files/{id}/documents",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files/{{ $parameter.id_string }}/documents"
					}
				}
			},
			{
				"name": "GET /folders/files/{id}/fx-rate",
				"value": "folders_get_folders_files_id_fx_rate",
				"action": "GET /folders/files/{id}/fx-rate",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/fx-rate"
					}
				}
			},
			{
				"name": "PUT /folders/files/{id}/fx-rate",
				"value": "folders_put_folders_files_id_fx_rate",
				"action": "PUT /folders/files/{id}/fx-rate",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/folders/files/{{ $parameter.id_string }}/fx-rate"
					}
				}
			},
			{
				"name": "PATCH /folders/files/{id}/fx-rate",
				"value": "folders_patch_folders_files_id_fx_rate",
				"action": "PATCH /folders/files/{id}/fx-rate",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/folders/files/{{ $parameter.id_string }}/fx-rate"
					}
				}
			},
			{
				"name": "GET /folders/files/{id}/invoices",
				"value": "folders_get_folders_files_id_invoices",
				"action": "GET /folders/files/{id}/invoices",
				"description": "Requires features: folders.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/invoices"
					}
				}
			},
			{
				"name": "PUT /folders/files/{id}/invoices",
				"value": "folders_put_folders_files_id_invoices",
				"action": "PUT /folders/files/{id}/invoices",
				"description": "Requires features: folders.invoices.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/folders/files/{{ $parameter.id_string }}/invoices"
					}
				}
			},
			{
				"name": "POST /folders/files/{id}/legs/{legId}/confirm-tracking",
				"value": "folders_post_folders_files_id_legs_legId_confirm_tracking",
				"action": "POST /folders/files/{id}/legs/{legId}/confirm-tracking",
				"description": "Requires features: folders.legs.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files/{{ $parameter.id_string }}/legs/{{ $parameter.legId_string }}/confirm-tracking"
					}
				}
			},
			{
				"name": "GET /folders/files/{id}/legs/{legId}",
				"value": "folders_get_folders_files_id_legs_legId",
				"action": "GET /folders/files/{id}/legs/{legId}",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/legs/{{ $parameter.legId_string }}"
					}
				}
			},
			{
				"name": "PUT /folders/files/{id}/legs/{legId}",
				"value": "folders_put_folders_files_id_legs_legId",
				"action": "PUT /folders/files/{id}/legs/{legId}",
				"description": "Requires features: folders.legs.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/folders/files/{{ $parameter.id_string }}/legs/{{ $parameter.legId_string }}"
					}
				}
			},
			{
				"name": "DELETE /folders/files/{id}/legs/{legId}",
				"value": "folders_delete_folders_files_id_legs_legId",
				"action": "DELETE /folders/files/{id}/legs/{legId}",
				"description": "Requires features: folders.legs.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/folders/files/{{ $parameter.id_string }}/legs/{{ $parameter.legId_string }}"
					}
				}
			},
			{
				"name": "POST /folders/files/{id}/legs/{legId}/timestamps",
				"value": "folders_post_folders_files_id_legs_legId_timestamps",
				"action": "POST /folders/files/{id}/legs/{legId}/timestamps",
				"description": "Requires features: folders.legs.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files/{{ $parameter.id_string }}/legs/{{ $parameter.legId_string }}/timestamps"
					}
				}
			},
			{
				"name": "Fork a leg by origin for a single container",
				"value": "folders_post_folders_files_id_legs_fork_origin",
				"action": "Fork a leg by origin for a single container",
				"description": "Dispatches `folders.leg.fork_origin`. Creates a new leg with the same type and destination as the source, a different origin, blank carrier and timestamps, then moves the named FolderUnitLeg onto it. Source leg unchanged.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files/{{ $parameter.id_string }}/legs/fork-origin"
					}
				}
			},
			{
				"name": "Fork a leg for a single container",
				"value": "folders_post_folders_files_id_legs_fork",
				"action": "Fork a leg for a single container",
				"description": "Dispatches `folders.leg.fork`. Creates a new leg with the same type and origin as the source, blank carrier and timestamps, then moves the named FolderUnitLeg onto it. Source leg unchanged.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files/{{ $parameter.id_string }}/legs/fork"
					}
				}
			},
			{
				"name": "GET /folders/files/{id}/legs",
				"value": "folders_get_folders_files_id_legs",
				"action": "GET /folders/files/{id}/legs",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/legs"
					}
				}
			},
			{
				"name": "POST /folders/files/{id}/legs",
				"value": "folders_post_folders_files_id_legs",
				"action": "POST /folders/files/{id}/legs",
				"description": "Requires features: folders.legs.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files/{{ $parameter.id_string }}/legs"
					}
				}
			},
			{
				"name": "GET /folders/files/{id}/lines",
				"value": "folders_get_folders_files_id_lines",
				"action": "GET /folders/files/{id}/lines",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "POST /folders/files/{id}/lines",
				"value": "folders_post_folders_files_id_lines",
				"action": "POST /folders/files/{id}/lines",
				"description": "Requires features: folders.lines.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "PUT /folders/files/{id}/lines",
				"value": "folders_put_folders_files_id_lines",
				"action": "PUT /folders/files/{id}/lines",
				"description": "Requires features: folders.lines.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/folders/files/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "DELETE /folders/files/{id}/lines",
				"value": "folders_delete_folders_files_id_lines",
				"action": "DELETE /folders/files/{id}/lines",
				"description": "Requires features: folders.lines.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/folders/files/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "POST /folders/files/{id}/link-offer",
				"value": "folders_post_folders_files_id_link_offer",
				"action": "POST /folders/files/{id}/link-offer",
				"description": "Requires features: folders.lines.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files/{{ $parameter.id_string }}/link-offer"
					}
				}
			},
			{
				"name": "Invoices linked to a folder",
				"value": "folders_get_folders_files_id_linked_invoices",
				"action": "Invoices linked to a folder",
				"description": "List invoices linked to this folder via invoice_folder_links (M:N).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/linked-invoices"
					}
				}
			},
			{
				"name": "GET /folders/files/{id}/notes",
				"value": "folders_get_folders_files_id_notes",
				"action": "GET /folders/files/{id}/notes",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/notes"
					}
				}
			},
			{
				"name": "POST /folders/files/{id}/notes",
				"value": "folders_post_folders_files_id_notes",
				"action": "POST /folders/files/{id}/notes",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files/{{ $parameter.id_string }}/notes"
					}
				}
			},
			{
				"name": "PUT /folders/files/{id}/notes",
				"value": "folders_put_folders_files_id_notes",
				"action": "PUT /folders/files/{id}/notes",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/folders/files/{{ $parameter.id_string }}/notes"
					}
				}
			},
			{
				"name": "DELETE /folders/files/{id}/notes",
				"value": "folders_delete_folders_files_id_notes",
				"action": "DELETE /folders/files/{id}/notes",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/folders/files/{{ $parameter.id_string }}/notes"
					}
				}
			},
			{
				"name": "GET /folders/files/{id}",
				"value": "folders_get_folders_files_id",
				"action": "GET /folders/files/{id}",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /folders/files/{id}",
				"value": "folders_put_folders_files_id",
				"action": "PUT /folders/files/{id}",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/folders/files/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /folders/files/{id}",
				"value": "folders_delete_folders_files_id",
				"action": "DELETE /folders/files/{id}",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/folders/files/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Move a container assignment to a different leg",
				"value": "folders_post_folders_files_id_unit_legs_unitLegId_reassign",
				"action": "Move a container assignment to a different leg",
				"description": "Dispatches `folders.unit_leg.reassign`. Source leg is unchanged; siblings stay put. Both legs must belong to the named folder and the caller`s tenant/org.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files/{{ $parameter.id_string }}/unit-legs/{{ $parameter.unitLegId_string }}/reassign"
					}
				}
			},
			{
				"name": "GET /folders/files/{id}/units/{unitId}",
				"value": "folders_get_folders_files_id_units_unitId",
				"action": "GET /folders/files/{id}/units/{unitId}",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/units/{{ $parameter.unitId_string }}"
					}
				}
			},
			{
				"name": "PUT /folders/files/{id}/units/{unitId}",
				"value": "folders_put_folders_files_id_units_unitId",
				"action": "PUT /folders/files/{id}/units/{unitId}",
				"description": "Requires features: folders.containers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/folders/files/{{ $parameter.id_string }}/units/{{ $parameter.unitId_string }}"
					}
				}
			},
			{
				"name": "DELETE /folders/files/{id}/units/{unitId}",
				"value": "folders_delete_folders_files_id_units_unitId",
				"action": "DELETE /folders/files/{id}/units/{unitId}",
				"description": "Requires features: folders.containers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/folders/files/{{ $parameter.id_string }}/units/{{ $parameter.unitId_string }}"
					}
				}
			},
			{
				"name": "GET /folders/files/{id}/units",
				"value": "folders_get_folders_files_id_units",
				"action": "GET /folders/files/{id}/units",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/files/{{ $parameter.id_string }}/units"
					}
				}
			},
			{
				"name": "POST /folders/files/{id}/units",
				"value": "folders_post_folders_files_id_units",
				"action": "POST /folders/files/{id}/units",
				"description": "Requires features: folders.containers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files/{{ $parameter.id_string }}/units"
					}
				}
			},
			{
				"name": "POST /folders/files/{id}/unlink-offer",
				"value": "folders_post_folders_files_id_unlink_offer",
				"action": "POST /folders/files/{id}/unlink-offer",
				"description": "Requires features: folders.lines.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/folders/files/{{ $parameter.id_string }}/unlink-offer"
					}
				}
			},
			{
				"name": "GET /folders/unit-legs/{id}",
				"value": "folders_get_folders_unit_legs_id",
				"action": "GET /folders/unit-legs/{id}",
				"description": "Requires features: folders.files.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/folders/unit-legs/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /folders/unit-legs/{id}",
				"value": "folders_put_folders_unit_legs_id",
				"action": "PUT /folders/unit-legs/{id}",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/folders/unit-legs/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /folders/unit-legs/{id}",
				"value": "folders_delete_folders_unit_legs_id",
				"action": "DELETE /folders/unit-legs/{id}",
				"description": "Requires features: folders.files.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/folders/unit-legs/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
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
				"name": "GET /invoicing/bank-accounts",
				"value": "invoicing_get_invoicing_bank_accounts",
				"action": "GET /invoicing/bank-accounts",
				"description": "Requires features: invoicing.settings.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/bank-accounts"
					}
				}
			},
			{
				"name": "POST /invoicing/bank-accounts",
				"value": "invoicing_post_invoicing_bank_accounts",
				"action": "POST /invoicing/bank-accounts",
				"description": "Requires features: invoicing.settings.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/bank-accounts"
					}
				}
			},
			{
				"name": "PUT /invoicing/bank-accounts",
				"value": "invoicing_put_invoicing_bank_accounts",
				"action": "PUT /invoicing/bank-accounts",
				"description": "Requires features: invoicing.settings.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/invoicing/bank-accounts"
					}
				}
			},
			{
				"name": "DELETE /invoicing/bank-accounts",
				"value": "invoicing_delete_invoicing_bank_accounts",
				"action": "DELETE /invoicing/bank-accounts",
				"description": "Requires features: invoicing.settings.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/invoicing/bank-accounts"
					}
				}
			},
			{
				"name": "Expense categories — list & create",
				"value": "invoicing_get_invoicing_expense_categories",
				"action": "Expense categories — list & create",
				"description": "List expense categories for the active org/tenant.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/expense-categories"
					}
				}
			},
			{
				"name": "Expense categories — list & create",
				"value": "invoicing_post_invoicing_expense_categories",
				"action": "Expense categories — list & create",
				"description": "Create a new expense category.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/expense-categories"
					}
				}
			},
			{
				"name": "Search folders by reference / container / booking / BL",
				"value": "invoicing_get_invoicing_folder_search",
				"action": "Search folders by reference / container / booking / BL",
				"description": "Autocomplete-grade search powering the verify drawer's PRZYPISANIE DO PROJEKTU input.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/folder-search"
					}
				}
			},
			{
				"name": "Probe whether the current company NIP is configured",
				"value": "invoicing_get_invoicing_health",
				"action": "Probe whether the current company NIP is configured",
				"description": "Returns { companyConfigured, defaultSellerNip }. When companyConfigured is false, all inbound sync events are dropped until the operator fills the value in /backend/invoicing/settings/general.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/health"
					}
				}
			},
			{
				"name": "Generate PDF preview from form data",
				"value": "invoicing_post_invoicing_invoices_preview_pdf",
				"action": "Generate PDF preview from form data",
				"description": "Generate a PDF preview without saving — accepts invoice data in request body",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/preview-pdf"
					}
				}
			},
			{
				"name": "List invoices with filters and tab counts",
				"value": "invoicing_get_invoicing_invoices",
				"action": "List invoices with filters and tab counts",
				"description": "Requires features: invoicing.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/invoices"
					}
				}
			},
			{
				"name": "Create a manual invoice (verified, source=finance)",
				"value": "invoicing_post_invoicing_invoices",
				"action": "Create a manual invoice (verified, source=finance)",
				"description": "Requires features: invoicing.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices"
					}
				}
			},
			{
				"name": "GET /invoicing/ksef-reconciliation",
				"value": "invoicing_get_invoicing_ksef_reconciliation",
				"action": "GET /invoicing/ksef-reconciliation",
				"description": "Requires features: invoicing.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/ksef-reconciliation"
					}
				}
			},
			{
				"name": "Get invoicing settings",
				"value": "invoicing_get_invoicing_settings",
				"action": "Get invoicing settings",
				"description": "Retrieve the invoicing module settings for the current tenant/organization",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/settings"
					}
				}
			},
			{
				"name": "Update invoicing settings",
				"value": "invoicing_patch_invoicing_settings",
				"action": "Update invoicing settings",
				"description": "Update invoicing module settings including KSeF environment, auto-submit, and import preferences",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/invoicing/settings"
					}
				}
			},
			{
				"name": "Expense category — get / update / archive",
				"value": "invoicing_get_invoicing_expense_categories_id",
				"action": "Expense category — get / update / archive",
				"description": "Get a single expense category.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/expense-categories/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Expense category — get / update / archive",
				"value": "invoicing_patch_invoicing_expense_categories_id",
				"action": "Expense category — get / update / archive",
				"description": "Update an expense category.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/invoicing/expense-categories/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Expense category — get / update / archive",
				"value": "invoicing_delete_invoicing_expense_categories_id",
				"action": "Expense category — get / update / archive",
				"description": "Soft-delete (archive) the category.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/invoicing/expense-categories/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Allocation context for an invoice",
				"value": "invoicing_get_invoicing_invoices_id_allocation_context",
				"action": "Allocation context for an invoice",
				"description": "Single round-trip for the allocate page: invoice, line items, matched folders, per-folder cost lines with cumulative actual cost and this-invoice allocation state, totals.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/allocation-context"
					}
				}
			},
			{
				"name": "Confirm / revert an allocation (D10)",
				"value": "invoicing_post_invoicing_invoices_id_allocations_allocId_confirm",
				"action": "Confirm / revert an allocation (D10)",
				"description": "Stamp confirmed_at — flips status oczekuje → rozliczony.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/allocations/{{ $parameter.allocId_string }}/confirm"
					}
				}
			},
			{
				"name": "Confirm / revert an allocation (D10)",
				"value": "invoicing_delete_invoicing_invoices_id_allocations_allocId_confirm",
				"action": "Confirm / revert an allocation (D10)",
				"description": "Clear confirmed_at — flips status rozliczony → oczekuje.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/allocations/{{ $parameter.allocId_string }}/confirm"
					}
				}
			},
			{
				"name": "Remove an allocation; recomputes invoice.allocationStatus",
				"value": "invoicing_delete_invoicing_invoices_id_allocations_allocId",
				"action": "Remove an allocation; recomputes invoice.allocationStatus",
				"description": "Requires features: invoicing.invoices.allocate",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/allocations/{{ $parameter.allocId_string }}"
					}
				}
			},
			{
				"name": "Finalize allocation step",
				"value": "invoicing_post_invoicing_invoices_id_allocations_finalize",
				"action": "Finalize allocation step",
				"description": "Close the allocation step. Sets allocationStatus to allocated / partial / not_required / unallocated based on the current allocation state and emits invoicing.invoice.allocated with partial: true|false.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/allocations/finalize"
					}
				}
			},
			{
				"name": "List allocations for the invoice",
				"value": "invoicing_get_invoicing_invoices_id_allocations",
				"action": "List allocations for the invoice",
				"description": "Requires features: invoicing.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/allocations"
					}
				}
			},
			{
				"name": "Add an allocation; recomputes invoice.allocationStatus",
				"value": "invoicing_post_invoicing_invoices_id_allocations",
				"action": "Add an allocation; recomputes invoice.allocationStatus",
				"description": "Requires features: invoicing.invoices.allocate",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/allocations"
					}
				}
			},
			{
				"name": "Emit invoicing.invoice.approved (KSeF bridge consumes this)",
				"value": "invoicing_post_invoicing_invoices_id_approve",
				"action": "Emit invoicing.invoice.approved (KSeF bridge consumes this)",
				"description": "Requires features: invoicing.invoices.approve",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/approve"
					}
				}
			},
			{
				"name": "Create a KOR-to-zero correction invoice for a KSeF-accepted original",
				"value": "invoicing_post_invoicing_invoices_id_cancel",
				"action": "Create a KOR-to-zero correction invoice for a KSeF-accepted original",
				"description": "Requires features: invoicing.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/cancel"
					}
				}
			},
			{
				"name": "Confirm extracted contractor & link to invoice",
				"value": "invoicing_post_invoicing_invoices_id_contractor_confirm",
				"action": "Confirm extracted contractor & link to invoice",
				"description": "Creates (or matches) a contractor in kartoteka from the AI-extracted seller block on this invoice and links it. Idempotent — calling on an already-linked invoice is a no-op.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/contractor/confirm"
					}
				}
			},
			{
				"name": "Link / unlink contractor on an invoice",
				"value": "invoicing_post_invoicing_invoices_id_contractor_link",
				"action": "Link / unlink contractor on an invoice",
				"description": "Set or clear the contractorId on this invoice.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/contractor/link"
					}
				}
			},
			{
				"name": "Draft a KOR/KOR_ZAL/KOR_ROZ with pre-state line items copied",
				"value": "invoicing_post_invoicing_invoices_id_create_correction",
				"action": "Draft a KOR/KOR_ZAL/KOR_ROZ with pre-state line items copied",
				"description": "Requires features: invoicing.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/create-correction"
					}
				}
			},
			{
				"name": "Unlink an invoice from a folder",
				"value": "invoicing_delete_invoicing_invoices_id_folders_folderId",
				"action": "Unlink an invoice from a folder",
				"description": "Removes a single (invoice, folder) link from invoice_folder_links. Idempotent: returns 200 with removed=0 if no row matched.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/folders/{{ $parameter.folderId_string }}"
					}
				}
			},
			{
				"name": "Mark paid (paidAt = body.paidAt ?? now())",
				"value": "invoicing_post_invoicing_invoices_id_payment",
				"action": "Mark paid (paidAt = body.paidAt ?? now())",
				"description": "Requires features: invoicing.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/payment"
					}
				}
			},
			{
				"name": "Mark unpaid (paidAt = null)",
				"value": "invoicing_delete_invoicing_invoices_id_payment",
				"action": "Mark unpaid (paidAt = null)",
				"description": "Requires features: invoicing.invoices.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/payment"
					}
				}
			},
			{
				"name": "Generate invoice PDF",
				"value": "invoicing_get_invoicing_invoices_id_pdf",
				"action": "Generate invoice PDF",
				"description": "Generate and return a PDF for the specified invoice",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/pdf"
					}
				}
			},
			{
				"name": "Generate invoice PDF preview as base64 PNG pages",
				"value": "invoicing_get_invoicing_invoices_id_preview_images",
				"action": "Generate invoice PDF preview as base64 PNG pages",
				"description": "Requires features: invoicing.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/preview-images"
					}
				}
			},
			{
				"name": "Quick-link an invoice to a folder by reference / container / booking / BL",
				"value": "invoicing_post_invoicing_invoices_id_quick_link_folder",
				"action": "Quick-link an invoice to a folder by reference / container / booking / BL",
				"description": "Looks up a folder by the typed value (folder reference, container, booking, or BL) and creates an allocation per invoice line item that does not yet have one. Used by the verify drawer's PRZYPISANIE DO PROJEKTU input.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/quick-link-folder"
					}
				}
			},
			{
				"name": "Mark invoice as rejected with a required reason",
				"value": "invoicing_post_invoicing_invoices_id_reject",
				"action": "Mark invoice as rejected with a required reason",
				"description": "Requires features: invoicing.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/reject"
					}
				}
			},
			{
				"name": "Clear ksef error and re-trigger the approve event",
				"value": "invoicing_post_invoicing_invoices_id_resubmit",
				"action": "Clear ksef error and re-trigger the approve event",
				"description": "Requires features: invoicing.invoices.approve",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/resubmit"
					}
				}
			},
			{
				"name": "Fetch invoice + line items + advance refs + order lines + allocations",
				"value": "invoicing_get_invoicing_invoices_id",
				"action": "Fetch invoice + line items + advance refs + order lines + allocations",
				"description": "Requires features: invoicing.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Full replace (alias of PATCH)",
				"value": "invoicing_put_invoicing_invoices_id",
				"action": "Full replace (alias of PATCH)",
				"description": "Requires features: invoicing.invoices.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Partial update (header fields and/or line items full replace)",
				"value": "invoicing_patch_invoicing_invoices_id",
				"action": "Partial update (header fields and/or line items full replace)",
				"description": "Requires features: invoicing.invoices.manage",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Soft delete",
				"value": "invoicing_delete_invoicing_invoices_id",
				"action": "Soft delete",
				"description": "Requires features: invoicing.invoices.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Atomic verify: replace lines, set verified + flip allocation status",
				"value": "invoicing_post_invoicing_invoices_id_verify",
				"action": "Atomic verify: replace lines, set verified + flip allocation status",
				"description": "Requires features: invoicing.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/invoicing/invoices/{{ $parameter.id_string }}/verify"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Invoicing"
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
				"name": "Receivables aging — state as of today (no range filter)",
				"value": "finance_reporting_get_finance_reporting_aging",
				"action": "Receivables aging — state as of today (no range filter)",
				"description": "Outstanding outgoing invoices bucketed by overdue days (>30, 15–30, 7–14, on-time) + per-owner overdue rollup.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance_reporting/aging"
					}
				}
			},
			{
				"name": "Cashflow snapshot — issued + estimated receipts vs incoming costs",
				"value": "finance_reporting_get_finance_reporting_cashflow",
				"action": "Cashflow snapshot — issued + estimated receipts vs incoming costs",
				"description": "Aggregated certain/estimated/costs and pessimistic/optimistic balance for the range.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance_reporting/cashflow"
					}
				}
			},
			{
				"name": "Per-client margin ranking",
				"value": "finance_reporting_get_finance_reporting_clients",
				"action": "Per-client margin ranking",
				"description": "Folders aggregated by contractor over the range. Sorted by margin% ascending (worst first).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance_reporting/clients"
					}
				}
			},
			{
				"name": "Exception surface — top three issues to address today",
				"value": "finance_reporting_get_finance_reporting_exceptions",
				"action": "Exception surface — top three issues to address today",
				"description": "Most-negative-margin client, count of unbilled-after-cargo-ready folders, oldest overdue receivable.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance_reporting/exceptions"
					}
				}
			},
			{
				"name": "Lane (origin → destination) margin ranking — last 12 months",
				"value": "finance_reporting_get_finance_reporting_lanes",
				"action": "Lane (origin → destination) margin ranking — last 12 months",
				"description": "Top 8 lanes by margin% with prior-year delta. 12M mode only.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance_reporting/lanes"
					}
				}
			},
			{
				"name": "Margin per period (planned + actual) — plan derived from folder lines",
				"value": "finance_reporting_get_finance_reporting_margin",
				"action": "Margin per period (planned + actual) — plan derived from folder lines",
				"description": "Per-bucket planned and actual margin. Planned = folder_lines.sold_amount/estimated_cost. Actual = COALESCE(actual_*, planned).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance_reporting/margin"
					}
				}
			},
			{
				"name": "Quarter-by-quarter average margin comparison",
				"value": "finance_reporting_get_finance_reporting_quarterly",
				"action": "Quarter-by-quarter average margin comparison",
				"description": "Five most recent quarters with vs-prior delta. 12M mode only.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance_reporting/quarterly"
					}
				}
			},
			{
				"name": "Revenue stacked by closed/open/forecast per period",
				"value": "finance_reporting_get_finance_reporting_revenue",
				"action": "Revenue stacked by closed/open/forecast per period",
				"description": "Returns weekly (30/60) or monthly (90/qtd/12m) buckets of revenue split into closed (invoiced), open (folder ETD in window, not yet invoiced) and forecast (future-ETD folders).",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance_reporting/revenue"
					}
				}
			},
			{
				"name": "Finance reporting settings (per organization)",
				"value": "finance_reporting_get_finance_reporting_settings",
				"action": "Finance reporting settings (per organization)",
				"description": "Read finance reporting settings for the active organization. Returns defaults when nothing has been saved.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance_reporting/settings"
					}
				}
			},
			{
				"name": "Finance reporting settings (per organization)",
				"value": "finance_reporting_put_finance_reporting_settings",
				"action": "Finance reporting settings (per organization)",
				"description": "Persist finance reporting settings for the active organization. Body: { marginPlanPct: number (0-100) }.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/finance_reporting/settings"
					}
				}
			},
			{
				"name": "12M KPI cards (margin, revenue, clients, trend)",
				"value": "finance_reporting_get_finance_reporting_twelve_month",
				"action": "12M KPI cards (margin, revenue, clients, trend)",
				"description": "Top-of-page KPI cards for the 12M analytics view: realized margin, revenue YoY, active clients, monthly trend bars.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/finance_reporting/twelve-month"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FinanceReporting"
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
				"name": "Generate PDF from template",
				"value": "pdf_templates_post_pdf_templates_pdfme_generate",
				"action": "Generate PDF from template",
				"description": "Requires features: pdf_templates.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/pdf_templates/pdfme/generate"
					}
				}
			},
			{
				"name": "Get pdfme template(s)",
				"value": "pdf_templates_get_pdf_templates_pdfme",
				"action": "Get pdfme template(s)",
				"description": "Requires features: pdf_templates.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/pdf_templates/pdfme"
					}
				}
			},
			{
				"name": "Create pdfme template",
				"value": "pdf_templates_post_pdf_templates_pdfme",
				"action": "Create pdfme template",
				"description": "Requires features: pdf_templates.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/pdf_templates/pdfme"
					}
				}
			},
			{
				"name": "Update pdfme template (upsert)",
				"value": "pdf_templates_put_pdf_templates_pdfme",
				"action": "Update pdfme template (upsert)",
				"description": "Requires features: pdf_templates.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/pdf_templates/pdfme"
					}
				}
			},
			{
				"name": "Delete pdfme template",
				"value": "pdf_templates_delete_pdf_templates_pdfme",
				"action": "Delete pdfme template",
				"description": "Requires features: pdf_templates.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/pdf_templates/pdfme"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"PDF Templates (pdfme)"
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
				"name": "GET /air_cargo/air-cargo",
				"value": "air_cargo_get_air_cargo_air_cargo",
				"action": "GET /air_cargo/air-cargo",
				"description": "Requires features: air_cargo.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/air_cargo/air-cargo"
					}
				}
			},
			{
				"name": "POST /air_cargo/air-cargo",
				"value": "air_cargo_post_air_cargo_air_cargo",
				"action": "POST /air_cargo/air-cargo",
				"description": "Requires features: air_cargo.create",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/air_cargo/air-cargo"
					}
				}
			},
			{
				"name": "GET /air_cargo/air-cargo/{id}",
				"value": "air_cargo_get_air_cargo_air_cargo_id",
				"action": "GET /air_cargo/air-cargo/{id}",
				"description": "Requires features: air_cargo.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/air_cargo/air-cargo/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /air_cargo/air-cargo/{id}",
				"value": "air_cargo_put_air_cargo_air_cargo_id",
				"action": "PUT /air_cargo/air-cargo/{id}",
				"description": "Requires features: air_cargo.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/air_cargo/air-cargo/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /air_cargo/air-cargo/{id}",
				"value": "air_cargo_delete_air_cargo_air_cargo_id",
				"action": "DELETE /air_cargo/air-cargo/{id}",
				"description": "Requires features: air_cargo.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/air_cargo/air-cargo/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Air Cargo"
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
				"name": "Fetch delayed shipments metrics",
				"value": "frc_rfqs_get_frc_rfqs_dashboard_widgets_delayed",
				"action": "Fetch delayed shipments metrics",
				"description": "Returns count and details for delayed RFQs within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_rfqs/dashboard/widgets/delayed"
					}
				}
			},
			{
				"name": "Fetch RFQ pipeline metrics",
				"value": "frc_rfqs_get_frc_rfqs_dashboard_widgets_pipeline",
				"action": "Fetch RFQ pipeline metrics",
				"description": "Returns RFQ counts and values grouped by sales stage within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_rfqs/dashboard/widgets/pipeline"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo RFQs"
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
				"name": "GET /frc_rfqs/rfqs/board",
				"value": "frc_rfqs_get_frc_rfqs_rfqs_board",
				"action": "GET /frc_rfqs/rfqs/board",
				"description": "Requires features: frc_rfqs.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_rfqs/rfqs/board"
					}
				}
			},
			{
				"name": "GET /frc_rfqs/rfqs",
				"value": "frc_rfqs_get_frc_rfqs_rfqs",
				"action": "GET /frc_rfqs/rfqs",
				"description": "Requires features: frc_rfqs.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_rfqs/rfqs"
					}
				}
			},
			{
				"name": "POST /frc_rfqs/rfqs",
				"value": "frc_rfqs_post_frc_rfqs_rfqs",
				"action": "POST /frc_rfqs/rfqs",
				"description": "Requires features: frc_rfqs.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_rfqs/rfqs"
					}
				}
			},
			{
				"name": "PUT /frc_rfqs/rfqs/{id}/cargo/{cargoId}",
				"value": "frc_rfqs_put_frc_rfqs_rfqs_id_cargo_cargoId",
				"action": "PUT /frc_rfqs/rfqs/{id}/cargo/{cargoId}",
				"description": "Requires features: frc_rfqs.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}/cargo/{{ $parameter.cargoId_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_rfqs/rfqs/{id}/cargo/{cargoId}",
				"value": "frc_rfqs_delete_frc_rfqs_rfqs_id_cargo_cargoId",
				"action": "DELETE /frc_rfqs/rfqs/{id}/cargo/{cargoId}",
				"description": "Requires features: frc_rfqs.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}/cargo/{{ $parameter.cargoId_string }}"
					}
				}
			},
			{
				"name": "GET /frc_rfqs/rfqs/{id}/cargo",
				"value": "frc_rfqs_get_frc_rfqs_rfqs_id_cargo",
				"action": "GET /frc_rfqs/rfqs/{id}/cargo",
				"description": "Requires features: frc_rfqs.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "POST /frc_rfqs/rfqs/{id}/cargo",
				"value": "frc_rfqs_post_frc_rfqs_rfqs_id_cargo",
				"action": "POST /frc_rfqs/rfqs/{id}/cargo",
				"description": "Requires features: frc_rfqs.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "GET /frc_rfqs/rfqs/{id}",
				"value": "frc_rfqs_get_frc_rfqs_rfqs_id",
				"action": "GET /frc_rfqs/rfqs/{id}",
				"description": "Requires features: frc_rfqs.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_rfqs/rfqs/{id}",
				"value": "frc_rfqs_put_frc_rfqs_rfqs_id",
				"action": "PUT /frc_rfqs/rfqs/{id}",
				"description": "Requires features: frc_rfqs.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_rfqs/rfqs/{id}",
				"value": "frc_rfqs_delete_frc_rfqs_rfqs_id",
				"action": "DELETE /frc_rfqs/rfqs/{id}",
				"description": "Requires features: frc_rfqs.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
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
				"name": "Fetch offer conversion rate metrics",
				"value": "frc_offers_get_frc_offers_dashboard_widgets_conversion_rate",
				"action": "Fetch offer conversion rate metrics",
				"description": "Returns conversion rate and breakdown of offers by final status within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_offers/dashboard/widgets/conversion-rate"
					}
				}
			},
			{
				"name": "Fetch upcoming departures",
				"value": "frc_offers_get_frc_offers_dashboard_widgets_upcoming_departures",
				"action": "Fetch upcoming departures",
				"description": "Returns upcoming flight departures within the specified period for the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_offers/dashboard/widgets/upcoming-departures"
					}
				}
			},
			{
				"name": "POST /frc_offers/offers/report/pdf",
				"value": "frc_offers_post_frc_offers_offers_report_pdf",
				"action": "POST /frc_offers/offers/report/pdf",
				"description": "Requires features: frc_offers.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_offers/offers/report/pdf"
					}
				}
			},
			{
				"name": "GET /frc_offers/offers",
				"value": "frc_offers_get_frc_offers_offers",
				"action": "GET /frc_offers/offers",
				"description": "Requires features: frc_offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_offers/offers"
					}
				}
			},
			{
				"name": "POST /frc_offers/offers",
				"value": "frc_offers_post_frc_offers_offers",
				"action": "POST /frc_offers/offers",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_offers/offers"
					}
				}
			},
			{
				"name": "POST /frc_offers/offers/{id}/accept",
				"value": "frc_offers_post_frc_offers_offers_id_accept",
				"action": "POST /frc_offers/offers/{id}/accept",
				"description": "Requires features: frc_offers.manage, frc_projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/accept"
					}
				}
			},
			{
				"name": "PUT /frc_offers/offers/{id}/lines/{lineId}",
				"value": "frc_offers_put_frc_offers_offers_id_lines_lineId",
				"action": "PUT /frc_offers/offers/{id}/lines/{lineId}",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/lines/{{ $parameter.lineId_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_offers/offers/{id}/lines/{lineId}",
				"value": "frc_offers_delete_frc_offers_offers_id_lines_lineId",
				"action": "DELETE /frc_offers/offers/{id}/lines/{lineId}",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/lines/{{ $parameter.lineId_string }}"
					}
				}
			},
			{
				"name": "GET /frc_offers/offers/{id}/lines",
				"value": "frc_offers_get_frc_offers_offers_id_lines",
				"action": "GET /frc_offers/offers/{id}/lines",
				"description": "Requires features: frc_offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "POST /frc_offers/offers/{id}/lines",
				"value": "frc_offers_post_frc_offers_offers_id_lines",
				"action": "POST /frc_offers/offers/{id}/lines",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "GET /frc_offers/offers/{id}",
				"value": "frc_offers_get_frc_offers_offers_id",
				"action": "GET /frc_offers/offers/{id}",
				"description": "Requires features: frc_offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_offers/offers/{id}",
				"value": "frc_offers_put_frc_offers_offers_id",
				"action": "PUT /frc_offers/offers/{id}",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_offers/offers/{id}",
				"value": "frc_offers_delete_frc_offers_offers_id",
				"action": "DELETE /frc_offers/offers/{id}",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_offers/offers/{id}/routing/{routingId}",
				"value": "frc_offers_put_frc_offers_offers_id_routing_routingId",
				"action": "PUT /frc_offers/offers/{id}/routing/{routingId}",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/routing/{{ $parameter.routingId_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_offers/offers/{id}/routing/{routingId}",
				"value": "frc_offers_delete_frc_offers_offers_id_routing_routingId",
				"action": "DELETE /frc_offers/offers/{id}/routing/{routingId}",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/routing/{{ $parameter.routingId_string }}"
					}
				}
			},
			{
				"name": "POST /frc_offers/offers/{id}/routing",
				"value": "frc_offers_post_frc_offers_offers_id_routing",
				"action": "POST /frc_offers/offers/{id}/routing",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/routing"
					}
				}
			},
			{
				"name": "POST /frc_offers/offers/{id}/send",
				"value": "frc_offers_post_frc_offers_offers_id_send",
				"action": "POST /frc_offers/offers/{id}/send",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/send"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
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
				"name": "Get filter suggestions for offer fields",
				"value": "frc_offers_get_frc_offers_filter_suggestions",
				"action": "Get filter suggestions for offer fields",
				"description": "Returns distinct values for a specific field. Handles rfqName specially by joining with frc_rfqs to get RFQ names for offers.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_offers/filter-suggestions"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FRC Offers"
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
				"name": "Fetch truck utilization metrics",
				"value": "frc_trucks_get_frc_trucks_dashboard_widgets_utilization",
				"action": "Fetch truck utilization metrics",
				"description": "Returns truck console counts and profit/loss within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_trucks/dashboard/widgets/utilization"
					}
				}
			},
			{
				"name": "GET /frc_trucks/presets",
				"value": "frc_trucks_get_frc_trucks_presets",
				"action": "GET /frc_trucks/presets",
				"description": "Requires features: frc_trucks.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_trucks/presets"
					}
				}
			},
			{
				"name": "POST /frc_trucks/presets",
				"value": "frc_trucks_post_frc_trucks_presets",
				"action": "POST /frc_trucks/presets",
				"description": "Requires features: frc_trucks.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_trucks/presets"
					}
				}
			},
			{
				"name": "GET /frc_trucks/trucks",
				"value": "frc_trucks_get_frc_trucks_trucks",
				"action": "GET /frc_trucks/trucks",
				"description": "Requires features: frc_trucks.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_trucks/trucks"
					}
				}
			},
			{
				"name": "POST /frc_trucks/trucks",
				"value": "frc_trucks_post_frc_trucks_trucks",
				"action": "POST /frc_trucks/trucks",
				"description": "Requires features: frc_trucks.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_trucks/trucks"
					}
				}
			},
			{
				"name": "GET /frc_trucks/presets/{id}",
				"value": "frc_trucks_get_frc_trucks_presets_id",
				"action": "GET /frc_trucks/presets/{id}",
				"description": "Requires features: frc_trucks.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_trucks/presets/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_trucks/presets/{id}",
				"value": "frc_trucks_put_frc_trucks_presets_id",
				"action": "PUT /frc_trucks/presets/{id}",
				"description": "Requires features: frc_trucks.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_trucks/presets/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_trucks/presets/{id}",
				"value": "frc_trucks_delete_frc_trucks_presets_id",
				"action": "DELETE /frc_trucks/presets/{id}",
				"description": "Requires features: frc_trucks.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_trucks/presets/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /frc_trucks/trucks/{id}",
				"value": "frc_trucks_get_frc_trucks_trucks_id",
				"action": "GET /frc_trucks/trucks/{id}",
				"description": "Requires features: frc_trucks.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_trucks/trucks/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_trucks/trucks/{id}",
				"value": "frc_trucks_put_frc_trucks_trucks_id",
				"action": "PUT /frc_trucks/trucks/{id}",
				"description": "Requires features: frc_trucks.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_trucks/trucks/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_trucks/trucks/{id}",
				"value": "frc_trucks_delete_frc_trucks_trucks_id",
				"action": "DELETE /frc_trucks/trucks/{id}",
				"description": "Requires features: frc_trucks.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_trucks/trucks/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Trucks"
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
				"name": "GET /frc_projects/projects",
				"value": "frc_projects_get_frc_projects_projects",
				"action": "GET /frc_projects/projects",
				"description": "Requires features: frc_projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_projects/projects"
					}
				}
			},
			{
				"name": "POST /frc_projects/projects",
				"value": "frc_projects_post_frc_projects_projects",
				"action": "POST /frc_projects/projects",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_projects/projects"
					}
				}
			},
			{
				"name": "PUT /frc_projects/projects/{id}/cargo/{assignmentId}",
				"value": "frc_projects_put_frc_projects_projects_id_cargo_assignmentId",
				"action": "PUT /frc_projects/projects/{id}/cargo/{assignmentId}",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}/cargo/{{ $parameter.assignmentId_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_projects/projects/{id}/cargo/{assignmentId}",
				"value": "frc_projects_delete_frc_projects_projects_id_cargo_assignmentId",
				"action": "DELETE /frc_projects/projects/{id}/cargo/{assignmentId}",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}/cargo/{{ $parameter.assignmentId_string }}"
					}
				}
			},
			{
				"name": "GET /frc_projects/projects/{id}/cargo",
				"value": "frc_projects_get_frc_projects_projects_id_cargo",
				"action": "GET /frc_projects/projects/{id}/cargo",
				"description": "Requires features: frc_projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "POST /frc_projects/projects/{id}/cargo",
				"value": "frc_projects_post_frc_projects_projects_id_cargo",
				"action": "POST /frc_projects/projects/{id}/cargo",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "GET /frc_projects/projects/{id}",
				"value": "frc_projects_get_frc_projects_projects_id",
				"action": "GET /frc_projects/projects/{id}",
				"description": "Requires features: frc_projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_projects/projects/{id}",
				"value": "frc_projects_put_frc_projects_projects_id",
				"action": "PUT /frc_projects/projects/{id}",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_projects/projects/{id}",
				"value": "frc_projects_delete_frc_projects_projects_id",
				"action": "DELETE /frc_projects/projects/{id}",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /frc_projects/projects/{id}/routing/{routingId}",
				"value": "frc_projects_get_frc_projects_projects_id_routing_routingId",
				"action": "GET /frc_projects/projects/{id}/routing/{routingId}",
				"description": "Requires features: frc_projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}/routing/{{ $parameter.routingId_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_projects/projects/{id}/routing/{routingId}",
				"value": "frc_projects_put_frc_projects_projects_id_routing_routingId",
				"action": "PUT /frc_projects/projects/{id}/routing/{routingId}",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}/routing/{{ $parameter.routingId_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_projects/projects/{id}/routing/{routingId}",
				"value": "frc_projects_delete_frc_projects_projects_id_routing_routingId",
				"action": "DELETE /frc_projects/projects/{id}/routing/{routingId}",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}/routing/{{ $parameter.routingId_string }}"
					}
				}
			},
			{
				"name": "GET /frc_projects/projects/{id}/routing",
				"value": "frc_projects_get_frc_projects_projects_id_routing",
				"action": "GET /frc_projects/projects/{id}/routing",
				"description": "Requires features: frc_projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}/routing"
					}
				}
			},
			{
				"name": "POST /frc_projects/projects/{id}/routing",
				"value": "frc_projects_post_frc_projects_projects_id_routing",
				"action": "POST /frc_projects/projects/{id}/routing",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}/routing"
					}
				}
			},
			{
				"name": "POST /frc_projects/projects/{id}/routing/sync",
				"value": "frc_projects_post_frc_projects_projects_id_routing_sync",
				"action": "POST /frc_projects/projects/{id}/routing/sync",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}/routing/sync"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Projects"
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
				"name": "GET /frc_console/console",
				"value": "frc_console_get_frc_console_console",
				"action": "GET /frc_console/console",
				"description": "Requires features: frc_console.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_console/console"
					}
				}
			},
			{
				"name": "POST /frc_console/console",
				"value": "frc_console_post_frc_console_console",
				"action": "POST /frc_console/console",
				"description": "Requires features: frc_console.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_console/console"
					}
				}
			},
			{
				"name": "GET /frc_console/console/{id}/bookings",
				"value": "frc_console_get_frc_console_console_id_bookings",
				"action": "GET /frc_console/console/{id}/bookings",
				"description": "Requires features: frc_console.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_console/console/{{ $parameter.id_string }}/bookings"
					}
				}
			},
			{
				"name": "PUT /frc_console/console/{id}/cargo/{itemId}",
				"value": "frc_console_put_frc_console_console_id_cargo_itemId",
				"action": "PUT /frc_console/console/{id}/cargo/{itemId}",
				"description": "Requires features: frc_console.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_console/console/{{ $parameter.id_string }}/cargo/{{ $parameter.itemId_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_console/console/{id}/cargo/{itemId}",
				"value": "frc_console_delete_frc_console_console_id_cargo_itemId",
				"action": "DELETE /frc_console/console/{id}/cargo/{itemId}",
				"description": "Requires features: frc_console.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_console/console/{{ $parameter.id_string }}/cargo/{{ $parameter.itemId_string }}"
					}
				}
			},
			{
				"name": "GET /frc_console/console/{id}/cargo",
				"value": "frc_console_get_frc_console_console_id_cargo",
				"action": "GET /frc_console/console/{id}/cargo",
				"description": "Requires features: frc_console.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_console/console/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "POST /frc_console/console/{id}/cargo",
				"value": "frc_console_post_frc_console_console_id_cargo",
				"action": "POST /frc_console/console/{id}/cargo",
				"description": "Requires features: frc_console.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_console/console/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "GET /frc_console/console/{id}",
				"value": "frc_console_get_frc_console_console_id",
				"action": "GET /frc_console/console/{id}",
				"description": "Requires features: frc_console.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_console/console/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_console/console/{id}",
				"value": "frc_console_put_frc_console_console_id",
				"action": "PUT /frc_console/console/{id}",
				"description": "Requires features: frc_console.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_console/console/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_console/console/{id}",
				"value": "frc_console_delete_frc_console_console_id",
				"action": "DELETE /frc_console/console/{id}",
				"description": "Requires features: frc_console.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_console/console/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "POST /frc_console/console/{id}/sync-cargo",
				"value": "frc_console_post_frc_console_console_id_sync_cargo",
				"action": "POST /frc_console/console/{id}/sync-cargo",
				"description": "Requires features: frc_console.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_console/console/{{ $parameter.id_string }}/sync-cargo"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Console"
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
				"name": "GET /frc_contractors/contractors",
				"value": "frc_contractors_get_frc_contractors_contractors",
				"action": "GET /frc_contractors/contractors",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_contractors/contractors"
					}
				}
			},
			{
				"name": "POST /frc_contractors/contractors",
				"value": "frc_contractors_post_frc_contractors_contractors",
				"action": "POST /frc_contractors/contractors",
				"description": "Requires features: contractors.create",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_contractors/contractors"
					}
				}
			},
			{
				"name": "GET /frc_contractors/contractors/{id}/offers",
				"value": "frc_contractors_get_frc_contractors_contractors_id_offers",
				"action": "GET /frc_contractors/contractors/{id}/offers",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_contractors/contractors/{{ $parameter.id_string }}/offers"
					}
				}
			},
			{
				"name": "GET /frc_contractors/contractors/{id}/rfqs",
				"value": "frc_contractors_get_frc_contractors_contractors_id_rfqs",
				"action": "GET /frc_contractors/contractors/{id}/rfqs",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_contractors/contractors/{{ $parameter.id_string }}/rfqs"
					}
				}
			},
			{
				"name": "GET /frc_contractors/contractors/{id}",
				"value": "frc_contractors_get_frc_contractors_contractors_id",
				"action": "GET /frc_contractors/contractors/{id}",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_contractors/contractors/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_contractors/contractors/{id}",
				"value": "frc_contractors_put_frc_contractors_contractors_id",
				"action": "PUT /frc_contractors/contractors/{id}",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_contractors/contractors/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_contractors/contractors/{id}",
				"value": "frc_contractors_delete_frc_contractors_contractors_id",
				"action": "DELETE /frc_contractors/contractors/{id}",
				"description": "Requires features: contractors.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_contractors/contractors/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Contractors"
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
				"name": "Get available SugarCRM modules",
				"value": "frc_settings_get_frc_settings_integrations_sugarcrm_modules",
				"action": "Get available SugarCRM modules",
				"description": "Fetches the list of modules from the connected SugarCRM instance, indicating which ones can be mapped to 4RCargo entities.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_settings/integrations/sugarcrm/modules"
					}
				}
			},
			{
				"name": "Get SugarCRM settings",
				"value": "frc_settings_get_frc_settings_integrations_sugarcrm",
				"action": "Get SugarCRM settings",
				"description": "Returns credential status (from env vars) and per-tenant integration settings.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_settings/integrations/sugarcrm"
					}
				}
			},
			{
				"name": "Update SugarCRM settings",
				"value": "frc_settings_put_frc_settings_integrations_sugarcrm",
				"action": "Update SugarCRM settings",
				"description": "Updates per-tenant settings (isEnabled). Credentials must be set via environment variables.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_settings/integrations/sugarcrm"
					}
				}
			},
			{
				"name": "Trigger SugarCRM synchronization",
				"value": "frc_settings_post_frc_settings_integrations_sugarcrm_sync",
				"action": "Trigger SugarCRM synchronization",
				"description": "Syncs data from SugarCRM to 4RCargo. Imports Accounts, Contacts, Opportunities, and configured custom modules.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_settings/integrations/sugarcrm/sync"
					}
				}
			},
			{
				"name": "Test SugarCRM connection",
				"value": "frc_settings_post_frc_settings_integrations_sugarcrm_test",
				"action": "Test SugarCRM connection",
				"description": "Tests the connection to SugarCRM using credentials from environment variables (SUGARCRM_INSTANCE_URL, SUGARCRM_USERNAME, SUGARCRM_PASSWORD).",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_settings/integrations/sugarcrm/test"
					}
				}
			},
			{
				"name": "List offer templates",
				"value": "frc_settings_get_frc_settings_offer_templates",
				"action": "List offer templates",
				"description": "Requires features: frc_settings.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_settings/offer-templates"
					}
				}
			},
			{
				"name": "Create offer template",
				"value": "frc_settings_post_frc_settings_offer_templates",
				"action": "Create offer template",
				"description": "Requires features: frc_settings.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_settings/offer-templates"
					}
				}
			},
			{
				"name": "List carrier pricing overrides",
				"value": "frc_settings_get_frc_settings_pricing_carriers",
				"action": "List carrier pricing overrides",
				"description": "Returns all carrier-specific pricing overrides.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_settings/pricing/carriers"
					}
				}
			},
			{
				"name": "Create carrier pricing override",
				"value": "frc_settings_post_frc_settings_pricing_carriers",
				"action": "Create carrier pricing override",
				"description": "Creates a new pricing override for a specific carrier.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_settings/pricing/carriers"
					}
				}
			},
			{
				"name": "Get pricing settings",
				"value": "frc_settings_get_frc_settings_pricing",
				"action": "Get pricing settings",
				"description": "Returns volumetric conversion factors and other pricing settings. Returns defaults if no custom configuration exists.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_settings/pricing"
					}
				}
			},
			{
				"name": "Update pricing settings",
				"value": "frc_settings_put_frc_settings_pricing",
				"action": "Update pricing settings",
				"description": "Updates pricing configuration. Creates new config if none exists.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_settings/pricing"
					}
				}
			},
			{
				"name": "Get offer template",
				"value": "frc_settings_get_frc_settings_offer_templates_id",
				"action": "Get offer template",
				"description": "Requires features: frc_settings.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_settings/offer-templates/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Update offer template",
				"value": "frc_settings_put_frc_settings_offer_templates_id",
				"action": "Update offer template",
				"description": "Requires features: frc_settings.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_settings/offer-templates/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Delete offer template",
				"value": "frc_settings_delete_frc_settings_offer_templates_id",
				"action": "Delete offer template",
				"description": "Requires features: frc_settings.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_settings/offer-templates/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "Get carrier pricing override",
				"value": "frc_settings_get_frc_settings_pricing_carriers_carrierId",
				"action": "Get carrier pricing override",
				"description": "Returns pricing override for a specific carrier.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_settings/pricing/carriers/{{ $parameter.carrierId_string }}"
					}
				}
			},
			{
				"name": "Update carrier pricing override",
				"value": "frc_settings_put_frc_settings_pricing_carriers_carrierId",
				"action": "Update carrier pricing override",
				"description": "Updates pricing override for a specific carrier.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_settings/pricing/carriers/{{ $parameter.carrierId_string }}"
					}
				}
			},
			{
				"name": "Delete carrier pricing override",
				"value": "frc_settings_delete_frc_settings_pricing_carriers_carrierId",
				"action": "Delete carrier pricing override",
				"description": "Removes pricing override for a specific carrier.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_settings/pricing/carriers/{{ $parameter.carrierId_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
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
					"4R Cargo Console"
				],
				"operation": [
					"frc_console_delete_frc_console_console_id"
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
					"4R Cargo Console"
				],
				"operation": [
					"frc_console_delete_frc_console_console_id_cargo_itemId"
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
					"4R Cargo Console"
				],
				"operation": [
					"frc_console_delete_frc_console_console_id_cargo_itemId"
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
					"4R Cargo Console"
				],
				"operation": [
					"frc_console_get_frc_console_console_id"
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
					"4R Cargo Console"
				],
				"operation": [
					"frc_console_get_frc_console_console_id_bookings"
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
					"4R Cargo Console"
				],
				"operation": [
					"frc_console_get_frc_console_console_id_cargo"
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
					"4R Cargo Console"
				],
				"operation": [
					"frc_console_post_frc_console_console_id_cargo"
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
					"4R Cargo Console"
				],
				"operation": [
					"frc_console_post_frc_console_console_id_sync_cargo"
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
					"4R Cargo Console"
				],
				"operation": [
					"frc_console_put_frc_console_console_id"
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
					"4R Cargo Console"
				],
				"operation": [
					"frc_console_put_frc_console_console_id_cargo_itemId"
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
					"4R Cargo Console"
				],
				"operation": [
					"frc_console_put_frc_console_console_id_cargo_itemId"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_delete_frc_offers_offers_id"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_delete_frc_offers_offers_id_lines_lineId"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_delete_frc_offers_offers_id_lines_lineId"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_delete_frc_offers_offers_id_routing_routingId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Routing Id",
		"name": "routingId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_delete_frc_offers_offers_id_routing_routingId"
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
					"showComparison": "={{ $value }}"
				}
			}
		},
		"displayName": "Show Comparison",
		"name": "showComparison_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_get_frc_offers_dashboard_widgets_conversion_rate"
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
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "last7",
						"value": "last7"
					},
					{
						"name": "last30",
						"value": "last30"
					},
					{
						"name": "last90",
						"value": "last90"
					},
					{
						"name": "thisMonth",
						"value": "thisMonth"
					},
					{
						"name": "thisQuarter",
						"value": "thisQuarter"
					}
				],
				"displayName": "Date Range",
				"name": "dateRange_options"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"dateRange": "={{ $value.dateRange_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_get_frc_offers_dashboard_widgets_conversion_rate"
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
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Days Ahead",
				"name": "daysAhead_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Max Items",
				"name": "maxItems_number"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"daysAhead": "={{ $value.daysAhead_number }}",
					"maxItems": "={{ $value.maxItems_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_get_frc_offers_dashboard_widgets_upcoming_departures"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_get_frc_offers_offers_id"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_get_frc_offers_offers_id_lines"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_post_frc_offers_offers_id_accept"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_post_frc_offers_offers_id_lines"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_post_frc_offers_offers_id_routing"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_post_frc_offers_offers_id_send"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_put_frc_offers_offers_id"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_put_frc_offers_offers_id_lines_lineId"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_put_frc_offers_offers_id_lines_lineId"
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
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_put_frc_offers_offers_id_routing_routingId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Routing Id",
		"name": "routingId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_put_frc_offers_offers_id_routing_routingId"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_delete_frc_projects_projects_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Assignment Id",
		"name": "assignmentId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_delete_frc_projects_projects_id_cargo_assignmentId"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_delete_frc_projects_projects_id_cargo_assignmentId"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_delete_frc_projects_projects_id_routing_routingId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Routing Id",
		"name": "routingId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_delete_frc_projects_projects_id_routing_routingId"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_get_frc_projects_projects_id"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_get_frc_projects_projects_id_cargo"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_get_frc_projects_projects_id_routing"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_get_frc_projects_projects_id_routing_routingId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Routing Id",
		"name": "routingId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_get_frc_projects_projects_id_routing_routingId"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_post_frc_projects_projects_id_cargo"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_post_frc_projects_projects_id_routing"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_post_frc_projects_projects_id_routing_sync"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_put_frc_projects_projects_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Assignment Id",
		"name": "assignmentId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_put_frc_projects_projects_id_cargo_assignmentId"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_put_frc_projects_projects_id_cargo_assignmentId"
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
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_put_frc_projects_projects_id_routing_routingId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Routing Id",
		"name": "routingId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_put_frc_projects_projects_id_routing_routingId"
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
					"4R Cargo RFQs"
				],
				"operation": [
					"frc_rfqs_get_frc_rfqs_dashboard_widgets_delayed"
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
					"showComparison": "={{ $value }}"
				}
			}
		},
		"displayName": "Show Comparison",
		"name": "showComparison_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo RFQs"
				],
				"operation": [
					"frc_rfqs_get_frc_rfqs_dashboard_widgets_pipeline"
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
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "last7",
						"value": "last7"
					},
					{
						"name": "last30",
						"value": "last30"
					},
					{
						"name": "last90",
						"value": "last90"
					},
					{
						"name": "thisMonth",
						"value": "thisMonth"
					},
					{
						"name": "thisQuarter",
						"value": "thisQuarter"
					}
				],
				"displayName": "Date Range",
				"name": "dateRange_options"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"dateRange": "={{ $value.dateRange_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo RFQs"
				],
				"operation": [
					"frc_rfqs_get_frc_rfqs_dashboard_widgets_pipeline"
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
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_delete_frc_settings_offer_templates_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Carrier Id",
		"name": "carrierId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_delete_frc_settings_pricing_carriers_carrierId"
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
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_get_frc_settings_offer_templates_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Carrier Id",
		"name": "carrierId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_get_frc_settings_pricing_carriers_carrierId"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_frc_settings_post_frc_settings_integrations_sugarcrm_sync",
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
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_integrations_sugarcrm_sync"
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
				"displayName": "Since",
				"name": "since_string"
			},
			{
				"type": "json",
				"displayName": "Modules",
				"name": "modules_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Max Records Per Module",
				"name": "maxRecordsPerModule_number"
			}
		],
		"routing": {
			"request": {
				"body": {
					"since": "={{ $value.since_string }}",
					"modules": "={{ JSON.parse($value.modules_json) }}",
					"maxRecordsPerModule": "={{ $value.maxRecordsPerModule_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_integrations_sugarcrm_sync"
				],
				"bodyInputMode_frc_settings_post_frc_settings_integrations_sugarcrm_sync": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_frc_settings_post_frc_settings_integrations_sugarcrm_sync",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_integrations_sugarcrm_sync"
				],
				"bodyInputMode_frc_settings_post_frc_settings_integrations_sugarcrm_sync": [
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
				"property": "contentTemplate"
			}
		},
		"displayName": "Content Template",
		"name": "contentTemplate_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_offer_templates"
				]
			}
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
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_offer_templates"
				]
			}
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
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_offer_templates"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_frc_settings_post_frc_settings_offer_templates",
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
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_offer_templates"
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
				"displayName": "Is Default",
				"name": "isDefault_boolean"
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
					"isDefault": "={{ $value.isDefault_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_offer_templates"
				],
				"bodyInputMode_frc_settings_post_frc_settings_offer_templates": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_frc_settings_post_frc_settings_offer_templates",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_offer_templates"
				],
				"bodyInputMode_frc_settings_post_frc_settings_offer_templates": [
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
				"property": "carrierId"
			}
		},
		"displayName": "Carrier Id",
		"name": "carrierId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_pricing_carriers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "carrierName"
			}
		},
		"displayName": "Carrier Name",
		"name": "carrierName_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_pricing_carriers"
				]
			}
		}
	},
	{
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "air",
				"value": "air"
			},
			{
				"name": "sea",
				"value": "sea"
			},
			{
				"name": "road",
				"value": "road"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "transportMode"
			}
		},
		"displayName": "Transport Mode",
		"name": "transportMode_options",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_pricing_carriers"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_frc_settings_post_frc_settings_pricing_carriers",
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
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_pricing_carriers"
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
					"pattern": "^\\d+(\\.\\d{1,2})?$"
				},
				"displayName": "Volumetric Factor",
				"name": "volumetricFactor_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^\\d+(\\.\\d{1,2})?$"
				},
				"displayName": "Min Chargeable Weight Kg",
				"name": "minChargeableWeightKg_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"volumetricFactor": "={{ $value.volumetricFactor_string }}",
					"minChargeableWeightKg": "={{ $value.minChargeableWeightKg_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_pricing_carriers"
				],
				"bodyInputMode_frc_settings_post_frc_settings_pricing_carriers": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_frc_settings_post_frc_settings_pricing_carriers",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_post_frc_settings_pricing_carriers"
				],
				"bodyInputMode_frc_settings_post_frc_settings_pricing_carriers": [
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
		"name": "bodyInputMode_frc_settings_put_frc_settings_integrations_sugarcrm",
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
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_integrations_sugarcrm"
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
				"displayName": "Sync Modules",
				"name": "syncModules_json",
				"default": "[]",
				"required": false
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
					"syncModules": "={{ JSON.parse($value.syncModules_json) }}",
					"isEnabled": "={{ $value.isEnabled_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_integrations_sugarcrm"
				],
				"bodyInputMode_frc_settings_put_frc_settings_integrations_sugarcrm": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_frc_settings_put_frc_settings_integrations_sugarcrm",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_integrations_sugarcrm"
				],
				"bodyInputMode_frc_settings_put_frc_settings_integrations_sugarcrm": [
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
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_offer_templates_id"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_frc_settings_put_frc_settings_offer_templates_id",
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
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_offer_templates_id"
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
				"type": "string",
				"default": "",
				"displayName": "Subject Template",
				"name": "subjectTemplate_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Content Template",
				"name": "contentTemplate_string"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"name": "={{ $value.name_string }}",
					"description": "={{ $value.description_string }}",
					"subjectTemplate": "={{ $value.subjectTemplate_string }}",
					"contentTemplate": "={{ $value.contentTemplate_string }}",
					"isDefault": "={{ $value.isDefault_boolean }}",
					"isActive": "={{ $value.isActive_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_offer_templates_id"
				],
				"bodyInputMode_frc_settings_put_frc_settings_offer_templates_id": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_frc_settings_put_frc_settings_offer_templates_id",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_offer_templates_id"
				],
				"bodyInputMode_frc_settings_put_frc_settings_offer_templates_id": [
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
		"name": "bodyInputMode_frc_settings_put_frc_settings_pricing",
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
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_pricing"
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
					"pattern": "^\\d+(\\.\\d{1,2})?$"
				},
				"displayName": "Air Volumetric Factor",
				"name": "airVolumetricFactor_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^\\d+(\\.\\d{1,2})?$"
				},
				"displayName": "Sea Volumetric Factor",
				"name": "seaVolumetricFactor_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^\\d+(\\.\\d{1,2})?$"
				},
				"displayName": "Road Volumetric Factor",
				"name": "roadVolumetricFactor_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^\\d+(\\.\\d{1,2})?$"
				},
				"displayName": "Truck Width Metres",
				"name": "truckWidthMetres_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^\\d+(\\.\\d{1,2})?$"
				},
				"displayName": "Min Chargeable Weight Kg",
				"name": "minChargeableWeightKg_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"airVolumetricFactor": "={{ $value.airVolumetricFactor_string }}",
					"seaVolumetricFactor": "={{ $value.seaVolumetricFactor_string }}",
					"roadVolumetricFactor": "={{ $value.roadVolumetricFactor_string }}",
					"truckWidthMetres": "={{ $value.truckWidthMetres_string }}",
					"minChargeableWeightKg": "={{ $value.minChargeableWeightKg_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_pricing"
				],
				"bodyInputMode_frc_settings_put_frc_settings_pricing": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_frc_settings_put_frc_settings_pricing",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_pricing"
				],
				"bodyInputMode_frc_settings_put_frc_settings_pricing": [
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
		"displayName": "Carrier Id",
		"name": "carrierId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_pricing_carriers_carrierId"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_frc_settings_put_frc_settings_pricing_carriers_carrierId",
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
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_pricing_carriers_carrierId"
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
						"name": "air",
						"value": "air"
					},
					{
						"name": "sea",
						"value": "sea"
					},
					{
						"name": "road",
						"value": "road"
					}
				],
				"displayName": "Transport Mode",
				"name": "transportMode_options"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^\\d+(\\.\\d{1,2})?$"
				},
				"displayName": "Volumetric Factor",
				"name": "volumetricFactor_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^\\d+(\\.\\d{1,2})?$"
				},
				"displayName": "Min Chargeable Weight Kg",
				"name": "minChargeableWeightKg_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"transportMode": "={{ $value.transportMode_options }}",
					"volumetricFactor": "={{ $value.volumetricFactor_string }}",
					"minChargeableWeightKg": "={{ $value.minChargeableWeightKg_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_pricing_carriers_carrierId"
				],
				"bodyInputMode_frc_settings_put_frc_settings_pricing_carriers_carrierId": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_frc_settings_put_frc_settings_pricing_carriers_carrierId",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Settings"
				],
				"operation": [
					"frc_settings_put_frc_settings_pricing_carriers_carrierId"
				],
				"bodyInputMode_frc_settings_put_frc_settings_pricing_carriers_carrierId": [
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
					"4R Cargo Trucks"
				],
				"operation": [
					"frc_trucks_delete_frc_trucks_presets_id"
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
					"4R Cargo Trucks"
				],
				"operation": [
					"frc_trucks_delete_frc_trucks_trucks_id"
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
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "last7",
						"value": "last7"
					},
					{
						"name": "last30",
						"value": "last30"
					},
					{
						"name": "last90",
						"value": "last90"
					},
					{
						"name": "thisMonth",
						"value": "thisMonth"
					},
					{
						"name": "thisQuarter",
						"value": "thisQuarter"
					}
				],
				"displayName": "Date Range",
				"name": "dateRange_options"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"dateRange": "={{ $value.dateRange_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Trucks"
				],
				"operation": [
					"frc_trucks_get_frc_trucks_dashboard_widgets_utilization"
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
					"4R Cargo Trucks"
				],
				"operation": [
					"frc_trucks_get_frc_trucks_presets_id"
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
					"4R Cargo Trucks"
				],
				"operation": [
					"frc_trucks_get_frc_trucks_trucks_id"
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
					"4R Cargo Trucks"
				],
				"operation": [
					"frc_trucks_put_frc_trucks_presets_id"
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
					"4R Cargo Trucks"
				],
				"operation": [
					"frc_trucks_put_frc_trucks_trucks_id"
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
					"Air Cargo"
				],
				"operation": [
					"air_cargo_delete_air_cargo_air_cargo_id"
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
					"Air Cargo"
				],
				"operation": [
					"air_cargo_get_air_cargo_air_cargo_id"
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
					"Air Cargo"
				],
				"operation": [
					"air_cargo_put_air_cargo_air_cargo_id"
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
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Back Office"
				],
				"operation": [
					"back_office_delete_back_office_users_id"
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
					"Back Office"
				],
				"operation": [
					"back_office_put_back_office_users_id"
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
					"contractors_delete_contractors_contractors_id_account_assignees_userId"
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
					"Contractors"
				],
				"operation": [
					"contractors_delete_contractors_contractors_id_account_assignees_userId"
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
					"contractors_delete_contractors_role_types_id"
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
					"contractors_get_contractors_contractors_id_activity"
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
					"contractors_get_contractors_contractors_id_finance_summary"
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
					"contractors_get_contractors_contractors_id_folders"
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
					"contractors_get_contractors_contractors_id_invoices"
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
					"contractors_get_contractors_contractors_id_offers"
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
					"contractors_get_contractors_contractors_id_tab_counts"
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
					"contractors_post_contractors_contractors_id_account_assignees"
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
					"contractors_put_contractors_role_types_id"
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_delete_customer_portal_portal_sessions_id"
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_delete_customer_portal_portal_users_id"
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_get_customer_portal_portal_files_id"
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_get_customer_portal_portal_offers_id"
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_get_customer_portal_portal_offers_id_pdf"
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
			}
		],
		"routing": {
			"request": {
				"qs": {
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal"
				],
				"operation": [
					"customer_portal_get_customer_portal_portal_users"
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_feature_check"
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_folders_id_cancel_draft"
				]
			}
		}
	},
	{
		"type": "json",
		"displayName": "Containers",
		"name": "containers_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "containers"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_offers_id_convert_to_draft"
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_offers_id_convert_to_draft"
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
				"property": "locations",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayName": "Locations",
		"name": "locations_object",
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_offers_id_convert_to_draft"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_customer_portal_post_customer_portal_portal_offers_id_convert_to_draft",
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_offers_id_convert_to_draft"
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
				"displayName": "Variant Offer Id",
				"name": "variantOfferId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Planned Etd",
				"name": "plannedEtd_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Notes",
				"name": "notes_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"variantOfferId": "={{ $value.variantOfferId_string }}",
					"plannedEtd": "={{ $value.plannedEtd_string }}",
					"notes": "={{ $value.notes_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_offers_id_convert_to_draft"
				],
				"bodyInputMode_customer_portal_post_customer_portal_portal_offers_id_convert_to_draft": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_customer_portal_post_customer_portal_portal_offers_id_convert_to_draft",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_offers_id_convert_to_draft"
				],
				"bodyInputMode_customer_portal_post_customer_portal_portal_offers_id_convert_to_draft": [
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_users_invite"
				]
			}
		}
	},
	{
		"type": "json",
		"displayName": "Role Ids",
		"name": "roleIds_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "roleIds"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_users_invite"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_customer_portal_post_customer_portal_portal_users_invite",
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_users_invite"
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
				"displayName": "Customer Entity Id",
				"name": "customerEntityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Display Name",
				"name": "displayName_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"customerEntityId": "={{ $value.customerEntityId_string }}",
					"displayName": "={{ $value.displayName_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_users_invite"
				],
				"bodyInputMode_customer_portal_post_customer_portal_portal_users_invite": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_customer_portal_post_customer_portal_portal_users_invite",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal"
				],
				"operation": [
					"customer_portal_post_customer_portal_portal_users_invite"
				],
				"bodyInputMode_customer_portal_post_customer_portal_portal_users_invite": [
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_put_customer_portal_portal_notifications_id_dismiss"
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_put_customer_portal_portal_notifications_id_read"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_customer_portal_put_customer_portal_portal_profile",
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_put_customer_portal_portal_profile"
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
			}
		],
		"routing": {
			"request": {
				"body": {
					"displayName": "={{ $value.displayName_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal"
				],
				"operation": [
					"customer_portal_put_customer_portal_portal_profile"
				],
				"bodyInputMode_customer_portal_put_customer_portal_portal_profile": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_customer_portal_put_customer_portal_portal_profile",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal"
				],
				"operation": [
					"customer_portal_put_customer_portal_portal_profile"
				],
				"bodyInputMode_customer_portal_put_customer_portal_portal_profile": [
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
					"Customer Portal"
				],
				"operation": [
					"customer_portal_put_customer_portal_portal_users_id_roles"
				]
			}
		}
	},
	{
		"type": "json",
		"displayName": "Role Ids",
		"name": "roleIds_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "roleIds"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal"
				],
				"operation": [
					"customer_portal_put_customer_portal_portal_users_id_roles"
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_delete_customer_portal_admin_invitations_id"
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_delete_customer_portal_admin_roles_id"
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
					"includeInactive": "={{ $value }}"
				}
			}
		},
		"displayName": "Include Inactive",
		"name": "includeInactive_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_get_customer_portal_admin_contacts"
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
					"q": "={{ $value.q_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_get_customer_portal_admin_contacts"
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
						"name": "sent",
						"value": "sent"
					},
					{
						"name": "accepted",
						"value": "accepted"
					},
					{
						"name": "cancelled",
						"value": "cancelled"
					},
					{
						"name": "expired",
						"value": "expired"
					}
				],
				"displayName": "Status",
				"name": "status_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Q",
				"name": "q_string"
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
					"status": "={{ $value.status_options }}",
					"q": "={{ $value.q_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_get_customer_portal_admin_invitations"
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
					"q": "={{ $value.q_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_get_customer_portal_admin_roles"
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_get_customer_portal_admin_roles_id"
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
					"q": "={{ $value.q_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_get_customer_portal_admin_users"
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_get_customer_portal_admin_users_id"
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_roles_id"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_customer_portal_patch_customer_portal_admin_roles_id",
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_roles_id"
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
				"type": "json",
				"displayName": "Feature Ids",
				"name": "featureIds_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Portal Admin",
				"name": "isPortalAdmin_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Customer Assignable",
				"name": "customerAssignable_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Default",
				"name": "isDefault_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"name": "={{ $value.name_string }}",
					"description": "={{ $value.description_string }}",
					"featureIds": "={{ JSON.parse($value.featureIds_json) }}",
					"isPortalAdmin": "={{ $value.isPortalAdmin_boolean }}",
					"customerAssignable": "={{ $value.customerAssignable_boolean }}",
					"isDefault": "={{ $value.isDefault_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_roles_id"
				],
				"bodyInputMode_customer_portal_patch_customer_portal_admin_roles_id": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_customer_portal_patch_customer_portal_admin_roles_id",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_roles_id"
				],
				"bodyInputMode_customer_portal_patch_customer_portal_admin_roles_id": [
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
		"name": "bodyInputMode_customer_portal_patch_customer_portal_admin_settings",
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_settings"
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
				"displayName": "Magic Link Ttl Minutes",
				"name": "magicLinkTtlMinutes_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Invitation Ttl Hours",
				"name": "invitationTtlHours_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Email From Override",
				"name": "emailFromOverride_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Email Reply To Override",
				"name": "emailReplyToOverride_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"magicLinkTtlMinutes": "={{ $value.magicLinkTtlMinutes_number }}",
					"invitationTtlHours": "={{ $value.invitationTtlHours_number }}",
					"emailFromOverride": "={{ $value.emailFromOverride_string }}",
					"emailReplyToOverride": "={{ $value.emailReplyToOverride_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_settings"
				],
				"bodyInputMode_customer_portal_patch_customer_portal_admin_settings": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_customer_portal_patch_customer_portal_admin_settings",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_settings"
				],
				"bodyInputMode_customer_portal_patch_customer_portal_admin_settings": [
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
		"displayName": "Feature Ids",
		"name": "featureIds_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "featureIds"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_users_id_acl"
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_users_id_acl"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_customer_portal_patch_customer_portal_admin_users_id_acl",
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_users_id_acl"
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
				"displayName": "Is Portal Admin",
				"name": "isPortalAdmin_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"isPortalAdmin": "={{ $value.isPortalAdmin_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_users_id_acl"
				],
				"bodyInputMode_customer_portal_patch_customer_portal_admin_users_id_acl": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_customer_portal_patch_customer_portal_admin_users_id_acl",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_users_id_acl"
				],
				"bodyInputMode_customer_portal_patch_customer_portal_admin_users_id_acl": [
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_users_id_roles"
				]
			}
		}
	},
	{
		"type": "json",
		"displayName": "Role Ids",
		"name": "roleIds_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "roleIds"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_patch_customer_portal_admin_users_id_roles"
				]
			}
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_invitations"
				]
			}
		}
	},
	{
		"type": "json",
		"displayName": "Role Ids",
		"name": "roleIds_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "roleIds"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_invitations"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_customer_portal_post_customer_portal_admin_invitations",
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_invitations"
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
				"displayName": "Customer Entity Id",
				"name": "customerEntityId_string"
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
				"displayName": "Display Name",
				"name": "displayName_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"customerEntityId": "={{ $value.customerEntityId_string }}",
					"personEntityId": "={{ $value.personEntityId_string }}",
					"displayName": "={{ $value.displayName_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_invitations"
				],
				"bodyInputMode_customer_portal_post_customer_portal_admin_invitations": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_customer_portal_post_customer_portal_admin_invitations",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_invitations"
				],
				"bodyInputMode_customer_portal_post_customer_portal_admin_invitations": [
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_invitations_id_cancel"
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_invitations_id_resend"
				]
			}
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_roles"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"typeOptions": {
			"pattern": "^[a-z0-9_-]+$"
		},
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_roles"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_customer_portal_post_customer_portal_admin_roles",
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_roles"
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
				"displayName": "Feature Ids",
				"name": "featureIds_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Portal Admin",
				"name": "isPortalAdmin_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Customer Assignable",
				"name": "customerAssignable_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Default",
				"name": "isDefault_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"description": "={{ $value.description_string }}",
					"featureIds": "={{ JSON.parse($value.featureIds_json) }}",
					"isPortalAdmin": "={{ $value.isPortalAdmin_boolean }}",
					"customerAssignable": "={{ $value.customerAssignable_boolean }}",
					"isDefault": "={{ $value.isDefault_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_roles"
				],
				"bodyInputMode_customer_portal_post_customer_portal_admin_roles": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_customer_portal_post_customer_portal_admin_roles",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_roles"
				],
				"bodyInputMode_customer_portal_post_customer_portal_admin_roles": [
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_users_id_lock"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_customer_portal_post_customer_portal_admin_users_id_lock",
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_users_id_lock"
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
				"displayName": "Until",
				"name": "until_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Reason",
				"name": "reason_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"until": "={{ $value.until_string }}",
					"reason": "={{ $value.reason_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_users_id_lock"
				],
				"bodyInputMode_customer_portal_post_customer_portal_admin_users_id_lock": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_customer_portal_post_customer_portal_admin_users_id_lock",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_users_id_lock"
				],
				"bodyInputMode_customer_portal_post_customer_portal_admin_users_id_lock": [
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_users_id_revoke_sessions"
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
					"Customer Portal Admin"
				],
				"operation": [
					"customer_portal_post_customer_portal_admin_users_id_unlock"
				]
			}
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
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_email_templates_put_email_templates_settings",
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
				"displayName": "Company Name",
				"name": "companyName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Company Logo Url",
				"name": "companyLogoUrl_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^#[0-9a-fA-F]{6}$"
				},
				"displayName": "Primary Color",
				"name": "primaryColor_string"
			},
			{
				"type": "string",
				"default": "",
				"typeOptions": {
					"pattern": "^#[0-9a-fA-F]{6}$"
				},
				"displayName": "Accent Color",
				"name": "accentColor_string"
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
				"displayName": "Website Url",
				"name": "websiteUrl_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Footer Text",
				"name": "footerText_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Footer Disclaimer",
				"name": "footerDisclaimer_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "From Name",
				"name": "fromName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "From Email",
				"name": "fromEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Reply To Email",
				"name": "replyToEmail_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"companyName": "={{ $value.companyName_string }}",
					"companyLogoUrl": "={{ $value.companyLogoUrl_string }}",
					"primaryColor": "={{ $value.primaryColor_string }}",
					"accentColor": "={{ $value.accentColor_string }}",
					"contactEmail": "={{ $value.contactEmail_string }}",
					"contactPhone": "={{ $value.contactPhone_string }}",
					"websiteUrl": "={{ $value.websiteUrl_string }}",
					"footerText": "={{ $value.footerText_string }}",
					"footerDisclaimer": "={{ $value.footerDisclaimer_string }}",
					"fromName": "={{ $value.fromName_string }}",
					"fromEmail": "={{ $value.fromEmail_string }}",
					"replyToEmail": "={{ $value.replyToEmail_string }}"
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
				],
				"bodyInputMode_email_templates_put_email_templates_settings": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_email_templates_put_email_templates_settings",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Email Templates"
				],
				"operation": [
					"email_templates_put_email_templates_settings"
				],
				"bodyInputMode_email_templates_put_email_templates_settings": [
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
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_email_templates_put_email_templates_templates",
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
				],
				"bodyInputMode_email_templates_put_email_templates_templates": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_email_templates_put_email_templates_templates",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Email Templates"
				],
				"operation": [
					"email_templates_put_email_templates_templates"
				],
				"bodyInputMode_email_templates_put_email_templates_templates": [
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
					"FRC Offers"
				],
				"operation": [
					"frc_offers_get_frc_offers_filter_suggestions"
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
					"FRC Offers"
				],
				"operation": [
					"frc_offers_get_frc_offers_filter_suggestions"
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
					"Facilities"
				],
				"operation": [
					"facilities_delete_facilities_airports_id"
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
					"Facilities"
				],
				"operation": [
					"facilities_delete_facilities_ports_id"
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
					"Facilities"
				],
				"operation": [
					"facilities_delete_facilities_terminals_id"
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
					"Facilities"
				],
				"operation": [
					"facilities_delete_facilities_unified_id"
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
					"Facilities"
				],
				"operation": [
					"facilities_get_facilities_airports_id"
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
					"Facilities"
				],
				"operation": [
					"facilities_get_facilities_locations_id"
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
					"Facilities"
				],
				"operation": [
					"facilities_get_facilities_ports_id"
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
					"Facilities"
				],
				"operation": [
					"facilities_get_facilities_terminals_id"
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
					"Facilities"
				],
				"operation": [
					"facilities_get_facilities_unified_id"
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
					"Facilities"
				],
				"operation": [
					"facilities_put_facilities_airports_id"
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
					"Facilities"
				],
				"operation": [
					"facilities_put_facilities_ports_id"
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
					"Facilities"
				],
				"operation": [
					"facilities_put_facilities_terminals_id"
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
					"Facilities"
				],
				"operation": [
					"facilities_put_facilities_unified_id"
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
					"Folders"
				],
				"operation": [
					"folders_delete_folders_files_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Doc Id",
		"name": "docId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_delete_folders_files_id_documents_docId"
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
					"Folders"
				],
				"operation": [
					"folders_delete_folders_files_id_documents_docId"
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
					"Folders"
				],
				"operation": [
					"folders_delete_folders_files_id_legs_legId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Leg Id",
		"name": "legId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_delete_folders_files_id_legs_legId"
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
					"Folders"
				],
				"operation": [
					"folders_delete_folders_files_id_lines"
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
					"Folders"
				],
				"operation": [
					"folders_delete_folders_files_id_notes"
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
					"Folders"
				],
				"operation": [
					"folders_delete_folders_files_id_units_unitId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Unit Id",
		"name": "unitId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_delete_folders_files_id_units_unitId"
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
					"Folders"
				],
				"operation": [
					"folders_delete_folders_unit_legs_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Link Id",
		"name": "linkId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_get_folders_document_links_linkId"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_activity"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_cost_rollup"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_document_reviews"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_documents"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_fx_rate"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_invoices"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_legs"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_legs_legId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Leg Id",
		"name": "legId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_legs_legId"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_lines"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_linked_invoices"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_notes"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_units"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_units_unitId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Unit Id",
		"name": "unitId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_get_folders_files_id_units_unitId"
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
					"Folders"
				],
				"operation": [
					"folders_get_folders_unit_legs_id"
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
					"Folders"
				],
				"operation": [
					"folders_patch_folders_files_id_fx_rate"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_customer_drafts_id_approve"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_customer_drafts_id_reject"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Link Id",
		"name": "linkId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_post_folders_document_links_linkId_confirm"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Link Id",
		"name": "linkId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_post_folders_document_links_linkId_reject"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_documents"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_legs"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_legs_fork"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_legs_fork_origin"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_legs_legId_confirm_tracking"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Leg Id",
		"name": "legId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_legs_legId_confirm_tracking"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_legs_legId_timestamps"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Leg Id",
		"name": "legId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_legs_legId_timestamps"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_lines"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_link_offer"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_notes"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_unit_legs_unitLegId_reassign"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Unit Leg Id",
		"name": "unitLegId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_unit_legs_unitLegId_reassign"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_units"
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
					"Folders"
				],
				"operation": [
					"folders_post_folders_files_id_unlink_offer"
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
					"Folders"
				],
				"operation": [
					"folders_put_folders_files_id"
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
					"Folders"
				],
				"operation": [
					"folders_put_folders_files_id_fx_rate"
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
					"Folders"
				],
				"operation": [
					"folders_put_folders_files_id_invoices"
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
					"Folders"
				],
				"operation": [
					"folders_put_folders_files_id_legs_legId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Leg Id",
		"name": "legId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_put_folders_files_id_legs_legId"
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
					"Folders"
				],
				"operation": [
					"folders_put_folders_files_id_lines"
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
					"Folders"
				],
				"operation": [
					"folders_put_folders_files_id_notes"
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
					"Folders"
				],
				"operation": [
					"folders_put_folders_files_id_units_unitId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Unit Id",
		"name": "unitId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Folders"
				],
				"operation": [
					"folders_put_folders_files_id_units_unitId"
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
					"Folders"
				],
				"operation": [
					"folders_put_folders_unit_legs_id"
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
					"Frc Contractors"
				],
				"operation": [
					"frc_contractors_delete_frc_contractors_contractors_id"
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
					"Frc Contractors"
				],
				"operation": [
					"frc_contractors_get_frc_contractors_contractors_id"
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
					"Frc Contractors"
				],
				"operation": [
					"frc_contractors_get_frc_contractors_contractors_id_offers"
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
					"Frc Contractors"
				],
				"operation": [
					"frc_contractors_get_frc_contractors_contractors_id_rfqs"
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
					"Frc Contractors"
				],
				"operation": [
					"frc_contractors_put_frc_contractors_contractors_id"
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
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_delete_frc_rfqs_rfqs_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Cargo Id",
		"name": "cargoId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_delete_frc_rfqs_rfqs_id_cargo_cargoId"
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
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_delete_frc_rfqs_rfqs_id_cargo_cargoId"
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
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_get_frc_rfqs_rfqs_id"
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
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_get_frc_rfqs_rfqs_id_cargo"
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
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_post_frc_rfqs_rfqs_id_cargo"
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
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_put_frc_rfqs_rfqs_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Cargo Id",
		"name": "cargoId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_put_frc_rfqs_rfqs_id_cargo_cargoId"
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
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_put_frc_rfqs_rfqs_id_cargo_cargoId"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_delete_invoicing_expense_categories_id"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_delete_invoicing_invoices_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Alloc Id",
		"name": "allocId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Invoicing"
				],
				"operation": [
					"invoicing_delete_invoicing_invoices_id_allocations_allocId"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_delete_invoicing_invoices_id_allocations_allocId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Alloc Id",
		"name": "allocId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Invoicing"
				],
				"operation": [
					"invoicing_delete_invoicing_invoices_id_allocations_allocId_confirm"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_delete_invoicing_invoices_id_allocations_allocId_confirm"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Folder Id",
		"name": "folderId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Invoicing"
				],
				"operation": [
					"invoicing_delete_invoicing_invoices_id_folders_folderId"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_delete_invoicing_invoices_id_folders_folderId"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_delete_invoicing_invoices_id_payment"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_get_invoicing_expense_categories_id"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_get_invoicing_invoices_id"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_get_invoicing_invoices_id_allocation_context"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_get_invoicing_invoices_id_allocations"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_get_invoicing_invoices_id_pdf"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_get_invoicing_invoices_id_preview_images"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_patch_invoicing_expense_categories_id"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_patch_invoicing_invoices_id"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_allocations"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Alloc Id",
		"name": "allocId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_allocations_allocId_confirm"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_allocations_allocId_confirm"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_allocations_finalize"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_approve"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_cancel"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_contractor_confirm"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_contractor_link"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_create_correction"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_payment"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_quick_link_folder"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_reject"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_resubmit"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_post_invoicing_invoices_id_verify"
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
					"Invoicing"
				],
				"operation": [
					"invoicing_put_invoicing_invoices_id"
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
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_delete_messages_id"
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
					"Messages"
				],
				"operation": [
					"messages_delete_messages_id_archive"
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
					"Messages"
				],
				"operation": [
					"messages_delete_messages_id_attachments"
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
				"displayName": "Attachment Id",
				"name": "attachmentId_string"
			},
			{
				"type": "json",
				"displayName": "Attachment Ids",
				"name": "attachmentIds_json",
				"default": "[]",
				"required": false
			}
		],
		"routing": {
			"request": {
				"body": {
					"attachmentId": "={{ $value.attachmentId_string }}",
					"attachmentIds": "={{ JSON.parse($value.attachmentIds_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_delete_messages_id_attachments"
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
					"Messages"
				],
				"operation": [
					"messages_delete_messages_id_conversation"
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
					"Messages"
				],
				"operation": [
					"messages_delete_messages_id_conversation_read"
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
					"Messages"
				],
				"operation": [
					"messages_delete_messages_id_read"
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
						"name": "inbox",
						"value": "inbox"
					},
					{
						"name": "sent",
						"value": "sent"
					},
					{
						"name": "drafts",
						"value": "drafts"
					},
					{
						"name": "archived",
						"value": "archived"
					},
					{
						"name": "all",
						"value": "all"
					}
				],
				"displayName": "Folder",
				"name": "folder_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "unread",
						"value": "unread"
					},
					{
						"name": "read",
						"value": "read"
					},
					{
						"name": "archived",
						"value": "archived"
					}
				],
				"displayName": "Status",
				"name": "status_options"
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
						"name": "public",
						"value": "public"
					},
					{
						"name": "internal",
						"value": "internal"
					}
				],
				"displayName": "Visibility",
				"name": "visibility_options"
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
				"displayName": "External Email",
				"name": "externalEmail_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Has Objects",
				"name": "hasObjects_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Has Attachments",
				"name": "hasAttachments_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Has Actions",
				"name": "hasActions_boolean"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Sender Id",
				"name": "senderId_string"
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
					"folder": "={{ $value.folder_options }}",
					"status": "={{ $value.status_options }}",
					"type": "={{ $value.type_string }}",
					"visibility": "={{ $value.visibility_options }}",
					"sourceEntityType": "={{ $value.sourceEntityType_string }}",
					"sourceEntityId": "={{ $value.sourceEntityId_string }}",
					"externalEmail": "={{ $value.externalEmail_string }}",
					"hasObjects": "={{ $value.hasObjects_boolean }}",
					"hasAttachments": "={{ $value.hasAttachments_boolean }}",
					"hasActions": "={{ $value.hasActions_boolean }}",
					"senderId": "={{ $value.senderId_string }}",
					"search": "={{ $value.search_string }}",
					"since": "={{ $value.since_string }}",
					"page": "={{ $value.page_number }}",
					"pageSize": "={{ $value.pageSize_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_get_messages"
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
					"Messages"
				],
				"operation": [
					"messages_get_messages_id"
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
					"Messages"
				],
				"operation": [
					"messages_get_messages_id_attachments"
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
					"Messages"
				],
				"operation": [
					"messages_get_messages_id_confirmation"
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
					"Messages"
				],
				"operation": [
					"messages_get_messages_id_forward_preview"
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
					"messageType": "={{ $value }}"
				}
			}
		},
		"displayName": "Message Type",
		"name": "messageType_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_get_messages_object_types"
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
					"Messages"
				],
				"operation": [
					"messages_get_messages_token_token"
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
					"Messages"
				],
				"operation": [
					"messages_patch_messages_id"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_messages_patch_messages_id",
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
					"Messages"
				],
				"operation": [
					"messages_patch_messages_id"
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
				"displayName": "Type",
				"name": "type_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "public",
						"value": "public"
					},
					{
						"name": "internal",
						"value": "internal"
					}
				],
				"displayName": "Visibility",
				"name": "visibility_options"
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
				"displayName": "External Email",
				"name": "externalEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "External Name",
				"name": "externalName_string"
			},
			{
				"type": "json",
				"displayName": "Recipients",
				"name": "recipients_json",
				"default": "[]",
				"required": false
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
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "text",
						"value": "text"
					},
					{
						"name": "markdown",
						"value": "markdown"
					}
				],
				"displayName": "Body Format",
				"name": "bodyFormat_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "low",
						"value": "low"
					},
					{
						"name": "normal",
						"value": "normal"
					},
					{
						"name": "high",
						"value": "high"
					},
					{
						"name": "urgent",
						"value": "urgent"
					}
				],
				"displayName": "Priority",
				"name": "priority_options"
			},
			{
				"type": "json",
				"displayName": "Objects",
				"name": "objects_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Attachment Ids",
				"name": "attachmentIds_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"required": true,
				"default": "{}",
				"displayName": "Action Data",
				"name": "action_data_object"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Send Via Email",
				"name": "sendViaEmail_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"type": "={{ $value.type_string }}",
					"visibility": "={{ $value.visibility_options }}",
					"sourceEntityType": "={{ $value.sourceEntityType_string }}",
					"sourceEntityId": "={{ $value.sourceEntityId_string }}",
					"externalEmail": "={{ $value.externalEmail_string }}",
					"externalName": "={{ $value.externalName_string }}",
					"recipients": "={{ JSON.parse($value.recipients_json) }}",
					"subject": "={{ $value.subject_string }}",
					"body": "={{ $value.body_string }}",
					"bodyFormat": "={{ $value.bodyFormat_options }}",
					"priority": "={{ $value.priority_options }}",
					"objects": "={{ JSON.parse($value.objects_json) }}",
					"attachmentIds": "={{ JSON.parse($value.attachmentIds_json) }}",
					"actionData": "={{ JSON.parse($value.action_data_object) }}",
					"sendViaEmail": "={{ $value.sendViaEmail_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_patch_messages_id"
				],
				"bodyInputMode_messages_patch_messages_id": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_messages_patch_messages_id",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_patch_messages_id"
				],
				"bodyInputMode_messages_patch_messages_id": [
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
		"name": "bodyInputMode_messages_post_messages",
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
					"Messages"
				],
				"operation": [
					"messages_post_messages"
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
				"displayName": "Type",
				"name": "type_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "public",
						"value": "public"
					},
					{
						"name": "internal",
						"value": "internal"
					}
				],
				"displayName": "Visibility",
				"name": "visibility_options"
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
				"displayName": "External Email",
				"name": "externalEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "External Name",
				"name": "externalName_string"
			},
			{
				"type": "json",
				"displayName": "Recipients",
				"name": "recipients_json",
				"default": "[]",
				"required": false
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
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "text",
						"value": "text"
					},
					{
						"name": "markdown",
						"value": "markdown"
					}
				],
				"displayName": "Body Format",
				"name": "bodyFormat_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "low",
						"value": "low"
					},
					{
						"name": "normal",
						"value": "normal"
					},
					{
						"name": "high",
						"value": "high"
					},
					{
						"name": "urgent",
						"value": "urgent"
					}
				],
				"displayName": "Priority",
				"name": "priority_options"
			},
			{
				"type": "json",
				"displayName": "Objects",
				"name": "objects_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Attachment Ids",
				"name": "attachmentIds_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Attachment Record Id",
				"name": "attachmentRecordId_string"
			},
			{
				"type": "json",
				"required": true,
				"default": "{}",
				"displayName": "Action Data",
				"name": "action_data_object"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Send Via Email",
				"name": "sendViaEmail_boolean"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Parent Message Id",
				"name": "parentMessageId_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Is Draft",
				"name": "isDraft_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"type": "={{ $value.type_string }}",
					"visibility": "={{ $value.visibility_options }}",
					"sourceEntityType": "={{ $value.sourceEntityType_string }}",
					"sourceEntityId": "={{ $value.sourceEntityId_string }}",
					"externalEmail": "={{ $value.externalEmail_string }}",
					"externalName": "={{ $value.externalName_string }}",
					"recipients": "={{ JSON.parse($value.recipients_json) }}",
					"subject": "={{ $value.subject_string }}",
					"body": "={{ $value.body_string }}",
					"bodyFormat": "={{ $value.bodyFormat_options }}",
					"priority": "={{ $value.priority_options }}",
					"objects": "={{ JSON.parse($value.objects_json) }}",
					"attachmentIds": "={{ JSON.parse($value.attachmentIds_json) }}",
					"attachmentRecordId": "={{ $value.attachmentRecordId_string }}",
					"actionData": "={{ JSON.parse($value.action_data_object) }}",
					"sendViaEmail": "={{ $value.sendViaEmail_boolean }}",
					"parentMessageId": "={{ $value.parentMessageId_string }}",
					"isDraft": "={{ $value.isDraft_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_post_messages"
				],
				"bodyInputMode_messages_post_messages": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_messages_post_messages",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_post_messages"
				],
				"bodyInputMode_messages_post_messages": [
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
		"displayName": "Action Id",
		"name": "actionId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_actions_actionId"
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
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_actions_actionId"
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
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_actions_actionId"
				]
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
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_attachments"
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
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_attachments"
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
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_forward"
				]
			}
		}
	},
	{
		"type": "json",
		"displayName": "Recipients",
		"name": "recipients_json",
		"default": "[]",
		"required": true,
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ JSON.parse($value) }}",
				"property": "recipients"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_forward"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_messages_post_messages_id_forward",
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
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_forward"
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
				"displayName": "Additional Body",
				"name": "additionalBody_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Include Attachments",
				"name": "includeAttachments_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Send Via Email",
				"name": "sendViaEmail_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"body": "={{ $value.body_string }}",
					"additionalBody": "={{ $value.additionalBody_string }}",
					"includeAttachments": "={{ $value.includeAttachments_boolean }}",
					"sendViaEmail": "={{ $value.sendViaEmail_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_forward"
				],
				"bodyInputMode_messages_post_messages_id_forward": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_messages_post_messages_id_forward",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_forward"
				],
				"bodyInputMode_messages_post_messages_id_forward": [
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
				"property": "body"
			}
		},
		"displayName": "Body",
		"name": "body_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_reply"
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
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_reply"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_messages_post_messages_id_reply",
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
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_reply"
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
						"name": "text",
						"value": "text"
					},
					{
						"name": "markdown",
						"value": "markdown"
					}
				],
				"displayName": "Body Format",
				"name": "bodyFormat_options"
			},
			{
				"type": "json",
				"displayName": "Recipients",
				"name": "recipients_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "json",
				"displayName": "Attachment Ids",
				"name": "attachmentIds_json",
				"default": "[]",
				"required": false
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Attachment Record Id",
				"name": "attachmentRecordId_string"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Reply All",
				"name": "replyAll_boolean"
			},
			{
				"type": "boolean",
				"default": false,
				"displayName": "Send Via Email",
				"name": "sendViaEmail_boolean"
			}
		],
		"routing": {
			"request": {
				"body": {
					"bodyFormat": "={{ $value.bodyFormat_options }}",
					"recipients": "={{ JSON.parse($value.recipients_json) }}",
					"attachmentIds": "={{ JSON.parse($value.attachmentIds_json) }}",
					"attachmentRecordId": "={{ $value.attachmentRecordId_string }}",
					"replyAll": "={{ $value.replyAll_boolean }}",
					"sendViaEmail": "={{ $value.sendViaEmail_boolean }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_reply"
				],
				"bodyInputMode_messages_post_messages_id_reply": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_messages_post_messages_id_reply",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"messages_post_messages_id_reply"
				],
				"bodyInputMode_messages_post_messages_id_reply": [
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
					"Messages"
				],
				"operation": [
					"messages_put_messages_id_archive"
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
					"Messages"
				],
				"operation": [
					"messages_put_messages_id_conversation_archive"
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
					"Messages"
				],
				"operation": [
					"messages_put_messages_id_read"
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
					"Offers"
				],
				"operation": [
					"offers_delete_offers_calculations_id"
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
					"Offers"
				],
				"operation": [
					"offers_delete_offers_offer_lines_id"
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
					"Offers"
				],
				"operation": [
					"offers_delete_offers_offers_id"
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
					"Offers"
				],
				"operation": [
					"offers_delete_offers_rfq_id"
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
					"Offers"
				],
				"operation": [
					"offers_get_offers_calculations_id"
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
					"Offers"
				],
				"operation": [
					"offers_get_offers_dashboard_widgets_pending_response_offers"
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
					"Offers"
				],
				"operation": [
					"offers_get_offers_dashboard_widgets_unsent_offers"
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
					"Offers"
				],
				"operation": [
					"offers_get_offers_offer_lines_id"
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
					"Offers"
				],
				"operation": [
					"offers_get_offers_offers_id"
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
					"Offers"
				],
				"operation": [
					"offers_get_offers_offers_id_activity"
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
					"Offers"
				],
				"operation": [
					"offers_get_offers_offers_id_contacts"
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
					"Offers"
				],
				"operation": [
					"offers_get_offers_offers_id_email_preview"
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
					"Offers"
				],
				"operation": [
					"offers_get_offers_offers_id_pdf"
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
					"Offers"
				],
				"operation": [
					"offers_get_offers_offers_id_preview_images"
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
						"name": "incoming",
						"value": "incoming"
					},
					{
						"name": "in_progress",
						"value": "in_progress"
					},
					{
						"name": "waiting_for_client",
						"value": "waiting_for_client"
					},
					{
						"name": "approved",
						"value": "approved"
					},
					{
						"name": "declined",
						"value": "declined"
					}
				],
				"displayName": "Status",
				"name": "status_options"
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
				"displayName": "Limit",
				"name": "limit_number"
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
				"displayName": "Ids",
				"name": "ids_string",
				"description": "Comma-separated list of record UUIDs to filter by (max 200)."
			}
		],
		"routing": {
			"request": {
				"qs": {
					"status": "={{ $value.status_options }}",
					"page": "={{ $value.page_number }}",
					"limit": "={{ $value.limit_number }}",
					"q": "={{ $value.q_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_get_offers_rfq"
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
					"Offers"
				],
				"operation": [
					"offers_get_offers_rfq_id"
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
					"Offers"
				],
				"operation": [
					"offers_get_offers_rfq_id_activity"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "offerId"
			}
		},
		"displayName": "Offer Id",
		"name": "offerId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_post_offers_calculations"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_offers_post_offers_calculations",
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
					"Offers"
				],
				"operation": [
					"offers_post_offers_calculations"
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
				"displayName": "Origin Location Id",
				"name": "originLocationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Destination Location Id",
				"name": "destinationLocationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Loading Id",
				"name": "placeOfLoadingId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Delivery Id",
				"name": "placeOfDeliveryId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"label": "={{ $value.label_string }}",
					"originLocationId": "={{ $value.originLocationId_string }}",
					"destinationLocationId": "={{ $value.destinationLocationId_string }}",
					"placeOfLoadingId": "={{ $value.placeOfLoadingId_string }}",
					"placeOfDeliveryId": "={{ $value.placeOfDeliveryId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_post_offers_calculations"
				],
				"bodyInputMode_offers_post_offers_calculations": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_offers_post_offers_calculations",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_post_offers_calculations"
				],
				"bodyInputMode_offers_post_offers_calculations": [
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
					"Offers"
				],
				"operation": [
					"offers_post_offers_offers_id_convert_to_project"
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
					"Offers"
				],
				"operation": [
					"offers_post_offers_offers_id_pdf"
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
					"Offers"
				],
				"operation": [
					"offers_post_offers_offers_id_send"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_offers_post_offers_rfq",
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
					"Offers"
				],
				"operation": [
					"offers_post_offers_rfq"
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
				"displayName": "Origin",
				"name": "origin_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Destination",
				"name": "destination_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Origin Location Id",
				"name": "originLocationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Destination Location Id",
				"name": "destinationLocationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Loading",
				"name": "placeOfLoading_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Loading Id",
				"name": "placeOfLoadingId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Delivery",
				"name": "placeOfDelivery_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Delivery Id",
				"name": "placeOfDeliveryId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Container Count",
				"name": "containerCount_number"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "import",
						"value": "import"
					},
					{
						"name": "export",
						"value": "export"
					},
					{
						"name": "both",
						"value": "both"
					}
				],
				"displayName": "Direction",
				"name": "direction_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "sea",
						"value": "sea"
					},
					{
						"name": "air",
						"value": "air"
					},
					{
						"name": "rail",
						"value": "rail"
					},
					{
						"name": "road",
						"value": "road"
					}
				],
				"displayName": "Transport Mode",
				"name": "transportMode_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "general",
						"value": "general"
					},
					{
						"name": "dangerous",
						"value": "dangerous"
					},
					{
						"name": "perishable",
						"value": "perishable"
					},
					{
						"name": "oog",
						"value": "oog"
					}
				],
				"displayName": "Cargo Type",
				"name": "cargoType_options"
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
				"displayName": "Contractor Id",
				"name": "contractorId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contact Person",
				"name": "contactPerson_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contact Person Id",
				"name": "contactPersonId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Context",
				"name": "context_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "incoming",
						"value": "incoming"
					},
					{
						"name": "in_progress",
						"value": "in_progress"
					},
					{
						"name": "waiting_for_client",
						"value": "waiting_for_client"
					},
					{
						"name": "approved",
						"value": "approved"
					},
					{
						"name": "declined",
						"value": "declined"
					}
				],
				"displayName": "Status",
				"name": "status_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Assigned To Id",
				"name": "assignedToId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Raw Text",
				"name": "rawText_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Sender Email",
				"name": "senderEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Sender Name",
				"name": "senderName_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Extracted Data",
				"name": "extracted_data_object"
			},
			{
				"type": "json",
				"displayName": "Highlights",
				"name": "highlights_json",
				"default": "[]",
				"required": false
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
					"title": "={{ $value.title_string }}",
					"description": "={{ $value.description_string }}",
					"origin": "={{ $value.origin_string }}",
					"destination": "={{ $value.destination_string }}",
					"originLocationId": "={{ $value.originLocationId_string }}",
					"destinationLocationId": "={{ $value.destinationLocationId_string }}",
					"placeOfLoading": "={{ $value.placeOfLoading_string }}",
					"placeOfLoadingId": "={{ $value.placeOfLoadingId_string }}",
					"placeOfDelivery": "={{ $value.placeOfDelivery_string }}",
					"placeOfDeliveryId": "={{ $value.placeOfDeliveryId_string }}",
					"containerCount": "={{ $value.containerCount_number }}",
					"direction": "={{ $value.direction_options }}",
					"transportMode": "={{ $value.transportMode_options }}",
					"cargoType": "={{ $value.cargoType_options }}",
					"companyName": "={{ $value.companyName_string }}",
					"contractorId": "={{ $value.contractorId_string }}",
					"contactPerson": "={{ $value.contactPerson_string }}",
					"contactPersonId": "={{ $value.contactPersonId_string }}",
					"context": "={{ $value.context_string }}",
					"status": "={{ $value.status_options }}",
					"assignedToId": "={{ $value.assignedToId_string }}",
					"rawText": "={{ $value.rawText_string }}",
					"senderEmail": "={{ $value.senderEmail_string }}",
					"senderName": "={{ $value.senderName_string }}",
					"extractedData": "={{ JSON.parse($value.extracted_data_object) }}",
					"highlights": "={{ JSON.parse($value.highlights_json) }}",
					"items": "={{ JSON.parse($value.items_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_post_offers_rfq"
				],
				"bodyInputMode_offers_post_offers_rfq": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_offers_post_offers_rfq",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_post_offers_rfq"
				],
				"bodyInputMode_offers_post_offers_rfq": [
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
				"property": "text"
			}
		},
		"displayName": "Text",
		"name": "text_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_post_offers_rfq_extract"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_offers_post_offers_rfq_extract_charges",
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
					"Offers"
				],
				"operation": [
					"offers_post_offers_rfq_extract_charges"
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
				"displayName": "Text",
				"name": "text_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Image Base64",
				"name": "imageBase64_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Transport Mode",
				"name": "transportMode_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"text": "={{ $value.text_string }}",
					"imageBase64": "={{ $value.imageBase64_string }}",
					"transportMode": "={{ $value.transportMode_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_post_offers_rfq_extract_charges"
				],
				"bodyInputMode_offers_post_offers_rfq_extract_charges": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_offers_post_offers_rfq_extract_charges",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_post_offers_rfq_extract_charges"
				],
				"bodyInputMode_offers_post_offers_rfq_extract_charges": [
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
		"name": "bodyInputMode_offers_post_offers_rfq_from_email",
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
					"Offers"
				],
				"operation": [
					"offers_post_offers_rfq_from_email"
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
				"displayName": "From",
				"name": "from_string"
			},
			{
				"type": "json",
				"name": "to",
				"displayName": "To",
				"default": ""
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
				"displayName": "Text",
				"name": "text_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Html",
				"name": "html_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"from": "={{ $value.from_string }}",
					"to": "={{ JSON.parse($value.to) }}",
					"subject": "={{ $value.subject_string }}",
					"text": "={{ $value.text_string }}",
					"html": "={{ $value.html_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_post_offers_rfq_from_email"
				],
				"bodyInputMode_offers_post_offers_rfq_from_email": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_offers_post_offers_rfq_from_email",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_post_offers_rfq_from_email"
				],
				"bodyInputMode_offers_post_offers_rfq_from_email": [
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
					"Offers"
				],
				"operation": [
					"offers_put_offers_calculations_id"
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
					"Offers"
				],
				"operation": [
					"offers_put_offers_offer_lines_id"
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
					"Offers"
				],
				"operation": [
					"offers_put_offers_offers_id"
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
					"Offers"
				],
				"operation": [
					"offers_put_offers_rfq_id"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_offers_put_offers_rfq_id",
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
					"Offers"
				],
				"operation": [
					"offers_put_offers_rfq_id"
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
				"displayName": "Origin",
				"name": "origin_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Destination",
				"name": "destination_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Origin Location Id",
				"name": "originLocationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Destination Location Id",
				"name": "destinationLocationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Loading",
				"name": "placeOfLoading_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Loading Id",
				"name": "placeOfLoadingId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Delivery",
				"name": "placeOfDelivery_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Delivery Id",
				"name": "placeOfDeliveryId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Container Count",
				"name": "containerCount_number"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "import",
						"value": "import"
					},
					{
						"name": "export",
						"value": "export"
					},
					{
						"name": "both",
						"value": "both"
					}
				],
				"displayName": "Direction",
				"name": "direction_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "sea",
						"value": "sea"
					},
					{
						"name": "air",
						"value": "air"
					},
					{
						"name": "rail",
						"value": "rail"
					},
					{
						"name": "road",
						"value": "road"
					}
				],
				"displayName": "Transport Mode",
				"name": "transportMode_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "general",
						"value": "general"
					},
					{
						"name": "dangerous",
						"value": "dangerous"
					},
					{
						"name": "perishable",
						"value": "perishable"
					},
					{
						"name": "oog",
						"value": "oog"
					}
				],
				"displayName": "Cargo Type",
				"name": "cargoType_options"
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
				"displayName": "Contractor Id",
				"name": "contractorId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contact Person",
				"name": "contactPerson_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contact Person Id",
				"name": "contactPersonId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Context",
				"name": "context_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "incoming",
						"value": "incoming"
					},
					{
						"name": "in_progress",
						"value": "in_progress"
					},
					{
						"name": "waiting_for_client",
						"value": "waiting_for_client"
					},
					{
						"name": "approved",
						"value": "approved"
					},
					{
						"name": "declined",
						"value": "declined"
					}
				],
				"displayName": "Status",
				"name": "status_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Assigned To Id",
				"name": "assignedToId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Raw Text",
				"name": "rawText_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Sender Email",
				"name": "senderEmail_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Sender Name",
				"name": "senderName_string"
			},
			{
				"type": "json",
				"required": false,
				"default": "{}",
				"displayName": "Extracted Data",
				"name": "extracted_data_object"
			},
			{
				"type": "json",
				"displayName": "Highlights",
				"name": "highlights_json",
				"default": "[]",
				"required": false
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
					"title": "={{ $value.title_string }}",
					"description": "={{ $value.description_string }}",
					"origin": "={{ $value.origin_string }}",
					"destination": "={{ $value.destination_string }}",
					"originLocationId": "={{ $value.originLocationId_string }}",
					"destinationLocationId": "={{ $value.destinationLocationId_string }}",
					"placeOfLoading": "={{ $value.placeOfLoading_string }}",
					"placeOfLoadingId": "={{ $value.placeOfLoadingId_string }}",
					"placeOfDelivery": "={{ $value.placeOfDelivery_string }}",
					"placeOfDeliveryId": "={{ $value.placeOfDeliveryId_string }}",
					"containerCount": "={{ $value.containerCount_number }}",
					"direction": "={{ $value.direction_options }}",
					"transportMode": "={{ $value.transportMode_options }}",
					"cargoType": "={{ $value.cargoType_options }}",
					"companyName": "={{ $value.companyName_string }}",
					"contractorId": "={{ $value.contractorId_string }}",
					"contactPerson": "={{ $value.contactPerson_string }}",
					"contactPersonId": "={{ $value.contactPersonId_string }}",
					"context": "={{ $value.context_string }}",
					"status": "={{ $value.status_options }}",
					"assignedToId": "={{ $value.assignedToId_string }}",
					"rawText": "={{ $value.rawText_string }}",
					"senderEmail": "={{ $value.senderEmail_string }}",
					"senderName": "={{ $value.senderName_string }}",
					"extractedData": "={{ JSON.parse($value.extracted_data_object) }}",
					"highlights": "={{ JSON.parse($value.highlights_json) }}",
					"items": "={{ JSON.parse($value.items_json) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_put_offers_rfq_id"
				],
				"bodyInputMode_offers_put_offers_rfq_id": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_offers_put_offers_rfq_id",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Offers"
				],
				"operation": [
					"offers_put_offers_rfq_id"
				],
				"bodyInputMode_offers_put_offers_rfq_id": [
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_post_pdf_templates_pdfme"
				]
			}
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_post_pdf_templates_pdfme"
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_post_pdf_templates_pdfme"
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_post_pdf_templates_pdfme"
				]
			}
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_post_pdf_templates_pdfme"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_pdf_templates_post_pdf_templates_pdfme",
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_post_pdf_templates_pdfme"
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_post_pdf_templates_pdfme"
				],
				"bodyInputMode_pdf_templates_post_pdf_templates_pdfme": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_pdf_templates_post_pdf_templates_pdfme",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_post_pdf_templates_pdfme"
				],
				"bodyInputMode_pdf_templates_post_pdf_templates_pdfme": [
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_post_pdf_templates_pdfme_generate"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_pdf_templates_post_pdf_templates_pdfme_generate",
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_post_pdf_templates_pdfme_generate"
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
					}
				],
				"displayName": "Template Type",
				"name": "templateType_options"
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
					"templateType": "={{ $value.templateType_options }}",
					"templateJson": "={{ JSON.parse($value.template_json_object) }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_post_pdf_templates_pdfme_generate"
				],
				"bodyInputMode_pdf_templates_post_pdf_templates_pdfme_generate": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_pdf_templates_post_pdf_templates_pdfme_generate",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_post_pdf_templates_pdfme_generate"
				],
				"bodyInputMode_pdf_templates_post_pdf_templates_pdfme_generate": [
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_put_pdf_templates_pdfme"
				]
			}
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_put_pdf_templates_pdfme"
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_put_pdf_templates_pdfme"
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_put_pdf_templates_pdfme"
				]
			}
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_put_pdf_templates_pdfme"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_pdf_templates_put_pdf_templates_pdfme",
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_put_pdf_templates_pdfme"
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
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_put_pdf_templates_pdfme"
				],
				"bodyInputMode_pdf_templates_put_pdf_templates_pdfme": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_pdf_templates_put_pdf_templates_pdfme",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"PDF Templates (pdfme)"
				],
				"operation": [
					"pdf_templates_put_pdf_templates_pdfme"
				],
				"bodyInputMode_pdf_templates_put_pdf_templates_pdfme": [
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
					"Products"
				],
				"operation": [
					"products_delete_products_carriers_id"
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
					"Products"
				],
				"operation": [
					"products_delete_products_products_id"
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
					"Products"
				],
				"operation": [
					"products_get_products_carriers_id"
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
					"Products"
				],
				"operation": [
					"products_get_products_products_id"
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
					"Products"
				],
				"operation": [
					"products_put_products_carriers_id"
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
					"Products"
				],
				"operation": [
					"products_put_products_products_id"
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_delete_shipment_tracking_bic_configs"
				]
			}
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_delete_shipment_tracking_carrier_configs"
				]
			}
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_delete_shipment_tracking_location_overrides"
				]
			}
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_delete_shipment_tracking_shipments"
				]
			}
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_delete_shipment_tracking_tracking_jobs"
				]
			}
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_delete_shipment_tracking_webhooks"
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
				"name": "ids_string",
				"description": "Comma-separated list of record UUIDs to filter by (max 200)."
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_get_shipment_tracking_bic_configs"
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
				"displayName": "Tracking Job Id",
				"name": "trackingJobId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Equipment Reference",
				"name": "equipmentReference_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "dcsa",
						"value": "dcsa"
					},
					{
						"name": "ais",
						"value": "ais"
					},
					{
						"name": "port",
						"value": "port"
					},
					{
						"name": "edi",
						"value": "edi"
					},
					{
						"name": "manual",
						"value": "manual"
					}
				],
				"displayName": "Source",
				"name": "source_options"
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
				"displayName": "Event Code",
				"name": "eventCode_string"
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
					"trackingJobId": "={{ $value.trackingJobId_string }}",
					"equipmentReference": "={{ $value.equipmentReference_string }}",
					"source": "={{ $value.source_options }}",
					"eventType": "={{ $value.eventType_string }}",
					"eventCode": "={{ $value.eventCode_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_get_shipment_tracking_cargo_events"
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
				"displayName": "Carrier Code",
				"name": "carrierCode_string"
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
					"carrierCode": "={{ $value.carrierCode_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_get_shipment_tracking_carrier_configs"
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
				"displayName": "Carrier Code",
				"name": "carrierCode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Unlocode",
				"name": "unlocode_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Facility Code",
				"name": "facilityCode_string"
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
					"carrierCode": "={{ $value.carrierCode_string }}",
					"unlocode": "={{ $value.unlocode_string }}",
					"facilityCode": "={{ $value.facilityCode_string }}",
					"isActive": "={{ $value.isActive_string }}",
					"search": "={{ $value.search_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_get_shipment_tracking_location_overrides"
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
				"displayName": "Status",
				"name": "status_string"
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
					"status": "={{ $value.status_string }}",
					"carrierCode": "={{ $value.carrierCode_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_get_shipment_tracking_shipments"
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
				"displayName": "Status",
				"name": "status_string"
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
				"displayName": "Reference Type",
				"name": "referenceType_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Reference Value",
				"name": "referenceValue_string"
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
					"status": "={{ $value.status_string }}",
					"carrierCode": "={{ $value.carrierCode_string }}",
					"referenceType": "={{ $value.referenceType_string }}",
					"referenceValue": "={{ $value.referenceValue_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_get_shipment_tracking_tracking_jobs"
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
					"isActive": "={{ $value.isActive_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_get_shipment_tracking_webhooks"
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
				"displayName": "Webhook Id",
				"name": "webhookId_string"
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
				"displayName": "Event Type",
				"name": "eventType_string"
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
					"webhookId": "={{ $value.webhookId_string }}",
					"status": "={{ $value.status_string }}",
					"eventType": "={{ $value.eventType_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}",
					"ids": "={{ $value.ids_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_get_shipment_tracking_webhooks_deliveries"
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_post_shipment_tracking_carrier_configs"
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_post_shipment_tracking_location_overrides"
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_post_shipment_tracking_shipments"
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_post_shipment_tracking_tracking_jobs"
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_post_shipment_tracking_webhooks"
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
				"property": "isEnabled"
			}
		},
		"displayName": "Is Enabled",
		"name": "isEnabled_boolean",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_put_shipment_tracking_bic_configs"
				]
			}
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_put_shipment_tracking_bic_configs"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "username"
			}
		},
		"displayName": "Username",
		"name": "username_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_put_shipment_tracking_bic_configs"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_shipment_tracking_put_shipment_tracking_bic_configs",
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_put_shipment_tracking_bic_configs"
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
				"displayName": "Base Url",
				"name": "baseUrl_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"baseUrl": "={{ $value.baseUrl_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_put_shipment_tracking_bic_configs"
				],
				"bodyInputMode_shipment_tracking_put_shipment_tracking_bic_configs": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_shipment_tracking_put_shipment_tracking_bic_configs",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_put_shipment_tracking_bic_configs"
				],
				"bodyInputMode_shipment_tracking_put_shipment_tracking_bic_configs": [
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_put_shipment_tracking_carrier_configs"
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_put_shipment_tracking_location_overrides"
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_put_shipment_tracking_shipments"
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_put_shipment_tracking_tracking_jobs"
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
					"Shipment Tracking"
				],
				"operation": [
					"shipment_tracking_put_shipment_tracking_webhooks"
				]
			}
		}
	}
];

export default properties;
