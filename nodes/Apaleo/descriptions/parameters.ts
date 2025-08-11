import { INodeProperties } from 'n8n-workflow';

// This will contain all parameter fields for operations
export const parameterFields: INodeProperties[] = [
  {
    "displayName": "Property Id",
    "name": "AvailabilityUnitsGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnitsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The property id",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/availability/v1/units",
        "qs": {
          "propertyId": "={{$parameter[\"AvailabilityUnitsGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "From",
    "name": "AvailabilityUnitsGet_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnitsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The from date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/availability/v1/units",
        "qs": {
          "from": "={{$parameter[\"AvailabilityUnitsGet_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "AvailabilityUnitsGet_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnitsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The to date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/availability/v1/units",
        "qs": {
          "to": "={{$parameter[\"AvailabilityUnitsGet_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Unit Group Id",
    "name": "AvailabilityUnitsGet_unitGroupId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnitsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The unit group id",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupId"
      }
    }
  },
  {
    "displayName": "Include Out Of Service",
    "name": "AvailabilityUnitsGet_includeOutOfService",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnitsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": false,
    "description": "Should units that are set OutOfService in the defined time period be returned as available.",
    "routing": {
      "send": {
        "type": "query",
        "property": "includeOutOfService"
      }
    }
  },
  {
    "displayName": "Unit Condition",
    "name": "AvailabilityUnitsGet_unitCondition",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnitsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The unit condition",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitCondition"
      }
    },
    "options": [
      {
        "name": "Clean",
        "value": "Clean"
      },
      {
        "name": "CleanToBeInspected",
        "value": "CleanToBeInspected"
      },
      {
        "name": "Dirty",
        "value": "Dirty"
      }
    ]
  },
  {
    "displayName": "Unit Attribute Ids",
    "name": "AvailabilityUnitsGet_unitAttributeIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnitsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "Return units with the specific unit attributes",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitAttributeIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitAttributeIdsValues",
        "displayName": "Unit Attribute Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return units with the specific unit attributes"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "AvailabilityUnitsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnitsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "AvailabilityUnitsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnitsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "AvailabilityUnit-groupsGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The property id",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/availability/v1/unit-groups",
        "qs": {
          "propertyId": "={{$parameter[\"AvailabilityUnit-groupsGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "From",
    "name": "AvailabilityUnit-groupsGet_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "First day of the requested time period. The given day will be included in the response.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/availability/v1/unit-groups",
        "qs": {
          "from": "={{$parameter[\"AvailabilityUnit-groupsGet_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "AvailabilityUnit-groupsGet_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "Last day of the requested time period. The given day will be included in the response.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/availability/v1/unit-groups",
        "qs": {
          "to": "={{$parameter[\"AvailabilityUnit-groupsGet_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Time Slice Template",
    "name": "AvailabilityUnit-groupsGet_timeSliceTemplate",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The time slice template, defaults to 'over night'",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceTemplate"
      }
    },
    "options": [
      {
        "name": "DayUse",
        "value": "DayUse"
      },
      {
        "name": "OverNight",
        "value": "OverNight"
      }
    ]
  },
  {
    "displayName": "Unit Group Types",
    "name": "AvailabilityUnit-groupsGet_unitGroupTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested unit group types",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupTypesValues",
        "displayName": "Unit Group Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested unit group types"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Time Slice Definition Ids",
    "name": "AvailabilityUnit-groupsGet_timeSliceDefinitionIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The time slice definition ids",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceDefinitionIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "timeSliceDefinitionIdsValues",
        "displayName": "Time Slice Definition Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The time slice definition ids"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Ids",
    "name": "AvailabilityUnit-groupsGet_unitGroupIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The unit group ids",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupIdsValues",
        "displayName": "Unit Group Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The unit group ids"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Adults",
    "name": "AvailabilityUnit-groupsGet_adults",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The number of adults you want availability for, defaults to 1",
    "routing": {
      "send": {
        "type": "query",
        "property": "adults"
      }
    }
  },
  {
    "displayName": "Children Ages",
    "name": "AvailabilityUnit-groupsGet_childrenAges",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The ages of the children you want availability for",
    "routing": {
      "send": {
        "type": "query",
        "property": "childrenAges"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "childrenAgesValues",
        "displayName": "Children Ages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "number",
            "default": "",
            "description": "The ages of the children you want availability for"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Only Sellable",
    "name": "AvailabilityUnit-groupsGet_onlySellable",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": false,
    "description": "When set to 'true', only the unit groups sold by the specified time slice template and time slice definition ids are returned,\r\notherwise all unit groups are returned",
    "routing": {
      "send": {
        "type": "query",
        "property": "onlySellable"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "AvailabilityUnit-groupsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "AvailabilityUnit-groupsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "AvailabilityUnit-groupsByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsByIdPatch"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "Id of the unit group to be modified.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/availability/v1/unit-groups/={{$parameter[\"AvailabilityUnit-groupsByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "From",
    "name": "AvailabilityUnit-groupsByIdPatch_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsByIdPatch"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "First day of the time period from which availability will be modified",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/availability/v1/unit-groups/{id}",
        "qs": {
          "from": "={{$parameter[\"AvailabilityUnit-groupsByIdPatch_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "AvailabilityUnit-groupsByIdPatch_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsByIdPatch"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "Last day of the time period until which availability will be modified",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/availability/v1/unit-groups/{id}",
        "qs": {
          "to": "={{$parameter[\"AvailabilityUnit-groupsByIdPatch_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Time Slice Template",
    "name": "AvailabilityUnit-groupsByIdPatch_timeSliceTemplate",
    "type": "options",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsByIdPatch"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The time slice template",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/availability/v1/unit-groups/{id}",
        "qs": {
          "timeSliceTemplate": "={{$parameter[\"AvailabilityUnit-groupsByIdPatch_timeSliceTemplate\"]}}"
        }
      }
    },
    "options": [
      {
        "name": "DayUse",
        "value": "DayUse"
      },
      {
        "name": "OverNight",
        "value": "OverNight"
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "AvailabilityUnit-groupsByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityUnit-groupsByIdPatch"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/availability/v1/unit-groups/{id}",
        "body": "={{JSON.parse($parameter[\"AvailabilityUnit-groupsByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "AvailabilityServicesGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityServicesGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The property id",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/availability/v1/services",
        "qs": {
          "propertyId": "={{$parameter[\"AvailabilityServicesGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "From",
    "name": "AvailabilityServicesGet_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityServicesGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "First day of the requested time period. The given day will be included in the response.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/availability/v1/services",
        "qs": {
          "from": "={{$parameter[\"AvailabilityServicesGet_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "AvailabilityServicesGet_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityServicesGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "Last day of the requested time period. The given day will be included in the response.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/availability/v1/services",
        "qs": {
          "to": "={{$parameter[\"AvailabilityServicesGet_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Time Slice Template",
    "name": "AvailabilityServicesGet_timeSliceTemplate",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityServicesGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The time slice template, defaults to 'over night'",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceTemplate"
      }
    },
    "options": [
      {
        "name": "DayUse",
        "value": "DayUse"
      },
      {
        "name": "OverNight",
        "value": "OverNight"
      }
    ]
  },
  {
    "displayName": "Time Slice Definition Ids",
    "name": "AvailabilityServicesGet_timeSliceDefinitionIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityServicesGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The time slice definition ids",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceDefinitionIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "timeSliceDefinitionIdsValues",
        "displayName": "Time Slice Definition Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The time slice definition ids"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Channel Codes",
    "name": "AvailabilityServicesGet_channelCodes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityServicesGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "The channel code used to filter the services",
    "routing": {
      "send": {
        "type": "query",
        "property": "channelCodes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "channelCodesValues",
        "displayName": "Channel Codes",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The channel code used to filter the services"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "AvailabilityServicesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityServicesGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "AvailabilityServicesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityServicesGet"
        ],
        "resource": [
          "availability"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "AvailabilityReservationsByIdUnitsGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityReservationsByIdUnitsGet"
        ],
        "resource": [
          "reservationavailability"
        ]
      }
    },
    "default": "",
    "description": "The id of the reservation",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/availability/v1/reservations/={{$parameter[\"AvailabilityReservationsByIdUnitsGet_id\"]}}/units"
      }
    }
  },
  {
    "displayName": "Unit Group Id",
    "name": "AvailabilityReservationsByIdUnitsGet_unitGroupId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityReservationsByIdUnitsGet"
        ],
        "resource": [
          "reservationavailability"
        ]
      }
    },
    "default": "",
    "description": "The unit group id",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupId"
      }
    }
  },
  {
    "displayName": "From",
    "name": "AvailabilityReservationsByIdUnitsGet_from",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityReservationsByIdUnitsGet"
        ],
        "resource": [
          "reservationavailability"
        ]
      }
    },
    "default": "",
    "description": "The from date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "from"
      }
    }
  },
  {
    "displayName": "To",
    "name": "AvailabilityReservationsByIdUnitsGet_to",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityReservationsByIdUnitsGet"
        ],
        "resource": [
          "reservationavailability"
        ]
      }
    },
    "default": "",
    "description": "The to date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "to"
      }
    }
  },
  {
    "displayName": "Include Out Of Service",
    "name": "AvailabilityReservationsByIdUnitsGet_includeOutOfService",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityReservationsByIdUnitsGet"
        ],
        "resource": [
          "reservationavailability"
        ]
      }
    },
    "default": false,
    "description": "Should units that are set OutOfService in the defined time period be returned as available.",
    "routing": {
      "send": {
        "type": "query",
        "property": "includeOutOfService"
      }
    }
  },
  {
    "displayName": "Unit Condition",
    "name": "AvailabilityReservationsByIdUnitsGet_unitCondition",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityReservationsByIdUnitsGet"
        ],
        "resource": [
          "reservationavailability"
        ]
      }
    },
    "default": "",
    "description": "The unit condition",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitCondition"
      }
    },
    "options": [
      {
        "name": "Clean",
        "value": "Clean"
      },
      {
        "name": "CleanToBeInspected",
        "value": "CleanToBeInspected"
      },
      {
        "name": "Dirty",
        "value": "Dirty"
      }
    ]
  },
  {
    "displayName": "Unit Attribute Ids",
    "name": "AvailabilityReservationsByIdUnitsGet_unitAttributeIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityReservationsByIdUnitsGet"
        ],
        "resource": [
          "reservationavailability"
        ]
      }
    },
    "default": "",
    "description": "Return units with the specific unit attributes",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitAttributeIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitAttributeIdsValues",
        "displayName": "Unit Attribute Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return units with the specific unit attributes"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "AvailabilityReservationsByIdUnitsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityReservationsByIdUnitsGet"
        ],
        "resource": [
          "reservationavailability"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "AvailabilityReservationsByIdUnitsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "AvailabilityReservationsByIdUnitsGet"
        ],
        "resource": [
          "reservationavailability"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingBlocksPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksPost"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "{\n  \"groupId\": \"XPGMSXGF\",\n  \"ratePlanId\": \"MUC-NONREF-SGL\",\n  \"from\": \"2025-08-16\",\n  \"to\": \"2025-08-19\",\n  \"grossDailyRate\": {\n    \"amount\": 160,\n    \"currency\": \"EUR\"\n  },\n  \"timeSlices\": [\n    {\n      \"blockedUnits\": 3\n    },\n    {\n      \"blockedUnits\": 0\n    },\n    {\n      \"blockedUnits\": 7\n    }\n  ]\n}",
    "description": "The details for the block you want to create.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/booking/v1/blocks",
        "body": "={{JSON.parse($parameter[\"BookingBlocksPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "BookingBlocksPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksPost"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Group Id",
    "name": "BookingBlocksGet_groupId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks for the specific group",
    "routing": {
      "send": {
        "type": "query",
        "property": "groupId"
      }
    }
  },
  {
    "displayName": "Property Ids",
    "name": "BookingBlocksGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks filtered by properties",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return blocks filtered by properties"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Status",
    "name": "BookingBlocksGet_status",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks filtered by statuses",
    "routing": {
      "send": {
        "type": "query",
        "property": "status"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "statusValues",
        "displayName": "Status",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return blocks filtered by statuses"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Ids",
    "name": "BookingBlocksGet_unitGroupIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks with any of the specified unit groups",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupIdsValues",
        "displayName": "Unit Group Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return blocks with any of the specified unit groups"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Rate Plan Ids",
    "name": "BookingBlocksGet_ratePlanIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks with any of the specified rate plans",
    "routing": {
      "send": {
        "type": "query",
        "property": "ratePlanIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "ratePlanIdsValues",
        "displayName": "Rate Plan Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return blocks with any of the specified rate plans"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Time Slice Definition Ids",
    "name": "BookingBlocksGet_timeSliceDefinitionIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks with any of the specified time slice definitions",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceDefinitionIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "timeSliceDefinitionIdsValues",
        "displayName": "Time Slice Definition Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return blocks with any of the specified time slice definitions"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Types",
    "name": "BookingBlocksGet_unitGroupTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks with any of the specified unit group types",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupTypesValues",
        "displayName": "Unit Group Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return blocks with any of the specified unit group types"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Time Slice Template",
    "name": "BookingBlocksGet_timeSliceTemplate",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "The time slice template, defaults to 'over night'",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceTemplate"
      }
    },
    "options": [
      {
        "name": "DayUse",
        "value": "DayUse"
      },
      {
        "name": "OverNight",
        "value": "OverNight"
      }
    ]
  },
  {
    "displayName": "From",
    "name": "BookingBlocksGet_from",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "The start of the time range. All blocks that are overlapping with the interval specified by from and to\r\nwill be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "from"
      }
    }
  },
  {
    "displayName": "To",
    "name": "BookingBlocksGet_to",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "The end of the time range. All blocks that are overlapping with the interval specified by from and to\r\nwill be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "to"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "BookingBlocksGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "BookingBlocksGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "BookingBlocksGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Group Id",
    "name": "BookingBlocks$countGet_groupId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocks$countGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks for the specific group",
    "routing": {
      "send": {
        "type": "query",
        "property": "groupId"
      }
    }
  },
  {
    "displayName": "Property Ids",
    "name": "BookingBlocks$countGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocks$countGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks filtered by properties",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return blocks filtered by properties"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Status",
    "name": "BookingBlocks$countGet_status",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocks$countGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks filtered by statuses",
    "routing": {
      "send": {
        "type": "query",
        "property": "status"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "statusValues",
        "displayName": "Status",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return blocks filtered by statuses"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Ids",
    "name": "BookingBlocks$countGet_unitGroupIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocks$countGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks with any of the specified unit groups",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupIdsValues",
        "displayName": "Unit Group Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return blocks with any of the specified unit groups"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Rate Plan Ids",
    "name": "BookingBlocks$countGet_ratePlanIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocks$countGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks with any of the specified rate plans",
    "routing": {
      "send": {
        "type": "query",
        "property": "ratePlanIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "ratePlanIdsValues",
        "displayName": "Rate Plan Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return blocks with any of the specified rate plans"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Time Slice Definition Ids",
    "name": "BookingBlocks$countGet_timeSliceDefinitionIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocks$countGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks with any of the specified time slice definitions",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceDefinitionIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "timeSliceDefinitionIdsValues",
        "displayName": "Time Slice Definition Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return blocks with any of the specified time slice definitions"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Types",
    "name": "BookingBlocks$countGet_unitGroupTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocks$countGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Return blocks with any of the specified unit group types",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupTypesValues",
        "displayName": "Unit Group Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return blocks with any of the specified unit group types"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Time Slice Template",
    "name": "BookingBlocks$countGet_timeSliceTemplate",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocks$countGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "The time slice template, defaults to 'over night'",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceTemplate"
      }
    },
    "options": [
      {
        "name": "DayUse",
        "value": "DayUse"
      },
      {
        "name": "OverNight",
        "value": "OverNight"
      }
    ]
  },
  {
    "displayName": "From",
    "name": "BookingBlocks$countGet_from",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocks$countGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "The start of the time range. All blocks that are overlapping with the interval specified by from and to\r\nwill be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "from"
      }
    }
  },
  {
    "displayName": "To",
    "name": "BookingBlocks$countGet_to",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocks$countGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "The end of the time range. All blocks that are overlapping with the interval specified by from and to\r\nwill be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "to"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingBlocksByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksByIdGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "Id of the block to be retrieved.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/blocks/={{$parameter[\"BookingBlocksByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "BookingBlocksByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlocksByIdGet"
        ],
        "resource": [
          "block"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "BookingBlock-actionsByIdConfirmPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlock-actionsByIdConfirmPut"
        ],
        "resource": [
          "blockactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the block that should be processed.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/block-actions/={{$parameter[\"BookingBlock-actionsByIdConfirmPut_id\"]}}/confirm"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingBlock-actionsByIdReleasePut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlock-actionsByIdReleasePut"
        ],
        "resource": [
          "blockactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the block that should be processed.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/block-actions/={{$parameter[\"BookingBlock-actionsByIdReleasePut_id\"]}}/release"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingBlock-actionsByIdCancelPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlock-actionsByIdCancelPut"
        ],
        "resource": [
          "blockactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the block that should be processed.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/block-actions/={{$parameter[\"BookingBlock-actionsByIdCancelPut_id\"]}}/cancel"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingBlock-actionsByIdWashPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlock-actionsByIdWashPut"
        ],
        "resource": [
          "blockactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the block that should be processed.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/block-actions/={{$parameter[\"BookingBlock-actionsByIdWashPut_id\"]}}/wash"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingBlock-actionsByIdAmendPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlock-actionsByIdAmendPut"
        ],
        "resource": [
          "blockactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the block to be modified.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/block-actions/={{$parameter[\"BookingBlock-actionsByIdAmendPut_id\"]}}/amend"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingBlock-actionsByIdAmendPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBlock-actionsByIdAmendPut"
        ],
        "resource": [
          "blockactions"
        ]
      }
    },
    "default": "{\n  \"from\": \"2025-08-16\",\n  \"to\": \"2025-08-19\",\n  \"grossDailyRate\": {\n    \"amount\": 160,\n    \"currency\": \"EUR\"\n  },\n  \"timeSlices\": [\n    {\n      \"blockedUnits\": 3\n    },\n    {\n      \"blockedUnits\": 0\n    },\n    {\n      \"blockedUnits\": 7\n    }\n  ]\n}",
    "description": "The definition of the block.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/block-actions/{id}/amend",
        "body": "={{JSON.parse($parameter[\"BookingBlock-actionsByIdAmendPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingBookingsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsPost"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "{\n  \"paymentAccount\": {\n    \"accountNumber\": \"1111\",\n    \"accountHolder\": \"John Doe\",\n    \"expiryMonth\": \"8\",\n    \"expiryYear\": \"2018\",\n    \"paymentMethod\": \"visa\",\n    \"payerEmail\": \"s.hopper@test.com\",\n    \"payerReference\": \"4ea6462b-cca3-4c17-a035-c7b5132db83c\",\n    \"isVirtual\": false\n  },\n  \"booker\": {\n    \"title\": \"Mr\",\n    \"gender\": \"Male\",\n    \"firstName\": \"Jon\",\n    \"middleInitial\": \"D\",\n    \"lastName\": \"Doe\",\n    \"email\": \"john.d@doe.com\",\n    \"phone\": \"+4989123343\",\n    \"address\": {\n      \"addressLine1\": \"My Street 1\",\n      \"postalCode\": \"12453\",\n      \"city\": \"MyCity\",\n      \"countryCode\": \"GB\"\n    }\n  },\n  \"reservations\": [\n    {\n      \"arrival\": \"2025-08-13\",\n      \"departure\": \"2025-08-15\",\n      \"adults\": 1,\n      \"childrenAges\": [\n        6\n      ],\n      \"guestComment\": \"I need a wake up service\",\n      \"channelCode\": \"Direct\",\n      \"primaryGuest\": {\n        \"title\": \"Mr\",\n        \"gender\": \"Male\",\n        \"firstName\": \"Jon\",\n        \"middleInitial\": \"D\",\n        \"lastName\": \"Doe\",\n        \"email\": \"john.d@doe.com\",\n        \"phone\": \"+4989123343\",\n        \"address\": {\n          \"addressLine1\": \"My Street 1\",\n          \"postalCode\": \"12453\",\n          \"city\": \"MyCity\",\n          \"countryCode\": \"GB\"\n        },\n        \"vehicleRegistration\": {\n          \"number\": \"APA322\",\n          \"countryCode\": \"DE\"\n        }\n      },\n      \"guaranteeType\": \"Prepayment\",\n      \"travelPurpose\": \"Business\",\n      \"timeSlices\": [\n        {\n          \"ratePlanId\": \"MUC-NONREF-FAMILY\"\n        },\n        {\n          \"ratePlanId\": \"MUC-NONREF-FAMILY\"\n        }\n      ],\n      \"services\": [\n        {\n          \"serviceId\": \"MUC-BRKF\"\n        },\n        {\n          \"serviceId\": \"MUC-YOGA\",\n          \"dates\": [\n            {\n              \"serviceDate\": \"2025-08-14\",\n              \"amount\": {\n                \"amount\": 35,\n                \"currency\": \"EUR\"\n              }\n            }\n          ]\n        }\n      ],\n      \"prePaymentAmount\": {\n        \"amount\": 50,\n        \"currency\": \"EUR\"\n      }\n    },\n    {\n      \"arrival\": \"2025-08-14\",\n      \"departure\": \"2025-08-16\",\n      \"adults\": 1,\n      \"childrenAges\": [\n        6\n      ],\n      \"channelCode\": \"Direct\",\n      \"primaryGuest\": {\n        \"title\": \"Mr\",\n        \"gender\": \"Male\",\n        \"firstName\": \"Eric\",\n        \"middleInitial\": \"E\",\n        \"lastName\": \"Steinmetz\",\n        \"email\": \"eric.e@steinmetz.com\",\n        \"phone\": \"+4989123343\",\n        \"address\": {\n          \"addressLine1\": \"My Street 1\",\n          \"postalCode\": \"12453\",\n          \"city\": \"MyCity\",\n          \"countryCode\": \"GB\"\n        },\n        \"vehicleRegistration\": {\n          \"number\": \"APA322\",\n          \"countryCode\": \"DE\"\n        }\n      },\n      \"guaranteeType\": \"CreditCard\",\n      \"timeSlices\": [\n        {\n          \"ratePlanId\": \"BER-FLEX-DBL\",\n          \"totalAmount\": {\n            \"amount\": 120,\n            \"currency\": \"EUR\"\n          }\n        },\n        {\n          \"ratePlanId\": \"BER-FLEX-DBL\",\n          \"totalAmount\": {\n            \"amount\": 125,\n            \"currency\": \"EUR\"\n          }\n        }\n      ],\n      \"companyId\": \"BER-UMBRELLA\",\n      \"commission\": {\n        \"commissionAmount\": {\n          \"amount\": 20,\n          \"currency\": \"EUR\"\n        },\n        \"beforeCommissionAmount\": {\n          \"amount\": 100,\n          \"currency\": \"EUR\"\n        }\n      }\n    }\n  ],\n  \"transactionReference\": \"564578124534890J\"\n}",
    "description": "The list of reservations you want to create.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/booking/v1/bookings",
        "body": "={{JSON.parse($parameter[\"BookingBookingsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "BookingBookingsPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsPost"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Reservation Id",
    "name": "BookingBookingsGet_reservationId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsGet"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Filter result by reservation id. The result set will contain all bookings having reservations with the specified id",
    "routing": {
      "send": {
        "type": "query",
        "property": "reservationId"
      }
    }
  },
  {
    "displayName": "Group Id",
    "name": "BookingBookingsGet_groupId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsGet"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Filter result by group id. The result set will contain all bookings having groups with the specified id",
    "routing": {
      "send": {
        "type": "query",
        "property": "groupId"
      }
    }
  },
  {
    "displayName": "Channel Code",
    "name": "BookingBookingsGet_channelCode",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsGet"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Filter result by the channel code. The resul set will contain all bookings having reservations with the specified channel code",
    "routing": {
      "send": {
        "type": "query",
        "property": "channelCode"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "channelCodeValues",
        "displayName": "Channel Code",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by the channel code. The resul set will contain all bookings having reservations with the specified channel code"
          }
        ]
      }
    ]
  },
  {
    "displayName": "External Code",
    "name": "BookingBookingsGet_externalCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsGet"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Filter result by the external code. The result set will contain all bookings having reservations with external code starting with provided value",
    "routing": {
      "send": {
        "type": "query",
        "property": "externalCode"
      }
    }
  },
  {
    "displayName": "Text Search",
    "name": "BookingBookingsGet_textSearch",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsGet"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "This will filter all bookings for the provided free text. Currently it only looks up if either the lastname, firstname, email or company name of the booker\r\ncontains one of the provided values",
    "routing": {
      "send": {
        "type": "query",
        "property": "textSearch"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "BookingBookingsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsGet"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "BookingBookingsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsGet"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "BookingBookingsGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsGet"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "BookingBookings$forcePost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookings$forcePost"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "{\n  \"paymentAccount\": {\n    \"accountNumber\": \"1111\",\n    \"accountHolder\": \"John Doe\",\n    \"expiryMonth\": \"8\",\n    \"expiryYear\": \"2018\",\n    \"paymentMethod\": \"visa\",\n    \"payerEmail\": \"s.hopper@test.com\",\n    \"payerReference\": \"4ea6462b-cca3-4c17-a035-c7b5132db83c\",\n    \"isVirtual\": false\n  },\n  \"booker\": {\n    \"title\": \"Mr\",\n    \"gender\": \"Male\",\n    \"firstName\": \"Jon\",\n    \"middleInitial\": \"D\",\n    \"lastName\": \"Doe\",\n    \"email\": \"john.d@doe.com\",\n    \"phone\": \"+4989123343\",\n    \"address\": {\n      \"addressLine1\": \"My Street 1\",\n      \"postalCode\": \"12453\",\n      \"city\": \"MyCity\",\n      \"countryCode\": \"GB\"\n    }\n  },\n  \"reservations\": [\n    {\n      \"arrival\": \"2025-08-13\",\n      \"departure\": \"2025-08-15\",\n      \"adults\": 1,\n      \"childrenAges\": [\n        6\n      ],\n      \"guestComment\": \"I need a wake up service\",\n      \"channelCode\": \"Direct\",\n      \"primaryGuest\": {\n        \"title\": \"Mr\",\n        \"gender\": \"Male\",\n        \"firstName\": \"Jon\",\n        \"middleInitial\": \"D\",\n        \"lastName\": \"Doe\",\n        \"email\": \"john.d@doe.com\",\n        \"phone\": \"+4989123343\",\n        \"address\": {\n          \"addressLine1\": \"My Street 1\",\n          \"postalCode\": \"12453\",\n          \"city\": \"MyCity\",\n          \"countryCode\": \"GB\"\n        },\n        \"vehicleRegistration\": {\n          \"number\": \"APA322\",\n          \"countryCode\": \"DE\"\n        }\n      },\n      \"guaranteeType\": \"Prepayment\",\n      \"travelPurpose\": \"Business\",\n      \"timeSlices\": [\n        {\n          \"ratePlanId\": \"MUC-NONREF-FAMILY\"\n        },\n        {\n          \"ratePlanId\": \"MUC-NONREF-FAMILY\"\n        }\n      ],\n      \"services\": [\n        {\n          \"serviceId\": \"MUC-BRKF\"\n        },\n        {\n          \"serviceId\": \"MUC-YOGA\",\n          \"dates\": [\n            {\n              \"serviceDate\": \"2025-08-14\",\n              \"amount\": {\n                \"amount\": 35,\n                \"currency\": \"EUR\"\n              }\n            }\n          ]\n        }\n      ],\n      \"prePaymentAmount\": {\n        \"amount\": 50,\n        \"currency\": \"EUR\"\n      }\n    },\n    {\n      \"arrival\": \"2025-08-14\",\n      \"departure\": \"2025-08-16\",\n      \"adults\": 1,\n      \"childrenAges\": [\n        6\n      ],\n      \"channelCode\": \"Direct\",\n      \"primaryGuest\": {\n        \"title\": \"Mr\",\n        \"gender\": \"Male\",\n        \"firstName\": \"Eric\",\n        \"middleInitial\": \"E\",\n        \"lastName\": \"Steinmetz\",\n        \"email\": \"eric.e@steinmetz.com\",\n        \"phone\": \"+4989123343\",\n        \"address\": {\n          \"addressLine1\": \"My Street 1\",\n          \"postalCode\": \"12453\",\n          \"city\": \"MyCity\",\n          \"countryCode\": \"GB\"\n        },\n        \"vehicleRegistration\": {\n          \"number\": \"APA322\",\n          \"countryCode\": \"DE\"\n        }\n      },\n      \"guaranteeType\": \"CreditCard\",\n      \"timeSlices\": [\n        {\n          \"ratePlanId\": \"BER-FLEX-DBL\",\n          \"totalAmount\": {\n            \"amount\": 120,\n            \"currency\": \"EUR\"\n          }\n        },\n        {\n          \"ratePlanId\": \"BER-FLEX-DBL\",\n          \"totalAmount\": {\n            \"amount\": 125,\n            \"currency\": \"EUR\"\n          }\n        }\n      ],\n      \"companyId\": \"BER-UMBRELLA\",\n      \"commission\": {\n        \"commissionAmount\": {\n          \"amount\": 20,\n          \"currency\": \"EUR\"\n        },\n        \"beforeCommissionAmount\": {\n          \"amount\": 100,\n          \"currency\": \"EUR\"\n        }\n      }\n    }\n  ],\n  \"transactionReference\": \"564578124534890J\"\n}",
    "description": "The list of reservations you want to create.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/booking/v1/bookings/$force",
        "body": "={{JSON.parse($parameter[\"BookingBookings$forcePost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "BookingBookings$forcePost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookings$forcePost"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingBookingsByIdReservationsPost_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsByIdReservationsPost"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Id of the booking the reservations should be attached to.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/booking/v1/bookings/={{$parameter[\"BookingBookingsByIdReservationsPost_id\"]}}/reservations"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingBookingsByIdReservationsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsByIdReservationsPost"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "{\n  \"reservations\": [\n    {\n      \"arrival\": \"2025-08-13\",\n      \"departure\": \"2025-08-15\",\n      \"adults\": 1,\n      \"comment\": \"I need a wake up service\",\n      \"externalCode\": \"812864414|381\",\n      \"channelCode\": \"BookingCom\",\n      \"primaryGuest\": {\n        \"title\": \"Mr\",\n        \"gender\": \"Male\",\n        \"firstName\": \"Jon\",\n        \"middleInitial\": \"D\",\n        \"lastName\": \"Doe\",\n        \"email\": \"john.d@doe.com\",\n        \"phone\": \"+4989123343\",\n        \"address\": {\n          \"addressLine1\": \"My Street 1\",\n          \"postalCode\": \"12453\",\n          \"city\": \"MyCity\",\n          \"countryCode\": \"GB\"\n        },\n        \"vehicleRegistration\": {\n          \"number\": \"APA322\",\n          \"countryCode\": \"DE\"\n        }\n      },\n      \"guaranteeType\": \"Prepayment\",\n      \"timeSlices\": [\n        {\n          \"ratePlanId\": \"MUC-NONREF-DBL\"\n        },\n        {\n          \"ratePlanId\": \"MUC-NONREF-DBL\"\n        }\n      ],\n      \"services\": [\n        {\n          \"serviceId\": \"MUC-BRKF\"\n        },\n        {\n          \"serviceId\": \"MUC-YOGA\",\n          \"dates\": [\n            {\n              \"serviceDate\": \"2025-08-14\",\n              \"amount\": {\n                \"amount\": 35,\n                \"currency\": \"EUR\"\n              }\n            }\n          ]\n        }\n      ],\n      \"companyId\": \"UMBRELLA\",\n      \"corporateCode\": \"UMBRELLA-MUC_NONREF_DBL\"\n    },\n    {\n      \"arrival\": \"2025-08-14\",\n      \"departure\": \"2025-08-16\",\n      \"adults\": 1,\n      \"childrenAges\": [\n        6\n      ],\n      \"channelCode\": \"Direct\",\n      \"primaryGuest\": {\n        \"title\": \"Mr\",\n        \"gender\": \"Male\",\n        \"firstName\": \"Eric\",\n        \"middleInitial\": \"E\",\n        \"lastName\": \"Steinmetz\",\n        \"email\": \"eric.e@steinmetz.com\",\n        \"phone\": \"+4989123343\",\n        \"address\": {\n          \"addressLine1\": \"My Street 1\",\n          \"postalCode\": \"12453\",\n          \"city\": \"MyCity\",\n          \"countryCode\": \"GB\"\n        },\n        \"vehicleRegistration\": {\n          \"number\": \"APA322\",\n          \"countryCode\": \"DE\"\n        }\n      },\n      \"guaranteeType\": \"CreditCard\",\n      \"timeSlices\": [\n        {\n          \"ratePlanId\": \"BER-FLEX-DBL\"\n        },\n        {\n          \"ratePlanId\": \"BER-FLEX-DBL\"\n        }\n      ],\n      \"commission\": {\n        \"commissionAmount\": {\n          \"amount\": 20,\n          \"currency\": \"EUR\"\n        },\n        \"beforeCommissionAmount\": {\n          \"amount\": 100,\n          \"currency\": \"EUR\"\n        }\n      }\n    }\n  ],\n  \"transactionReference\": \"RFEUFHEW\"\n}",
    "description": "The list of reservations you want to add.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/booking/v1/bookings/{id}/reservations",
        "body": "={{JSON.parse($parameter[\"BookingBookingsByIdReservationsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "BookingBookingsByIdReservationsPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsByIdReservationsPost"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingBookingsByIdReservations$forcePost_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsByIdReservations$forcePost"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Id of the booking the reservations should be attached to.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/booking/v1/bookings/={{$parameter[\"BookingBookingsByIdReservations$forcePost_id\"]}}/reservations/$force"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingBookingsByIdReservations$forcePost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsByIdReservations$forcePost"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "{\n  \"reservations\": [\n    {\n      \"arrival\": \"2025-08-13\",\n      \"departure\": \"2025-08-15\",\n      \"adults\": 1,\n      \"comment\": \"I need a wake up service\",\n      \"externalCode\": \"812864414|381\",\n      \"channelCode\": \"BookingCom\",\n      \"primaryGuest\": {\n        \"title\": \"Mr\",\n        \"gender\": \"Male\",\n        \"firstName\": \"Jon\",\n        \"middleInitial\": \"D\",\n        \"lastName\": \"Doe\",\n        \"email\": \"john.d@doe.com\",\n        \"phone\": \"+4989123343\",\n        \"address\": {\n          \"addressLine1\": \"My Street 1\",\n          \"postalCode\": \"12453\",\n          \"city\": \"MyCity\",\n          \"countryCode\": \"GB\"\n        },\n        \"vehicleRegistration\": {\n          \"number\": \"APA322\",\n          \"countryCode\": \"DE\"\n        }\n      },\n      \"guaranteeType\": \"Prepayment\",\n      \"timeSlices\": [\n        {\n          \"ratePlanId\": \"MUC-NONREF-DBL\"\n        },\n        {\n          \"ratePlanId\": \"MUC-NONREF-DBL\"\n        }\n      ],\n      \"services\": [\n        {\n          \"serviceId\": \"MUC-BRKF\"\n        },\n        {\n          \"serviceId\": \"MUC-YOGA\",\n          \"dates\": [\n            {\n              \"serviceDate\": \"2025-08-14\",\n              \"amount\": {\n                \"amount\": 35,\n                \"currency\": \"EUR\"\n              }\n            }\n          ]\n        }\n      ],\n      \"companyId\": \"UMBRELLA\",\n      \"corporateCode\": \"UMBRELLA-MUC_NONREF_DBL\"\n    },\n    {\n      \"arrival\": \"2025-08-14\",\n      \"departure\": \"2025-08-16\",\n      \"adults\": 1,\n      \"childrenAges\": [\n        6\n      ],\n      \"channelCode\": \"Direct\",\n      \"primaryGuest\": {\n        \"title\": \"Mr\",\n        \"gender\": \"Male\",\n        \"firstName\": \"Eric\",\n        \"middleInitial\": \"E\",\n        \"lastName\": \"Steinmetz\",\n        \"email\": \"eric.e@steinmetz.com\",\n        \"phone\": \"+4989123343\",\n        \"address\": {\n          \"addressLine1\": \"My Street 1\",\n          \"postalCode\": \"12453\",\n          \"city\": \"MyCity\",\n          \"countryCode\": \"GB\"\n        },\n        \"vehicleRegistration\": {\n          \"number\": \"APA322\",\n          \"countryCode\": \"DE\"\n        }\n      },\n      \"guaranteeType\": \"CreditCard\",\n      \"timeSlices\": [\n        {\n          \"ratePlanId\": \"BER-FLEX-DBL\"\n        },\n        {\n          \"ratePlanId\": \"BER-FLEX-DBL\"\n        }\n      ],\n      \"commission\": {\n        \"commissionAmount\": {\n          \"amount\": 20,\n          \"currency\": \"EUR\"\n        },\n        \"beforeCommissionAmount\": {\n          \"amount\": 100,\n          \"currency\": \"EUR\"\n        }\n      }\n    }\n  ],\n  \"transactionReference\": \"RFEUFHEW\"\n}",
    "description": "The list of reservations you want to add.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/booking/v1/bookings/{id}/reservations/$force",
        "body": "={{JSON.parse($parameter[\"BookingBookingsByIdReservations$forcePost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "BookingBookingsByIdReservations$forcePost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsByIdReservations$forcePost"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingBookingsByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsByIdGet"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Id of the booking to be retrieved.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/bookings/={{$parameter[\"BookingBookingsByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "BookingBookingsByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsByIdGet"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations, propertyValues. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations, propertyValues. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "BookingBookingsByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsByIdPatch"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Id of the booking to be modified.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/booking/v1/bookings/={{$parameter[\"BookingBookingsByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingBookingsByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingBookingsByIdPatch"
        ],
        "resource": [
          "booking"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/booking/v1/bookings/{id}",
        "body": "={{JSON.parse($parameter[\"BookingBookingsByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingGroupsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsPost"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "{\n  \"name\": \"apaleo Summer Festival 2026\",\n  \"booker\": {\n    \"title\": \"Mr\",\n    \"gender\": \"Male\",\n    \"firstName\": \"Jon\",\n    \"middleInitial\": \"D\",\n    \"lastName\": \"Doe\",\n    \"email\": \"john.d@doe.com\",\n    \"phone\": \"+4989123343\",\n    \"address\": {\n      \"addressLine1\": \"My Street 1\",\n      \"postalCode\": \"12453\",\n      \"city\": \"MyCity\",\n      \"countryCode\": \"GB\"\n    }\n  },\n  \"paymentAccount\": {\n    \"accountNumber\": \"1111\",\n    \"accountHolder\": \"John Doe\",\n    \"expiryMonth\": \"8\",\n    \"expiryYear\": \"2018\",\n    \"paymentMethod\": \"visa\",\n    \"payerEmail\": \"s.hopper@test.com\",\n    \"payerReference\": \"4ea6462b-cca3-4c17-a035-c7b5132db83c\",\n    \"isVirtual\": false\n  },\n  \"propertyIds\": [\n    \"MUC\"\n  ]\n}",
    "description": "The details of the group that should be created.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/booking/v1/groups",
        "body": "={{JSON.parse($parameter[\"BookingGroupsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "BookingGroupsPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsPost"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Text Search",
    "name": "BookingGroupsGet_textSearch",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsGet"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "This will filter all group bookings for the provided free text. Currently it only looks up if either the group name, lastname,\r\nfirstname, email or company name of the booker contains one of the provided values",
    "routing": {
      "send": {
        "type": "query",
        "property": "textSearch"
      }
    }
  },
  {
    "displayName": "Property Ids",
    "name": "BookingGroupsGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsGet"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested properties",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested properties"
          }
        ]
      }
    ]
  },
  {
    "displayName": "From",
    "name": "BookingGroupsGet_from",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsGet"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "The start of the time range. All groups that have blocks overlapping with the interval specified by from and to\r\nwill be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "from"
      }
    }
  },
  {
    "displayName": "To",
    "name": "BookingGroupsGet_to",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsGet"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "The end of the time range. All groups that have blocks overlapping with the interval specified by from and to\r\nwill be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "to"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "BookingGroupsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsGet"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "BookingGroupsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsGet"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "BookingGroupsGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsGet"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "BookingGroupsByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsByIdGet"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "Id of the group booking to be retrieved.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/groups/={{$parameter[\"BookingGroupsByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "BookingGroupsByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsByIdGet"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "BookingGroupsByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsByIdPatch"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "Id of the group booking to be modified.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/booking/v1/groups/={{$parameter[\"BookingGroupsByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingGroupsByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsByIdPatch"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/booking/v1/groups/{id}",
        "body": "={{JSON.parse($parameter[\"BookingGroupsByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingGroupsByIdReservationsPost_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsByIdReservationsPost"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "Id of the group booking the reservations should be attached to.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/booking/v1/groups/={{$parameter[\"BookingGroupsByIdReservationsPost_id\"]}}/reservations"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingGroupsByIdReservationsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsByIdReservationsPost"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "{\n  \"reservations\": [\n    {\n      \"blockId\": \"MUC-QJNXJR\",\n      \"arrival\": \"2025-08-13\",\n      \"departure\": \"2025-08-15\",\n      \"adults\": 1,\n      \"comment\": \"I need a wake up service\",\n      \"primaryGuest\": {\n        \"title\": \"Mr\",\n        \"gender\": \"Male\",\n        \"firstName\": \"Jon\",\n        \"middleInitial\": \"D\",\n        \"lastName\": \"Doe\",\n        \"email\": \"john.d@doe.com\",\n        \"phone\": \"+4989123343\",\n        \"address\": {\n          \"addressLine1\": \"My Street 1\",\n          \"postalCode\": \"12453\",\n          \"city\": \"MyCity\",\n          \"countryCode\": \"GB\"\n        },\n        \"company\": {\n          \"name\": \"Company GmbH\",\n          \"taxId\": \"1442\"\n        },\n        \"vehicleRegistration\": {\n          \"number\": \"APA322\",\n          \"countryCode\": \"DE\"\n        }\n      }\n    },\n    {\n      \"blockId\": \"MUC-WKMCKT\",\n      \"arrival\": \"2025-08-14\",\n      \"departure\": \"2025-08-16\",\n      \"adults\": 1,\n      \"childrenAges\": [\n        6\n      ],\n      \"primaryGuest\": {\n        \"title\": \"Mr\",\n        \"gender\": \"Male\",\n        \"firstName\": \"Eric\",\n        \"middleInitial\": \"E\",\n        \"lastName\": \"Steinmetz\",\n        \"email\": \"eric.e@steinmetz.com\",\n        \"phone\": \"+4989123343\",\n        \"address\": {\n          \"addressLine1\": \"My Street 1\",\n          \"postalCode\": \"12453\",\n          \"city\": \"MyCity\",\n          \"countryCode\": \"GB\"\n        },\n        \"vehicleRegistration\": {\n          \"number\": \"APA322\",\n          \"countryCode\": \"DE\"\n        }\n      }\n    }\n  ]\n}",
    "description": "The list of reservations you want to create.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/booking/v1/groups/{id}/reservations",
        "body": "={{JSON.parse($parameter[\"BookingGroupsByIdReservationsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "BookingGroupsByIdReservationsPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingGroupsByIdReservationsPost"
        ],
        "resource": [
          "group"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "BookingOffersGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The property ID",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/offers",
        "qs": {
          "propertyId": "={{$parameter[\"BookingOffersGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Arrival",
    "name": "BookingOffersGet_arrival",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/offers",
        "qs": {
          "arrival": "={{$parameter[\"BookingOffersGet_arrival\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Departure",
    "name": "BookingOffersGet_departure",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/offers",
        "qs": {
          "departure": "={{$parameter[\"BookingOffersGet_departure\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Adults",
    "name": "BookingOffersGet_adults",
    "type": "number",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The number of adults you want offers for",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/offers",
        "qs": {
          "adults": "={{$parameter[\"BookingOffersGet_adults\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Time Slice Template",
    "name": "BookingOffersGet_timeSliceTemplate",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The time slice template used to filter the rate plans, defaults to 'over night'",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceTemplate"
      }
    },
    "options": [
      {
        "name": "DayUse",
        "value": "DayUse"
      },
      {
        "name": "OverNight",
        "value": "OverNight"
      }
    ]
  },
  {
    "displayName": "Time Slice Definition Ids",
    "name": "BookingOffersGet_timeSliceDefinitionIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "Time slice definition IDs, used to filter rate plans",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceDefinitionIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "timeSliceDefinitionIdsValues",
        "displayName": "Time Slice Definition Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Time slice definition IDs, used to filter rate plans"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Ids",
    "name": "BookingOffersGet_unitGroupIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "Unit group IDs, used to filter rate plans",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupIdsValues",
        "displayName": "Unit Group Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Unit group IDs, used to filter rate plans"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Types",
    "name": "BookingOffersGet_unitGroupTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "Unit group types, used to filter rate plans",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupTypesValues",
        "displayName": "Unit Group Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Unit group types, used to filter rate plans"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Channel Code",
    "name": "BookingOffersGet_channelCode",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "Channel code, used to filter the rate plans",
    "routing": {
      "send": {
        "type": "query",
        "property": "channelCode"
      }
    },
    "options": [
      {
        "name": "Direct",
        "value": "Direct"
      },
      {
        "name": "BookingCom",
        "value": "BookingCom"
      },
      {
        "name": "Ibe",
        "value": "Ibe"
      },
      {
        "name": "ChannelManager",
        "value": "ChannelManager"
      },
      {
        "name": "Expedia",
        "value": "Expedia"
      },
      {
        "name": "Homelike",
        "value": "Homelike"
      },
      {
        "name": "Hrs",
        "value": "Hrs"
      },
      {
        "name": "AltoVita",
        "value": "AltoVita"
      },
      {
        "name": "DesVu",
        "value": "DesVu"
      }
    ]
  },
  {
    "displayName": "Promo Code",
    "name": "BookingOffersGet_promoCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The promo code associated with a certain special offer",
    "routing": {
      "send": {
        "type": "query",
        "property": "promoCode"
      }
    }
  },
  {
    "displayName": "Corporate Code",
    "name": "BookingOffersGet_corporateCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The code associated with a corporate rate",
    "routing": {
      "send": {
        "type": "query",
        "property": "corporateCode"
      }
    }
  },
  {
    "displayName": "Children Ages",
    "name": "BookingOffersGet_childrenAges",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The ages of the children you want offers for",
    "routing": {
      "send": {
        "type": "query",
        "property": "childrenAges"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "childrenAgesValues",
        "displayName": "Children Ages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "number",
            "default": "",
            "description": "The ages of the children you want offers for"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Include Unavailable",
    "name": "BookingOffersGet_includeUnavailable",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": false,
    "description": "Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned",
    "routing": {
      "send": {
        "type": "query",
        "property": "includeUnavailable"
      }
    }
  },
  {
    "displayName": "Rate Plan Id",
    "name": "BookingRate-plan-offersGet_ratePlanId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingRate-plan-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The rate plan ID",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/rate-plan-offers",
        "qs": {
          "ratePlanId": "={{$parameter[\"BookingRate-plan-offersGet_ratePlanId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Arrival",
    "name": "BookingRate-plan-offersGet_arrival",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingRate-plan-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/rate-plan-offers",
        "qs": {
          "arrival": "={{$parameter[\"BookingRate-plan-offersGet_arrival\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Departure",
    "name": "BookingRate-plan-offersGet_departure",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingRate-plan-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/rate-plan-offers",
        "qs": {
          "departure": "={{$parameter[\"BookingRate-plan-offersGet_departure\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Adults",
    "name": "BookingRate-plan-offersGet_adults",
    "type": "number",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingRate-plan-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The number of adults you want offers for",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/rate-plan-offers",
        "qs": {
          "adults": "={{$parameter[\"BookingRate-plan-offersGet_adults\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Channel Code",
    "name": "BookingRate-plan-offersGet_channelCode",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingRate-plan-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The channel code",
    "routing": {
      "send": {
        "type": "query",
        "property": "channelCode"
      }
    },
    "options": [
      {
        "name": "Direct",
        "value": "Direct"
      },
      {
        "name": "BookingCom",
        "value": "BookingCom"
      },
      {
        "name": "Ibe",
        "value": "Ibe"
      },
      {
        "name": "ChannelManager",
        "value": "ChannelManager"
      },
      {
        "name": "Expedia",
        "value": "Expedia"
      },
      {
        "name": "Homelike",
        "value": "Homelike"
      },
      {
        "name": "Hrs",
        "value": "Hrs"
      },
      {
        "name": "AltoVita",
        "value": "AltoVita"
      },
      {
        "name": "DesVu",
        "value": "DesVu"
      }
    ]
  },
  {
    "displayName": "Children Ages",
    "name": "BookingRate-plan-offersGet_childrenAges",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingRate-plan-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The ages of the children you want offers for",
    "routing": {
      "send": {
        "type": "query",
        "property": "childrenAges"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "childrenAgesValues",
        "displayName": "Children Ages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "number",
            "default": "",
            "description": "The ages of the children you want offers for"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Include Unavailable",
    "name": "BookingRate-plan-offersGet_includeUnavailable",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingRate-plan-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": false,
    "description": "Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned",
    "routing": {
      "send": {
        "type": "query",
        "property": "includeUnavailable"
      }
    }
  },
  {
    "displayName": "Override Prices",
    "name": "BookingRate-plan-offersGet_overridePrices",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingRate-plan-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "Desired prices for each timeslice",
    "routing": {
      "send": {
        "type": "query",
        "property": "overridePrices"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "overridePricesValues",
        "displayName": "Override Prices",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "number",
            "default": "",
            "description": "Desired prices for each timeslice"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Rate Plan Id",
    "name": "BookingService-offersGet_ratePlanId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingService-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The rate plan ID",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/service-offers",
        "qs": {
          "ratePlanId": "={{$parameter[\"BookingService-offersGet_ratePlanId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Arrival",
    "name": "BookingService-offersGet_arrival",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingService-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/service-offers",
        "qs": {
          "arrival": "={{$parameter[\"BookingService-offersGet_arrival\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Departure",
    "name": "BookingService-offersGet_departure",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingService-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/service-offers",
        "qs": {
          "departure": "={{$parameter[\"BookingService-offersGet_departure\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Adults",
    "name": "BookingService-offersGet_adults",
    "type": "number",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingService-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The number of adults you want offers for",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/service-offers",
        "qs": {
          "adults": "={{$parameter[\"BookingService-offersGet_adults\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Channel Code",
    "name": "BookingService-offersGet_channelCode",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingService-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The channel code used to filter the services",
    "routing": {
      "send": {
        "type": "query",
        "property": "channelCode"
      }
    },
    "options": [
      {
        "name": "Direct",
        "value": "Direct"
      },
      {
        "name": "BookingCom",
        "value": "BookingCom"
      },
      {
        "name": "Ibe",
        "value": "Ibe"
      },
      {
        "name": "ChannelManager",
        "value": "ChannelManager"
      },
      {
        "name": "Expedia",
        "value": "Expedia"
      },
      {
        "name": "Homelike",
        "value": "Homelike"
      },
      {
        "name": "Hrs",
        "value": "Hrs"
      },
      {
        "name": "AltoVita",
        "value": "AltoVita"
      },
      {
        "name": "DesVu",
        "value": "DesVu"
      }
    ]
  },
  {
    "displayName": "Children Ages",
    "name": "BookingService-offersGet_childrenAges",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingService-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The ages of the children you want offers for",
    "routing": {
      "send": {
        "type": "query",
        "property": "childrenAges"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "childrenAgesValues",
        "displayName": "Children Ages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "number",
            "default": "",
            "description": "The ages of the children you want offers for"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Only Default Dates",
    "name": "BookingService-offersGet_onlyDefaultDates",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingService-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": false,
    "description": "Depending on the postNextDay setting of a service it will be posted before or after midnight.\r\nBreakfast is usually delivered on the next morning, having 'postNextDay' set to true. Its 'default dates' are from the day after\r\narrival until the departure day. For services like dinner 'postNextDay' is false, and default dates are day of arrival until one\r\nday before departure.\r\nWith this query parameter set to 'false', you can also ask for dates outside of those default dates. It defaults to true.",
    "routing": {
      "send": {
        "type": "query",
        "property": "onlyDefaultDates"
      }
    }
  },
  {
    "displayName": "Include Unavailable",
    "name": "BookingService-offersGet_includeUnavailable",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingService-offersGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": false,
    "description": "Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned",
    "routing": {
      "send": {
        "type": "query",
        "property": "includeUnavailable"
      }
    }
  },
  {
    "displayName": "Rate Plan Id",
    "name": "BookingOffer-indexGet_ratePlanId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffer-indexGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The ratePlanId parameter",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/offer-index",
        "qs": {
          "ratePlanId": "={{$parameter[\"BookingOffer-indexGet_ratePlanId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "From",
    "name": "BookingOffer-indexGet_from",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffer-indexGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/offer-index",
        "qs": {
          "from": "={{$parameter[\"BookingOffer-indexGet_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "BookingOffer-indexGet_to",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffer-indexGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/offer-index",
        "qs": {
          "to": "={{$parameter[\"BookingOffer-indexGet_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Channel Code",
    "name": "BookingOffer-indexGet_channelCode",
    "type": "options",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffer-indexGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "The channelCode parameter",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/offer-index",
        "qs": {
          "channelCode": "={{$parameter[\"BookingOffer-indexGet_channelCode\"]}}"
        }
      }
    },
    "options": [
      {
        "name": "Direct",
        "value": "Direct"
      },
      {
        "name": "BookingCom",
        "value": "BookingCom"
      },
      {
        "name": "Ibe",
        "value": "Ibe"
      },
      {
        "name": "ChannelManager",
        "value": "ChannelManager"
      },
      {
        "name": "Expedia",
        "value": "Expedia"
      },
      {
        "name": "Homelike",
        "value": "Homelike"
      },
      {
        "name": "Hrs",
        "value": "Hrs"
      },
      {
        "name": "AltoVita",
        "value": "AltoVita"
      },
      {
        "name": "DesVu",
        "value": "DesVu"
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "BookingOffer-indexGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffer-indexGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "BookingOffer-indexGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingOffer-indexGet"
        ],
        "resource": [
          "offer"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Booking Id",
    "name": "BookingReservationsGet_bookingId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by booking id",
    "routing": {
      "send": {
        "type": "query",
        "property": "bookingId"
      }
    }
  },
  {
    "displayName": "Property Ids",
    "name": "BookingReservationsGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested properties",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested properties"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Rate Plan Ids",
    "name": "BookingReservationsGet_ratePlanIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested rate plans",
    "routing": {
      "send": {
        "type": "query",
        "property": "ratePlanIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "ratePlanIdsValues",
        "displayName": "Rate Plan Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested rate plans"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Company Ids",
    "name": "BookingReservationsGet_companyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested companies",
    "routing": {
      "send": {
        "type": "query",
        "property": "companyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "companyIdsValues",
        "displayName": "Company Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested companies"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Ids",
    "name": "BookingReservationsGet_unitIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by assigned units",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitIdsValues",
        "displayName": "Unit Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by assigned units"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Ids",
    "name": "BookingReservationsGet_unitGroupIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested unit groups",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupIdsValues",
        "displayName": "Unit Group Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested unit groups"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Types",
    "name": "BookingReservationsGet_unitGroupTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested unit group types",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupTypesValues",
        "displayName": "Unit Group Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested unit group types"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Block Ids",
    "name": "BookingReservationsGet_blockIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested blocks",
    "routing": {
      "send": {
        "type": "query",
        "property": "blockIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "blockIdsValues",
        "displayName": "Block Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested blocks"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Market Segment Ids",
    "name": "BookingReservationsGet_marketSegmentIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested market segments",
    "routing": {
      "send": {
        "type": "query",
        "property": "marketSegmentIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "marketSegmentIdsValues",
        "displayName": "Market Segment Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested market segments"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Status",
    "name": "BookingReservationsGet_status",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by reservation status",
    "routing": {
      "send": {
        "type": "query",
        "property": "status"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "statusValues",
        "displayName": "Status",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by reservation status"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Date Filter",
    "name": "BookingReservationsGet_dateFilter",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter by date and time attributes of reservation. Use in combination with the 'To' and 'From' attributes.\r\nAll filters will check if the date specified by the filter type is between from (included) and to (excluded).\r\nThe exception being filtering for 'stay', which will return all reservations that are overlapping with the interval specified by from and to.",
    "routing": {
      "send": {
        "type": "query",
        "property": "dateFilter"
      }
    },
    "options": [
      {
        "name": "Arrival",
        "value": "Arrival"
      },
      {
        "name": "Departure",
        "value": "Departure"
      },
      {
        "name": "Stay",
        "value": "Stay"
      },
      {
        "name": "Creation",
        "value": "Creation"
      },
      {
        "name": "Modification",
        "value": "Modification"
      },
      {
        "name": "Cancellation",
        "value": "Cancellation"
      },
      {
        "name": "ArrivalAndCheckIn",
        "value": "ArrivalAndCheckIn"
      },
      {
        "name": "DepartureAndCheckOut",
        "value": "DepartureAndCheckOut"
      }
    ]
  },
  {
    "displayName": "From",
    "name": "BookingReservationsGet_from",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "The start of the time interval. When filtering by date, at least one of 'from' and 'to' has to be specified<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "from"
      }
    }
  },
  {
    "displayName": "To",
    "name": "BookingReservationsGet_to",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "The end of the time interval, must be larger than 'from'. When filtering by date, at least one of 'from' and 'to' has to be specified<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "to"
      }
    }
  },
  {
    "displayName": "Channel Code",
    "name": "BookingReservationsGet_channelCode",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by the channel code",
    "routing": {
      "send": {
        "type": "query",
        "property": "channelCode"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "channelCodeValues",
        "displayName": "Channel Code",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by the channel code"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Sources",
    "name": "BookingReservationsGet_sources",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by source",
    "routing": {
      "send": {
        "type": "query",
        "property": "sources"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "sourcesValues",
        "displayName": "Sources",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by source"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Validation Message Category",
    "name": "BookingReservationsGet_validationMessageCategory",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by validation message category",
    "routing": {
      "send": {
        "type": "query",
        "property": "validationMessageCategory"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "validationMessageCategoryValues",
        "displayName": "Validation Message Category",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by validation message category"
          }
        ]
      }
    ]
  },
  {
    "displayName": "External Code",
    "name": "BookingReservationsGet_externalCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by the external code. The result set will contain all reservations that have an external code starting with the\r\nprovided value",
    "routing": {
      "send": {
        "type": "query",
        "property": "externalCode"
      }
    }
  },
  {
    "displayName": "Text Search",
    "name": "BookingReservationsGet_textSearch",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "This will filter all reservations where the provided text is contained in: booker first name or last name or email or company name,\r\nprimary guest first name or last name or email or company name, external code, reservation id, unit name. The search is case insensitive.",
    "routing": {
      "send": {
        "type": "query",
        "property": "textSearch"
      }
    }
  },
  {
    "displayName": "Balance Filter",
    "name": "BookingReservationsGet_balanceFilter",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7",
    "routing": {
      "send": {
        "type": "query",
        "property": "balanceFilter"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "balanceFilterValues",
        "displayName": "Balance Filter",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7"
          }
        ]
      }
    ]
  },
  {
    "displayName": "All Folios Have Invoice",
    "name": "BookingReservationsGet_allFoliosHaveInvoice",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, returns only reservations, in which all folios are closed and have an invoice.\r\nIf set to `false`, returns only reservations, in which some of the folios are open or don't have an invoice",
    "routing": {
      "send": {
        "type": "query",
        "property": "allFoliosHaveInvoice"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "BookingReservationsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "BookingReservationsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Sort",
    "name": "BookingReservationsGet_sort",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "List of all fields that can be used to sort the results. Possible values are: arrival:asc, arrival:desc, departure:asc, departure:desc, created:asc, created:desc, updated:asc, updated:desc, balance:asc, balance:desc, id:asc, id:desc, firstname:asc, firstname:desc, lastname:asc, lastname:desc, unitname:asc, unitname:desc. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "sort"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "sortValues",
        "displayName": "Sort",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all fields that can be used to sort the results. Possible values are: arrival:asc, arrival:desc, departure:asc, departure:desc, created:asc, created:desc, updated:asc, updated:desc, balance:asc, balance:desc, id:asc, id:desc, firstname:asc, firstname:desc, lastname:asc, lastname:desc, unitname:asc, unitname:desc. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Expand",
    "name": "BookingReservationsGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: booker, actions, timeSlices, services, assignedUnits, company. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: booker, actions, timeSlices, services, assignedUnits, company. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Booking Id",
    "name": "BookingReservations$countGet_bookingId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by booking id",
    "routing": {
      "send": {
        "type": "query",
        "property": "bookingId"
      }
    }
  },
  {
    "displayName": "Property Ids",
    "name": "BookingReservations$countGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested properties",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested properties"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Rate Plan Ids",
    "name": "BookingReservations$countGet_ratePlanIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested rate plans",
    "routing": {
      "send": {
        "type": "query",
        "property": "ratePlanIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "ratePlanIdsValues",
        "displayName": "Rate Plan Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested rate plans"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Company Ids",
    "name": "BookingReservations$countGet_companyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested companies",
    "routing": {
      "send": {
        "type": "query",
        "property": "companyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "companyIdsValues",
        "displayName": "Company Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested companies"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Ids",
    "name": "BookingReservations$countGet_unitIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by assigned units",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitIdsValues",
        "displayName": "Unit Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by assigned units"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Ids",
    "name": "BookingReservations$countGet_unitGroupIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested unit groups",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupIdsValues",
        "displayName": "Unit Group Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested unit groups"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Types",
    "name": "BookingReservations$countGet_unitGroupTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested unit group types",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupTypesValues",
        "displayName": "Unit Group Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested unit group types"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Block Ids",
    "name": "BookingReservations$countGet_blockIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested blocks",
    "routing": {
      "send": {
        "type": "query",
        "property": "blockIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "blockIdsValues",
        "displayName": "Block Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested blocks"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Market Segment Ids",
    "name": "BookingReservations$countGet_marketSegmentIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by requested market segments",
    "routing": {
      "send": {
        "type": "query",
        "property": "marketSegmentIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "marketSegmentIdsValues",
        "displayName": "Market Segment Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by requested market segments"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Status",
    "name": "BookingReservations$countGet_status",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by reservation status",
    "routing": {
      "send": {
        "type": "query",
        "property": "status"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "statusValues",
        "displayName": "Status",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by reservation status"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Date Filter",
    "name": "BookingReservations$countGet_dateFilter",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter by date and time attributes of reservation. Use in combination with the 'To' and 'From' attributes.\r\nAll filters will check if the date specified by the filter type is between from (included) and to (excluded).\r\nThe exception being filtering for 'stay', which will return all reservations that are overlapping with the interval specified by from and to.",
    "routing": {
      "send": {
        "type": "query",
        "property": "dateFilter"
      }
    },
    "options": [
      {
        "name": "Arrival",
        "value": "Arrival"
      },
      {
        "name": "Departure",
        "value": "Departure"
      },
      {
        "name": "Stay",
        "value": "Stay"
      },
      {
        "name": "Creation",
        "value": "Creation"
      },
      {
        "name": "Modification",
        "value": "Modification"
      },
      {
        "name": "Cancellation",
        "value": "Cancellation"
      },
      {
        "name": "ArrivalAndCheckIn",
        "value": "ArrivalAndCheckIn"
      },
      {
        "name": "DepartureAndCheckOut",
        "value": "DepartureAndCheckOut"
      }
    ]
  },
  {
    "displayName": "From",
    "name": "BookingReservations$countGet_from",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "The start of the time interval. When filtering by date, at least one of 'from' and 'to' has to be specified<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "from"
      }
    }
  },
  {
    "displayName": "To",
    "name": "BookingReservations$countGet_to",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "The end of the time interval, must be larger than 'from'. When filtering by date, at least one of 'from' and 'to' has to be specified<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "to"
      }
    }
  },
  {
    "displayName": "Channel Code",
    "name": "BookingReservations$countGet_channelCode",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by the channel code",
    "routing": {
      "send": {
        "type": "query",
        "property": "channelCode"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "channelCodeValues",
        "displayName": "Channel Code",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by the channel code"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Sources",
    "name": "BookingReservations$countGet_sources",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by source",
    "routing": {
      "send": {
        "type": "query",
        "property": "sources"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "sourcesValues",
        "displayName": "Sources",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by source"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Validation Message Category",
    "name": "BookingReservations$countGet_validationMessageCategory",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by validation message category",
    "routing": {
      "send": {
        "type": "query",
        "property": "validationMessageCategory"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "validationMessageCategoryValues",
        "displayName": "Validation Message Category",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by validation message category"
          }
        ]
      }
    ]
  },
  {
    "displayName": "External Code",
    "name": "BookingReservations$countGet_externalCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Filter result by the external code. The result set will contain all reservations that have an external code starting with the\r\nprovided value",
    "routing": {
      "send": {
        "type": "query",
        "property": "externalCode"
      }
    }
  },
  {
    "displayName": "Text Search",
    "name": "BookingReservations$countGet_textSearch",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "This will filter all reservations where the provided text is contained in: booker first name or last name or email or company name,\r\nprimary guest first name or last name or email or company name, external code, reservation id, unit name. The search is case insensitive.",
    "routing": {
      "send": {
        "type": "query",
        "property": "textSearch"
      }
    }
  },
  {
    "displayName": "Balance Filter",
    "name": "BookingReservations$countGet_balanceFilter",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7",
    "routing": {
      "send": {
        "type": "query",
        "property": "balanceFilter"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "balanceFilterValues",
        "displayName": "Balance Filter",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7"
          }
        ]
      }
    ]
  },
  {
    "displayName": "All Folios Have Invoice",
    "name": "BookingReservations$countGet_allFoliosHaveInvoice",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservations$countGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, returns only reservations, in which all folios are closed and have an invoice.\r\nIf set to `false`, returns only reservations, in which some of the folios are open or don't have an invoice",
    "routing": {
      "send": {
        "type": "query",
        "property": "allFoliosHaveInvoice"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservationsByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation to be retrieved.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/reservations/={{$parameter[\"BookingReservationsByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "BookingReservationsByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: timeSlices, services, booker, actions, company, assignedUnits. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: timeSlices, services, booker, actions, company, assignedUnits. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "BookingReservationsByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdPatch"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation to be modified.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/booking/v1/reservations/={{$parameter[\"BookingReservationsByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingReservationsByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdPatch"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/booking/v1/reservations/{id}",
        "body": "={{JSON.parse($parameter[\"BookingReservationsByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservationsByIdOffersGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdOffersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation to be amended.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/reservations/={{$parameter[\"BookingReservationsByIdOffersGet_id\"]}}/offers"
      }
    }
  },
  {
    "displayName": "Arrival",
    "name": "BookingReservationsByIdOffersGet_arrival",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdOffersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "arrival"
      }
    }
  },
  {
    "displayName": "Departure",
    "name": "BookingReservationsByIdOffersGet_departure",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdOffersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "departure"
      }
    }
  },
  {
    "displayName": "Adults",
    "name": "BookingReservationsByIdOffersGet_adults",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdOffersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Number of adults",
    "routing": {
      "send": {
        "type": "query",
        "property": "adults"
      }
    }
  },
  {
    "displayName": "Children Ages",
    "name": "BookingReservationsByIdOffersGet_childrenAges",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdOffersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Ages of children",
    "routing": {
      "send": {
        "type": "query",
        "property": "childrenAges"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "childrenAgesValues",
        "displayName": "Children Ages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "number",
            "default": "",
            "description": "Ages of children"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Channel Code",
    "name": "BookingReservationsByIdOffersGet_channelCode",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdOffersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "The channel code used to filter the rate plans",
    "routing": {
      "send": {
        "type": "query",
        "property": "channelCode"
      }
    },
    "options": [
      {
        "name": "Direct",
        "value": "Direct"
      },
      {
        "name": "BookingCom",
        "value": "BookingCom"
      },
      {
        "name": "Ibe",
        "value": "Ibe"
      },
      {
        "name": "ChannelManager",
        "value": "ChannelManager"
      },
      {
        "name": "Expedia",
        "value": "Expedia"
      },
      {
        "name": "Homelike",
        "value": "Homelike"
      },
      {
        "name": "Hrs",
        "value": "Hrs"
      },
      {
        "name": "AltoVita",
        "value": "AltoVita"
      },
      {
        "name": "DesVu",
        "value": "DesVu"
      }
    ]
  },
  {
    "displayName": "Promo Code",
    "name": "BookingReservationsByIdOffersGet_promoCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdOffersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "The promo code associated with a certain special offer, like corporate rate",
    "routing": {
      "send": {
        "type": "query",
        "property": "promoCode"
      }
    }
  },
  {
    "displayName": "Requote",
    "name": "BookingReservationsByIdOffersGet_requote",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdOffersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": false,
    "description": "Whether the offers should be re-quoted based on current prices, or only additions like change of number of adults should be calculated.\r\nDefaults to 'false'",
    "routing": {
      "send": {
        "type": "query",
        "property": "requote"
      }
    }
  },
  {
    "displayName": "Include Unavailable",
    "name": "BookingReservationsByIdOffersGet_includeUnavailable",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdOffersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": false,
    "description": "Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned",
    "routing": {
      "send": {
        "type": "query",
        "property": "includeUnavailable"
      }
    }
  },
  {
    "displayName": "Unit Group Ids",
    "name": "BookingReservationsByIdOffersGet_unitGroupIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdOffersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "The list of unit groups used to filter the offers.",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupIdsValues",
        "displayName": "Unit Group Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The list of unit groups used to filter the offers."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "BookingReservationsByIdService-offersGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdService-offersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/reservations/={{$parameter[\"BookingReservationsByIdService-offersGet_id\"]}}/service-offers"
      }
    }
  },
  {
    "displayName": "Channel Code",
    "name": "BookingReservationsByIdService-offersGet_channelCode",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdService-offersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "The channel code used to filter the services",
    "routing": {
      "send": {
        "type": "query",
        "property": "channelCode"
      }
    },
    "options": [
      {
        "name": "Direct",
        "value": "Direct"
      },
      {
        "name": "BookingCom",
        "value": "BookingCom"
      },
      {
        "name": "Ibe",
        "value": "Ibe"
      },
      {
        "name": "ChannelManager",
        "value": "ChannelManager"
      },
      {
        "name": "Expedia",
        "value": "Expedia"
      },
      {
        "name": "Homelike",
        "value": "Homelike"
      },
      {
        "name": "Hrs",
        "value": "Hrs"
      },
      {
        "name": "AltoVita",
        "value": "AltoVita"
      },
      {
        "name": "DesVu",
        "value": "DesVu"
      }
    ]
  },
  {
    "displayName": "Only Default Dates",
    "name": "BookingReservationsByIdService-offersGet_onlyDefaultDates",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdService-offersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": false,
    "description": "Depending on the postNextDay setting of a service it will by default be posted before or after midnight.\r\nBreakfast is usually delivered on the next morning, so all the dates from the day after arrival to the departure day\r\nare default dates and will have this flag set to true. For services like a dinner it is the other way around.\r\nWith this query parameter, you can also ask for the dates, that usually the service will not be booked. It defaults to true.",
    "routing": {
      "send": {
        "type": "query",
        "property": "onlyDefaultDates"
      }
    }
  },
  {
    "displayName": "Include Unavailable",
    "name": "BookingReservationsByIdService-offersGet_includeUnavailable",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdService-offersGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": false,
    "description": "Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned",
    "routing": {
      "send": {
        "type": "query",
        "property": "includeUnavailable"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservationsByIdServicesGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdServicesGet"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/reservations/={{$parameter[\"BookingReservationsByIdServicesGet_id\"]}}/services"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservationsByIdServicesDelete_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdServicesDelete"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation.",
    "routing": {
      "request": {
        "method": "DELETE",
        "url": "/booking/v1/reservations/={{$parameter[\"BookingReservationsByIdServicesDelete_id\"]}}/services"
      }
    }
  },
  {
    "displayName": "Service Id",
    "name": "BookingReservationsByIdServicesDelete_serviceId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservationsByIdServicesDelete"
        ],
        "resource": [
          "reservation"
        ]
      }
    },
    "default": "",
    "description": "The id of the service to delete",
    "routing": {
      "request": {
        "method": "DELETE",
        "url": "/booking/v1/reservations/{id}/services",
        "qs": {
          "serviceId": "={{$parameter[\"BookingReservationsByIdServicesDelete_serviceId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdAssign-unitPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdAssign-unitPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation a unit should be assigned to.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdAssign-unitPut_id\"]}}/assign-unit"
      }
    }
  },
  {
    "displayName": "Unit Conditions",
    "name": "BookingReservation-actionsByIdAssign-unitPut_unitConditions",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdAssign-unitPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "The optional unit conditions for unit that you want to auto assign for.",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitConditions"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitConditionsValues",
        "displayName": "Unit Conditions",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The optional unit conditions for unit that you want to auto assign for."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdAssign-unitByUnitIdPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdAssign-unitByUnitIdPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation the unit should be assigned to.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdAssign-unitByUnitIdPut_id\"]}}/assign-unit/{unitId}"
      }
    }
  },
  {
    "displayName": "Unit Id",
    "name": "BookingReservation-actionsByIdAssign-unitByUnitIdPut_unitId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdAssign-unitByUnitIdPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "The id of the unit to be assigned.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/{id}/assign-unit/={{$parameter[\"BookingReservation-actionsByIdAssign-unitByUnitIdPut_unitId\"]}}"
      }
    }
  },
  {
    "displayName": "From",
    "name": "BookingReservation-actionsByIdAssign-unitByUnitIdPut_from",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdAssign-unitByUnitIdPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "The start date and optional time for the unit assignment. If not specified, the reservation's arrival will be used.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "from"
      }
    }
  },
  {
    "displayName": "To",
    "name": "BookingReservation-actionsByIdAssign-unitByUnitIdPut_to",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdAssign-unitByUnitIdPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "The end date and optional time for the unit assignment. If not specified, the reservation's departure will be used.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "to"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdUnassign-unitsPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdUnassign-unitsPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation the unit should be unassigned for.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdUnassign-unitsPut_id\"]}}/unassign-units"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdCheckinPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdCheckinPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation that should be processed.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdCheckinPut_id\"]}}/checkin"
      }
    }
  },
  {
    "displayName": "With City Tax",
    "name": "BookingReservation-actionsByIdCheckinPut_withCityTax",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdCheckinPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": false,
    "description": "Define if city tax should be added for this reservation or not. The default is \"true\".",
    "routing": {
      "send": {
        "type": "query",
        "property": "withCityTax"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdRevert-checkinPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdRevert-checkinPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "The ID of the reservation to reverse the check-in for.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdRevert-checkinPut_id\"]}}/revert-checkin"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdCheckoutPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdCheckoutPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation that should be processed.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdCheckoutPut_id\"]}}/checkout"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdCancelPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdCancelPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation that should be processed.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdCancelPut_id\"]}}/cancel"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdNoshowPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdNoshowPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation that should be processed.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdNoshowPut_id\"]}}/noshow"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdAmendPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdAmendPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation that should be modified",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdAmendPut_id\"]}}/amend"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingReservation-actionsByIdAmendPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdAmendPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "{\n  \"arrival\": \"2025-08-13T17:00:00+02:00\",\n  \"departure\": \"2025-08-15T11:00:00+02:00\",\n  \"adults\": 1,\n  \"childrenAges\": [\n    6\n  ],\n  \"requote\": false,\n  \"timeSlices\": [\n    {\n      \"ratePlanId\": \"MUC-NONREF-DBL\",\n      \"totalGrossAmount\": {\n        \"amount\": 86,\n        \"currency\": \"EUR\"\n      }\n    },\n    {\n      \"ratePlanId\": \"MUC-NONREF-DBL\",\n      \"totalGrossAmount\": {\n        \"amount\": 101,\n        \"currency\": \"EUR\"\n      }\n    }\n  ]\n}",
    "description": "The new stay details that should be applied to the reservation.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/{id}/amend",
        "body": "={{JSON.parse($parameter[\"BookingReservation-actionsByIdAmendPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdAmend$forcePut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdAmend$forcePut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation that should be modified",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdAmend$forcePut_id\"]}}/amend/$force"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingReservation-actionsByIdAmend$forcePut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdAmend$forcePut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "{\n  \"arrival\": \"2025-08-13T17:00:00+02:00\",\n  \"departure\": \"2025-08-15T11:00:00+02:00\",\n  \"adults\": 1,\n  \"childrenAges\": [\n    6\n  ],\n  \"requote\": false,\n  \"timeSlices\": [\n    {\n      \"ratePlanId\": \"MUC-NONREF-DBL\",\n      \"totalGrossAmount\": {\n        \"amount\": 86,\n        \"currency\": \"EUR\"\n      }\n    },\n    {\n      \"ratePlanId\": \"MUC-NONREF-DBL\",\n      \"totalGrossAmount\": {\n        \"amount\": 101,\n        \"currency\": \"EUR\"\n      }\n    }\n  ]\n}",
    "description": "The new stay details that should be applied to the reservation.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/{id}/amend/$force",
        "body": "={{JSON.parse($parameter[\"BookingReservation-actionsByIdAmend$forcePut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdBook-servicePut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdBook-servicePut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdBook-servicePut_id\"]}}/book-service"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingReservation-actionsByIdBook-servicePut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdBook-servicePut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "{\n  \"serviceId\": \"MUC-SPA\",\n  \"dates\": [\n    {\n      \"serviceDate\": \"2025-08-11\",\n      \"amount\": {\n        \"amount\": 25,\n        \"currency\": \"EUR\"\n      }\n    },\n    {\n      \"serviceDate\": \"2025-08-12\"\n    }\n  ]\n}",
    "description": "Request body (JSON format). See API documentation for the expected schema.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/{id}/book-service",
        "body": "={{JSON.parse($parameter[\"BookingReservation-actionsByIdBook-servicePut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdBook-service$forcePut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdBook-service$forcePut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdBook-service$forcePut_id\"]}}/book-service/$force"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "BookingReservation-actionsByIdBook-service$forcePut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdBook-service$forcePut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "{\n  \"serviceId\": \"MUC-SPA\",\n  \"dates\": [\n    {\n      \"serviceDate\": \"2025-08-11\",\n      \"amount\": {\n        \"amount\": 25,\n        \"currency\": \"EUR\"\n      }\n    },\n    {\n      \"serviceDate\": \"2025-08-12\"\n    }\n  ]\n}",
    "description": "Request body (JSON format). See API documentation for the expected schema.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/{id}/book-service/$force",
        "body": "={{JSON.parse($parameter[\"BookingReservation-actionsByIdBook-service$forcePut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdRemove-city-taxPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdRemove-city-taxPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdRemove-city-taxPut_id\"]}}/remove-city-tax"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "BookingReservation-actionsByIdAdd-city-taxPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingReservation-actionsByIdAdd-city-taxPut"
        ],
        "resource": [
          "reservationactions"
        ]
      }
    },
    "default": "",
    "description": "Id of the reservation.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/booking/v1/reservation-actions/={{$parameter[\"BookingReservation-actionsByIdAdd-city-taxPut_id\"]}}/add-city-tax"
      }
    }
  },
  {
    "displayName": "Type",
    "name": "BookingTypesByTypeAllowed-valuesGet_type",
    "type": "options",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingTypesByTypeAllowed-valuesGet"
        ],
        "resource": [
          "types"
        ]
      }
    },
    "default": "",
    "description": "The type to provide allowed values for",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/types/={{$parameter[\"BookingTypesByTypeAllowed-valuesGet_type\"]}}/allowed-values"
      }
    },
    "options": [
      {
        "name": "Gender",
        "value": "Gender"
      },
      {
        "name": "IdentificationType",
        "value": "IdentificationType"
      }
    ]
  },
  {
    "displayName": "Country Code",
    "name": "BookingTypesByTypeAllowed-valuesGet_countryCode",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingTypesByTypeAllowed-valuesGet"
        ],
        "resource": [
          "types"
        ]
      }
    },
    "default": "",
    "description": "The code of the country in which the property is located in ISO 3166-1 alpha-2 format.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/booking/v1/types/{type}/allowed-values",
        "qs": {
          "countryCode": "={{$parameter[\"BookingTypesByTypeAllowed-valuesGet_countryCode\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Text Search",
    "name": "BookingTypesByTypeAllowed-valuesGet_textSearch",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingTypesByTypeAllowed-valuesGet"
        ],
        "resource": [
          "types"
        ]
      }
    },
    "default": "",
    "description": "Filter the result by the provided free text.\r\nIf specified, only values that contain one of the provided values will be returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "textSearch"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "BookingTypesByTypeAllowed-valuesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingTypesByTypeAllowed-valuesGet"
        ],
        "resource": [
          "types"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "BookingTypesByTypeAllowed-valuesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingTypesByTypeAllowed-valuesGet"
        ],
        "resource": [
          "types"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Sort",
    "name": "BookingTypesByTypeAllowed-valuesGet_sort",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "BookingTypesByTypeAllowed-valuesGet"
        ],
        "resource": [
          "types"
        ]
      }
    },
    "default": "",
    "description": "List of all fields that can be used to sort the results. Possible values are: value:asc, value:desc. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "sort"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "sortValues",
        "displayName": "Sort",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all fields that can be used to sort the results. Possible values are: value:asc, value:desc. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Ids",
    "name": "FinanceFoliosGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Filter folio list by property IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter folio list by property IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Company Ids",
    "name": "FinanceFoliosGet_companyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Filter folio list by company IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "companyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "companyIdsValues",
        "displayName": "Company Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter folio list by company IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Reservation Ids",
    "name": "FinanceFoliosGet_reservationIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Filter folio list by reservation IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "reservationIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "reservationIdsValues",
        "displayName": "Reservation Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter folio list by reservation IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Booking Ids",
    "name": "FinanceFoliosGet_bookingIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Filter folio list by booking IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "bookingIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "bookingIdsValues",
        "displayName": "Booking Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter folio list by booking IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Is Empty",
    "name": "FinanceFoliosGet_isEmpty",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, only return empty folios (no unmoved [transitory] charges, no unmoved payments, no allowances).\r\nIf set to `false`, only return non-empty folios",
    "routing": {
      "send": {
        "type": "query",
        "property": "isEmpty"
      }
    }
  },
  {
    "displayName": "Checked Out On Accounts Receivable",
    "name": "FinanceFoliosGet_checkedOutOnAccountsReceivable",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, only return folios that have been checked out on accounts receivables\r\nOtherwise, returns all.",
    "routing": {
      "send": {
        "type": "query",
        "property": "checkedOutOnAccountsReceivable"
      }
    }
  },
  {
    "displayName": "Exclude Closed",
    "name": "FinanceFoliosGet_excludeClosed",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, closed folios are filtered out from the result collection - <b>DEPRECATED: This field will be removed soon. Please use Status=Open instead.</b>",
    "routing": {
      "send": {
        "type": "query",
        "property": "excludeClosed"
      }
    }
  },
  {
    "displayName": "Has Invoices",
    "name": "FinanceFoliosGet_hasInvoices",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, only return folios that been invoices",
    "routing": {
      "send": {
        "type": "query",
        "property": "hasInvoices"
      }
    }
  },
  {
    "displayName": "Created From",
    "name": "FinanceFoliosGet_createdFrom",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start time of the date of creation. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "createdFrom"
      }
    }
  },
  {
    "displayName": "Created To",
    "name": "FinanceFoliosGet_createdTo",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The exclusive end time of the date of creation. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "createdTo"
      }
    }
  },
  {
    "displayName": "Updated From",
    "name": "FinanceFoliosGet_updatedFrom",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start time of the date of the last update. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "updatedFrom"
      }
    }
  },
  {
    "displayName": "Updated To",
    "name": "FinanceFoliosGet_updatedTo",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The exclusive end time of the date of the last update. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "updatedTo"
      }
    }
  },
  {
    "displayName": "Only Main",
    "name": "FinanceFoliosGet_onlyMain",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, only main folios are returned, otherwise all.",
    "routing": {
      "send": {
        "type": "query",
        "property": "onlyMain"
      }
    }
  },
  {
    "displayName": "Type",
    "name": "FinanceFoliosGet_type",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The type of the folio",
    "routing": {
      "send": {
        "type": "query",
        "property": "type"
      }
    },
    "options": [
      {
        "name": "House",
        "value": "House"
      },
      {
        "name": "Guest",
        "value": "Guest"
      },
      {
        "name": "External",
        "value": "External"
      },
      {
        "name": "Booking",
        "value": "Booking"
      }
    ]
  },
  {
    "displayName": "Status",
    "name": "FinanceFoliosGet_status",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The status of the folio",
    "routing": {
      "send": {
        "type": "query",
        "property": "status"
      }
    },
    "options": [
      {
        "name": "Open",
        "value": "Open"
      },
      {
        "name": "Closed",
        "value": "Closed"
      }
    ]
  },
  {
    "displayName": "External Folio Code",
    "name": "FinanceFoliosGet_externalFolioCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Allows filtering external folios by code.\r\nUseful when you use external folios with custom codes.\r\nSpecifying this parameter will ignore the <b>Type</b> parameter and treat as if it would be set to \"External\" instead.",
    "routing": {
      "send": {
        "type": "query",
        "property": "externalFolioCode"
      }
    }
  },
  {
    "displayName": "Text Search",
    "name": "FinanceFoliosGet_textSearch",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "This will filter all folios where the provided text is contained in: debitor first name or last name or company name,\r\nfolio id. The search is case insensitive.",
    "routing": {
      "send": {
        "type": "query",
        "property": "textSearch"
      }
    }
  },
  {
    "displayName": "Balance Filter",
    "name": "FinanceFoliosGet_balanceFilter",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7",
    "routing": {
      "send": {
        "type": "query",
        "property": "balanceFilter"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "balanceFilterValues",
        "displayName": "Balance Filter",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "FinanceFoliosGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "FinanceFoliosGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "FinanceFoliosGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: allowances, allowedActions, transitoryCharges, charges, company, payments, warnings. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: allowances, allowedActions, transitoryCharges, charges, company, payments, warnings. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "FinanceFoliosPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosPost"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "{\n  \"reservationId\": \"TS23XF\",\n  \"debitor\": {\n    \"title\": \"Dr\",\n    \"firstName\": \"Jon\",\n    \"name\": \"Doe\",\n    \"address\": {\n      \"addressLine1\": \"My Street 1\",\n      \"postalCode\": \"12453\",\n      \"city\": \"MyCity\",\n      \"countryCode\": \"GB\"\n    },\n    \"company\": {\n      \"name\": \"Horns & Hooves Inc\",\n      \"taxId\": \"TAX-12345\",\n      \"additionalTaxId\": \"TAX2-12345\",\n      \"additionalTaxId2\": \"TAX3-12345\"\n    },\n    \"personalTaxId\": \"123456789\",\n    \"reference\": \"SRC-1232\",\n    \"phone\": \"123456789\"\n  },\n  \"type\": \"Guest\"\n}",
    "description": "The definition of the folio.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios",
        "body": "={{JSON.parse($parameter[\"FinanceFoliosPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFoliosPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosPost"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Ids",
    "name": "FinanceFolios$countGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Filter folio list by property IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter folio list by property IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Company Ids",
    "name": "FinanceFolios$countGet_companyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Filter folio list by company IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "companyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "companyIdsValues",
        "displayName": "Company Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter folio list by company IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Reservation Ids",
    "name": "FinanceFolios$countGet_reservationIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Filter folio list by reservation IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "reservationIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "reservationIdsValues",
        "displayName": "Reservation Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter folio list by reservation IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Booking Ids",
    "name": "FinanceFolios$countGet_bookingIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Filter folio list by booking IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "bookingIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "bookingIdsValues",
        "displayName": "Booking Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter folio list by booking IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Is Empty",
    "name": "FinanceFolios$countGet_isEmpty",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, only return empty folios (no unmoved [transitory] charges, no unmoved payments, no allowances).\r\nIf set to `false`, only return non-empty folios",
    "routing": {
      "send": {
        "type": "query",
        "property": "isEmpty"
      }
    }
  },
  {
    "displayName": "Checked Out On Accounts Receivable",
    "name": "FinanceFolios$countGet_checkedOutOnAccountsReceivable",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, only return folios that have been checked out on accounts receivables\r\nOtherwise, returns all.",
    "routing": {
      "send": {
        "type": "query",
        "property": "checkedOutOnAccountsReceivable"
      }
    }
  },
  {
    "displayName": "Exclude Closed",
    "name": "FinanceFolios$countGet_excludeClosed",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, closed folios are filtered out from the result collection - <b>DEPRECATED: This field will be removed soon. Please use Status=Open instead.</b>",
    "routing": {
      "send": {
        "type": "query",
        "property": "excludeClosed"
      }
    }
  },
  {
    "displayName": "Has Invoices",
    "name": "FinanceFolios$countGet_hasInvoices",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, only return folios that been invoices",
    "routing": {
      "send": {
        "type": "query",
        "property": "hasInvoices"
      }
    }
  },
  {
    "displayName": "Created From",
    "name": "FinanceFolios$countGet_createdFrom",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start time of the date of creation. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "createdFrom"
      }
    }
  },
  {
    "displayName": "Created To",
    "name": "FinanceFolios$countGet_createdTo",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The exclusive end time of the date of creation. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "createdTo"
      }
    }
  },
  {
    "displayName": "Updated From",
    "name": "FinanceFolios$countGet_updatedFrom",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start time of the date of the last update. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "updatedFrom"
      }
    }
  },
  {
    "displayName": "Updated To",
    "name": "FinanceFolios$countGet_updatedTo",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The exclusive end time of the date of the last update. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "updatedTo"
      }
    }
  },
  {
    "displayName": "Only Main",
    "name": "FinanceFolios$countGet_onlyMain",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, only main folios are returned, otherwise all.",
    "routing": {
      "send": {
        "type": "query",
        "property": "onlyMain"
      }
    }
  },
  {
    "displayName": "Type",
    "name": "FinanceFolios$countGet_type",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The type of the folio",
    "routing": {
      "send": {
        "type": "query",
        "property": "type"
      }
    },
    "options": [
      {
        "name": "House",
        "value": "House"
      },
      {
        "name": "Guest",
        "value": "Guest"
      },
      {
        "name": "External",
        "value": "External"
      },
      {
        "name": "Booking",
        "value": "Booking"
      }
    ]
  },
  {
    "displayName": "Status",
    "name": "FinanceFolios$countGet_status",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The status of the folio",
    "routing": {
      "send": {
        "type": "query",
        "property": "status"
      }
    },
    "options": [
      {
        "name": "Open",
        "value": "Open"
      },
      {
        "name": "Closed",
        "value": "Closed"
      }
    ]
  },
  {
    "displayName": "External Folio Code",
    "name": "FinanceFolios$countGet_externalFolioCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Allows filtering external folios by code.\r\nUseful when you use external folios with custom codes.\r\nSpecifying this parameter will ignore the <b>Type</b> parameter and treat as if it would be set to \"External\" instead.",
    "routing": {
      "send": {
        "type": "query",
        "property": "externalFolioCode"
      }
    }
  },
  {
    "displayName": "Text Search",
    "name": "FinanceFolios$countGet_textSearch",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "This will filter all folios where the provided text is contained in: debitor first name or last name or company name,\r\nfolio id. The search is case insensitive.",
    "routing": {
      "send": {
        "type": "query",
        "property": "textSearch"
      }
    }
  },
  {
    "displayName": "Balance Filter",
    "name": "FinanceFolios$countGet_balanceFilter",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolios$countGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7",
    "routing": {
      "send": {
        "type": "query",
        "property": "balanceFilter"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "balanceFilterValues",
        "displayName": "Balance Filter",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "FinanceFoliosByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByIdGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The ID of the folio.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "FinanceFoliosByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByIdGet"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: folios. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: folios. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "FinanceFoliosByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByIdPatch"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The folio ID.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFoliosByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByIdPatch"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.\r\n            See the FolioDebitorModel in GET for values that can be changed.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/finance/v1/folios/{id}",
        "body": "={{JSON.parse($parameter[\"FinanceFoliosByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "FinanceFoliosByIdHead_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByIdHead"
        ],
        "resource": [
          "folio"
        ]
      }
    },
    "default": "",
    "description": "The id parameter",
    "routing": {
      "request": {
        "method": "HEAD",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByIdHead_id\"]}}"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdChargesPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdChargesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The folio ID",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdChargesPost_folioId\"]}}/charges"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdChargesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdChargesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "{\n  \"serviceType\": \"FoodAndBeverages\",\n  \"vatType\": \"Normal\",\n  \"subAccountId\": \"MUC-BEER\",\n  \"name\": \"Restaurant\",\n  \"amount\": {\n    \"amount\": 23,\n    \"currency\": \"EUR\"\n  },\n  \"receipt\": \"R23412\"\n}",
    "description": "The charge to be added",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/charges",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdChargesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFolio-actionsByFolioIdChargesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdChargesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdTransitory-chargesPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdTransitory-chargesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The folio ID",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdTransitory-chargesPost_folioId\"]}}/transitory-charges"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdTransitory-chargesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdTransitory-chargesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "{\n  \"name\": \"Restaurant\",\n  \"amount\": {\n    \"amount\": 23,\n    \"currency\": \"EUR\"\n  },\n  \"receipt\": \"R23412\"\n}",
    "description": "The transitory charge to be added",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/transitory-charges",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdTransitory-chargesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFolio-actionsByFolioIdTransitory-chargesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdTransitory-chargesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdCancellation-feePost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdCancellation-feePost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The folio ID",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdCancellation-feePost_folioId\"]}}/cancellation-fee"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdCancellation-feePost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdCancellation-feePost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The cancellation fee to be added",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/cancellation-fee",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdCancellation-feePost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFolio-actionsByFolioIdCancellation-feePost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdCancellation-feePost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdNo-show-feePost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdNo-show-feePost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The folio ID",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdNo-show-feePost_folioId\"]}}/no-show-fee"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdNo-show-feePost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdNo-show-feePost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The no-show fee to be added",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/no-show-fee",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdNo-show-feePost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFolio-actionsByFolioIdNo-show-feePost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdNo-show-feePost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdClosePut_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdClosePut"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The folio ID.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdClosePut_folioId\"]}}/close"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdReopenPut_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdReopenPut"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The folio ID.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdReopenPut_folioId\"]}}/reopen"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdMove-chargesPut_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdMove-chargesPut"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The ID of the source folio from where the charges should be moved away.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdMove-chargesPut_folioId\"]}}/move-charges"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdMove-chargesPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdMove-chargesPut"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "{\n  \"targetFolioId\": \"KFCSQUID-1\",\n  \"reason\": \"Test\",\n  \"chargeIds\": [\n    \"KFCSQUID-1-C-1\",\n    \"KFCSQUID-1-C-5\"\n  ],\n  \"allowanceIds\": [\n    \"KFCSQUID-1-A-1\",\n    \"KFCSQUID-1-A-2\"\n  ],\n  \"transitoryChargeIds\": [\n    \"KFCSQUID-1-TC-1\",\n    \"KFCSQUID-1-TC-2\"\n  ]\n}",
    "description": "See class.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/folio-actions/{folioId}/move-charges",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdMove-chargesPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsBulk-movePut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsBulk-movePut"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "{\n  \"items\": [\n    {\n      \"sourceFolioId\": \"SPRJDQNU-1\",\n      \"targetFolioId\": \"KFCSQUID-1\",\n      \"chargeIds\": [\n        \"SPRJDQNU-1-C-1\",\n        \"SPRJDQNU-1-C-5\"\n      ]\n    },\n    {\n      \"sourceFolioId\": \"TTDKOWNC-1\",\n      \"targetFolioId\": \"YXPZMQAS-1\",\n      \"chargeIds\": [\n        \"TTDKOWNC-1-C-2\",\n        \"TTDKOWNC-1-C-3\"\n      ]\n    }\n  ],\n  \"reason\": \"Test\"\n}",
    "description": "See class.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/folio-actions/bulk-move",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsBulk-movePut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdMove-all-chargesPut_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdMove-all-chargesPut"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The ID of the source folio from where the charges should be moved away.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdMove-all-chargesPut_folioId\"]}}/move-all-charges"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdMove-all-chargesPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdMove-all-chargesPut"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "{\n  \"targetFolioId\": \"KFCSQUID-1\",\n  \"reason\": \"Test\"\n}",
    "description": "See class.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/folio-actions/{folioId}/move-all-charges",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdMove-all-chargesPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The folio ID",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_folioId\"]}}/charges/{chargeId}/allowances"
      }
    }
  },
  {
    "displayName": "Charge Id",
    "name": "FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_chargeId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The ID of the charge allowance posted for",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/charges/={{$parameter[\"FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_chargeId\"]}}/allowances"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "{\n  \"reason\": \"Reason\",\n  \"amount\": {\n    \"amount\": 1,\n    \"currency\": \"EUR\"\n  }\n}",
    "description": "Allowance data",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/charges/{chargeId}/allowances",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdAllowancesPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdAllowancesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The folio ID",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdAllowancesPost_folioId\"]}}/allowances"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdAllowancesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdAllowancesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "{\n  \"serviceType\": \"Other\",\n  \"vatType\": \"Normal\",\n  \"subAccountId\": \"MUC-REST\",\n  \"reason\": \"Good guy discount\",\n  \"amount\": {\n    \"amount\": 22,\n    \"currency\": \"EUR\"\n  }\n}",
    "description": "Allowance amount and post reason",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/allowances",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdAllowancesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFolio-actionsByFolioIdAllowancesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdAllowancesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdBulk-allowancesPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdBulk-allowancesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The ID of the folio.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdBulk-allowancesPost_folioId\"]}}/bulk-allowances"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdBulk-allowancesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdBulk-allowancesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "{\n  \"items\": [\n    {\n      \"chargeId\": \"IDDQD-1-1-TS-1\",\n      \"amount\": {\n        \"amount\": 13,\n        \"currency\": \"EUR\"\n      }\n    },\n    {\n      \"chargeId\": \"IDDQD-1-1-ES-2\",\n      \"amount\": {\n        \"amount\": 37,\n        \"currency\": \"EUR\"\n      }\n    }\n  ],\n  \"reason\": \"discount\"\n}",
    "description": "Allowance amount and post reason",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/bulk-allowances",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdBulk-allowancesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFolio-actionsByFolioIdBulk-allowancesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdBulk-allowancesPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdPost-chargesPut_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdPost-chargesPut"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The folio ID",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdPost-chargesPut_folioId\"]}}/post-charges"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdMove-paymentsPut_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdMove-paymentsPut"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The ID of the source folio from where the payments should be moved away.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdMove-paymentsPut_folioId\"]}}/move-payments"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdMove-paymentsPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdMove-paymentsPut"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "{\n  \"targetFolioId\": \"KFCSQUID-1\",\n  \"reason\": \"Test\",\n  \"paymentIds\": [\n    \"KFCSQUID-1-C-1\",\n    \"KFCSQUID-1-C-5\"\n  ]\n}",
    "description": "See class.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/folio-actions/{folioId}/move-payments",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdMove-paymentsPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdCorrectPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdCorrectPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The folio ID",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdCorrectPost_folioId\"]}}/correct"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdCorrectPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdCorrectPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "{\n  \"reason\": \"Minibar is not paid by the company\",\n  \"chargeIds\": [\n    \"IDDQD-1-C-1\",\n    \"IDDQD-1-C-5\"\n  ],\n  \"allowanceIds\": [\n    \"IDDQD-1-A-1\",\n    \"IDDQD-1-A-5\"\n  ],\n  \"transitoryChargeIds\": [\n    \"IDDQD-1-TC-1\",\n    \"IDDQD-1-TC-5\"\n  ]\n}",
    "description": "Array of chargeIds to move and reason",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/correct",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdCorrectPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFolio-actionsByFolioIdCorrectPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdCorrectPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The folio ID",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_folioId\"]}}/charges/{chargeId}/split"
      }
    }
  },
  {
    "displayName": "Charge Id",
    "name": "FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_chargeId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The ID of the charge",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/charges/={{$parameter[\"FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_chargeId\"]}}/split"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "{\n  \"percent\": 51,\n  \"type\": \"ByPercent\"\n}",
    "description": "See class",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/charges/{chargeId}/split",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The folio ID",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/={{$parameter[\"FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_folioId\"]}}/payments/{paymentId}/split"
      }
    }
  },
  {
    "displayName": "Payment Id",
    "name": "FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_paymentId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "The ID of the payment",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/payments/={{$parameter[\"FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_paymentId\"]}}/split"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "{\n  \"percent\": 51,\n  \"type\": \"ByPercent\"\n}",
    "description": "See class",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folio-actions/{folioId}/payments/{paymentId}/split",
        "body": "={{JSON.parse($parameter[\"FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost"
        ],
        "resource": [
          "folioactions"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFoliosByFolioIdPaymentsGet_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The folioId parameter",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByFolioIdPaymentsGet_folioId\"]}}/payments"
      }
    }
  },
  {
    "displayName": "Status Codes",
    "name": "FinanceFoliosByFolioIdPaymentsGet_statusCodes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "Filter payments by one or more status.",
    "routing": {
      "send": {
        "type": "query",
        "property": "statusCodes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "statusCodesValues",
        "displayName": "Status Codes",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter payments by one or more status."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "FinanceFoliosByFolioIdPaymentsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "FinanceFoliosByFolioIdPaymentsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "FinanceFoliosByFolioIdPaymentsGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFoliosByFolioIdPaymentsPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The folioId parameter",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByFolioIdPaymentsPost_folioId\"]}}/payments"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFoliosByFolioIdPaymentsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "{\n  \"method\": \"Cash\",\n  \"receipt\": \"BLIPKWXP-1\",\n  \"amount\": {\n    \"amount\": 230,\n    \"currency\": \"EUR\"\n  },\n  \"paidCharges\": [\n    {\n      \"chargeId\": \"BLIPKWXP-1-1-1\",\n      \"amount\": 230\n    }\n  ]\n}",
    "description": "The definition of the payment.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/{folioId}/payments",
        "body": "={{JSON.parse($parameter[\"FinanceFoliosByFolioIdPaymentsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFoliosByFolioIdPaymentsPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFoliosByFolioIdPaymentsByPaymentIdGet_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsByPaymentIdGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The folioId parameter",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByFolioIdPaymentsByPaymentIdGet_folioId\"]}}/payments/{paymentId}"
      }
    }
  },
  {
    "displayName": "Payment Id",
    "name": "FinanceFoliosByFolioIdPaymentsByPaymentIdGet_paymentId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsByPaymentIdGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The payment ID.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/folios/{folioId}/payments/={{$parameter[\"FinanceFoliosByFolioIdPaymentsByPaymentIdGet_paymentId\"]}}"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "FinanceFoliosByFolioIdPaymentsByPaymentIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsByPaymentIdGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFoliosByFolioIdPaymentsBy-terminalPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsBy-terminalPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The folioId parameter",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByFolioIdPaymentsBy-terminalPost_folioId\"]}}/payments/by-terminal"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFoliosByFolioIdPaymentsBy-terminalPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsBy-terminalPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "{\n  \"terminalId\": \"V400m-324689704\",\n  \"amount\": {\n    \"amount\": 230,\n    \"currency\": \"EUR\"\n  },\n  \"paidCharges\": [\n    {\n      \"chargeId\": \"BLIPKWXP-1-1-1\",\n      \"amount\": 230\n    }\n  ]\n}",
    "description": "The definition of the payment.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/{folioId}/payments/by-terminal",
        "body": "={{JSON.parse($parameter[\"FinanceFoliosByFolioIdPaymentsBy-terminalPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFoliosByFolioIdPaymentsBy-terminalPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsBy-terminalPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFoliosByFolioIdPaymentsBy-authorizationPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsBy-authorizationPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The folioId parameter",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByFolioIdPaymentsBy-authorizationPost_folioId\"]}}/payments/by-authorization"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFoliosByFolioIdPaymentsBy-authorizationPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsBy-authorizationPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "{\n  \"transactionReference\": \"564578124534890J\",\n  \"referenceType\": \"PspReference\",\n  \"amount\": {\n    \"amount\": 330,\n    \"currency\": \"EUR\"\n  },\n  \"paidCharges\": [\n    {\n      \"chargeId\": \"BLIPKWXP-1-1-1\",\n      \"amount\": 230\n    }\n  ]\n}",
    "description": "The definition of the payment.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/{folioId}/payments/by-authorization",
        "body": "={{JSON.parse($parameter[\"FinanceFoliosByFolioIdPaymentsBy-authorizationPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFoliosByFolioIdPaymentsBy-authorizationPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsBy-authorizationPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFoliosByFolioIdPaymentsBy-payment-accountPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsBy-payment-accountPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The folioId parameter",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByFolioIdPaymentsBy-payment-accountPost_folioId\"]}}/payments/by-payment-account"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFoliosByFolioIdPaymentsBy-payment-accountPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsBy-payment-accountPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "{\n  \"amount\": {\n    \"amount\": 230,\n    \"currency\": \"EUR\"\n  },\n  \"paidCharges\": [\n    {\n      \"chargeId\": \"BLIPKWXP-1-1-1\",\n      \"amount\": 200\n    }\n  ]\n}",
    "description": "The definition of the payment.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/{folioId}/payments/by-payment-account",
        "body": "={{JSON.parse($parameter[\"FinanceFoliosByFolioIdPaymentsBy-payment-accountPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFoliosByFolioIdPaymentsBy-payment-accountPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsBy-payment-accountPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFoliosByFolioIdPaymentsBy-linkPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsBy-linkPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The folioId parameter",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByFolioIdPaymentsBy-linkPost_folioId\"]}}/payments/by-link"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFoliosByFolioIdPaymentsBy-linkPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsBy-linkPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "{\n  \"expiresAt\": \"2025-08-13T16:23:43.5995121Z\",\n  \"countryCode\": \"de\",\n  \"description\": \"Prepayment for the group booking apaleo Summer party\",\n  \"payerEmail\": \"0chai@hemenal5.space\",\n  \"amount\": {\n    \"amount\": 150,\n    \"currency\": \"EUR\"\n  },\n  \"paidCharges\": [\n    {\n      \"chargeId\": \"BLIPKWXP-1-1-1\",\n      \"amount\": 230\n    }\n  ]\n}",
    "description": "The definition of the payment link.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/{folioId}/payments/by-link",
        "body": "={{JSON.parse($parameter[\"FinanceFoliosByFolioIdPaymentsBy-linkPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFoliosByFolioIdPaymentsBy-linkPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsBy-linkPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The folioId parameter",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut_folioId\"]}}/payments/{paymentId}/cancel"
      }
    }
  },
  {
    "displayName": "Payment Id",
    "name": "FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut_paymentId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The id of the payment.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/folios/{folioId}/payments/={{$parameter[\"FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut_paymentId\"]}}/cancel"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFoliosByFolioIdRefundsGet_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdRefundsGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The folioId parameter",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByFolioIdRefundsGet_folioId\"]}}/refunds"
      }
    }
  },
  {
    "displayName": "Status Codes",
    "name": "FinanceFoliosByFolioIdRefundsGet_statusCodes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdRefundsGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "Filter refunds by one or more status",
    "routing": {
      "send": {
        "type": "query",
        "property": "statusCodes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "statusCodesValues",
        "displayName": "Status Codes",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter refunds by one or more status"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "FinanceFoliosByFolioIdRefundsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdRefundsGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "FinanceFoliosByFolioIdRefundsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdRefundsGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFoliosByFolioIdRefundsPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdRefundsPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The folioId parameter",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByFolioIdRefundsPost_folioId\"]}}/refunds"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFoliosByFolioIdRefundsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdRefundsPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "{\n  \"method\": \"Cash\",\n  \"amount\": {\n    \"amount\": 10,\n    \"currency\": \"EUR\"\n  },\n  \"receipt\": \"CSH-201824120003\",\n  \"businessDate\": \"2025-08-11\",\n  \"reason\": \"Refund for the cancelled service\"\n}",
    "description": "The definition of the refund.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/{folioId}/refunds",
        "body": "={{JSON.parse($parameter[\"FinanceFoliosByFolioIdRefundsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFoliosByFolioIdRefundsPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdRefundsPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFoliosByFolioIdRefundsByRefundIdGet_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdRefundsByRefundIdGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The folioId parameter",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByFolioIdRefundsByRefundIdGet_folioId\"]}}/refunds/{refundId}"
      }
    }
  },
  {
    "displayName": "Refund Id",
    "name": "FinanceFoliosByFolioIdRefundsByRefundIdGet_refundId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdRefundsByRefundIdGet"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The refund ID.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/folios/{folioId}/refunds/={{$parameter[\"FinanceFoliosByFolioIdRefundsByRefundIdGet_refundId\"]}}"
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The folioId parameter",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/={{$parameter[\"FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_folioId\"]}}/payments/{paymentId}/refunds"
      }
    }
  },
  {
    "displayName": "Payment Id",
    "name": "FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_paymentId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "The payment Id.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/{folioId}/payments/={{$parameter[\"FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_paymentId\"]}}/refunds"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "{\n  \"amount\": {\n    \"amount\": 10,\n    \"currency\": \"EUR\"\n  },\n  \"businessDate\": \"2025-08-11\",\n  \"reason\": \"Refund for the cancelled service\"\n}",
    "description": "The definition of the refund.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/folios/{folioId}/payments/{paymentId}/refunds",
        "body": "={{JSON.parse($parameter[\"FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost"
        ],
        "resource": [
          "foliopayments"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Language Code",
    "name": "FinanceInvoicesPreview-pdfGet_languageCode",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesPreview-pdfGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "The language in which the invoice should be produced.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/invoices/preview-pdf",
        "qs": {
          "languageCode": "={{$parameter[\"FinanceInvoicesPreview-pdfGet_languageCode\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceInvoicesPreview-pdfGet_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesPreview-pdfGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "The ID of the folio for which the invoice should be created.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/invoices/preview-pdf",
        "qs": {
          "folioId": "={{$parameter[\"FinanceInvoicesPreview-pdfGet_folioId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceInvoicesPreviewGet_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesPreviewGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "The ID of the folio for which the invoice should be created.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/invoices/preview",
        "qs": {
          "folioId": "={{$parameter[\"FinanceInvoicesPreviewGet_folioId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "FinanceInvoicesPreviewGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesPreviewGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Number",
    "name": "FinanceInvoicesGet_number",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "The invoice number",
    "routing": {
      "send": {
        "type": "query",
        "property": "number"
      }
    }
  },
  {
    "displayName": "Status",
    "name": "FinanceInvoicesGet_status",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "Filter by invoice status",
    "routing": {
      "send": {
        "type": "query",
        "property": "status"
      }
    },
    "options": [
      {
        "name": "FullyPaid",
        "value": "FullyPaid"
      },
      {
        "name": "Unpaid",
        "value": "Unpaid"
      },
      {
        "name": "WrittenOff",
        "value": "WrittenOff"
      }
    ]
  },
  {
    "displayName": "Checked Out On Accounts Receivable",
    "name": "FinanceInvoicesGet_checkedOutOnAccountsReceivable",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, only return invoices with an open balance (AR)\r\nOtherwise, returns all.",
    "routing": {
      "send": {
        "type": "query",
        "property": "checkedOutOnAccountsReceivable"
      }
    }
  },
  {
    "displayName": "Outstanding Payment Filter",
    "name": "FinanceInvoicesGet_outstandingPaymentFilter",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "Filter for the outstanding balance for invoices<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7",
    "routing": {
      "send": {
        "type": "query",
        "property": "outstandingPaymentFilter"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "outstandingPaymentFilterValues",
        "displayName": "Outstanding Payment Filter",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter for the outstanding balance for invoices<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Date Filter",
    "name": "FinanceInvoicesGet_dateFilter",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "Filter by invoice date<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7",
    "routing": {
      "send": {
        "type": "query",
        "property": "dateFilter"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "dateFilterValues",
        "displayName": "Date Filter",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter by invoice date<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Ids",
    "name": "FinanceInvoicesGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "Filter by property IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter by property IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Reservation Ids",
    "name": "FinanceInvoicesGet_reservationIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "Filter by reservation IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "reservationIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "reservationIdsValues",
        "displayName": "Reservation Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter by reservation IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Booking Ids",
    "name": "FinanceInvoicesGet_bookingIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "Filter by booking IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "bookingIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "bookingIdsValues",
        "displayName": "Booking Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter by booking IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Folio Ids",
    "name": "FinanceInvoicesGet_folioIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "Filter by folio IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "folioIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "folioIdsValues",
        "displayName": "Folio Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter by folio IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Name Search",
    "name": "FinanceInvoicesGet_nameSearch",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "Find invoices for a recipient name or company. Provide at least three characters.",
    "routing": {
      "send": {
        "type": "query",
        "property": "nameSearch"
      }
    }
  },
  {
    "displayName": "Payment Settled",
    "name": "FinanceInvoicesGet_paymentSettled",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": false,
    "description": "If set to `true`, returns only invoices having no outstanding payments or marked as settled.\r\nIf set to `false`, returns only invoices with outstanding payment and not marked as settled.\r\nIf not set, returns all invoices. - <b>DEPRECATED: This field will be removed at 25.06.2022. Use filtering by `Status` instead</b>",
    "routing": {
      "send": {
        "type": "query",
        "property": "paymentSettled"
      }
    }
  },
  {
    "displayName": "Company Ids",
    "name": "FinanceInvoicesGet_companyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "Filter by company IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "companyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "companyIdsValues",
        "displayName": "Company Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter by company IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Recipient Type",
    "name": "FinanceInvoicesGet_recipientType",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "If nothing is set, invoices addressed both companies and individuals will be returned.\r\nIf set to `Person`, invoices that addressed to individuals will be returned.\r\nIf set to `Company`, invoice that addressed to companies will be returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "recipientType"
      }
    },
    "options": [
      {
        "name": "Person",
        "value": "Person"
      },
      {
        "name": "Company",
        "value": "Company"
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "FinanceInvoicesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "FinanceInvoicesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "FinanceInvoicesGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: allowedActions, company. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: allowedActions, company. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "FinanceInvoicesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesPost"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "{\n  \"folioId\": \"HBCXQZ-1\",\n  \"languageCode\": \"en\"\n}",
    "description": "The folio ID to create the invoice for.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/invoices",
        "body": "={{JSON.parse($parameter[\"FinanceInvoicesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceInvoicesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesPost"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "FinanceInvoicesByIdPdfGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesByIdPdfGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "The invoice ID.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/invoices/={{$parameter[\"FinanceInvoicesByIdPdfGet_id\"]}}/pdf"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "FinanceInvoicesByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesByIdGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "The invoice ID.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/invoices/={{$parameter[\"FinanceInvoicesByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "FinanceInvoicesByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoicesByIdGet"
        ],
        "resource": [
          "invoice"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "FinanceInvoice-actionsByIdPayPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoice-actionsByIdPayPut"
        ],
        "resource": [
          "invoiceaction"
        ]
      }
    },
    "default": "",
    "description": "The invoice ID",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/invoice-actions/={{$parameter[\"FinanceInvoice-actionsByIdPayPut_id\"]}}/pay"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceInvoice-actionsByIdPayPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoice-actionsByIdPayPut"
        ],
        "resource": [
          "invoiceaction"
        ]
      }
    },
    "default": "{\n  \"paymentMethod\": \"BankTransfer\",\n  \"receipt\": \"BANK-123456\"\n}",
    "description": "see class",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/invoice-actions/{id}/pay",
        "body": "={{JSON.parse($parameter[\"FinanceInvoice-actionsByIdPayPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "FinanceInvoice-actionsByIdCancelPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoice-actionsByIdCancelPut"
        ],
        "resource": [
          "invoiceaction"
        ]
      }
    },
    "default": "",
    "description": "The invoice ID",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/invoice-actions/={{$parameter[\"FinanceInvoice-actionsByIdCancelPut_id\"]}}/cancel"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "FinanceInvoice-actionsByIdCancelPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceInvoice-actionsByIdCancelPut"
        ],
        "resource": [
          "invoiceaction"
        ]
      }
    },
    "default": "{\n  \"reasonCode\": \"ChangeOfRecipientDetails\"\n}",
    "description": "see class",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/finance/v1/invoice-actions/{id}/cancel",
        "body": "={{JSON.parse($parameter[\"FinanceInvoice-actionsByIdCancelPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "FinanceAccountsAggregate-pairs-dailyPost_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-pairs-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Specifies the property transactions will be aggregated for.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/aggregate-pairs-daily",
        "qs": {
          "propertyId": "={{$parameter[\"FinanceAccountsAggregate-pairs-dailyPost_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "From",
    "name": "FinanceAccountsAggregate-pairs-dailyPost_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-pairs-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start date of the interval",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/aggregate-pairs-daily",
        "qs": {
          "from": "={{$parameter[\"FinanceAccountsAggregate-pairs-dailyPost_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "FinanceAccountsAggregate-pairs-dailyPost_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-pairs-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The exclusive end date of the interval",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/aggregate-pairs-daily",
        "qs": {
          "to": "={{$parameter[\"FinanceAccountsAggregate-pairs-dailyPost_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Reference",
    "name": "FinanceAccountsAggregate-pairs-dailyPost_reference",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-pairs-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by reference (reservation id/external folio id/property id for house folio).",
    "routing": {
      "send": {
        "type": "query",
        "property": "reference"
      }
    }
  },
  {
    "displayName": "Account Number",
    "name": "FinanceAccountsAggregate-pairs-dailyPost_accountNumber",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-pairs-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by account number",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountNumber"
      }
    }
  },
  {
    "displayName": "Account Type",
    "name": "FinanceAccountsAggregate-pairs-dailyPost_accountType",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-pairs-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by type",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountType"
      }
    },
    "options": [
      {
        "name": "Revenues",
        "value": "Revenues"
      },
      {
        "name": "Payments",
        "value": "Payments"
      },
      {
        "name": "Liabilities",
        "value": "Liabilities"
      },
      {
        "name": "Receivables",
        "value": "Receivables"
      },
      {
        "name": "Vat",
        "value": "Vat"
      },
      {
        "name": "House",
        "value": "House"
      },
      {
        "name": "AccountsReceivable",
        "value": "AccountsReceivable"
      },
      {
        "name": "CityTaxes",
        "value": "CityTaxes"
      },
      {
        "name": "TransitoryItems",
        "value": "TransitoryItems"
      },
      {
        "name": "VatOnLiabilities",
        "value": "VatOnLiabilities"
      },
      {
        "name": "LossOfAccountsReceivable",
        "value": "LossOfAccountsReceivable"
      },
      {
        "name": "SecondCityTax",
        "value": "SecondCityTax"
      }
    ]
  },
  {
    "displayName": "Accounting Schema",
    "name": "FinanceAccountsAggregate-pairs-dailyPost_accountingSchema",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-pairs-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Allows to override the default accounting schema. Only specify this, when you know what you are doing.",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountingSchema"
      }
    },
    "options": [
      {
        "name": "Simple",
        "value": "Simple"
      },
      {
        "name": "Extended",
        "value": "Extended"
      }
    ]
  },
  {
    "displayName": "Language Code",
    "name": "FinanceAccountsAggregate-pairs-dailyPost_languageCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-pairs-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The language for the the report (2-letter ISO code)",
    "routing": {
      "send": {
        "type": "query",
        "property": "languageCode"
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceAccountsAggregate-pairs-dailyPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-pairs-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "FinanceAccountsAggregate-dailyPost_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Specifies the property transactions will be aggregated for.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/aggregate-daily",
        "qs": {
          "propertyId": "={{$parameter[\"FinanceAccountsAggregate-dailyPost_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "From",
    "name": "FinanceAccountsAggregate-dailyPost_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start date of the interval",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/aggregate-daily",
        "qs": {
          "from": "={{$parameter[\"FinanceAccountsAggregate-dailyPost_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "FinanceAccountsAggregate-dailyPost_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The exclusive end date of the interval",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/aggregate-daily",
        "qs": {
          "to": "={{$parameter[\"FinanceAccountsAggregate-dailyPost_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Reference",
    "name": "FinanceAccountsAggregate-dailyPost_reference",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by reference (reservation id/external folio id/property id for house folio).",
    "routing": {
      "send": {
        "type": "query",
        "property": "reference"
      }
    }
  },
  {
    "displayName": "Account Number",
    "name": "FinanceAccountsAggregate-dailyPost_accountNumber",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by account number",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountNumber"
      }
    }
  },
  {
    "displayName": "Account Type",
    "name": "FinanceAccountsAggregate-dailyPost_accountType",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by type",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountType"
      }
    },
    "options": [
      {
        "name": "Revenues",
        "value": "Revenues"
      },
      {
        "name": "Payments",
        "value": "Payments"
      },
      {
        "name": "Liabilities",
        "value": "Liabilities"
      },
      {
        "name": "Receivables",
        "value": "Receivables"
      },
      {
        "name": "Vat",
        "value": "Vat"
      },
      {
        "name": "House",
        "value": "House"
      },
      {
        "name": "AccountsReceivable",
        "value": "AccountsReceivable"
      },
      {
        "name": "CityTaxes",
        "value": "CityTaxes"
      },
      {
        "name": "TransitoryItems",
        "value": "TransitoryItems"
      },
      {
        "name": "VatOnLiabilities",
        "value": "VatOnLiabilities"
      },
      {
        "name": "LossOfAccountsReceivable",
        "value": "LossOfAccountsReceivable"
      },
      {
        "name": "SecondCityTax",
        "value": "SecondCityTax"
      }
    ]
  },
  {
    "displayName": "Accounting Schema",
    "name": "FinanceAccountsAggregate-dailyPost_accountingSchema",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Allows to override the default accounting schema. Only specify this, when you know what you are doing.",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountingSchema"
      }
    },
    "options": [
      {
        "name": "Simple",
        "value": "Simple"
      },
      {
        "name": "Extended",
        "value": "Extended"
      }
    ]
  },
  {
    "displayName": "Language Code",
    "name": "FinanceAccountsAggregate-dailyPost_languageCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The language for the the report (2-letter ISO code)",
    "routing": {
      "send": {
        "type": "query",
        "property": "languageCode"
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceAccountsAggregate-dailyPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregate-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "FinanceAccountsAggregatePost_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregatePost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Specifies the property for which transactions will be exported",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/aggregate",
        "qs": {
          "propertyId": "={{$parameter[\"FinanceAccountsAggregatePost_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "From",
    "name": "FinanceAccountsAggregatePost_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregatePost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start time of the posting date.\r\nEither posting date or business date interval should be specified.<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/aggregate",
        "qs": {
          "from": "={{$parameter[\"FinanceAccountsAggregatePost_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "FinanceAccountsAggregatePost_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregatePost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The exclusive end time of the posting date.\r\nEither posting date or business date interval should be specified.<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/aggregate",
        "qs": {
          "to": "={{$parameter[\"FinanceAccountsAggregatePost_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Account Number",
    "name": "FinanceAccountsAggregatePost_accountNumber",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregatePost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by account number",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountNumber"
      }
    }
  },
  {
    "displayName": "Account Type",
    "name": "FinanceAccountsAggregatePost_accountType",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregatePost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by type",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountType"
      }
    },
    "options": [
      {
        "name": "Revenues",
        "value": "Revenues"
      },
      {
        "name": "Payments",
        "value": "Payments"
      },
      {
        "name": "Liabilities",
        "value": "Liabilities"
      },
      {
        "name": "Receivables",
        "value": "Receivables"
      },
      {
        "name": "Vat",
        "value": "Vat"
      },
      {
        "name": "House",
        "value": "House"
      },
      {
        "name": "AccountsReceivable",
        "value": "AccountsReceivable"
      },
      {
        "name": "CityTaxes",
        "value": "CityTaxes"
      },
      {
        "name": "TransitoryItems",
        "value": "TransitoryItems"
      },
      {
        "name": "VatOnLiabilities",
        "value": "VatOnLiabilities"
      },
      {
        "name": "LossOfAccountsReceivable",
        "value": "LossOfAccountsReceivable"
      },
      {
        "name": "SecondCityTax",
        "value": "SecondCityTax"
      }
    ]
  },
  {
    "displayName": "Accounting Schema",
    "name": "FinanceAccountsAggregatePost_accountingSchema",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregatePost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Allows to override the default accounting schema. Only specify this, when you know what you are doing.",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountingSchema"
      }
    },
    "options": [
      {
        "name": "Simple",
        "value": "Simple"
      },
      {
        "name": "Extended",
        "value": "Extended"
      }
    ]
  },
  {
    "displayName": "Language Code",
    "name": "FinanceAccountsAggregatePost_languageCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregatePost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The language for the the report",
    "routing": {
      "send": {
        "type": "query",
        "property": "languageCode"
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceAccountsAggregatePost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsAggregatePost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "FinanceAccountsExportPost_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExportPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Specifies the property for which transactions will be exported",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/export",
        "qs": {
          "propertyId": "={{$parameter[\"FinanceAccountsExportPost_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "From",
    "name": "FinanceAccountsExportPost_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExportPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start time of the posting date.\r\nEither posting date or business date interval should be specified.<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/export",
        "qs": {
          "from": "={{$parameter[\"FinanceAccountsExportPost_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "FinanceAccountsExportPost_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExportPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The exclusive end time of the posting date.\r\nEither posting date or business date interval should be specified.<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/export",
        "qs": {
          "to": "={{$parameter[\"FinanceAccountsExportPost_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Account Number",
    "name": "FinanceAccountsExportPost_accountNumber",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExportPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by account number",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountNumber"
      }
    }
  },
  {
    "displayName": "Account Type",
    "name": "FinanceAccountsExportPost_accountType",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExportPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by type",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountType"
      }
    },
    "options": [
      {
        "name": "Revenues",
        "value": "Revenues"
      },
      {
        "name": "Payments",
        "value": "Payments"
      },
      {
        "name": "Liabilities",
        "value": "Liabilities"
      },
      {
        "name": "Receivables",
        "value": "Receivables"
      },
      {
        "name": "Vat",
        "value": "Vat"
      },
      {
        "name": "House",
        "value": "House"
      },
      {
        "name": "AccountsReceivable",
        "value": "AccountsReceivable"
      },
      {
        "name": "CityTaxes",
        "value": "CityTaxes"
      },
      {
        "name": "TransitoryItems",
        "value": "TransitoryItems"
      },
      {
        "name": "VatOnLiabilities",
        "value": "VatOnLiabilities"
      },
      {
        "name": "LossOfAccountsReceivable",
        "value": "LossOfAccountsReceivable"
      },
      {
        "name": "SecondCityTax",
        "value": "SecondCityTax"
      }
    ]
  },
  {
    "displayName": "Accounting Schema",
    "name": "FinanceAccountsExportPost_accountingSchema",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExportPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Allows to override the default accounting schema. Only specify this, when you know what you are doing.",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountingSchema"
      }
    },
    "options": [
      {
        "name": "Simple",
        "value": "Simple"
      },
      {
        "name": "Extended",
        "value": "Extended"
      }
    ]
  },
  {
    "displayName": "Language Code",
    "name": "FinanceAccountsExportPost_languageCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExportPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The language for the the report",
    "routing": {
      "send": {
        "type": "query",
        "property": "languageCode"
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceAccountsExportPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExportPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "FinanceAccountsExport-dailyPost_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Specifies the property transactions will be aggregated for.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/export-daily",
        "qs": {
          "propertyId": "={{$parameter[\"FinanceAccountsExport-dailyPost_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "From",
    "name": "FinanceAccountsExport-dailyPost_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start date of the interval",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/export-daily",
        "qs": {
          "from": "={{$parameter[\"FinanceAccountsExport-dailyPost_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "FinanceAccountsExport-dailyPost_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The exclusive end date of the interval",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/export-daily",
        "qs": {
          "to": "={{$parameter[\"FinanceAccountsExport-dailyPost_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Reference",
    "name": "FinanceAccountsExport-dailyPost_reference",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by reference (reservation id/external folio id/property id for house folio).",
    "routing": {
      "send": {
        "type": "query",
        "property": "reference"
      }
    }
  },
  {
    "displayName": "Account Number",
    "name": "FinanceAccountsExport-dailyPost_accountNumber",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by account number",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountNumber"
      }
    }
  },
  {
    "displayName": "Account Type",
    "name": "FinanceAccountsExport-dailyPost_accountType",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by type",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountType"
      }
    },
    "options": [
      {
        "name": "Revenues",
        "value": "Revenues"
      },
      {
        "name": "Payments",
        "value": "Payments"
      },
      {
        "name": "Liabilities",
        "value": "Liabilities"
      },
      {
        "name": "Receivables",
        "value": "Receivables"
      },
      {
        "name": "Vat",
        "value": "Vat"
      },
      {
        "name": "House",
        "value": "House"
      },
      {
        "name": "AccountsReceivable",
        "value": "AccountsReceivable"
      },
      {
        "name": "CityTaxes",
        "value": "CityTaxes"
      },
      {
        "name": "TransitoryItems",
        "value": "TransitoryItems"
      },
      {
        "name": "VatOnLiabilities",
        "value": "VatOnLiabilities"
      },
      {
        "name": "LossOfAccountsReceivable",
        "value": "LossOfAccountsReceivable"
      },
      {
        "name": "SecondCityTax",
        "value": "SecondCityTax"
      }
    ]
  },
  {
    "displayName": "Accounting Schema",
    "name": "FinanceAccountsExport-dailyPost_accountingSchema",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Allows to override the default accounting schema. Only specify this, when you know what you are doing.",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountingSchema"
      }
    },
    "options": [
      {
        "name": "Simple",
        "value": "Simple"
      },
      {
        "name": "Extended",
        "value": "Extended"
      }
    ]
  },
  {
    "displayName": "Language Code",
    "name": "FinanceAccountsExport-dailyPost_languageCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The language for the the report (2-letter ISO code)",
    "routing": {
      "send": {
        "type": "query",
        "property": "languageCode"
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceAccountsExport-dailyPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "FinanceAccountsExport-gross-dailyPost_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-gross-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Specifies the property transactions will be aggregated for.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/export-gross-daily",
        "qs": {
          "propertyId": "={{$parameter[\"FinanceAccountsExport-gross-dailyPost_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "From",
    "name": "FinanceAccountsExport-gross-dailyPost_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-gross-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start date of the interval",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/export-gross-daily",
        "qs": {
          "from": "={{$parameter[\"FinanceAccountsExport-gross-dailyPost_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "FinanceAccountsExport-gross-dailyPost_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-gross-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The exclusive end date of the interval",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/finance/v1/accounts/export-gross-daily",
        "qs": {
          "to": "={{$parameter[\"FinanceAccountsExport-gross-dailyPost_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Reference",
    "name": "FinanceAccountsExport-gross-dailyPost_reference",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-gross-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter transactions by reference (reservation id/external folio id/property id for house folio).",
    "routing": {
      "send": {
        "type": "query",
        "property": "reference"
      }
    }
  },
  {
    "displayName": "Accounting Schema",
    "name": "FinanceAccountsExport-gross-dailyPost_accountingSchema",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-gross-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Allows to override the default accounting schema. Only specify this, when you know what you are doing.",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountingSchema"
      }
    },
    "options": [
      {
        "name": "Simple",
        "value": "Simple"
      },
      {
        "name": "Extended",
        "value": "Extended"
      }
    ]
  },
  {
    "displayName": "Idempotency- Key",
    "name": "FinanceAccountsExport-gross-dailyPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsExport-gross-dailyPost"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "FinanceAccountsSchemaGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsSchemaGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter account list by property ID",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/accounts/schema",
        "qs": {
          "propertyId": "={{$parameter[\"FinanceAccountsSchemaGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Depth",
    "name": "FinanceAccountsSchemaGet_depth",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsSchemaGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "How many hierarchy levels to include (between 1 and 4, default is 1).",
    "routing": {
      "send": {
        "type": "query",
        "property": "depth"
      }
    }
  },
  {
    "displayName": "Include Archived",
    "name": "FinanceAccountsSchemaGet_includeArchived",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsSchemaGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": false,
    "description": "If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts",
    "routing": {
      "send": {
        "type": "query",
        "property": "includeArchived"
      }
    }
  },
  {
    "displayName": "Accounting Schema",
    "name": "FinanceAccountsSchemaGet_accountingSchema",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsSchemaGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Allows to override the default accounting schema. Only specify this, when you know what you are doing.",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountingSchema"
      }
    },
    "options": [
      {
        "name": "Simple",
        "value": "Simple"
      },
      {
        "name": "Extended",
        "value": "Extended"
      }
    ]
  },
  {
    "displayName": "Language Code",
    "name": "FinanceAccountsSchemaGet_languageCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsSchemaGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The language for the the report. If not specified, language code from \"Accept-Language\" will be used.",
    "routing": {
      "send": {
        "type": "query",
        "property": "languageCode"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "FinanceGlobal-accountsGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGlobal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter account list by property ID",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/global-accounts",
        "qs": {
          "propertyId": "={{$parameter[\"FinanceGlobal-accountsGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Parent",
    "name": "FinanceGlobal-accountsGet_parent",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGlobal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter account list by the parent account's number.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/global-accounts",
        "qs": {
          "parent": "={{$parameter[\"FinanceGlobal-accountsGet_parent\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Include Archived",
    "name": "FinanceGlobal-accountsGet_includeArchived",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGlobal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": false,
    "description": "If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts",
    "routing": {
      "send": {
        "type": "query",
        "property": "includeArchived"
      }
    }
  },
  {
    "displayName": "Accounting Schema",
    "name": "FinanceGlobal-accountsGet_accountingSchema",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGlobal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Allows to override the default accounting schema",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountingSchema"
      }
    },
    "options": [
      {
        "name": "Simple",
        "value": "Simple"
      },
      {
        "name": "Extended",
        "value": "Extended"
      }
    ]
  },
  {
    "displayName": "Language Code",
    "name": "FinanceGlobal-accountsGet_languageCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGlobal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The language for the the report",
    "routing": {
      "send": {
        "type": "query",
        "property": "languageCode"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "FinanceGlobal-accountsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGlobal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "FinanceGlobal-accountsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGlobal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "FinanceGuest-accountsGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGuest-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter account list by property id",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/guest-accounts",
        "qs": {
          "propertyId": "={{$parameter[\"FinanceGuest-accountsGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Reservation Id",
    "name": "FinanceGuest-accountsGet_reservationId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGuest-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter account list by reservation id",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/guest-accounts",
        "qs": {
          "reservationId": "={{$parameter[\"FinanceGuest-accountsGet_reservationId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Parent",
    "name": "FinanceGuest-accountsGet_parent",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGuest-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter account list by the parent account's number.",
    "routing": {
      "send": {
        "type": "query",
        "property": "parent"
      }
    }
  },
  {
    "displayName": "Language Code",
    "name": "FinanceGuest-accountsGet_languageCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGuest-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The language for the the report",
    "routing": {
      "send": {
        "type": "query",
        "property": "languageCode"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "FinanceGuest-accountsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGuest-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "FinanceGuest-accountsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceGuest-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "FinanceExternal-accountsGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceExternal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter account list by property id",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/external-accounts",
        "qs": {
          "propertyId": "={{$parameter[\"FinanceExternal-accountsGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Folio Id",
    "name": "FinanceExternal-accountsGet_folioId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceExternal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter account list by folio id",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/external-accounts",
        "qs": {
          "folioId": "={{$parameter[\"FinanceExternal-accountsGet_folioId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Parent",
    "name": "FinanceExternal-accountsGet_parent",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceExternal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter account list by the parent account's number.",
    "routing": {
      "send": {
        "type": "query",
        "property": "parent"
      }
    }
  },
  {
    "displayName": "Language Code",
    "name": "FinanceExternal-accountsGet_languageCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceExternal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The language for the the report",
    "routing": {
      "send": {
        "type": "query",
        "property": "languageCode"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "FinanceExternal-accountsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceExternal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "FinanceExternal-accountsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceExternal-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Number",
    "name": "FinanceAccountsByNumberGet_number",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsByNumberGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The account number",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/accounts/={{$parameter[\"FinanceAccountsByNumberGet_number\"]}}"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "FinanceAccountsByNumberGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsByNumberGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Specifies the property the account is in.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/accounts/{number}",
        "qs": {
          "propertyId": "={{$parameter[\"FinanceAccountsByNumberGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Transaction Limit",
    "name": "FinanceAccountsByNumberGet_transactionLimit",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsByNumberGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Limit how many transactions should be included in the view (between 0 and 50, defaults to 0).",
    "routing": {
      "send": {
        "type": "query",
        "property": "transactionLimit"
      }
    }
  },
  {
    "displayName": "Include Archived",
    "name": "FinanceAccountsByNumberGet_includeArchived",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsByNumberGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": false,
    "description": "If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts",
    "routing": {
      "send": {
        "type": "query",
        "property": "includeArchived"
      }
    }
  },
  {
    "displayName": "Accounting Schema",
    "name": "FinanceAccountsByNumberGet_accountingSchema",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsByNumberGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Allows to override the default accounting schema. Only specify this, when you know what you are doing.",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountingSchema"
      }
    },
    "options": [
      {
        "name": "Simple",
        "value": "Simple"
      },
      {
        "name": "Extended",
        "value": "Extended"
      }
    ]
  },
  {
    "displayName": "Language Code",
    "name": "FinanceAccountsByNumberGet_languageCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsByNumberGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The language for the the report",
    "routing": {
      "send": {
        "type": "query",
        "property": "languageCode"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "FinanceAccountsChild-accountsGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsChild-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter account list by property id",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/accounts/child-accounts",
        "qs": {
          "propertyId": "={{$parameter[\"FinanceAccountsChild-accountsGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Parent",
    "name": "FinanceAccountsChild-accountsGet_parent",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsChild-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Filter account list by the parent account's number.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/accounts/child-accounts",
        "qs": {
          "parent": "={{$parameter[\"FinanceAccountsChild-accountsGet_parent\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Language Code",
    "name": "FinanceAccountsChild-accountsGet_languageCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsChild-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "The language for the the report",
    "routing": {
      "send": {
        "type": "query",
        "property": "languageCode"
      }
    }
  },
  {
    "displayName": "Accounting Schema",
    "name": "FinanceAccountsChild-accountsGet_accountingSchema",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsChild-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Allows to override the default accounting schema",
    "routing": {
      "send": {
        "type": "query",
        "property": "accountingSchema"
      }
    },
    "options": [
      {
        "name": "Simple",
        "value": "Simple"
      },
      {
        "name": "Extended",
        "value": "Extended"
      }
    ]
  },
  {
    "displayName": "Include Archived",
    "name": "FinanceAccountsChild-accountsGet_includeArchived",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsChild-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": false,
    "description": "If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts",
    "routing": {
      "send": {
        "type": "query",
        "property": "includeArchived"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "FinanceAccountsChild-accountsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsChild-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "FinanceAccountsChild-accountsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceAccountsChild-accountsGet"
        ],
        "resource": [
          "subledger"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Iso Country Code",
    "name": "FinanceTypesVatGet_isoCountryCode",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceTypesVatGet"
        ],
        "resource": [
          "types"
        ]
      }
    },
    "default": "",
    "description": "The 2-letter ISO country code",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/finance/v1/types/vat",
        "qs": {
          "isoCountryCode": "={{$parameter[\"FinanceTypesVatGet_isoCountryCode\"]}}"
        }
      }
    }
  },
  {
    "displayName": "At Date",
    "name": "FinanceTypesVatGet_atDate",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "FinanceTypesVatGet"
        ],
        "resource": [
          "types"
        ]
      }
    },
    "default": "",
    "description": "If specified, returns the VAT types that are effective for this specific date.\r\nIf nothing specified, returns the VAT types that are effective for the current date in UTC timezone.",
    "routing": {
      "send": {
        "type": "query",
        "property": "atDate"
      }
    }
  },
  {
    "displayName": "Status",
    "name": "InventoryPropertiesGet_status",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesGet"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": "",
    "description": "Filter result by property status",
    "routing": {
      "send": {
        "type": "query",
        "property": "status"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "statusValues",
        "displayName": "Status",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by property status"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Include Archived",
    "name": "InventoryPropertiesGet_includeArchived",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesGet"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": false,
    "description": "Include archived properties in the result. If not set, or set to false, it only returns non-archived properties",
    "routing": {
      "send": {
        "type": "query",
        "property": "includeArchived"
      }
    }
  },
  {
    "displayName": "Country Code",
    "name": "InventoryPropertiesGet_countryCode",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesGet"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": "",
    "description": "Filter result by country code",
    "routing": {
      "send": {
        "type": "query",
        "property": "countryCode"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "countryCodeValues",
        "displayName": "Country Code",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by country code"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "InventoryPropertiesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesGet"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "InventoryPropertiesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesGet"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "InventoryPropertiesGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesGet"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "InventoryPropertiesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesPost"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": "{\n  \"code\": \"MUC\",\n  \"name\": {\n    \"en\": \"Demo Hotel Munich\",\n    \"de\": \"Demo Hotel München\"\n  },\n  \"companyName\": \"Hotel Münchner GmbH\",\n  \"managingDirectors\": \"Franz-Josef Gruber\",\n  \"commercialRegisterEntry\": \"Amtsgericht München, HRB 279336\",\n  \"taxId\": \"DE311053702\",\n  \"description\": {\n    \"en\": \"This is the demo hotel Munich\",\n    \"de\": \"Dies ist das Demo Hotel München\"\n  },\n  \"location\": {\n    \"addressLine1\": \"Marienplatz 1\",\n    \"postalCode\": \"80331\",\n    \"city\": \"München\",\n    \"countryCode\": \"DE\"\n  },\n  \"bankAccount\": {\n    \"iban\": \"DE44 5001 0517 5407 3249 31\",\n    \"bic\": \"SSKMDEMMXXX\",\n    \"bank\": \"Stadtsparkasse München\"\n  },\n  \"paymentTerms\": {\n    \"en\": \"Pay on checkout\",\n    \"de\": \"Zahlung bei Checkout\"\n  },\n  \"timeZone\": \"Europe/Berlin\",\n  \"defaultCheckInTime\": \"17:00:00\",\n  \"defaultCheckOutTime\": \"11:00:00\",\n  \"currencyCode\": \"EUR\"\n}",
    "description": "The definition of the property.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/inventory/v1/properties",
        "body": "={{JSON.parse($parameter[\"InventoryPropertiesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "InventoryPropertiesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesPost"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "InventoryPropertiesByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesByIdGet"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": "",
    "description": "The id of the property.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/inventory/v1/properties/={{$parameter[\"InventoryPropertiesByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Languages",
    "name": "InventoryPropertiesByIdGet_languages",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesByIdGet"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": "",
    "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)",
    "routing": {
      "send": {
        "type": "query",
        "property": "languages"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "languagesValues",
        "displayName": "Languages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Expand",
    "name": "InventoryPropertiesByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesByIdGet"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "InventoryPropertiesByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesByIdPatch"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": "",
    "description": "The id of the property.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/inventory/v1/properties/={{$parameter[\"InventoryPropertiesByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "InventoryPropertiesByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryPropertiesByIdPatch"
        ],
        "resource": [
          "property"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/inventory/v1/properties/{id}",
        "body": "={{JSON.parse($parameter[\"InventoryPropertiesByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "InventoryUnitsByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsByIdPatch"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "The id of the unit.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/inventory/v1/units/={{$parameter[\"InventoryUnitsByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "InventoryUnitsByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsByIdPatch"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/inventory/v1/units/{id}",
        "body": "={{JSON.parse($parameter[\"InventoryUnitsByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "InventoryUnitsByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsByIdGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "The id of the unit.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/inventory/v1/units/={{$parameter[\"InventoryUnitsByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Languages",
    "name": "InventoryUnitsByIdGet_languages",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsByIdGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)",
    "routing": {
      "send": {
        "type": "query",
        "property": "languages"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "languagesValues",
        "displayName": "Languages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Expand",
    "name": "InventoryUnitsByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsByIdGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "InventoryUnitsByIdHead_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsByIdHead"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "The id of the unit.",
    "routing": {
      "request": {
        "method": "HEAD",
        "url": "/inventory/v1/units/={{$parameter[\"InventoryUnitsByIdHead_id\"]}}"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "InventoryUnitsByIdDelete_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsByIdDelete"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "The id of the unit.",
    "routing": {
      "request": {
        "method": "DELETE",
        "url": "/inventory/v1/units/={{$parameter[\"InventoryUnitsByIdDelete_id\"]}}"
      }
    }
  },
  {
    "displayName": "Unit Ids",
    "name": "InventoryUnitsPatch_unitIds",
    "type": "fixedCollection",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsPatch"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "The unitIds parameter",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/inventory/v1/units",
        "qs": {
          "unitIds": "={{$parameter[\"InventoryUnitsPatch_unitIds\"]}}"
        }
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitIdsValues",
        "displayName": "Unit Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The unitIds value"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "InventoryUnitsPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsPatch"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/inventory/v1/units",
        "body": "={{JSON.parse($parameter[\"InventoryUnitsPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "InventoryUnitsGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Return units for specific property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Unit Group Id",
    "name": "InventoryUnitsGet_unitGroupId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Return units for the specific unit group - <b>DEPRECATED: This property will be removed 20.04.2022. Use `UnitGroupIds` instead</b>",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupId"
      }
    }
  },
  {
    "displayName": "Unit Group Ids",
    "name": "InventoryUnitsGet_unitGroupIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Return units with the specific unit groups",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupIdsValues",
        "displayName": "Unit Group Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return units with the specific unit groups"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Attribute Ids",
    "name": "InventoryUnitsGet_unitAttributeIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Return units with the specific unit attributes",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitAttributeIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitAttributeIdsValues",
        "displayName": "Unit Attribute Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return units with the specific unit attributes"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Is Occupied",
    "name": "InventoryUnitsGet_isOccupied",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": false,
    "description": "Return only occupied or vacant units",
    "routing": {
      "send": {
        "type": "query",
        "property": "isOccupied"
      }
    }
  },
  {
    "displayName": "Maintenance Type",
    "name": "InventoryUnitsGet_maintenanceType",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Return units with the specific maintenance type",
    "routing": {
      "send": {
        "type": "query",
        "property": "maintenanceType"
      }
    },
    "options": [
      {
        "name": "OutOfService",
        "value": "OutOfService"
      },
      {
        "name": "OutOfOrder",
        "value": "OutOfOrder"
      },
      {
        "name": "OutOfInventory",
        "value": "OutOfInventory"
      }
    ]
  },
  {
    "displayName": "Condition",
    "name": "InventoryUnitsGet_condition",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Return units with a specific condition",
    "routing": {
      "send": {
        "type": "query",
        "property": "condition"
      }
    },
    "options": [
      {
        "name": "Clean",
        "value": "Clean"
      },
      {
        "name": "CleanToBeInspected",
        "value": "CleanToBeInspected"
      },
      {
        "name": "Dirty",
        "value": "Dirty"
      }
    ]
  },
  {
    "displayName": "Text Search",
    "name": "InventoryUnitsGet_textSearch",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "This will filter all units where the provided text is contained in the unit name. The search is case insensitive.",
    "routing": {
      "send": {
        "type": "query",
        "property": "textSearch"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "InventoryUnitsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "InventoryUnitsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "InventoryUnitsGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "InventoryUnitsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsPost"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "{\n  \"propertyId\": \"MUC\",\n  \"name\": \"S.102\",\n  \"description\": {\n    \"en\": \"Suite room\",\n    \"de\": \"Suite Zimmer\"\n  },\n  \"unitGroupId\": \"MUC-SUI\",\n  \"maxPersons\": 3,\n  \"condition\": \"Clean\",\n  \"attributes\": [],\n  \"connectedUnits\": [\n    {\n      \"unitId\": \"MUC-MTA\"\n    },\n    {\n      \"unitId\": \"MUC-JQI\"\n    }\n  ]\n}",
    "description": "The definition of the unit.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/inventory/v1/units",
        "body": "={{JSON.parse($parameter[\"InventoryUnitsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "InventoryUnitsPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsPost"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "InventoryUnits$countGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnits$countGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Return units for specific property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Unit Group Id",
    "name": "InventoryUnits$countGet_unitGroupId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnits$countGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Return units for the specific unit group - <b>DEPRECATED: This property will be removed 20.04.2022. Use `UnitGroupIds` instead</b>",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupId"
      }
    }
  },
  {
    "displayName": "Unit Group Ids",
    "name": "InventoryUnits$countGet_unitGroupIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnits$countGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Return units with the specific unit groups",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupIdsValues",
        "displayName": "Unit Group Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return units with the specific unit groups"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Attribute Ids",
    "name": "InventoryUnits$countGet_unitAttributeIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnits$countGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Return units with the specific unit attributes",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitAttributeIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitAttributeIdsValues",
        "displayName": "Unit Attribute Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return units with the specific unit attributes"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Is Occupied",
    "name": "InventoryUnits$countGet_isOccupied",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnits$countGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": false,
    "description": "Return only occupied or vacant units",
    "routing": {
      "send": {
        "type": "query",
        "property": "isOccupied"
      }
    }
  },
  {
    "displayName": "Maintenance Type",
    "name": "InventoryUnits$countGet_maintenanceType",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnits$countGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Return units with the specific maintenance type",
    "routing": {
      "send": {
        "type": "query",
        "property": "maintenanceType"
      }
    },
    "options": [
      {
        "name": "OutOfService",
        "value": "OutOfService"
      },
      {
        "name": "OutOfOrder",
        "value": "OutOfOrder"
      },
      {
        "name": "OutOfInventory",
        "value": "OutOfInventory"
      }
    ]
  },
  {
    "displayName": "Condition",
    "name": "InventoryUnits$countGet_condition",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnits$countGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Return units with a specific condition",
    "routing": {
      "send": {
        "type": "query",
        "property": "condition"
      }
    },
    "options": [
      {
        "name": "Clean",
        "value": "Clean"
      },
      {
        "name": "CleanToBeInspected",
        "value": "CleanToBeInspected"
      },
      {
        "name": "Dirty",
        "value": "Dirty"
      }
    ]
  },
  {
    "displayName": "Text Search",
    "name": "InventoryUnits$countGet_textSearch",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnits$countGet"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "This will filter all units where the provided text is contained in the unit name. The search is case insensitive.",
    "routing": {
      "send": {
        "type": "query",
        "property": "textSearch"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "InventoryUnitsBulkPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsBulkPost"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "{\n  \"units\": [\n    {\n      \"propertyId\": \"MUC\",\n      \"name\": \"A.201\",\n      \"description\": {\n        \"en\": \"Single room\",\n        \"de\": \"Einzelzimmer\"\n      },\n      \"unitGroupId\": \"MUC-SGL\",\n      \"maxPersons\": 1,\n      \"condition\": \"Clean\",\n      \"attributes\": [],\n      \"connectedUnits\": []\n    },\n    {\n      \"propertyId\": \"MUC\",\n      \"name\": \"A.103\",\n      \"description\": {\n        \"en\": \"Double room\",\n        \"de\": \"Doppelzimmer\"\n      },\n      \"unitGroupId\": \"MUC-DBL\",\n      \"maxPersons\": 2,\n      \"condition\": \"Clean\",\n      \"attributes\": [],\n      \"connectedUnits\": []\n    },\n    {\n      \"propertyId\": \"MUC\",\n      \"name\": \"S.102\",\n      \"description\": {\n        \"en\": \"Suite room\",\n        \"de\": \"Suite Zimmer\"\n      },\n      \"unitGroupId\": \"MUC-SUI\",\n      \"maxPersons\": 3,\n      \"condition\": \"Clean\",\n      \"attributes\": [],\n      \"connectedUnits\": [\n        {\n          \"unitId\": \"MUC-MTA\"\n        },\n        {\n          \"unitId\": \"MUC-JQI\"\n        }\n      ]\n    }\n  ]\n}",
    "description": "The definition of the units.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/inventory/v1/units/bulk",
        "body": "={{JSON.parse($parameter[\"InventoryUnitsBulkPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "InventoryUnitsBulkPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnitsBulkPost"
        ],
        "resource": [
          "unit"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "InventoryUnit-attributesByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-attributesByIdGet"
        ],
        "resource": [
          "unitattribute"
        ]
      }
    },
    "default": "",
    "description": "The id of the unit attribute",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/inventory/v1/unit-attributes/={{$parameter[\"InventoryUnit-attributesByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "InventoryUnit-attributesByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-attributesByIdPatch"
        ],
        "resource": [
          "unitattribute"
        ]
      }
    },
    "default": "",
    "description": "Id of unit attribute",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/inventory/v1/unit-attributes/={{$parameter[\"InventoryUnit-attributesByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "InventoryUnit-attributesByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-attributesByIdPatch"
        ],
        "resource": [
          "unitattribute"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/inventory/v1/unit-attributes/{id}",
        "body": "={{JSON.parse($parameter[\"InventoryUnit-attributesByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "InventoryUnit-attributesByIdHead_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-attributesByIdHead"
        ],
        "resource": [
          "unitattribute"
        ]
      }
    },
    "default": "",
    "description": "The id of the unit attribute.",
    "routing": {
      "request": {
        "method": "HEAD",
        "url": "/inventory/v1/unit-attributes/={{$parameter[\"InventoryUnit-attributesByIdHead_id\"]}}"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "InventoryUnit-attributesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-attributesGet"
        ],
        "resource": [
          "unitattribute"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "InventoryUnit-attributesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-attributesGet"
        ],
        "resource": [
          "unitattribute"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "InventoryUnit-attributesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-attributesPost"
        ],
        "resource": [
          "unitattribute"
        ]
      }
    },
    "default": "{\n  \"name\": \"Floor 1\",\n  \"description\": \"Floor number\"\n}",
    "description": "The unit attribute.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/inventory/v1/unit-attributes",
        "body": "={{JSON.parse($parameter[\"InventoryUnit-attributesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "InventoryUnit-attributesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-attributesPost"
        ],
        "resource": [
          "unitattribute"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "InventoryUnit-groupsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsPost"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "{\n  \"code\": \"DBL\",\n  \"propertyId\": \"MUC\",\n  \"name\": {\n    \"en\": \"Double Room\",\n    \"de\": \"Doppelzimmer\"\n  },\n  \"description\": {\n    \"en\": \"This is a nice room with as kingsize bed and flat screen\",\n    \"de\": \"Dies ist ein schönes Zimmer mit Kingsize-Bett und Flachbildschirm\"\n  },\n  \"maxPersons\": 4,\n  \"rank\": 1,\n  \"type\": \"BedRoom\"\n}",
    "description": "The definition of the unit group.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/inventory/v1/unit-groups",
        "body": "={{JSON.parse($parameter[\"InventoryUnit-groupsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "InventoryUnit-groupsPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsPost"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "InventoryUnit-groupsGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsGet"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "",
    "description": "Return unit groups for specific property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Unit Group Types",
    "name": "InventoryUnit-groupsGet_unitGroupTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsGet"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "",
    "description": "The unitGroupTypes parameter",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupTypesValues",
        "displayName": "Unit Group Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The unitGroupTypes value"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "InventoryUnit-groupsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsGet"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "InventoryUnit-groupsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsGet"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "InventoryUnit-groupsGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsGet"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Id",
    "name": "InventoryUnit-groups$countGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groups$countGet"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "",
    "description": "Return unit groups for specific property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Unit Group Types",
    "name": "InventoryUnit-groups$countGet_unitGroupTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groups$countGet"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "",
    "description": "The unitGroupTypes parameter",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupTypesValues",
        "displayName": "Unit Group Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The unitGroupTypes value"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "InventoryUnit-groupsByIdHead_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsByIdHead"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "",
    "description": "The id of the unit group.",
    "routing": {
      "request": {
        "method": "HEAD",
        "url": "/inventory/v1/unit-groups/={{$parameter[\"InventoryUnit-groupsByIdHead_id\"]}}"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "InventoryUnit-groupsByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsByIdGet"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "",
    "description": "The id of the unit group.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/inventory/v1/unit-groups/={{$parameter[\"InventoryUnit-groupsByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Languages",
    "name": "InventoryUnit-groupsByIdGet_languages",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsByIdGet"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "",
    "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)",
    "routing": {
      "send": {
        "type": "query",
        "property": "languages"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "languagesValues",
        "displayName": "Languages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Expand",
    "name": "InventoryUnit-groupsByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsByIdGet"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "InventoryUnit-groupsByIdPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsByIdPut"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "",
    "description": "The id of the unit group.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/inventory/v1/unit-groups/={{$parameter[\"InventoryUnit-groupsByIdPut_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "InventoryUnit-groupsByIdPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "InventoryUnit-groupsByIdPut"
        ],
        "resource": [
          "unitgroup"
        ]
      }
    },
    "default": "{\n  \"name\": {\n    \"en\": \"Double Room\",\n    \"de\": \"Doppelzimmer\"\n  },\n  \"description\": {\n    \"en\": \"This is a nice room with as kingsize bed and flat screen\",\n    \"de\": \"Dies ist ein schönes Zimmer mit Kingsize-Bett und Flachbildschirm\"\n  },\n  \"maxPersons\": 4,\n  \"rank\": 2\n}",
    "description": "The definition of the unit group.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/inventory/v1/unit-groups/{id}",
        "body": "={{JSON.parse($parameter[\"InventoryUnit-groupsByIdPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Reservation Ids",
    "name": "LogsBookingReservationGet_reservationIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsBookingReservationGet"
        ],
        "resource": [
          "bookinglogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by reservation IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "reservationIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "reservationIdsValues",
        "displayName": "Reservation Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by reservation IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Event Types",
    "name": "LogsBookingReservationGet_eventTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsBookingReservationGet"
        ],
        "resource": [
          "bookinglogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by event types.",
    "routing": {
      "send": {
        "type": "query",
        "property": "eventTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "eventTypesValues",
        "displayName": "Event Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by event types."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Client Ids",
    "name": "LogsBookingReservationGet_clientIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsBookingReservationGet"
        ],
        "resource": [
          "bookinglogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by client IDs (which application triggered this event)",
    "routing": {
      "send": {
        "type": "query",
        "property": "clientIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "clientIdsValues",
        "displayName": "Client Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by client IDs (which application triggered this event)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Ids",
    "name": "LogsBookingReservationGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsBookingReservationGet"
        ],
        "resource": [
          "bookinglogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by property IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by property IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Subject Ids",
    "name": "LogsBookingReservationGet_subjectIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsBookingReservationGet"
        ],
        "resource": [
          "bookinglogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by subject IDs (which user triggered this event)",
    "routing": {
      "send": {
        "type": "query",
        "property": "subjectIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "subjectIdsValues",
        "displayName": "Subject Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by subject IDs (which user triggered this event)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Date Filter",
    "name": "LogsBookingReservationGet_dateFilter",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsBookingReservationGet"
        ],
        "resource": [
          "bookinglogs"
        ]
      }
    },
    "default": "",
    "description": "Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7",
    "routing": {
      "send": {
        "type": "query",
        "property": "dateFilter"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "dateFilterValues",
        "displayName": "Date Filter",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "LogsBookingReservationGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsBookingReservationGet"
        ],
        "resource": [
          "bookinglogs"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "LogsBookingReservationGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsBookingReservationGet"
        ],
        "resource": [
          "bookinglogs"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "LogsBookingReservationGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsBookingReservationGet"
        ],
        "resource": [
          "bookinglogs"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: changes. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: changes. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Folio Ids",
    "name": "LogsFinanceFolioGet_folioIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceFolioGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by folio IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "folioIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "folioIdsValues",
        "displayName": "Folio Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by folio IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Event Types",
    "name": "LogsFinanceFolioGet_eventTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceFolioGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by event types.",
    "routing": {
      "send": {
        "type": "query",
        "property": "eventTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "eventTypesValues",
        "displayName": "Event Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by event types."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Client Ids",
    "name": "LogsFinanceFolioGet_clientIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceFolioGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by client IDs (which application triggered this event)",
    "routing": {
      "send": {
        "type": "query",
        "property": "clientIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "clientIdsValues",
        "displayName": "Client Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by client IDs (which application triggered this event)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Ids",
    "name": "LogsFinanceFolioGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceFolioGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by property IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by property IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Subject Ids",
    "name": "LogsFinanceFolioGet_subjectIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceFolioGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by subject IDs (which user triggered this event)",
    "routing": {
      "send": {
        "type": "query",
        "property": "subjectIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "subjectIdsValues",
        "displayName": "Subject Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by subject IDs (which user triggered this event)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Date Filter",
    "name": "LogsFinanceFolioGet_dateFilter",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceFolioGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7",
    "routing": {
      "send": {
        "type": "query",
        "property": "dateFilter"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "dateFilterValues",
        "displayName": "Date Filter",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "LogsFinanceFolioGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceFolioGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "LogsFinanceFolioGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceFolioGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Statuses",
    "name": "LogsFinanceNight-auditGet_statuses",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceNight-auditGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by status.",
    "routing": {
      "send": {
        "type": "query",
        "property": "statuses"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "statusesValues",
        "displayName": "Statuses",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by status."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Ids",
    "name": "LogsFinanceNight-auditGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceNight-auditGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by property IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by property IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Subject Ids",
    "name": "LogsFinanceNight-auditGet_subjectIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceNight-auditGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by subject IDs (which user triggered this event)",
    "routing": {
      "send": {
        "type": "query",
        "property": "subjectIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "subjectIdsValues",
        "displayName": "Subject Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by subject IDs (which user triggered this event)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Date Filter",
    "name": "LogsFinanceNight-auditGet_dateFilter",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceNight-auditGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7",
    "routing": {
      "send": {
        "type": "query",
        "property": "dateFilter"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "dateFilterValues",
        "displayName": "Date Filter",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "LogsFinanceNight-auditGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceNight-auditGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "LogsFinanceNight-auditGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceNight-auditGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Types",
    "name": "LogsFinanceTransactions-exportGet_types",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceTransactions-exportGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by export log types.",
    "routing": {
      "send": {
        "type": "query",
        "property": "types"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "typesValues",
        "displayName": "Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by export log types."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Ids",
    "name": "LogsFinanceTransactions-exportGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceTransactions-exportGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by property IDs",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by property IDs"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Subject Ids",
    "name": "LogsFinanceTransactions-exportGet_subjectIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceTransactions-exportGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter the log entries by subject IDs (which user triggered this event)",
    "routing": {
      "send": {
        "type": "query",
        "property": "subjectIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "subjectIdsValues",
        "displayName": "Subject Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter the log entries by subject IDs (which user triggered this event)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Date Filter",
    "name": "LogsFinanceTransactions-exportGet_dateFilter",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceTransactions-exportGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7",
    "routing": {
      "send": {
        "type": "query",
        "property": "dateFilter"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "dateFilterValues",
        "displayName": "Date Filter",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "LogsFinanceTransactions-exportGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceTransactions-exportGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "LogsFinanceTransactions-exportGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "LogsFinanceTransactions-exportGet"
        ],
        "resource": [
          "financelogs"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "OperationsMaintenancesGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Filter result by property id",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Unit Id",
    "name": "OperationsMaintenancesGet_unitId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Filter result by unit id",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitId"
      }
    }
  },
  {
    "displayName": "From",
    "name": "OperationsMaintenancesGet_from",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Filter all maintenance windows that end after the specified date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "from"
      }
    }
  },
  {
    "displayName": "To",
    "name": "OperationsMaintenancesGet_to",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Filter all maintenance windows that start before the specified date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "to"
      }
    }
  },
  {
    "displayName": "Types",
    "name": "OperationsMaintenancesGet_types",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Filter result by maintenance types",
    "routing": {
      "send": {
        "type": "query",
        "property": "types"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "typesValues",
        "displayName": "Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by maintenance types"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "OperationsMaintenancesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "OperationsMaintenancesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "OperationsMaintenancesGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: unit. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: unit. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "OperationsMaintenancesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesPost"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "{\n  \"unitId\": \"MUC-JQI\",\n  \"from\": \"2025-08-11T17:56:30+02:00\",\n  \"to\": \"2025-08-13T17:56:30+02:00\",\n  \"type\": \"OutOfService\",\n  \"description\": \"The remote control for the TV needs to be replaced.\"\n}",
    "description": "The definition of the maintenance.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/operations/v1/maintenances",
        "body": "={{JSON.parse($parameter[\"OperationsMaintenancesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "OperationsMaintenancesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesPost"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "OperationsMaintenances$countGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenances$countGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Filter result by property id",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Unit Id",
    "name": "OperationsMaintenances$countGet_unitId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenances$countGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Filter result by unit id",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitId"
      }
    }
  },
  {
    "displayName": "From",
    "name": "OperationsMaintenances$countGet_from",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenances$countGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Filter all maintenance windows that end after the specified date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "from"
      }
    }
  },
  {
    "displayName": "To",
    "name": "OperationsMaintenances$countGet_to",
    "type": "dateTime",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenances$countGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Filter all maintenance windows that start before the specified date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "send": {
        "type": "query",
        "property": "to"
      }
    }
  },
  {
    "displayName": "Types",
    "name": "OperationsMaintenances$countGet_types",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenances$countGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Filter result by maintenance types",
    "routing": {
      "send": {
        "type": "query",
        "property": "types"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "typesValues",
        "displayName": "Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter result by maintenance types"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "OperationsMaintenancesBulkPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesBulkPost"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "{\n  \"maintenances\": [\n    {\n      \"unitId\": \"MUC-JQI\",\n      \"from\": \"2025-08-11T17:56:30+02:00\",\n      \"to\": \"2025-08-13T17:56:30+02:00\",\n      \"type\": \"OutOfService\",\n      \"description\": \"The remote control for the TV needs to be replaced.\"\n    },\n    {\n      \"unitId\": \"MUC-MTA\",\n      \"from\": \"2025-08-11T17:56:30+02:00\",\n      \"to\": \"2025-08-13T17:56:30+02:00\",\n      \"type\": \"OutOfService\",\n      \"description\": \"The remote control for the TV needs to be replaced.\"\n    }\n  ]\n}",
    "description": "The definition of the maintenances.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/operations/v1/maintenances/bulk",
        "body": "={{JSON.parse($parameter[\"OperationsMaintenancesBulkPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "OperationsMaintenancesBulkPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesBulkPost"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "OperationsMaintenancesByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesByIdPatch"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "The ID of the maintenance.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/operations/v1/maintenances/={{$parameter[\"OperationsMaintenancesByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "OperationsMaintenancesByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesByIdPatch"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/operations/v1/maintenances/{id}",
        "body": "={{JSON.parse($parameter[\"OperationsMaintenancesByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "OperationsMaintenancesByIdDelete_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesByIdDelete"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "The ID of the maintenance.",
    "routing": {
      "request": {
        "method": "DELETE",
        "url": "/operations/v1/maintenances/={{$parameter[\"OperationsMaintenancesByIdDelete_id\"]}}"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "OperationsMaintenancesByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesByIdGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "The ID of the maintenance.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/operations/v1/maintenances/={{$parameter[\"OperationsMaintenancesByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "OperationsMaintenancesByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesByIdGet"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: unit. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: unit. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "OperationsMaintenancesByIdHead_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsMaintenancesByIdHead"
        ],
        "resource": [
          "maintenance"
        ]
      }
    },
    "default": "",
    "description": "The ID of the maintenance.",
    "routing": {
      "request": {
        "method": "HEAD",
        "url": "/operations/v1/maintenances/={{$parameter[\"OperationsMaintenancesByIdHead_id\"]}}"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "OperationsNight-auditPut_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsNight-auditPut"
        ],
        "resource": [
          "operations"
        ]
      }
    },
    "default": "",
    "description": "The property the night audit should be performed for",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/operations/v1/night-audit",
        "qs": {
          "propertyId": "={{$parameter[\"OperationsNight-auditPut_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Set Reservations To No Show",
    "name": "OperationsNight-auditPut_setReservationsToNoShow",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsNight-auditPut"
        ],
        "resource": [
          "operations"
        ]
      }
    },
    "default": false,
    "description": "Flag if reservations in the state confirmed, which should have been checked in by now, should be marked as no show.\r\n            \r\nThe default value is true and we strongly advise against setting it to false,\r\nbecause different reports rely on setting reservations which were not checked in correctly to no show.",
    "routing": {
      "send": {
        "type": "query",
        "property": "setReservationsToNoShow"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "OperationsUnits-conditionPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "OperationsUnits-conditionPut"
        ],
        "resource": [
          "operations"
        ]
      }
    },
    "default": "{\n  \"unitsConditions\": [\n    {\n      \"id\": \"UNI-EXA\",\n      \"condition\": \"Clean\"\n    },\n    {\n      \"id\": \"UNI-DBL\",\n      \"condition\": \"Dirty\"\n    }\n  ]\n}",
    "description": "Array of unit Ids with their respective new condition",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/operations/v1/units-condition",
        "body": "={{JSON.parse($parameter[\"OperationsUnits-conditionPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SettingsAge-categoriesByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsAge-categoriesByIdGet"
        ],
        "resource": [
          "agecategory"
        ]
      }
    },
    "default": "",
    "description": "The id of the age category.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/age-categories/={{$parameter[\"SettingsAge-categoriesByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Languages",
    "name": "SettingsAge-categoriesByIdGet_languages",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsAge-categoriesByIdGet"
        ],
        "resource": [
          "agecategory"
        ]
      }
    },
    "default": "",
    "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)",
    "routing": {
      "send": {
        "type": "query",
        "property": "languages"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "languagesValues",
        "displayName": "Languages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "SettingsAge-categoriesByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsAge-categoriesByIdPatch"
        ],
        "resource": [
          "agecategory"
        ]
      }
    },
    "default": "",
    "description": "The id of the age category to be modified.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/age-categories/={{$parameter[\"SettingsAge-categoriesByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsAge-categoriesByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsAge-categoriesByIdPatch"
        ],
        "resource": [
          "agecategory"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/age-categories/{id}",
        "body": "={{JSON.parse($parameter[\"SettingsAge-categoriesByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsAge-categoriesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsAge-categoriesPost"
        ],
        "resource": [
          "agecategory"
        ]
      }
    },
    "default": "{\n  \"code\": \"BABY\",\n  \"propertyId\": \"MUC\",\n  \"name\": {\n    \"en\": \"Baby\",\n    \"de\": \"Kind\"\n  },\n  \"minAge\": 0,\n  \"maxAge\": 2\n}",
    "description": "The definition of the age category.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/settings/v1/age-categories",
        "body": "={{JSON.parse($parameter[\"SettingsAge-categoriesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "SettingsAge-categoriesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsAge-categoriesPost"
        ],
        "resource": [
          "agecategory"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "SettingsAge-categoriesGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsAge-categoriesGet"
        ],
        "resource": [
          "agecategory"
        ]
      }
    },
    "default": "",
    "description": "Return age categories for the specific property",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/age-categories",
        "qs": {
          "propertyId": "={{$parameter[\"SettingsAge-categoriesGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Body",
    "name": "RateplanCancellation-policiesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCancellation-policiesPost"
        ],
        "resource": [
          "cancellationpolicy"
        ]
      }
    },
    "default": "{\n  \"code\": \"FLE\",\n  \"name\": {\n    \"en\": \"Flexible\",\n    \"de\": \"Flexibel\"\n  },\n  \"description\": {\n    \"en\": \"Free cancellation until 36 hours before arrival.\",\n    \"de\": \"Kostenfreies Storno bis 36 Stunden vor Ankunft.\"\n  },\n  \"propertyId\": \"MUC\",\n  \"periodFromReference\": {\n    \"hours\": 12,\n    \"days\": 1\n  },\n  \"reference\": \"PriorToArrival\",\n  \"fee\": {\n    \"vatType\": \"Reduced\",\n    \"percentValue\": {\n      \"percent\": 100,\n      \"limit\": 1,\n      \"includeServiceIds\": [\n        \"MUC-BRK\"\n      ]\n    }\n  }\n}",
    "description": "The definition of the cancellation policy.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/rateplan/v1/cancellation-policies",
        "body": "={{JSON.parse($parameter[\"RateplanCancellation-policiesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "RateplanCancellation-policiesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCancellation-policiesPost"
        ],
        "resource": [
          "cancellationpolicy"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "RateplanCancellation-policiesGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCancellation-policiesGet"
        ],
        "resource": [
          "cancellationpolicy"
        ]
      }
    },
    "default": "",
    "description": "Filter cancellation policies by the specified property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "RateplanCancellation-policiesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCancellation-policiesGet"
        ],
        "resource": [
          "cancellationpolicy"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "RateplanCancellation-policiesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCancellation-policiesGet"
        ],
        "resource": [
          "cancellationpolicy"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "RateplanCancellation-policiesByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCancellation-policiesByIdGet"
        ],
        "resource": [
          "cancellationpolicy"
        ]
      }
    },
    "default": "",
    "description": "The id of the cancellation policy.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/rateplan/v1/cancellation-policies/={{$parameter[\"RateplanCancellation-policiesByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Languages",
    "name": "RateplanCancellation-policiesByIdGet_languages",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCancellation-policiesByIdGet"
        ],
        "resource": [
          "cancellationpolicy"
        ]
      }
    },
    "default": "",
    "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)",
    "routing": {
      "send": {
        "type": "query",
        "property": "languages"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "languagesValues",
        "displayName": "Languages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "RateplanCancellation-policiesByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCancellation-policiesByIdPatch"
        ],
        "resource": [
          "cancellationpolicy"
        ]
      }
    },
    "default": "",
    "description": "The id of the cancellation policy to be modified.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/cancellation-policies/={{$parameter[\"RateplanCancellation-policiesByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "RateplanCancellation-policiesByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCancellation-policiesByIdPatch"
        ],
        "resource": [
          "cancellationpolicy"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/cancellation-policies/{id}",
        "body": "={{JSON.parse($parameter[\"RateplanCancellation-policiesByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Body",
    "name": "RateplanCompaniesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCompaniesPost"
        ],
        "resource": [
          "company"
        ]
      }
    },
    "default": "{\n  \"code\": \"UMBRELLA\",\n  \"propertyId\": \"MUC\",\n  \"name\": \"Umbrella Corp.\",\n  \"invoicingEmail\": \"umbrella@corp.com\",\n  \"taxId\": \"Tax 123456\",\n  \"additionalTaxId\": \"123456789\",\n  \"address\": {\n    \"addressLine1\": \"Marienplatz 1\",\n    \"postalCode\": \"80331\",\n    \"city\": \"München\",\n    \"countryCode\": \"DE\"\n  },\n  \"canCheckOutOnAr\": true,\n  \"ratePlans\": [\n    {\n      \"id\": \"MUC-DBL\",\n      \"corporateCode\": \"UMBRELLAINC\"\n    }\n  ]\n}",
    "description": "The definition of the company.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/rateplan/v1/companies",
        "body": "={{JSON.parse($parameter[\"RateplanCompaniesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "RateplanCompaniesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCompaniesPost"
        ],
        "resource": [
          "company"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "RateplanCompaniesGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCompaniesGet"
        ],
        "resource": [
          "company"
        ]
      }
    },
    "default": "",
    "description": "Filter by the specified property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Rate Plan Ids",
    "name": "RateplanCompaniesGet_ratePlanIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCompaniesGet"
        ],
        "resource": [
          "company"
        ]
      }
    },
    "default": "",
    "description": "Return companies with any of the specified rate plans",
    "routing": {
      "send": {
        "type": "query",
        "property": "ratePlanIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "ratePlanIdsValues",
        "displayName": "Rate Plan Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return companies with any of the specified rate plans"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Corporate Codes",
    "name": "RateplanCompaniesGet_corporateCodes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCompaniesGet"
        ],
        "resource": [
          "company"
        ]
      }
    },
    "default": "",
    "description": "Return companies that have any of the requested corporate codes",
    "routing": {
      "send": {
        "type": "query",
        "property": "corporateCodes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "corporateCodesValues",
        "displayName": "Corporate Codes",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return companies that have any of the requested corporate codes"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Text Search",
    "name": "RateplanCompaniesGet_textSearch",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCompaniesGet"
        ],
        "resource": [
          "company"
        ]
      }
    },
    "default": "",
    "description": "This will filter all companies for the provided free text.\r\nCurrently it only looks up if the company name contains one of the provided values",
    "routing": {
      "send": {
        "type": "query",
        "property": "textSearch"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "RateplanCompaniesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCompaniesGet"
        ],
        "resource": [
          "company"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "RateplanCompaniesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCompaniesGet"
        ],
        "resource": [
          "company"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "RateplanCompaniesByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCompaniesByIdGet"
        ],
        "resource": [
          "company"
        ]
      }
    },
    "default": "",
    "description": "The ID of the company.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/rateplan/v1/companies/={{$parameter[\"RateplanCompaniesByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "RateplanCompaniesByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCompaniesByIdPatch"
        ],
        "resource": [
          "company"
        ]
      }
    },
    "default": "",
    "description": "The ID of the company to be modified.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/companies/={{$parameter[\"RateplanCompaniesByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "RateplanCompaniesByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCompaniesByIdPatch"
        ],
        "resource": [
          "company"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/companies/{id}",
        "body": "={{JSON.parse($parameter[\"RateplanCompaniesByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "RateplanCorporate-codesCodesGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCorporate-codesCodesGet"
        ],
        "resource": [
          "corporatecodes"
        ]
      }
    },
    "default": "",
    "description": "Return codes for a specific property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "RateplanCorporate-codesCodesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCorporate-codesCodesGet"
        ],
        "resource": [
          "corporatecodes"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "RateplanCorporate-codesCodesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanCorporate-codesCodesGet"
        ],
        "resource": [
          "corporatecodes"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "RateplanNo-show-policiesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanNo-show-policiesPost"
        ],
        "resource": [
          "noshowpolicy"
        ]
      }
    },
    "default": "{\n  \"code\": \"NONREF\",\n  \"name\": {\n    \"en\": \"No-Show Fee\",\n    \"de\": \"No-Show Fee\"\n  },\n  \"description\": {\n    \"en\": \"100% of the accommodation fees, for the complete stay.\",\n    \"de\": \"100% of the accommodation fees, for the complete stay.\"\n  },\n  \"propertyId\": \"MUC\",\n  \"fee\": {\n    \"vatType\": \"Null\",\n    \"fixedValue\": {\n      \"amount\": 100,\n      \"currency\": \"EUR\"\n    }\n  }\n}",
    "description": "The definition of the no-show policy.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/rateplan/v1/no-show-policies",
        "body": "={{JSON.parse($parameter[\"RateplanNo-show-policiesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "RateplanNo-show-policiesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanNo-show-policiesPost"
        ],
        "resource": [
          "noshowpolicy"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "RateplanNo-show-policiesGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanNo-show-policiesGet"
        ],
        "resource": [
          "noshowpolicy"
        ]
      }
    },
    "default": "",
    "description": "Filter no-show policies by the specified property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "RateplanNo-show-policiesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanNo-show-policiesGet"
        ],
        "resource": [
          "noshowpolicy"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "RateplanNo-show-policiesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanNo-show-policiesGet"
        ],
        "resource": [
          "noshowpolicy"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "RateplanNo-show-policiesByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanNo-show-policiesByIdGet"
        ],
        "resource": [
          "noshowpolicy"
        ]
      }
    },
    "default": "",
    "description": "The id of the no-show policy.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/rateplan/v1/no-show-policies/={{$parameter[\"RateplanNo-show-policiesByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Languages",
    "name": "RateplanNo-show-policiesByIdGet_languages",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanNo-show-policiesByIdGet"
        ],
        "resource": [
          "noshowpolicy"
        ]
      }
    },
    "default": "",
    "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)",
    "routing": {
      "send": {
        "type": "query",
        "property": "languages"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "languagesValues",
        "displayName": "Languages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "RateplanNo-show-policiesByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanNo-show-policiesByIdPatch"
        ],
        "resource": [
          "noshowpolicy"
        ]
      }
    },
    "default": "",
    "description": "The id of the no-show policy to be modified.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/no-show-policies/={{$parameter[\"RateplanNo-show-policiesByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "RateplanNo-show-policiesByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanNo-show-policiesByIdPatch"
        ],
        "resource": [
          "noshowpolicy"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/no-show-policies/{id}",
        "body": "={{JSON.parse($parameter[\"RateplanNo-show-policiesByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "RateplanPromo-codesCodesGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanPromo-codesCodesGet"
        ],
        "resource": [
          "promocodes"
        ]
      }
    },
    "default": "",
    "description": "Return codes for a specific property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "RateplanPromo-codesCodesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanPromo-codesCodesGet"
        ],
        "resource": [
          "promocodes"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "RateplanPromo-codesCodesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanPromo-codesCodesGet"
        ],
        "resource": [
          "promocodes"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "RateplanRate-plansByIdRatesGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansByIdRatesGet"
        ],
        "resource": [
          "rate"
        ]
      }
    },
    "default": "",
    "description": "The id of the rate plan.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/rateplan/v1/rate-plans/={{$parameter[\"RateplanRate-plansByIdRatesGet_id\"]}}/rates"
      }
    }
  },
  {
    "displayName": "From",
    "name": "RateplanRate-plansByIdRatesGet_from",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansByIdRatesGet"
        ],
        "resource": [
          "rate"
        ]
      }
    },
    "default": "",
    "description": "The start of the time range to filter the rates by. All rates where the from date and time is equal or later than\r\nthe specified date and optional time will be affected<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/rateplan/v1/rate-plans/{id}/rates",
        "qs": {
          "from": "={{$parameter[\"RateplanRate-plansByIdRatesGet_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "RateplanRate-plansByIdRatesGet_to",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansByIdRatesGet"
        ],
        "resource": [
          "rate"
        ]
      }
    },
    "default": "",
    "description": "The end of the time range to filter the rates by. All rates where the from date and time is earlier than\r\nthe specified date and optional time will be affected<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/rateplan/v1/rate-plans/{id}/rates",
        "qs": {
          "to": "={{$parameter[\"RateplanRate-plansByIdRatesGet_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "RateplanRate-plansByIdRatesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansByIdRatesGet"
        ],
        "resource": [
          "rate"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "RateplanRate-plansByIdRatesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansByIdRatesGet"
        ],
        "resource": [
          "rate"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "RateplanRate-plansByIdRatesPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansByIdRatesPut"
        ],
        "resource": [
          "rate"
        ]
      }
    },
    "default": "",
    "description": "The id of the rate plan.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/rateplan/v1/rate-plans/={{$parameter[\"RateplanRate-plansByIdRatesPut_id\"]}}/rates"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "RateplanRate-plansByIdRatesPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansByIdRatesPut"
        ],
        "resource": [
          "rate"
        ]
      }
    },
    "default": "{\n  \"rates\": [\n    {\n      \"from\": \"2025-08-11T17:00:00+02:00\",\n      \"to\": \"2025-08-12T11:00:00+02:00\",\n      \"price\": {\n        \"amount\": 123.5,\n        \"currency\": \"EUR\"\n      },\n      \"restrictions\": {\n        \"minLengthOfStay\": 1,\n        \"maxLengthOfStay\": 30,\n        \"closed\": false,\n        \"closedOnArrival\": true,\n        \"closedOnDeparture\": true\n      }\n    }\n  ]\n}",
    "description": "The definition of the rates.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/rateplan/v1/rate-plans/{id}/rates",
        "body": "={{JSON.parse($parameter[\"RateplanRate-plansByIdRatesPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Rate Plan Ids",
    "name": "RateplanRatesPatch_ratePlanIds",
    "type": "fixedCollection",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRatesPatch"
        ],
        "resource": [
          "rate"
        ]
      }
    },
    "default": "",
    "description": "Filter rates for patching by rate plan ids",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/rates",
        "qs": {
          "ratePlanIds": "={{$parameter[\"RateplanRatesPatch_ratePlanIds\"]}}"
        }
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "ratePlanIdsValues",
        "displayName": "Rate Plan Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Filter rates for patching by rate plan ids"
          }
        ]
      }
    ]
  },
  {
    "displayName": "From",
    "name": "RateplanRatesPatch_from",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRatesPatch"
        ],
        "resource": [
          "rate"
        ]
      }
    },
    "default": "",
    "description": "The start of the time range to filter the rates by. All rates where the from date and time is equal or later than\r\nthe specified date and optional time will be affected<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/rates",
        "qs": {
          "from": "={{$parameter[\"RateplanRatesPatch_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "RateplanRatesPatch_to",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRatesPatch"
        ],
        "resource": [
          "rate"
        ]
      }
    },
    "default": "",
    "description": "The end of the time range to filter the rates by. All rates where the from date and time is earlier than\r\nthe specified date and optional time will be affected<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/rates",
        "qs": {
          "to": "={{$parameter[\"RateplanRatesPatch_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Body",
    "name": "RateplanRatesPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRatesPatch"
        ],
        "resource": [
          "rate"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/rates",
        "body": "={{JSON.parse($parameter[\"RateplanRatesPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Week Days",
    "name": "RateplanRatesPatch_weekDays",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRatesPatch"
        ],
        "resource": [
          "rate"
        ]
      }
    },
    "default": "",
    "description": "The weekdays that will be patched. If not specified, all weekdays will be patched.",
    "routing": {
      "send": {
        "type": "query",
        "property": "weekDays"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "weekDaysValues",
        "displayName": "Week Days",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The weekdays that will be patched. If not specified, all weekdays will be patched."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Id",
    "name": "RateplanRate-plansGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans for the specific property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Rate Plan Codes",
    "name": "RateplanRate-plansGet_ratePlanCodes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans filtered by requested codes",
    "routing": {
      "send": {
        "type": "query",
        "property": "ratePlanCodes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "ratePlanCodesValues",
        "displayName": "Rate Plan Codes",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return rate plans filtered by requested codes"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Included Service Ids",
    "name": "RateplanRate-plansGet_includedServiceIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans that have any of the requested included services",
    "routing": {
      "send": {
        "type": "query",
        "property": "includedServiceIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "includedServiceIdsValues",
        "displayName": "Included Service Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return rate plans that have any of the requested included services"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Channel Codes",
    "name": "RateplanRate-plansGet_channelCodes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans that are sold though any of the specified channels",
    "routing": {
      "send": {
        "type": "query",
        "property": "channelCodes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "channelCodesValues",
        "displayName": "Channel Codes",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return rate plans that are sold though any of the specified channels"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Promo Codes",
    "name": "RateplanRate-plansGet_promoCodes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans that have any of the requested promo codes",
    "routing": {
      "send": {
        "type": "query",
        "property": "promoCodes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "promoCodesValues",
        "displayName": "Promo Codes",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return rate plans that have any of the requested promo codes"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Company Ids",
    "name": "RateplanRate-plansGet_companyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans filtered by requested companies",
    "routing": {
      "send": {
        "type": "query",
        "property": "companyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "companyIdsValues",
        "displayName": "Company Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return rate plans filtered by requested companies"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Base Rate Plan Ids",
    "name": "RateplanRate-plansGet_baseRatePlanIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans derived from any of the specified rate plans",
    "routing": {
      "send": {
        "type": "query",
        "property": "baseRatePlanIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "baseRatePlanIdsValues",
        "displayName": "Base Rate Plan Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return rate plans derived from any of the specified rate plans"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Ids",
    "name": "RateplanRate-plansGet_unitGroupIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans with any of the specified unit groups",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupIdsValues",
        "displayName": "Unit Group Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return rate plans with any of the specified unit groups"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Time Slice Definition Ids",
    "name": "RateplanRate-plansGet_timeSliceDefinitionIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans with any of the specified time slice definitions",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceDefinitionIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "timeSliceDefinitionIdsValues",
        "displayName": "Time Slice Definition Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return rate plans with any of the specified time slice definitions"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Types",
    "name": "RateplanRate-plansGet_unitGroupTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans with any of the specified unit group types",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupTypesValues",
        "displayName": "Unit Group Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return rate plans with any of the specified unit group types"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Time Slice Template",
    "name": "RateplanRate-plansGet_timeSliceTemplate",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "The time slice template, defaults to 'over night'",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceTemplate"
      }
    },
    "options": [
      {
        "name": "DayUse",
        "value": "DayUse"
      },
      {
        "name": "OverNight",
        "value": "OverNight"
      }
    ]
  },
  {
    "displayName": "Min Guarantee Types",
    "name": "RateplanRate-plansGet_minGuaranteeTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans with any of the specified min guarantee types",
    "routing": {
      "send": {
        "type": "query",
        "property": "minGuaranteeTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "minGuaranteeTypesValues",
        "displayName": "Min Guarantee Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return rate plans with any of the specified min guarantee types"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Cancellation Policy Ids",
    "name": "RateplanRate-plansGet_cancellationPolicyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans with any of the specified cancellation policies",
    "routing": {
      "send": {
        "type": "query",
        "property": "cancellationPolicyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "cancellationPolicyIdsValues",
        "displayName": "Cancellation Policy Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return rate plans with any of the specified cancellation policies"
          }
        ]
      }
    ]
  },
  {
    "displayName": "No Show Policy Ids",
    "name": "RateplanRate-plansGet_noShowPolicyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Return rate plans with any of the specified no-show policies",
    "routing": {
      "send": {
        "type": "query",
        "property": "noShowPolicyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "noShowPolicyIdsValues",
        "displayName": "No Show Policy Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return rate plans with any of the specified no-show policies"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Is Derived",
    "name": "RateplanRate-plansGet_isDerived",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": false,
    "description": "Return only derived or base rate plans",
    "routing": {
      "send": {
        "type": "query",
        "property": "isDerived"
      }
    }
  },
  {
    "displayName": "Derivation Level Filter",
    "name": "RateplanRate-plansGet_derivationLevelFilter",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "This will filter rate plans based on their derivation level.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7",
    "routing": {
      "send": {
        "type": "query",
        "property": "derivationLevelFilter"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "derivationLevelFilterValues",
        "displayName": "Derivation Level Filter",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "This will filter rate plans based on their derivation level.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "RateplanRate-plansGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "RateplanRate-plansGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "RateplanRate-plansGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, cancellationPolicy, services, bookingPeriods, surcharges, ageCategories. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, cancellationPolicy, services, bookingPeriods, surcharges, ageCategories. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "RateplanRate-plansPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansPost"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "{\n  \"code\": \"NONREF\",\n  \"propertyId\": \"MUC\",\n  \"unitGroupId\": \"MUC-DBL\",\n  \"cancellationPolicyId\": \"MUC-FLE\",\n  \"channelCodes\": [\n    \"Direct\",\n    \"BookingCom\",\n    \"Ibe\"\n  ],\n  \"promoCodes\": [\n    \"APA55100\",\n    \"DISCOUNT20\"\n  ],\n  \"isSubjectToCityTax\": true,\n  \"timeSliceDefinitionId\": \"MUC-NIGHT\",\n  \"name\": {\n    \"de\": \"Nicht Stornierbar\",\n    \"en\": \"Non Refundable\"\n  },\n  \"description\": {\n    \"de\": \"Nicht Stornierbar\",\n    \"en\": \"Non Refundable\"\n  },\n  \"minGuaranteeType\": \"PM6Hold\",\n  \"priceCalculationMode\": \"Truncate\",\n  \"bookingPeriods\": [\n    {\n      \"from\": \"2025-08-04T17:56:30.7283391+02:00\",\n      \"to\": \"2025-08-18T17:56:30.7283391+02:00\"\n    },\n    {\n      \"from\": \"2025-08-21T17:56:30.7283391+02:00\",\n      \"to\": \"2025-10-10T17:56:30.7283391+02:00\"\n    }\n  ],\n  \"restrictions\": {\n    \"minAdvance\": {\n      \"hours\": 12,\n      \"days\": 180\n    },\n    \"maxAdvance\": {\n      \"months\": 24\n    }\n  },\n  \"pricingRule\": {\n    \"baseRatePlanId\": \"MUC-NONREF-SGL\",\n    \"type\": \"Absolute\",\n    \"value\": 20\n  },\n  \"surcharges\": [\n    {\n      \"adults\": 2,\n      \"type\": \"Absolute\",\n      \"value\": 10\n    }\n  ],\n  \"ageCategories\": [\n    {\n      \"id\": \"MUC-BABY\",\n      \"surcharges\": [\n        {\n          \"adults\": 1,\n          \"value\": 20\n        }\n      ]\n    }\n  ],\n  \"includedServices\": [\n    {\n      \"serviceId\": \"MUC-BRKF\",\n      \"grossPrice\": {\n        \"amount\": 10,\n        \"currency\": \"EUR\"\n      }\n    }\n  ],\n  \"companies\": [\n    {\n      \"id\": \"MUC-APA\",\n      \"corporateCode\": \"APA-DBL\"\n    }\n  ],\n  \"accountingConfigs\": [\n    {\n      \"state\": \"Unknown\",\n      \"vatType\": \"Normal\",\n      \"serviceType\": \"FoodAndBeverages\",\n      \"subAccountId\": \"ALCO\",\n      \"validFrom\": \"2021-01-01\"\n    }\n  ]\n}",
    "description": "The definition of the rate plan.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/rateplan/v1/rate-plans",
        "body": "={{JSON.parse($parameter[\"RateplanRate-plansPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "RateplanRate-plansPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansPost"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Rate Plan Ids",
    "name": "RateplanRate-plansPatch_ratePlanIds",
    "type": "fixedCollection",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansPatch"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Comma separated list of rate plan IDs, at least one.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/rate-plans",
        "qs": {
          "ratePlanIds": "={{$parameter[\"RateplanRate-plansPatch_ratePlanIds\"]}}"
        }
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "ratePlanIdsValues",
        "displayName": "Rate Plan Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Comma separated list of rate plan IDs, at least one."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "RateplanRate-plansPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansPatch"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/rate-plans",
        "body": "={{JSON.parse($parameter[\"RateplanRate-plansPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "RateplanRate-plansByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansByIdGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "The id of the rate plan.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/rateplan/v1/rate-plans/={{$parameter[\"RateplanRate-plansByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Languages",
    "name": "RateplanRate-plansByIdGet_languages",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansByIdGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)",
    "routing": {
      "send": {
        "type": "query",
        "property": "languages"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "languagesValues",
        "displayName": "Languages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Expand",
    "name": "RateplanRate-plansByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansByIdGet"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, cancellationPolicy. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, cancellationPolicy. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "RateplanRate-plansByIdPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansByIdPut"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "",
    "description": "The id of the rate plan.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/rateplan/v1/rate-plans/={{$parameter[\"RateplanRate-plansByIdPut_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "RateplanRate-plansByIdPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanRate-plansByIdPut"
        ],
        "resource": [
          "rateplan"
        ]
      }
    },
    "default": "{\n  \"name\": {\n    \"de\": \"Nicht Stornierbar\",\n    \"en\": \"Non Refundable\"\n  },\n  \"description\": {\n    \"de\": \"Nicht Stornierbar\",\n    \"en\": \"Non Refundable\"\n  },\n  \"minGuaranteeType\": \"PM6Hold\",\n  \"priceCalculationMode\": \"Truncate\",\n  \"channelCodes\": [\n    \"Direct\",\n    \"BookingCom\",\n    \"Ibe\"\n  ],\n  \"cancellationPolicyId\": \"MUC-NONREF\",\n  \"bookingPeriods\": [\n    {\n      \"from\": \"2025-08-04T17:56:30.7283391+02:00\",\n      \"to\": \"2025-08-18T17:56:30.7283391+02:00\"\n    },\n    {\n      \"from\": \"2025-08-21T17:56:30.7283391+02:00\",\n      \"to\": \"2025-10-10T17:56:30.7283391+02:00\"\n    }\n  ],\n  \"restrictions\": {\n    \"minAdvance\": {\n      \"hours\": 12,\n      \"days\": 180\n    },\n    \"maxAdvance\": {\n      \"months\": 24\n    }\n  },\n  \"includedServices\": [\n    {\n      \"serviceId\": \"MUC-BRKF\",\n      \"grossPrice\": {\n        \"amount\": 10,\n        \"currency\": \"EUR\"\n      }\n    },\n    {\n      \"serviceId\": \"MUC-WLAN\",\n      \"grossPrice\": {\n        \"amount\": 5,\n        \"currency\": \"EUR\"\n      }\n    }\n  ],\n  \"companies\": [\n    {\n      \"id\": \"MUC-APA\",\n      \"corporateCode\": \"APA-DBL\"\n    }\n  ],\n  \"pricingRule\": {\n    \"baseRatePlanId\": \"MUC-NONREF-SGL\",\n    \"type\": \"Absolute\",\n    \"value\": 20\n  },\n  \"surcharges\": [\n    {\n      \"adults\": 2,\n      \"type\": \"Percent\",\n      \"value\": 10\n    }\n  ],\n  \"ageCategories\": [\n    {\n      \"id\": \"MUC-BABY\",\n      \"surcharges\": [\n        {\n          \"adults\": 1,\n          \"value\": 10\n        }\n      ]\n    },\n    {\n      \"id\": \"MUC-CHILD\",\n      \"surcharges\": [\n        {\n          \"adults\": 1,\n          \"value\": 40\n        }\n      ]\n    }\n  ]\n}",
    "description": "The definition of the rate plan.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/rateplan/v1/rate-plans/{id}",
        "body": "={{JSON.parse($parameter[\"RateplanRate-plansByIdPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Body",
    "name": "RateplanServicesPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesPost"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "{\n  \"code\": \"BRK\",\n  \"name\": {\n    \"en\": \"Breakfast\",\n    \"de\": \"Frühstück\"\n  },\n  \"description\": {\n    \"en\": \"Yummy yummy breakfast\",\n    \"de\": \"Leckeres Frühstück\"\n  },\n  \"propertyId\": \"MUC\",\n  \"defaultGrossPrice\": {\n    \"amount\": 20,\n    \"currency\": \"EUR\"\n  },\n  \"pricingUnit\": \"Person\",\n  \"postNextDay\": true,\n  \"availability\": {\n    \"mode\": \"Daily\",\n    \"quantity\": 3,\n    \"daysOfWeek\": [\n      \"Monday\",\n      \"Tuesday\",\n      \"Wednesday\",\n      \"Thursday\",\n      \"Friday\",\n      \"Saturday\",\n      \"Sunday\"\n    ]\n  },\n  \"channelCodes\": [\n    \"Direct\",\n    \"Ibe\",\n    \"BookingCom\",\n    \"ChannelManager\"\n  ],\n  \"accountingConfigs\": [\n    {\n      \"state\": \"Unknown\",\n      \"vatType\": \"Normal\",\n      \"serviceType\": \"FoodAndBeverages\",\n      \"subAccountId\": \"ALCO\",\n      \"validFrom\": \"2021-01-01\"\n    }\n  ],\n  \"ageCategoryId\": \"MUC-BABY\"\n}",
    "description": "The definition of the service.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/rateplan/v1/services",
        "body": "={{JSON.parse($parameter[\"RateplanServicesPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "RateplanServicesPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesPost"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "RateplanServicesGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesGet"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "",
    "description": "Filter services by the specified property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Text Search",
    "name": "RateplanServicesGet_textSearch",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesGet"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "",
    "description": "This will filter all services for the provided free text.\r\nCurrently it only looks up if the service name contains one of the provided values.",
    "routing": {
      "send": {
        "type": "query",
        "property": "textSearch"
      }
    }
  },
  {
    "displayName": "Only Sold As Extras",
    "name": "RateplanServicesGet_onlySoldAsExtras",
    "type": "boolean",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesGet"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": false,
    "description": "If set to true, return only services that can be sold as extras. Otherwise, it returns both, extras, and include-only.",
    "routing": {
      "send": {
        "type": "query",
        "property": "onlySoldAsExtras"
      }
    }
  },
  {
    "displayName": "Channel Codes",
    "name": "RateplanServicesGet_channelCodes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesGet"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "",
    "description": "The channel codes the service is sold through",
    "routing": {
      "send": {
        "type": "query",
        "property": "channelCodes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "channelCodesValues",
        "displayName": "Channel Codes",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The channel codes the service is sold through"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Service Types",
    "name": "RateplanServicesGet_serviceTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesGet"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "",
    "description": "The service types offered",
    "routing": {
      "send": {
        "type": "query",
        "property": "serviceTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "serviceTypesValues",
        "displayName": "Service Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The service types offered"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "RateplanServicesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesGet"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "RateplanServicesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesGet"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "RateplanServicesGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesGet"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "RateplanServicesByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesByIdPatch"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "",
    "description": "The id of the service.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/services/={{$parameter[\"RateplanServicesByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "RateplanServicesByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesByIdPatch"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/rateplan/v1/services/{id}",
        "body": "={{JSON.parse($parameter[\"RateplanServicesByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "RateplanServicesByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesByIdGet"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "",
    "description": "The id of the service.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/rateplan/v1/services/={{$parameter[\"RateplanServicesByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Languages",
    "name": "RateplanServicesByIdGet_languages",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesByIdGet"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "",
    "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)",
    "routing": {
      "send": {
        "type": "query",
        "property": "languages"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "languagesValues",
        "displayName": "Languages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Expand",
    "name": "RateplanServicesByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "RateplanServicesByIdGet"
        ],
        "resource": [
          "service"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Id",
    "name": "ReportsReportsOrdered-servicesGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsOrdered-servicesGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "Property Id",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/ordered-services",
        "qs": {
          "propertyId": "={{$parameter[\"ReportsReportsOrdered-servicesGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Service Ids",
    "name": "ReportsReportsOrdered-servicesGet_serviceIds",
    "type": "fixedCollection",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsOrdered-servicesGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "Service ids the report should be generated for",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/ordered-services",
        "qs": {
          "serviceIds": "={{$parameter[\"ReportsReportsOrdered-servicesGet_serviceIds\"]}}"
        }
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "serviceIdsValues",
        "displayName": "Service Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Service ids the report should be generated for"
          }
        ]
      }
    ]
  },
  {
    "displayName": "From",
    "name": "ReportsReportsOrdered-servicesGet_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsOrdered-servicesGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start date of the interval.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/ordered-services",
        "qs": {
          "from": "={{$parameter[\"ReportsReportsOrdered-servicesGet_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "ReportsReportsOrdered-servicesGet_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsOrdered-servicesGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The exclusive end date of the interval.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/ordered-services",
        "qs": {
          "to": "={{$parameter[\"ReportsReportsOrdered-servicesGet_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "ReportsReportsArrivalsGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsArrivalsGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "Requested property.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/arrivals",
        "qs": {
          "propertyId": "={{$parameter[\"ReportsReportsArrivalsGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Month",
    "name": "ReportsReportsArrivalsGet_month",
    "type": "number",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsArrivalsGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "Requested month for the report.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/arrivals",
        "qs": {
          "month": "={{$parameter[\"ReportsReportsArrivalsGet_month\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Year",
    "name": "ReportsReportsArrivalsGet_year",
    "type": "number",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsArrivalsGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "Requested year for the report.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/arrivals",
        "qs": {
          "year": "={{$parameter[\"ReportsReportsArrivalsGet_year\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "ReportsReportsProperty-performanceGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsProperty-performanceGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The ID of the property",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/property-performance",
        "qs": {
          "propertyId": "={{$parameter[\"ReportsReportsProperty-performanceGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "From",
    "name": "ReportsReportsProperty-performanceGet_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsProperty-performanceGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start date of the interval",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/property-performance",
        "qs": {
          "from": "={{$parameter[\"ReportsReportsProperty-performanceGet_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "ReportsReportsProperty-performanceGet_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsProperty-performanceGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The inclusive end date of the interval",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/property-performance",
        "qs": {
          "to": "={{$parameter[\"ReportsReportsProperty-performanceGet_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Company Ids",
    "name": "ReportsReportsProperty-performanceGet_companyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsProperty-performanceGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The company IDs used to filter the retrieved data",
    "routing": {
      "send": {
        "type": "query",
        "property": "companyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "companyIdsValues",
        "displayName": "Company Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The company IDs used to filter the retrieved data"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Rate Plan Ids",
    "name": "ReportsReportsProperty-performanceGet_ratePlanIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsProperty-performanceGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The rate plan IDs used to filter the retrieved data",
    "routing": {
      "send": {
        "type": "query",
        "property": "ratePlanIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "ratePlanIdsValues",
        "displayName": "Rate Plan Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The rate plan IDs used to filter the retrieved data"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Types",
    "name": "ReportsReportsProperty-performanceGet_unitGroupTypes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsProperty-performanceGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The unit group types used to filter the retrieved data",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupTypes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupTypesValues",
        "displayName": "Unit Group Types",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The unit group types used to filter the retrieved data"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Unit Group Ids",
    "name": "ReportsReportsProperty-performanceGet_unitGroupIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsProperty-performanceGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The unit group IDs used to filter the retrieved data",
    "routing": {
      "send": {
        "type": "query",
        "property": "unitGroupIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "unitGroupIdsValues",
        "displayName": "Unit Group Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The unit group IDs used to filter the retrieved data"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Time Slice Definition Ids",
    "name": "ReportsReportsProperty-performanceGet_timeSliceDefinitionIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsProperty-performanceGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The time slice definition IDs used to filter the retrieved data",
    "routing": {
      "send": {
        "type": "query",
        "property": "timeSliceDefinitionIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "timeSliceDefinitionIdsValues",
        "displayName": "Time Slice Definition Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The time slice definition IDs used to filter the retrieved data"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Channel Codes",
    "name": "ReportsReportsProperty-performanceGet_channelCodes",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsProperty-performanceGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The channel codes used to filter the retrieved data",
    "routing": {
      "send": {
        "type": "query",
        "property": "channelCodes"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "channelCodesValues",
        "displayName": "Channel Codes",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The channel codes used to filter the retrieved data"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Market Segment Ids",
    "name": "ReportsReportsProperty-performanceGet_marketSegmentIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsProperty-performanceGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The market segment IDs used to filter the retrieved data",
    "routing": {
      "send": {
        "type": "query",
        "property": "marketSegmentIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "marketSegmentIdsValues",
        "displayName": "Market Segment Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The market segment IDs used to filter the retrieved data"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Travel Purpose",
    "name": "ReportsReportsProperty-performanceGet_travelPurpose",
    "type": "options",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsProperty-performanceGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The travel purpose to filter the retrieved data",
    "routing": {
      "send": {
        "type": "query",
        "property": "travelPurpose"
      }
    },
    "options": [
      {
        "name": "Business",
        "value": "Business"
      },
      {
        "name": "Leisure",
        "value": "Leisure"
      }
    ]
  },
  {
    "displayName": "Expand",
    "name": "ReportsReportsProperty-performanceGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsProperty-performanceGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: businessDays. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: businessDays. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Id",
    "name": "ReportsReportsCompany-invoices-vatGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsCompany-invoices-vatGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "Property ID",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/company-invoices-vat",
        "qs": {
          "propertyId": "={{$parameter[\"ReportsReportsCompany-invoices-vatGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Company Ids",
    "name": "ReportsReportsCompany-invoices-vatGet_companyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsCompany-invoices-vatGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "Company IDs the report should be generated for",
    "routing": {
      "send": {
        "type": "query",
        "property": "companyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "companyIdsValues",
        "displayName": "Company Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Company IDs the report should be generated for"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Date Filter",
    "name": "ReportsReportsCompany-invoices-vatGet_dateFilter",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsCompany-invoices-vatGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "Set a date interval to get the report for. Cannot be more than 1 month.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7",
    "routing": {
      "send": {
        "type": "query",
        "property": "dateFilter"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "dateFilterValues",
        "displayName": "Date Filter",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Set a date interval to get the report for. Cannot be more than 1 month.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Id",
    "name": "ReportsReportsRevenuesGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsRevenuesGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "Property ID",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/revenues",
        "qs": {
          "propertyId": "={{$parameter[\"ReportsReportsRevenuesGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "From",
    "name": "ReportsReportsRevenuesGet_from",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsRevenuesGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The inclusive start date of the interval.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/revenues",
        "qs": {
          "from": "={{$parameter[\"ReportsReportsRevenuesGet_from\"]}}"
        }
      }
    }
  },
  {
    "displayName": "To",
    "name": "ReportsReportsRevenuesGet_to",
    "type": "dateTime",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsRevenuesGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The exclusive end date of the interval. The interval is limited to one year.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/reports/v1/reports/revenues",
        "qs": {
          "to": "={{$parameter[\"ReportsReportsRevenuesGet_to\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Language Code",
    "name": "ReportsReportsRevenuesGet_languageCode",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "ReportsReportsRevenuesGet"
        ],
        "resource": [
          "reports"
        ]
      }
    },
    "default": "",
    "description": "The language for the the report",
    "routing": {
      "send": {
        "type": "query",
        "property": "languageCode"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "SettingsCapture-policiesGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCapture-policiesGet"
        ],
        "resource": [
          "capturepolicies"
        ]
      }
    },
    "default": "",
    "description": "Filter capture policies by the specified property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "SettingsCapture-policiesGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCapture-policiesGet"
        ],
        "resource": [
          "capturepolicies"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "SettingsCapture-policiesGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCapture-policiesGet"
        ],
        "resource": [
          "capturepolicies"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SettingsCapture-policiesByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCapture-policiesByIdGet"
        ],
        "resource": [
          "capturepolicies"
        ]
      }
    },
    "default": "",
    "description": "The ID of the capture policy.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/capture-policies/={{$parameter[\"SettingsCapture-policiesByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SettingsCapture-policiesByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCapture-policiesByIdPatch"
        ],
        "resource": [
          "capturepolicies"
        ]
      }
    },
    "default": "",
    "description": "The id of the capture policy to be modified.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/capture-policies/={{$parameter[\"SettingsCapture-policiesByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsCapture-policiesByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCapture-policiesByIdPatch"
        ],
        "resource": [
          "capturepolicies"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/capture-policies/{id}",
        "body": "={{JSON.parse($parameter[\"SettingsCapture-policiesByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsCity-taxPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCity-taxPost"
        ],
        "resource": [
          "citytax"
        ]
      }
    },
    "default": "{\n  \"name\": {\n    \"en\": \"City tax\",\n    \"de\": \"City-Tax\"\n  },\n  \"description\": {\n    \"en\": \"2 Euro per person and night. Business travellers and close family members of citizens do not have to pay city tax.\",\n    \"de\": \"2 Euro pro Person und Nacht. Geschäftsreisende und nahe Familienmitglieder von Anwohnern müssen keine City-Tax bezahlen.\"\n  },\n  \"propertyId\": \"MUC\",\n  \"type\": \"PerPersonPerNight\",\n  \"taxHandlingType\": \"BeforeTax\",\n  \"value\": 2,\n  \"vatType\": \"Normal\",\n  \"code\": \"TAX\",\n  \"priority\": 1,\n  \"includeCityTaxInRateAmount\": false,\n  \"subcategories\": [\n    {\n      \"name\": {\n        \"en\": \"Children under 12 don't have to pay city tax\",\n        \"de\": \"Kinder unter 12 Jahren zahlen keine City-Tax\"\n      },\n      \"value\": 0,\n      \"age\": {\n        \"min\": 0,\n        \"max\": 12\n      }\n    }\n  ],\n  \"ignoredFor\": [\n    {\n      \"distributionChannel\": {\n        \"channelCode\": \"ChannelManager\",\n        \"sources\": [\n          \"bookingcom\"\n        ]\n      }\n    }\n  ]\n}",
    "description": "The definition of the city tax.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/settings/v1/city-tax",
        "body": "={{JSON.parse($parameter[\"SettingsCity-taxPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "SettingsCity-taxPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCity-taxPost"
        ],
        "resource": [
          "citytax"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "SettingsCity-taxGet_propertyId",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCity-taxGet"
        ],
        "resource": [
          "citytax"
        ]
      }
    },
    "default": "",
    "description": "Filter by the specified property",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyId"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SettingsCity-taxByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCity-taxByIdGet"
        ],
        "resource": [
          "citytax"
        ]
      }
    },
    "default": "",
    "description": "The ID of the city tax.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/city-tax/={{$parameter[\"SettingsCity-taxByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Languages",
    "name": "SettingsCity-taxByIdGet_languages",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCity-taxByIdGet"
        ],
        "resource": [
          "citytax"
        ]
      }
    },
    "default": "",
    "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)",
    "routing": {
      "send": {
        "type": "query",
        "property": "languages"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "languagesValues",
        "displayName": "Languages",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "SettingsCity-taxByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCity-taxByIdPatch"
        ],
        "resource": [
          "citytax"
        ]
      }
    },
    "default": "",
    "description": "The id of the city tax to be modified.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/city-tax/={{$parameter[\"SettingsCity-taxByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsCity-taxByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsCity-taxByIdPatch"
        ],
        "resource": [
          "citytax"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/city-tax/{id}",
        "body": "={{JSON.parse($parameter[\"SettingsCity-taxByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "SettingsSub-accountsGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsSub-accountsGet"
        ],
        "resource": [
          "customsubaccounts"
        ]
      }
    },
    "default": "",
    "description": "ID of the property",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/sub-accounts",
        "qs": {
          "propertyId": "={{$parameter[\"SettingsSub-accountsGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Page Number",
    "name": "SettingsSub-accountsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsSub-accountsGet"
        ],
        "resource": [
          "customsubaccounts"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "SettingsSub-accountsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsSub-accountsGet"
        ],
        "resource": [
          "customsubaccounts"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsSub-accountsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsSub-accountsPost"
        ],
        "resource": [
          "customsubaccounts"
        ]
      }
    },
    "default": "{\n  \"propertyId\": \"MUC\",\n  \"code\": \"TEA\",\n  \"name\": \"Finest green tea\",\n  \"type\": \"FoodAndBeverages\"\n}",
    "description": "The definition of the sub-account.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/settings/v1/sub-accounts",
        "body": "={{JSON.parse($parameter[\"SettingsSub-accountsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "SettingsSub-accountsPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsSub-accountsPost"
        ],
        "resource": [
          "customsubaccounts"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "SettingsSub-accounts$countGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsSub-accounts$countGet"
        ],
        "resource": [
          "customsubaccounts"
        ]
      }
    },
    "default": "",
    "description": "ID of the property",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/sub-accounts/$count",
        "qs": {
          "propertyId": "={{$parameter[\"SettingsSub-accounts$countGet_propertyId\"]}}"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SettingsSub-accountsByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsSub-accountsByIdGet"
        ],
        "resource": [
          "customsubaccounts"
        ]
      }
    },
    "default": "",
    "description": "The ID of the sub-account.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/sub-accounts/={{$parameter[\"SettingsSub-accountsByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SettingsSub-accountsByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsSub-accountsByIdPatch"
        ],
        "resource": [
          "customsubaccounts"
        ]
      }
    },
    "default": "",
    "description": "The ID of the sub-account.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/sub-accounts/={{$parameter[\"SettingsSub-accountsByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsSub-accountsByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsSub-accountsByIdPatch"
        ],
        "resource": [
          "customsubaccounts"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/sub-accounts/{id}",
        "body": "={{JSON.parse($parameter[\"SettingsSub-accountsByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SettingsSub-accountsByIdHead_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsSub-accountsByIdHead"
        ],
        "resource": [
          "customsubaccounts"
        ]
      }
    },
    "default": "",
    "description": "The ID of the sub-account.",
    "routing": {
      "request": {
        "method": "HEAD",
        "url": "/settings/v1/sub-accounts/={{$parameter[\"SettingsSub-accountsByIdHead_id\"]}}"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "SettingsFeaturesByPropertyIdGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsFeaturesByPropertyIdGet"
        ],
        "resource": [
          "featuresettings"
        ]
      }
    },
    "default": "",
    "description": "The ID of the property.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/features/={{$parameter[\"SettingsFeaturesByPropertyIdGet_propertyId\"]}}"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "SettingsFeaturesByPropertyIdPatch_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsFeaturesByPropertyIdPatch"
        ],
        "resource": [
          "featuresettings"
        ]
      }
    },
    "default": "",
    "description": "The ID of the property you want to toggle features for.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/features/={{$parameter[\"SettingsFeaturesByPropertyIdPatch_propertyId\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsFeaturesByPropertyIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsFeaturesByPropertyIdPatch"
        ],
        "resource": [
          "featuresettings"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/features/{propertyId}",
        "body": "={{JSON.parse($parameter[\"SettingsFeaturesByPropertyIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Property Ids",
    "name": "SettingsInvoice-addressGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsInvoice-addressGet"
        ],
        "resource": [
          "invoiceaddress"
        ]
      }
    },
    "default": "",
    "description": "The propertyIds parameter",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The propertyIds value"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Ids",
    "name": "SettingsInvoice-addressPut_propertyIds",
    "type": "fixedCollection",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsInvoice-addressPut"
        ],
        "resource": [
          "invoiceaddress"
        ]
      }
    },
    "default": "",
    "description": "The propertyIds parameter",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/settings/v1/invoice-address",
        "qs": {
          "propertyIds": "={{$parameter[\"SettingsInvoice-addressPut_propertyIds\"]}}"
        }
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The propertyIds value"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "SettingsInvoice-addressPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsInvoice-addressPut"
        ],
        "resource": [
          "invoiceaddress"
        ]
      }
    },
    "default": "{\n  \"addressLine1\": \"Marienplatz 1\",\n  \"postalCode\": \"80331\",\n  \"city\": \"München\",\n  \"regionCode\": \"DE-BY\",\n  \"countryCode\": \"DE\"\n}",
    "description": "Address displayed on invoices.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/settings/v1/invoice-address",
        "body": "={{JSON.parse($parameter[\"SettingsInvoice-addressPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Property Ids",
    "name": "SettingsInvoice-addressPatch_propertyIds",
    "type": "fixedCollection",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsInvoice-addressPatch"
        ],
        "resource": [
          "invoiceaddress"
        ]
      }
    },
    "default": "",
    "description": "The propertyIds parameter",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/invoice-address",
        "qs": {
          "propertyIds": "={{$parameter[\"SettingsInvoice-addressPatch_propertyIds\"]}}"
        }
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "The propertyIds value"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Body",
    "name": "SettingsInvoice-addressPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsInvoice-addressPatch"
        ],
        "resource": [
          "invoiceaddress"
        ]
      }
    },
    "default": "",
    "description": "Request body (JSON format). See API documentation for the expected schema.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/invoice-address",
        "body": "={{JSON.parse($parameter[\"SettingsInvoice-addressPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsLanguagesPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsLanguagesPut"
        ],
        "resource": [
          "languages"
        ]
      }
    },
    "default": "{\n  \"languages\": [\n    {\n      \"code\": \"en\",\n      \"mandatory\": true\n    },\n    {\n      \"code\": \"de\",\n      \"mandatory\": false\n    }\n  ]\n}",
    "description": "The definition of the language settings.",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/settings/v1/languages",
        "body": "={{JSON.parse($parameter[\"SettingsLanguagesPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SettingsMarket-segmentsByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsMarket-segmentsByIdGet"
        ],
        "resource": [
          "marketsegment"
        ]
      }
    },
    "default": "",
    "description": "The id of the market segment.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/market-segments/={{$parameter[\"SettingsMarket-segmentsByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SettingsMarket-segmentsByIdHead_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsMarket-segmentsByIdHead"
        ],
        "resource": [
          "marketsegment"
        ]
      }
    },
    "default": "",
    "description": "The id of the market segment.",
    "routing": {
      "request": {
        "method": "HEAD",
        "url": "/settings/v1/market-segments/={{$parameter[\"SettingsMarket-segmentsByIdHead_id\"]}}"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SettingsMarket-segmentsByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsMarket-segmentsByIdPatch"
        ],
        "resource": [
          "marketsegment"
        ]
      }
    },
    "default": "",
    "description": "The id of the market segment to be modified.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/market-segments/={{$parameter[\"SettingsMarket-segmentsByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsMarket-segmentsByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsMarket-segmentsByIdPatch"
        ],
        "resource": [
          "marketsegment"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/market-segments/{id}",
        "body": "={{JSON.parse($parameter[\"SettingsMarket-segmentsByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Property Ids",
    "name": "SettingsMarket-segmentsGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsMarket-segmentsGet"
        ],
        "resource": [
          "marketsegment"
        ]
      }
    },
    "default": "",
    "description": "Return market segments with any of the specified property ids",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return market segments with any of the specified property ids"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Page Number",
    "name": "SettingsMarket-segmentsGet_pageNumber",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsMarket-segmentsGet"
        ],
        "resource": [
          "marketsegment"
        ]
      }
    },
    "default": 1,
    "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageNumber"
      }
    }
  },
  {
    "displayName": "Page Size",
    "name": "SettingsMarket-segmentsGet_pageSize",
    "type": "number",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsMarket-segmentsGet"
        ],
        "resource": [
          "marketsegment"
        ]
      }
    },
    "default": "",
    "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.",
    "routing": {
      "send": {
        "type": "query",
        "property": "pageSize"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsMarket-segmentsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsMarket-segmentsPost"
        ],
        "resource": [
          "marketsegment"
        ]
      }
    },
    "default": "{\n  \"code\": \"BUSR\",\n  \"name\": \"Business Groups\",\n  \"description\": \"Social groups (Weddings etc.)\",\n  \"propertyIds\": [\n    \"MUC\",\n    \"BER\"\n  ]\n}",
    "description": "The definition of the market segment.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/settings/v1/market-segments",
        "body": "={{JSON.parse($parameter[\"SettingsMarket-segmentsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "SettingsMarket-segmentsPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsMarket-segmentsPost"
        ],
        "resource": [
          "marketsegment"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Property Ids",
    "name": "SettingsMarket-segments$countGet_propertyIds",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsMarket-segments$countGet"
        ],
        "resource": [
          "marketsegment"
        ]
      }
    },
    "default": "",
    "description": "Return market segments with any of the specified property ids",
    "routing": {
      "send": {
        "type": "query",
        "property": "propertyIds"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "propertyIdsValues",
        "displayName": "Property Ids",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "Return market segments with any of the specified property ids"
          }
        ]
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "SettingsPropertiesByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsPropertiesByIdGet"
        ],
        "resource": [
          "propertysettings"
        ]
      }
    },
    "default": "",
    "description": "The id of the property.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/properties/={{$parameter[\"SettingsPropertiesByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet"
        ],
        "resource": [
          "timeslicedefinitions"
        ]
      }
    },
    "default": "",
    "description": "The id of the property.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/properties/={{$parameter[\"SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet_propertyId\"]}}/time-slice-definitions/{id}"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet"
        ],
        "resource": [
          "timeslicedefinitions"
        ]
      }
    },
    "default": "",
    "description": "The id of the time slice definition.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/properties/{propertyId}/time-slice-definitions/={{$parameter[\"SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet"
        ],
        "resource": [
          "timeslicedefinitions"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Id",
    "name": "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch"
        ],
        "resource": [
          "timeslicedefinitions"
        ]
      }
    },
    "default": "",
    "description": "The id of the property.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/properties/={{$parameter[\"SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_propertyId\"]}}/time-slice-definitions/{id}"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch"
        ],
        "resource": [
          "timeslicedefinitions"
        ]
      }
    },
    "default": "",
    "description": "The id of the time slice definition.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/properties/{propertyId}/time-slice-definitions/={{$parameter[\"SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch"
        ],
        "resource": [
          "timeslicedefinitions"
        ]
      }
    },
    "default": "",
    "description": "Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.",
    "routing": {
      "request": {
        "method": "PATCH",
        "url": "/settings/v1/properties/{propertyId}/time-slice-definitions/{id}",
        "body": "={{JSON.parse($parameter[\"SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Property Id",
    "name": "SettingsPropertiesByPropertyIdTime-slice-definitionsGet_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsPropertiesByPropertyIdTime-slice-definitionsGet"
        ],
        "resource": [
          "timeslicedefinitions"
        ]
      }
    },
    "default": "",
    "description": "The id of the property.",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/settings/v1/properties/={{$parameter[\"SettingsPropertiesByPropertyIdTime-slice-definitionsGet_propertyId\"]}}/time-slice-definitions"
      }
    }
  },
  {
    "displayName": "Expand",
    "name": "SettingsPropertiesByPropertyIdTime-slice-definitionsGet_expand",
    "type": "fixedCollection",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsPropertiesByPropertyIdTime-slice-definitionsGet"
        ],
        "resource": [
          "timeslicedefinitions"
        ]
      }
    },
    "default": "",
    "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.",
    "routing": {
      "send": {
        "type": "query",
        "property": "expand"
      }
    },
    "typeOptions": {
      "multipleValues": true
    },
    "options": [
      {
        "name": "expandValues",
        "displayName": "Expand",
        "values": [
          {
            "displayName": "Value",
            "name": "value",
            "type": "string",
            "default": "",
            "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored."
          }
        ]
      }
    ]
  },
  {
    "displayName": "Property Id",
    "name": "SettingsPropertiesByPropertyIdTime-slice-definitionsPost_propertyId",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsPropertiesByPropertyIdTime-slice-definitionsPost"
        ],
        "resource": [
          "timeslicedefinitions"
        ]
      }
    },
    "default": "",
    "description": "The id of the property.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/settings/v1/properties/={{$parameter[\"SettingsPropertiesByPropertyIdTime-slice-definitionsPost_propertyId\"]}}/time-slice-definitions"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SettingsPropertiesByPropertyIdTime-slice-definitionsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsPropertiesByPropertyIdTime-slice-definitionsPost"
        ],
        "resource": [
          "timeslicedefinitions"
        ]
      }
    },
    "default": "{\n  \"name\": \"Over Night\",\n  \"template\": \"OverNight\",\n  \"checkInTime\": \"17:00:00\",\n  \"checkOutTime\": \"11:00:00\"\n}",
    "description": "The payload of the time slice definition.",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/settings/v1/properties/{propertyId}/time-slice-definitions",
        "body": "={{JSON.parse($parameter[\"SettingsPropertiesByPropertyIdTime-slice-definitionsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Idempotency- Key",
    "name": "SettingsPropertiesByPropertyIdTime-slice-definitionsPost_Idempotency-Key",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "SettingsPropertiesByPropertyIdTime-slice-definitionsPost"
        ],
        "resource": [
          "timeslicedefinitions"
        ]
      }
    },
    "default": "",
    "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours.",
    "routing": {
      "send": {
        "type": "query",
        "property": "Idempotency-Key"
      }
    }
  },
  {
    "displayName": "Url",
    "name": "PingerPost_url",
    "type": "string",
    "required": false,
    "displayOptions": {
      "show": {
        "operation": [
          "PingerPost"
        ],
        "resource": [
          "healthcheck"
        ]
      }
    },
    "default": "",
    "description": "The url parameter",
    "routing": {
      "send": {
        "type": "query",
        "property": "url"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SubscriptionsPost_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SubscriptionsPost"
        ],
        "resource": [
          "subscriptions"
        ]
      }
    },
    "default": "{\n  \"endpointUrl\": \"https://example.com\",\n  \"events\": [\n    \"booking/created\",\n    \"booking/changed\",\n    \"reservation/*\"\n  ],\n  \"propertyIds\": [\n    \"MUC\",\n    \"BER\"\n  ]\n}",
    "description": "Subscription details",
    "routing": {
      "request": {
        "method": "POST",
        "url": "/v1/subscriptions",
        "body": "={{JSON.parse($parameter[\"SubscriptionsPost_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SubscriptionsByIdGet_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SubscriptionsByIdGet"
        ],
        "resource": [
          "subscriptions"
        ]
      }
    },
    "default": "",
    "description": "The id parameter",
    "routing": {
      "request": {
        "method": "GET",
        "url": "/v1/subscriptions/={{$parameter[\"SubscriptionsByIdGet_id\"]}}"
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SubscriptionsByIdPut_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SubscriptionsByIdPut"
        ],
        "resource": [
          "subscriptions"
        ]
      }
    },
    "default": "",
    "description": "Subscription id",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/v1/subscriptions/={{$parameter[\"SubscriptionsByIdPut_id\"]}}"
      }
    }
  },
  {
    "displayName": "Body",
    "name": "SubscriptionsByIdPut_body",
    "type": "json",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SubscriptionsByIdPut"
        ],
        "resource": [
          "subscriptions"
        ]
      }
    },
    "default": "{\n  \"endpointUrl\": \"https://www.example.com\",\n  \"events\": [\n    \"booking/created\",\n    \"booking/changed\",\n    \"reservation/*\"\n  ],\n  \"propertyIds\": [\n    \"MUC\",\n    \"BER\"\n  ]\n}",
    "description": "Subscription details",
    "routing": {
      "request": {
        "method": "PUT",
        "url": "/v1/subscriptions/{id}",
        "body": "={{JSON.parse($parameter[\"SubscriptionsByIdPut_body\"])}}",
        "headers": {
          "Content-Type": "application/json"
        }
      }
    }
  },
  {
    "displayName": "Id",
    "name": "SubscriptionsByIdDelete_id",
    "type": "string",
    "required": true,
    "displayOptions": {
      "show": {
        "operation": [
          "SubscriptionsByIdDelete"
        ],
        "resource": [
          "subscriptions"
        ]
      }
    },
    "default": "",
    "description": "Subscription's ID",
    "routing": {
      "request": {
        "method": "DELETE",
        "url": "/v1/subscriptions/={{$parameter[\"SubscriptionsByIdDelete_id\"]}}"
      }
    }
  }
];
