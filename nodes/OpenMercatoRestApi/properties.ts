/* eslint-disable */
// @ts-nocheck
/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * Generated from OpenMercato OpenAPI spec using @algolia/n8n-openapi-node
 * Run `npm run generate:openapi` to regenerate.
 *
 * Source: https://openmercato.freighttech.org/api/docs/openapi
 * Generated: 2026-04-28T10:43:44.004Z
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
				"name": "Freight Documents",
				"value": "Freight Documents"
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
				"name": "GET /api/freight_documents/documents/{id}/download",
				"value": "freight_documents_get_freight_documents_documents_id_download",
				"action": "GET /api/freight_documents/documents/{id}/download",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/download"
					}
				}
			},
			{
				"name": "GET /api/freight_documents/documents/{id}/extract",
				"value": "freight_documents_get_freight_documents_documents_id_extract",
				"action": "GET /api/freight_documents/documents/{id}/extract",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/extract"
					}
				}
			},
			{
				"name": "POST /api/freight_documents/documents/{id}/extract",
				"value": "freight_documents_post_freight_documents_documents_id_extract",
				"action": "POST /api/freight_documents/documents/{id}/extract",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/extract"
					}
				}
			},
			{
				"name": "POST /api/freight_documents/documents/{id}/feedback",
				"value": "freight_documents_post_freight_documents_documents_id_feedback",
				"action": "POST /api/freight_documents/documents/{id}/feedback",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/feedback"
					}
				}
			},
			{
				"name": "POST /api/freight_documents/documents/{id}/link",
				"value": "freight_documents_post_freight_documents_documents_id_link",
				"action": "POST /api/freight_documents/documents/{id}/link",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/link"
					}
				}
			},
			{
				"name": "GET /api/freight_documents/documents/{id}/pages/{pageNum}/image",
				"value": "freight_documents_get_freight_documents_documents_id_pages_pageNum_image",
				"action": "GET /api/freight_documents/documents/{id}/pages/{pageNum}/image",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/pages/{{ $parameter.pageNum_string }}/image"
					}
				}
			},
			{
				"name": "GET /api/freight_documents/documents/{id}/pages",
				"value": "freight_documents_get_freight_documents_documents_id_pages",
				"action": "GET /api/freight_documents/documents/{id}/pages",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/pages"
					}
				}
			},
			{
				"name": "GET /api/freight_documents/documents/{id}",
				"value": "freight_documents_get_freight_documents_documents_id",
				"action": "GET /api/freight_documents/documents/{id}",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /api/freight_documents/documents/{id}",
				"value": "freight_documents_put_freight_documents_documents_id",
				"action": "PUT /api/freight_documents/documents/{id}",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PATCH /api/freight_documents/documents/{id}",
				"value": "freight_documents_patch_freight_documents_documents_id",
				"action": "PATCH /api/freight_documents/documents/{id}",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /api/freight_documents/documents/{id}",
				"value": "freight_documents_delete_freight_documents_documents_id",
				"action": "DELETE /api/freight_documents/documents/{id}",
				"description": "Requires features: freight_documents.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PATCH /api/freight_documents/documents/{id}/sections/{sectionId}",
				"value": "freight_documents_patch_freight_documents_documents_id_sections_sectionId",
				"action": "PATCH /api/freight_documents/documents/{id}/sections/{sectionId}",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/sections/{{ $parameter.sectionId_string }}"
					}
				}
			},
			{
				"name": "POST /api/freight_documents/documents/{id}/sections/{sectionId}/set-label",
				"value": "freight_documents_post_freight_documents_documents_id_sections_sectionId_set_label",
				"action": "POST /api/freight_documents/documents/{id}/sections/{sectionId}/set-label",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/sections/{{ $parameter.sectionId_string }}/set-label"
					}
				}
			},
			{
				"name": "GET /api/freight_documents/documents/{id}/sections",
				"value": "freight_documents_get_freight_documents_documents_id_sections",
				"action": "GET /api/freight_documents/documents/{id}/sections",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/sections"
					}
				}
			},
			{
				"name": "POST /api/freight_documents/documents/{id}/unlink",
				"value": "freight_documents_post_freight_documents_documents_id_unlink",
				"action": "POST /api/freight_documents/documents/{id}/unlink",
				"description": "Requires features: freight_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/freight_documents/documents/{{ $parameter.id_string }}/unlink"
					}
				}
			},
			{
				"name": "GET /api/freight_documents/documents",
				"value": "freight_documents_get_freight_documents_documents",
				"action": "GET /api/freight_documents/documents",
				"description": "Requires features: freight_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/freight_documents/documents"
					}
				}
			},
			{
				"name": "POST /api/freight_documents/documents",
				"value": "freight_documents_post_freight_documents_documents",
				"action": "POST /api/freight_documents/documents",
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
					"offers_delete_offers_rfq_id"
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
					"FMS Offers"
				],
				"operation": [
					"offers_get_offers_dashboard_widgets_unsent_offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
					"FMS Offers"
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
				]
			}
		}
	},
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
	}
];

export default properties;
