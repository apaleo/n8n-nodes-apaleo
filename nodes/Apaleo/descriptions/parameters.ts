import { INodeProperties } from 'n8n-workflow';

// This will contain all parameter fields for operations
export const parameterFields: INodeProperties[] = [
	{
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["AccountAccountsCurrentPut"], resource: ["account"] } },
                default: `{
  "name": "Demo Account",
  "description": "This is the demo account",
  "logoUrl": "logo.png",
  "location": {
    "addressLine1": "My Street 1",
    "postalCode": "12345",
    "city": "MyCity",
    "countryCode": "GB"
  }
}`,
                description: 'The definition of the account.'
            },
            {
                displayName: 'Additional Fields',
                name: 'AccountAccountsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["AccountAccountsGet"], resource: ["account"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'accountCodes',
                name: 'accountCodes',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested codes',
                options: [{
                    name: 'accountCodesValues',
                    displayName: 'AccountCodes',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested codes'
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["AccountAccountsPost"], resource: ["account"] } },
                default: `{
  "code": "DEMO",
  "name": "Demo Account",
  "description": "This is the demo account",
  "defaultLanguage": "en",
  "logoUrl": "logo.png",
  "type": "Trial",
  "location": {
    "addressLine1": "My Street 1",
    "postalCode": "12345",
    "city": "MyCity",
    "countryCode": "GB"
  }
}`,
                description: 'The definition of the account.'
            },
            {
                displayName: 'Additional Fields',
                name: 'AccountAccountsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["AccountAccountsPost"], resource: ["account"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'AvailabilityUnitsGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityUnitsGet"], resource: ["availability"] } },
                default: '',
                description: 'The property ID'
            },
            {
                displayName: 'from',
                name: 'AvailabilityUnitsGet_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityUnitsGet"], resource: ["availability"] } },
                default: '',
                description: `The from date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'to',
                name: 'AvailabilityUnitsGet_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityUnitsGet"], resource: ["availability"] } },
                default: '',
                description: `The to date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'Additional Fields',
                name: 'AvailabilityUnitsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["AvailabilityUnitsGet"], resource: ["availability"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'includeOutOfService',
                name: 'includeOutOfService',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether should units that are set OutOfService in the defined time period be returned as available'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'unitAttributeIds',
                name: 'unitAttributeIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return units with the specific unit attributes',
                options: [{
                    name: 'unitAttributeIdsValues',
                    displayName: 'UnitAttributeIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return units with the specific unit attributes'
                }
                ]
                }]
            },
                {
                displayName: 'unitCondition',
                name: 'unitCondition',
                type: 'options',
                required: false,
                default: 'Clean',
                description: 'The unit condition',
                options: [{ name: 'Clean', value: 'Clean' }, { name: 'CleanToBeInspected', value: 'CleanToBeInspected' }, { name: 'Dirty', value: 'Dirty' }]
            },
                {
                displayName: 'unitGroupId',
                name: 'unitGroupId',
                type: 'string',
                required: false,
                default: '',
                description: 'The unit group ID'
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'AvailabilityUnit_groupsGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityUnit-groupsGet"], resource: ["availability"] } },
                default: '',
                description: 'The property ID'
            },
            {
                displayName: 'from',
                name: 'AvailabilityUnit_groupsGet_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityUnit-groupsGet"], resource: ["availability"] } },
                default: '',
                description: 'First day of the requested time period. The given day will be included in the response'
            },
            {
                displayName: 'to',
                name: 'AvailabilityUnit_groupsGet_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityUnit-groupsGet"], resource: ["availability"] } },
                default: '',
                description: 'Last day of the requested time period. The given day will be included in the response'
            },
            {
                displayName: 'Additional Fields',
                name: 'AvailabilityUnit_groupsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["AvailabilityUnit-groupsGet"], resource: ["availability"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'adults',
                name: 'adults',
                type: 'number',
                required: false,
                default: 0,
                description: 'The number of adults you want availability for, defaults to 1'
            },
                {
                displayName: 'childrenAges',
                name: 'childrenAges',
                type: 'collection',
                required: false,
                default: `
[]
`,
                description: 'The ages of the children you want availability for'
            },
                {
                displayName: 'onlySellable',
                name: 'onlySellable',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether when set to 'true', only the unit groups sold by the specified time slice template and time slice definition ids are returned,
otherwise all unit groups are returned`
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'timeSliceDefinitionIds',
                name: 'timeSliceDefinitionIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'The time slice definition ids',
                options: [{
                    name: 'timeSliceDefinitionIdsValues',
                    displayName: 'TimeSliceDefinitionIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'The time slice definition ids'
                }
                ]
                }]
            },
                {
                displayName: 'timeSliceTemplate',
                name: 'timeSliceTemplate',
                type: 'options',
                required: false,
                default: 'DayUse',
                description: `The time slice template, defaults to 'over night'`,
                options: [{ name: 'DayUse', value: 'DayUse' }, { name: 'OverNight', value: 'OverNight' }]
            },
                {
                displayName: 'unitGroupIds',
                name: 'unitGroupIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'The unit group ids',
                options: [{
                    name: 'unitGroupIdsValues',
                    displayName: 'UnitGroupIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'The unit group ids'
                }
                ]
                }]
            },
                {
                displayName: 'unitGroupTypes',
                name: 'unitGroupTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by requested unit group types',
                options: [{ name: 'BedRoom', value: 'BedRoom' }, { name: 'EventSpace', value: 'EventSpace' }, { name: 'MeetingRoom', value: 'MeetingRoom' }, { name: 'Other', value: 'Other' }, { name: 'ParkingLot', value: 'ParkingLot' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'AvailabilityUnit_groupsByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityUnit-groupsByIdPatch"], resource: ["availability"] } },
                default: '',
                description: 'Id of the unit group to be modified'
            },
            {
                displayName: 'from',
                name: 'AvailabilityUnit_groupsByIdPatch_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityUnit-groupsByIdPatch"], resource: ["availability"] } },
                default: '',
                description: 'First day of the time period from which availability will be modified'
            },
            {
                displayName: 'to',
                name: 'AvailabilityUnit_groupsByIdPatch_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityUnit-groupsByIdPatch"], resource: ["availability"] } },
                default: '',
                description: 'Last day of the time period until which availability will be modified'
            },
            {
                displayName: 'timeSliceTemplate',
                name: 'AvailabilityUnit_groupsByIdPatch_timeSliceTemplate',
                type: 'options',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityUnit-groupsByIdPatch"], resource: ["availability"] } },
                default: 'DayUse',
                description: 'The time slice template',
                options: [{ name: 'DayUse', value: 'DayUse' }, { name: 'OverNight', value: 'OverNight' }]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityUnit-groupsByIdPatch"], resource: ["availability"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'propertyId',
                name: 'AvailabilityServicesGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityServicesGet"], resource: ["availability"] } },
                default: '',
                description: 'The property ID'
            },
            {
                displayName: 'from',
                name: 'AvailabilityServicesGet_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityServicesGet"], resource: ["availability"] } },
                default: '',
                description: 'First day of the requested time period. The given day will be included in the response'
            },
            {
                displayName: 'to',
                name: 'AvailabilityServicesGet_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityServicesGet"], resource: ["availability"] } },
                default: '',
                description: 'Last day of the requested time period. The given day will be included in the response'
            },
            {
                displayName: 'Additional Fields',
                name: 'AvailabilityServicesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["AvailabilityServicesGet"], resource: ["availability"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'channelCodes',
                name: 'channelCodes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'The channel code used to filter the services',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'timeSliceDefinitionIds',
                name: 'timeSliceDefinitionIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'The time slice definition ids',
                options: [{
                    name: 'timeSliceDefinitionIdsValues',
                    displayName: 'TimeSliceDefinitionIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'The time slice definition ids'
                }
                ]
                }]
            },
                {
                displayName: 'timeSliceTemplate',
                name: 'timeSliceTemplate',
                type: 'options',
                required: false,
                default: 'DayUse',
                description: `The time slice template, defaults to 'over night'`,
                options: [{ name: 'DayUse', value: 'DayUse' }, { name: 'OverNight', value: 'OverNight' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'AvailabilityReservationsByIdUnitsGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["AvailabilityReservationsByIdUnitsGet"], resource: ["reservationavailability"] } },
                default: '',
                description: 'The ID of the reservation'
            },
            {
                displayName: 'Additional Fields',
                name: 'AvailabilityReservationsByIdUnitsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["AvailabilityReservationsByIdUnitsGet"], resource: ["reservationavailability"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'from',
                name: 'from',
                type: 'string',
                required: false,
                default: '',
                description: `The from date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'includeOutOfService',
                name: 'includeOutOfService',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether should units that are set OutOfService in the defined time period be returned as available'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'to',
                name: 'to',
                type: 'string',
                required: false,
                default: '',
                description: `The to date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'unitAttributeIds',
                name: 'unitAttributeIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return units with the specific unit attributes',
                options: [{
                    name: 'unitAttributeIdsValues',
                    displayName: 'UnitAttributeIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return units with the specific unit attributes'
                }
                ]
                }]
            },
                {
                displayName: 'unitCondition',
                name: 'unitCondition',
                type: 'options',
                required: false,
                default: 'Clean',
                description: 'The unit condition',
                options: [{ name: 'Clean', value: 'Clean' }, { name: 'CleanToBeInspected', value: 'CleanToBeInspected' }, { name: 'Dirty', value: 'Dirty' }]
            },
                {
                displayName: 'unitGroupId',
                name: 'unitGroupId',
                type: 'string',
                required: false,
                default: '',
                description: 'The unit group ID'
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingBlocksPost"], resource: ["block"] } },
                default: `{
  "groupId": "XPGMSXGF",
  "ratePlanId": "MUC-NONREF-SGL",
  "from": "2025-07-19",
  "to": "2025-07-22",
  "grossDailyRate": {
    "amount": 160.0,
    "currency": "EUR"
  },
  "timeSlices": [
    {
      "blockedUnits": 3
    },
    {
      "blockedUnits": 0
    },
    {
      "blockedUnits": 7
    }
  ]
}`,
                description: 'The details for the block you want to create.'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingBlocksPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingBlocksPost"], resource: ["block"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingBlocksGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingBlocksGet"], resource: ["block"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored',
                options: [{ name: 'actions', value: 'actions' }, { name: 'timeSlices', value: 'timeSlices' }]
            },
                {
                displayName: 'from',
                name: 'from',
                type: 'string',
                required: false,
                default: '',
                description: `The start of the time range. All blocks that are overlapping with the interval specified by from and to
will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'groupId',
                name: 'groupId',
                type: 'string',
                required: false,
                default: '',
                description: 'Return blocks for the specific group'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return blocks filtered by properties',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return blocks filtered by properties'
                }
                ]
                }]
            },
                {
                displayName: 'ratePlanIds',
                name: 'ratePlanIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return blocks with any of the specified rate plans',
                options: [{
                    name: 'ratePlanIdsValues',
                    displayName: 'RatePlanIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return blocks with any of the specified rate plans'
                }
                ]
                }]
            },
                {
                displayName: 'status',
                name: 'status',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Return blocks filtered by statuses',
                options: [{ name: 'Canceled', value: 'Canceled' }, { name: 'Definite', value: 'Definite' }, { name: 'Tentative', value: 'Tentative' }]
            },
                {
                displayName: 'timeSliceDefinitionIds',
                name: 'timeSliceDefinitionIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return blocks with any of the specified time slice definitions',
                options: [{
                    name: 'timeSliceDefinitionIdsValues',
                    displayName: 'TimeSliceDefinitionIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return blocks with any of the specified time slice definitions'
                }
                ]
                }]
            },
                {
                displayName: 'timeSliceTemplate',
                name: 'timeSliceTemplate',
                type: 'options',
                required: false,
                default: 'DayUse',
                description: `The time slice template, defaults to 'over night'`,
                options: [{ name: 'DayUse', value: 'DayUse' }, { name: 'OverNight', value: 'OverNight' }]
            },
                {
                displayName: 'to',
                name: 'to',
                type: 'string',
                required: false,
                default: '',
                description: `The end of the time range. All blocks that are overlapping with the interval specified by from and to
will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'unitGroupIds',
                name: 'unitGroupIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return blocks with any of the specified unit groups',
                options: [{
                    name: 'unitGroupIdsValues',
                    displayName: 'UnitGroupIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return blocks with any of the specified unit groups'
                }
                ]
                }]
            },
                {
                displayName: 'unitGroupTypes',
                name: 'unitGroupTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Return blocks with any of the specified unit group types',
                options: [{ name: 'BedRoom', value: 'BedRoom' }, { name: 'EventSpace', value: 'EventSpace' }, { name: 'MeetingRoom', value: 'MeetingRoom' }, { name: 'Other', value: 'Other' }, { name: 'ParkingLot', value: 'ParkingLot' }]
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingBlocks_countGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingBlocks$countGet"], resource: ["block"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'from',
                name: 'from',
                type: 'string',
                required: false,
                default: '',
                description: `The start of the time range. All blocks that are overlapping with the interval specified by from and to
will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'groupId',
                name: 'groupId',
                type: 'string',
                required: false,
                default: '',
                description: 'Return blocks for the specific group'
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return blocks filtered by properties',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return blocks filtered by properties'
                }
                ]
                }]
            },
                {
                displayName: 'ratePlanIds',
                name: 'ratePlanIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return blocks with any of the specified rate plans',
                options: [{
                    name: 'ratePlanIdsValues',
                    displayName: 'RatePlanIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return blocks with any of the specified rate plans'
                }
                ]
                }]
            },
                {
                displayName: 'status',
                name: 'status',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Return blocks filtered by statuses',
                options: [{ name: 'Canceled', value: 'Canceled' }, { name: 'Definite', value: 'Definite' }, { name: 'Tentative', value: 'Tentative' }]
            },
                {
                displayName: 'timeSliceDefinitionIds',
                name: 'timeSliceDefinitionIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return blocks with any of the specified time slice definitions',
                options: [{
                    name: 'timeSliceDefinitionIdsValues',
                    displayName: 'TimeSliceDefinitionIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return blocks with any of the specified time slice definitions'
                }
                ]
                }]
            },
                {
                displayName: 'timeSliceTemplate',
                name: 'timeSliceTemplate',
                type: 'options',
                required: false,
                default: 'DayUse',
                description: `The time slice template, defaults to 'over night'`,
                options: [{ name: 'DayUse', value: 'DayUse' }, { name: 'OverNight', value: 'OverNight' }]
            },
                {
                displayName: 'to',
                name: 'to',
                type: 'string',
                required: false,
                default: '',
                description: `The end of the time range. All blocks that are overlapping with the interval specified by from and to
will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'unitGroupIds',
                name: 'unitGroupIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return blocks with any of the specified unit groups',
                options: [{
                    name: 'unitGroupIdsValues',
                    displayName: 'UnitGroupIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return blocks with any of the specified unit groups'
                }
                ]
                }]
            },
                {
                displayName: 'unitGroupTypes',
                name: 'unitGroupTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Return blocks with any of the specified unit group types',
                options: [{ name: 'BedRoom', value: 'BedRoom' }, { name: 'EventSpace', value: 'EventSpace' }, { name: 'MeetingRoom', value: 'MeetingRoom' }, { name: 'Other', value: 'Other' }, { name: 'ParkingLot', value: 'ParkingLot' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingBlocksByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingBlocksByIdGet"], resource: ["block"] } },
                default: '',
                description: 'Id of the block to be retrieved'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingBlocksByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingBlocksByIdGet"], resource: ["block"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored',
                options: [{ name: 'actions', value: 'actions' }, { name: 'timeSlices', value: 'timeSlices' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingBlocksByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingBlocksByIdDelete"], resource: ["block"] } },
                default: '',
                description: 'The ID of the block'
            },
            {
                displayName: 'id',
                name: 'BookingBlocksByIdHead_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingBlocksByIdHead"], resource: ["block"] } },
                default: '',
                description: 'The ID of the block'
            },
            {
                displayName: 'id',
                name: 'BookingBlock_actionsByIdConfirmPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingBlock-actionsByIdConfirmPut"], resource: ["blockactions"] } },
                default: '',
                description: 'Id of the block that should be processed'
            },
            {
                displayName: 'id',
                name: 'BookingBlock_actionsByIdReleasePut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingBlock-actionsByIdReleasePut"], resource: ["blockactions"] } },
                default: '',
                description: 'Id of the block that should be processed'
            },
            {
                displayName: 'id',
                name: 'BookingBlock_actionsByIdCancelPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingBlock-actionsByIdCancelPut"], resource: ["blockactions"] } },
                default: '',
                description: 'Id of the block that should be processed'
            },
            {
                displayName: 'id',
                name: 'BookingBlock_actionsByIdWashPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingBlock-actionsByIdWashPut"], resource: ["blockactions"] } },
                default: '',
                description: 'Id of the block that should be processed'
            },
            {
                displayName: 'id',
                name: 'BookingBlock_actionsByIdAmendPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingBlock-actionsByIdAmendPut"], resource: ["blockactions"] } },
                default: '',
                description: 'Id of the block to be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingBlock-actionsByIdAmendPut"], resource: ["blockactions"] } },
                default: `{
  "from": "2025-07-19",
  "to": "2025-07-22",
  "grossDailyRate": {
    "amount": 160.0,
    "currency": "EUR"
  },
  "timeSlices": [
    {
      "blockedUnits": 3
    },
    {
      "blockedUnits": 0
    },
    {
      "blockedUnits": 7
    }
  ]
}`,
                description: 'The definition of the block.'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingBookingsPost"], resource: ["booking"] } },
                default: `{
  "paymentAccount": {
    "accountNumber": "1111",
    "accountHolder": "John Doe",
    "expiryMonth": "8",
    "expiryYear": "2018",
    "paymentMethod": "visa",
    "payerEmail": "s.hopper@test.com",
    "payerReference": "4ea6462b-cca3-4c17-a035-c7b5132db83c",
    "isVirtual": false
  },
  "booker": {
    "title": "Mr",
    "gender": "Male",
    "firstName": "Jon",
    "middleInitial": "D",
    "lastName": "Doe",
    "email": "john.d@doe.com",
    "phone": "+4989123343",
    "address": {
      "addressLine1": "My Street 1",
      "postalCode": "12453",
      "city": "MyCity",
      "countryCode": "GB"
    }
  },
  "reservations": [
    {
      "arrival": "2025-07-16",
      "departure": "2025-07-18",
      "adults": 1,
      "childrenAges": [
        6
      ],
      "guestComment": "I need a wake up service",
      "channelCode": "Direct",
      "primaryGuest": {
        "title": "Mr",
        "gender": "Male",
        "firstName": "Jon",
        "middleInitial": "D",
        "lastName": "Doe",
        "email": "john.d@doe.com",
        "phone": "+4989123343",
        "address": {
          "addressLine1": "My Street 1",
          "postalCode": "12453",
          "city": "MyCity",
          "countryCode": "GB"
        },
        "vehicleRegistration": {
          "number": "APA322",
          "countryCode": "DE"
        }
      },
      "guaranteeType": "Prepayment",
      "travelPurpose": "Business",
      "timeSlices": [
        {
          "ratePlanId": "MUC-NONREF-FAMILY"
        },
        {
          "ratePlanId": "MUC-NONREF-FAMILY"
        }
      ],
      "services": [
        {
          "serviceId": "MUC-BRKF"
        },
        {
          "serviceId": "MUC-YOGA",
          "dates": [
            {
              "serviceDate": "2025-07-17",
              "amount": {
                "amount": 35.0,
                "currency": "EUR"
              }
            }
          ]
        }
      ],
      "prePaymentAmount": {
        "amount": 50.0,
        "currency": "EUR"
      }
    },
    {
      "arrival": "2025-07-17",
      "departure": "2025-07-19",
      "adults": 1,
      "childrenAges": [
        6
      ],
      "channelCode": "Direct",
      "primaryGuest": {
        "title": "Mr",
        "gender": "Male",
        "firstName": "Eric",
        "middleInitial": "E",
        "lastName": "Steinmetz",
        "email": "eric.e@steinmetz.com",
        "phone": "+4989123343",
        "address": {
          "addressLine1": "My Street 1",
          "postalCode": "12453",
          "city": "MyCity",
          "countryCode": "GB"
        },
        "vehicleRegistration": {
          "number": "APA322",
          "countryCode": "DE"
        }
      },
      "guaranteeType": "CreditCard",
      "timeSlices": [
        {
          "ratePlanId": "BER-FLEX-DBL",
          "totalAmount": {
            "amount": 120.0,
            "currency": "EUR"
          }
        },
        {
          "ratePlanId": "BER-FLEX-DBL",
          "totalAmount": {
            "amount": 125.0,
            "currency": "EUR"
          }
        }
      ],
      "companyId": "BER-UMBRELLA",
      "commission": {
        "commissionAmount": {
          "amount": 20.0,
          "currency": "EUR"
        },
        "beforeCommissionAmount": {
          "amount": 100.0,
          "currency": "EUR"
        }
      }
    }
  ],
  "transactionReference": "564578124534890J"
}`,
                description: 'The list of reservations you want to create.'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingBookingsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingBookingsPost"], resource: ["booking"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingBookingsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingBookingsGet"], resource: ["booking"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'channelCode',
                name: 'channelCode',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by the channel code. The resul set will contain all bookings having reservations with the specified channel code',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations. All other values will be silently ignored',
                options: [{ name: 'property', value: 'property' }, { name: 'ratePlan', value: 'ratePlan' }, { name: 'reservations', value: 'reservations' }, { name: 'services', value: 'services' }, { name: 'unitGroup', value: 'unitGroup' }]
            },
                {
                displayName: 'externalCode',
                name: 'externalCode',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter result by the external code. The result set will contain all bookings having reservations with external code starting with provided value'
            },
                {
                displayName: 'groupId',
                name: 'groupId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter result by group ID. The result set will contain all bookings having groups with the specified ID'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'reservationId',
                name: 'reservationId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter result by reservation ID. The result set will contain all bookings having reservations with the specified ID'
            },
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: `This will filter all bookings for the provided free text. Currently it only looks up if either the lastname, firstname, email or company name of the booker
contains one of the provided values`
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingBookings$forcePost"], resource: ["booking"] } },
                default: `{
  "paymentAccount": {
    "accountNumber": "1111",
    "accountHolder": "John Doe",
    "expiryMonth": "8",
    "expiryYear": "2018",
    "paymentMethod": "visa",
    "payerEmail": "s.hopper@test.com",
    "payerReference": "4ea6462b-cca3-4c17-a035-c7b5132db83c",
    "isVirtual": false
  },
  "booker": {
    "title": "Mr",
    "gender": "Male",
    "firstName": "Jon",
    "middleInitial": "D",
    "lastName": "Doe",
    "email": "john.d@doe.com",
    "phone": "+4989123343",
    "address": {
      "addressLine1": "My Street 1",
      "postalCode": "12453",
      "city": "MyCity",
      "countryCode": "GB"
    }
  },
  "reservations": [
    {
      "arrival": "2025-07-16",
      "departure": "2025-07-18",
      "adults": 1,
      "childrenAges": [
        6
      ],
      "guestComment": "I need a wake up service",
      "channelCode": "Direct",
      "primaryGuest": {
        "title": "Mr",
        "gender": "Male",
        "firstName": "Jon",
        "middleInitial": "D",
        "lastName": "Doe",
        "email": "john.d@doe.com",
        "phone": "+4989123343",
        "address": {
          "addressLine1": "My Street 1",
          "postalCode": "12453",
          "city": "MyCity",
          "countryCode": "GB"
        },
        "vehicleRegistration": {
          "number": "APA322",
          "countryCode": "DE"
        }
      },
      "guaranteeType": "Prepayment",
      "travelPurpose": "Business",
      "timeSlices": [
        {
          "ratePlanId": "MUC-NONREF-FAMILY"
        },
        {
          "ratePlanId": "MUC-NONREF-FAMILY"
        }
      ],
      "services": [
        {
          "serviceId": "MUC-BRKF"
        },
        {
          "serviceId": "MUC-YOGA",
          "dates": [
            {
              "serviceDate": "2025-07-17",
              "amount": {
                "amount": 35.0,
                "currency": "EUR"
              }
            }
          ]
        }
      ],
      "prePaymentAmount": {
        "amount": 50.0,
        "currency": "EUR"
      }
    },
    {
      "arrival": "2025-07-17",
      "departure": "2025-07-19",
      "adults": 1,
      "childrenAges": [
        6
      ],
      "channelCode": "Direct",
      "primaryGuest": {
        "title": "Mr",
        "gender": "Male",
        "firstName": "Eric",
        "middleInitial": "E",
        "lastName": "Steinmetz",
        "email": "eric.e@steinmetz.com",
        "phone": "+4989123343",
        "address": {
          "addressLine1": "My Street 1",
          "postalCode": "12453",
          "city": "MyCity",
          "countryCode": "GB"
        },
        "vehicleRegistration": {
          "number": "APA322",
          "countryCode": "DE"
        }
      },
      "guaranteeType": "CreditCard",
      "timeSlices": [
        {
          "ratePlanId": "BER-FLEX-DBL",
          "totalAmount": {
            "amount": 120.0,
            "currency": "EUR"
          }
        },
        {
          "ratePlanId": "BER-FLEX-DBL",
          "totalAmount": {
            "amount": 125.0,
            "currency": "EUR"
          }
        }
      ],
      "companyId": "BER-UMBRELLA",
      "commission": {
        "commissionAmount": {
          "amount": 20.0,
          "currency": "EUR"
        },
        "beforeCommissionAmount": {
          "amount": 100.0,
          "currency": "EUR"
        }
      }
    }
  ],
  "transactionReference": "564578124534890J"
}`,
                description: 'The list of reservations you want to create.'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingBookings_forcePost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingBookings$forcePost"], resource: ["booking"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingBookingsByIdReservationsPost_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingBookingsByIdReservationsPost"], resource: ["booking"] } },
                default: '',
                description: 'Id of the booking the reservations should be attached to'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingBookingsByIdReservationsPost"], resource: ["booking"] } },
                default: `{
  "reservations": [
    {
      "arrival": "2025-07-16",
      "departure": "2025-07-18",
      "adults": 1,
      "comment": "I need a wake up service",
      "externalCode": "812864414|381",
      "channelCode": "BookingCom",
      "primaryGuest": {
        "title": "Mr",
        "gender": "Male",
        "firstName": "Jon",
        "middleInitial": "D",
        "lastName": "Doe",
        "email": "john.d@doe.com",
        "phone": "+4989123343",
        "address": {
          "addressLine1": "My Street 1",
          "postalCode": "12453",
          "city": "MyCity",
          "countryCode": "GB"
        },
        "vehicleRegistration": {
          "number": "APA322",
          "countryCode": "DE"
        }
      },
      "guaranteeType": "Prepayment",
      "timeSlices": [
        {
          "ratePlanId": "MUC-NONREF-DBL"
        },
        {
          "ratePlanId": "MUC-NONREF-DBL"
        }
      ],
      "services": [
        {
          "serviceId": "MUC-BRKF"
        },
        {
          "serviceId": "MUC-YOGA",
          "dates": [
            {
              "serviceDate": "2025-07-17",
              "amount": {
                "amount": 35.0,
                "currency": "EUR"
              }
            }
          ]
        }
      ],
      "companyId": "UMBRELLA",
      "corporateCode": "UMBRELLA-MUC_NONREF_DBL"
    },
    {
      "arrival": "2025-07-17",
      "departure": "2025-07-19",
      "adults": 1,
      "childrenAges": [
        6
      ],
      "channelCode": "Direct",
      "primaryGuest": {
        "title": "Mr",
        "gender": "Male",
        "firstName": "Eric",
        "middleInitial": "E",
        "lastName": "Steinmetz",
        "email": "eric.e@steinmetz.com",
        "phone": "+4989123343",
        "address": {
          "addressLine1": "My Street 1",
          "postalCode": "12453",
          "city": "MyCity",
          "countryCode": "GB"
        },
        "vehicleRegistration": {
          "number": "APA322",
          "countryCode": "DE"
        }
      },
      "guaranteeType": "CreditCard",
      "timeSlices": [
        {
          "ratePlanId": "BER-FLEX-DBL"
        },
        {
          "ratePlanId": "BER-FLEX-DBL"
        }
      ],
      "commission": {
        "commissionAmount": {
          "amount": 20.0,
          "currency": "EUR"
        },
        "beforeCommissionAmount": {
          "amount": 100.0,
          "currency": "EUR"
        }
      }
    }
  ],
  "transactionReference": "RFEUFHEW"
}`,
                description: 'The list of reservations you want to add.'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingBookingsByIdReservationsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingBookingsByIdReservationsPost"], resource: ["booking"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingBookingsByIdReservations_forcePost_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingBookingsByIdReservations$forcePost"], resource: ["booking"] } },
                default: '',
                description: 'Id of the booking the reservations should be attached to'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingBookingsByIdReservations$forcePost"], resource: ["booking"] } },
                default: `{
  "reservations": [
    {
      "arrival": "2025-07-16",
      "departure": "2025-07-18",
      "adults": 1,
      "comment": "I need a wake up service",
      "externalCode": "812864414|381",
      "channelCode": "BookingCom",
      "primaryGuest": {
        "title": "Mr",
        "gender": "Male",
        "firstName": "Jon",
        "middleInitial": "D",
        "lastName": "Doe",
        "email": "john.d@doe.com",
        "phone": "+4989123343",
        "address": {
          "addressLine1": "My Street 1",
          "postalCode": "12453",
          "city": "MyCity",
          "countryCode": "GB"
        },
        "vehicleRegistration": {
          "number": "APA322",
          "countryCode": "DE"
        }
      },
      "guaranteeType": "Prepayment",
      "timeSlices": [
        {
          "ratePlanId": "MUC-NONREF-DBL"
        },
        {
          "ratePlanId": "MUC-NONREF-DBL"
        }
      ],
      "services": [
        {
          "serviceId": "MUC-BRKF"
        },
        {
          "serviceId": "MUC-YOGA",
          "dates": [
            {
              "serviceDate": "2025-07-17",
              "amount": {
                "amount": 35.0,
                "currency": "EUR"
              }
            }
          ]
        }
      ],
      "companyId": "UMBRELLA",
      "corporateCode": "UMBRELLA-MUC_NONREF_DBL"
    },
    {
      "arrival": "2025-07-17",
      "departure": "2025-07-19",
      "adults": 1,
      "childrenAges": [
        6
      ],
      "channelCode": "Direct",
      "primaryGuest": {
        "title": "Mr",
        "gender": "Male",
        "firstName": "Eric",
        "middleInitial": "E",
        "lastName": "Steinmetz",
        "email": "eric.e@steinmetz.com",
        "phone": "+4989123343",
        "address": {
          "addressLine1": "My Street 1",
          "postalCode": "12453",
          "city": "MyCity",
          "countryCode": "GB"
        },
        "vehicleRegistration": {
          "number": "APA322",
          "countryCode": "DE"
        }
      },
      "guaranteeType": "CreditCard",
      "timeSlices": [
        {
          "ratePlanId": "BER-FLEX-DBL"
        },
        {
          "ratePlanId": "BER-FLEX-DBL"
        }
      ],
      "commission": {
        "commissionAmount": {
          "amount": 20.0,
          "currency": "EUR"
        },
        "beforeCommissionAmount": {
          "amount": 100.0,
          "currency": "EUR"
        }
      }
    }
  ],
  "transactionReference": "RFEUFHEW"
}`,
                description: 'The list of reservations you want to add.'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingBookingsByIdReservations_forcePost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingBookingsByIdReservations$forcePost"], resource: ["booking"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingBookingsByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingBookingsByIdGet"], resource: ["booking"] } },
                default: '',
                description: 'Id of the booking to be retrieved'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingBookingsByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingBookingsByIdGet"], resource: ["booking"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations, propertyValues. All other values will be silently ignored',
                options: [{ name: 'property', value: 'property' }, { name: 'propertyValues', value: 'propertyValues' }, { name: 'ratePlan', value: 'ratePlan' }, { name: 'reservations', value: 'reservations' }, { name: 'services', value: 'services' }, { name: 'unitGroup', value: 'unitGroup' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingBookingsByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingBookingsByIdPatch"], resource: ["booking"] } },
                default: '',
                description: 'Id of the booking to be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingBookingsByIdPatch"], resource: ["booking"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingGroupsPost"], resource: ["group"] } },
                default: `{
  "name": "apaleo Summer Festival 2026",
  "booker": {
    "title": "Mr",
    "gender": "Male",
    "firstName": "Jon",
    "middleInitial": "D",
    "lastName": "Doe",
    "email": "john.d@doe.com",
    "phone": "+4989123343",
    "address": {
      "addressLine1": "My Street 1",
      "postalCode": "12453",
      "city": "MyCity",
      "countryCode": "GB"
    }
  },
  "paymentAccount": {
    "accountNumber": "1111",
    "accountHolder": "John Doe",
    "expiryMonth": "8",
    "expiryYear": "2018",
    "paymentMethod": "visa",
    "payerEmail": "s.hopper@test.com",
    "payerReference": "4ea6462b-cca3-4c17-a035-c7b5132db83c",
    "isVirtual": false
  },
  "propertyIds": [
    "MUC"
  ]
}`,
                description: 'The details of the group that should be created.'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingGroupsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingGroupsPost"], resource: ["group"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingGroupsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingGroupsGet"], resource: ["group"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored',
                options: [{ name: 'actions', value: 'actions' }, { name: 'blocks', value: 'blocks' }]
            },
                {
                displayName: 'from',
                name: 'from',
                type: 'string',
                required: false,
                default: '',
                description: `The start of the time range. All groups that have blocks overlapping with the interval specified by from and to
will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested properties',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested properties'
                }
                ]
                }]
            },
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: `This will filter all group bookings for the provided free text. Currently it only looks up if either the group name, lastname,
firstname, email or company name of the booker contains one of the provided values`
            },
                {
                displayName: 'to',
                name: 'to',
                type: 'string',
                required: false,
                default: '',
                description: `The end of the time range. All groups that have blocks overlapping with the interval specified by from and to
will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingGroupsByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingGroupsByIdGet"], resource: ["group"] } },
                default: '',
                description: 'Id of the group booking to be retrieved'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingGroupsByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingGroupsByIdGet"], resource: ["group"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored',
                options: [{ name: 'actions', value: 'actions' }, { name: 'blocks', value: 'blocks' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingGroupsByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingGroupsByIdPatch"], resource: ["group"] } },
                default: '',
                description: 'Id of the group booking to be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingGroupsByIdPatch"], resource: ["group"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'BookingGroupsByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingGroupsByIdDelete"], resource: ["group"] } },
                default: '',
                description: 'Id of the group booking to be deleted'
            },
            {
                displayName: 'id',
                name: 'BookingGroupsByIdHead_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingGroupsByIdHead"], resource: ["group"] } },
                default: '',
                description: 'Id of the group booking to be checked for existence'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingGroups_countGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingGroups_countGet"], resource: ["group"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: `This will filter all group bookings for the provided free text. Currently it only looks up if either the group name, lastname,
firstname, email or company name of the booker contains one of the provided values`
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested properties',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested properties'
                }
                ]
                }]
            },
                {
                displayName: 'from',
                name: 'from',
                type: 'string',
                required: false,
                default: '',
                description: `The start of the time range. All groups that have blocks overlapping with the interval specified by from and to
will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'to',
                name: 'to',
                type: 'string',
                required: false,
                default: '',
                description: `The end of the time range. All groups that have blocks overlapping with the interval specified by from and to
will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingGroupsByIdReservationsPost_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingGroupsByIdReservationsPost"], resource: ["group"] } },
                default: '',
                description: 'Id of the group booking the reservations should be attached to'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingGroupsByIdReservationsPost"], resource: ["group"] } },
                default: `{
  "reservations": [
    {
      "blockId": "MUC-QJNXJR",
      "arrival": "2025-07-16",
      "departure": "2025-07-18",
      "adults": 1,
      "comment": "I need a wake up service",
      "primaryGuest": {
        "title": "Mr",
        "gender": "Male",
        "firstName": "Jon",
        "middleInitial": "D",
        "lastName": "Doe",
        "email": "john.d@doe.com",
        "phone": "+4989123343",
        "address": {
          "addressLine1": "My Street 1",
          "postalCode": "12453",
          "city": "MyCity",
          "countryCode": "GB"
        },
        "company": {
          "name": "Company GmbH",
          "taxId": "1442"
        },
        "vehicleRegistration": {
          "number": "APA322",
          "countryCode": "DE"
        }
      }
    },
    {
      "blockId": "MUC-WKMCKT",
      "arrival": "2025-07-17",
      "departure": "2025-07-19",
      "adults": 1,
      "childrenAges": [
        6
      ],
      "primaryGuest": {
        "title": "Mr",
        "gender": "Male",
        "firstName": "Eric",
        "middleInitial": "E",
        "lastName": "Steinmetz",
        "email": "eric.e@steinmetz.com",
        "phone": "+4989123343",
        "address": {
          "addressLine1": "My Street 1",
          "postalCode": "12453",
          "city": "MyCity",
          "countryCode": "GB"
        },
        "vehicleRegistration": {
          "number": "APA322",
          "countryCode": "DE"
        }
      }
    }
  ]
}`,
                description: 'The list of reservations you want to create.'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingGroupsByIdReservationsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingGroupsByIdReservationsPost"], resource: ["group"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'BookingOffersGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingOffersGet"], resource: ["offer"] } },
                default: '',
                description: 'The property ID'
            },
            {
                displayName: 'arrival',
                name: 'BookingOffersGet_arrival',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingOffersGet"], resource: ["offer"] } },
                default: '',
                description: `Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'departure',
                name: 'BookingOffersGet_departure',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingOffersGet"], resource: ["offer"] } },
                default: '',
                description: `Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'adults',
                name: 'BookingOffersGet_adults',
                type: 'number',
                required: true,
                displayOptions: { show: { operation: ["BookingOffersGet"], resource: ["offer"] } },
                default: 0,
                description: 'The number of adults you want offers for'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingOffersGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingOffersGet"], resource: ["offer"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'channelCode',
                name: 'channelCode',
                type: 'options',
                required: false,
                default: 'Direct',
                description: 'Channel code, used to filter the rate plans',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'childrenAges',
                name: 'childrenAges',
                type: 'collection',
                required: false,
                default: `
[]
`,
                description: 'The ages of the children you want offers for'
            },
                {
                displayName: 'corporateCode',
                name: 'corporateCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The code associated with a corporate rate'
            },
                {
                displayName: 'includeUnavailable',
                name: 'includeUnavailable',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned'
            },
                {
                displayName: 'promoCode',
                name: 'promoCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The promo code associated with a certain special offer'
            },
                {
                displayName: 'timeSliceDefinitionIds',
                name: 'timeSliceDefinitionIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Time slice definition IDs, used to filter rate plans',
                options: [{
                    name: 'timeSliceDefinitionIdsValues',
                    displayName: 'TimeSliceDefinitionIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Time slice definition IDs, used to filter rate plans'
                }
                ]
                }]
            },
                {
                displayName: 'timeSliceTemplate',
                name: 'timeSliceTemplate',
                type: 'options',
                required: false,
                default: 'DayUse',
                description: `The time slice template used to filter the rate plans, defaults to 'over night'`,
                options: [{ name: 'DayUse', value: 'DayUse' }, { name: 'OverNight', value: 'OverNight' }]
            },
                {
                displayName: 'unitGroupIds',
                name: 'unitGroupIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Unit group IDs, used to filter rate plans',
                options: [{
                    name: 'unitGroupIdsValues',
                    displayName: 'UnitGroupIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Unit group IDs, used to filter rate plans'
                }
                ]
                }]
            },
                {
                displayName: 'unitGroupTypes',
                name: 'unitGroupTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Unit group types, used to filter rate plans',
                options: [{ name: 'BedRoom', value: 'BedRoom' }, { name: 'EventSpace', value: 'EventSpace' }, { name: 'MeetingRoom', value: 'MeetingRoom' }, { name: 'Other', value: 'Other' }, { name: 'ParkingLot', value: 'ParkingLot' }]
            }
            ]
            },
            {
                displayName: 'ratePlanId',
                name: 'BookingRate_plan_offersGet_ratePlanId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingRate-plan-offersGet"], resource: ["offer"] } },
                default: '',
                description: 'The rate plan ID'
            },
            {
                displayName: 'arrival',
                name: 'BookingRate_plan_offersGet_arrival',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingRate-plan-offersGet"], resource: ["offer"] } },
                default: '',
                description: `Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'departure',
                name: 'BookingRate_plan_offersGet_departure',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingRate-plan-offersGet"], resource: ["offer"] } },
                default: '',
                description: `Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'adults',
                name: 'BookingRate_plan_offersGet_adults',
                type: 'number',
                required: true,
                displayOptions: { show: { operation: ["BookingRate-plan-offersGet"], resource: ["offer"] } },
                default: 0,
                description: 'The number of adults you want offers for'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingRate_plan_offersGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingRate-plan-offersGet"], resource: ["offer"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'channelCode',
                name: 'channelCode',
                type: 'options',
                required: false,
                default: 'Direct',
                description: 'The channel code',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'childrenAges',
                name: 'childrenAges',
                type: 'collection',
                required: false,
                default: `
[]
`,
                description: 'The ages of the children you want offers for'
            },
                {
                displayName: 'includeUnavailable',
                name: 'includeUnavailable',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned'
            },
                {
                displayName: 'overridePrices',
                name: 'overridePrices',
                type: 'collection',
                required: false,
                default: `
[]
`,
                description: 'Desired prices for each timeslice'
            }
            ]
            },
            {
                displayName: 'ratePlanId',
                name: 'BookingService_offersGet_ratePlanId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingService-offersGet"], resource: ["offer"] } },
                default: '',
                description: 'The rate plan ID'
            },
            {
                displayName: 'arrival',
                name: 'BookingService_offersGet_arrival',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingService-offersGet"], resource: ["offer"] } },
                default: '',
                description: `Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'departure',
                name: 'BookingService_offersGet_departure',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingService-offersGet"], resource: ["offer"] } },
                default: '',
                description: `Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'adults',
                name: 'BookingService_offersGet_adults',
                type: 'number',
                required: true,
                displayOptions: { show: { operation: ["BookingService-offersGet"], resource: ["offer"] } },
                default: 0,
                description: 'The number of adults you want offers for'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingService_offersGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingService-offersGet"], resource: ["offer"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'channelCode',
                name: 'channelCode',
                type: 'options',
                required: false,
                default: 'Direct',
                description: 'The channel code used to filter the services',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'childrenAges',
                name: 'childrenAges',
                type: 'collection',
                required: false,
                default: `
[]
`,
                description: 'The ages of the children you want offers for'
            },
                {
                displayName: 'onlyDefaultDates',
                name: 'onlyDefaultDates',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether depending on the postNextDay setting of a service it will be posted before or after midnight.
Breakfast is usually delivered on the next morning, having 'postNextDay' set to true. Its 'default dates' are from the day after
arrival until the departure day. For services like dinner 'postNextDay' is false, and default dates are day of arrival until one
day before departure.
With this query parameter set to 'false', you can also ask for dates outside of those default dates. It defaults to true`
            },
                {
                displayName: 'includeUnavailable',
                name: 'includeUnavailable',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned'
            }
            ]
            },
            {
                displayName: 'ratePlanId',
                name: 'BookingOffer_indexGet_ratePlanId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingOffer-indexGet"], resource: ["offer"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'from',
                name: 'BookingOffer_indexGet_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingOffer-indexGet"], resource: ["offer"] } },
                default: '',
                description: `<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'to',
                name: 'BookingOffer_indexGet_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingOffer-indexGet"], resource: ["offer"] } },
                default: '',
                description: `<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'channelCode',
                name: 'BookingOffer_indexGet_channelCode',
                type: 'options',
                required: true,
                displayOptions: { show: { operation: ["BookingOffer-indexGet"], resource: ["offer"] } },
                default: 'Direct',
                description: '',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingOffer_indexGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingOffer-indexGet"], resource: ["offer"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingReservationsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingReservationsGet"], resource: ["reservation"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'allFoliosHaveInvoice',
                name: 'allFoliosHaveInvoice',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, returns only reservations, in which all folios are closed and have an invoice.
If set to \`false\`, returns only reservations, in which some of the folios are open or don't have an invoice`
            },
                {
                displayName: 'balanceFilter',
                name: 'balanceFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'balanceFilterValues',
                    displayName: 'BalanceFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            },
                {
                displayName: 'blockIds',
                name: 'blockIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested blocks',
                options: [{
                    name: 'blockIdsValues',
                    displayName: 'BlockIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested blocks'
                }
                ]
                }]
            },
                {
                displayName: 'bookingId',
                name: 'bookingId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter result by booking ID'
            },
                {
                displayName: 'channelCode',
                name: 'channelCode',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by the channel code',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'companyIds',
                name: 'companyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested companies',
                options: [{
                    name: 'companyIdsValues',
                    displayName: 'CompanyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested companies'
                }
                ]
                }]
            },
                {
                displayName: 'dateFilter',
                name: 'dateFilter',
                type: 'options',
                required: false,
                default: 'Arrival',
                description: `Filter by date and time attributes of reservation. Use in combination with the 'To' and 'From' attributes.
All filters will check if the date specified by the filter type is between from (included) and to (excluded).
The exception being filtering for 'stay', which will return all reservations that are overlapping with the interval specified by from and to`,
                options: [{ name: 'Arrival', value: 'Arrival' }, { name: 'ArrivalAndCheckIn', value: 'ArrivalAndCheckIn' }, { name: 'Cancellation', value: 'Cancellation' }, { name: 'Creation', value: 'Creation' }, { name: 'Departure', value: 'Departure' }, { name: 'DepartureAndCheckOut', value: 'DepartureAndCheckOut' }, { name: 'Modification', value: 'Modification' }, { name: 'Stay', value: 'Stay' }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: booker, actions, timeSlices, services, assignedUnits, company. All other values will be silently ignored',
                options: [{ name: 'actions', value: 'actions' }, { name: 'assignedUnits', value: 'assignedUnits' }, { name: 'booker', value: 'booker' }, { name: 'company', value: 'company' }, { name: 'services', value: 'services' }, { name: 'timeSlices', value: 'timeSlices' }]
            },
                {
                displayName: 'externalCode',
                name: 'externalCode',
                type: 'string',
                required: false,
                default: '',
                description: `Filter result by the external code. The result set will contain all reservations that have an external code starting with the
provided value`
            },
                {
                displayName: 'from',
                name: 'from',
                type: 'string',
                required: false,
                default: '',
                description: `The start of the time interval. When filtering by date, at least one of 'from' and 'to' has to be specified<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'marketSegmentIds',
                name: 'marketSegmentIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested market segments',
                options: [{
                    name: 'marketSegmentIdsValues',
                    displayName: 'MarketSegmentIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested market segments'
                }
                ]
                }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested properties',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested properties'
                }
                ]
                }]
            },
                {
                displayName: 'ratePlanIds',
                name: 'ratePlanIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested rate plans',
                options: [{
                    name: 'ratePlanIdsValues',
                    displayName: 'RatePlanIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested rate plans'
                }
                ]
                }]
            },
                {
                displayName: 'sort',
                name: 'sort',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all fields that can be used to sort the results. Possible values are: arrival:asc, arrival:desc, departure:asc, departure:desc, created:asc, created:desc, updated:asc, updated:desc, balance:asc, balance:desc, ID:asc, ID:desc, firstname:asc, firstname:desc, lastname:asc, lastname:desc, unitname:asc, unitname:desc. All other values will be silently ignored',
                options: [{ name: 'arrival:asc', value: 'arrival:asc' }, { name: 'arrival:desc', value: 'arrival:desc' }, { name: 'balance:asc', value: 'balance:asc' }, { name: 'balance:desc', value: 'balance:desc' }, { name: 'created:asc', value: 'created:asc' }, { name: 'created:desc', value: 'created:desc' }, { name: 'departure:asc', value: 'departure:asc' }, { name: 'departure:desc', value: 'departure:desc' }, { name: 'firstname:asc', value: 'firstname:asc' }, { name: 'firstname:desc', value: 'firstname:desc' }, { name: 'id:asc', value: 'id:asc' }, { name: 'id:desc', value: 'id:desc' }, { name: 'lastname:asc', value: 'lastname:asc' }, { name: 'lastname:desc', value: 'lastname:desc' }, { name: 'unitname:asc', value: 'unitname:asc' }, { name: 'unitname:desc', value: 'unitname:desc' }, { name: 'updated:asc', value: 'updated:asc' }, { name: 'updated:desc', value: 'updated:desc' }]
            },
                {
                displayName: 'sources',
                name: 'sources',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by source',
                options: [{
                    name: 'sourcesValues',
                    displayName: 'Sources',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by source'
                }
                ]
                }]
            },
                {
                displayName: 'status',
                name: 'status',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by reservation status',
                options: [{ name: 'Canceled', value: 'Canceled' }, { name: 'CheckedOut', value: 'CheckedOut' }, { name: 'Confirmed', value: 'Confirmed' }, { name: 'InHouse', value: 'InHouse' }, { name: 'NoShow', value: 'NoShow' }]
            },
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: `This will filter all reservations where the provided text is contained in: booker first name or last name or email or company name,
primary guest first name or last name or email or company name, external code, reservation ID, unit name. The search is case insensitive`
            },
                {
                displayName: 'to',
                name: 'to',
                type: 'string',
                required: false,
                default: '',
                description: `The end of the time interval, must be larger than 'from'. When filtering by date, at least one of 'from' and 'to' has to be specified<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'unitGroupIds',
                name: 'unitGroupIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested unit groups',
                options: [{
                    name: 'unitGroupIdsValues',
                    displayName: 'UnitGroupIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested unit groups'
                }
                ]
                }]
            },
                {
                displayName: 'unitGroupTypes',
                name: 'unitGroupTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by requested unit group types',
                options: [{ name: 'BedRoom', value: 'BedRoom' }, { name: 'EventSpace', value: 'EventSpace' }, { name: 'MeetingRoom', value: 'MeetingRoom' }, { name: 'Other', value: 'Other' }, { name: 'ParkingLot', value: 'ParkingLot' }]
            },
                {
                displayName: 'unitIds',
                name: 'unitIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by assigned units',
                options: [{
                    name: 'unitIdsValues',
                    displayName: 'UnitIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by assigned units'
                }
                ]
                }]
            },
                {
                displayName: 'validationMessageCategory',
                name: 'validationMessageCategory',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by validation message category',
                options: [{ name: 'AutoUnitAssignment', value: 'AutoUnitAssignment' }, { name: 'OfferNotAvailable', value: 'OfferNotAvailable' }]
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingReservations_countGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingReservations$countGet"], resource: ["reservation"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'allFoliosHaveInvoice',
                name: 'allFoliosHaveInvoice',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, returns only reservations, in which all folios are closed and have an invoice.
If set to \`false\`, returns only reservations, in which some of the folios are open or don't have an invoice`
            },
                {
                displayName: 'balanceFilter',
                name: 'balanceFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'balanceFilterValues',
                    displayName: 'BalanceFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            },
                {
                displayName: 'blockIds',
                name: 'blockIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested blocks',
                options: [{
                    name: 'blockIdsValues',
                    displayName: 'BlockIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested blocks'
                }
                ]
                }]
            },
                {
                displayName: 'bookingId',
                name: 'bookingId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter result by booking ID'
            },
                {
                displayName: 'channelCode',
                name: 'channelCode',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by the channel code',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'companyIds',
                name: 'companyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested companies',
                options: [{
                    name: 'companyIdsValues',
                    displayName: 'CompanyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested companies'
                }
                ]
                }]
            },
                {
                displayName: 'dateFilter',
                name: 'dateFilter',
                type: 'options',
                required: false,
                default: 'Arrival',
                description: `Filter by date and time attributes of reservation. Use in combination with the 'To' and 'From' attributes.
All filters will check if the date specified by the filter type is between from (included) and to (excluded).
The exception being filtering for 'stay', which will return all reservations that are overlapping with the interval specified by from and to`,
                options: [{ name: 'Arrival', value: 'Arrival' }, { name: 'ArrivalAndCheckIn', value: 'ArrivalAndCheckIn' }, { name: 'Cancellation', value: 'Cancellation' }, { name: 'Creation', value: 'Creation' }, { name: 'Departure', value: 'Departure' }, { name: 'DepartureAndCheckOut', value: 'DepartureAndCheckOut' }, { name: 'Modification', value: 'Modification' }, { name: 'Stay', value: 'Stay' }]
            },
                {
                displayName: 'externalCode',
                name: 'externalCode',
                type: 'string',
                required: false,
                default: '',
                description: `Filter result by the external code. The result set will contain all reservations that have an external code starting with the
provided value`
            },
                {
                displayName: 'from',
                name: 'from',
                type: 'string',
                required: false,
                default: '',
                description: `The start of the time interval. When filtering by date, at least one of 'from' and 'to' has to be specified<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'marketSegmentIds',
                name: 'marketSegmentIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested market segments',
                options: [{
                    name: 'marketSegmentIdsValues',
                    displayName: 'MarketSegmentIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested market segments'
                }
                ]
                }]
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested properties',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested properties'
                }
                ]
                }]
            },
                {
                displayName: 'ratePlanIds',
                name: 'ratePlanIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested rate plans',
                options: [{
                    name: 'ratePlanIdsValues',
                    displayName: 'RatePlanIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested rate plans'
                }
                ]
                }]
            },
                {
                displayName: 'sources',
                name: 'sources',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by source',
                options: [{
                    name: 'sourcesValues',
                    displayName: 'Sources',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by source'
                }
                ]
                }]
            },
                {
                displayName: 'status',
                name: 'status',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by reservation status',
                options: [{ name: 'Canceled', value: 'Canceled' }, { name: 'CheckedOut', value: 'CheckedOut' }, { name: 'Confirmed', value: 'Confirmed' }, { name: 'InHouse', value: 'InHouse' }, { name: 'NoShow', value: 'NoShow' }]
            },
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: `This will filter all reservations where the provided text is contained in: booker first name or last name or email or company name,
primary guest first name or last name or email or company name, external code, reservation ID, unit name. The search is case insensitive`
            },
                {
                displayName: 'to',
                name: 'to',
                type: 'string',
                required: false,
                default: '',
                description: `The end of the time interval, must be larger than 'from'. When filtering by date, at least one of 'from' and 'to' has to be specified<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'unitGroupIds',
                name: 'unitGroupIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by requested unit groups',
                options: [{
                    name: 'unitGroupIdsValues',
                    displayName: 'UnitGroupIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by requested unit groups'
                }
                ]
                }]
            },
                {
                displayName: 'unitGroupTypes',
                name: 'unitGroupTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by requested unit group types',
                options: [{ name: 'BedRoom', value: 'BedRoom' }, { name: 'EventSpace', value: 'EventSpace' }, { name: 'MeetingRoom', value: 'MeetingRoom' }, { name: 'Other', value: 'Other' }, { name: 'ParkingLot', value: 'ParkingLot' }]
            },
                {
                displayName: 'unitIds',
                name: 'unitIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by assigned units',
                options: [{
                    name: 'unitIdsValues',
                    displayName: 'UnitIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by assigned units'
                }
                ]
                }]
            },
                {
                displayName: 'validationMessageCategory',
                name: 'validationMessageCategory',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by validation message category',
                options: [{ name: 'AutoUnitAssignment', value: 'AutoUnitAssignment' }, { name: 'OfferNotAvailable', value: 'OfferNotAvailable' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingReservationsByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservationsByIdGet"], resource: ["reservation"] } },
                default: '',
                description: 'Id of the reservation to be retrieved'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingReservationsByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingReservationsByIdGet"], resource: ["reservation"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: timeSlices, services, booker, actions, company, assignedUnits. All other values will be silently ignored',
                options: [{ name: 'actions', value: 'actions' }, { name: 'assignedUnits', value: 'assignedUnits' }, { name: 'booker', value: 'booker' }, { name: 'company', value: 'company' }, { name: 'services', value: 'services' }, { name: 'timeSlices', value: 'timeSlices' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingReservationsByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservationsByIdPatch"], resource: ["reservation"] } },
                default: '',
                description: 'Id of the reservation to be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingReservationsByIdPatch"], resource: ["reservation"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'BookingReservationsByIdOffersGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservationsByIdOffersGet"], resource: ["reservation"] } },
                default: '',
                description: 'Id of the reservation to be amended'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingReservationsByIdOffersGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingReservationsByIdOffersGet"], resource: ["reservation"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'adults',
                name: 'adults',
                type: 'number',
                required: false,
                default: 0,
                description: 'Number of adults'
            },
                {
                displayName: 'arrival',
                name: 'arrival',
                type: 'string',
                required: false,
                default: '',
                description: `Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'channelCode',
                name: 'channelCode',
                type: 'options',
                required: false,
                default: 'Direct',
                description: 'The channel code used to filter the rate plans',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'childrenAges',
                name: 'childrenAges',
                type: 'collection',
                required: false,
                default: `
[]
`,
                description: 'Ages of children'
            },
                {
                displayName: 'departure',
                name: 'departure',
                type: 'string',
                required: false,
                default: '',
                description: `Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'includeUnavailable',
                name: 'includeUnavailable',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned'
            },
                {
                displayName: 'promoCode',
                name: 'promoCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The promo code associated with a certain special offer, like corporate rate'
            },
                {
                displayName: 'requote',
                name: 'requote',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether the offers should be re-quoted based on current prices, or only additions like change of number of adults should be calculated.
Defaults to 'false'`
            },
                {
                displayName: 'unitGroupIds',
                name: 'unitGroupIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'The list of unit groups used to filter the offers',
                options: [{
                    name: 'unitGroupIdsValues',
                    displayName: 'UnitGroupIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'The list of unit groups used to filter the offers.'
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingReservationsByIdService_offersGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservationsByIdService-offersGet"], resource: ["reservation"] } },
                default: '',
                description: 'Id of the reservation'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingReservationsByIdService_offersGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingReservationsByIdService-offersGet"], resource: ["reservation"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'channelCode',
                name: 'channelCode',
                type: 'options',
                required: false,
                default: 'Direct',
                description: 'The channel code used to filter the services',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'onlyDefaultDates',
                name: 'onlyDefaultDates',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether depending on the postNextDay setting of a service it will by default be posted before or after midnight.
Breakfast is usually delivered on the next morning, so all the dates from the day after arrival to the departure day
are default dates and will have this flag set to true. For services like a dinner it is the other way around.
With this query parameter, you can also ask for the dates, that usually the service will not be booked. It defaults to true`
            },
                {
                displayName: 'includeUnavailable',
                name: 'includeUnavailable',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned'
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingReservationsByIdServicesGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservationsByIdServicesGet"], resource: ["reservation"] } },
                default: '',
                description: 'Id of the reservation'
            },
            {
                displayName: 'id',
                name: 'BookingReservationsByIdServicesDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservationsByIdServicesDelete"], resource: ["reservation"] } },
                default: '',
                description: 'Id of the reservation'
            },
            {
                displayName: 'serviceId',
                name: 'BookingReservationsByIdServicesDelete_serviceId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservationsByIdServicesDelete"], resource: ["reservation"] } },
                default: '',
                description: 'The ID of the service to delete'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdAssign_unitPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdAssign-unitPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation a unit should be assigned to'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingReservation_actionsByIdAssign_unitPut_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdAssign-unitPut"], resource: ["reservationactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'unitConditions',
                name: 'unitConditions',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'The optional unit conditions for unit that you want to auto assign for',
                options: [{ name: 'Clean', value: 'Clean' }, { name: 'CleanToBeInspected', value: 'CleanToBeInspected' }, { name: 'Dirty', value: 'Dirty' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdAssign_unitByUnitIdPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdAssign-unitByUnitIdPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation the unit should be assigned to'
            },
            {
                displayName: 'unitId',
                name: 'BookingReservation_actionsByIdAssign_unitByUnitIdPut_unitId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdAssign-unitByUnitIdPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'The ID of the unit to be assigned'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingReservation_actionsByIdAssign_unitByUnitIdPut_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdAssign-unitByUnitIdPut"], resource: ["reservationactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'from',
                name: 'from',
                type: 'string',
                required: false,
                default: '',
                description: `The start date and optional time for the unit assignment. If not specified, the reservation's arrival will be used.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'to',
                name: 'to',
                type: 'string',
                required: false,
                default: '',
                description: `The end date and optional time for the unit assignment. If not specified, the reservation's departure will be used.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdUnassign_unitsPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdUnassign-unitsPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation the unit should be unassigned for'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdCheckinPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdCheckinPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation that should be processed'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingReservation_actionsByIdCheckinPut_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdCheckinPut"], resource: ["reservationactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'withCityTax',
                name: 'withCityTax',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether define if city tax should be added for this reservation or not. The default is "true"`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdRevert_checkinPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdRevert-checkinPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'The ID of the reservation to reverse the check-in for'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdCheckoutPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdCheckoutPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation that should be processed'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdCancelPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdCancelPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation that should be processed'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdNoshowPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdNoshowPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation that should be processed'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdAmendPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdAmendPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation that should be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdAmendPut"], resource: ["reservationactions"] } },
                default: `{
  "arrival": "2025-07-16T17:00:00+02:00",
  "departure": "2025-07-18T11:00:00+02:00",
  "adults": 1,
  "childrenAges": [
    6
  ],
  "requote": false,
  "timeSlices": [
    {
      "ratePlanId": "MUC-NONREF-DBL",
      "totalGrossAmount": {
        "amount": 86.00,
        "currency": "EUR"
      }
    },
    {
      "ratePlanId": "MUC-NONREF-DBL",
      "totalGrossAmount": {
        "amount": 101.00,
        "currency": "EUR"
      }
    }
  ]
}`,
                description: 'The new stay details that should be applied to the reservation.'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdAmend_forcePut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdAmend$forcePut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation that should be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdAmend$forcePut"], resource: ["reservationactions"] } },
                default: `{
  "arrival": "2025-07-16T17:00:00+02:00",
  "departure": "2025-07-18T11:00:00+02:00",
  "adults": 1,
  "childrenAges": [
    6
  ],
  "requote": false,
  "timeSlices": [
    {
      "ratePlanId": "MUC-NONREF-DBL",
      "totalGrossAmount": {
        "amount": 86.00,
        "currency": "EUR"
      }
    },
    {
      "ratePlanId": "MUC-NONREF-DBL",
      "totalGrossAmount": {
        "amount": 101.00,
        "currency": "EUR"
      }
    }
  ]
}`,
                description: 'The new stay details that should be applied to the reservation.'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdBook_servicePut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdBook-servicePut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdBook-servicePut"], resource: ["reservationactions"] } },
                default: `{
  "serviceId": "MUC-SPA",
  "dates": [
    {
      "serviceDate": "2025-07-14",
      "amount": {
        "amount": 25.0,
        "currency": "EUR"
      }
    },
    {
      "serviceDate": "2025-07-15"
    }
  ]
}`,
                description: 'The request body data'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdBook_service_forcePut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdBook-service$forcePut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdBook-service$forcePut"], resource: ["reservationactions"] } },
                default: `{
  "serviceId": "MUC-SPA",
  "dates": [
    {
      "serviceDate": "2025-07-14",
      "amount": {
        "amount": 25.0,
        "currency": "EUR"
      }
    },
    {
      "serviceDate": "2025-07-15"
    }
  ]
}`,
                description: 'The request body data'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdRemove_city_taxPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdRemove-city-taxPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdAdd_city_taxPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation-actionsByIdAdd-city-taxPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdLock_unitPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation_actionsByIdLock_unitPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation'
            },
            {
                displayName: 'id',
                name: 'BookingReservation_actionsByIdUnlock_unitPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingReservation_actionsByIdUnlock_unitPut"], resource: ["reservationactions"] } },
                default: '',
                description: 'Id of the reservation'
            },
            {
                displayName: 'type',
                name: 'BookingTypesByTypeAllowed_valuesGet_type',
                type: 'options',
                required: true,
                displayOptions: { show: { operation: ["BookingTypesByTypeAllowed-valuesGet"], resource: ["types"] } },
                default: 'Gender',
                description: 'The type to provide allowed values for',
                options: [{ name: 'Gender', value: 'Gender' }, { name: 'IdentificationType', value: 'IdentificationType' }]
            },
            {
                displayName: 'countryCode',
                name: 'BookingTypesByTypeAllowed_valuesGet_countryCode',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["BookingTypesByTypeAllowed-valuesGet"], resource: ["types"] } },
                default: '',
                description: 'The code of the country in which the property is located in ISO 3166-1 alpha-2 format'
            },
            {
                displayName: 'Additional Fields',
                name: 'BookingTypesByTypeAllowed_valuesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["BookingTypesByTypeAllowed-valuesGet"], resource: ["types"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: `Filter the result by the provided free text.
If specified, only values that contain one of the provided values will be returned`
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'sort',
                name: 'sort',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all fields that can be used to sort the results. Possible values are: value:asc, value:desc. All other values will be silently ignored',
                options: [{ name: 'value:asc', value: 'value:asc' }, { name: 'value:desc', value: 'value:desc' }]
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosGet"], resource: ["folio"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'balanceFilter',
                name: 'balanceFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'balanceFilterValues',
                    displayName: 'BalanceFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            },
                {
                displayName: 'bookingIds',
                name: 'bookingIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter folio list by booking IDs',
                options: [{
                    name: 'bookingIdsValues',
                    displayName: 'BookingIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter folio list by booking IDs'
                }
                ]
                }]
            },
                {
                displayName: 'checkedOutOnAccountsReceivable',
                name: 'checkedOutOnAccountsReceivable',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, only return folios that have been checked out on accounts receivables
Otherwise, returns all`
            },
                {
                displayName: 'companyIds',
                name: 'companyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter folio list by company IDs',
                options: [{
                    name: 'companyIdsValues',
                    displayName: 'CompanyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter folio list by company IDs'
                }
                ]
                }]
            },
                {
                displayName: 'createdFrom',
                name: 'createdFrom',
                type: 'string',
                required: false,
                default: '',
                description: `The inclusive start time of the date of creation. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'createdTo',
                name: 'createdTo',
                type: 'string',
                required: false,
                default: '',
                description: `The exclusive end time of the date of creation. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'excludeClosed',
                name: 'excludeClosed',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, closed folios are filtered out from the result collection - <b>DEPRECATED: This field will be removed soon. Please use Status=Open instead.</b>`
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: allowances, allowedActions, transitoryCharges, charges, company, payments, warnings. All other values will be silently ignored',
                options: [{ name: 'allowances', value: 'allowances' }, { name: 'allowedActions', value: 'allowedActions' }, { name: 'charges', value: 'charges' }, { name: 'company', value: 'company' }, { name: 'payments', value: 'payments' }, { name: 'transitoryCharges', value: 'transitoryCharges' }, { name: 'warnings', value: 'warnings' }]
            },
                {
                displayName: 'externalFolioCode',
                name: 'externalFolioCode',
                type: 'string',
                required: false,
                default: '',
                description: `Allows filtering external folios by code.
Useful when you use external folios with custom codes.
Specifying this parameter will ignore the <b>Type</b> parameter and treat as if it would be set to "External" instead`
            },
                {
                displayName: 'hasInvoices',
                name: 'hasInvoices',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, only return folios that been invoices`
            },
                {
                displayName: 'isEmpty',
                name: 'isEmpty',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, only return empty folios (no unmoved [transitory] charges, no unmoved payments, no allowances).
If set to \`false\`, only return non-empty folios`
            },
                {
                displayName: 'onlyMain',
                name: 'onlyMain',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, only main folios are returned, otherwise all`
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter folio list by property IDs',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter folio list by property IDs'
                }
                ]
                }]
            },
                {
                displayName: 'reservationIds',
                name: 'reservationIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter folio list by reservation IDs',
                options: [{
                    name: 'reservationIdsValues',
                    displayName: 'ReservationIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter folio list by reservation IDs'
                }
                ]
                }]
            },
                {
                displayName: 'status',
                name: 'status',
                type: 'options',
                required: false,
                default: 'Open',
                description: 'The status of the folio',
                options: [{ name: 'Closed', value: 'Closed' }, { name: 'Open', value: 'Open' }]
            },
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: `This will filter all folios where the provided text is contained in: debitor first name or last name or company name,
folio ID. The search is case insensitive`
            },
                {
                displayName: 'type',
                name: 'type',
                type: 'options',
                required: false,
                default: 'House',
                description: 'The type of the folio',
                options: [{ name: 'Booking', value: 'Booking' }, { name: 'External', value: 'External' }, { name: 'Guest', value: 'Guest' }, { name: 'House', value: 'House' }]
            },
                {
                displayName: 'updatedFrom',
                name: 'updatedFrom',
                type: 'string',
                required: false,
                default: '',
                description: `The inclusive start time of the date of the last update. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'updatedTo',
                name: 'updatedTo',
                type: 'string',
                required: false,
                default: '',
                description: `The exclusive end time of the date of the last update. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosPost"], resource: ["folio"] } },
                default: `{
  "reservationId": "TS23XF",
  "debitor": {
    "title": "Dr",
    "firstName": "Jon",
    "name": "Doe",
    "address": {
      "addressLine1": "My Street 1",
      "postalCode": "12453",
      "city": "MyCity",
      "countryCode": "GB"
    },
    "company": {
      "name": "Horns & Hooves Inc",
      "taxId": "TAX-12345",
      "additionalTaxId": "TAX2-12345",
      "additionalTaxId2": "TAX3-12345"
    },
    "personalTaxId": "123456789",
    "reference": "SRC-1232",
    "phone": "123456789"
  },
  "type": "Guest"
}`,
                description: 'The definition of the folio.'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosPost"], resource: ["folio"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFolios_countGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFolios$countGet"], resource: ["folio"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'balanceFilter',
                name: 'balanceFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'balanceFilterValues',
                    displayName: 'BalanceFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            },
                {
                displayName: 'bookingIds',
                name: 'bookingIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter folio list by booking IDs',
                options: [{
                    name: 'bookingIdsValues',
                    displayName: 'BookingIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter folio list by booking IDs'
                }
                ]
                }]
            },
                {
                displayName: 'checkedOutOnAccountsReceivable',
                name: 'checkedOutOnAccountsReceivable',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, only return folios that have been checked out on accounts receivables
Otherwise, returns all`
            },
                {
                displayName: 'companyIds',
                name: 'companyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter folio list by company IDs',
                options: [{
                    name: 'companyIdsValues',
                    displayName: 'CompanyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter folio list by company IDs'
                }
                ]
                }]
            },
                {
                displayName: 'createdFrom',
                name: 'createdFrom',
                type: 'string',
                required: false,
                default: '',
                description: `The inclusive start time of the date of creation. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'createdTo',
                name: 'createdTo',
                type: 'string',
                required: false,
                default: '',
                description: `The exclusive end time of the date of creation. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'excludeClosed',
                name: 'excludeClosed',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, closed folios are filtered out from the result collection - <b>DEPRECATED: This field will be removed soon. Please use Status=Open instead.</b>`
            },
                {
                displayName: 'externalFolioCode',
                name: 'externalFolioCode',
                type: 'string',
                required: false,
                default: '',
                description: `Allows filtering external folios by code.
Useful when you use external folios with custom codes.
Specifying this parameter will ignore the <b>Type</b> parameter and treat as if it would be set to "External" instead`
            },
                {
                displayName: 'hasInvoices',
                name: 'hasInvoices',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, only return folios that been invoices`
            },
                {
                displayName: 'isEmpty',
                name: 'isEmpty',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, only return empty folios (no unmoved [transitory] charges, no unmoved payments, no allowances).
If set to \`false\`, only return non-empty folios`
            },
                {
                displayName: 'onlyMain',
                name: 'onlyMain',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, only main folios are returned, otherwise all`
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter folio list by property IDs',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter folio list by property IDs'
                }
                ]
                }]
            },
                {
                displayName: 'reservationIds',
                name: 'reservationIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter folio list by reservation IDs',
                options: [{
                    name: 'reservationIdsValues',
                    displayName: 'ReservationIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter folio list by reservation IDs'
                }
                ]
                }]
            },
                {
                displayName: 'status',
                name: 'status',
                type: 'options',
                required: false,
                default: 'Open',
                description: 'The status of the folio',
                options: [{ name: 'Closed', value: 'Closed' }, { name: 'Open', value: 'Open' }]
            },
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: `This will filter all folios where the provided text is contained in: debitor first name or last name or company name,
folio ID. The search is case insensitive`
            },
                {
                displayName: 'type',
                name: 'type',
                type: 'options',
                required: false,
                default: 'House',
                description: 'The type of the folio',
                options: [{ name: 'Booking', value: 'Booking' }, { name: 'External', value: 'External' }, { name: 'Guest', value: 'Guest' }, { name: 'House', value: 'House' }]
            },
                {
                displayName: 'updatedFrom',
                name: 'updatedFrom',
                type: 'string',
                required: false,
                default: '',
                description: `The inclusive start time of the date of the last update. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'updatedTo',
                name: 'updatedTo',
                type: 'string',
                required: false,
                default: '',
                description: `The exclusive end time of the date of the last update. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'FinanceFoliosByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByIdGet"], resource: ["folio"] } },
                default: '',
                description: 'The ID of the folio'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosByIdGet"], resource: ["folio"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: folios. All other values will be silently ignored',
                options: [{ name: 'folios', value: 'folios' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'FinanceFoliosByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByIdPatch"], resource: ["folio"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByIdPatch"], resource: ["folio"] } },
                default: `
{}
`,
                description: `Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.
            See the FolioDebitorModel in GET for values that can be changed.`
            },
            {
                displayName: 'id',
                name: 'FinanceFoliosByIdHead_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByIdHead"], resource: ["folio"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'id',
                name: 'FinanceFoliosByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByIdDelete"], resource: ["folio"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdChargesPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdChargesPost"], resource: ["folioactions"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdChargesPost"], resource: ["folioactions"] } },
                default: `{
  "serviceType": "FoodAndBeverages",
  "vatType": "Normal",
  "subAccountId": "MUC-BEER",
  "name": "Restaurant",
  "amount": {
    "amount": 23.0,
    "currency": "EUR"
  },
  "receipt": "R23412"
}`,
                description: 'The charge to be added'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFolio_actionsByFolioIdChargesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdChargesPost"], resource: ["folioactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdTransitory_chargesPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdTransitory-chargesPost"], resource: ["folioactions"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdTransitory-chargesPost"], resource: ["folioactions"] } },
                default: `{
  "name": "Restaurant",
  "amount": {
    "amount": 23.0,
    "currency": "EUR"
  },
  "receipt": "R23412"
}`,
                description: 'The transitory charge to be added'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFolio_actionsByFolioIdTransitory_chargesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdTransitory-chargesPost"], resource: ["folioactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdCancellation_feePost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdCancellation-feePost"], resource: ["folioactions"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdCancellation-feePost"], resource: ["folioactions"] } },
                default: `
{}
`,
                description: 'The cancellation fee to be added'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFolio_actionsByFolioIdCancellation_feePost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdCancellation-feePost"], resource: ["folioactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdNo_show_feePost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdNo-show-feePost"], resource: ["folioactions"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdNo-show-feePost"], resource: ["folioactions"] } },
                default: `
{}
`,
                description: 'The no-show fee to be added'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFolio_actionsByFolioIdNo_show_feePost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdNo-show-feePost"], resource: ["folioactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdClosePut_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdClosePut"], resource: ["folioactions"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdReopenPut_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdReopenPut"], resource: ["folioactions"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdMove_chargesPut_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdMove-chargesPut"], resource: ["folioactions"] } },
                default: '',
                description: 'The ID of the source folio from where the charges should be moved away'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdMove-chargesPut"], resource: ["folioactions"] } },
                default: `{
  "targetFolioId": "KFCSQUID-1",
  "reason": "Test",
  "chargeIds": [
    "KFCSQUID-1-C-1",
    "KFCSQUID-1-C-5"
  ],
  "allowanceIds": [
    "KFCSQUID-1-A-1",
    "KFCSQUID-1-A-2"
  ],
  "transitoryChargeIds": [
    "KFCSQUID-1-TC-1",
    "KFCSQUID-1-TC-2"
  ]
}`,
                description: 'See class.'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsBulk-movePut"], resource: ["folioactions"] } },
                default: `{
  "items": [
    {
      "sourceFolioId": "SPRJDQNU-1",
      "targetFolioId": "KFCSQUID-1",
      "chargeIds": [
        "SPRJDQNU-1-C-1",
        "SPRJDQNU-1-C-5"
      ]
    },
    {
      "sourceFolioId": "TTDKOWNC-1",
      "targetFolioId": "YXPZMQAS-1",
      "chargeIds": [
        "TTDKOWNC-1-C-2",
        "TTDKOWNC-1-C-3"
      ]
    }
  ],
  "reason": "Test"
}`,
                description: 'See class.'
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdMove_all_chargesPut_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdMove-all-chargesPut"], resource: ["folioactions"] } },
                default: '',
                description: 'The ID of the source folio from where the charges should be moved away'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdMove-all-chargesPut"], resource: ["folioactions"] } },
                default: `{
  "targetFolioId": "KFCSQUID-1",
  "reason": "Test"
}`,
                description: 'See class.'
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdChargesByChargeIdAllowancesPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost"], resource: ["folioactions"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'chargeId',
                name: 'FinanceFolio_actionsByFolioIdChargesByChargeIdAllowancesPost_chargeId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost"], resource: ["folioactions"] } },
                default: '',
                description: 'The ID of the charge allowance posted for'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost"], resource: ["folioactions"] } },
                default: `{
  "reason": "Reason",
  "amount": {
    "amount": 1.0,
    "currency": "EUR"
  }
}`,
                description: 'Allowance data'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFolio_actionsByFolioIdChargesByChargeIdAllowancesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost"], resource: ["folioactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdAllowancesPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdAllowancesPost"], resource: ["folioactions"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdAllowancesPost"], resource: ["folioactions"] } },
                default: `{
  "serviceType": "Other",
  "vatType": "Normal",
  "subAccountId": "MUC-REST",
  "reason": "Good guy discount",
  "amount": {
    "amount": 22.0,
    "currency": "EUR"
  }
}`,
                description: 'Allowance amount and post reason'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFolio_actionsByFolioIdAllowancesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdAllowancesPost"], resource: ["folioactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdBulk_allowancesPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdBulk-allowancesPost"], resource: ["folioactions"] } },
                default: '',
                description: 'The ID of the folio'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdBulk-allowancesPost"], resource: ["folioactions"] } },
                default: `{
  "items": [
    {
      "chargeId": "IDDQD-1-1-TS-1",
      "amount": {
        "amount": 13.0,
        "currency": "EUR"
      }
    },
    {
      "chargeId": "IDDQD-1-1-ES-2",
      "amount": {
        "amount": 37.0,
        "currency": "EUR"
      }
    }
  ],
  "reason": "discount"
}`,
                description: 'Allowance amount and post reason'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFolio_actionsByFolioIdBulk_allowancesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdBulk-allowancesPost"], resource: ["folioactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdPost_chargesPut_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdPost-chargesPut"], resource: ["folioactions"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdMove_paymentsPut_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdMove-paymentsPut"], resource: ["folioactions"] } },
                default: '',
                description: 'The ID of the source folio from where the payments should be moved away'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdMove-paymentsPut"], resource: ["folioactions"] } },
                default: `{
  "targetFolioId": "KFCSQUID-1",
  "reason": "Test",
  "paymentIds": [
    "KFCSQUID-1-C-1",
    "KFCSQUID-1-C-5"
  ]
}`,
                description: 'See class.'
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdCorrectPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdCorrectPost"], resource: ["folioactions"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdCorrectPost"], resource: ["folioactions"] } },
                default: `{
  "reason": "Minibar is not paid by the company",
  "chargeIds": [
    "IDDQD-1-C-1",
    "IDDQD-1-C-5"
  ],
  "allowanceIds": [
    "IDDQD-1-A-1",
    "IDDQD-1-A-5"
  ],
  "transitoryChargeIds": [
    "IDDQD-1-TC-1",
    "IDDQD-1-TC-5"
  ]
}`,
                description: 'Array of chargeIds to move and reason'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFolio_actionsByFolioIdCorrectPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdCorrectPost"], resource: ["folioactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdChargesByChargeIdSplitPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost"], resource: ["folioactions"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'chargeId',
                name: 'FinanceFolio_actionsByFolioIdChargesByChargeIdSplitPost_chargeId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost"], resource: ["folioactions"] } },
                default: '',
                description: 'The ID of the charge'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost"], resource: ["folioactions"] } },
                default: `{
  "percent": 51.0,
  "type": "ByPercent"
}`,
                description: 'See class'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFolio_actionsByFolioIdChargesByChargeIdSplitPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost"], resource: ["folioactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFolio_actionsByFolioIdPaymentsByPaymentIdSplitPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost"], resource: ["folioactions"] } },
                default: '',
                description: 'The folio ID'
            },
            {
                displayName: 'paymentId',
                name: 'FinanceFolio_actionsByFolioIdPaymentsByPaymentIdSplitPost_paymentId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost"], resource: ["folioactions"] } },
                default: '',
                description: 'The ID of the payment'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost"], resource: ["folioactions"] } },
                default: `{
  "percent": 51.0,
  "type": "ByPercent"
}`,
                description: 'See class'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFolio_actionsByFolioIdPaymentsByPaymentIdSplitPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost"], resource: ["folioactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFoliosByFolioIdPaymentsGet_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsGet"], resource: ["foliopayments"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosByFolioIdPaymentsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsGet"], resource: ["foliopayments"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'statusCodes',
                name: 'statusCodes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter payments by one or more status',
                options: [{ name: 'Canceled', value: 'Canceled' }, { name: 'Failure', value: 'Failure' }, { name: 'Pending', value: 'Pending' }, { name: 'Success', value: 'Success' }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored',
                options: [{ name: 'actions', value: 'actions' }]
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFoliosByFolioIdPaymentsPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsPost"], resource: ["foliopayments"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsPost"], resource: ["foliopayments"] } },
                default: `{
  "method": "Cash",
  "receipt": "BLIPKWXP-1",
  "amount": {
    "amount": 230.0,
    "currency": "EUR"
  },
  "paidCharges": [
    {
      "chargeId": "BLIPKWXP-1-1-1",
      "amount": 230.0
    }
  ]
}`,
                description: 'The definition of the payment.'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosByFolioIdPaymentsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsPost"], resource: ["foliopayments"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdGet_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsByPaymentIdGet"], resource: ["foliopayments"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'paymentId',
                name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdGet_paymentId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsByPaymentIdGet"], resource: ["foliopayments"] } },
                default: '',
                description: 'The payment ID'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsByPaymentIdGet"], resource: ["foliopayments"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored',
                options: [{ name: 'actions', value: 'actions' }]
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFoliosByFolioIdPaymentsBy_terminalPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsBy-terminalPost"], resource: ["foliopayments"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsBy-terminalPost"], resource: ["foliopayments"] } },
                default: `{
  "terminalId": "V400m-324689704",
  "amount": {
    "amount": 230.0,
    "currency": "EUR"
  },
  "paidCharges": [
    {
      "chargeId": "BLIPKWXP-1-1-1",
      "amount": 230.0
    }
  ]
}`,
                description: 'The definition of the payment.'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosByFolioIdPaymentsBy_terminalPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsBy-terminalPost"], resource: ["foliopayments"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFoliosByFolioIdPaymentsBy_authorizationPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsBy-authorizationPost"], resource: ["foliopayments"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsBy-authorizationPost"], resource: ["foliopayments"] } },
                default: `{
  "transactionReference": "564578124534890J",
  "referenceType": "PspReference",
  "amount": {
    "amount": 330.0,
    "currency": "EUR"
  },
  "paidCharges": [
    {
      "chargeId": "BLIPKWXP-1-1-1",
      "amount": 230.0
    }
  ]
}`,
                description: 'The definition of the payment.'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosByFolioIdPaymentsBy_authorizationPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsBy-authorizationPost"], resource: ["foliopayments"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFoliosByFolioIdPaymentsBy_payment_accountPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsBy-payment-accountPost"], resource: ["foliopayments"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsBy-payment-accountPost"], resource: ["foliopayments"] } },
                default: `{
  "amount": {
    "amount": 230.0,
    "currency": "EUR"
  },
  "paidCharges": [
    {
      "chargeId": "BLIPKWXP-1-1-1",
      "amount": 200.0
    }
  ]
}`,
                description: 'The definition of the payment.'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosByFolioIdPaymentsBy_payment_accountPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsBy-payment-accountPost"], resource: ["foliopayments"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFoliosByFolioIdPaymentsBy_linkPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsBy-linkPost"], resource: ["foliopayments"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsBy-linkPost"], resource: ["foliopayments"] } },
                default: `{
  "expiresAt": "2025-07-16T14:47:37.8671589Z",
  "countryCode": "de",
  "description": "Prepayment for the group booking apaleo Summer party",
  "payerEmail": "0chai@hemenal5.space",
  "amount": {
    "amount": 150.0,
    "currency": "EUR"
  },
  "paidCharges": [
    {
      "chargeId": "BLIPKWXP-1-1-1",
      "amount": 230.0
    }
  ]
}`,
                description: 'The definition of the payment link.'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosByFolioIdPaymentsBy_linkPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsBy-linkPost"], resource: ["foliopayments"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut"], resource: ["foliopayments"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'paymentId',
                name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut_paymentId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut"], resource: ["foliopayments"] } },
                default: '',
                description: 'The ID of the payment'
            },
            {
                displayName: 'folioId',
                name: 'FinanceFoliosByFolioIdRefundsGet_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdRefundsGet"], resource: ["foliopayments"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosByFolioIdRefundsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdRefundsGet"], resource: ["foliopayments"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'statusCodes',
                name: 'statusCodes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter refunds by one or more status',
                options: [{ name: 'Canceled', value: 'Canceled' }, { name: 'Failure', value: 'Failure' }, { name: 'Pending', value: 'Pending' }, { name: 'Success', value: 'Success' }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFoliosByFolioIdRefundsPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdRefundsPost"], resource: ["foliopayments"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdRefundsPost"], resource: ["foliopayments"] } },
                default: `{
  "method": "Cash",
  "amount": {
    "amount": 10.0,
    "currency": "EUR"
  },
  "receipt": "CSH-201824120003",
  "businessDate": "2025-07-14",
  "reason": "Refund for the cancelled service"
}`,
                description: 'The definition of the refund.'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosByFolioIdRefundsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdRefundsPost"], resource: ["foliopayments"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'folioId',
                name: 'FinanceFoliosByFolioIdRefundsByRefundIdGet_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdRefundsByRefundIdGet"], resource: ["foliopayments"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'refundId',
                name: 'FinanceFoliosByFolioIdRefundsByRefundIdGet_refundId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdRefundsByRefundIdGet"], resource: ["foliopayments"] } },
                default: '',
                description: 'The refund ID'
            },
            {
                displayName: 'folioId',
                name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost"], resource: ["foliopayments"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'paymentId',
                name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_paymentId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost"], resource: ["foliopayments"] } },
                default: '',
                description: 'The payment Id'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost"], resource: ["foliopayments"] } },
                default: `{
  "amount": {
    "amount": 10.0,
    "currency": "EUR"
  },
  "businessDate": "2025-07-14",
  "reason": "Refund for the cancelled service"
}`,
                description: 'The definition of the refund.'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost"], resource: ["foliopayments"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'languageCode',
                name: 'FinanceInvoicesPreview_pdfGet_languageCode',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceInvoicesPreview-pdfGet"], resource: ["invoice"] } },
                default: '',
                description: 'The language in which the invoice should be produced'
            },
            {
                displayName: 'folioId',
                name: 'FinanceInvoicesPreview_pdfGet_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceInvoicesPreview-pdfGet"], resource: ["invoice"] } },
                default: '',
                description: 'The ID of the folio for which the invoice should be created'
            },
            {
                displayName: 'folioId',
                name: 'FinanceInvoicesPreviewGet_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceInvoicesPreviewGet"], resource: ["invoice"] } },
                default: '',
                description: 'The ID of the folio for which the invoice should be created'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceInvoicesPreviewGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceInvoicesPreviewGet"], resource: ["invoice"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored',
                options: [{ name: 'company', value: 'company' }]
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceInvoicesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceInvoicesGet"], resource: ["invoice"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'bookingIds',
                name: 'bookingIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter by booking IDs',
                options: [{
                    name: 'bookingIdsValues',
                    displayName: 'BookingIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter by booking IDs'
                }
                ]
                }]
            },
                {
                displayName: 'checkedOutOnAccountsReceivable',
                name: 'checkedOutOnAccountsReceivable',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, only return invoices with an open balance (AR)
Otherwise, returns all`
            },
                {
                displayName: 'companyIds',
                name: 'companyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter by company IDs',
                options: [{
                    name: 'companyIdsValues',
                    displayName: 'CompanyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter by company IDs'
                }
                ]
                }]
            },
                {
                displayName: 'dateFilter',
                name: 'dateFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `Filter by invoice date<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'dateFilterValues',
                    displayName: 'DateFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `Filter by invoice date<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: allowedActions, company. All other values will be silently ignored',
                options: [{ name: 'allowedActions', value: 'allowedActions' }, { name: 'company', value: 'company' }]
            },
                {
                displayName: 'folioIds',
                name: 'folioIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter by folio IDs',
                options: [{
                    name: 'folioIdsValues',
                    displayName: 'FolioIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter by folio IDs'
                }
                ]
                }]
            },
                {
                displayName: 'nameSearch',
                name: 'nameSearch',
                type: 'string',
                required: false,
                default: '',
                description: 'Find invoices for a recipient name or company. Provide at least three characters'
            },
                {
                displayName: 'number',
                name: 'number',
                type: 'string',
                required: false,
                default: '',
                description: 'The invoice number'
            },
                {
                displayName: 'outstandingPaymentFilter',
                name: 'outstandingPaymentFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `Filter for the outstanding balance for invoices<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'outstandingPaymentFilterValues',
                    displayName: 'OutstandingPaymentFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `Filter for the outstanding balance for invoices<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'paymentSettled',
                name: 'paymentSettled',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether if set to \`true\`, returns only invoices having no outstanding payments or marked as settled.
If set to \`false\`, returns only invoices with outstanding payment and not marked as settled.
If not set, returns all invoices. - <b>DEPRECATED: This field will be removed at 25.06.2022. Use filtering by \`Status\` instead</b>`
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter by property IDs',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter by property IDs'
                }
                ]
                }]
            },
                {
                displayName: 'recipientType',
                name: 'recipientType',
                type: 'options',
                required: false,
                default: 'Person',
                description: `If nothing is set, invoices addressed both companies and individuals will be returned.
If set to \`Person\`, invoices that addressed to individuals will be returned.
If set to \`Company\`, invoice that addressed to companies will be returned`,
                options: [{ name: 'Company', value: 'Company' }, { name: 'Person', value: 'Person' }]
            },
                {
                displayName: 'reservationIds',
                name: 'reservationIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter by reservation IDs',
                options: [{
                    name: 'reservationIdsValues',
                    displayName: 'ReservationIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter by reservation IDs'
                }
                ]
                }]
            },
                {
                displayName: 'status',
                name: 'status',
                type: 'options',
                required: false,
                default: 'FullyPaid',
                description: 'Filter by invoice status',
                options: [{ name: 'FullyPaid', value: 'FullyPaid' }, { name: 'Unpaid', value: 'Unpaid' }, { name: 'WrittenOff', value: 'WrittenOff' }]
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceInvoicesPost"], resource: ["invoice"] } },
                default: `{
  "folioId": "HBCXQZ-1",
  "languageCode": "en"
}`,
                description: 'The folio ID to create the invoice for.'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceInvoicesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceInvoicesPost"], resource: ["invoice"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'FinanceInvoicesByIdPdfGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceInvoicesByIdPdfGet"], resource: ["invoice"] } },
                default: '',
                description: 'The invoice ID'
            },
            {
                displayName: 'id',
                name: 'FinanceInvoicesByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceInvoicesByIdGet"], resource: ["invoice"] } },
                default: '',
                description: 'The invoice ID'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceInvoicesByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceInvoicesByIdGet"], resource: ["invoice"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored',
                options: [{ name: 'company', value: 'company' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'FinanceInvoice_actionsByIdPayPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceInvoice-actionsByIdPayPut"], resource: ["invoiceaction"] } },
                default: '',
                description: 'The invoice ID'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceInvoice-actionsByIdPayPut"], resource: ["invoiceaction"] } },
                default: `{
  "paymentMethod": "BankTransfer",
  "receipt": "BANK-123456"
}`,
                description: 'see class'
            },
            {
                displayName: 'id',
                name: 'FinanceInvoice_actionsByIdCancelPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceInvoice-actionsByIdCancelPut"], resource: ["invoiceaction"] } },
                default: '',
                description: 'The invoice ID'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["FinanceInvoice-actionsByIdCancelPut"], resource: ["invoiceaction"] } },
                default: `{
  "reasonCode": "ChangeOfRecipientDetails"
}`,
                description: 'see class'
            },
            {
                displayName: 'propertyId',
                name: 'FinanceAccountsAggregate_pairs_dailyPost_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsAggregate-pairs-dailyPost"], resource: ["subledger"] } },
                default: '',
                description: 'Specifies the property transactions will be aggregated for'
            },
            {
                displayName: 'from',
                name: 'FinanceAccountsAggregate_pairs_dailyPost_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsAggregate-pairs-dailyPost"], resource: ["subledger"] } },
                default: '',
                description: 'The inclusive start date of the interval'
            },
            {
                displayName: 'to',
                name: 'FinanceAccountsAggregate_pairs_dailyPost_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsAggregate-pairs-dailyPost"], resource: ["subledger"] } },
                default: '',
                description: 'The exclusive end date of the interval'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceAccountsAggregate_pairs_dailyPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceAccountsAggregate-pairs-dailyPost"], resource: ["subledger"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'accountingSchema',
                name: 'accountingSchema',
                type: 'options',
                required: false,
                default: 'Simple',
                description: 'Allows to override the default accounting schema. Only specify this, when you know what you are doing',
                options: [{ name: 'Extended', value: 'Extended' }, { name: 'Simple', value: 'Simple' }]
            },
                {
                displayName: 'accountNumber',
                name: 'accountNumber',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter transactions by account number'
            },
                {
                displayName: 'accountType',
                name: 'accountType',
                type: 'options',
                required: false,
                default: 'Revenues',
                description: 'Filter transactions by type',
                options: [{ name: 'AccountsReceivable', value: 'AccountsReceivable' }, { name: 'CityTaxes', value: 'CityTaxes' }, { name: 'House', value: 'House' }, { name: 'Liabilities', value: 'Liabilities' }, { name: 'LossOfAccountsReceivable', value: 'LossOfAccountsReceivable' }, { name: 'Payments', value: 'Payments' }, { name: 'Receivables', value: 'Receivables' }, { name: 'Revenues', value: 'Revenues' }, { name: 'SecondCityTax', value: 'SecondCityTax' }, { name: 'TransitoryItems', value: 'TransitoryItems' }, { name: 'Vat', value: 'Vat' }, { name: 'VatOnLiabilities', value: 'VatOnLiabilities' }]
            },
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            },
                {
                displayName: 'languageCode',
                name: 'languageCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The language for the the report (2-letter ISO code)'
            },
                {
                displayName: 'reference',
                name: 'reference',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter transactions by reference (reservation ID/external folio ID/property ID for house folio)'
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'FinanceAccountsAggregate_dailyPost_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsAggregate-dailyPost"], resource: ["subledger"] } },
                default: '',
                description: 'Specifies the property transactions will be aggregated for'
            },
            {
                displayName: 'from',
                name: 'FinanceAccountsAggregate_dailyPost_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsAggregate-dailyPost"], resource: ["subledger"] } },
                default: '',
                description: 'The inclusive start date of the interval'
            },
            {
                displayName: 'to',
                name: 'FinanceAccountsAggregate_dailyPost_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsAggregate-dailyPost"], resource: ["subledger"] } },
                default: '',
                description: 'The exclusive end date of the interval'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceAccountsAggregate_dailyPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceAccountsAggregate-dailyPost"], resource: ["subledger"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'accountingSchema',
                name: 'accountingSchema',
                type: 'options',
                required: false,
                default: 'Simple',
                description: 'Allows to override the default accounting schema. Only specify this, when you know what you are doing',
                options: [{ name: 'Extended', value: 'Extended' }, { name: 'Simple', value: 'Simple' }]
            },
                {
                displayName: 'accountNumber',
                name: 'accountNumber',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter transactions by account number'
            },
                {
                displayName: 'accountType',
                name: 'accountType',
                type: 'options',
                required: false,
                default: 'Revenues',
                description: 'Filter transactions by type',
                options: [{ name: 'AccountsReceivable', value: 'AccountsReceivable' }, { name: 'CityTaxes', value: 'CityTaxes' }, { name: 'House', value: 'House' }, { name: 'Liabilities', value: 'Liabilities' }, { name: 'LossOfAccountsReceivable', value: 'LossOfAccountsReceivable' }, { name: 'Payments', value: 'Payments' }, { name: 'Receivables', value: 'Receivables' }, { name: 'Revenues', value: 'Revenues' }, { name: 'SecondCityTax', value: 'SecondCityTax' }, { name: 'TransitoryItems', value: 'TransitoryItems' }, { name: 'Vat', value: 'Vat' }, { name: 'VatOnLiabilities', value: 'VatOnLiabilities' }]
            },
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            },
                {
                displayName: 'languageCode',
                name: 'languageCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The language for the the report (2-letter ISO code)'
            },
                {
                displayName: 'reference',
                name: 'reference',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter transactions by reference (reservation ID/external folio ID/property ID for house folio)'
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'FinanceAccountsAggregatePost_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsAggregatePost"], resource: ["subledger"] } },
                default: '',
                description: 'Specifies the property for which transactions will be exported'
            },
            {
                displayName: 'from',
                name: 'FinanceAccountsAggregatePost_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsAggregatePost"], resource: ["subledger"] } },
                default: '',
                description: `The inclusive start time of the posting date.
Either posting date or business date interval should be specified.<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'to',
                name: 'FinanceAccountsAggregatePost_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsAggregatePost"], resource: ["subledger"] } },
                default: '',
                description: `The exclusive end time of the posting date.
Either posting date or business date interval should be specified.<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceAccountsAggregatePost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceAccountsAggregatePost"], resource: ["subledger"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'accountingSchema',
                name: 'accountingSchema',
                type: 'options',
                required: false,
                default: 'Simple',
                description: 'Allows to override the default accounting schema. Only specify this, when you know what you are doing',
                options: [{ name: 'Extended', value: 'Extended' }, { name: 'Simple', value: 'Simple' }]
            },
                {
                displayName: 'accountNumber',
                name: 'accountNumber',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter transactions by account number'
            },
                {
                displayName: 'accountType',
                name: 'accountType',
                type: 'options',
                required: false,
                default: 'Revenues',
                description: 'Filter transactions by type',
                options: [{ name: 'AccountsReceivable', value: 'AccountsReceivable' }, { name: 'CityTaxes', value: 'CityTaxes' }, { name: 'House', value: 'House' }, { name: 'Liabilities', value: 'Liabilities' }, { name: 'LossOfAccountsReceivable', value: 'LossOfAccountsReceivable' }, { name: 'Payments', value: 'Payments' }, { name: 'Receivables', value: 'Receivables' }, { name: 'Revenues', value: 'Revenues' }, { name: 'SecondCityTax', value: 'SecondCityTax' }, { name: 'TransitoryItems', value: 'TransitoryItems' }, { name: 'Vat', value: 'Vat' }, { name: 'VatOnLiabilities', value: 'VatOnLiabilities' }]
            },
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            },
                {
                displayName: 'languageCode',
                name: 'languageCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The language for the the report'
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'FinanceAccountsExportPost_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsExportPost"], resource: ["subledger"] } },
                default: '',
                description: 'Specifies the property for which transactions will be exported'
            },
            {
                displayName: 'from',
                name: 'FinanceAccountsExportPost_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsExportPost"], resource: ["subledger"] } },
                default: '',
                description: `The inclusive start time of the posting date.
Either posting date or business date interval should be specified.<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'to',
                name: 'FinanceAccountsExportPost_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsExportPost"], resource: ["subledger"] } },
                default: '',
                description: `The exclusive end time of the posting date.
Either posting date or business date interval should be specified.<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceAccountsExportPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceAccountsExportPost"], resource: ["subledger"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'accountingSchema',
                name: 'accountingSchema',
                type: 'options',
                required: false,
                default: 'Simple',
                description: 'Allows to override the default accounting schema. Only specify this, when you know what you are doing',
                options: [{ name: 'Extended', value: 'Extended' }, { name: 'Simple', value: 'Simple' }]
            },
                {
                displayName: 'accountNumber',
                name: 'accountNumber',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter transactions by account number'
            },
                {
                displayName: 'accountType',
                name: 'accountType',
                type: 'options',
                required: false,
                default: 'Revenues',
                description: 'Filter transactions by type',
                options: [{ name: 'AccountsReceivable', value: 'AccountsReceivable' }, { name: 'CityTaxes', value: 'CityTaxes' }, { name: 'House', value: 'House' }, { name: 'Liabilities', value: 'Liabilities' }, { name: 'LossOfAccountsReceivable', value: 'LossOfAccountsReceivable' }, { name: 'Payments', value: 'Payments' }, { name: 'Receivables', value: 'Receivables' }, { name: 'Revenues', value: 'Revenues' }, { name: 'SecondCityTax', value: 'SecondCityTax' }, { name: 'TransitoryItems', value: 'TransitoryItems' }, { name: 'Vat', value: 'Vat' }, { name: 'VatOnLiabilities', value: 'VatOnLiabilities' }]
            },
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            },
                {
                displayName: 'languageCode',
                name: 'languageCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The language for the the report'
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'FinanceAccountsExport_dailyPost_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsExport-dailyPost"], resource: ["subledger"] } },
                default: '',
                description: 'Specifies the property transactions will be aggregated for'
            },
            {
                displayName: 'from',
                name: 'FinanceAccountsExport_dailyPost_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsExport-dailyPost"], resource: ["subledger"] } },
                default: '',
                description: 'The inclusive start date of the interval'
            },
            {
                displayName: 'to',
                name: 'FinanceAccountsExport_dailyPost_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsExport-dailyPost"], resource: ["subledger"] } },
                default: '',
                description: 'The exclusive end date of the interval'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceAccountsExport_dailyPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceAccountsExport-dailyPost"], resource: ["subledger"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'accountingSchema',
                name: 'accountingSchema',
                type: 'options',
                required: false,
                default: 'Simple',
                description: 'Allows to override the default accounting schema. Only specify this, when you know what you are doing',
                options: [{ name: 'Extended', value: 'Extended' }, { name: 'Simple', value: 'Simple' }]
            },
                {
                displayName: 'accountNumber',
                name: 'accountNumber',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter transactions by account number'
            },
                {
                displayName: 'accountType',
                name: 'accountType',
                type: 'options',
                required: false,
                default: 'Revenues',
                description: 'Filter transactions by type',
                options: [{ name: 'AccountsReceivable', value: 'AccountsReceivable' }, { name: 'CityTaxes', value: 'CityTaxes' }, { name: 'House', value: 'House' }, { name: 'Liabilities', value: 'Liabilities' }, { name: 'LossOfAccountsReceivable', value: 'LossOfAccountsReceivable' }, { name: 'Payments', value: 'Payments' }, { name: 'Receivables', value: 'Receivables' }, { name: 'Revenues', value: 'Revenues' }, { name: 'SecondCityTax', value: 'SecondCityTax' }, { name: 'TransitoryItems', value: 'TransitoryItems' }, { name: 'Vat', value: 'Vat' }, { name: 'VatOnLiabilities', value: 'VatOnLiabilities' }]
            },
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            },
                {
                displayName: 'languageCode',
                name: 'languageCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The language for the the report (2-letter ISO code)'
            },
                {
                displayName: 'reference',
                name: 'reference',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter transactions by reference (reservation ID/external folio ID/property ID for house folio)'
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'FinanceAccountsExport_gross_dailyPost_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsExport-gross-dailyPost"], resource: ["subledger"] } },
                default: '',
                description: 'Specifies the property transactions will be aggregated for'
            },
            {
                displayName: 'from',
                name: 'FinanceAccountsExport_gross_dailyPost_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsExport-gross-dailyPost"], resource: ["subledger"] } },
                default: '',
                description: 'The inclusive start date of the interval'
            },
            {
                displayName: 'to',
                name: 'FinanceAccountsExport_gross_dailyPost_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsExport-gross-dailyPost"], resource: ["subledger"] } },
                default: '',
                description: 'The exclusive end date of the interval'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceAccountsExport_gross_dailyPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceAccountsExport-gross-dailyPost"], resource: ["subledger"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'reference',
                name: 'reference',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter transactions by reference (reservation ID/external folio ID/property ID for house folio)'
            },
                {
                displayName: 'accountingSchema',
                name: 'accountingSchema',
                type: 'options',
                required: false,
                default: 'Simple',
                description: 'Allows to override the default accounting schema. Only specify this, when you know what you are doing',
                options: [{ name: 'Extended', value: 'Extended' }, { name: 'Simple', value: 'Simple' }]
            },
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'FinanceAccountsSchemaGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsSchemaGet"], resource: ["subledger"] } },
                default: '',
                description: 'Filter account list by property ID'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceAccountsSchemaGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceAccountsSchemaGet"], resource: ["subledger"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'depth',
                name: 'depth',
                type: 'number',
                required: false,
                default: 0,
                description: 'How many hierarchy levels to include (between 1 and 4, default is 1)'
            },
                {
                displayName: 'includeArchived',
                name: 'includeArchived',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether if set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts'
            },
                {
                displayName: 'accountingSchema',
                name: 'accountingSchema',
                type: 'options',
                required: false,
                default: 'Simple',
                description: 'Allows to override the default accounting schema. Only specify this, when you know what you are doing',
                options: [{ name: 'Extended', value: 'Extended' }, { name: 'Simple', value: 'Simple' }]
            },
                {
                displayName: 'languageCode',
                name: 'languageCode',
                type: 'string',
                required: false,
                default: '',
                description: `The language for the the report. If not specified, language code from "Accept-Language" will be used`
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'FinanceGlobal_accountsGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceGlobal-accountsGet"], resource: ["subledger"] } },
                default: '',
                description: 'Filter account list by property ID'
            },
            {
                displayName: 'parent',
                name: 'FinanceGlobal_accountsGet_parent',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceGlobal-accountsGet"], resource: ["subledger"] } },
                default: '',
                description: `Filter account list by the parent account's number`
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceGlobal_accountsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceGlobal-accountsGet"], resource: ["subledger"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'accountingSchema',
                name: 'accountingSchema',
                type: 'options',
                required: false,
                default: 'Simple',
                description: 'Allows to override the default accounting schema',
                options: [{ name: 'Extended', value: 'Extended' }, { name: 'Simple', value: 'Simple' }]
            },
                {
                displayName: 'includeArchived',
                name: 'includeArchived',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether if set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts'
            },
                {
                displayName: 'languageCode',
                name: 'languageCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The language for the the report'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'FinanceGuest_accountsGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceGuest-accountsGet"], resource: ["subledger"] } },
                default: '',
                description: 'Filter account list by property ID'
            },
            {
                displayName: 'reservationId',
                name: 'FinanceGuest_accountsGet_reservationId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceGuest-accountsGet"], resource: ["subledger"] } },
                default: '',
                description: 'Filter account list by reservation ID'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceGuest_accountsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceGuest-accountsGet"], resource: ["subledger"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'parent',
                name: 'parent',
                type: 'string',
                required: false,
                default: '',
                description: `Filter account list by the parent account's number`
            },
                {
                displayName: 'languageCode',
                name: 'languageCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The language for the the report'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'FinanceExternal_accountsGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceExternal-accountsGet"], resource: ["subledger"] } },
                default: '',
                description: 'Filter account list by property ID'
            },
            {
                displayName: 'folioId',
                name: 'FinanceExternal_accountsGet_folioId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceExternal-accountsGet"], resource: ["subledger"] } },
                default: '',
                description: 'Filter account list by folio ID'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceExternal_accountsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceExternal-accountsGet"], resource: ["subledger"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'parent',
                name: 'parent',
                type: 'string',
                required: false,
                default: '',
                description: `Filter account list by the parent account's number`
            },
                {
                displayName: 'languageCode',
                name: 'languageCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The language for the the report'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'number',
                name: 'FinanceAccountsByNumberGet_number',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsByNumberGet"], resource: ["subledger"] } },
                default: '',
                description: 'The account number'
            },
            {
                displayName: 'propertyId',
                name: 'FinanceAccountsByNumberGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsByNumberGet"], resource: ["subledger"] } },
                default: '',
                description: 'Specifies the property the account is in'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceAccountsByNumberGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceAccountsByNumberGet"], resource: ["subledger"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'transactionLimit',
                name: 'transactionLimit',
                type: 'number',
                required: false,
                default: 0,
                description: 'Limit how many transactions should be included in the view (between 0 and 50, defaults to 0)'
            },
                {
                displayName: 'includeArchived',
                name: 'includeArchived',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether if set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts'
            },
                {
                displayName: 'accountingSchema',
                name: 'accountingSchema',
                type: 'options',
                required: false,
                default: 'Simple',
                description: 'Allows to override the default accounting schema. Only specify this, when you know what you are doing',
                options: [{ name: 'Extended', value: 'Extended' }, { name: 'Simple', value: 'Simple' }]
            },
                {
                displayName: 'languageCode',
                name: 'languageCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The language for the the report'
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'FinanceAccountsChild_accountsGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsChild-accountsGet"], resource: ["subledger"] } },
                default: '',
                description: 'Filter account list by property ID'
            },
            {
                displayName: 'parent',
                name: 'FinanceAccountsChild_accountsGet_parent',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceAccountsChild-accountsGet"], resource: ["subledger"] } },
                default: '',
                description: `Filter account list by the parent account's number`
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceAccountsChild_accountsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceAccountsChild-accountsGet"], resource: ["subledger"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'accountingSchema',
                name: 'accountingSchema',
                type: 'options',
                required: false,
                default: 'Simple',
                description: 'Allows to override the default accounting schema',
                options: [{ name: 'Extended', value: 'Extended' }, { name: 'Simple', value: 'Simple' }]
            },
                {
                displayName: 'includeArchived',
                name: 'includeArchived',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether if set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts'
            },
                {
                displayName: 'languageCode',
                name: 'languageCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The language for the the report'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'isoCountryCode',
                name: 'FinanceTypesVatGet_isoCountryCode',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["FinanceTypesVatGet"], resource: ["types"] } },
                default: '',
                description: 'The 2-letter ISO country code'
            },
            {
                displayName: 'Additional Fields',
                name: 'FinanceTypesVatGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["FinanceTypesVatGet"], resource: ["types"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'atDate',
                name: 'atDate',
                type: 'string',
                required: false,
                default: '',
                description: `If specified, returns the VAT types that are effective for this specific date.
If nothing specified, returns the VAT types that are effective for the current date in UTC timezone`
            }
            ]
            },
            {
                displayName: 'target',
                name: 'IntegrationUi_integrationsByTargetByIdGet_target',
                type: 'options',
                required: true,
                displayOptions: { show: { operation: ["IntegrationUi_integrationsByTargetByIdGet"], resource: ["uiintegrations"] } },
                default: 'DashboardPropertyContext',
                description: '',
                options: [{ name: 'AccountMenuApps', value: 'AccountMenuApps' }, { name: 'BookingDetailsTab', value: 'BookingDetailsTab' }, { name: 'CompanyDetailsTab', value: 'CompanyDetailsTab' }, { name: 'DashboardAccountContext', value: 'DashboardAccountContext' }, { name: 'DashboardPropertyContext', value: 'DashboardPropertyContext' }, { name: 'GuestDetailsDialog', value: 'GuestDetailsDialog' }, { name: 'PropertyMenuApps', value: 'PropertyMenuApps' }, { name: 'PropertyMenuReports', value: 'PropertyMenuReports' }, { name: 'ReservationDetailsTab', value: 'ReservationDetailsTab' }]
            },
            {
                displayName: 'id',
                name: 'IntegrationUi_integrationsByTargetByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["IntegrationUi_integrationsByTargetByIdGet"], resource: ["uiintegrations"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'target',
                name: 'IntegrationUi_integrationsByTargetByIdPut_target',
                type: 'options',
                required: true,
                displayOptions: { show: { operation: ["IntegrationUi_integrationsByTargetByIdPut"], resource: ["uiintegrations"] } },
                default: 'DashboardPropertyContext',
                description: '',
                options: [{ name: 'AccountMenuApps', value: 'AccountMenuApps' }, { name: 'BookingDetailsTab', value: 'BookingDetailsTab' }, { name: 'CompanyDetailsTab', value: 'CompanyDetailsTab' }, { name: 'DashboardAccountContext', value: 'DashboardAccountContext' }, { name: 'DashboardPropertyContext', value: 'DashboardPropertyContext' }, { name: 'GuestDetailsDialog', value: 'GuestDetailsDialog' }, { name: 'PropertyMenuApps', value: 'PropertyMenuApps' }, { name: 'PropertyMenuReports', value: 'PropertyMenuReports' }, { name: 'ReservationDetailsTab', value: 'ReservationDetailsTab' }]
            },
            {
                displayName: 'id',
                name: 'IntegrationUi_integrationsByTargetByIdPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["IntegrationUi_integrationsByTargetByIdPut"], resource: ["uiintegrations"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["IntegrationUi-integrationsByTargetByIdPut"], resource: ["uiintegrations"] } },
                default: `{
  "label": "My Integration",
  "labelTranslations": {
    "de": "Meine Integration",
    "es": "Mi Integración"
  },
  "iconSource": "https://www.myintegrationiconsource.com",
  "sourceUrl": "https://www.myintegration.com",
  "sourceType": "Public",
  "propertyIds": [
    "BER",
    "MUC"
  ],
  "roles": [
    "PROPERTYADMIN",
    "FRONTDESK"
  ]
}`,
                description: 'The request body data'
            },
            {
                displayName: 'target',
                name: 'IntegrationUi_integrationsByTargetByIdDelete_target',
                type: 'options',
                required: true,
                displayOptions: { show: { operation: ["IntegrationUi_integrationsByTargetByIdDelete"], resource: ["uiintegrations"] } },
                default: 'DashboardPropertyContext',
                description: '',
                options: [{ name: 'AccountMenuApps', value: 'AccountMenuApps' }, { name: 'BookingDetailsTab', value: 'BookingDetailsTab' }, { name: 'CompanyDetailsTab', value: 'CompanyDetailsTab' }, { name: 'DashboardAccountContext', value: 'DashboardAccountContext' }, { name: 'DashboardPropertyContext', value: 'DashboardPropertyContext' }, { name: 'GuestDetailsDialog', value: 'GuestDetailsDialog' }, { name: 'PropertyMenuApps', value: 'PropertyMenuApps' }, { name: 'PropertyMenuReports', value: 'PropertyMenuReports' }, { name: 'ReservationDetailsTab', value: 'ReservationDetailsTab' }]
            },
            {
                displayName: 'id',
                name: 'IntegrationUi_integrationsByTargetByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["IntegrationUi_integrationsByTargetByIdDelete"], resource: ["uiintegrations"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'target',
                name: 'IntegrationUi_integrationsByTargetGet_target',
                type: 'options',
                required: true,
                displayOptions: { show: { operation: ["IntegrationUi_integrationsByTargetGet"], resource: ["uiintegrations"] } },
                default: 'DashboardPropertyContext',
                description: '',
                options: [{ name: 'AccountMenuApps', value: 'AccountMenuApps' }, { name: 'BookingDetailsTab', value: 'BookingDetailsTab' }, { name: 'CompanyDetailsTab', value: 'CompanyDetailsTab' }, { name: 'DashboardAccountContext', value: 'DashboardAccountContext' }, { name: 'DashboardPropertyContext', value: 'DashboardPropertyContext' }, { name: 'GuestDetailsDialog', value: 'GuestDetailsDialog' }, { name: 'PropertyMenuApps', value: 'PropertyMenuApps' }, { name: 'PropertyMenuReports', value: 'PropertyMenuReports' }, { name: 'ReservationDetailsTab', value: 'ReservationDetailsTab' }]
            },
            {
                displayName: 'target',
                name: 'IntegrationUi_integrationsByTargetPost_target',
                type: 'options',
                required: true,
                displayOptions: { show: { operation: ["IntegrationUi_integrationsByTargetPost"], resource: ["uiintegrations"] } },
                default: 'DashboardPropertyContext',
                description: '',
                options: [{ name: 'AccountMenuApps', value: 'AccountMenuApps' }, { name: 'BookingDetailsTab', value: 'BookingDetailsTab' }, { name: 'CompanyDetailsTab', value: 'CompanyDetailsTab' }, { name: 'DashboardAccountContext', value: 'DashboardAccountContext' }, { name: 'DashboardPropertyContext', value: 'DashboardPropertyContext' }, { name: 'GuestDetailsDialog', value: 'GuestDetailsDialog' }, { name: 'PropertyMenuApps', value: 'PropertyMenuApps' }, { name: 'PropertyMenuReports', value: 'PropertyMenuReports' }, { name: 'ReservationDetailsTab', value: 'ReservationDetailsTab' }]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["IntegrationUi-integrationsByTargetPost"], resource: ["uiintegrations"] } },
                default: `{
  "code": "MYINTEGRATIONWITHAPALEO",
  "label": "My Integration",
  "labelTranslations": {
    "de": "Meine Integration",
    "es": "Mi Integración"
  },
  "iconSource": "https://www.myintegrationiconsource.com",
  "sourceUrl": "https://www.myintegration.com",
  "sourceType": "Public",
  "propertyIds": [
    "BER",
    "MUC"
  ],
  "roles": [
    "PROPERTYADMIN",
    "FRONTDESK"
  ]
}`,
                description: 'The request body data'
            },
            {
                displayName: 'target',
                name: 'IntegrationUi_integrationsByTargetById_testGet_target',
                type: 'options',
                required: true,
                displayOptions: { show: { operation: ["IntegrationUi_integrationsByTargetById_testGet"], resource: ["uiintegrations"] } },
                default: 'DashboardPropertyContext',
                description: 'Target for the integration',
                options: [{ name: 'AccountMenuApps', value: 'AccountMenuApps' }, { name: 'BookingDetailsTab', value: 'BookingDetailsTab' }, { name: 'CompanyDetailsTab', value: 'CompanyDetailsTab' }, { name: 'DashboardAccountContext', value: 'DashboardAccountContext' }, { name: 'DashboardPropertyContext', value: 'DashboardPropertyContext' }, { name: 'GuestDetailsDialog', value: 'GuestDetailsDialog' }, { name: 'PropertyMenuApps', value: 'PropertyMenuApps' }, { name: 'PropertyMenuReports', value: 'PropertyMenuReports' }, { name: 'ReservationDetailsTab', value: 'ReservationDetailsTab' }]
            },
            {
                displayName: 'id',
                name: 'IntegrationUi_integrationsByTargetById_testGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["IntegrationUi_integrationsByTargetById_testGet"], resource: ["uiintegrations"] } },
                default: '',
                description: 'Id of the integration to be tested'
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryPropertiesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryPropertiesGet"], resource: ["property"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'countryCode',
                name: 'countryCode',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter result by country code',
                options: [{
                    name: 'countryCodeValues',
                    displayName: 'CountryCode',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter result by country code'
                }
                ]
                }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored',
                options: [{ name: 'actions', value: 'actions' }]
            },
                {
                displayName: 'includeArchived',
                name: 'includeArchived',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether include archived properties in the result. If not set, or set to false, it only returns non-archived properties'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'status',
                name: 'status',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by property status',
                options: [{ name: 'Live', value: 'Live' }, { name: 'Test', value: 'Test' }]
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["InventoryPropertiesPost"], resource: ["property"] } },
                default: `{
  "code": "MUC",
  "name": {
    "en": "Demo Hotel Munich",
    "de": "Demo Hotel München"
  },
  "companyName": "Hotel Münchner GmbH",
  "managingDirectors": "Franz-Josef Gruber",
  "commercialRegisterEntry": "Amtsgericht München, HRB 279336",
  "taxId": "DE311053702",
  "description": {
    "en": "This is the demo hotel Munich",
    "de": "Dies ist das Demo Hotel München"
  },
  "location": {
    "addressLine1": "Marienplatz 1",
    "postalCode": "80331",
    "city": "München",
    "countryCode": "DE"
  },
  "bankAccount": {
    "iban": "DE44 5001 0517 5407 3249 31",
    "bic": "SSKMDEMMXXX",
    "bank": "Stadtsparkasse München"
  },
  "paymentTerms": {
    "en": "Pay on checkout",
    "de": "Zahlung bei Checkout"
  },
  "timeZone": "Europe/Berlin",
  "defaultCheckInTime": "17:00:00",
  "defaultCheckOutTime": "11:00:00",
  "currencyCode": "EUR"
}`,
                description: 'The definition of the property.'
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryPropertiesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryPropertiesPost"], resource: ["property"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'InventoryPropertiesByIdHead_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryPropertiesByIdHead"], resource: ["property"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'id',
                name: 'InventoryPropertiesByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryPropertiesByIdGet"], resource: ["property"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryPropertiesByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryPropertiesByIdGet"], resource: ["property"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'languages',
                name: 'languages',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`,
                options: [{
                    name: 'languagesValues',
                    displayName: 'Languages',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`
                }
                ]
                }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored',
                options: [{ name: 'actions', value: 'actions' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'InventoryPropertiesByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryPropertiesByIdPatch"], resource: ["property"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["InventoryPropertiesByIdPatch"], resource: ["property"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'InventoryProperty_actionsByIdClonePost_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryProperty_actionsByIdClonePost"], resource: ["propertyactions"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["InventoryProperty-actionsByIdClonePost"], resource: ["propertyactions"] } },
                default: `{
  "code": "MUC",
  "name": {
    "en": "Demo Hotel Munich",
    "de": "Demo Hotel München"
  },
  "companyName": "Hotel Münchner GmbH",
  "managingDirectors": "Franz-Josef Gruber",
  "commercialRegisterEntry": "Amtsgericht München, HRB 279336",
  "taxId": "DE311053702",
  "description": {
    "en": "This is the demo hotel Munich",
    "de": "Dies ist das Demo Hotel München"
  },
  "location": {
    "addressLine1": "Marienplatz 1",
    "postalCode": "80331",
    "city": "München",
    "countryCode": "DE"
  },
  "bankAccount": {
    "iban": "DE44 5001 0517 5407 3249 31",
    "bic": "SSKMDEMMXXX",
    "bank": "Stadtsparkasse München"
  },
  "paymentTerms": {
    "en": "Pay on checkout",
    "de": "Zahlung bei Checkout"
  },
  "timeZone": "Europe/Berlin",
  "defaultCheckInTime": "17:00:00",
  "defaultCheckOutTime": "11:00:00",
  "currencyCode": "EUR"
}`,
                description: 'The definition of the property.'
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryProperty_actionsByIdClonePost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryProperty_actionsByIdClonePost"], resource: ["propertyactions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'InventoryProperty_actionsByIdArchivePut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryProperty_actionsByIdArchivePut"], resource: ["propertyactions"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'id',
                name: 'InventoryProperty_actionsByIdSet_livePut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryProperty_actionsByIdSet_livePut"], resource: ["propertyactions"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'id',
                name: 'InventoryProperty_actionsByIdResetPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryProperty_actionsByIdResetPut"], resource: ["propertyactions"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'id',
                name: 'InventoryUnitsByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnitsByIdPatch"], resource: ["unit"] } },
                default: '',
                description: 'The ID of the unit'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnitsByIdPatch"], resource: ["unit"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'InventoryUnitsByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnitsByIdGet"], resource: ["unit"] } },
                default: '',
                description: 'The ID of the unit'
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryUnitsByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryUnitsByIdGet"], resource: ["unit"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'languages',
                name: 'languages',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`,
                options: [{
                    name: 'languagesValues',
                    displayName: 'Languages',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`
                }
                ]
                }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored',
                options: [{ name: 'connectedUnits', value: 'connectedUnits' }, { name: 'property', value: 'property' }, { name: 'unitGroup', value: 'unitGroup' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'InventoryUnitsByIdHead_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnitsByIdHead"], resource: ["unit"] } },
                default: '',
                description: 'The ID of the unit'
            },
            {
                displayName: 'id',
                name: 'InventoryUnitsByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnitsByIdDelete"], resource: ["unit"] } },
                default: '',
                description: 'The ID of the unit'
            },
            {
                displayName: 'unitIds',
                name: 'InventoryUnitsPatch_unitIds',
                type: 'fixedCollection',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnitsPatch"], resource: ["unit"] } },
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: '',
                options: [{
                    name: 'unitIdsValues',
                    displayName: 'UnitIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Array value'
                }
                ]
                }]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnitsPatch"], resource: ["unit"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryUnitsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryUnitsGet"], resource: ["unit"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'condition',
                name: 'condition',
                type: 'options',
                required: false,
                default: 'Clean',
                description: 'Return units with a specific condition',
                options: [{ name: 'Clean', value: 'Clean' }, { name: 'CleanToBeInspected', value: 'CleanToBeInspected' }, { name: 'Dirty', value: 'Dirty' }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored',
                options: [{ name: 'connectedUnits', value: 'connectedUnits' }, { name: 'property', value: 'property' }, { name: 'unitGroup', value: 'unitGroup' }]
            },
                {
                displayName: 'isOccupied',
                name: 'isOccupied',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether return only occupied or vacant units'
            },
                {
                displayName: 'maintenanceType',
                name: 'maintenanceType',
                type: 'options',
                required: false,
                default: 'OutOfService',
                description: 'Return units with the specific maintenance type',
                options: [{ name: 'OutOfInventory', value: 'OutOfInventory' }, { name: 'OutOfOrder', value: 'OutOfOrder' }, { name: 'OutOfService', value: 'OutOfService' }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Return units for specific property'
            },
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: 'This will filter all units where the provided text is contained in the unit name. The search is case insensitive'
            },
                {
                displayName: 'unitAttributeIds',
                name: 'unitAttributeIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return units with the specific unit attributes',
                options: [{
                    name: 'unitAttributeIdsValues',
                    displayName: 'UnitAttributeIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return units with the specific unit attributes'
                }
                ]
                }]
            },
                {
                displayName: 'unitGroupId',
                name: 'unitGroupId',
                type: 'string',
                required: false,
                default: '',
                description: `Return units for the specific unit group - <b>DEPRECATED: This property will be removed 20.04.2022. Use \`UnitGroupIds\` instead</b>`
            },
                {
                displayName: 'unitGroupIds',
                name: 'unitGroupIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return units with the specific unit groups',
                options: [{
                    name: 'unitGroupIdsValues',
                    displayName: 'UnitGroupIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return units with the specific unit groups'
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnitsPost"], resource: ["unit"] } },
                default: `{
  "propertyId": "MUC",
  "name": "S.102",
  "description": {
    "en": "Suite room",
    "de": "Suite Zimmer"
  },
  "unitGroupId": "MUC-SUI",
  "maxPersons": 3,
  "condition": "Clean",
  "attributes": [],
  "connectedUnits": [
    {
      "unitId": "MUC-MTA"
    },
    {
      "unitId": "MUC-JQI"
    }
  ]
}`,
                description: 'The definition of the unit.'
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryUnitsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryUnitsPost"], resource: ["unit"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryUnits_countGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryUnits$countGet"], resource: ["unit"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'condition',
                name: 'condition',
                type: 'options',
                required: false,
                default: 'Clean',
                description: 'Return units with a specific condition',
                options: [{ name: 'Clean', value: 'Clean' }, { name: 'CleanToBeInspected', value: 'CleanToBeInspected' }, { name: 'Dirty', value: 'Dirty' }]
            },
                {
                displayName: 'isOccupied',
                name: 'isOccupied',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether return only occupied or vacant units'
            },
                {
                displayName: 'maintenanceType',
                name: 'maintenanceType',
                type: 'options',
                required: false,
                default: 'OutOfService',
                description: 'Return units with the specific maintenance type',
                options: [{ name: 'OutOfInventory', value: 'OutOfInventory' }, { name: 'OutOfOrder', value: 'OutOfOrder' }, { name: 'OutOfService', value: 'OutOfService' }]
            },
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Return units for specific property'
            },
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: 'This will filter all units where the provided text is contained in the unit name. The search is case insensitive'
            },
                {
                displayName: 'unitAttributeIds',
                name: 'unitAttributeIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return units with the specific unit attributes',
                options: [{
                    name: 'unitAttributeIdsValues',
                    displayName: 'UnitAttributeIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return units with the specific unit attributes'
                }
                ]
                }]
            },
                {
                displayName: 'unitGroupId',
                name: 'unitGroupId',
                type: 'string',
                required: false,
                default: '',
                description: `Return units for the specific unit group - <b>DEPRECATED: This property will be removed 20.04.2022. Use \`UnitGroupIds\` instead</b>`
            },
                {
                displayName: 'unitGroupIds',
                name: 'unitGroupIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return units with the specific unit groups',
                options: [{
                    name: 'unitGroupIdsValues',
                    displayName: 'UnitGroupIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return units with the specific unit groups'
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnitsBulkPost"], resource: ["unit"] } },
                default: `{
  "units": [
    {
      "propertyId": "MUC",
      "name": "A.201",
      "description": {
        "en": "Single room",
        "de": "Einzelzimmer"
      },
      "unitGroupId": "MUC-SGL",
      "maxPersons": 1,
      "condition": "Clean",
      "attributes": [],
      "connectedUnits": []
    },
    {
      "propertyId": "MUC",
      "name": "A.103",
      "description": {
        "en": "Double room",
        "de": "Doppelzimmer"
      },
      "unitGroupId": "MUC-DBL",
      "maxPersons": 2,
      "condition": "Clean",
      "attributes": [],
      "connectedUnits": []
    },
    {
      "propertyId": "MUC",
      "name": "S.102",
      "description": {
        "en": "Suite room",
        "de": "Suite Zimmer"
      },
      "unitGroupId": "MUC-SUI",
      "maxPersons": 3,
      "condition": "Clean",
      "attributes": [],
      "connectedUnits": [
        {
          "unitId": "MUC-MTA"
        },
        {
          "unitId": "MUC-JQI"
        }
      ]
    }
  ]
}`,
                description: 'The definition of the units.'
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryUnitsBulkPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryUnitsBulkPost"], resource: ["unit"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'InventoryUnit_attributesByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnit-attributesByIdGet"], resource: ["unitattribute"] } },
                default: '',
                description: 'The ID of the unit attribute'
            },
            {
                displayName: 'id',
                name: 'InventoryUnit_attributesByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnit-attributesByIdPatch"], resource: ["unitattribute"] } },
                default: '',
                description: 'Id of unit attribute'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnit-attributesByIdPatch"], resource: ["unitattribute"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'InventoryUnit_attributesByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnit_attributesByIdDelete"], resource: ["unitattribute"] } },
                default: '',
                description: 'Id of unit attribute'
            },
            {
                displayName: 'id',
                name: 'InventoryUnit_attributesByIdHead_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnit-attributesByIdHead"], resource: ["unitattribute"] } },
                default: '',
                description: 'The ID of the unit attribute'
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryUnit_attributesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryUnit-attributesGet"], resource: ["unitattribute"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnit-attributesPost"], resource: ["unitattribute"] } },
                default: `{
  "name": "Floor 1",
  "description": "Floor number"
}`,
                description: 'The unit attribute.'
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryUnit_attributesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryUnit-attributesPost"], resource: ["unitattribute"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnit-groupsPost"], resource: ["unitgroup"] } },
                default: `{
  "code": "DBL",
  "propertyId": "MUC",
  "name": {
    "en": "Double Room",
    "de": "Doppelzimmer"
  },
  "description": {
    "en": "This is a nice room with as kingsize bed and flat screen",
    "de": "Dies ist ein schönes Zimmer mit Kingsize-Bett und Flachbildschirm"
  },
  "maxPersons": 4,
  "rank": 1,
  "type": "BedRoom"
}`,
                description: 'The definition of the unit group.'
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryUnit_groupsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryUnit-groupsPost"], resource: ["unitgroup"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryUnit_groupsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryUnit-groupsGet"], resource: ["unitgroup"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored',
                options: [{ name: 'connectedUnitGroups', value: 'connectedUnitGroups' }, { name: 'property', value: 'property' }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Return unit groups for specific property'
            },
                {
                displayName: 'unitGroupTypes',
                name: 'unitGroupTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: '',
                options: [{ name: 'BedRoom', value: 'BedRoom' }, { name: 'EventSpace', value: 'EventSpace' }, { name: 'MeetingRoom', value: 'MeetingRoom' }, { name: 'Other', value: 'Other' }, { name: 'ParkingLot', value: 'ParkingLot' }]
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryUnit_groups_countGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryUnit-groups$countGet"], resource: ["unitgroup"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Return unit groups for specific property'
            },
                {
                displayName: 'unitGroupTypes',
                name: 'unitGroupTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: '',
                options: [{ name: 'BedRoom', value: 'BedRoom' }, { name: 'EventSpace', value: 'EventSpace' }, { name: 'MeetingRoom', value: 'MeetingRoom' }, { name: 'Other', value: 'Other' }, { name: 'ParkingLot', value: 'ParkingLot' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'InventoryUnit_groupsByIdHead_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnit-groupsByIdHead"], resource: ["unitgroup"] } },
                default: '',
                description: 'The ID of the unit group'
            },
            {
                displayName: 'id',
                name: 'InventoryUnit_groupsByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnit-groupsByIdGet"], resource: ["unitgroup"] } },
                default: '',
                description: 'The ID of the unit group'
            },
            {
                displayName: 'Additional Fields',
                name: 'InventoryUnit_groupsByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["InventoryUnit-groupsByIdGet"], resource: ["unitgroup"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'languages',
                name: 'languages',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`,
                options: [{
                    name: 'languagesValues',
                    displayName: 'Languages',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`
                }
                ]
                }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored',
                options: [{ name: 'connectedUnitGroups', value: 'connectedUnitGroups' }, { name: 'property', value: 'property' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'InventoryUnit_groupsByIdPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnit-groupsByIdPut"], resource: ["unitgroup"] } },
                default: '',
                description: 'The ID of the unit group'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnit-groupsByIdPut"], resource: ["unitgroup"] } },
                default: `{
  "name": {
    "en": "Double Room",
    "de": "Doppelzimmer"
  },
  "description": {
    "en": "This is a nice room with as kingsize bed and flat screen",
    "de": "Dies ist ein schönes Zimmer mit Kingsize-Bett und Flachbildschirm"
  },
  "maxPersons": 4,
  "rank": 2
}`,
                description: 'The definition of the unit group.'
            },
            {
                displayName: 'id',
                name: 'InventoryUnit_groupsByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["InventoryUnit_groupsByIdDelete"], resource: ["unitgroup"] } },
                default: '',
                description: 'The ID of the unit group'
            },
            {
                displayName: 'Additional Fields',
                name: 'LogsBookingReservationGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["LogsBookingReservationGet"], resource: ["bookinglogs"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'clientIds',
                name: 'clientIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter the log entries by client IDs (which application triggered this event)',
                options: [{
                    name: 'clientIdsValues',
                    displayName: 'ClientIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter the log entries by client IDs (which application triggered this event)'
                }
                ]
                }]
            },
                {
                displayName: 'dateFilter',
                name: 'dateFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'dateFilterValues',
                    displayName: 'DateFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            },
                {
                displayName: 'eventTypes',
                name: 'eventTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter the log entries by event types',
                options: [{ name: 'Amended', value: 'Amended' }, { name: 'Canceled', value: 'Canceled' }, { name: 'Changed', value: 'Changed' }, { name: 'CheckedIn', value: 'CheckedIn' }, { name: 'CheckedOut', value: 'CheckedOut' }, { name: 'CheckInReverted', value: 'CheckInReverted' }, { name: 'CityTaxAdded', value: 'CityTaxAdded' }, { name: 'CityTaxRemoved', value: 'CityTaxRemoved' }, { name: 'Created', value: 'Created' }, { name: 'InvoiceStatusChanged', value: 'InvoiceStatusChanged' }, { name: 'PaymentAccountRemoved', value: 'PaymentAccountRemoved' }, { name: 'PaymentAccountSet', value: 'PaymentAccountSet' }, { name: 'PickedUpFromBlock', value: 'PickedUpFromBlock' }, { name: 'SetToNoShow', value: 'SetToNoShow' }, { name: 'UnitAssigned', value: 'UnitAssigned' }, { name: 'UnitLocked', value: 'UnitLocked' }, { name: 'UnitUnassigned', value: 'UnitUnassigned' }, { name: 'UnitUnlocked', value: 'UnitUnlocked' }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: changes. All other values will be silently ignored',
                options: [{ name: 'changes', value: 'changes' }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter the log entries by property IDs',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter the log entries by property IDs'
                }
                ]
                }]
            },
                {
                displayName: 'reservationIds',
                name: 'reservationIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter the log entries by reservation IDs',
                options: [{
                    name: 'reservationIdsValues',
                    displayName: 'ReservationIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter the log entries by reservation IDs'
                }
                ]
                }]
            },
                {
                displayName: 'subjectIds',
                name: 'subjectIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter the log entries by subject IDs (which user triggered this event)',
                options: [{
                    name: 'subjectIdsValues',
                    displayName: 'SubjectIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter the log entries by subject IDs (which user triggered this event)'
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'LogsFinanceFolioGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["LogsFinanceFolioGet"], resource: ["financelogs"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'clientIds',
                name: 'clientIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter the log entries by client IDs (which application triggered this event)',
                options: [{
                    name: 'clientIdsValues',
                    displayName: 'ClientIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter the log entries by client IDs (which application triggered this event)'
                }
                ]
                }]
            },
                {
                displayName: 'dateFilter',
                name: 'dateFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'dateFilterValues',
                    displayName: 'DateFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            },
                {
                displayName: 'eventTypes',
                name: 'eventTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter the log entries by event types',
                options: [{ name: 'AllowanceMovedFromFolio', value: 'AllowanceMovedFromFolio' }, { name: 'AllowanceMovedToFolio', value: 'AllowanceMovedToFolio' }, { name: 'AllowancePosted', value: 'AllowancePosted' }, { name: 'ChargeMovedFromFolio', value: 'ChargeMovedFromFolio' }, { name: 'ChargeMovedToFolio', value: 'ChargeMovedToFolio' }, { name: 'ChargePosted', value: 'ChargePosted' }, { name: 'ChargesChanged', value: 'ChargesChanged' }, { name: 'Closed', value: 'Closed' }, { name: 'Created', value: 'Created' }, { name: 'DebitorChanged', value: 'DebitorChanged' }, { name: 'Deleted', value: 'Deleted' }, { name: 'DepositItemAdded', value: 'DepositItemAdded' }, { name: 'DepositItemChanged', value: 'DepositItemChanged' }, { name: 'DepositItemDeleted', value: 'DepositItemDeleted' }, { name: 'InvoiceCanceled', value: 'InvoiceCanceled' }, { name: 'InvoiceCreated', value: 'InvoiceCreated' }, { name: 'InvoicePaid', value: 'InvoicePaid' }, { name: 'InvoiceWrittenOff', value: 'InvoiceWrittenOff' }, { name: 'PaymentAdded', value: 'PaymentAdded' }, { name: 'PaymentCanceled', value: 'PaymentCanceled' }, { name: 'PaymentFailed', value: 'PaymentFailed' }, { name: 'PaymentMovedFromFolio', value: 'PaymentMovedFromFolio' }, { name: 'PaymentMovedToFolio', value: 'PaymentMovedToFolio' }, { name: 'PaymentPosted', value: 'PaymentPosted' }, { name: 'RefundAdded', value: 'RefundAdded' }, { name: 'RefundFailed', value: 'RefundFailed' }, { name: 'RefundMovedFromFolio', value: 'RefundMovedFromFolio' }, { name: 'RefundMovedToFolio', value: 'RefundMovedToFolio' }, { name: 'RefundPosted', value: 'RefundPosted' }, { name: 'Reopened', value: 'Reopened' }, { name: 'TransitoryChargeMovedFromFolio', value: 'TransitoryChargeMovedFromFolio' }, { name: 'TransitoryChargeMovedToFolio', value: 'TransitoryChargeMovedToFolio' }, { name: 'TransitoryChargePosted', value: 'TransitoryChargePosted' }]
            },
                {
                displayName: 'folioIds',
                name: 'folioIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter the log entries by folio IDs',
                options: [{
                    name: 'folioIdsValues',
                    displayName: 'FolioIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter the log entries by folio IDs'
                }
                ]
                }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter the log entries by property IDs',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter the log entries by property IDs'
                }
                ]
                }]
            },
                {
                displayName: 'subjectIds',
                name: 'subjectIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter the log entries by subject IDs (which user triggered this event)',
                options: [{
                    name: 'subjectIdsValues',
                    displayName: 'SubjectIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter the log entries by subject IDs (which user triggered this event)'
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'LogsFinanceNight_auditGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["LogsFinanceNight-auditGet"], resource: ["financelogs"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'dateFilter',
                name: 'dateFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'dateFilterValues',
                    displayName: 'DateFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter the log entries by property IDs',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter the log entries by property IDs'
                }
                ]
                }]
            },
                {
                displayName: 'statuses',
                name: 'statuses',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter the log entries by status',
                options: [{ name: 'Failure', value: 'Failure' }, { name: 'InProgress', value: 'InProgress' }, { name: 'Success', value: 'Success' }]
            },
                {
                displayName: 'subjectIds',
                name: 'subjectIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter the log entries by subject IDs (which user triggered this event)',
                options: [{
                    name: 'subjectIdsValues',
                    displayName: 'SubjectIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter the log entries by subject IDs (which user triggered this event)'
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'LogsFinanceTransactions_exportGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["LogsFinanceTransactions-exportGet"], resource: ["financelogs"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'dateFilter',
                name: 'dateFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'dateFilterValues',
                    displayName: 'DateFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `Filter by event date and time<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter the log entries by property IDs',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter the log entries by property IDs'
                }
                ]
                }]
            },
                {
                displayName: 'subjectIds',
                name: 'subjectIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter the log entries by subject IDs (which user triggered this event)',
                options: [{
                    name: 'subjectIdsValues',
                    displayName: 'SubjectIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter the log entries by subject IDs (which user triggered this event)'
                }
                ]
                }]
            },
                {
                displayName: 'types',
                name: 'types',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter the log entries by export log types',
                options: [{ name: 'Aggregate', value: 'Aggregate' }, { name: 'AggregatePairs', value: 'AggregatePairs' }, { name: 'Raw', value: 'Raw' }]
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'OperationsMaintenancesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["OperationsMaintenancesGet"], resource: ["maintenance"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: unit. All other values will be silently ignored',
                options: [{ name: 'unit', value: 'unit' }]
            },
                {
                displayName: 'from',
                name: 'from',
                type: 'string',
                required: false,
                default: '',
                description: `Filter all maintenance windows that end after the specified date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter result by property ID'
            },
                {
                displayName: 'to',
                name: 'to',
                type: 'string',
                required: false,
                default: '',
                description: `Filter all maintenance windows that start before the specified date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'types',
                name: 'types',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by maintenance types',
                options: [{ name: 'OutOfInventory', value: 'OutOfInventory' }, { name: 'OutOfOrder', value: 'OutOfOrder' }, { name: 'OutOfService', value: 'OutOfService' }]
            },
                {
                displayName: 'unitId',
                name: 'unitId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter result by unit ID'
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["OperationsMaintenancesPost"], resource: ["maintenance"] } },
                default: `{
  "unitId": "MUC-JQI",
  "from": "2025-07-14T15:37:38+02:00",
  "to": "2025-07-16T15:37:38+02:00",
  "type": "OutOfService",
  "description": "The remote control for the TV needs to be replaced."
}`,
                description: 'The definition of the maintenance.'
            },
            {
                displayName: 'Additional Fields',
                name: 'OperationsMaintenancesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["OperationsMaintenancesPost"], resource: ["maintenance"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'OperationsMaintenances_countGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["OperationsMaintenances$countGet"], resource: ["maintenance"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'from',
                name: 'from',
                type: 'string',
                required: false,
                default: '',
                description: `Filter all maintenance windows that end after the specified date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter result by property ID'
            },
                {
                displayName: 'to',
                name: 'to',
                type: 'string',
                required: false,
                default: '',
                description: `Filter all maintenance windows that start before the specified date and time<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
                {
                displayName: 'types',
                name: 'types',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Filter result by maintenance types',
                options: [{ name: 'OutOfInventory', value: 'OutOfInventory' }, { name: 'OutOfOrder', value: 'OutOfOrder' }, { name: 'OutOfService', value: 'OutOfService' }]
            },
                {
                displayName: 'unitId',
                name: 'unitId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter result by unit ID'
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["OperationsMaintenancesBulkPost"], resource: ["maintenance"] } },
                default: `{
  "maintenances": [
    {
      "unitId": "MUC-JQI",
      "from": "2025-07-14T15:37:38+02:00",
      "to": "2025-07-16T15:37:38+02:00",
      "type": "OutOfService",
      "description": "The remote control for the TV needs to be replaced."
    },
    {
      "unitId": "MUC-MTA",
      "from": "2025-07-14T15:37:38+02:00",
      "to": "2025-07-16T15:37:38+02:00",
      "type": "OutOfService",
      "description": "The remote control for the TV needs to be replaced."
    }
  ]
}`,
                description: 'The definition of the maintenances.'
            },
            {
                displayName: 'Additional Fields',
                name: 'OperationsMaintenancesBulkPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["OperationsMaintenancesBulkPost"], resource: ["maintenance"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'OperationsMaintenancesByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["OperationsMaintenancesByIdPatch"], resource: ["maintenance"] } },
                default: '',
                description: 'The ID of the maintenance'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["OperationsMaintenancesByIdPatch"], resource: ["maintenance"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'OperationsMaintenancesByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["OperationsMaintenancesByIdDelete"], resource: ["maintenance"] } },
                default: '',
                description: 'The ID of the maintenance'
            },
            {
                displayName: 'id',
                name: 'OperationsMaintenancesByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["OperationsMaintenancesByIdGet"], resource: ["maintenance"] } },
                default: '',
                description: 'The ID of the maintenance'
            },
            {
                displayName: 'Additional Fields',
                name: 'OperationsMaintenancesByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["OperationsMaintenancesByIdGet"], resource: ["maintenance"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: unit. All other values will be silently ignored',
                options: [{ name: 'unit', value: 'unit' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'OperationsMaintenancesByIdHead_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["OperationsMaintenancesByIdHead"], resource: ["maintenance"] } },
                default: '',
                description: 'The ID of the maintenance'
            },
            {
                displayName: 'propertyId',
                name: 'OperationsNight_auditPut_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["OperationsNight-auditPut"], resource: ["operations"] } },
                default: '',
                description: 'The property the night audit should be performed for'
            },
            {
                displayName: 'Additional Fields',
                name: 'OperationsNight_auditPut_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["OperationsNight-auditPut"], resource: ["operations"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'setReservationsToNoShow',
                name: 'setReservationsToNoShow',
                type: 'boolean',
                required: false,
                default: false,
                description: `Whether flag if reservations in the state confirmed, which should have been checked in by now, should be marked as no show.
            
The default value is true and we strongly advise against setting it to false,
because different reports rely on setting reservations which were not checked in correctly to no show`
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["OperationsUnits-conditionPut"], resource: ["operations"] } },
                default: `{
  "unitsConditions": [
    {
      "id": "UNI-EXA",
      "condition": "Clean"
    },
    {
      "id": "UNI-DBL",
      "condition": "Dirty"
    }
  ]
}`,
                description: 'Array of unit Ids with their respective new condition'
            },
            {
                displayName: 'id',
                name: 'SettingsAge_categoriesByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsAge-categoriesByIdGet"], resource: ["agecategory"] } },
                default: '',
                description: 'The ID of the age category'
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsAge_categoriesByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsAge-categoriesByIdGet"], resource: ["agecategory"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'languages',
                name: 'languages',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`,
                options: [{
                    name: 'languagesValues',
                    displayName: 'Languages',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'SettingsAge_categoriesByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsAge-categoriesByIdPatch"], resource: ["agecategory"] } },
                default: '',
                description: 'The ID of the age category to be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsAge-categoriesByIdPatch"], resource: ["agecategory"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'SettingsAge_categoriesByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsAge_categoriesByIdDelete"], resource: ["agecategory"] } },
                default: '',
                description: 'The ID of the age category'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsAge-categoriesPost"], resource: ["agecategory"] } },
                default: `{
  "code": "BABY",
  "propertyId": "MUC",
  "name": {
    "en": "Baby",
    "de": "Kind"
  },
  "minAge": 0,
  "maxAge": 2
}`,
                description: 'The definition of the age category.'
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsAge_categoriesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsAge-categoriesPost"], resource: ["agecategory"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'SettingsAge_categoriesGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsAge-categoriesGet"], resource: ["agecategory"] } },
                default: '',
                description: 'Return age categories for the specific property'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanCancellation-policiesPost"], resource: ["cancellationpolicy"] } },
                default: `{
  "code": "FLE",
  "name": {
    "en": "Flexible",
    "de": "Flexibel"
  },
  "description": {
    "en": "Free cancellation until 36 hours before arrival.",
    "de": "Kostenfreies Storno bis 36 Stunden vor Ankunft."
  },
  "propertyId": "MUC",
  "periodFromReference": {
    "hours": 12,
    "days": 1
  },
  "reference": "PriorToArrival",
  "fee": {
    "vatType": "Reduced",
    "percentValue": {
      "percent": 100,
      "limit": 1,
      "includeServiceIds": [
        "MUC-BRK"
      ]
    }
  }
}`,
                description: 'The definition of the cancellation policy.'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanCancellation_policiesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanCancellation-policiesPost"], resource: ["cancellationpolicy"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanCancellation_policiesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanCancellation-policiesGet"], resource: ["cancellationpolicy"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter cancellation policies by the specified property'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'id',
                name: 'RateplanCancellation_policiesByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanCancellation-policiesByIdGet"], resource: ["cancellationpolicy"] } },
                default: '',
                description: 'The ID of the cancellation policy'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanCancellation_policiesByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanCancellation-policiesByIdGet"], resource: ["cancellationpolicy"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'languages',
                name: 'languages',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`,
                options: [{
                    name: 'languagesValues',
                    displayName: 'Languages',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'RateplanCancellation_policiesByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanCancellation-policiesByIdPatch"], resource: ["cancellationpolicy"] } },
                default: '',
                description: 'The ID of the cancellation policy to be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanCancellation-policiesByIdPatch"], resource: ["cancellationpolicy"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'RateplanCancellation_policiesByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanCancellation_policiesByIdDelete"], resource: ["cancellationpolicy"] } },
                default: '',
                description: 'The ID of the cancellation policy'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanCompaniesPost"], resource: ["company"] } },
                default: `{
  "code": "UMBRELLA",
  "propertyId": "MUC",
  "name": "Umbrella Corp.",
  "invoicingEmail": "umbrella@corp.com",
  "taxId": "Tax 123456",
  "additionalTaxId": "123456789",
  "address": {
    "addressLine1": "Marienplatz 1",
    "postalCode": "80331",
    "city": "München",
    "countryCode": "DE"
  },
  "canCheckOutOnAr": true,
  "ratePlans": [
    {
      "id": "MUC-DBL",
      "corporateCode": "UMBRELLAINC"
    }
  ]
}`,
                description: 'The definition of the company.'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanCompaniesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanCompaniesPost"], resource: ["company"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanCompaniesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanCompaniesGet"], resource: ["company"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'corporateCodes',
                name: 'corporateCodes',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return companies that have any of the requested corporate codes',
                options: [{
                    name: 'corporateCodesValues',
                    displayName: 'CorporateCodes',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return companies that have any of the requested corporate codes'
                }
                ]
                }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter by the specified property'
            },
                {
                displayName: 'ratePlanIds',
                name: 'ratePlanIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return companies with any of the specified rate plans',
                options: [{
                    name: 'ratePlanIdsValues',
                    displayName: 'RatePlanIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return companies with any of the specified rate plans'
                }
                ]
                }]
            },
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: `This will filter all companies for the provided free text.
Currently it only looks up if the company name contains one of the provided values`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'RateplanCompaniesByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanCompaniesByIdGet"], resource: ["company"] } },
                default: '',
                description: 'The ID of the company'
            },
            {
                displayName: 'id',
                name: 'RateplanCompaniesByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanCompaniesByIdPatch"], resource: ["company"] } },
                default: '',
                description: 'The ID of the company to be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanCompaniesByIdPatch"], resource: ["company"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'RateplanCompaniesByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanCompaniesByIdDelete"], resource: ["company"] } },
                default: '',
                description: 'The ID of the company to delete'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanCorporate_codesCodesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanCorporate-codesCodesGet"], resource: ["corporatecodes"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Return codes for a specific property'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanNo-show-policiesPost"], resource: ["noshowpolicy"] } },
                default: `{
  "code": "NONREF",
  "name": {
    "en": "No-Show Fee",
    "de": "No-Show Fee"
  },
  "description": {
    "en": "100% of the accommodation fees, for the complete stay.",
    "de": "100% of the accommodation fees, for the complete stay."
  },
  "propertyId": "MUC",
  "fee": {
    "vatType": "Null",
    "fixedValue": {
      "amount": 100.0,
      "currency": "EUR"
    }
  }
}`,
                description: 'The definition of the no-show policy.'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanNo_show_policiesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanNo-show-policiesPost"], resource: ["noshowpolicy"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanNo_show_policiesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanNo-show-policiesGet"], resource: ["noshowpolicy"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter no-show policies by the specified property'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'id',
                name: 'RateplanNo_show_policiesByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanNo-show-policiesByIdGet"], resource: ["noshowpolicy"] } },
                default: '',
                description: 'The ID of the no-show policy'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanNo_show_policiesByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanNo-show-policiesByIdGet"], resource: ["noshowpolicy"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'languages',
                name: 'languages',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`,
                options: [{
                    name: 'languagesValues',
                    displayName: 'Languages',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'RateplanNo_show_policiesByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanNo-show-policiesByIdPatch"], resource: ["noshowpolicy"] } },
                default: '',
                description: 'The ID of the no-show policy to be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanNo-show-policiesByIdPatch"], resource: ["noshowpolicy"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'RateplanNo_show_policiesByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanNo_show_policiesByIdDelete"], resource: ["noshowpolicy"] } },
                default: '',
                description: 'The ID of the no-show policy'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanPromo_codesCodesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanPromo-codesCodesGet"], resource: ["promocodes"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Return codes for a specific property'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'id',
                name: 'RateplanRate_plansByIdRatesGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate-plansByIdRatesGet"], resource: ["rate"] } },
                default: '',
                description: 'The ID of the rate plan'
            },
            {
                displayName: 'from',
                name: 'RateplanRate_plansByIdRatesGet_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate-plansByIdRatesGet"], resource: ["rate"] } },
                default: '',
                description: `The start of the time range to filter the rates by. All rates where the from date and time is equal or later than
the specified date and optional time will be affected<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'to',
                name: 'RateplanRate_plansByIdRatesGet_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate-plansByIdRatesGet"], resource: ["rate"] } },
                default: '',
                description: `The end of the time range to filter the rates by. All rates where the from date and time is earlier than
the specified date and optional time will be affected<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanRate_plansByIdRatesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanRate-plansByIdRatesGet"], resource: ["rate"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'id',
                name: 'RateplanRate_plansByIdRatesPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate-plansByIdRatesPut"], resource: ["rate"] } },
                default: '',
                description: 'The ID of the rate plan'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate-plansByIdRatesPut"], resource: ["rate"] } },
                default: `{
  "rates": [
    {
      "from": "2025-07-14T17:00:00+02:00",
      "to": "2025-07-15T11:00:00+02:00",
      "price": {
        "amount": 123.50,
        "currency": "EUR"
      },
      "restrictions": {
        "minLengthOfStay": 1,
        "maxLengthOfStay": 30,
        "closed": false,
        "closedOnArrival": true,
        "closedOnDeparture": true
      }
    }
  ]
}`,
                description: 'The definition of the rates.'
            },
            {
                displayName: 'id',
                name: 'RateplanRate_plansByIdRatesPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate_plansByIdRatesPatch"], resource: ["rate"] } },
                default: '',
                description: 'The ID of the rate plan'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate-plansByIdRatesPatch"], resource: ["rate"] } },
                default: `{
  "rates": [
    {
      "from": "2025-07-14",
      "to": "2025-07-15",
      "weekDays": [
        "Monday",
        "Wednesday"
      ],
      "operations": [
        {
          "value": {
            "amount": 25.0,
            "currency": "EUR"
          },
          "path": "/price",
          "op": "replace"
        },
        {
          "value": true,
          "path": "restrictions/closedOnArrival",
          "op": "replace"
        }
      ]
    }
  ]
}`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'RateplanRate_plansByIdRatesDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate_plansByIdRatesDelete"], resource: ["rate"] } },
                default: '',
                description: 'The ID of the rate plan'
            },
            {
                displayName: 'from',
                name: 'RateplanRate_plansByIdRatesDelete_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate_plansByIdRatesDelete"], resource: ["rate"] } },
                default: '',
                description: `The start of the time range to filter the rates by. All rates where the from date and time is equal or later than
the specified date and optional time will be affected<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'to',
                name: 'RateplanRate_plansByIdRatesDelete_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate_plansByIdRatesDelete"], resource: ["rate"] } },
                default: '',
                description: `The end of the time range to filter the rates by. All rates where the from date and time is earlier than
the specified date and optional time will be affected<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'id',
                name: 'RateplanRate_plansByIdRates_countGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate_plansByIdRates_countGet"], resource: ["rate"] } },
                default: '',
                description: 'The ID of the rate plan'
            },
            {
                displayName: 'from',
                name: 'RateplanRate_plansByIdRates_countGet_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate_plansByIdRates_countGet"], resource: ["rate"] } },
                default: '',
                description: `The start of the time range to filter the rates by. All rates where the from date and time is equal or later than
the specified date and optional time will be affected<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'to',
                name: 'RateplanRate_plansByIdRates_countGet_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate_plansByIdRates_countGet"], resource: ["rate"] } },
                default: '',
                description: `The end of the time range to filter the rates by. All rates where the from date and time is earlier than
the specified date and optional time will be affected<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'ratePlanIds',
                name: 'RateplanRatesPatch_ratePlanIds',
                type: 'fixedCollection',
                required: true,
                displayOptions: { show: { operation: ["RateplanRatesPatch"], resource: ["rate"] } },
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Filter rates for patching by rate plan ids',
                options: [{
                    name: 'ratePlanIdsValues',
                    displayName: 'RatePlanIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Filter rates for patching by rate plan ids'
                }
                ]
                }]
            },
            {
                displayName: 'from',
                name: 'RateplanRatesPatch_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRatesPatch"], resource: ["rate"] } },
                default: '',
                description: `The start of the time range to filter the rates by. All rates where the from date and time is equal or later than
the specified date and optional time will be affected<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'to',
                name: 'RateplanRatesPatch_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRatesPatch"], resource: ["rate"] } },
                default: '',
                description: `The end of the time range to filter the rates by. All rates where the from date and time is earlier than
the specified date and optional time will be affected<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>`
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanRatesPatch"], resource: ["rate"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanRatesPatch_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanRatesPatch"], resource: ["rate"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'weekDays',
                name: 'weekDays',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'The weekdays that will be patched. If not specified, all weekdays will be patched',
                options: [{ name: 'Friday', value: 'Friday' }, { name: 'Monday', value: 'Monday' }, { name: 'Saturday', value: 'Saturday' }, { name: 'Sunday', value: 'Sunday' }, { name: 'Thursday', value: 'Thursday' }, { name: 'Tuesday', value: 'Tuesday' }, { name: 'Wednesday', value: 'Wednesday' }]
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanRate_plansGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanRate-plansGet"], resource: ["rateplan"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'baseRatePlanIds',
                name: 'baseRatePlanIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans derived from any of the specified rate plans',
                options: [{
                    name: 'baseRatePlanIdsValues',
                    displayName: 'BaseRatePlanIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans derived from any of the specified rate plans'
                }
                ]
                }]
            },
                {
                displayName: 'cancellationPolicyIds',
                name: 'cancellationPolicyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans with any of the specified cancellation policies',
                options: [{
                    name: 'cancellationPolicyIdsValues',
                    displayName: 'CancellationPolicyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans with any of the specified cancellation policies'
                }
                ]
                }]
            },
                {
                displayName: 'channelCodes',
                name: 'channelCodes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Return rate plans that are sold though any of the specified channels',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'companyIds',
                name: 'companyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans filtered by requested companies',
                options: [{
                    name: 'companyIdsValues',
                    displayName: 'CompanyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans filtered by requested companies'
                }
                ]
                }]
            },
                {
                displayName: 'derivationLevelFilter',
                name: 'derivationLevelFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `This will filter rate plans based on their derivation level.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'derivationLevelFilterValues',
                    displayName: 'DerivationLevelFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `This will filter rate plans based on their derivation level.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, cancellationPolicy, services, bookingPeriods, surcharges, ageCategories. All other values will be silently ignored',
                options: [{ name: 'ageCategories', value: 'ageCategories' }, { name: 'bookingPeriods', value: 'bookingPeriods' }, { name: 'cancellationPolicy', value: 'cancellationPolicy' }, { name: 'property', value: 'property' }, { name: 'services', value: 'services' }, { name: 'surcharges', value: 'surcharges' }, { name: 'unitGroup', value: 'unitGroup' }]
            },
                {
                displayName: 'includedServiceIds',
                name: 'includedServiceIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans that have any of the requested included services',
                options: [{
                    name: 'includedServiceIdsValues',
                    displayName: 'IncludedServiceIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans that have any of the requested included services'
                }
                ]
                }]
            },
                {
                displayName: 'isDerived',
                name: 'isDerived',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether return only derived or base rate plans'
            },
                {
                displayName: 'minGuaranteeTypes',
                name: 'minGuaranteeTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Return rate plans with any of the specified min guarantee types',
                options: [{ name: 'Company', value: 'Company' }, { name: 'CreditCard', value: 'CreditCard' }, { name: 'PM6Hold', value: 'PM6Hold' }, { name: 'Prepayment', value: 'Prepayment' }]
            },
                {
                displayName: 'noShowPolicyIds',
                name: 'noShowPolicyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans with any of the specified no-show policies',
                options: [{
                    name: 'noShowPolicyIdsValues',
                    displayName: 'NoShowPolicyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans with any of the specified no-show policies'
                }
                ]
                }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'promoCodes',
                name: 'promoCodes',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans that have any of the requested promo codes',
                options: [{
                    name: 'promoCodesValues',
                    displayName: 'PromoCodes',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans that have any of the requested promo codes'
                }
                ]
                }]
            },
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Return rate plans for the specific property'
            },
                {
                displayName: 'ratePlanCodes',
                name: 'ratePlanCodes',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans filtered by requested codes',
                options: [{
                    name: 'ratePlanCodesValues',
                    displayName: 'RatePlanCodes',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans filtered by requested codes'
                }
                ]
                }]
            },
                {
                displayName: 'timeSliceDefinitionIds',
                name: 'timeSliceDefinitionIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans with any of the specified time slice definitions',
                options: [{
                    name: 'timeSliceDefinitionIdsValues',
                    displayName: 'TimeSliceDefinitionIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans with any of the specified time slice definitions'
                }
                ]
                }]
            },
                {
                displayName: 'timeSliceTemplate',
                name: 'timeSliceTemplate',
                type: 'options',
                required: false,
                default: 'DayUse',
                description: `The time slice template, defaults to 'over night'`,
                options: [{ name: 'DayUse', value: 'DayUse' }, { name: 'OverNight', value: 'OverNight' }]
            },
                {
                displayName: 'unitGroupIds',
                name: 'unitGroupIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans with any of the specified unit groups',
                options: [{
                    name: 'unitGroupIdsValues',
                    displayName: 'UnitGroupIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans with any of the specified unit groups'
                }
                ]
                }]
            },
                {
                displayName: 'unitGroupTypes',
                name: 'unitGroupTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Return rate plans with any of the specified unit group types',
                options: [{ name: 'BedRoom', value: 'BedRoom' }, { name: 'EventSpace', value: 'EventSpace' }, { name: 'MeetingRoom', value: 'MeetingRoom' }, { name: 'Other', value: 'Other' }, { name: 'ParkingLot', value: 'ParkingLot' }]
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate-plansPost"], resource: ["rateplan"] } },
                default: `{
  "code": "NONREF",
  "propertyId": "MUC",
  "unitGroupId": "MUC-DBL",
  "cancellationPolicyId": "MUC-FLE",
  "channelCodes": [
    "Direct",
    "BookingCom",
    "Ibe"
  ],
  "promoCodes": [
    "APA55100",
    "DISCOUNT20"
  ],
  "isSubjectToCityTax": true,
  "timeSliceDefinitionId": "MUC-NIGHT",
  "name": {
    "de": "Nicht Stornierbar",
    "en": "Non Refundable"
  },
  "description": {
    "de": "Nicht Stornierbar",
    "en": "Non Refundable"
  },
  "minGuaranteeType": "PM6Hold",
  "priceCalculationMode": "Truncate",
  "bookingPeriods": [
    {
      "from": "2025-07-07T16:47:36.8884507+02:00",
      "to": "2025-07-21T16:47:36.8884507+02:00"
    },
    {
      "from": "2025-07-24T16:47:36.8884507+02:00",
      "to": "2025-09-12T16:47:36.8884507+02:00"
    }
  ],
  "restrictions": {
    "minAdvance": {
      "hours": 12,
      "days": 180
    },
    "maxAdvance": {
      "months": 24
    }
  },
  "pricingRule": {
    "baseRatePlanId": "MUC-NONREF-SGL",
    "type": "Absolute",
    "value": 20.00
  },
  "surcharges": [
    {
      "adults": 2,
      "type": "Absolute",
      "value": 10.0
    }
  ],
  "ageCategories": [
    {
      "id": "MUC-BABY",
      "surcharges": [
        {
          "adults": 1,
          "value": 20.0
        }
      ]
    }
  ],
  "includedServices": [
    {
      "serviceId": "MUC-BRKF",
      "grossPrice": {
        "amount": 10.0,
        "currency": "EUR"
      }
    }
  ],
  "companies": [
    {
      "id": "MUC-APA",
      "corporateCode": "APA-DBL"
    }
  ],
  "accountingConfigs": [
    {
      "state": "Unknown",
      "vatType": "Normal",
      "serviceType": "FoodAndBeverages",
      "subAccountId": "ALCO",
      "validFrom": "2021-01-01"
    }
  ]
}`,
                description: 'The definition of the rate plan.'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanRate_plansPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanRate-plansPost"], resource: ["rateplan"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'ratePlanIds',
                name: 'RateplanRate_plansPatch_ratePlanIds',
                type: 'fixedCollection',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate-plansPatch"], resource: ["rateplan"] } },
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Comma separated list of rate plan IDs, at least one',
                options: [{
                    name: 'ratePlanIdsValues',
                    displayName: 'RatePlanIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Comma separated list of rate plan IDs, at least one.'
                }
                ]
                }]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate-plansPatch"], resource: ["rateplan"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'ratePlanIds',
                name: 'RateplanRate_plansDelete_ratePlanIds',
                type: 'fixedCollection',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate_plansDelete"], resource: ["rateplan"] } },
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Comma separated list of rate plan IDs, at least one',
                options: [{
                    name: 'ratePlanIdsValues',
                    displayName: 'RatePlanIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Comma separated list of rate plan IDs, at least one.'
                }
                ]
                }]
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanRate_plans_countGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanRate_plans_countGet"], resource: ["rateplan"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'baseRatePlanIds',
                name: 'baseRatePlanIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans derived from any of the specified rate plans',
                options: [{
                    name: 'baseRatePlanIdsValues',
                    displayName: 'BaseRatePlanIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans derived from any of the specified rate plans'
                }
                ]
                }]
            },
                {
                displayName: 'cancellationPolicyIds',
                name: 'cancellationPolicyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans with any of the specified cancellation policies',
                options: [{
                    name: 'cancellationPolicyIdsValues',
                    displayName: 'CancellationPolicyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans with any of the specified cancellation policies'
                }
                ]
                }]
            },
                {
                displayName: 'channelCodes',
                name: 'channelCodes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Return rate plans that are sold though any of the specified channels',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'companyIds',
                name: 'companyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans filtered by requested companies',
                options: [{
                    name: 'companyIdsValues',
                    displayName: 'CompanyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans filtered by requested companies'
                }
                ]
                }]
            },
                {
                displayName: 'derivationLevelFilter',
                name: 'derivationLevelFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `This will filter rate plans based on their derivation level.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'derivationLevelFilterValues',
                    displayName: 'DerivationLevelFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `This will filter rate plans based on their derivation level.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            },
                {
                displayName: 'includedServiceIds',
                name: 'includedServiceIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans that have any of the requested included services',
                options: [{
                    name: 'includedServiceIdsValues',
                    displayName: 'IncludedServiceIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans that have any of the requested included services'
                }
                ]
                }]
            },
                {
                displayName: 'isDerived',
                name: 'isDerived',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether return only derived or base rate plans'
            },
                {
                displayName: 'minGuaranteeTypes',
                name: 'minGuaranteeTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Return rate plans with any of the specified min guarantee types',
                options: [{ name: 'Company', value: 'Company' }, { name: 'CreditCard', value: 'CreditCard' }, { name: 'PM6Hold', value: 'PM6Hold' }, { name: 'Prepayment', value: 'Prepayment' }]
            },
                {
                displayName: 'noShowPolicyIds',
                name: 'noShowPolicyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans with any of the specified no-show policies',
                options: [{
                    name: 'noShowPolicyIdsValues',
                    displayName: 'NoShowPolicyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans with any of the specified no-show policies'
                }
                ]
                }]
            },
                {
                displayName: 'promoCodes',
                name: 'promoCodes',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans that have any of the requested promo codes',
                options: [{
                    name: 'promoCodesValues',
                    displayName: 'PromoCodes',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans that have any of the requested promo codes'
                }
                ]
                }]
            },
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Return rate plans for the specific property'
            },
                {
                displayName: 'ratePlanCodes',
                name: 'ratePlanCodes',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans filtered by requested codes',
                options: [{
                    name: 'ratePlanCodesValues',
                    displayName: 'RatePlanCodes',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans filtered by requested codes'
                }
                ]
                }]
            },
                {
                displayName: 'timeSliceDefinitionIds',
                name: 'timeSliceDefinitionIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans with any of the specified time slice definitions',
                options: [{
                    name: 'timeSliceDefinitionIdsValues',
                    displayName: 'TimeSliceDefinitionIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans with any of the specified time slice definitions'
                }
                ]
                }]
            },
                {
                displayName: 'timeSliceTemplate',
                name: 'timeSliceTemplate',
                type: 'options',
                required: false,
                default: 'DayUse',
                description: `The time slice template, defaults to 'over night'`,
                options: [{ name: 'DayUse', value: 'DayUse' }, { name: 'OverNight', value: 'OverNight' }]
            },
                {
                displayName: 'unitGroupIds',
                name: 'unitGroupIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return rate plans with any of the specified unit groups',
                options: [{
                    name: 'unitGroupIdsValues',
                    displayName: 'UnitGroupIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return rate plans with any of the specified unit groups'
                }
                ]
                }]
            },
                {
                displayName: 'unitGroupTypes',
                name: 'unitGroupTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'Return rate plans with any of the specified unit group types',
                options: [{ name: 'BedRoom', value: 'BedRoom' }, { name: 'EventSpace', value: 'EventSpace' }, { name: 'MeetingRoom', value: 'MeetingRoom' }, { name: 'Other', value: 'Other' }, { name: 'ParkingLot', value: 'ParkingLot' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'RateplanRate_plansByIdHead_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate_plansByIdHead"], resource: ["rateplan"] } },
                default: '',
                description: 'The ID of the rate plan'
            },
            {
                displayName: 'id',
                name: 'RateplanRate_plansByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate-plansByIdGet"], resource: ["rateplan"] } },
                default: '',
                description: 'The ID of the rate plan'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanRate_plansByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanRate-plansByIdGet"], resource: ["rateplan"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'languages',
                name: 'languages',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`,
                options: [{
                    name: 'languagesValues',
                    displayName: 'Languages',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`
                }
                ]
                }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: property, cancellationPolicy. All other values will be silently ignored',
                options: [{ name: 'cancellationPolicy', value: 'cancellationPolicy' }, { name: 'property', value: 'property' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'RateplanRate_plansByIdPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate-plansByIdPut"], resource: ["rateplan"] } },
                default: '',
                description: 'The ID of the rate plan'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate-plansByIdPut"], resource: ["rateplan"] } },
                default: `{
  "name": {
    "de": "Nicht Stornierbar",
    "en": "Non Refundable"
  },
  "description": {
    "de": "Nicht Stornierbar",
    "en": "Non Refundable"
  },
  "minGuaranteeType": "PM6Hold",
  "priceCalculationMode": "Truncate",
  "channelCodes": [
    "Direct",
    "BookingCom",
    "Ibe"
  ],
  "cancellationPolicyId": "MUC-NONREF",
  "bookingPeriods": [
    {
      "from": "2025-07-07T16:47:36.8884507+02:00",
      "to": "2025-07-21T16:47:36.8884507+02:00"
    },
    {
      "from": "2025-07-24T16:47:36.8884507+02:00",
      "to": "2025-09-12T16:47:36.8884507+02:00"
    }
  ],
  "restrictions": {
    "minAdvance": {
      "hours": 12,
      "days": 180
    },
    "maxAdvance": {
      "months": 24
    }
  },
  "includedServices": [
    {
      "serviceId": "MUC-BRKF",
      "grossPrice": {
        "amount": 10.0,
        "currency": "EUR"
      }
    },
    {
      "serviceId": "MUC-WLAN",
      "grossPrice": {
        "amount": 5.0,
        "currency": "EUR"
      }
    }
  ],
  "companies": [
    {
      "id": "MUC-APA",
      "corporateCode": "APA-DBL"
    }
  ],
  "pricingRule": {
    "baseRatePlanId": "MUC-NONREF-SGL",
    "type": "Absolute",
    "value": 20.00
  },
  "surcharges": [
    {
      "adults": 2,
      "type": "Percent",
      "value": 10.0
    }
  ],
  "ageCategories": [
    {
      "id": "MUC-BABY",
      "surcharges": [
        {
          "adults": 1,
          "value": 10.0
        }
      ]
    },
    {
      "id": "MUC-CHILD",
      "surcharges": [
        {
          "adults": 1,
          "value": 40.0
        }
      ]
    }
  ]
}`,
                description: 'The definition of the rate plan.'
            },
            {
                displayName: 'id',
                name: 'RateplanRate_plansByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanRate_plansByIdDelete"], resource: ["rateplan"] } },
                default: '',
                description: 'The ID of the rate plan'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanServicesPost"], resource: ["service"] } },
                default: `{
  "code": "BRK",
  "name": {
    "en": "Breakfast",
    "de": "Frühstück"
  },
  "description": {
    "en": "Yummy yummy breakfast",
    "de": "Leckeres Frühstück"
  },
  "propertyId": "MUC",
  "defaultGrossPrice": {
    "amount": 20.0,
    "currency": "EUR"
  },
  "pricingUnit": "Person",
  "postNextDay": true,
  "availability": {
    "mode": "Daily",
    "quantity": 3,
    "daysOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ]
  },
  "channelCodes": [
    "Direct",
    "Ibe",
    "BookingCom",
    "ChannelManager"
  ],
  "accountingConfigs": [
    {
      "state": "Unknown",
      "vatType": "Normal",
      "serviceType": "FoodAndBeverages",
      "subAccountId": "ALCO",
      "validFrom": "2021-01-01"
    }
  ],
  "ageCategoryId": "MUC-BABY"
}`,
                description: 'The definition of the service.'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanServicesPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanServicesPost"], resource: ["service"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanServicesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanServicesGet"], resource: ["service"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'channelCodes',
                name: 'channelCodes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'The channel codes the service is sold through',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored',
                options: [{ name: 'property', value: 'property' }]
            },
                {
                displayName: 'onlySoldAsExtras',
                name: 'onlySoldAsExtras',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether if set to true, return only services that can be sold as extras. Otherwise, it returns both, extras, and include-only'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            },
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter services by the specified property'
            },
                {
                displayName: 'serviceTypes',
                name: 'serviceTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'The service types offered',
                options: [{ name: 'Accommodation', value: 'Accommodation' }, { name: 'FoodAndBeverages', value: 'FoodAndBeverages' }, { name: 'Other', value: 'Other' }]
            },
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: `This will filter all services for the provided free text.
Currently it only looks up if the service name contains one of the provided values`
            }
            ]
            },
            {
                displayName: 'id',
                name: 'RateplanServicesByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanServicesByIdPatch"], resource: ["service"] } },
                default: '',
                description: 'The ID of the service'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["RateplanServicesByIdPatch"], resource: ["service"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'RateplanServicesByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanServicesByIdGet"], resource: ["service"] } },
                default: '',
                description: 'The ID of the service'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanServicesByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanServicesByIdGet"], resource: ["service"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'languages',
                name: 'languages',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`,
                options: [{
                    name: 'languagesValues',
                    displayName: 'Languages',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`
                }
                ]
                }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored',
                options: [{ name: 'property', value: 'property' }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'RateplanServicesByIdHead_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanServicesByIdHead"], resource: ["service"] } },
                default: '',
                description: 'The ID of the service'
            },
            {
                displayName: 'id',
                name: 'RateplanServicesByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["RateplanServicesByIdDelete"], resource: ["service"] } },
                default: '',
                description: 'The ID of the service'
            },
            {
                displayName: 'Additional Fields',
                name: 'RateplanServices_countGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["RateplanServices_countGet"], resource: ["service"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'channelCodes',
                name: 'channelCodes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'The channel codes the service is sold through',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'onlySoldAsExtras',
                name: 'onlySoldAsExtras',
                type: 'boolean',
                required: false,
                default: false,
                description: 'Whether if set to true, return only services that can be sold as extras. Otherwise, it returns both, extras, and include-only'
            },
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter services by the specified property'
            },
                {
                displayName: 'serviceTypes',
                name: 'serviceTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'The service types offered',
                options: [{ name: 'Accommodation', value: 'Accommodation' }, { name: 'FoodAndBeverages', value: 'FoodAndBeverages' }, { name: 'Other', value: 'Other' }]
            },
                {
                displayName: 'textSearch',
                name: 'textSearch',
                type: 'string',
                required: false,
                default: '',
                description: `This will filter all services for the provided free text.
Currently it only looks up if the service name contains one of the provided values`
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'ReportsReportsOrdered_servicesGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsOrdered-servicesGet"], resource: ["reports"] } },
                default: '',
                description: 'Property Id'
            },
            {
                displayName: 'serviceIds',
                name: 'ReportsReportsOrdered_servicesGet_serviceIds',
                type: 'fixedCollection',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsOrdered-servicesGet"], resource: ["reports"] } },
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Service ids the report should be generated for',
                options: [{
                    name: 'serviceIdsValues',
                    displayName: 'ServiceIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Service ids the report should be generated for'
                }
                ]
                }]
            },
            {
                displayName: 'from',
                name: 'ReportsReportsOrdered_servicesGet_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsOrdered-servicesGet"], resource: ["reports"] } },
                default: '',
                description: 'The inclusive start date of the interval'
            },
            {
                displayName: 'to',
                name: 'ReportsReportsOrdered_servicesGet_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsOrdered-servicesGet"], resource: ["reports"] } },
                default: '',
                description: 'The exclusive end date of the interval'
            },
            {
                displayName: 'propertyId',
                name: 'ReportsReportsArrivalsGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsArrivalsGet"], resource: ["reports"] } },
                default: '',
                description: 'Requested property'
            },
            {
                displayName: 'month',
                name: 'ReportsReportsArrivalsGet_month',
                type: 'number',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsArrivalsGet"], resource: ["reports"] } },
                default: 0,
                description: 'Requested month for the report'
            },
            {
                displayName: 'year',
                name: 'ReportsReportsArrivalsGet_year',
                type: 'number',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsArrivalsGet"], resource: ["reports"] } },
                default: 0,
                description: 'Requested year for the report'
            },
            {
                displayName: 'propertyId',
                name: 'ReportsReportsProperty_performanceGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsProperty-performanceGet"], resource: ["reports"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'from',
                name: 'ReportsReportsProperty_performanceGet_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsProperty-performanceGet"], resource: ["reports"] } },
                default: '',
                description: 'The inclusive start date of the interval'
            },
            {
                displayName: 'to',
                name: 'ReportsReportsProperty_performanceGet_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsProperty-performanceGet"], resource: ["reports"] } },
                default: '',
                description: 'The inclusive end date of the interval'
            },
            {
                displayName: 'Additional Fields',
                name: 'ReportsReportsProperty_performanceGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["ReportsReportsProperty-performanceGet"], resource: ["reports"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'channelCodes',
                name: 'channelCodes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'The channel codes used to filter the retrieved data',
                options: [{ name: 'AltoVita', value: 'AltoVita' }, { name: 'BookingCom', value: 'BookingCom' }, { name: 'ChannelManager', value: 'ChannelManager' }, { name: 'DesVu', value: 'DesVu' }, { name: 'Direct', value: 'Direct' }, { name: 'Expedia', value: 'Expedia' }, { name: 'Homelike', value: 'Homelike' }, { name: 'Hrs', value: 'Hrs' }, { name: 'Ibe', value: 'Ibe' }]
            },
                {
                displayName: 'companyIds',
                name: 'companyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'The company IDs used to filter the retrieved data',
                options: [{
                    name: 'companyIdsValues',
                    displayName: 'CompanyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'The company IDs used to filter the retrieved data'
                }
                ]
                }]
            },
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: businessDays. All other values will be silently ignored',
                options: [{ name: 'businessDays', value: 'businessDays' }]
            },
                {
                displayName: 'marketSegmentIds',
                name: 'marketSegmentIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'The market segment IDs used to filter the retrieved data',
                options: [{
                    name: 'marketSegmentIdsValues',
                    displayName: 'MarketSegmentIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'The market segment IDs used to filter the retrieved data'
                }
                ]
                }]
            },
                {
                displayName: 'ratePlanIds',
                name: 'ratePlanIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'The rate plan IDs used to filter the retrieved data',
                options: [{
                    name: 'ratePlanIdsValues',
                    displayName: 'RatePlanIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'The rate plan IDs used to filter the retrieved data'
                }
                ]
                }]
            },
                {
                displayName: 'timeSliceDefinitionIds',
                name: 'timeSliceDefinitionIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'The time slice definition IDs used to filter the retrieved data',
                options: [{
                    name: 'timeSliceDefinitionIdsValues',
                    displayName: 'TimeSliceDefinitionIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'The time slice definition IDs used to filter the retrieved data'
                }
                ]
                }]
            },
                {
                displayName: 'travelPurpose',
                name: 'travelPurpose',
                type: 'options',
                required: false,
                default: 'Business',
                description: 'The travel purpose to filter the retrieved data',
                options: [{ name: 'Business', value: 'Business' }, { name: 'Leisure', value: 'Leisure' }]
            },
                {
                displayName: 'unitGroupIds',
                name: 'unitGroupIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'The unit group IDs used to filter the retrieved data',
                options: [{
                    name: 'unitGroupIdsValues',
                    displayName: 'UnitGroupIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'The unit group IDs used to filter the retrieved data'
                }
                ]
                }]
            },
                {
                displayName: 'unitGroupTypes',
                name: 'unitGroupTypes',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'The unit group types used to filter the retrieved data',
                options: [{ name: 'BedRoom', value: 'BedRoom' }, { name: 'EventSpace', value: 'EventSpace' }, { name: 'MeetingRoom', value: 'MeetingRoom' }, { name: 'Other', value: 'Other' }, { name: 'ParkingLot', value: 'ParkingLot' }]
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'ReportsReportsCompany_invoices_vatGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsCompany-invoices-vatGet"], resource: ["reports"] } },
                default: '',
                description: 'Property ID'
            },
            {
                displayName: 'Additional Fields',
                name: 'ReportsReportsCompany_invoices_vatGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["ReportsReportsCompany-invoices-vatGet"], resource: ["reports"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'companyIds',
                name: 'companyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Company IDs the report should be generated for',
                options: [{
                    name: 'companyIdsValues',
                    displayName: 'CompanyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Company IDs the report should be generated for'
                }
                ]
                }]
            },
                {
                displayName: 'dateFilter',
                name: 'dateFilter',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `Set a date interval to get the report for. Cannot be more than 1 month.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`,
                options: [{
                    name: 'dateFilterValues',
                    displayName: 'DateFilter',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `Set a date interval to get the report for. Cannot be more than 1 month.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7`
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'ReportsReportsRevenuesGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsRevenuesGet"], resource: ["reports"] } },
                default: '',
                description: 'Property ID'
            },
            {
                displayName: 'from',
                name: 'ReportsReportsRevenuesGet_from',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsRevenuesGet"], resource: ["reports"] } },
                default: '',
                description: 'The inclusive start date of the interval'
            },
            {
                displayName: 'to',
                name: 'ReportsReportsRevenuesGet_to',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["ReportsReportsRevenuesGet"], resource: ["reports"] } },
                default: '',
                description: 'The exclusive end date of the interval. The interval is limited to one year'
            },
            {
                displayName: 'Additional Fields',
                name: 'ReportsReportsRevenuesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["ReportsReportsRevenuesGet"], resource: ["reports"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'languageCode',
                name: 'languageCode',
                type: 'string',
                required: false,
                default: '',
                description: 'The language for the the report'
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsCapture_policiesGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsCapture-policiesGet"], resource: ["capturepolicies"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter capture policies by the specified property'
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'id',
                name: 'SettingsCapture_policiesByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsCapture-policiesByIdGet"], resource: ["capturepolicies"] } },
                default: '',
                description: 'The ID of the capture policy'
            },
            {
                displayName: 'id',
                name: 'SettingsCapture_policiesByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsCapture-policiesByIdPatch"], resource: ["capturepolicies"] } },
                default: '',
                description: 'The ID of the capture policy to be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsCapture-policiesByIdPatch"], resource: ["capturepolicies"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsCity-taxPost"], resource: ["citytax"] } },
                default: `{
  "name": {
    "en": "City tax",
    "de": "City-Tax"
  },
  "description": {
    "en": "2 Euro per person and night. Business travellers and close family members of citizens do not have to pay city tax.",
    "de": "2 Euro pro Person und Nacht. Geschäftsreisende und nahe Familienmitglieder von Anwohnern müssen keine City-Tax bezahlen."
  },
  "propertyId": "MUC",
  "type": "PerPersonPerNight",
  "taxHandlingType": "BeforeTax",
  "value": 2.0,
  "vatType": "Normal",
  "code": "TAX",
  "priority": 1,
  "includeCityTaxInRateAmount": false,
  "subcategories": [
    {
      "name": {
        "en": "Children under 12 don't have to pay city tax",
        "de": "Kinder unter 12 Jahren zahlen keine City-Tax"
      },
      "value": 0.0,
      "age": {
        "min": 0,
        "max": 12
      }
    }
  ],
  "ignoredFor": [
    {
      "distributionChannel": {
        "channelCode": "ChannelManager",
        "sources": [
          "bookingcom"
        ]
      }
    }
  ]
}`,
                description: 'The definition of the city tax.'
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsCity_taxPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsCity-taxPost"], resource: ["citytax"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsCity_taxGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsCity-taxGet"], resource: ["citytax"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'propertyId',
                name: 'propertyId',
                type: 'string',
                required: false,
                default: '',
                description: 'Filter by the specified property'
            }
            ]
            },
            {
                displayName: 'id',
                name: 'SettingsCity_taxByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsCity-taxByIdGet"], resource: ["citytax"] } },
                default: '',
                description: 'The ID of the city tax'
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsCity_taxByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsCity-taxByIdGet"], resource: ["citytax"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'languages',
                name: 'languages',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`,
                options: [{
                    name: 'languagesValues',
                    displayName: 'Languages',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: `'all' or comma separated list of two-letter language codes (ISO Alpha-2)`
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'SettingsCity_taxByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsCity-taxByIdPatch"], resource: ["citytax"] } },
                default: '',
                description: 'The ID of the city tax to be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsCity-taxByIdPatch"], resource: ["citytax"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'SettingsCity_taxByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsCity_taxByIdDelete"], resource: ["citytax"] } },
                default: '',
                description: 'The ID of the city tax to remove'
            },
            {
                displayName: 'propertyId',
                name: 'SettingsSub_accountsGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsSub-accountsGet"], resource: ["customsubaccounts"] } },
                default: '',
                description: 'ID of the property'
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsSub_accountsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsSub-accountsGet"], resource: ["customsubaccounts"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsSub-accountsPost"], resource: ["customsubaccounts"] } },
                default: `{
  "propertyId": "MUC",
  "code": "TEA",
  "name": "Finest green tea",
  "type": "FoodAndBeverages"
}`,
                description: 'The definition of the sub-account.'
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsSub_accountsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsSub-accountsPost"], resource: ["customsubaccounts"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'SettingsSub_accounts_countGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsSub-accounts$countGet"], resource: ["customsubaccounts"] } },
                default: '',
                description: 'ID of the property'
            },
            {
                displayName: 'id',
                name: 'SettingsSub_accountsByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsSub-accountsByIdGet"], resource: ["customsubaccounts"] } },
                default: '',
                description: 'The ID of the sub-account'
            },
            {
                displayName: 'id',
                name: 'SettingsSub_accountsByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsSub-accountsByIdPatch"], resource: ["customsubaccounts"] } },
                default: '',
                description: 'The ID of the sub-account'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsSub-accountsByIdPatch"], resource: ["customsubaccounts"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'SettingsSub_accountsByIdHead_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsSub-accountsByIdHead"], resource: ["customsubaccounts"] } },
                default: '',
                description: 'The ID of the sub-account'
            },
            {
                displayName: 'id',
                name: 'SettingsSub_accountsByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsSub_accountsByIdDelete"], resource: ["customsubaccounts"] } },
                default: '',
                description: 'The ID of the sub-accounts'
            },
            {
                displayName: 'propertyId',
                name: 'SettingsFeaturesByPropertyIdGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsFeaturesByPropertyIdGet"], resource: ["featuresettings"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'propertyId',
                name: 'SettingsFeaturesByPropertyIdPatch_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsFeaturesByPropertyIdPatch"], resource: ["featuresettings"] } },
                default: '',
                description: 'The ID of the property you want to toggle features for'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsFeaturesByPropertyIdPatch"], resource: ["featuresettings"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsInvoice_addressGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsInvoice-addressGet"], resource: ["invoiceaddress"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: '',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Array value'
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'propertyIds',
                name: 'SettingsInvoice_addressPut_propertyIds',
                type: 'fixedCollection',
                required: true,
                displayOptions: { show: { operation: ["SettingsInvoice-addressPut"], resource: ["invoiceaddress"] } },
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: '',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Array value'
                }
                ]
                }]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsInvoice-addressPut"], resource: ["invoiceaddress"] } },
                default: `{
  "addressLine1": "Marienplatz 1",
  "postalCode": "80331",
  "city": "München",
  "regionCode": "DE-BY",
  "countryCode": "DE"
}`,
                description: 'Address displayed on invoices.'
            },
            {
                displayName: 'propertyIds',
                name: 'SettingsInvoice_addressPatch_propertyIds',
                type: 'fixedCollection',
                required: true,
                displayOptions: { show: { operation: ["SettingsInvoice-addressPatch"], resource: ["invoiceaddress"] } },
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: '',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Array value'
                }
                ]
                }]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsInvoice-addressPatch"], resource: ["invoiceaddress"] } },
                default: `
{}
`,
                description: 'The request body data'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsLanguagesPut"], resource: ["languages"] } },
                default: `{
  "languages": [
    {
      "code": "en",
      "mandatory": true
    },
    {
      "code": "de",
      "mandatory": false
    }
  ]
}`,
                description: 'The definition of the language settings.'
            },
            {
                displayName: 'id',
                name: 'SettingsMarket_segmentsByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsMarket-segmentsByIdGet"], resource: ["marketsegment"] } },
                default: '',
                description: 'The ID of the market segment'
            },
            {
                displayName: 'id',
                name: 'SettingsMarket_segmentsByIdHead_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsMarket-segmentsByIdHead"], resource: ["marketsegment"] } },
                default: '',
                description: 'The ID of the market segment'
            },
            {
                displayName: 'id',
                name: 'SettingsMarket_segmentsByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsMarket-segmentsByIdPatch"], resource: ["marketsegment"] } },
                default: '',
                description: 'The ID of the market segment to be modified'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsMarket-segmentsByIdPatch"], resource: ["marketsegment"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'id',
                name: 'SettingsMarket_segmentsByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsMarket_segmentsByIdDelete"], resource: ["marketsegment"] } },
                default: '',
                description: 'The ID of the market segment'
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsMarket_segmentsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsMarket-segmentsGet"], resource: ["marketsegment"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return market segments with any of the specified property ids',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return market segments with any of the specified property ids'
                }
                ]
                }]
            },
                {
                displayName: 'pageNumber',
                name: 'pageNumber',
                type: 'number',
                required: false,
                default: 1,
                description: 'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page'
            },
                {
                displayName: 'pageSize',
                name: 'pageSize',
                type: 'number',
                required: false,
                default: 0,
                description: 'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned'
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsMarket-segmentsPost"], resource: ["marketsegment"] } },
                default: `{
  "code": "BUSR",
  "name": "Business Groups",
  "description": "Social groups (Weddings etc.)",
  "propertyIds": [
    "MUC",
    "BER"
  ]
}`,
                description: 'The definition of the market segment.'
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsMarket_segmentsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsMarket-segmentsPost"], resource: ["marketsegment"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsMarket_segments_countGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsMarket-segments$countGet"], resource: ["marketsegment"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'propertyIds',
                name: 'propertyIds',
                type: 'fixedCollection',
                required: false,
                typeOptions: {"multipleValues":true},
                default: `
{}
`,
                description: 'Return market segments with any of the specified property ids',
                options: [{
                    name: 'propertyIdsValues',
                    displayName: 'PropertyIds',
                    values: [
                    {
                    displayName: 'Value',
                    name: 'value',
                    type: 'string',
                    default: '',
                    description: 'Return market segments with any of the specified property ids'
                }
                ]
                }]
            }
            ]
            },
            {
                displayName: 'id',
                name: 'SettingsPropertiesByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsPropertiesByIdGet"], resource: ["propertysettings"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'propertyId',
                name: 'SettingsPropertiesByPropertyIdTime_slice_definitionsByIdGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet"], resource: ["timeslicedefinitions"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'id',
                name: 'SettingsPropertiesByPropertyIdTime_slice_definitionsByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet"], resource: ["timeslicedefinitions"] } },
                default: '',
                description: 'The ID of the time slice definition'
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsPropertiesByPropertyIdTime_slice_definitionsByIdGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet"], resource: ["timeslicedefinitions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored',
                options: [{ name: 'actions', value: 'actions' }]
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'SettingsPropertiesByPropertyIdTime_slice_definitionsByIdPatch_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch"], resource: ["timeslicedefinitions"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'id',
                name: 'SettingsPropertiesByPropertyIdTime_slice_definitionsByIdPatch_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch"], resource: ["timeslicedefinitions"] } },
                default: '',
                description: 'The ID of the time slice definition'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch"], resource: ["timeslicedefinitions"] } },
                default: `
{}
`,
                description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.'
            },
            {
                displayName: 'propertyId',
                name: 'SettingsPropertiesByPropertyIdTime_slice_definitionsByIdDelete_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime_slice_definitionsByIdDelete"], resource: ["timeslicedefinitions"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'id',
                name: 'SettingsPropertiesByPropertyIdTime_slice_definitionsByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime_slice_definitionsByIdDelete"], resource: ["timeslicedefinitions"] } },
                default: '',
                description: 'The ID of the time slice definition'
            },
            {
                displayName: 'propertyId',
                name: 'SettingsPropertiesByPropertyIdTime_slice_definitionsGet_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime-slice-definitionsGet"], resource: ["timeslicedefinitions"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsPropertiesByPropertyIdTime_slice_definitionsGet_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime-slice-definitionsGet"], resource: ["timeslicedefinitions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'expand',
                name: 'expand',
                type: 'multiOptions',
                required: false,
                default: `
[]
`,
                description: 'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored',
                options: [{ name: 'actions', value: 'actions' }]
            }
            ]
            },
            {
                displayName: 'propertyId',
                name: 'SettingsPropertiesByPropertyIdTime_slice_definitionsPost_propertyId',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime-slice-definitionsPost"], resource: ["timeslicedefinitions"] } },
                default: '',
                description: 'The ID of the property'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime-slice-definitionsPost"], resource: ["timeslicedefinitions"] } },
                default: `{
  "name": "Over Night",
  "template": "OverNight",
  "checkInTime": "17:00:00",
  "checkOutTime": "11:00:00"
}`,
                description: 'The payload of the time slice definition.'
            },
            {
                displayName: 'Additional Fields',
                name: 'SettingsPropertiesByPropertyIdTime_slice_definitionsPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["SettingsPropertiesByPropertyIdTime-slice-definitionsPost"], resource: ["timeslicedefinitions"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'Idempotency-Key',
                name: 'Idempotency_Key',
                type: 'string',
                required: false,
                default: '',
                description: `Unique key for safely retrying requests without accidentally performing the same operation twice. 
We'll always send back the same response for requests made with the same key, 
and keys can't be reused with different request parameters. Keys expire after 24 hours`
            }
            ]
            },
            {
                displayName: 'Additional Fields',
                name: 'PingerPost_additionalFields',
                type: 'collection',
                displayOptions: { show: { operation: ["PingerPost"], resource: ["healthcheck"] } },
                default: `
{}
`,
                options: [
                {
                displayName: 'url',
                name: 'url',
                type: 'string',
                required: false,
                default: '',
                description: ''
            }
            ]
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SubscriptionsPost"], resource: ["subscriptions"] } },
                default: `{
  "endpointUrl": "https://example.com",
  "events": [
    "booking/created",
    "booking/changed",
    "reservation/*"
  ],
  "propertyIds": [
    "MUC",
    "BER"
  ]
}`,
                description: 'Subscription details'
            },
            {
                displayName: 'id',
                name: 'SubscriptionsByIdGet_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SubscriptionsByIdGet"], resource: ["subscriptions"] } },
                default: '',
                description: ''
            },
            {
                displayName: 'id',
                name: 'SubscriptionsByIdPut_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SubscriptionsByIdPut"], resource: ["subscriptions"] } },
                default: '',
                description: 'Subscription ID'
            },
            {
                displayName: 'Request Body',
                name: 'body',
                type: 'json',
                required: true,
                displayOptions: { show: { operation: ["SubscriptionsByIdPut"], resource: ["subscriptions"] } },
                default: `{
  "endpointUrl": "https://www.example.com",
  "events": [
    "booking/created",
    "booking/changed",
    "reservation/*"
  ],
  "propertyIds": [
    "MUC",
    "BER"
  ]
}`,
                description: 'Subscription details'
            },
            {
                displayName: 'id',
                name: 'SubscriptionsByIdDelete_id',
                type: 'string',
                required: true,
                displayOptions: { show: { operation: ["SubscriptionsByIdDelete"], resource: ["subscriptions"] } },
                default: '',
                description: `Subscription's ID`
            }
];
