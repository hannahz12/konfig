import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ShippoTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="shippo-typescript-sdk"
      metaDescription={`Shippo lowers the barriers to shipping for businesses around the world. As free and fast shipping becomes the norm, better access to shipping is a competitive advantage for businesses.

Through Shippo, ecommerce businesses, marketplaces, and platforms are able to connect to multiple shipping carriers around the world from one API and dashboard. Businesses can get shipping rates, print labels, automate international documents, track shipments, and facilitate returns. Internally, we think of Shippo as the building blocks of shipping.

Everyday we solve core operational problems for our users and businesses. We work hard to provide value and deliver quality results. We understand that our success is directly tied to the success of our customers.

Shippo is made up of a diverse set of individuals from around the world and across a variety backgrounds. Specifically, we look for culture and skill add from each person. We believe in self-directed growth, putting away our egos and rolling up our sleeves to get important work done everyday. If that sounds like you, join our team and help build the foundation of something great. https://goshippo.com/jobs/

Founded in 2013, we are a proud team of 200+ based out of San Francisco and Austin. Shippo's investors include Union Square Ventures, Uncork Capital, VersionOne Ventures, FundersClub and others.

Learn more about Shippo: https://goshippo.com/`}
      company="Shippo"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shippo/logo.png"
      companyKebabCase="shippo"
      clientNameCamelCase="shippo"
      homepage="goshippo.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shippo/favicon.png"
      contactUrl="https://goshippo.com/contact/"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shippo/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["shipping_api","multi_carrier","logistics_provider","shipping_integration"]}
      methods={[
  {
    "url": "/addresses",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "List all addresses",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "results",
        "schema": "integer",
        "description": "The number of results to return per page (max 100)",
        "default": 25
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/addresses",
    "method": "createNewAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Create a new address",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/addresses/{AddressId}",
    "method": "getAddressById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Retrieve an address",
    "parameters": [
      {
        "name": "addressId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the address",
        "example": "ADDRESSID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/addresses/{AddressId}/validate",
    "method": "validateAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Validate an address",
    "parameters": [
      {
        "name": "addressId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the address",
        "example": "ADDRESSID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/batches",
    "method": "createBatchShipments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batches",
    "typeScriptTag": "batches",
    "description": "Create a batch",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/batches/{BatchId}",
    "method": "getBatchById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Batches",
    "typeScriptTag": "batches",
    "description": "Retrieve a batch",
    "parameters": [
      {
        "name": "batchId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the batch",
        "example": "BATCHID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/batches/{BatchId}/add_shipments",
    "method": "addShipmentsToBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batches",
    "typeScriptTag": "batches",
    "description": "Add shipments to a batch",
    "parameters": [
      {
        "name": "batchId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the batch",
        "example": "BATCHID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/batches/{BatchId}/purchase",
    "method": "purchaseBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batches",
    "typeScriptTag": "batches",
    "description": "Purchase a batch",
    "parameters": [
      {
        "name": "batchId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the batch",
        "example": "BATCHID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/batches/{BatchId}/remove_shipments",
    "method": "removeShipments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batches",
    "typeScriptTag": "batches",
    "description": "Remove shipments from a batch",
    "parameters": [
      {
        "name": "batchId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the batch",
        "example": "BATCHID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/carrier_accounts",
    "method": "listAllAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Carrier Accounts",
    "typeScriptTag": "carrierAccounts",
    "description": "List all carrier accounts",
    "parameters": [
      {
        "name": "serviceLevels",
        "schema": "boolean",
        "required": false,
        "description": "Appends the property `service_levels` to each returned carrier account"
      },
      {
        "name": "carrier",
        "schema": "string",
        "required": false,
        "description": "Filter the response by the specified carrier"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": "Filter the response by the specified carrier account Id"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "results",
        "schema": "integer",
        "description": "The number of results to return per page (max 100)",
        "default": 25
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/carrier_accounts",
    "method": "createNewAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Carrier Accounts",
    "typeScriptTag": "carrierAccounts",
    "description": "Create a new carrier account",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      },
      {
        "name": "parameters",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "carrier",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ups"
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "UPS Account"
      },
      {
        "name": "test",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/carrier_accounts/{CarrierAccountId}",
    "method": "getAccountById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Carrier Accounts",
    "typeScriptTag": "carrierAccounts",
    "description": "Retrieve a carrier account",
    "parameters": [
      {
        "name": "carrierAccountId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the carrier account",
        "example": "CARRIERACCOUNTID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/carrier_accounts/{CarrierAccountId}",
    "method": "updateAccount",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Carrier Accounts",
    "typeScriptTag": "carrierAccounts",
    "description": "Update a carrier account",
    "parameters": [
      {
        "name": "carrierAccountId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the carrier account",
        "example": "CARRIERACCOUNTID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      },
      {
        "name": "parameters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "****"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "carrier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "usps"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/carrier_accounts/register/new",
    "method": "addShippoAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Carrier Accounts",
    "typeScriptTag": "carrierAccounts",
    "description": "Add a Shippo carrier account",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/carrier_accounts/reg-status",
    "method": "getRegStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Carrier Accounts",
    "typeScriptTag": "carrierAccounts",
    "description": "Get Carrier Registration status",
    "parameters": [
      {
        "name": "carrier",
        "schema": "string",
        "required": true,
        "description": "filter by specific carrier",
        "example": "CARRIER"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customs/declarations",
    "method": "listAllDeclarations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customs Declarations",
    "typeScriptTag": "customsDeclarations",
    "description": "List all customs declarations",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "results",
        "schema": "integer",
        "description": "The number of results to return per page (max 100)",
        "default": 25
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customs/declarations",
    "method": "createNewDeclaration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customs Declarations",
    "typeScriptTag": "customsDeclarations",
    "description": "Create a new customs declaration",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customs/declarations/{CustomsDeclarationId}",
    "method": "getDeclarationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customs Declarations",
    "typeScriptTag": "customsDeclarations",
    "description": "Retrieve a customs declaration",
    "parameters": [
      {
        "name": "customsDeclarationId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the customs declaration",
        "example": "CUSTOMSDECLARATIONID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customs/items",
    "method": "listAllItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customs Items",
    "typeScriptTag": "customsItems",
    "description": "List all customs items",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "results",
        "schema": "integer",
        "description": "The number of results to return per page (max 100)",
        "default": 25
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customs/items",
    "method": "createNewCustomsItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customs Items",
    "typeScriptTag": "customsItems",
    "description": "Create a new customs item",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "T-Shirt"
      },
      {
        "name": "eccn_ear99",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mass_unit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "lb"
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Order ID \"123454\""
      },
      {
        "name": "net_weight",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5"
      },
      {
        "name": "origin_country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORIGIN_COUNTRY"
      },
      {
        "name": "quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 20
      },
      {
        "name": "sku_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "HM-123"
      },
      {
        "name": "tariff_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "value_amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "200"
      },
      {
        "name": "value_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customs/items/{CustomsItemId}",
    "method": "getExistingItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customs Items",
    "typeScriptTag": "customsItems",
    "description": "Retrieve a customs item",
    "parameters": [
      {
        "name": "customsItemId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the customs item",
        "example": "CUSTOMSITEMID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/live-rates",
    "method": "initiateLiveRatesRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rates at Checkout",
    "typeScriptTag": "ratesAtCheckout",
    "description": "Generate a live rates request",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      },
      {
        "name": "address_from",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "address_to",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "line_items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "parcel",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "5df144dca289442cv7a06"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/live-rates/settings/parcel-template",
    "method": "clearDefaultParcelTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Rates at Checkout",
    "typeScriptTag": "ratesAtCheckout",
    "description": "Clear current default parcel template",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The parcel template was successfully deleted."
      }
    ]
  },
  {
    "url": "/live-rates/settings/parcel-template",
    "method": "showDefaultParcelTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rates at Checkout",
    "typeScriptTag": "ratesAtCheckout",
    "description": "Show current default parcel template",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/live-rates/settings/parcel-template",
    "method": "updateDefaultParcelTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Rates at Checkout",
    "typeScriptTag": "ratesAtCheckout",
    "description": "Update default parcel template",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      },
      {
        "name": "object_id",
        "schema": "string",
        "description": "",
        "example": "b958d3690bb04bb8b2986724872750f5"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/manifests",
    "method": "listAllManifests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Manifests",
    "typeScriptTag": "manifests",
    "description": "List all manifests",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "results",
        "schema": "integer",
        "description": "The number of results to return per page (max 100)",
        "default": 25
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/manifests",
    "method": "createNewManifest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manifests",
    "typeScriptTag": "manifests",
    "description": "Create a new manifest",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/manifests/{ManifestId}",
    "method": "getManifestById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Manifests",
    "typeScriptTag": "manifests",
    "description": "Retrieve a manifest",
    "parameters": [
      {
        "name": "manifestId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the manifest to update",
        "example": "MANIFESTID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders",
    "method": "listAllOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "List all orders",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "results",
        "schema": "integer",
        "description": "The number of results to return per page (max 100)",
        "default": 25
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders",
    "method": "createNewOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Create a new order",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{OrderId}",
    "method": "getOrderById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Retrieve an order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the order",
        "example": "ORDERID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/parcel-templates",
    "method": "listAllCarrierParcelTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Carrier Parcel Templates",
    "typeScriptTag": "carrierParcelTemplates",
    "description": "List all carrier parcel templates",
    "parameters": [
      {
        "name": "include",
        "schema": "string",
        "description": "filter by user or enabled"
      },
      {
        "name": "carrier",
        "schema": "string",
        "description": "filter by specific carrier",
        "example": "fedex"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/parcel-templates/{CarrierParcelTemplateToken}",
    "method": "getTemplateById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Carrier Parcel Templates",
    "typeScriptTag": "carrierParcelTemplates",
    "description": "Retrieve a carrier parcel templates",
    "parameters": [
      {
        "name": "carrierParcelTemplateToken",
        "schema": "string",
        "required": true,
        "description": "The unique string representation of the carrier parcel template",
        "example": "CARRIERPARCELTEMPLATETOKEN"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/parcels",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Parcels",
    "typeScriptTag": "parcels",
    "description": "List all parcels",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "results",
        "schema": "integer",
        "description": "The number of results to return per page (max 100)",
        "default": 25
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/parcels",
    "method": "createNewParcel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Parcels",
    "typeScriptTag": "parcels",
    "description": "Create a new parcel",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      },
      {
        "name": "distance_unit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "in"
      },
      {
        "name": "extra",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "height",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1"
      },
      {
        "name": "length",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1"
      },
      {
        "name": "mass_unit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "lb"
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "test",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "weight",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1"
      },
      {
        "name": "width",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/parcels/{ParcelId}",
    "method": "getParcelDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Parcels",
    "typeScriptTag": "parcels",
    "description": "Retrieve an existing parcel",
    "parameters": [
      {
        "name": "parcelId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the parcel",
        "example": "PARCELID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/pickups",
    "method": "createObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pickups",
    "typeScriptTag": "pickups",
    "description": "Create a pickup",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      },
      {
        "name": "carrier_account",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "adcfdddf8ec64b84ad22772bce3ea37a"
      },
      {
        "name": "location",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requested_end_time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTED_END_TIME"
      },
      {
        "name": "requested_start_time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTED_START_TIME"
      },
      {
        "name": "transactions",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "adcfdddf8ec64b84ad22772bce3ea37a"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/rates/{RateId}",
    "method": "getRateById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rates",
    "typeScriptTag": "rates",
    "description": "Retrieve a rate",
    "parameters": [
      {
        "name": "rateId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the rate",
        "example": "RATEID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/refunds",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refunds",
    "typeScriptTag": "refunds",
    "description": "List all refunds",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/refunds/{RefundId}",
    "method": "getRefundById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refunds",
    "typeScriptTag": "refunds",
    "description": "Retrieve a refund",
    "parameters": [
      {
        "name": "refundId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the refund to update",
        "example": "REFUNDID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/service-groups",
    "method": "listAllServiceGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Service Groups",
    "typeScriptTag": "serviceGroups",
    "description": "List all service groups",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/service-groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Service Groups",
    "typeScriptTag": "serviceGroups",
    "description": "Create a new service group",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/service-groups",
    "method": "updateExistingGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Service Groups",
    "typeScriptTag": "serviceGroups",
    "description": "Update an existing service group",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/service-groups/{ServiceGroupId}",
    "method": "deleteServiceGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Service Groups",
    "typeScriptTag": "serviceGroups",
    "description": "Delete a service group",
    "parameters": [
      {
        "name": "serviceGroupId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the service group",
        "example": "SERVICEGROUPID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The service group was successfully deleted."
      }
    ]
  },
  {
    "url": "/shipments",
    "method": "listAllShipments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipments",
    "typeScriptTag": "shipments",
    "description": "List all shipments",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "results",
        "schema": "integer",
        "description": "The number of results to return per page (max 100)",
        "default": 25
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/shipments",
    "method": "createNewShipment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shipments",
    "typeScriptTag": "shipments",
    "description": "Create a new shipment",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/shipments/{ShipmentId}",
    "method": "getShipmentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipments",
    "typeScriptTag": "shipments",
    "description": "Retrieve a shipment",
    "parameters": [
      {
        "name": "shipmentId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the shipment to update",
        "example": "SHIPMENTID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/shipments/{ShipmentId}/rates",
    "method": "getShipmentRates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rates",
    "typeScriptTag": "rates",
    "description": "Retrieve shipment rates",
    "parameters": [
      {
        "name": "shipmentId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the shipment to update",
        "example": "SHIPMENTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "results",
        "schema": "integer",
        "description": "The number of results to return per page (max 100)",
        "default": 25
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/shipments/{ShipmentId}/rates/{CurrencyCode}",
    "method": "getShipmentRatesInCurrency",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rates",
    "typeScriptTag": "rates",
    "description": "Retrieve shipment rates in currency",
    "parameters": [
      {
        "name": "shipmentId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the shipment to update",
        "example": "SHIPMENTID"
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "required": true,
        "description": "ISO currency code for the rates",
        "example": "CURRENCYCODE",
        "default": "USD"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "results",
        "schema": "integer",
        "description": "The number of results to return per page (max 100)",
        "default": 25
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks",
    "method": "registerWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tracking Status",
    "typeScriptTag": "trackingStatus",
    "description": "Register a tracking webhook",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      },
      {
        "name": "carrier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "usps"
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Order 000123"
      },
      {
        "name": "tracking_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9205590164917312751089"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks/{Carrier}/{TrackingNumber}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracking Status",
    "typeScriptTag": "trackingStatus",
    "description": "Get a tracking status",
    "parameters": [
      {
        "name": "trackingNumber",
        "schema": "string",
        "required": true,
        "description": "Tracking number",
        "example": "TRACKINGNUMBER"
      },
      {
        "name": "carrier",
        "schema": "string",
        "required": true,
        "description": "Name of the carrier",
        "example": "CARRIER"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactions",
    "method": "listAllShippingLabels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List all shipping labels",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "results",
        "schema": "integer",
        "description": "The number of results to return per page (max 100)",
        "default": 25
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactions",
    "method": "createShippingLabel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Create a shipping label",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactions/{TransactionId}",
    "method": "getShippingLabel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Retrieve a shipping label",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the transaction to update",
        "example": "TRANSACTIONID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user-parcel-templates",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Parcel Templates",
    "typeScriptTag": "userParcelTemplates",
    "description": "List all user parcel templates",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user-parcel-templates",
    "method": "createNewTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Parcel Templates",
    "typeScriptTag": "userParcelTemplates",
    "description": "Create a new user parcel template",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user-parcel-templates/{UserParcelTemplateObjectId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User Parcel Templates",
    "typeScriptTag": "userParcelTemplates",
    "description": "Delete a user parcel template",
    "parameters": [
      {
        "name": "userParcelTemplateObjectId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the user parcel template",
        "example": "USERPARCELTEMPLATEOBJECTID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The user parcel template was successfully deleted."
      }
    ]
  },
  {
    "url": "/user-parcel-templates/{UserParcelTemplateObjectId}",
    "method": "getTemplateById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Parcel Templates",
    "typeScriptTag": "userParcelTemplates",
    "description": "Retrieves a user parcel template",
    "parameters": [
      {
        "name": "userParcelTemplateObjectId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the user parcel template",
        "example": "USERPARCELTEMPLATEOBJECTID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user-parcel-templates/{UserParcelTemplateObjectId}",
    "method": "updateTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Parcel Templates",
    "typeScriptTag": "userParcelTemplates",
    "description": "Update an existing user parcel template",
    "parameters": [
      {
        "name": "userParcelTemplateObjectId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the user parcel template",
        "example": "USERPARCELTEMPLATEOBJECTID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/shippo-accounts",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shippo Accounts",
    "typeScriptTag": "shippoAccounts",
    "description": "List all Shippo Accounts",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number you want to select",
        "default": 1
      },
      {
        "name": "results",
        "schema": "integer",
        "description": "The number of results to return per page (max 100)",
        "default": 25
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/shippo-accounts",
    "method": "createNewAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shippo Accounts",
    "typeScriptTag": "shippoAccounts",
    "description": "Create a Shippo Account",
    "parameters": [
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "hippo@shippo.com"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Shippo"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Meister"
      },
      {
        "name": "company_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Acme"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/shippo-accounts/{ShippoAccountId}",
    "method": "getAccountById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shippo Accounts",
    "typeScriptTag": "shippoAccounts",
    "description": "Retrieve a Shippo Account",
    "parameters": [
      {
        "name": "shippoAccountId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the ShippoAccount",
        "example": "SHIPPOACCOUNTID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/shippo-accounts/{ShippoAccountId}",
    "method": "updateAccountObject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shippo Accounts",
    "typeScriptTag": "shippoAccounts",
    "description": "Update a Shippo Account",
    "parameters": [
      {
        "name": "shippoAccountId",
        "schema": "string",
        "required": true,
        "description": "Object ID of the ShippoAccount",
        "example": "SHIPPOACCOUNTID"
      },
      {
        "name": "shippoApiVersion",
        "schema": "string",
        "description": "String used to pick a non-default API version to use"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "hippo@shippo.com"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Shippo"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Meister"
      },
      {
        "name": "company_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Acme"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Shippo external API."
      apiBaseUrl="https://api.goshippo.com"
      apiVersion="2018-02-08"
      endpoints={46}
      sdkMethods={65}
      schemas={203}
      parameters={166}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shippo/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shippo/openapi.yaml"
      developerDocumentation="docs.goshippo.com/shippoapi/public-api/"
    />
  );
}
  