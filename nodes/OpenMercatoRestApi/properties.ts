/* eslint-disable */
/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * Generated from OpenMercato OpenAPI spec using @algolia/n8n-openapi-node
 * Run `npm run generate:openapi` to regenerate.
 *
 * Source: https://openmercato.freighttech.org/api/docs/openapi
 * Generated: 2026-02-10T14:01:47.372Z
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
						"containerCount",
						"context",
						"createdAt",
						"description",
						"destination",
						"destinationLocationId"
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
						"containerCount",
						"context",
						"createdAt",
						"description",
						"destination",
						"destinationLocationId"
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
				"displayName": "Contact Person",
				"name": "contactPerson_string"
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
					"contactPerson": "={{ $value.contactPerson_string }}",
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
				"displayName": "Contact Person",
				"name": "contactPerson_string"
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
					"contactPerson": "={{ $value.contactPerson_string }}",
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
	},
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
	},
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
	}
];

export default properties;
