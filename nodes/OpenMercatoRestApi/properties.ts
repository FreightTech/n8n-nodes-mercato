/* eslint-disable */
// @ts-nocheck
/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * Generated from OpenMercato OpenAPI spec using @algolia/n8n-openapi-node
 * Run `npm run generate:openapi` to regenerate.
 *
 * Source: https://fms.offdock.freighttech.org/api/docs/openapi
 * Generated: 2026-05-04T09:56:29.438Z
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
				"value": "Freight Documents",
				"description": "Unified document management with AI-powered OCR extraction, invoice processing, and charge code matching"
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
