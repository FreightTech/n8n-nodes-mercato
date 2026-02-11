/* eslint-disable */
/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * Generated from OpenMercato OpenAPI spec using @algolia/n8n-openapi-node
 * Run `npm run generate:openapi` to regenerate.
 *
 * Source: http://localhost:3000/api/docs/openapi
 * Generated: 2026-02-11T18:31:25.358Z
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
				"name": "Contractors",
				"value": "Contractors",
				"description": "Contractor management for freight operations"
			},
			{
				"name": "FMS Offers",
				"value": "FMS Offers",
				"description": "Freight offers and RFQ management for the FMS module"
			},
			{
				"name": "FMS Projects",
				"value": "FMS Projects",
				"description": "Shipping project management with workflow orchestration"
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
				"name": "Fetch pending response offers metrics",
				"value": "fms_offers_get_fms_offers_dashboard_widgets_pending_response_offers",
				"action": "Fetch pending response offers metrics",
				"description": "Returns count, max lag time, and trend for sent offers pending customer response within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/dashboard/widgets/pending-response-offers"
					}
				}
			},
			{
				"name": "Fetch unsent offers metrics",
				"value": "fms_offers_get_fms_offers_dashboard_widgets_unsent_offers",
				"action": "Fetch unsent offers metrics",
				"description": "Returns count, max lag time, and trend for unsent offers within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/dashboard/widgets/unsent-offers"
					}
				}
			},
			{
				"name": "GET /fms_offers/offer-lines",
				"value": "fms_offers_get_fms_offers_offer_lines",
				"action": "GET /fms_offers/offer-lines",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offer-lines"
					}
				}
			},
			{
				"name": "POST /fms_offers/offer-lines",
				"value": "fms_offers_post_fms_offers_offer_lines",
				"action": "POST /fms_offers/offer-lines",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/offer-lines"
					}
				}
			},
			{
				"name": "GET /fms_offers/offer-lines/table-config",
				"value": "fms_offers_get_fms_offers_offer_lines_table_config",
				"action": "GET /fms_offers/offer-lines/table-config",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offer-lines/table-config"
					}
				}
			},
			{
				"name": "GET /fms_offers/offers",
				"value": "fms_offers_get_fms_offers_offers",
				"action": "GET /fms_offers/offers",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offers"
					}
				}
			},
			{
				"name": "POST /fms_offers/offers",
				"value": "fms_offers_post_fms_offers_offers",
				"action": "POST /fms_offers/offers",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/offers"
					}
				}
			},
			{
				"name": "POST /fms_offers/offers/version",
				"value": "fms_offers_post_fms_offers_offers_version",
				"action": "POST /fms_offers/offers/version",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/offers/version"
					}
				}
			},
			{
				"name": "Get RFQ board cards",
				"value": "fms_offers_get_fms_offers_rfq_board",
				"action": "Get RFQ board cards",
				"description": "Returns all RFQs formatted as board cards with assignee info and latest offer details.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/rfq/board"
					}
				}
			},
			{
				"name": "List rfqs",
				"value": "fms_offers_get_fms_offers_rfq",
				"action": "List rfqs",
				"description": "Returns a paginated collection of rfqs scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/rfq"
					}
				}
			},
			{
				"name": "Create rfq",
				"value": "fms_offers_post_fms_offers_rfq",
				"action": "Create rfq",
				"description": "Creates a new RFQ (Request for Quotation) scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/rfq"
					}
				}
			},
			{
				"name": "GET /fms_offers/calculations/{id}",
				"value": "fms_offers_get_fms_offers_calculations_id",
				"action": "GET /fms_offers/calculations/{id}",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/calculations/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_offers/calculations/{id}",
				"value": "fms_offers_put_fms_offers_calculations_id",
				"action": "PUT /fms_offers/calculations/{id}",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_offers/calculations/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_offers/offer-lines/{id}",
				"value": "fms_offers_get_fms_offers_offer_lines_id",
				"action": "GET /fms_offers/offer-lines/{id}",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offer-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_offers/offer-lines/{id}",
				"value": "fms_offers_put_fms_offers_offer_lines_id",
				"action": "PUT /fms_offers/offer-lines/{id}",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_offers/offer-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_offers/offer-lines/{id}",
				"value": "fms_offers_delete_fms_offers_offer_lines_id",
				"action": "DELETE /fms_offers/offer-lines/{id}",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_offers/offer-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_offers/offers/{id}/contacts",
				"value": "fms_offers_get_fms_offers_offers_id_contacts",
				"action": "GET /fms_offers/offers/{id}/contacts",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/contacts"
					}
				}
			},
			{
				"name": "POST /fms_offers/offers/{id}/convert-to-project",
				"value": "fms_offers_post_fms_offers_offers_id_convert_to_project",
				"action": "POST /fms_offers/offers/{id}/convert-to-project",
				"description": "Requires features: fms_offers.offers.manage, fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/convert-to-project"
					}
				}
			},
			{
				"name": "GET /fms_offers/offers/{id}/pdf",
				"value": "fms_offers_get_fms_offers_offers_id_pdf",
				"action": "GET /fms_offers/offers/{id}/pdf",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/pdf"
					}
				}
			},
			{
				"name": "POST /fms_offers/offers/{id}/pdf",
				"value": "fms_offers_post_fms_offers_offers_id_pdf",
				"action": "POST /fms_offers/offers/{id}/pdf",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/pdf"
					}
				}
			},
			{
				"name": "GET /fms_offers/offers/{id}",
				"value": "fms_offers_get_fms_offers_offers_id",
				"action": "GET /fms_offers/offers/{id}",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_offers/offers/{id}",
				"value": "fms_offers_put_fms_offers_offers_id",
				"action": "PUT /fms_offers/offers/{id}",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_offers/offers/{id}",
				"value": "fms_offers_delete_fms_offers_offers_id",
				"action": "DELETE /fms_offers/offers/{id}",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "POST /fms_offers/offers/{id}/send",
				"value": "fms_offers_post_fms_offers_offers_id_send",
				"action": "POST /fms_offers/offers/{id}/send",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/send"
					}
				}
			},
			{
				"name": "Get RFQ by ID",
				"value": "fms_offers_get_fms_offers_rfq_id",
				"action": "Get RFQ by ID",
				"description": "Returns a single RFQ with its associated offers.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/rfq/{{ $parameter.id_string }}"
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
				"value": "fms_offers_put_fms_offers_rfq_id",
				"action": "Update RFQ",
				"description": "Updates an existing RFQ by ID.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_offers/rfq/{{ $parameter.id_string }}"
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
				"value": "fms_offers_delete_fms_offers_rfq_id",
				"action": "Delete RFQ",
				"description": "Soft-deletes an RFQ by ID.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_offers/rfq/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
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
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_delete_fms_offers_offer_lines_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_delete_fms_offers_offers_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_delete_fms_offers_rfq_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_calculations_id"
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
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_dashboard_widgets_pending_response_offers"
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
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_dashboard_widgets_unsent_offers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_offer_lines_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_offers_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_offers_id_contacts"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_offers_id_pdf"
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
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_rfq"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_rfq_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_offers_id_convert_to_project"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_offers_id_pdf"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_offers_id_send"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_fms_offers_post_fms_offers_rfq",
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
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_rfq"
				]
			}
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
						"name": "road",
						"value": "road"
					},
					{
						"name": "rail",
						"value": "rail"
					},
					{
						"name": "barge",
						"value": "barge"
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
					"assignedToId": "={{ $value.assignedToId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_rfq"
				],
				"bodyInputMode_fms_offers_post_fms_offers_rfq": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_fms_offers_post_fms_offers_rfq",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_rfq"
				],
				"bodyInputMode_fms_offers_post_fms_offers_rfq": [
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
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_calculations_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_offer_lines_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_offers_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_rfq_id"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_fms_offers_put_fms_offers_rfq_id",
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
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_rfq_id"
				]
			}
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
						"name": "road",
						"value": "road"
					},
					{
						"name": "rail",
						"value": "rail"
					},
					{
						"name": "barge",
						"value": "barge"
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
					"assignedToId": "={{ $value.assignedToId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_rfq_id"
				],
				"bodyInputMode_fms_offers_put_fms_offers_rfq_id": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_fms_offers_put_fms_offers_rfq_id",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_rfq_id"
				],
				"bodyInputMode_fms_offers_put_fms_offers_rfq_id": [
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
	}
];

export default properties;
