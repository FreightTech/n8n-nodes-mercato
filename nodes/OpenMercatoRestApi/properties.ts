/* eslint-disable */
// @ts-nocheck
/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * Generated from OpenMercato OpenAPI spec using @algolia/n8n-openapi-node
 * Run `npm run generate:openapi` to regenerate.
 *
 * Source: https://dev.fms.freighttech.org/api/docs/openapi
 * Generated: 2026-04-21T10:06:23.091Z
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
				"name": "FMS Offers",
				"value": "FMS Offers",
				"description": "Freight offers and RFQ management for the FMS module"
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
				"description": "Unified document management with AI-powered OCR extraction, invoice processing, and charge code matching"
			},
			{
				"name": "Fms Teams",
				"value": "Fms Teams",
				"description": "Team management with contractor assignments for freight operations"
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
				"name": "Create a calculation for an offer",
				"value": "fms_offers_post_fms_offers_calculations",
				"action": "Create a calculation for an offer",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/calculations"
					}
				}
			},
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
				"name": "GET /fms_offers/notes",
				"value": "fms_offers_get_fms_offers_notes",
				"action": "GET /fms_offers/notes",
				"description": "Requires features: fms_offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/notes"
					}
				}
			},
			{
				"name": "POST /fms_offers/notes",
				"value": "fms_offers_post_fms_offers_notes",
				"action": "POST /fms_offers/notes",
				"description": "Requires features: fms_offers.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/notes"
					}
				}
			},
			{
				"name": "PUT /fms_offers/notes",
				"value": "fms_offers_put_fms_offers_notes",
				"action": "PUT /fms_offers/notes",
				"description": "Requires features: fms_offers.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_offers/notes"
					}
				}
			},
			{
				"name": "DELETE /fms_offers/notes",
				"value": "fms_offers_delete_fms_offers_notes",
				"action": "DELETE /fms_offers/notes",
				"description": "Requires features: fms_offers.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_offers/notes"
					}
				}
			},
			{
				"name": "GET /fms_offers/offer-group-pdf",
				"value": "fms_offers_get_fms_offers_offer_group_pdf",
				"action": "GET /fms_offers/offer-group-pdf",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offer-group-pdf"
					}
				}
			},
			{
				"name": "GET /fms_offers/offer-group-preview-images",
				"value": "fms_offers_get_fms_offers_offer_group_preview_images",
				"action": "GET /fms_offers/offer-group-preview-images",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offer-group-preview-images"
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
				"name": "Extract charge lines from carrier rate text or image",
				"value": "fms_offers_post_fms_offers_rfq_extract_charges",
				"action": "Extract charge lines from carrier rate text or image",
				"description": "Uses an LLM to extract structured freight charge lines (product name, charge code, basis, currency, rate, buy price, category) from raw carrier rate text or an image screenshot. Does not persist anything.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/rfq/extract-charges"
					}
				}
			},
			{
				"name": "Extract structured RFQ data from text",
				"value": "fms_offers_post_fms_offers_rfq_extract",
				"action": "Extract structured RFQ data from text",
				"description": "Uses an LLM to extract structured freight data (company, routes, containers, cargo) from raw email/message text. Does not persist anything.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/rfq/extract"
					}
				}
			},
			{
				"name": "Create an RFQ from raw email content",
				"value": "fms_offers_post_fms_offers_rfq_from_email",
				"action": "Create an RFQ from raw email content",
				"description": "Single-step endpoint for email-to-RFQ conversion. Accepts raw email fields, cleans the text, extracts structured freight data via LLM, matches against tenant entities (locations, contractors), and persists the RFQ. Designed for n8n/webhook integration — replaces the two-call extract+create flow.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/rfq/from-email"
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
				"name": "DELETE /fms_offers/calculations/{id}",
				"value": "fms_offers_delete_fms_offers_calculations_id",
				"action": "DELETE /fms_offers/calculations/{id}",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
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
				"name": "GET /fms_offers/offers/{id}/activity",
				"value": "fms_offers_get_fms_offers_offers_id_activity",
				"action": "GET /fms_offers/offers/{id}/activity",
				"description": "Requires features: fms_offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/activity"
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
				"name": "GET /fms_offers/offers/{id}/email-preview",
				"value": "fms_offers_get_fms_offers_offers_id_email_preview",
				"action": "GET /fms_offers/offers/{id}/email-preview",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/email-preview"
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
				"name": "GET /fms_offers/offers/{id}/preview-images",
				"value": "fms_offers_get_fms_offers_offers_id_preview_images",
				"action": "GET /fms_offers/offers/{id}/preview-images",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/preview-images"
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
				"name": "GET /fms_offers/rfq/{id}/activity",
				"value": "fms_offers_get_fms_offers_rfq_id_activity",
				"action": "GET /fms_offers/rfq/{id}/activity",
				"description": "Requires features: fms_offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/rfq/{{ $parameter.id_string }}/activity"
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
				"name": "GET /fms_locations/airports",
				"value": "fms_locations_get_fms_locations_airports",
				"action": "GET /fms_locations/airports",
				"description": "Requires features: fms_locations.airports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/airports"
					}
				}
			},
			{
				"name": "POST /fms_locations/airports",
				"value": "fms_locations_post_fms_locations_airports",
				"action": "POST /fms_locations/airports",
				"description": "Requires features: fms_locations.airports.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_locations/airports"
					}
				}
			},
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
				"name": "GET /fms_locations/airports/{id}",
				"value": "fms_locations_get_fms_locations_airports_id",
				"action": "GET /fms_locations/airports/{id}",
				"description": "Requires features: fms_locations.airports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/airports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_locations/airports/{id}",
				"value": "fms_locations_put_fms_locations_airports_id",
				"action": "PUT /fms_locations/airports/{id}",
				"description": "Requires features: fms_locations.airports.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_locations/airports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_locations/airports/{id}",
				"value": "fms_locations_delete_fms_locations_airports_id",
				"action": "DELETE /fms_locations/airports/{id}",
				"description": "Requires features: fms_locations.airports.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_locations/airports/{{ $parameter.id_string }}"
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
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/search"
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
				"name": "POST /fms_documents/invoices/extract",
				"value": "fms_documents_post_fms_documents_invoices_extract",
				"action": "POST /fms_documents/invoices/extract",
				"description": "Requires features: fms_documents.invoices.upload",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/extract"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices",
				"value": "fms_documents_get_fms_documents_invoices",
				"action": "GET /fms_documents/invoices",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices",
				"value": "fms_documents_post_fms_documents_invoices",
				"action": "POST /fms_documents/invoices",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices"
					}
				}
			},
			{
				"name": "Upload invoice document",
				"value": "fms_documents_post_fms_documents_invoices_upload",
				"action": "Upload invoice document",
				"description": "Upload a PDF or image file. The document is processed with OCR to extract invoice data, line items, and transportation metadata. A new FMS invoice record is created automatically.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/upload"
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
				"name": "Upload document",
				"value": "fms_documents_post_fms_documents_upload",
				"action": "Upload document",
				"description": "Upload a new FMS document with metadata. The file is stored as an attachment and PDF pages are extracted automatically.",
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
				"description": "Requires features: fms_documents.manage",
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
				"name": "POST /fms_documents/documents/{id}/feedback",
				"value": "fms_documents_post_fms_documents_documents_id_feedback",
				"action": "POST /fms_documents/documents/{id}/feedback",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/feedback"
					}
				}
			},
			{
				"name": "GET /fms_documents/documents/{id}/matched-projects",
				"value": "fms_documents_get_fms_documents_documents_id_matched_projects",
				"action": "GET /fms_documents/documents/{id}/matched-projects",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/matched-projects"
					}
				}
			},
			{
				"name": "GET /fms_documents/documents/{id}/pages/{pageNum}/image",
				"value": "fms_documents_get_fms_documents_documents_id_pages_pageNum_image",
				"action": "GET /fms_documents/documents/{id}/pages/{pageNum}/image",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/pages/{{ $parameter.pageNum_string }}/image"
					}
				}
			},
			{
				"name": "GET /fms_documents/documents/{id}/pages",
				"value": "fms_documents_get_fms_documents_documents_id_pages",
				"action": "GET /fms_documents/documents/{id}/pages",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/pages"
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
				"name": "PATCH /fms_documents/documents/{id}",
				"value": "fms_documents_patch_fms_documents_documents_id",
				"action": "PATCH /fms_documents/documents/{id}",
				"description": "Requires features: fms_documents.manage",
				"routing": {
					"request": {
						"method": "PATCH",
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
			},
			{
				"name": "DELETE /fms_documents/invoices/{id}/allocations/{allocationId}",
				"value": "fms_documents_delete_fms_documents_invoices_id_allocations_allocationId",
				"action": "DELETE /fms_documents/invoices/{id}/allocations/{allocationId}",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/allocations/{{ $parameter.allocationId_string }}"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}/allocations",
				"value": "fms_documents_get_fms_documents_invoices_id_allocations",
				"action": "GET /fms_documents/invoices/{id}/allocations",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/allocations"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/{id}/allocations",
				"value": "fms_documents_post_fms_documents_invoices_id_allocations",
				"action": "POST /fms_documents/invoices/{id}/allocations",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/allocations"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/{id}/confirm",
				"value": "fms_documents_post_fms_documents_invoices_id_confirm",
				"action": "POST /fms_documents/invoices/{id}/confirm",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/confirm"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/{id}/extract",
				"value": "fms_documents_post_fms_documents_invoices_id_extract",
				"action": "POST /fms_documents/invoices/{id}/extract",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/extract"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}/line-items/{lineItemId}",
				"value": "fms_documents_get_fms_documents_invoices_id_line_items_lineItemId",
				"action": "GET /fms_documents/invoices/{id}/line-items/{lineItemId}",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/line-items/{{ $parameter.lineItemId_string }}"
					}
				}
			},
			{
				"name": "PATCH /fms_documents/invoices/{id}/line-items/{lineItemId}",
				"value": "fms_documents_patch_fms_documents_invoices_id_line_items_lineItemId",
				"action": "PATCH /fms_documents/invoices/{id}/line-items/{lineItemId}",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/line-items/{{ $parameter.lineItemId_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_documents/invoices/{id}/line-items/{lineItemId}",
				"value": "fms_documents_delete_fms_documents_invoices_id_line_items_lineItemId",
				"action": "DELETE /fms_documents/invoices/{id}/line-items/{lineItemId}",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/line-items/{{ $parameter.lineItemId_string }}"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/{id}/line-items",
				"value": "fms_documents_post_fms_documents_invoices_id_line_items",
				"action": "POST /fms_documents/invoices/{id}/line-items",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/line-items"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}/match-charges",
				"value": "fms_documents_get_fms_documents_invoices_id_match_charges",
				"action": "GET /fms_documents/invoices/{id}/match-charges",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/match-charges"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/{id}/match-charges",
				"value": "fms_documents_post_fms_documents_invoices_id_match_charges",
				"action": "POST /fms_documents/invoices/{id}/match-charges",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/match-charges"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}/match-contractors",
				"value": "fms_documents_get_fms_documents_invoices_id_match_contractors",
				"action": "GET /fms_documents/invoices/{id}/match-contractors",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/match-contractors"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/{id}/match-contractors",
				"value": "fms_documents_post_fms_documents_invoices_id_match_contractors",
				"action": "POST /fms_documents/invoices/{id}/match-contractors",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/match-contractors"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}/pages/{pageNum}/image",
				"value": "fms_documents_get_fms_documents_invoices_id_pages_pageNum_image",
				"action": "GET /fms_documents/invoices/{id}/pages/{pageNum}/image",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/pages/{{ $parameter.pageNum_string }}/image"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}/pages",
				"value": "fms_documents_get_fms_documents_invoices_id_pages",
				"action": "GET /fms_documents/invoices/{id}/pages",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/pages"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}/project-lines",
				"value": "fms_documents_get_fms_documents_invoices_id_project_lines",
				"action": "GET /fms_documents/invoices/{id}/project-lines",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/project-lines"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}",
				"value": "fms_documents_get_fms_documents_invoices_id",
				"action": "GET /fms_documents/invoices/{id}",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/{id}",
				"value": "fms_documents_post_fms_documents_invoices_id",
				"action": "POST /fms_documents/invoices/{id}",
				"description": "Requires features: fms_documents.invoices.approve",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_documents/invoices/{id}",
				"value": "fms_documents_put_fms_documents_invoices_id",
				"action": "PUT /fms_documents/invoices/{id}",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_documents/invoices/{id}",
				"value": "fms_documents_delete_fms_documents_invoices_id",
				"action": "DELETE /fms_documents/invoices/{id}",
				"description": "Requires features: fms_documents.invoices.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/{id}/toggle-exclude",
				"value": "fms_documents_post_fms_documents_invoices_id_toggle_exclude",
				"action": "POST /fms_documents/invoices/{id}/toggle-exclude",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/toggle-exclude"
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
					"fms_documents_delete_fms_documents_invoices_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Allocation Id",
		"name": "allocationId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_delete_fms_documents_invoices_id_allocations_allocationId"
				]
			}
		}
	},
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
					"fms_documents_delete_fms_documents_invoices_id_allocations_allocationId"
				]
			}
		}
	},
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
					"fms_documents_delete_fms_documents_invoices_id_line_items_lineItemId"
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_delete_fms_documents_invoices_id_line_items_lineItemId"
				]
			}
		}
	},
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
					"fms_documents_get_fms_documents_documents_id_matched_projects"
				]
			}
		}
	},
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
					"fms_documents_get_fms_documents_documents_id_pages"
				]
			}
		}
	},
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
					"fms_documents_get_fms_documents_documents_id_pages_pageNum_image"
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_documents_id_pages_pageNum_image"
				]
			}
		}
	},
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
					"fms_documents_get_fms_documents_invoices_id"
				]
			}
		}
	},
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
					"fms_documents_get_fms_documents_invoices_id_allocations"
				]
			}
		}
	},
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
					"fms_documents_get_fms_documents_invoices_id_line_items_lineItemId"
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_invoices_id_line_items_lineItemId"
				]
			}
		}
	},
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
					"fms_documents_get_fms_documents_invoices_id_match_charges"
				]
			}
		}
	},
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
					"fms_documents_get_fms_documents_invoices_id_match_contractors"
				]
			}
		}
	},
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
					"fms_documents_get_fms_documents_invoices_id_pages"
				]
			}
		}
	},
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
					"fms_documents_get_fms_documents_invoices_id_pages_pageNum_image"
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_invoices_id_pages_pageNum_image"
				]
			}
		}
	},
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
					"fms_documents_get_fms_documents_invoices_id_project_lines"
				]
			}
		}
	},
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
					"fms_documents_patch_fms_documents_documents_id"
				]
			}
		}
	},
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
					"fms_documents_patch_fms_documents_invoices_id_line_items_lineItemId"
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_patch_fms_documents_invoices_id_line_items_lineItemId"
				]
			}
		}
	},
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
					"fms_documents_post_fms_documents_documents_id_feedback"
				]
			}
		}
	},
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
					"fms_documents_post_fms_documents_invoices_id"
				]
			}
		}
	},
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
					"fms_documents_post_fms_documents_invoices_id_allocations"
				]
			}
		}
	},
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
					"fms_documents_post_fms_documents_invoices_id_confirm"
				]
			}
		}
	},
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
					"fms_documents_post_fms_documents_invoices_id_extract"
				]
			}
		}
	},
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
					"fms_documents_post_fms_documents_invoices_id_line_items"
				]
			}
		}
	},
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
					"fms_documents_post_fms_documents_invoices_id_match_charges"
				]
			}
		}
	},
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
					"fms_documents_post_fms_documents_invoices_id_match_contractors"
				]
			}
		}
	},
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
					"fms_documents_post_fms_documents_invoices_id_toggle_exclude"
				]
			}
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_invoices_upload"
				]
			}
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_upload"
				]
			}
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_upload"
				]
			}
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
						"name": "offer",
						"value": "offer"
					},
					{
						"name": "invoice",
						"value": "invoice"
					},
					{
						"name": "customs_declaration",
						"value": "customs_declaration"
					},
					{
						"name": "bill_of_lading",
						"value": "bill_of_lading"
					},
					{
						"name": "booking_confirmation",
						"value": "booking_confirmation"
					},
					{
						"name": "delivery_note",
						"value": "delivery_note"
					},
					{
						"name": "packing_list",
						"value": "packing_list"
					},
					{
						"name": "vgm_certificate",
						"value": "vgm_certificate"
					},
					{
						"name": "other",
						"value": "other"
					}
				],
				"displayName": "Category",
				"name": "category_options"
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
					"category": "={{ $value.category_options }}",
					"description": "={{ $value.description_string }}",
					"relatedEntityId": "={{ $value.relatedEntityId_string }}",
					"relatedEntityType": "={{ $value.relatedEntityType_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_upload"
				]
			}
		}
	},
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
					"FMS Documents"
				],
				"operation": [
					"fms_documents_put_fms_documents_invoices_id"
				]
			}
		}
	},
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
					"fms_locations_delete_fms_locations_airports_id"
				]
			}
		}
	},
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
					"fms_locations_get_fms_locations_airports_id"
				]
			}
		}
	},
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
					"fms_locations_put_fms_locations_airports_id"
				]
			}
		}
	},
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
					"FMS Offers"
				],
				"operation": [
					"fms_offers_delete_fms_offers_calculations_id"
				]
			}
		}
	},
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
					"fms_offers_get_fms_offers_offers_id_activity"
				]
			}
		}
	},
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
					"fms_offers_get_fms_offers_offers_id_email_preview"
				]
			}
		}
	},
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
					"fms_offers_get_fms_offers_offers_id_preview_images"
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
					"fms_offers_get_fms_offers_rfq_id_activity"
				]
			}
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
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_calculations"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_fms_offers_post_fms_offers_calculations",
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
					"fms_offers_post_fms_offers_calculations"
				]
			}
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
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_calculations"
				],
				"bodyInputMode_fms_offers_post_fms_offers_calculations": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_fms_offers_post_fms_offers_calculations",
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
					"fms_offers_post_fms_offers_calculations"
				],
				"bodyInputMode_fms_offers_post_fms_offers_calculations": [
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
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_rfq_extract"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_fms_offers_post_fms_offers_rfq_extract_charges",
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
					"fms_offers_post_fms_offers_rfq_extract_charges"
				]
			}
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
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_rfq_extract_charges"
				],
				"bodyInputMode_fms_offers_post_fms_offers_rfq_extract_charges": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_fms_offers_post_fms_offers_rfq_extract_charges",
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
					"fms_offers_post_fms_offers_rfq_extract_charges"
				],
				"bodyInputMode_fms_offers_post_fms_offers_rfq_extract_charges": [
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
		"name": "bodyInputMode_fms_offers_post_fms_offers_rfq_from_email",
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
					"fms_offers_post_fms_offers_rfq_from_email"
				]
			}
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
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_rfq_from_email"
				],
				"bodyInputMode_fms_offers_post_fms_offers_rfq_from_email": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_fms_offers_post_fms_offers_rfq_from_email",
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
					"fms_offers_post_fms_offers_rfq_from_email"
				],
				"bodyInputMode_fms_offers_post_fms_offers_rfq_from_email": [
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
					"fms_products_put_fms_products_products_id"
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
	}
];

export default properties;
