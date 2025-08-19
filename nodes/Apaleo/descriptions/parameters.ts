import { INodeProperties } from 'n8n-workflow';

// This will contain all parameter fields for operations
export const parameterFields: INodeProperties[] = [
	{
		displayName: 'PropertyId',
		name: 'AvailabilityUnitsGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnitsGet'],
			},
		},
		default: '',
		description: 'The property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/units',
				qs: {
					propertyId: '={{$parameter["AvailabilityUnitsGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'AvailabilityUnitsGet_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnitsGet'],
			},
		},
		default: '',
		description: 'The from date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/units',
				qs: {
					from: '={{$parameter["AvailabilityUnitsGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'AvailabilityUnitsGet_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnitsGet'],
			},
		},
		default: '',
		description: 'The to date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/units',
				qs: {
					to: '={{$parameter["AvailabilityUnitsGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'UnitGroupId',
		name: 'AvailabilityUnitsGet_unitGroupId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnitsGet'],
			},
		},
		default: '',
		description: 'The unit group ID',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/units',
				qs: {
					unitGroupId: '={{$parameter["AvailabilityUnitsGet_unitGroupId"]}}',
				},
			},
		},
	},
	{
		displayName: 'IncludeOutOfService',
		name: 'AvailabilityUnitsGet_includeOutOfService',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnitsGet'],
			},
		},
		default: false,
		description: 'Should units that are set OutOfService in the defined time period be returned as available',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/units',
				qs: {
					includeOutOfService: '={{$parameter["AvailabilityUnitsGet_includeOutOfService"]}}',
				},
			},
		},
	},
	{
		displayName: 'UnitCondition',
		name: 'AvailabilityUnitsGet_unitCondition',
		type: 'options',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnitsGet'],
			},
		},
		default: 'Clean',
		description: 'The unit condition',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/units',
				qs: {
					unitCondition: '={{$parameter["AvailabilityUnitsGet_unitCondition"]}}',
				},
			},
		},
		options: [
			{
				name: 'Clean',
				value: 'Clean',
			},
			{
				name: 'CleanToBeInspected',
				value: 'CleanToBeInspected',
			},
			{
				name: 'Dirty',
				value: 'Dirty',
			},
		],
	},
	{
		displayName: 'UnitAttributeIds',
		name: 'AvailabilityUnitsGet_unitAttributeIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnitsGet'],
			},
		},
		default: {},
		description: 'Return units with the specific unit attributes',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/units',
				qs: {
					unitAttributeIds: '={{$parameter["AvailabilityUnitsGet_unitAttributeIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitAttributeIdsValues',
				displayName: 'UnitAttributeIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return units with the specific unit attributes',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'AvailabilityUnitsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnitsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/units',
				qs: {
					pageNumber: '={{$parameter["AvailabilityUnitsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'AvailabilityUnitsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnitsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/units',
				qs: {
					pageSize: '={{$parameter["AvailabilityUnitsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'AvailabilityUnit-groupsGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		default: '',
		description: 'The property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
				qs: {
					propertyId: '={{$parameter["AvailabilityUnit-groupsGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'AvailabilityUnit-groupsGet_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		default: '',
		description:
			'First day of the requested time period. The given day will be included in the response.',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
				qs: {
					from: '={{$parameter["AvailabilityUnit-groupsGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'AvailabilityUnit-groupsGet_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		default: '',
		description:
			'Last day of the requested time period. The given day will be included in the response.',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
				qs: {
					to: '={{$parameter["AvailabilityUnit-groupsGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'TimeSliceTemplate',
		name: 'AvailabilityUnit-groupsGet_timeSliceTemplate',
		type: 'options',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		default: 'DayUse',
		description: "The time slice template, defaults to 'over night'",
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
				qs: {
					timeSliceTemplate: '={{$parameter["AvailabilityUnit-groupsGet_timeSliceTemplate"]}}',
				},
			},
		},
		options: [
			{
				name: 'DayUse',
				value: 'DayUse',
			},
			{
				name: 'OverNight',
				value: 'OverNight',
			},
		],
	},
	{
		displayName: 'UnitGroupTypes',
		name: 'AvailabilityUnit-groupsGet_unitGroupTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		default: {},
		description: 'Filter result by requested unit group types',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
				qs: {
					unitGroupTypes: '={{$parameter["AvailabilityUnit-groupsGet_unitGroupTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupTypesValues',
				displayName: 'UnitGroupTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested unit group types',
					},
				],
			},
		],
	},
	{
		displayName: 'TimeSliceDefinitionIds',
		name: 'AvailabilityUnit-groupsGet_timeSliceDefinitionIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		default: {},
		description: 'The time slice definition IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
				qs: {
					timeSliceDefinitionIds:
						'={{$parameter["AvailabilityUnit-groupsGet_timeSliceDefinitionIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'timeSliceDefinitionIdsValues',
				displayName: 'TimeSliceDefinitionIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The time slice definition IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupIds',
		name: 'AvailabilityUnit-groupsGet_unitGroupIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		default: {},
		description: 'The unit group IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
				qs: {
					unitGroupIds: '={{$parameter["AvailabilityUnit-groupsGet_unitGroupIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupIdsValues',
				displayName: 'UnitGroupIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The unit group IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'Adults',
		name: 'AvailabilityUnit-groupsGet_adults',
		type: 'number',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		default: '',
		description: 'The number of adults you want availability for, defaults to 1',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
				qs: {
					adults: '={{$parameter["AvailabilityUnit-groupsGet_adults"]}}',
				},
			},
		},
	},
	{
		displayName: 'ChildrenAges',
		name: 'AvailabilityUnit-groupsGet_childrenAges',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		default: {},
		description: 'The ages of the children you want availability for',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
				qs: {
					childrenAges: '={{$parameter["AvailabilityUnit-groupsGet_childrenAges"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'childrenAgesValues',
				displayName: 'ChildrenAges',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'number',
						default: '',
						description: 'The ages of the children you want availability for',
					},
				],
			},
		],
	},
	{
		displayName: 'OnlySellable',
		name: 'AvailabilityUnit-groupsGet_onlySellable',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		default: false,
		description: 'When set to \'true\', only the unit groups sold by the specified time slice template and time slice definition IDs are returned, otherwise all unit groups are returned',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
				qs: {
					onlySellable: '={{$parameter["AvailabilityUnit-groupsGet_onlySellable"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'AvailabilityUnit-groupsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
				qs: {
					pageNumber: '={{$parameter["AvailabilityUnit-groupsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'AvailabilityUnit-groupsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
				qs: {
					pageSize: '={{$parameter["AvailabilityUnit-groupsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'AvailabilityUnit-groupsByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsByIdPatch'],
			},
		},
		default: '',
		description: 'ID of the unit group to be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/availability/v1/unit-groups/={{$parameter["AvailabilityUnit-groupsByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'From',
		name: 'AvailabilityUnit-groupsByIdPatch_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsByIdPatch'],
			},
		},
		default: '',
		description: 'First day of the time period from which availability will be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/availability/v1/unit-groups/{id}',
				qs: {
					from: '={{$parameter["AvailabilityUnit-groupsByIdPatch_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'AvailabilityUnit-groupsByIdPatch_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsByIdPatch'],
			},
		},
		default: '',
		description: 'Last day of the time period until which availability will be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/availability/v1/unit-groups/{id}',
				qs: {
					to: '={{$parameter["AvailabilityUnit-groupsByIdPatch_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'TimeSliceTemplate',
		name: 'AvailabilityUnit-groupsByIdPatch_timeSliceTemplate',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsByIdPatch'],
			},
		},
		default: 'DayUse',
		description: 'The time slice template',
		routing: {
			request: {
				method: 'PATCH',
				url: '/availability/v1/unit-groups/{id}',
				qs: {
					timeSliceTemplate:
						'={{$parameter["AvailabilityUnit-groupsByIdPatch_timeSliceTemplate"]}}',
				},
			},
		},
		options: [
			{
				name: 'DayUse',
				value: 'DayUse',
			},
			{
				name: 'OverNight',
				value: 'OverNight',
			},
		],
	},
	{
		displayName: 'Body',
		name: 'AvailabilityUnit-groupsByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/availability/v1/unit-groups/{id}',
				body: '={{JSON.parse($parameter["AvailabilityUnit-groupsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'AvailabilityServicesGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityServicesGet'],
			},
		},
		default: '',
		description: 'The property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/services',
				qs: {
					propertyId: '={{$parameter["AvailabilityServicesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'AvailabilityServicesGet_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityServicesGet'],
			},
		},
		default: '',
		description:
			'First day of the requested time period. The given day will be included in the response.',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/services',
				qs: {
					from: '={{$parameter["AvailabilityServicesGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'AvailabilityServicesGet_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityServicesGet'],
			},
		},
		default: '',
		description:
			'Last day of the requested time period. The given day will be included in the response.',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/services',
				qs: {
					to: '={{$parameter["AvailabilityServicesGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'TimeSliceTemplate',
		name: 'AvailabilityServicesGet_timeSliceTemplate',
		type: 'options',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityServicesGet'],
			},
		},
		default: 'DayUse',
		description: "The time slice template, defaults to 'over night'",
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/services',
				qs: {
					timeSliceTemplate: '={{$parameter["AvailabilityServicesGet_timeSliceTemplate"]}}',
				},
			},
		},
		options: [
			{
				name: 'DayUse',
				value: 'DayUse',
			},
			{
				name: 'OverNight',
				value: 'OverNight',
			},
		],
	},
	{
		displayName: 'TimeSliceDefinitionIds',
		name: 'AvailabilityServicesGet_timeSliceDefinitionIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityServicesGet'],
			},
		},
		default: {},
		description: 'The time slice definition IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/services',
				qs: {
					timeSliceDefinitionIds:
						'={{$parameter["AvailabilityServicesGet_timeSliceDefinitionIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'timeSliceDefinitionIdsValues',
				displayName: 'TimeSliceDefinitionIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The time slice definition IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'ChannelCodes',
		name: 'AvailabilityServicesGet_channelCodes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityServicesGet'],
			},
		},
		default: {},
		description: 'The channel code used to filter the services',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/services',
				qs: {
					channelCodes: '={{$parameter["AvailabilityServicesGet_channelCodes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'channelCodesValues',
				displayName: 'ChannelCodes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The channel code used to filter the services',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'AvailabilityServicesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityServicesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/services',
				qs: {
					pageNumber: '={{$parameter["AvailabilityServicesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'AvailabilityServicesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityServicesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/services',
				qs: {
					pageSize: '={{$parameter["AvailabilityServicesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'AvailabilityReservationsByIdUnitsGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['ReservationAvailability'],
				operation: ['AvailabilityReservationsByIdUnitsGet'],
			},
		},
		default: '',
		description: 'The ID of the reservation',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/reservations/={{$parameter["AvailabilityReservationsByIdUnitsGet_id"]}}/units',
			},
		},
	},
	{
		displayName: 'UnitGroupId',
		name: 'AvailabilityReservationsByIdUnitsGet_unitGroupId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['ReservationAvailability'],
				operation: ['AvailabilityReservationsByIdUnitsGet'],
			},
		},
		default: '',
		description: 'The unit group ID',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/reservations/{id}/units',
				qs: {
					unitGroupId: '={{$parameter["AvailabilityReservationsByIdUnitsGet_unitGroupId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'AvailabilityReservationsByIdUnitsGet_from',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['ReservationAvailability'],
				operation: ['AvailabilityReservationsByIdUnitsGet'],
			},
		},
		default: '',
		description: 'The from date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/reservations/{id}/units',
				qs: {
					from: '={{$parameter["AvailabilityReservationsByIdUnitsGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'AvailabilityReservationsByIdUnitsGet_to',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['ReservationAvailability'],
				operation: ['AvailabilityReservationsByIdUnitsGet'],
			},
		},
		default: '',
		description: 'The to date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/reservations/{id}/units',
				qs: {
					to: '={{$parameter["AvailabilityReservationsByIdUnitsGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'IncludeOutOfService',
		name: 'AvailabilityReservationsByIdUnitsGet_includeOutOfService',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['ReservationAvailability'],
				operation: ['AvailabilityReservationsByIdUnitsGet'],
			},
		},
		default: false,
		description: 'Should units that are set OutOfService in the defined time period be returned as available',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/reservations/{id}/units',
				qs: {
					includeOutOfService:
						'={{$parameter["AvailabilityReservationsByIdUnitsGet_includeOutOfService"]}}',
				},
			},
		},
	},
	{
		displayName: 'UnitCondition',
		name: 'AvailabilityReservationsByIdUnitsGet_unitCondition',
		type: 'options',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['ReservationAvailability'],
				operation: ['AvailabilityReservationsByIdUnitsGet'],
			},
		},
		default: 'Clean',
		description: 'The unit condition',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/reservations/{id}/units',
				qs: {
					unitCondition: '={{$parameter["AvailabilityReservationsByIdUnitsGet_unitCondition"]}}',
				},
			},
		},
		options: [
			{
				name: 'Clean',
				value: 'Clean',
			},
			{
				name: 'CleanToBeInspected',
				value: 'CleanToBeInspected',
			},
			{
				name: 'Dirty',
				value: 'Dirty',
			},
		],
	},
	{
		displayName: 'UnitAttributeIds',
		name: 'AvailabilityReservationsByIdUnitsGet_unitAttributeIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['ReservationAvailability'],
				operation: ['AvailabilityReservationsByIdUnitsGet'],
			},
		},
		default: {},
		description: 'Return units with the specific unit attributes',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/reservations/{id}/units',
				qs: {
					unitAttributeIds:
						'={{$parameter["AvailabilityReservationsByIdUnitsGet_unitAttributeIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitAttributeIdsValues',
				displayName: 'UnitAttributeIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return units with the specific unit attributes',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'AvailabilityReservationsByIdUnitsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['ReservationAvailability'],
				operation: ['AvailabilityReservationsByIdUnitsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/reservations/{id}/units',
				qs: {
					pageNumber: '={{$parameter["AvailabilityReservationsByIdUnitsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'AvailabilityReservationsByIdUnitsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['ReservationAvailability'],
				operation: ['AvailabilityReservationsByIdUnitsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/reservations/{id}/units',
				qs: {
					pageSize: '={{$parameter["AvailabilityReservationsByIdUnitsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingBlocksPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksPost'],
			},
		},
		default:
			'{\n  "groupId": "XPGMSXGF",\n  "ratePlanId": "MUC-NONREF-SGL",\n  "from": "2025-08-24",\n  "to": "2025-08-27",\n  "grossDailyRate": {\n    "amount": 160,\n    "currency": "EUR"\n  },\n  "timeSlices": [\n    {\n      "blockedUnits": 3\n    },\n    {\n      "blockedUnits": 0\n    },\n    {\n      "blockedUnits": 7\n    }\n  ]\n}',
		description: 'The details for the block you want to create',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/blocks',
				body: '={{JSON.parse($parameter["BookingBlocksPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'BookingBlocksPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/blocks',
				headers: {
					'Idempotency-Key': '={{$parameter["BookingBlocksPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'GroupId',
		name: 'BookingBlocksGet_groupId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: '',
		description: 'Return blocks for the specific group',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					groupId: '={{$parameter["BookingBlocksGet_groupId"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyIds',
		name: 'BookingBlocksGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: {},
		description: 'Return blocks filtered by properties',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					propertyIds: '={{$parameter["BookingBlocksGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return blocks filtered by properties',
					},
				],
			},
		],
	},
	{
		displayName: 'Status',
		name: 'BookingBlocksGet_status',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: {},
		description: 'Return blocks filtered by statuses',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					status: '={{$parameter["BookingBlocksGet_status"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'statusValues',
				displayName: 'Status',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return blocks filtered by statuses',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupIds',
		name: 'BookingBlocksGet_unitGroupIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: {},
		description: 'Return blocks with any of the specified unit groups',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					unitGroupIds: '={{$parameter["BookingBlocksGet_unitGroupIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupIdsValues',
				displayName: 'UnitGroupIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return blocks with any of the specified unit groups',
					},
				],
			},
		],
	},
	{
		displayName: 'RatePlanIds',
		name: 'BookingBlocksGet_ratePlanIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: {},
		description: 'Return blocks with any of the specified rate plans',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					ratePlanIds: '={{$parameter["BookingBlocksGet_ratePlanIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'ratePlanIdsValues',
				displayName: 'RatePlanIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return blocks with any of the specified rate plans',
					},
				],
			},
		],
	},
	{
		displayName: 'TimeSliceDefinitionIds',
		name: 'BookingBlocksGet_timeSliceDefinitionIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: {},
		description: 'Return blocks with any of the specified time slice definitions',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					timeSliceDefinitionIds: '={{$parameter["BookingBlocksGet_timeSliceDefinitionIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'timeSliceDefinitionIdsValues',
				displayName: 'TimeSliceDefinitionIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return blocks with any of the specified time slice definitions',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupTypes',
		name: 'BookingBlocksGet_unitGroupTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: {},
		description: 'Return blocks with any of the specified unit group types',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					unitGroupTypes: '={{$parameter["BookingBlocksGet_unitGroupTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupTypesValues',
				displayName: 'UnitGroupTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return blocks with any of the specified unit group types',
					},
				],
			},
		],
	},
	{
		displayName: 'TimeSliceTemplate',
		name: 'BookingBlocksGet_timeSliceTemplate',
		type: 'options',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: 'DayUse',
		description: "The time slice template, defaults to 'over night'",
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					timeSliceTemplate: '={{$parameter["BookingBlocksGet_timeSliceTemplate"]}}',
				},
			},
		},
		options: [
			{
				name: 'DayUse',
				value: 'DayUse',
			},
			{
				name: 'OverNight',
				value: 'OverNight',
			},
		],
	},
	{
		displayName: 'From',
		name: 'BookingBlocksGet_from',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: '',
		description: 'The start of the time range. All blocks that are overlapping with the interval specified by from and to will be returnedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					from: '={{$parameter["BookingBlocksGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'BookingBlocksGet_to',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: '',
		description: 'The end of the time range. All blocks that are overlapping with the interval specified by from and to will be returnedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					to: '={{$parameter["BookingBlocksGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'BookingBlocksGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					pageNumber: '={{$parameter["BookingBlocksGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'BookingBlocksGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					pageSize: '={{$parameter["BookingBlocksGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'BookingBlocksGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
				qs: {
					expand: '={{$parameter["BookingBlocksGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'GroupId',
		name: 'BookingBlocks$countGet_groupId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocks$countGet'],
			},
		},
		default: '',
		description: 'Return blocks for the specific group',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/$count',
				qs: {
					groupId: '={{$parameter["BookingBlocks$countGet_groupId"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyIds',
		name: 'BookingBlocks$countGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocks$countGet'],
			},
		},
		default: {},
		description: 'Return blocks filtered by properties',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/$count',
				qs: {
					propertyIds: '={{$parameter["BookingBlocks$countGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return blocks filtered by properties',
					},
				],
			},
		],
	},
	{
		displayName: 'Status',
		name: 'BookingBlocks$countGet_status',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocks$countGet'],
			},
		},
		default: {},
		description: 'Return blocks filtered by statuses',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/$count',
				qs: {
					status: '={{$parameter["BookingBlocks$countGet_status"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'statusValues',
				displayName: 'Status',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return blocks filtered by statuses',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupIds',
		name: 'BookingBlocks$countGet_unitGroupIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocks$countGet'],
			},
		},
		default: {},
		description: 'Return blocks with any of the specified unit groups',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/$count',
				qs: {
					unitGroupIds: '={{$parameter["BookingBlocks$countGet_unitGroupIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupIdsValues',
				displayName: 'UnitGroupIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return blocks with any of the specified unit groups',
					},
				],
			},
		],
	},
	{
		displayName: 'RatePlanIds',
		name: 'BookingBlocks$countGet_ratePlanIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocks$countGet'],
			},
		},
		default: {},
		description: 'Return blocks with any of the specified rate plans',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/$count',
				qs: {
					ratePlanIds: '={{$parameter["BookingBlocks$countGet_ratePlanIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'ratePlanIdsValues',
				displayName: 'RatePlanIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return blocks with any of the specified rate plans',
					},
				],
			},
		],
	},
	{
		displayName: 'TimeSliceDefinitionIds',
		name: 'BookingBlocks$countGet_timeSliceDefinitionIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocks$countGet'],
			},
		},
		default: {},
		description: 'Return blocks with any of the specified time slice definitions',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/$count',
				qs: {
					timeSliceDefinitionIds:
						'={{$parameter["BookingBlocks$countGet_timeSliceDefinitionIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'timeSliceDefinitionIdsValues',
				displayName: 'TimeSliceDefinitionIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return blocks with any of the specified time slice definitions',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupTypes',
		name: 'BookingBlocks$countGet_unitGroupTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocks$countGet'],
			},
		},
		default: {},
		description: 'Return blocks with any of the specified unit group types',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/$count',
				qs: {
					unitGroupTypes: '={{$parameter["BookingBlocks$countGet_unitGroupTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupTypesValues',
				displayName: 'UnitGroupTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return blocks with any of the specified unit group types',
					},
				],
			},
		],
	},
	{
		displayName: 'TimeSliceTemplate',
		name: 'BookingBlocks$countGet_timeSliceTemplate',
		type: 'options',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocks$countGet'],
			},
		},
		default: 'DayUse',
		description: "The time slice template, defaults to 'over night'",
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/$count',
				qs: {
					timeSliceTemplate: '={{$parameter["BookingBlocks$countGet_timeSliceTemplate"]}}',
				},
			},
		},
		options: [
			{
				name: 'DayUse',
				value: 'DayUse',
			},
			{
				name: 'OverNight',
				value: 'OverNight',
			},
		],
	},
	{
		displayName: 'From',
		name: 'BookingBlocks$countGet_from',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocks$countGet'],
			},
		},
		default: '',
		description: 'The start of the time range. All blocks that are overlapping with the interval specified by from and to will be returnedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/$count',
				qs: {
					from: '={{$parameter["BookingBlocks$countGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'BookingBlocks$countGet_to',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocks$countGet'],
			},
		},
		default: '',
		description: 'The end of the time range. All blocks that are overlapping with the interval specified by from and to will be returnedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/$count',
				qs: {
					to: '={{$parameter["BookingBlocks$countGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingBlocksByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksByIdGet'],
			},
		},
		default: '',
		description: 'ID of the block to be retrieved',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/={{$parameter["BookingBlocksByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'BookingBlocksByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/{id}',
				qs: {
					expand: '={{$parameter["BookingBlocksByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'BookingBlock-actionsByIdConfirmPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['BlockActions'],
				operation: ['BookingBlock-actionsByIdConfirmPut'],
			},
		},
		default: '',
		description: 'ID of the block that should be processed',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/block-actions/={{$parameter["BookingBlock-actionsByIdConfirmPut_id"]}}/confirm',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingBlock-actionsByIdReleasePut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['BlockActions'],
				operation: ['BookingBlock-actionsByIdReleasePut'],
			},
		},
		default: '',
		description: 'ID of the block that should be processed',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/block-actions/={{$parameter["BookingBlock-actionsByIdReleasePut_id"]}}/release',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingBlock-actionsByIdCancelPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['BlockActions'],
				operation: ['BookingBlock-actionsByIdCancelPut'],
			},
		},
		default: '',
		description: 'ID of the block that should be processed',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/block-actions/={{$parameter["BookingBlock-actionsByIdCancelPut_id"]}}/cancel',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingBlock-actionsByIdWashPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['BlockActions'],
				operation: ['BookingBlock-actionsByIdWashPut'],
			},
		},
		default: '',
		description: 'ID of the block that should be processed',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/block-actions/={{$parameter["BookingBlock-actionsByIdWashPut_id"]}}/wash',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingBlock-actionsByIdAmendPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['BlockActions'],
				operation: ['BookingBlock-actionsByIdAmendPut'],
			},
		},
		default: '',
		description: 'ID of the block to be modified',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/block-actions/={{$parameter["BookingBlock-actionsByIdAmendPut_id"]}}/amend',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingBlock-actionsByIdAmendPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['BlockActions'],
				operation: ['BookingBlock-actionsByIdAmendPut'],
			},
		},
		default:
			'{\n  "from": "2025-08-24",\n  "to": "2025-08-27",\n  "grossDailyRate": {\n    "amount": 160,\n    "currency": "EUR"\n  },\n  "timeSlices": [\n    {\n      "blockedUnits": 3\n    },\n    {\n      "blockedUnits": 0\n    },\n    {\n      "blockedUnits": 7\n    }\n  ]\n}',
		description: 'The definition of the block',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/block-actions/{id}/amend',
				body: '={{JSON.parse($parameter["BookingBlock-actionsByIdAmendPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingBookingsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsPost'],
			},
		},
		default:
			'{\n  "paymentAccount": {\n    "accountNumber": "1111",\n    "accountHolder": "John Doe",\n    "expiryMonth": "8",\n    "expiryYear": "2018",\n    "paymentMethod": "visa",\n    "payerEmail": "s.hopper@test.com",\n    "payerReference": "4ea6462b-cca3-4c17-a035-c7b5132db83c",\n    "isVirtual": false\n  },\n  "booker": {\n    "title": "Mr",\n    "gender": "Male",\n    "firstName": "Jon",\n    "middleInitial": "D",\n    "lastName": "Doe",\n    "email": "john.d@doe.com",\n    "phone": "+4989123343",\n    "address": {\n      "addressLine1": "My Street 1",\n      "postalCode": "12453",\n      "city": "MyCity",\n      "countryCode": "GB"\n    }\n  },\n  "reservations": [\n    {\n      "arrival": "2025-08-21",\n      "departure": "2025-08-23",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "guestComment": "I need a wake up service",\n      "channelCode": "Direct",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Jon",\n        "middleInitial": "D",\n        "lastName": "Doe",\n        "email": "john.d@doe.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "Prepayment",\n      "travelPurpose": "Business",\n      "timeSlices": [\n        {\n          "ratePlanId": "MUC-NONREF-FAMILY"\n        },\n        {\n          "ratePlanId": "MUC-NONREF-FAMILY"\n        }\n      ],\n      "services": [\n        {\n          "serviceId": "MUC-BRKF"\n        },\n        {\n          "serviceId": "MUC-YOGA",\n          "dates": [\n            {\n              "serviceDate": "2025-08-22",\n              "amount": {\n                "amount": 35,\n                "currency": "EUR"\n              }\n            }\n          ]\n        }\n      ],\n      "prePaymentAmount": {\n        "amount": 50,\n        "currency": "EUR"\n      }\n    },\n    {\n      "arrival": "2025-08-22",\n      "departure": "2025-08-24",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "channelCode": "Direct",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Eric",\n        "middleInitial": "E",\n        "lastName": "Steinmetz",\n        "email": "eric.e@steinmetz.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "CreditCard",\n      "timeSlices": [\n        {\n          "ratePlanId": "BER-FLEX-DBL",\n          "totalAmount": {\n            "amount": 120,\n            "currency": "EUR"\n          }\n        },\n        {\n          "ratePlanId": "BER-FLEX-DBL",\n          "totalAmount": {\n            "amount": 125,\n            "currency": "EUR"\n          }\n        }\n      ],\n      "companyId": "BER-UMBRELLA",\n      "commission": {\n        "commissionAmount": {\n          "amount": 20,\n          "currency": "EUR"\n        },\n        "beforeCommissionAmount": {\n          "amount": 100,\n          "currency": "EUR"\n        }\n      }\n    }\n  ],\n  "transactionReference": "564578124534890J"\n}',
		description: 'The list of reservations you want to create',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings',
				body: '={{JSON.parse($parameter["BookingBookingsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'BookingBookingsPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings',
				headers: {
					'Idempotency-Key': '={{$parameter["BookingBookingsPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'ReservationId',
		name: 'BookingBookingsGet_reservationId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsGet'],
			},
		},
		default: '',
		description: 'Filter result by reservation ID. The result set will contain all bookings having reservations with the specified ID.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/bookings',
				qs: {
					reservationId: '={{$parameter["BookingBookingsGet_reservationId"]}}',
				},
			},
		},
	},
	{
		displayName: 'GroupId',
		name: 'BookingBookingsGet_groupId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsGet'],
			},
		},
		default: '',
		description: 'Filter result by group ID. The result set will contain all bookings having groups with the specified ID.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/bookings',
				qs: {
					groupId: '={{$parameter["BookingBookingsGet_groupId"]}}',
				},
			},
		},
	},
	{
		displayName: 'ChannelCode',
		name: 'BookingBookingsGet_channelCode',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsGet'],
			},
		},
		default: {},
		description: 'Filter result by the channel code. The resul set will contain all bookings having reservations with the specified channel code.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/bookings',
				qs: {
					channelCode: '={{$parameter["BookingBookingsGet_channelCode"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'channelCodeValues',
				displayName: 'ChannelCode',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by the channel code. The resul set will contain all bookings having reservations with the specified channel code.',
					},
				],
			},
		],
	},
	{
		displayName: 'ExternalCode',
		name: 'BookingBookingsGet_externalCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsGet'],
			},
		},
		default: '',
		description: 'Filter result by the external code. The result set will contain all bookings having reservations with external code starting with provided value.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/bookings',
				qs: {
					externalCode: '={{$parameter["BookingBookingsGet_externalCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'TextSearch',
		name: 'BookingBookingsGet_textSearch',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsGet'],
			},
		},
		default: '',
		description: 'This will filter all bookings for the provided free text. Currently it only looks up if either the lastname, firstname, email or company name of the booker contains one of the provided values.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/bookings',
				qs: {
					textSearch: '={{$parameter["BookingBookingsGet_textSearch"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'BookingBookingsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/bookings',
				qs: {
					pageNumber: '={{$parameter["BookingBookingsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'BookingBookingsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/bookings',
				qs: {
					pageSize: '={{$parameter["BookingBookingsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'BookingBookingsGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/bookings',
				qs: {
					expand: '={{$parameter["BookingBookingsGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'Body',
		name: 'BookingBookings$forcePost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookings$forcePost'],
			},
		},
		default:
			'{\n  "paymentAccount": {\n    "accountNumber": "1111",\n    "accountHolder": "John Doe",\n    "expiryMonth": "8",\n    "expiryYear": "2018",\n    "paymentMethod": "visa",\n    "payerEmail": "s.hopper@test.com",\n    "payerReference": "4ea6462b-cca3-4c17-a035-c7b5132db83c",\n    "isVirtual": false\n  },\n  "booker": {\n    "title": "Mr",\n    "gender": "Male",\n    "firstName": "Jon",\n    "middleInitial": "D",\n    "lastName": "Doe",\n    "email": "john.d@doe.com",\n    "phone": "+4989123343",\n    "address": {\n      "addressLine1": "My Street 1",\n      "postalCode": "12453",\n      "city": "MyCity",\n      "countryCode": "GB"\n    }\n  },\n  "reservations": [\n    {\n      "arrival": "2025-08-21",\n      "departure": "2025-08-23",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "guestComment": "I need a wake up service",\n      "channelCode": "Direct",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Jon",\n        "middleInitial": "D",\n        "lastName": "Doe",\n        "email": "john.d@doe.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "Prepayment",\n      "travelPurpose": "Business",\n      "timeSlices": [\n        {\n          "ratePlanId": "MUC-NONREF-FAMILY"\n        },\n        {\n          "ratePlanId": "MUC-NONREF-FAMILY"\n        }\n      ],\n      "services": [\n        {\n          "serviceId": "MUC-BRKF"\n        },\n        {\n          "serviceId": "MUC-YOGA",\n          "dates": [\n            {\n              "serviceDate": "2025-08-22",\n              "amount": {\n                "amount": 35,\n                "currency": "EUR"\n              }\n            }\n          ]\n        }\n      ],\n      "prePaymentAmount": {\n        "amount": 50,\n        "currency": "EUR"\n      }\n    },\n    {\n      "arrival": "2025-08-22",\n      "departure": "2025-08-24",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "channelCode": "Direct",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Eric",\n        "middleInitial": "E",\n        "lastName": "Steinmetz",\n        "email": "eric.e@steinmetz.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "CreditCard",\n      "timeSlices": [\n        {\n          "ratePlanId": "BER-FLEX-DBL",\n          "totalAmount": {\n            "amount": 120,\n            "currency": "EUR"\n          }\n        },\n        {\n          "ratePlanId": "BER-FLEX-DBL",\n          "totalAmount": {\n            "amount": 125,\n            "currency": "EUR"\n          }\n        }\n      ],\n      "companyId": "BER-UMBRELLA",\n      "commission": {\n        "commissionAmount": {\n          "amount": 20,\n          "currency": "EUR"\n        },\n        "beforeCommissionAmount": {\n          "amount": 100,\n          "currency": "EUR"\n        }\n      }\n    }\n  ],\n  "transactionReference": "564578124534890J"\n}',
		description: 'The list of reservations you want to create',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings/$force',
				body: '={{JSON.parse($parameter["BookingBookings$forcePost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'BookingBookings$forcePost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookings$forcePost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings/$force',
				headers: {
					'Idempotency-Key': '={{$parameter["BookingBookings$forcePost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingBookingsByIdReservationsPost_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdReservationsPost'],
			},
		},
		default: '',
		description: 'ID of the booking the reservations should be attached to',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings/={{$parameter["BookingBookingsByIdReservationsPost_id"]}}/reservations',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingBookingsByIdReservationsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdReservationsPost'],
			},
		},
		default:
			'{\n  "reservations": [\n    {\n      "arrival": "2025-08-21",\n      "departure": "2025-08-23",\n      "adults": 1,\n      "comment": "I need a wake up service",\n      "externalCode": "812864414|381",\n      "channelCode": "BookingCom",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Jon",\n        "middleInitial": "D",\n        "lastName": "Doe",\n        "email": "john.d@doe.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "Prepayment",\n      "timeSlices": [\n        {\n          "ratePlanId": "MUC-NONREF-DBL"\n        },\n        {\n          "ratePlanId": "MUC-NONREF-DBL"\n        }\n      ],\n      "services": [\n        {\n          "serviceId": "MUC-BRKF"\n        },\n        {\n          "serviceId": "MUC-YOGA",\n          "dates": [\n            {\n              "serviceDate": "2025-08-22",\n              "amount": {\n                "amount": 35,\n                "currency": "EUR"\n              }\n            }\n          ]\n        }\n      ],\n      "companyId": "UMBRELLA",\n      "corporateCode": "UMBRELLA-MUC_NONREF_DBL"\n    },\n    {\n      "arrival": "2025-08-22",\n      "departure": "2025-08-24",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "channelCode": "Direct",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Eric",\n        "middleInitial": "E",\n        "lastName": "Steinmetz",\n        "email": "eric.e@steinmetz.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "CreditCard",\n      "timeSlices": [\n        {\n          "ratePlanId": "BER-FLEX-DBL"\n        },\n        {\n          "ratePlanId": "BER-FLEX-DBL"\n        }\n      ],\n      "commission": {\n        "commissionAmount": {\n          "amount": 20,\n          "currency": "EUR"\n        },\n        "beforeCommissionAmount": {\n          "amount": 100,\n          "currency": "EUR"\n        }\n      }\n    }\n  ],\n  "transactionReference": "RFEUFHEW"\n}',
		description: 'The list of reservations you want to add',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings/{id}/reservations',
				body: '={{JSON.parse($parameter["BookingBookingsByIdReservationsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'BookingBookingsByIdReservationsPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdReservationsPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings/{id}/reservations',
				headers: {
					'Idempotency-Key':
						'={{$parameter["BookingBookingsByIdReservationsPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingBookingsByIdReservations$forcePost_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdReservations$forcePost'],
			},
		},
		default: '',
		description: 'ID of the booking the reservations should be attached to',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings/={{$parameter["BookingBookingsByIdReservations$forcePost_id"]}}/reservations/$force',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingBookingsByIdReservations$forcePost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdReservations$forcePost'],
			},
		},
		default:
			'{\n  "reservations": [\n    {\n      "arrival": "2025-08-21",\n      "departure": "2025-08-23",\n      "adults": 1,\n      "comment": "I need a wake up service",\n      "externalCode": "812864414|381",\n      "channelCode": "BookingCom",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Jon",\n        "middleInitial": "D",\n        "lastName": "Doe",\n        "email": "john.d@doe.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "Prepayment",\n      "timeSlices": [\n        {\n          "ratePlanId": "MUC-NONREF-DBL"\n        },\n        {\n          "ratePlanId": "MUC-NONREF-DBL"\n        }\n      ],\n      "services": [\n        {\n          "serviceId": "MUC-BRKF"\n        },\n        {\n          "serviceId": "MUC-YOGA",\n          "dates": [\n            {\n              "serviceDate": "2025-08-22",\n              "amount": {\n                "amount": 35,\n                "currency": "EUR"\n              }\n            }\n          ]\n        }\n      ],\n      "companyId": "UMBRELLA",\n      "corporateCode": "UMBRELLA-MUC_NONREF_DBL"\n    },\n    {\n      "arrival": "2025-08-22",\n      "departure": "2025-08-24",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "channelCode": "Direct",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Eric",\n        "middleInitial": "E",\n        "lastName": "Steinmetz",\n        "email": "eric.e@steinmetz.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "CreditCard",\n      "timeSlices": [\n        {\n          "ratePlanId": "BER-FLEX-DBL"\n        },\n        {\n          "ratePlanId": "BER-FLEX-DBL"\n        }\n      ],\n      "commission": {\n        "commissionAmount": {\n          "amount": 20,\n          "currency": "EUR"\n        },\n        "beforeCommissionAmount": {\n          "amount": 100,\n          "currency": "EUR"\n        }\n      }\n    }\n  ],\n  "transactionReference": "RFEUFHEW"\n}',
		description: 'The list of reservations you want to add',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings/{id}/reservations/$force',
				body: '={{JSON.parse($parameter["BookingBookingsByIdReservations$forcePost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'BookingBookingsByIdReservations$forcePost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdReservations$forcePost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings/{id}/reservations/$force',
				headers: {
					'Idempotency-Key':
						'={{$parameter["BookingBookingsByIdReservations$forcePost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingBookingsByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdGet'],
			},
		},
		default: '',
		description: 'ID of the booking to be retrieved',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/bookings/={{$parameter["BookingBookingsByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'BookingBookingsByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations, propertyValues. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/bookings/{id}',
				qs: {
					expand: '={{$parameter["BookingBookingsByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations, propertyValues. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'BookingBookingsByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdPatch'],
			},
		},
		default: '',
		description: 'ID of the booking to be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/booking/v1/bookings/={{$parameter["BookingBookingsByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingBookingsByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/booking/v1/bookings/{id}',
				body: '={{JSON.parse($parameter["BookingBookingsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingGroupsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsPost'],
			},
		},
		default:
			'{\n  "name": "apaleo Summer Festival 2026",\n  "booker": {\n    "title": "Mr",\n    "gender": "Male",\n    "firstName": "Jon",\n    "middleInitial": "D",\n    "lastName": "Doe",\n    "email": "john.d@doe.com",\n    "phone": "+4989123343",\n    "address": {\n      "addressLine1": "My Street 1",\n      "postalCode": "12453",\n      "city": "MyCity",\n      "countryCode": "GB"\n    }\n  },\n  "paymentAccount": {\n    "accountNumber": "1111",\n    "accountHolder": "John Doe",\n    "expiryMonth": "8",\n    "expiryYear": "2018",\n    "paymentMethod": "visa",\n    "payerEmail": "s.hopper@test.com",\n    "payerReference": "4ea6462b-cca3-4c17-a035-c7b5132db83c",\n    "isVirtual": false\n  },\n  "propertyIds": [\n    "MUC"\n  ]\n}',
		description: 'The details of the group that should be created',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/groups',
				body: '={{JSON.parse($parameter["BookingGroupsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'BookingGroupsPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/groups',
				headers: {
					'Idempotency-Key': '={{$parameter["BookingGroupsPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'TextSearch',
		name: 'BookingGroupsGet_textSearch',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsGet'],
			},
		},
		default: '',
		description: 'This will filter all group bookings for the provided free text. Currently it only looks up if either the group name, lastname, firstname, email or company name of the booker contains one of the provided values.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/groups',
				qs: {
					textSearch: '={{$parameter["BookingGroupsGet_textSearch"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyIds',
		name: 'BookingGroupsGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsGet'],
			},
		},
		default: {},
		description: 'Filter result by requested properties',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/groups',
				qs: {
					propertyIds: '={{$parameter["BookingGroupsGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested properties',
					},
				],
			},
		],
	},
	{
		displayName: 'From',
		name: 'BookingGroupsGet_from',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsGet'],
			},
		},
		default: '',
		description: 'The start of the time range. All groups that have blocks overlapping with the interval specified by from and to will be returnedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/groups',
				qs: {
					from: '={{$parameter["BookingGroupsGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'BookingGroupsGet_to',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsGet'],
			},
		},
		default: '',
		description: 'The end of the time range. All groups that have blocks overlapping with the interval specified by from and to will be returnedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/groups',
				qs: {
					to: '={{$parameter["BookingGroupsGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'BookingGroupsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/groups',
				qs: {
					pageNumber: '={{$parameter["BookingGroupsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'BookingGroupsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/groups',
				qs: {
					pageSize: '={{$parameter["BookingGroupsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'BookingGroupsGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/groups',
				qs: {
					expand: '={{$parameter["BookingGroupsGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'BookingGroupsByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsByIdGet'],
			},
		},
		default: '',
		description: 'ID of the group booking to be retrieved',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/groups/={{$parameter["BookingGroupsByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'BookingGroupsByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/groups/{id}',
				qs: {
					expand: '={{$parameter["BookingGroupsByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'BookingGroupsByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsByIdPatch'],
			},
		},
		default: '',
		description: 'ID of the group booking to be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/booking/v1/groups/={{$parameter["BookingGroupsByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingGroupsByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/booking/v1/groups/{id}',
				body: '={{JSON.parse($parameter["BookingGroupsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingGroupsByIdReservationsPost_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsByIdReservationsPost'],
			},
		},
		default: '',
		description: 'ID of the group booking the reservations should be attached to',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/groups/={{$parameter["BookingGroupsByIdReservationsPost_id"]}}/reservations',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingGroupsByIdReservationsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsByIdReservationsPost'],
			},
		},
		default:
			'{\n  "reservations": [\n    {\n      "blockId": "MUC-QJNXJR",\n      "arrival": "2025-08-21",\n      "departure": "2025-08-23",\n      "adults": 1,\n      "comment": "I need a wake up service",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Jon",\n        "middleInitial": "D",\n        "lastName": "Doe",\n        "email": "john.d@doe.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "company": {\n          "name": "Company GmbH",\n          "taxId": "1442"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      }\n    },\n    {\n      "blockId": "MUC-WKMCKT",\n      "arrival": "2025-08-22",\n      "departure": "2025-08-24",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Eric",\n        "middleInitial": "E",\n        "lastName": "Steinmetz",\n        "email": "eric.e@steinmetz.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      }\n    }\n  ]\n}',
		description: 'The list of reservations you want to create',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/groups/{id}/reservations',
				body: '={{JSON.parse($parameter["BookingGroupsByIdReservationsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'BookingGroupsByIdReservationsPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsByIdReservationsPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/groups/{id}/reservations',
				headers: {
					'Idempotency-Key': '={{$parameter["BookingGroupsByIdReservationsPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'BookingOffersGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: '',
		description: 'The property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					propertyId: '={{$parameter["BookingOffersGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Arrival',
		name: 'BookingOffersGet_arrival',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: '',
		description: 'Date and optional time of arrivalSpecify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					arrival: '={{$parameter["BookingOffersGet_arrival"]}}',
				},
			},
		},
	},
	{
		displayName: 'Departure',
		name: 'BookingOffersGet_departure',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: '',
		description: 'Date and optional time of departure. Cannot be more than 5 years after arrival.Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					departure: '={{$parameter["BookingOffersGet_departure"]}}',
				},
			},
		},
	},
	{
		displayName: 'Adults',
		name: 'BookingOffersGet_adults',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: '',
		description: 'The number of adults you want offers for',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					adults: '={{$parameter["BookingOffersGet_adults"]}}',
				},
			},
		},
	},
	{
		displayName: 'TimeSliceTemplate',
		name: 'BookingOffersGet_timeSliceTemplate',
		type: 'options',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: 'DayUse',
		description: "The time slice template used to filter the rate plans, defaults to 'over night'",
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					timeSliceTemplate: '={{$parameter["BookingOffersGet_timeSliceTemplate"]}}',
				},
			},
		},
		options: [
			{
				name: 'DayUse',
				value: 'DayUse',
			},
			{
				name: 'OverNight',
				value: 'OverNight',
			},
		],
	},
	{
		displayName: 'TimeSliceDefinitionIds',
		name: 'BookingOffersGet_timeSliceDefinitionIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: {},
		description: 'Time slice definition IDs, used to filter rate plans',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					timeSliceDefinitionIds: '={{$parameter["BookingOffersGet_timeSliceDefinitionIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'timeSliceDefinitionIdsValues',
				displayName: 'TimeSliceDefinitionIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Time slice definition IDs, used to filter rate plans',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupIds',
		name: 'BookingOffersGet_unitGroupIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: {},
		description: 'Unit group IDs, used to filter rate plans',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					unitGroupIds: '={{$parameter["BookingOffersGet_unitGroupIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupIdsValues',
				displayName: 'UnitGroupIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Unit group IDs, used to filter rate plans',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupTypes',
		name: 'BookingOffersGet_unitGroupTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: {},
		description: 'Unit group types, used to filter rate plans',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					unitGroupTypes: '={{$parameter["BookingOffersGet_unitGroupTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupTypesValues',
				displayName: 'UnitGroupTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Unit group types, used to filter rate plans',
					},
				],
			},
		],
	},
	{
		displayName: 'ChannelCode',
		name: 'BookingOffersGet_channelCode',
		type: 'options',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: 'AltoVita',
		description: 'Channel code, used to filter the rate plans',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					channelCode: '={{$parameter["BookingOffersGet_channelCode"]}}',
				},
			},
		},
		options: [
			{
				name: 'AltoVita',
				value: 'AltoVita',
			},
			{
				name: 'BookingCom',
				value: 'BookingCom',
			},
			{
				name: 'ChannelManager',
				value: 'ChannelManager',
			},
			{
				name: 'DesVu',
				value: 'DesVu',
			},
			{
				name: 'Direct',
				value: 'Direct',
			},
			{
				name: 'Expedia',
				value: 'Expedia',
			},
			{
				name: 'Homelike',
				value: 'Homelike',
			},
			{
				name: 'Hrs',
				value: 'Hrs',
			},
			{
				name: 'Ibe',
				value: 'Ibe',
			},
		],
	},
	{
		displayName: 'PromoCode',
		name: 'BookingOffersGet_promoCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: '',
		description: 'The promo code associated with a certain special offer',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					promoCode: '={{$parameter["BookingOffersGet_promoCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'CorporateCode',
		name: 'BookingOffersGet_corporateCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: '',
		description: 'The code associated with a corporate rate',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					corporateCode: '={{$parameter["BookingOffersGet_corporateCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'ChildrenAges',
		name: 'BookingOffersGet_childrenAges',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: {},
		description: 'The ages of the children you want offers for',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					childrenAges: '={{$parameter["BookingOffersGet_childrenAges"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'childrenAgesValues',
				displayName: 'ChildrenAges',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'number',
						default: '',
						description: 'The ages of the children you want offers for',
					},
				],
			},
		],
	},
	{
		displayName: 'IncludeUnavailable',
		name: 'BookingOffersGet_includeUnavailable',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		default: false,
		description: 'Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
				qs: {
					includeUnavailable: '={{$parameter["BookingOffersGet_includeUnavailable"]}}',
				},
			},
		},
	},
	{
		displayName: 'RatePlanId',
		name: 'BookingRate-plan-offersGet_ratePlanId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingRate-plan-offersGet'],
			},
		},
		default: '',
		description: 'The rate plan ID',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/rate-plan-offers',
				qs: {
					ratePlanId: '={{$parameter["BookingRate-plan-offersGet_ratePlanId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Arrival',
		name: 'BookingRate-plan-offersGet_arrival',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingRate-plan-offersGet'],
			},
		},
		default: '',
		description: 'Date and optional time of arrivalSpecify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/rate-plan-offers',
				qs: {
					arrival: '={{$parameter["BookingRate-plan-offersGet_arrival"]}}',
				},
			},
		},
	},
	{
		displayName: 'Departure',
		name: 'BookingRate-plan-offersGet_departure',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingRate-plan-offersGet'],
			},
		},
		default: '',
		description: 'Date and optional time of departure. Cannot be more than 5 years after arrival.Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/rate-plan-offers',
				qs: {
					departure: '={{$parameter["BookingRate-plan-offersGet_departure"]}}',
				},
			},
		},
	},
	{
		displayName: 'Adults',
		name: 'BookingRate-plan-offersGet_adults',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingRate-plan-offersGet'],
			},
		},
		default: '',
		description: 'The number of adults you want offers for',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/rate-plan-offers',
				qs: {
					adults: '={{$parameter["BookingRate-plan-offersGet_adults"]}}',
				},
			},
		},
	},
	{
		displayName: 'ChannelCode',
		name: 'BookingRate-plan-offersGet_channelCode',
		type: 'options',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingRate-plan-offersGet'],
			},
		},
		default: 'AltoVita',
		description: 'The channel code',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/rate-plan-offers',
				qs: {
					channelCode: '={{$parameter["BookingRate-plan-offersGet_channelCode"]}}',
				},
			},
		},
		options: [
			{
				name: 'AltoVita',
				value: 'AltoVita',
			},
			{
				name: 'BookingCom',
				value: 'BookingCom',
			},
			{
				name: 'ChannelManager',
				value: 'ChannelManager',
			},
			{
				name: 'DesVu',
				value: 'DesVu',
			},
			{
				name: 'Direct',
				value: 'Direct',
			},
			{
				name: 'Expedia',
				value: 'Expedia',
			},
			{
				name: 'Homelike',
				value: 'Homelike',
			},
			{
				name: 'Hrs',
				value: 'Hrs',
			},
			{
				name: 'Ibe',
				value: 'Ibe',
			},
		],
	},
	{
		displayName: 'ChildrenAges',
		name: 'BookingRate-plan-offersGet_childrenAges',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingRate-plan-offersGet'],
			},
		},
		default: {},
		description: 'The ages of the children you want offers for',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/rate-plan-offers',
				qs: {
					childrenAges: '={{$parameter["BookingRate-plan-offersGet_childrenAges"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'childrenAgesValues',
				displayName: 'ChildrenAges',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'number',
						default: '',
						description: 'The ages of the children you want offers for',
					},
				],
			},
		],
	},
	{
		displayName: 'IncludeUnavailable',
		name: 'BookingRate-plan-offersGet_includeUnavailable',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingRate-plan-offersGet'],
			},
		},
		default: false,
		description: 'Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/rate-plan-offers',
				qs: {
					includeUnavailable: '={{$parameter["BookingRate-plan-offersGet_includeUnavailable"]}}',
				},
			},
		},
	},
	{
		displayName: 'OverridePrices',
		name: 'BookingRate-plan-offersGet_overridePrices',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingRate-plan-offersGet'],
			},
		},
		default: {},
		description: 'Desired prices for each timeslice',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/rate-plan-offers',
				qs: {
					overridePrices: '={{$parameter["BookingRate-plan-offersGet_overridePrices"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'overridePricesValues',
				displayName: 'OverridePrices',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'number',
						default: '',
						description: 'Desired prices for each timeslice',
					},
				],
			},
		],
	},
	{
		displayName: 'RatePlanId',
		name: 'BookingService-offersGet_ratePlanId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingService-offersGet'],
			},
		},
		default: '',
		description: 'The rate plan ID',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/service-offers',
				qs: {
					ratePlanId: '={{$parameter["BookingService-offersGet_ratePlanId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Arrival',
		name: 'BookingService-offersGet_arrival',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingService-offersGet'],
			},
		},
		default: '',
		description: 'Date and optional time of arrivalSpecify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/service-offers',
				qs: {
					arrival: '={{$parameter["BookingService-offersGet_arrival"]}}',
				},
			},
		},
	},
	{
		displayName: 'Departure',
		name: 'BookingService-offersGet_departure',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingService-offersGet'],
			},
		},
		default: '',
		description: 'Date and optional time of departure. Cannot be more than 5 years after arrival.Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/service-offers',
				qs: {
					departure: '={{$parameter["BookingService-offersGet_departure"]}}',
				},
			},
		},
	},
	{
		displayName: 'Adults',
		name: 'BookingService-offersGet_adults',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingService-offersGet'],
			},
		},
		default: '',
		description: 'The number of adults you want offers for',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/service-offers',
				qs: {
					adults: '={{$parameter["BookingService-offersGet_adults"]}}',
				},
			},
		},
	},
	{
		displayName: 'ChannelCode',
		name: 'BookingService-offersGet_channelCode',
		type: 'options',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingService-offersGet'],
			},
		},
		default: 'AltoVita',
		description: 'The channel code used to filter the services',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/service-offers',
				qs: {
					channelCode: '={{$parameter["BookingService-offersGet_channelCode"]}}',
				},
			},
		},
		options: [
			{
				name: 'AltoVita',
				value: 'AltoVita',
			},
			{
				name: 'BookingCom',
				value: 'BookingCom',
			},
			{
				name: 'ChannelManager',
				value: 'ChannelManager',
			},
			{
				name: 'DesVu',
				value: 'DesVu',
			},
			{
				name: 'Direct',
				value: 'Direct',
			},
			{
				name: 'Expedia',
				value: 'Expedia',
			},
			{
				name: 'Homelike',
				value: 'Homelike',
			},
			{
				name: 'Hrs',
				value: 'Hrs',
			},
			{
				name: 'Ibe',
				value: 'Ibe',
			},
		],
	},
	{
		displayName: 'ChildrenAges',
		name: 'BookingService-offersGet_childrenAges',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingService-offersGet'],
			},
		},
		default: {},
		description: 'The ages of the children you want offers for',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/service-offers',
				qs: {
					childrenAges: '={{$parameter["BookingService-offersGet_childrenAges"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'childrenAgesValues',
				displayName: 'ChildrenAges',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'number',
						default: '',
						description: 'The ages of the children you want offers for',
					},
				],
			},
		],
	},
	{
		displayName: 'OnlyDefaultDates',
		name: 'BookingService-offersGet_onlyDefaultDates',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingService-offersGet'],
			},
		},
		default: false,
		description: 'Depending on the postNextDay setting of a service it will be posted before or after midnight. Breakfast is usually delivered on the next morning, having \'postNextDay\' set to true. Its \'default dates\' are from the day after arrival until the departure day. For services like dinner \'postNextDay\' is false, and default dates are day of arrival until one day before departure. With this query parameter set to \'false\', you can also ask for dates outside of those default dates. It defaults to true.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/service-offers',
				qs: {
					onlyDefaultDates: '={{$parameter["BookingService-offersGet_onlyDefaultDates"]}}',
				},
			},
		},
	},
	{
		displayName: 'IncludeUnavailable',
		name: 'BookingService-offersGet_includeUnavailable',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingService-offersGet'],
			},
		},
		default: false,
		description: 'Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/service-offers',
				qs: {
					includeUnavailable: '={{$parameter["BookingService-offersGet_includeUnavailable"]}}',
				},
			},
		},
	},
	{
		displayName: 'RatePlanId',
		name: 'BookingOffer-indexGet_ratePlanId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffer-indexGet'],
			},
		},
		default: '',
		description: 'The ratePlanId parameter',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offer-index',
				qs: {
					ratePlanId: '={{$parameter["BookingOffer-indexGet_ratePlanId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'BookingOffer-indexGet_from',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffer-indexGet'],
			},
		},
		default: '',
		description: 'Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offer-index',
				qs: {
					from: '={{$parameter["BookingOffer-indexGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'BookingOffer-indexGet_to',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffer-indexGet'],
			},
		},
		default: '',
		description: 'Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offer-index',
				qs: {
					to: '={{$parameter["BookingOffer-indexGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'ChannelCode',
		name: 'BookingOffer-indexGet_channelCode',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffer-indexGet'],
			},
		},
		default: 'AltoVita',
		description: 'The channelCode parameter',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offer-index',
				qs: {
					channelCode: '={{$parameter["BookingOffer-indexGet_channelCode"]}}',
				},
			},
		},
		options: [
			{
				name: 'AltoVita',
				value: 'AltoVita',
			},
			{
				name: 'BookingCom',
				value: 'BookingCom',
			},
			{
				name: 'ChannelManager',
				value: 'ChannelManager',
			},
			{
				name: 'DesVu',
				value: 'DesVu',
			},
			{
				name: 'Direct',
				value: 'Direct',
			},
			{
				name: 'Expedia',
				value: 'Expedia',
			},
			{
				name: 'Homelike',
				value: 'Homelike',
			},
			{
				name: 'Hrs',
				value: 'Hrs',
			},
			{
				name: 'Ibe',
				value: 'Ibe',
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'BookingOffer-indexGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffer-indexGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offer-index',
				qs: {
					pageNumber: '={{$parameter["BookingOffer-indexGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'BookingOffer-indexGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffer-indexGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offer-index',
				qs: {
					pageSize: '={{$parameter["BookingOffer-indexGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'BookingId',
		name: 'BookingReservationsGet_bookingId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: '',
		description: 'Filter result by booking ID',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					bookingId: '={{$parameter["BookingReservationsGet_bookingId"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyIds',
		name: 'BookingReservationsGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'Filter result by requested properties',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					propertyIds: '={{$parameter["BookingReservationsGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested properties',
					},
				],
			},
		],
	},
	{
		displayName: 'RatePlanIds',
		name: 'BookingReservationsGet_ratePlanIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'Filter result by requested rate plans',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					ratePlanIds: '={{$parameter["BookingReservationsGet_ratePlanIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'ratePlanIdsValues',
				displayName: 'RatePlanIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested rate plans',
					},
				],
			},
		],
	},
	{
		displayName: 'CompanyIds',
		name: 'BookingReservationsGet_companyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'Filter result by requested companies',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					companyIds: '={{$parameter["BookingReservationsGet_companyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'companyIdsValues',
				displayName: 'CompanyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested companies',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitIds',
		name: 'BookingReservationsGet_unitIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'Filter result by assigned units',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					unitIds: '={{$parameter["BookingReservationsGet_unitIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitIdsValues',
				displayName: 'UnitIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by assigned units',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupIds',
		name: 'BookingReservationsGet_unitGroupIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'Filter result by requested unit groups',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					unitGroupIds: '={{$parameter["BookingReservationsGet_unitGroupIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupIdsValues',
				displayName: 'UnitGroupIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested unit groups',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupTypes',
		name: 'BookingReservationsGet_unitGroupTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'Filter result by requested unit group types',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					unitGroupTypes: '={{$parameter["BookingReservationsGet_unitGroupTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupTypesValues',
				displayName: 'UnitGroupTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested unit group types',
					},
				],
			},
		],
	},
	{
		displayName: 'BlockIds',
		name: 'BookingReservationsGet_blockIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'Filter result by requested blocks',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					blockIds: '={{$parameter["BookingReservationsGet_blockIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'blockIdsValues',
				displayName: 'BlockIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested blocks',
					},
				],
			},
		],
	},
	{
		displayName: 'MarketSegmentIds',
		name: 'BookingReservationsGet_marketSegmentIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'Filter result by requested market segments',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					marketSegmentIds: '={{$parameter["BookingReservationsGet_marketSegmentIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'marketSegmentIdsValues',
				displayName: 'MarketSegmentIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested market segments',
					},
				],
			},
		],
	},
	{
		displayName: 'Status',
		name: 'BookingReservationsGet_status',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'Filter result by reservation status',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					status: '={{$parameter["BookingReservationsGet_status"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'statusValues',
				displayName: 'Status',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by reservation status',
					},
				],
			},
		],
	},
	{
		displayName: 'DateFilter',
		name: 'BookingReservationsGet_dateFilter',
		type: 'options',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: 'Arrival',
		description: 'Filter by date and time attributes of reservation. Use in combination with the \'To\' and \'From\' attributes. All filters will check if the date specified by the filter type is between from (included) and to (excluded). The exception being filtering for \'stay\', which will return all reservations that are overlapping with the interval specified by from and to.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					dateFilter: '={{$parameter["BookingReservationsGet_dateFilter"]}}',
				},
			},
		},
		options: [
			{
				name: 'Arrival',
				value: 'Arrival',
			},
			{
				name: 'ArrivalAndCheckIn',
				value: 'ArrivalAndCheckIn',
			},
			{
				name: 'Cancellation',
				value: 'Cancellation',
			},
			{
				name: 'Creation',
				value: 'Creation',
			},
			{
				name: 'Departure',
				value: 'Departure',
			},
			{
				name: 'DepartureAndCheckOut',
				value: 'DepartureAndCheckOut',
			},
			{
				name: 'Modification',
				value: 'Modification',
			},
			{
				name: 'Stay',
				value: 'Stay',
			},
		],
	},
	{
		displayName: 'From',
		name: 'BookingReservationsGet_from',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: '',
		description: 'The start of the time interval. When filtering by date, at least one of \'from\' and \'to\' has to be specifiedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					from: '={{$parameter["BookingReservationsGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'BookingReservationsGet_to',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: '',
		description: 'The end of the time interval, must be larger than \'from\'. When filtering by date, at least one of \'from\' and \'to\' has to be specifiedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					to: '={{$parameter["BookingReservationsGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'ChannelCode',
		name: 'BookingReservationsGet_channelCode',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'Filter result by the channel code',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					channelCode: '={{$parameter["BookingReservationsGet_channelCode"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'channelCodeValues',
				displayName: 'ChannelCode',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by the channel code',
					},
				],
			},
		],
	},
	{
		displayName: 'Sources',
		name: 'BookingReservationsGet_sources',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'Filter result by source',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					sources: '={{$parameter["BookingReservationsGet_sources"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'sourcesValues',
				displayName: 'Sources',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by source',
					},
				],
			},
		],
	},
	{
		displayName: 'ValidationMessageCategory',
		name: 'BookingReservationsGet_validationMessageCategory',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'Filter result by validation message category',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					validationMessageCategory:
						'={{$parameter["BookingReservationsGet_validationMessageCategory"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'validationMessageCategoryValues',
				displayName: 'ValidationMessageCategory',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by validation message category',
					},
				],
			},
		],
	},
	{
		displayName: 'ExternalCode',
		name: 'BookingReservationsGet_externalCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: '',
		description: 'Filter result by the external code. The result set will contain all reservations that have an external code starting with the provided value.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					externalCode: '={{$parameter["BookingReservationsGet_externalCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'TextSearch',
		name: 'BookingReservationsGet_textSearch',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: '',
		description: 'This will filter all reservations where the provided text is contained in: booker first name or last name or email or company name, primary guest first name or last name or email or company name, external code, reservation ID, unit name. The search is case insensitive.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					textSearch: '={{$parameter["BookingReservationsGet_textSearch"]}}',
				},
			},
		},
	},
	{
		displayName: 'BalanceFilter',
		name: 'BookingReservationsGet_balanceFilter',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description: 'This will filter reservations based on their balance.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					balanceFilter: '={{$parameter["BookingReservationsGet_balanceFilter"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'balanceFilterValues',
				displayName: 'BalanceFilter',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'This will filter reservations based on their balance.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
					},
				],
			},
		],
	},
	{
		displayName: 'AllFoliosHaveInvoice',
		name: 'BookingReservationsGet_allFoliosHaveInvoice',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: false,
		description: 'If set to `true`, returns only reservations, in which all folios are closed and have an invoice. If set to `false`, returns only reservations, in which some of the folios are open or don\'t have an invoice.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					allFoliosHaveInvoice: '={{$parameter["BookingReservationsGet_allFoliosHaveInvoice"]}}',
				},
			},
		},
	},
	{
		displayName: 'IsPreCheckedIn',
		name: 'BookingReservationsGet_isPreCheckedIn',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: false,
		description: 'If set to `true`, returns only the reservations marked as pre-checked-in. If set to `false`, returns only the reservations not marked as pre-checked-in.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					isPreCheckedIn: '={{$parameter["BookingReservationsGet_isPreCheckedIn"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'BookingReservationsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					pageNumber: '={{$parameter["BookingReservationsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'BookingReservationsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					pageSize: '={{$parameter["BookingReservationsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Sort',
		name: 'BookingReservationsGet_sort',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description:
			'List of all fields that can be used to sort the results. Possible values are: arrival:asc, arrival:desc, departure:asc, departure:desc, created:asc, created:desc, updated:asc, updated:desc, balance:asc, balance:desc, ID:asc, ID:desc, firstname:asc, firstname:desc, lastname:asc, lastname:desc, unitname:asc, unitname:desc. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					sort: '={{$parameter["BookingReservationsGet_sort"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'sortValues',
				displayName: 'Sort',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all fields that can be used to sort the results. Possible values are: arrival:asc, arrival:desc, departure:asc, departure:desc, created:asc, created:desc, updated:asc, updated:desc, balance:asc, balance:desc, ID:asc, ID:desc, firstname:asc, firstname:desc, lastname:asc, lastname:desc, unitname:asc, unitname:desc. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'Expand',
		name: 'BookingReservationsGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: booker, actions, timeSlices, services, assignedUnits, company. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
				qs: {
					expand: '={{$parameter["BookingReservationsGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: booker, actions, timeSlices, services, assignedUnits, company. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'BookingId',
		name: 'BookingReservations$countGet_bookingId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: '',
		description: 'Filter result by booking ID',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					bookingId: '={{$parameter["BookingReservations$countGet_bookingId"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyIds',
		name: 'BookingReservations$countGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'Filter result by requested properties',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					propertyIds: '={{$parameter["BookingReservations$countGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested properties',
					},
				],
			},
		],
	},
	{
		displayName: 'RatePlanIds',
		name: 'BookingReservations$countGet_ratePlanIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'Filter result by requested rate plans',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					ratePlanIds: '={{$parameter["BookingReservations$countGet_ratePlanIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'ratePlanIdsValues',
				displayName: 'RatePlanIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested rate plans',
					},
				],
			},
		],
	},
	{
		displayName: 'CompanyIds',
		name: 'BookingReservations$countGet_companyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'Filter result by requested companies',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					companyIds: '={{$parameter["BookingReservations$countGet_companyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'companyIdsValues',
				displayName: 'CompanyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested companies',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitIds',
		name: 'BookingReservations$countGet_unitIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'Filter result by assigned units',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					unitIds: '={{$parameter["BookingReservations$countGet_unitIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitIdsValues',
				displayName: 'UnitIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by assigned units',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupIds',
		name: 'BookingReservations$countGet_unitGroupIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'Filter result by requested unit groups',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					unitGroupIds: '={{$parameter["BookingReservations$countGet_unitGroupIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupIdsValues',
				displayName: 'UnitGroupIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested unit groups',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupTypes',
		name: 'BookingReservations$countGet_unitGroupTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'Filter result by requested unit group types',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					unitGroupTypes: '={{$parameter["BookingReservations$countGet_unitGroupTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupTypesValues',
				displayName: 'UnitGroupTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested unit group types',
					},
				],
			},
		],
	},
	{
		displayName: 'BlockIds',
		name: 'BookingReservations$countGet_blockIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'Filter result by requested blocks',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					blockIds: '={{$parameter["BookingReservations$countGet_blockIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'blockIdsValues',
				displayName: 'BlockIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested blocks',
					},
				],
			},
		],
	},
	{
		displayName: 'MarketSegmentIds',
		name: 'BookingReservations$countGet_marketSegmentIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'Filter result by requested market segments',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					marketSegmentIds: '={{$parameter["BookingReservations$countGet_marketSegmentIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'marketSegmentIdsValues',
				displayName: 'MarketSegmentIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by requested market segments',
					},
				],
			},
		],
	},
	{
		displayName: 'Status',
		name: 'BookingReservations$countGet_status',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'Filter result by reservation status',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					status: '={{$parameter["BookingReservations$countGet_status"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'statusValues',
				displayName: 'Status',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by reservation status',
					},
				],
			},
		],
	},
	{
		displayName: 'DateFilter',
		name: 'BookingReservations$countGet_dateFilter',
		type: 'options',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: 'Arrival',
		description: 'Filter by date and time attributes of reservation. Use in combination with the \'To\' and \'From\' attributes. All filters will check if the date specified by the filter type is between from (included) and to (excluded). The exception being filtering for \'stay\', which will return all reservations that are overlapping with the interval specified by from and to.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					dateFilter: '={{$parameter["BookingReservations$countGet_dateFilter"]}}',
				},
			},
		},
		options: [
			{
				name: 'Arrival',
				value: 'Arrival',
			},
			{
				name: 'ArrivalAndCheckIn',
				value: 'ArrivalAndCheckIn',
			},
			{
				name: 'Cancellation',
				value: 'Cancellation',
			},
			{
				name: 'Creation',
				value: 'Creation',
			},
			{
				name: 'Departure',
				value: 'Departure',
			},
			{
				name: 'DepartureAndCheckOut',
				value: 'DepartureAndCheckOut',
			},
			{
				name: 'Modification',
				value: 'Modification',
			},
			{
				name: 'Stay',
				value: 'Stay',
			},
		],
	},
	{
		displayName: 'From',
		name: 'BookingReservations$countGet_from',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: '',
		description: 'The start of the time interval. When filtering by date, at least one of \'from\' and \'to\' has to be specifiedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					from: '={{$parameter["BookingReservations$countGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'BookingReservations$countGet_to',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: '',
		description: 'The end of the time interval, must be larger than \'from\'. When filtering by date, at least one of \'from\' and \'to\' has to be specifiedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					to: '={{$parameter["BookingReservations$countGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'ChannelCode',
		name: 'BookingReservations$countGet_channelCode',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'Filter result by the channel code',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					channelCode: '={{$parameter["BookingReservations$countGet_channelCode"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'channelCodeValues',
				displayName: 'ChannelCode',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by the channel code',
					},
				],
			},
		],
	},
	{
		displayName: 'Sources',
		name: 'BookingReservations$countGet_sources',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'Filter result by source',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					sources: '={{$parameter["BookingReservations$countGet_sources"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'sourcesValues',
				displayName: 'Sources',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by source',
					},
				],
			},
		],
	},
	{
		displayName: 'ValidationMessageCategory',
		name: 'BookingReservations$countGet_validationMessageCategory',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'Filter result by validation message category',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					validationMessageCategory:
						'={{$parameter["BookingReservations$countGet_validationMessageCategory"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'validationMessageCategoryValues',
				displayName: 'ValidationMessageCategory',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by validation message category',
					},
				],
			},
		],
	},
	{
		displayName: 'ExternalCode',
		name: 'BookingReservations$countGet_externalCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: '',
		description: 'Filter result by the external code. The result set will contain all reservations that have an external code starting with the provided value.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					externalCode: '={{$parameter["BookingReservations$countGet_externalCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'TextSearch',
		name: 'BookingReservations$countGet_textSearch',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: '',
		description: 'This will filter all reservations where the provided text is contained in: booker first name or last name or email or company name, primary guest first name or last name or email or company name, external code, reservation ID, unit name. The search is case insensitive.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					textSearch: '={{$parameter["BookingReservations$countGet_textSearch"]}}',
				},
			},
		},
	},
	{
		displayName: 'BalanceFilter',
		name: 'BookingReservations$countGet_balanceFilter',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: {},
		description: 'This will filter reservations based on their balance.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					balanceFilter: '={{$parameter["BookingReservations$countGet_balanceFilter"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'balanceFilterValues',
				displayName: 'BalanceFilter',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'This will filter reservations based on their balance.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
					},
				],
			},
		],
	},
	{
		displayName: 'AllFoliosHaveInvoice',
		name: 'BookingReservations$countGet_allFoliosHaveInvoice',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: false,
		description: 'If set to `true`, returns only reservations, in which all folios are closed and have an invoice. If set to `false`, returns only reservations, in which some of the folios are open or don\'t have an invoice.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					allFoliosHaveInvoice:
						'={{$parameter["BookingReservations$countGet_allFoliosHaveInvoice"]}}',
				},
			},
		},
	},
	{
		displayName: 'IsPreCheckedIn',
		name: 'BookingReservations$countGet_isPreCheckedIn',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		default: false,
		description: 'If set to `true`, returns only the reservations marked as pre-checked-in. If set to `false`, returns only the reservations not marked as pre-checked-in.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
				qs: {
					isPreCheckedIn: '={{$parameter["BookingReservations$countGet_isPreCheckedIn"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservationsByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdGet'],
			},
		},
		default: '',
		description: 'ID of the reservation to be retrieved',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/={{$parameter["BookingReservationsByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'BookingReservationsByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: timeSlices, services, booker, actions, company, assignedUnits. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}',
				qs: {
					expand: '={{$parameter["BookingReservationsByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: timeSlices, services, booker, actions, company, assignedUnits. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'BookingReservationsByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdPatch'],
			},
		},
		default: '',
		description: 'ID of the reservation to be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/booking/v1/reservations/={{$parameter["BookingReservationsByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingReservationsByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/booking/v1/reservations/{id}',
				body: '={{JSON.parse($parameter["BookingReservationsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservationsByIdOffersGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdOffersGet'],
			},
		},
		default: '',
		description: 'ID of the reservation to be amended',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/={{$parameter["BookingReservationsByIdOffersGet_id"]}}/offers',
			},
		},
	},
	{
		displayName: 'Arrival',
		name: 'BookingReservationsByIdOffersGet_arrival',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdOffersGet'],
			},
		},
		default: '',
		description: 'Date and optional time of arrivalSpecify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/offers',
				qs: {
					arrival: '={{$parameter["BookingReservationsByIdOffersGet_arrival"]}}',
				},
			},
		},
	},
	{
		displayName: 'Departure',
		name: 'BookingReservationsByIdOffersGet_departure',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdOffersGet'],
			},
		},
		default: '',
		description: 'Date and optional time of departure. Cannot be more than 5 years after arrival.Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/offers',
				qs: {
					departure: '={{$parameter["BookingReservationsByIdOffersGet_departure"]}}',
				},
			},
		},
	},
	{
		displayName: 'Adults',
		name: 'BookingReservationsByIdOffersGet_adults',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdOffersGet'],
			},
		},
		default: '',
		description: 'Number of adults',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/offers',
				qs: {
					adults: '={{$parameter["BookingReservationsByIdOffersGet_adults"]}}',
				},
			},
		},
	},
	{
		displayName: 'ChildrenAges',
		name: 'BookingReservationsByIdOffersGet_childrenAges',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdOffersGet'],
			},
		},
		default: {},
		description: 'Ages of children',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/offers',
				qs: {
					childrenAges: '={{$parameter["BookingReservationsByIdOffersGet_childrenAges"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'childrenAgesValues',
				displayName: 'ChildrenAges',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'number',
						default: '',
						description: 'Ages of children',
					},
				],
			},
		],
	},
	{
		displayName: 'ChannelCode',
		name: 'BookingReservationsByIdOffersGet_channelCode',
		type: 'options',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdOffersGet'],
			},
		},
		default: 'AltoVita',
		description: 'The channel code used to filter the rate plans',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/offers',
				qs: {
					channelCode: '={{$parameter["BookingReservationsByIdOffersGet_channelCode"]}}',
				},
			},
		},
		options: [
			{
				name: 'AltoVita',
				value: 'AltoVita',
			},
			{
				name: 'BookingCom',
				value: 'BookingCom',
			},
			{
				name: 'ChannelManager',
				value: 'ChannelManager',
			},
			{
				name: 'DesVu',
				value: 'DesVu',
			},
			{
				name: 'Direct',
				value: 'Direct',
			},
			{
				name: 'Expedia',
				value: 'Expedia',
			},
			{
				name: 'Homelike',
				value: 'Homelike',
			},
			{
				name: 'Hrs',
				value: 'Hrs',
			},
			{
				name: 'Ibe',
				value: 'Ibe',
			},
		],
	},
	{
		displayName: 'PromoCode',
		name: 'BookingReservationsByIdOffersGet_promoCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdOffersGet'],
			},
		},
		default: '',
		description: 'The promo code associated with a certain special offer, like corporate rate',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/offers',
				qs: {
					promoCode: '={{$parameter["BookingReservationsByIdOffersGet_promoCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'Requote',
		name: 'BookingReservationsByIdOffersGet_requote',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdOffersGet'],
			},
		},
		default: false,
		description: 'Whether the offers should be re-quoted based on current prices, or only additions like change of number of adults should be calculated. Defaults to \'false\'.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/offers',
				qs: {
					requote: '={{$parameter["BookingReservationsByIdOffersGet_requote"]}}',
				},
			},
		},
	},
	{
		displayName: 'IncludeUnavailable',
		name: 'BookingReservationsByIdOffersGet_includeUnavailable',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdOffersGet'],
			},
		},
		default: false,
		description: 'Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/offers',
				qs: {
					includeUnavailable:
						'={{$parameter["BookingReservationsByIdOffersGet_includeUnavailable"]}}',
				},
			},
		},
	},
	{
		displayName: 'UnitGroupIds',
		name: 'BookingReservationsByIdOffersGet_unitGroupIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdOffersGet'],
			},
		},
		default: {},
		description: 'The list of unit groups used to filter the offers',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/offers',
				qs: {
					unitGroupIds: '={{$parameter["BookingReservationsByIdOffersGet_unitGroupIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupIdsValues',
				displayName: 'UnitGroupIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The list of unit groups used to filter the offers',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'BookingReservationsByIdService-offersGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdService-offersGet'],
			},
		},
		default: '',
		description: 'ID of the reservation',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/={{$parameter["BookingReservationsByIdService-offersGet_id"]}}/service-offers',
			},
		},
	},
	{
		displayName: 'ChannelCode',
		name: 'BookingReservationsByIdService-offersGet_channelCode',
		type: 'options',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdService-offersGet'],
			},
		},
		default: 'AltoVita',
		description: 'The channel code used to filter the services',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/service-offers',
				qs: {
					channelCode: '={{$parameter["BookingReservationsByIdService-offersGet_channelCode"]}}',
				},
			},
		},
		options: [
			{
				name: 'AltoVita',
				value: 'AltoVita',
			},
			{
				name: 'BookingCom',
				value: 'BookingCom',
			},
			{
				name: 'ChannelManager',
				value: 'ChannelManager',
			},
			{
				name: 'DesVu',
				value: 'DesVu',
			},
			{
				name: 'Direct',
				value: 'Direct',
			},
			{
				name: 'Expedia',
				value: 'Expedia',
			},
			{
				name: 'Homelike',
				value: 'Homelike',
			},
			{
				name: 'Hrs',
				value: 'Hrs',
			},
			{
				name: 'Ibe',
				value: 'Ibe',
			},
		],
	},
	{
		displayName: 'OnlyDefaultDates',
		name: 'BookingReservationsByIdService-offersGet_onlyDefaultDates',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdService-offersGet'],
			},
		},
		default: false,
		description: 'Depending on the postNextDay setting of a service it will by default be posted before or after midnight. Breakfast is usually delivered on the next morning, so all the dates from the day after arrival to the departure day are default dates and will have this flag set to true. For services like a dinner it is the other way around. With this query parameter, you can also ask for the dates, that usually the service will not be booked. It defaults to true.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/service-offers',
				qs: {
					onlyDefaultDates:
						'={{$parameter["BookingReservationsByIdService-offersGet_onlyDefaultDates"]}}',
				},
			},
		},
	},
	{
		displayName: 'IncludeUnavailable',
		name: 'BookingReservationsByIdService-offersGet_includeUnavailable',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdService-offersGet'],
			},
		},
		default: false,
		description: 'Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/service-offers',
				qs: {
					includeUnavailable:
						'={{$parameter["BookingReservationsByIdService-offersGet_includeUnavailable"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservationsByIdServicesGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdServicesGet'],
			},
		},
		default: '',
		description: 'ID of the reservation',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/={{$parameter["BookingReservationsByIdServicesGet_id"]}}/services',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservationsByIdServicesDelete_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdServicesDelete'],
			},
		},
		default: '',
		description: 'ID of the reservation',
		routing: {
			request: {
				method: 'DELETE',
				url: '/booking/v1/reservations/={{$parameter["BookingReservationsByIdServicesDelete_id"]}}/services',
			},
		},
	},
	{
		displayName: 'ServiceId',
		name: 'BookingReservationsByIdServicesDelete_serviceId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdServicesDelete'],
			},
		},
		default: '',
		description: 'The ID of the service to delete',
		routing: {
			request: {
				method: 'DELETE',
				url: '/booking/v1/reservations/{id}/services',
				qs: {
					serviceId: '={{$parameter["BookingReservationsByIdServicesDelete_serviceId"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdAssign-unitPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAssign-unitPut'],
			},
		},
		default: '',
		description: 'ID of the reservation a unit should be assigned to',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdAssign-unitPut_id"]}}/assign-unit',
			},
		},
	},
	{
		displayName: 'UnitConditions',
		name: 'BookingReservation-actionsByIdAssign-unitPut_unitConditions',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAssign-unitPut'],
			},
		},
		default: {},
		description: 'The optional unit conditions for unit that you want to auto assign for',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/assign-unit',
				qs: {
					unitConditions:
						'={{$parameter["BookingReservation-actionsByIdAssign-unitPut_unitConditions"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitConditionsValues',
				displayName: 'UnitConditions',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The optional unit conditions for unit that you want to auto assign for',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdAssign-unitByUnitIdPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAssign-unitByUnitIdPut'],
			},
		},
		default: '',
		description: 'ID of the reservation the unit should be assigned to',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdAssign-unitByUnitIdPut_id"]}}/assign-unit/{unitId}',
			},
		},
	},
	{
		displayName: 'UnitId',
		name: 'BookingReservation-actionsByIdAssign-unitByUnitIdPut_unitId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAssign-unitByUnitIdPut'],
			},
		},
		default: '',
		description: 'The ID of the unit to be assigned',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/assign-unit/={{$parameter["BookingReservation-actionsByIdAssign-unitByUnitIdPut_unitId"]}}',
			},
		},
	},
	{
		displayName: 'From',
		name: 'BookingReservation-actionsByIdAssign-unitByUnitIdPut_from',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAssign-unitByUnitIdPut'],
			},
		},
		default: '',
		description: 'The start date and optional time for the unit assignment. If not specified, the reservation\'s arrival will be used.Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/assign-unit/{unitId}',
				qs: {
					from: '={{$parameter["BookingReservation-actionsByIdAssign-unitByUnitIdPut_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'BookingReservation-actionsByIdAssign-unitByUnitIdPut_to',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAssign-unitByUnitIdPut'],
			},
		},
		default: '',
		description: 'The end date and optional time for the unit assignment. If not specified, the reservation\'s departure will be used.Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/assign-unit/{unitId}',
				qs: {
					to: '={{$parameter["BookingReservation-actionsByIdAssign-unitByUnitIdPut_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdUnassign-unitsPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdUnassign-unitsPut'],
			},
		},
		default: '',
		description: 'ID of the reservation the unit should be unassigned for',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdUnassign-unitsPut_id"]}}/unassign-units',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdCheckinPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdCheckinPut'],
			},
		},
		default: '',
		description: 'ID of the reservation that should be processed',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdCheckinPut_id"]}}/checkin',
			},
		},
	},
	{
		displayName: 'WithCityTax',
		name: 'BookingReservation-actionsByIdCheckinPut_withCityTax',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdCheckinPut'],
			},
		},
		default: false,
		description:
			'Define if city tax should be added for this reservation or not. The default is "true".',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/checkin',
				qs: {
					withCityTax: '={{$parameter["BookingReservation-actionsByIdCheckinPut_withCityTax"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdRevert-checkinPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdRevert-checkinPut'],
			},
		},
		default: '',
		description: 'The ID of the reservation to reverse the check-in for',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdRevert-checkinPut_id"]}}/revert-checkin',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdCheckoutPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdCheckoutPut'],
			},
		},
		default: '',
		description: 'ID of the reservation that should be processed',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdCheckoutPut_id"]}}/checkout',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdCancelPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdCancelPut'],
			},
		},
		default: '',
		description: 'ID of the reservation that should be processed',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdCancelPut_id"]}}/cancel',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdNoshowPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdNoshowPut'],
			},
		},
		default: '',
		description: 'ID of the reservation that should be processed',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdNoshowPut_id"]}}/noshow',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdAmendPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAmendPut'],
			},
		},
		default: '',
		description: 'ID of the reservation that should be modified',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdAmendPut_id"]}}/amend',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingReservation-actionsByIdAmendPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAmendPut'],
			},
		},
		default:
			'{\n  "arrival": "2025-08-21T17:00:00+02:00",\n  "departure": "2025-08-23T11:00:00+02:00",\n  "adults": 1,\n  "childrenAges": [\n    6\n  ],\n  "requote": false,\n  "timeSlices": [\n    {\n      "ratePlanId": "MUC-NONREF-DBL",\n      "totalGrossAmount": {\n        "amount": 86,\n        "currency": "EUR"\n      }\n    },\n    {\n      "ratePlanId": "MUC-NONREF-DBL",\n      "totalGrossAmount": {\n        "amount": 101,\n        "currency": "EUR"\n      }\n    }\n  ]\n}',
		description: 'The new stay details that should be applied to the reservation',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/amend',
				body: '={{JSON.parse($parameter["BookingReservation-actionsByIdAmendPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdAmend$forcePut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAmend$forcePut'],
			},
		},
		default: '',
		description: 'ID of the reservation that should be modified',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdAmend$forcePut_id"]}}/amend/$force',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingReservation-actionsByIdAmend$forcePut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAmend$forcePut'],
			},
		},
		default:
			'{\n  "arrival": "2025-08-21T17:00:00+02:00",\n  "departure": "2025-08-23T11:00:00+02:00",\n  "adults": 1,\n  "childrenAges": [\n    6\n  ],\n  "requote": false,\n  "timeSlices": [\n    {\n      "ratePlanId": "MUC-NONREF-DBL",\n      "totalGrossAmount": {\n        "amount": 86,\n        "currency": "EUR"\n      }\n    },\n    {\n      "ratePlanId": "MUC-NONREF-DBL",\n      "totalGrossAmount": {\n        "amount": 101,\n        "currency": "EUR"\n      }\n    }\n  ]\n}',
		description: 'The new stay details that should be applied to the reservation',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/amend/$force',
				body: '={{JSON.parse($parameter["BookingReservation-actionsByIdAmend$forcePut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdBook-servicePut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdBook-servicePut'],
			},
		},
		default: '',
		description: 'ID of the reservation',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdBook-servicePut_id"]}}/book-service',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingReservation-actionsByIdBook-servicePut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdBook-servicePut'],
			},
		},
		default:
			'{\n  "serviceId": "MUC-SPA",\n  "dates": [\n    {\n      "serviceDate": "2025-08-19",\n      "amount": {\n        "amount": 25,\n        "currency": "EUR"\n      }\n    },\n    {\n      "serviceDate": "2025-08-20"\n    }\n  ]\n}',
		description: 'Request body (JSON format). See API documentation for the expected schema.',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/book-service',
				body: '={{JSON.parse($parameter["BookingReservation-actionsByIdBook-servicePut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdBook-service$forcePut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdBook-service$forcePut'],
			},
		},
		default: '',
		description: 'ID of the reservation',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdBook-service$forcePut_id"]}}/book-service/$force',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'BookingReservation-actionsByIdBook-service$forcePut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdBook-service$forcePut'],
			},
		},
		default:
			'{\n  "serviceId": "MUC-SPA",\n  "dates": [\n    {\n      "serviceDate": "2025-08-19",\n      "amount": {\n        "amount": 25,\n        "currency": "EUR"\n      }\n    },\n    {\n      "serviceDate": "2025-08-20"\n    }\n  ]\n}',
		description: 'Request body (JSON format). See API documentation for the expected schema.',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/book-service/$force',
				body: '={{JSON.parse($parameter["BookingReservation-actionsByIdBook-service$forcePut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdRemove-city-taxPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdRemove-city-taxPut'],
			},
		},
		default: '',
		description: 'ID of the reservation',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdRemove-city-taxPut_id"]}}/remove-city-tax',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'BookingReservation-actionsByIdAdd-city-taxPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAdd-city-taxPut'],
			},
		},
		default: '',
		description: 'ID of the reservation',
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/={{$parameter["BookingReservation-actionsByIdAdd-city-taxPut_id"]}}/add-city-tax',
			},
		},
	},
	{
		displayName: 'Type',
		name: 'BookingTypesByTypeAllowed-valuesGet_type',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Types'],
				operation: ['BookingTypesByTypeAllowed-valuesGet'],
			},
		},
		default: 'Gender',
		description: 'The type to provide allowed values for',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/types/={{$parameter["BookingTypesByTypeAllowed-valuesGet_type"]}}/allowed-values',
			},
		},
		options: [
			{
				name: 'Gender',
				value: 'Gender',
			},
			{
				name: 'IdentificationType',
				value: 'IdentificationType',
			},
		],
	},
	{
		displayName: 'CountryCode',
		name: 'BookingTypesByTypeAllowed-valuesGet_countryCode',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Types'],
				operation: ['BookingTypesByTypeAllowed-valuesGet'],
			},
		},
		default: '',
		description: 'The code of the country in which the property is located in ISO 3166-1 alpha-2 format',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/types/{type}/allowed-values',
				qs: {
					countryCode: '={{$parameter["BookingTypesByTypeAllowed-valuesGet_countryCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'TextSearch',
		name: 'BookingTypesByTypeAllowed-valuesGet_textSearch',
		type: 'string',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Types'],
				operation: ['BookingTypesByTypeAllowed-valuesGet'],
			},
		},
		default: '',
		description: 'Filter the result by the provided free text. If specified, only values that contain one of the provided values will be returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/types/{type}/allowed-values',
				qs: {
					textSearch: '={{$parameter["BookingTypesByTypeAllowed-valuesGet_textSearch"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'BookingTypesByTypeAllowed-valuesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Types'],
				operation: ['BookingTypesByTypeAllowed-valuesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/types/{type}/allowed-values',
				qs: {
					pageNumber: '={{$parameter["BookingTypesByTypeAllowed-valuesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'BookingTypesByTypeAllowed-valuesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Types'],
				operation: ['BookingTypesByTypeAllowed-valuesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/types/{type}/allowed-values',
				qs: {
					pageSize: '={{$parameter["BookingTypesByTypeAllowed-valuesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Sort',
		name: 'BookingTypesByTypeAllowed-valuesGet_sort',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Types'],
				operation: ['BookingTypesByTypeAllowed-valuesGet'],
			},
		},
		default: {},
		description:
			'List of all fields that can be used to sort the results. Possible values are: value:asc, value:desc. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/types/{type}/allowed-values',
				qs: {
					sort: '={{$parameter["BookingTypesByTypeAllowed-valuesGet_sort"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'sortValues',
				displayName: 'Sort',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all fields that can be used to sort the results. Possible values are: value:asc, value:desc. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyIds',
		name: 'FinanceFoliosGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: {},
		description: 'Filter folio list by property IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					propertyIds: '={{$parameter["FinanceFoliosGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter folio list by property IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'CompanyIds',
		name: 'FinanceFoliosGet_companyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: {},
		description: 'Filter folio list by company IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					companyIds: '={{$parameter["FinanceFoliosGet_companyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'companyIdsValues',
				displayName: 'CompanyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter folio list by company IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'ReservationIds',
		name: 'FinanceFoliosGet_reservationIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: {},
		description: 'Filter folio list by reservation IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					reservationIds: '={{$parameter["FinanceFoliosGet_reservationIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'reservationIdsValues',
				displayName: 'ReservationIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter folio list by reservation IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'BookingIds',
		name: 'FinanceFoliosGet_bookingIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: {},
		description: 'Filter folio list by booking IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					bookingIds: '={{$parameter["FinanceFoliosGet_bookingIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'bookingIdsValues',
				displayName: 'BookingIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter folio list by booking IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'IsEmpty',
		name: 'FinanceFoliosGet_isEmpty',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: false,
		description: 'If set to `true`, only return empty folios (no unmoved [transitory] charges, no unmoved payments, no allowances). If set to `false`, only return non-empty folios.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					isEmpty: '={{$parameter["FinanceFoliosGet_isEmpty"]}}',
				},
			},
		},
	},
	{
		displayName: 'CheckedOutOnAccountsReceivable',
		name: 'FinanceFoliosGet_checkedOutOnAccountsReceivable',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: false,
		description: 'If set to `true`, only return folios that have been checked out on accounts receivables Otherwise, returns all',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					checkedOutOnAccountsReceivable:
						'={{$parameter["FinanceFoliosGet_checkedOutOnAccountsReceivable"]}}',
				},
			},
		},
	},
	{
		displayName: 'ExcludeClosed',
		name: 'FinanceFoliosGet_excludeClosed',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: false,
		description: 'If set to `true`, closed folios are filtered out from the result collection - <b>DEPRECATED: This field will be removed soon. Please use Status=Open instead.</b>.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					excludeClosed: '={{$parameter["FinanceFoliosGet_excludeClosed"]}}',
				},
			},
		},
	},
	{
		displayName: 'HasInvoices',
		name: 'FinanceFoliosGet_hasInvoices',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: false,
		description: 'If set to `true`, only return folios that been invoices',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					hasInvoices: '={{$parameter["FinanceFoliosGet_hasInvoices"]}}',
				},
			},
		},
	},
	{
		displayName: 'CreatedFrom',
		name: 'FinanceFoliosGet_createdFrom',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: '',
		description: 'The inclusive start time of the date of creation. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					createdFrom: '={{$parameter["FinanceFoliosGet_createdFrom"]}}',
				},
			},
		},
	},
	{
		displayName: 'CreatedTo',
		name: 'FinanceFoliosGet_createdTo',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: '',
		description: 'The exclusive end time of the date of creation. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					createdTo: '={{$parameter["FinanceFoliosGet_createdTo"]}}',
				},
			},
		},
	},
	{
		displayName: 'UpdatedFrom',
		name: 'FinanceFoliosGet_updatedFrom',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: '',
		description: 'The inclusive start time of the date of the last update. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					updatedFrom: '={{$parameter["FinanceFoliosGet_updatedFrom"]}}',
				},
			},
		},
	},
	{
		displayName: 'UpdatedTo',
		name: 'FinanceFoliosGet_updatedTo',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: '',
		description: 'The exclusive end time of the date of the last update. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					updatedTo: '={{$parameter["FinanceFoliosGet_updatedTo"]}}',
				},
			},
		},
	},
	{
		displayName: 'OnlyMain',
		name: 'FinanceFoliosGet_onlyMain',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: false,
		description: 'If set to `true`, only main folios are returned, otherwise all',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					onlyMain: '={{$parameter["FinanceFoliosGet_onlyMain"]}}',
				},
			},
		},
	},
	{
		displayName: 'Type',
		name: 'FinanceFoliosGet_type',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: 'Booking',
		description: 'The type of the folio',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					type: '={{$parameter["FinanceFoliosGet_type"]}}',
				},
			},
		},
		options: [
			{
				name: 'Booking',
				value: 'Booking',
			},
			{
				name: 'External',
				value: 'External',
			},
			{
				name: 'Guest',
				value: 'Guest',
			},
			{
				name: 'House',
				value: 'House',
			},
		],
	},
	{
		displayName: 'Status',
		name: 'FinanceFoliosGet_status',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: 'Closed',
		description: 'The status of the folio',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					status: '={{$parameter["FinanceFoliosGet_status"]}}',
				},
			},
		},
		options: [
			{
				name: 'Closed',
				value: 'Closed',
			},
			{
				name: 'Open',
				value: 'Open',
			},
		],
	},
	{
		displayName: 'ExternalFolioCode',
		name: 'FinanceFoliosGet_externalFolioCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: '',
		description:
			'Allows filtering external folios by code.\r\nUseful when you use external folios with custom codes.\r\nSpecifying this parameter will ignore the <b>Type</b> parameter and treat as if it would be set to "External" instead.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					externalFolioCode: '={{$parameter["FinanceFoliosGet_externalFolioCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'TextSearch',
		name: 'FinanceFoliosGet_textSearch',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: '',
		description: 'This will filter all folios where the provided text is contained in: debitor first name or last name or company name, folio ID. The search is case insensitive.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					textSearch: '={{$parameter["FinanceFoliosGet_textSearch"]}}',
				},
			},
		},
	},
	{
		displayName: 'BalanceFilter',
		name: 'FinanceFoliosGet_balanceFilter',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: {},
		description: 'This will filter reservations based on their balance.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					balanceFilter: '={{$parameter["FinanceFoliosGet_balanceFilter"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'balanceFilterValues',
				displayName: 'BalanceFilter',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'This will filter reservations based on their balance.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'FinanceFoliosGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					pageNumber: '={{$parameter["FinanceFoliosGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'FinanceFoliosGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					pageSize: '={{$parameter["FinanceFoliosGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'FinanceFoliosGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: allowances, allowedActions, transitoryCharges, charges, company, payments, warnings. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
				qs: {
					expand: '={{$parameter["FinanceFoliosGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: allowances, allowedActions, transitoryCharges, charges, company, payments, warnings. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'Body',
		name: 'FinanceFoliosPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosPost'],
			},
		},
		default:
			'{\n  "reservationId": "TS23XF",\n  "debitor": {\n    "title": "Dr",\n    "firstName": "Jon",\n    "name": "Doe",\n    "address": {\n      "addressLine1": "My Street 1",\n      "postalCode": "12453",\n      "city": "MyCity",\n      "countryCode": "GB"\n    },\n    "company": {\n      "name": "Horns & Hooves Inc",\n      "taxId": "TAX-12345",\n      "additionalTaxId": "TAX2-12345",\n      "additionalTaxId2": "TAX3-12345"\n    },\n    "personalTaxId": "123456789",\n    "reference": "SRC-1232",\n    "phone": "123456789"\n  },\n  "type": "Guest"\n}',
		description: 'The definition of the folio',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios',
				body: '={{JSON.parse($parameter["FinanceFoliosPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFoliosPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios',
				headers: {
					'Idempotency-Key': '={{$parameter["FinanceFoliosPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyIds',
		name: 'FinanceFolios$countGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: {},
		description: 'Filter folio list by property IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					propertyIds: '={{$parameter["FinanceFolios$countGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter folio list by property IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'CompanyIds',
		name: 'FinanceFolios$countGet_companyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: {},
		description: 'Filter folio list by company IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					companyIds: '={{$parameter["FinanceFolios$countGet_companyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'companyIdsValues',
				displayName: 'CompanyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter folio list by company IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'ReservationIds',
		name: 'FinanceFolios$countGet_reservationIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: {},
		description: 'Filter folio list by reservation IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					reservationIds: '={{$parameter["FinanceFolios$countGet_reservationIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'reservationIdsValues',
				displayName: 'ReservationIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter folio list by reservation IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'BookingIds',
		name: 'FinanceFolios$countGet_bookingIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: {},
		description: 'Filter folio list by booking IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					bookingIds: '={{$parameter["FinanceFolios$countGet_bookingIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'bookingIdsValues',
				displayName: 'BookingIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter folio list by booking IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'IsEmpty',
		name: 'FinanceFolios$countGet_isEmpty',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: false,
		description: 'If set to `true`, only return empty folios (no unmoved [transitory] charges, no unmoved payments, no allowances). If set to `false`, only return non-empty folios.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					isEmpty: '={{$parameter["FinanceFolios$countGet_isEmpty"]}}',
				},
			},
		},
	},
	{
		displayName: 'CheckedOutOnAccountsReceivable',
		name: 'FinanceFolios$countGet_checkedOutOnAccountsReceivable',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: false,
		description: 'If set to `true`, only return folios that have been checked out on accounts receivables Otherwise, returns all',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					checkedOutOnAccountsReceivable:
						'={{$parameter["FinanceFolios$countGet_checkedOutOnAccountsReceivable"]}}',
				},
			},
		},
	},
	{
		displayName: 'ExcludeClosed',
		name: 'FinanceFolios$countGet_excludeClosed',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: false,
		description: 'If set to `true`, closed folios are filtered out from the result collection - <b>DEPRECATED: This field will be removed soon. Please use Status=Open instead.</b>.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					excludeClosed: '={{$parameter["FinanceFolios$countGet_excludeClosed"]}}',
				},
			},
		},
	},
	{
		displayName: 'HasInvoices',
		name: 'FinanceFolios$countGet_hasInvoices',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: false,
		description: 'If set to `true`, only return folios that been invoices',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					hasInvoices: '={{$parameter["FinanceFolios$countGet_hasInvoices"]}}',
				},
			},
		},
	},
	{
		displayName: 'CreatedFrom',
		name: 'FinanceFolios$countGet_createdFrom',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: '',
		description: 'The inclusive start time of the date of creation. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					createdFrom: '={{$parameter["FinanceFolios$countGet_createdFrom"]}}',
				},
			},
		},
	},
	{
		displayName: 'CreatedTo',
		name: 'FinanceFolios$countGet_createdTo',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: '',
		description: 'The exclusive end time of the date of creation. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					createdTo: '={{$parameter["FinanceFolios$countGet_createdTo"]}}',
				},
			},
		},
	},
	{
		displayName: 'UpdatedFrom',
		name: 'FinanceFolios$countGet_updatedFrom',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: '',
		description: 'The inclusive start time of the date of the last update. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					updatedFrom: '={{$parameter["FinanceFolios$countGet_updatedFrom"]}}',
				},
			},
		},
	},
	{
		displayName: 'UpdatedTo',
		name: 'FinanceFolios$countGet_updatedTo',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: '',
		description: 'The exclusive end time of the date of the last update. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					updatedTo: '={{$parameter["FinanceFolios$countGet_updatedTo"]}}',
				},
			},
		},
	},
	{
		displayName: 'OnlyMain',
		name: 'FinanceFolios$countGet_onlyMain',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: false,
		description: 'If set to `true`, only main folios are returned, otherwise all',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					onlyMain: '={{$parameter["FinanceFolios$countGet_onlyMain"]}}',
				},
			},
		},
	},
	{
		displayName: 'Type',
		name: 'FinanceFolios$countGet_type',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: 'Booking',
		description: 'The type of the folio',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					type: '={{$parameter["FinanceFolios$countGet_type"]}}',
				},
			},
		},
		options: [
			{
				name: 'Booking',
				value: 'Booking',
			},
			{
				name: 'External',
				value: 'External',
			},
			{
				name: 'Guest',
				value: 'Guest',
			},
			{
				name: 'House',
				value: 'House',
			},
		],
	},
	{
		displayName: 'Status',
		name: 'FinanceFolios$countGet_status',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: 'Closed',
		description: 'The status of the folio',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					status: '={{$parameter["FinanceFolios$countGet_status"]}}',
				},
			},
		},
		options: [
			{
				name: 'Closed',
				value: 'Closed',
			},
			{
				name: 'Open',
				value: 'Open',
			},
		],
	},
	{
		displayName: 'ExternalFolioCode',
		name: 'FinanceFolios$countGet_externalFolioCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: '',
		description:
			'Allows filtering external folios by code.\r\nUseful when you use external folios with custom codes.\r\nSpecifying this parameter will ignore the <b>Type</b> parameter and treat as if it would be set to "External" instead.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					externalFolioCode: '={{$parameter["FinanceFolios$countGet_externalFolioCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'TextSearch',
		name: 'FinanceFolios$countGet_textSearch',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: '',
		description: 'This will filter all folios where the provided text is contained in: debitor first name or last name or company name, folio ID. The search is case insensitive.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					textSearch: '={{$parameter["FinanceFolios$countGet_textSearch"]}}',
				},
			},
		},
	},
	{
		displayName: 'BalanceFilter',
		name: 'FinanceFolios$countGet_balanceFilter',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		default: {},
		description: 'This will filter reservations based on their balance.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
				qs: {
					balanceFilter: '={{$parameter["FinanceFolios$countGet_balanceFilter"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'balanceFilterValues',
				displayName: 'BalanceFilter',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'This will filter reservations based on their balance.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'FinanceFoliosByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the folio',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'FinanceFoliosByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: folios. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{id}',
				qs: {
					expand: '={{$parameter["FinanceFoliosByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: folios. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'FinanceFoliosByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosByIdPatch'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'PATCH',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFoliosByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosByIdPatch'],
			},
		},
		default: '',
		description: 'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/. See the FolioDebitorModel in GET for values that can be changed.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/finance/v1/folios/{id}',
				body: '={{JSON.parse($parameter["FinanceFoliosByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'FinanceFoliosByIdHead_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosByIdHead'],
			},
		},
		default: '',
		description: 'The ID parameter',
		routing: {
			request: {
				method: 'HEAD',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByIdHead_id"]}}',
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdChargesPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesPost'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdChargesPost_folioId"]}}/charges',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdChargesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesPost'],
			},
		},
		default:
			'{\n  "serviceType": "FoodAndBeverages",\n  "vatType": "Normal",\n  "subAccountId": "MUC-BEER",\n  "name": "Restaurant",\n  "amount": {\n    "amount": 23,\n    "currency": "EUR"\n  },\n  "receipt": "R23412"\n}',
		description: 'The charge to be added',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/charges',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdChargesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFolio-actionsByFolioIdChargesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/charges',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFolio-actionsByFolioIdChargesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdTransitory-chargesPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdTransitory-chargesPost'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdTransitory-chargesPost_folioId"]}}/transitory-charges',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdTransitory-chargesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdTransitory-chargesPost'],
			},
		},
		default:
			'{\n  "name": "Restaurant",\n  "amount": {\n    "amount": 23,\n    "currency": "EUR"\n  },\n  "receipt": "R23412"\n}',
		description: 'The transitory charge to be added',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/transitory-charges',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdTransitory-chargesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFolio-actionsByFolioIdTransitory-chargesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdTransitory-chargesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/transitory-charges',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFolio-actionsByFolioIdTransitory-chargesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdCancellation-feePost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdCancellation-feePost'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdCancellation-feePost_folioId"]}}/cancellation-fee',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdCancellation-feePost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdCancellation-feePost'],
			},
		},
		default: '',
		description: 'The cancellation fee to be added',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/cancellation-fee',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdCancellation-feePost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFolio-actionsByFolioIdCancellation-feePost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdCancellation-feePost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/cancellation-fee',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFolio-actionsByFolioIdCancellation-feePost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdNo-show-feePost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdNo-show-feePost'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdNo-show-feePost_folioId"]}}/no-show-fee',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdNo-show-feePost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdNo-show-feePost'],
			},
		},
		default: '',
		description: 'The no-show fee to be added',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/no-show-fee',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdNo-show-feePost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFolio-actionsByFolioIdNo-show-feePost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdNo-show-feePost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/no-show-fee',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFolio-actionsByFolioIdNo-show-feePost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdClosePut_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdClosePut'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdClosePut_folioId"]}}/close',
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdReopenPut_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdReopenPut'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdReopenPut_folioId"]}}/reopen',
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdMove-chargesPut_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdMove-chargesPut'],
			},
		},
		default: '',
		description: 'The ID of the source folio from where the charges should be moved away',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdMove-chargesPut_folioId"]}}/move-charges',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdMove-chargesPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdMove-chargesPut'],
			},
		},
		default:
			'{\n  "targetFolioId": "KFCSQUID-1",\n  "reason": "Test",\n  "chargeIds": [\n    "KFCSQUID-1-C-1",\n    "KFCSQUID-1-C-5"\n  ],\n  "allowanceIds": [\n    "KFCSQUID-1-A-1",\n    "KFCSQUID-1-A-2"\n  ],\n  "transitoryChargeIds": [\n    "KFCSQUID-1-TC-1",\n    "KFCSQUID-1-TC-2"\n  ]\n}',
		description: 'See class',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/{folioId}/move-charges',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdMove-chargesPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsBulk-movePut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsBulk-movePut'],
			},
		},
		default:
			'{\n  "items": [\n    {\n      "sourceFolioId": "SPRJDQNU-1",\n      "targetFolioId": "KFCSQUID-1",\n      "chargeIds": [\n        "SPRJDQNU-1-C-1",\n        "SPRJDQNU-1-C-5"\n      ]\n    },\n    {\n      "sourceFolioId": "TTDKOWNC-1",\n      "targetFolioId": "YXPZMQAS-1",\n      "chargeIds": [\n        "TTDKOWNC-1-C-2",\n        "TTDKOWNC-1-C-3"\n      ]\n    }\n  ],\n  "reason": "Test"\n}',
		description: 'See class',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/bulk-move',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsBulk-movePut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdMove-all-chargesPut_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdMove-all-chargesPut'],
			},
		},
		default: '',
		description: 'The ID of the source folio from where the charges should be moved away',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdMove-all-chargesPut_folioId"]}}/move-all-charges',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdMove-all-chargesPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdMove-all-chargesPut'],
			},
		},
		default: '{\n  "targetFolioId": "KFCSQUID-1",\n  "reason": "Test"\n}',
		description: 'See class',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/{folioId}/move-all-charges',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdMove-all-chargesPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_folioId"]}}/charges/{chargeId}/allowances',
			},
		},
	},
	{
		displayName: 'ChargeId',
		name: 'FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_chargeId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost'],
			},
		},
		default: '',
		description: 'The ID of the charge allowance posted for',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/charges/={{$parameter["FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_chargeId"]}}/allowances',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost'],
			},
		},
		default:
			'{\n  "reason": "Reason",\n  "amount": {\n    "amount": 1,\n    "currency": "EUR"\n  }\n}',
		description: 'Allowance data',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/charges/{chargeId}/allowances',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/charges/{chargeId}/allowances',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdAllowancesPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdAllowancesPost'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdAllowancesPost_folioId"]}}/allowances',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdAllowancesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdAllowancesPost'],
			},
		},
		default:
			'{\n  "serviceType": "Other",\n  "vatType": "Normal",\n  "subAccountId": "MUC-REST",\n  "reason": "Good guy discount",\n  "amount": {\n    "amount": 22,\n    "currency": "EUR"\n  }\n}',
		description: 'Allowance amount and post reason',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/allowances',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdAllowancesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFolio-actionsByFolioIdAllowancesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdAllowancesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/allowances',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFolio-actionsByFolioIdAllowancesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdBulk-allowancesPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdBulk-allowancesPost'],
			},
		},
		default: '',
		description: 'The ID of the folio',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdBulk-allowancesPost_folioId"]}}/bulk-allowances',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdBulk-allowancesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdBulk-allowancesPost'],
			},
		},
		default:
			'{\n  "items": [\n    {\n      "chargeId": "IDDQD-1-1-TS-1",\n      "amount": {\n        "amount": 13,\n        "currency": "EUR"\n      }\n    },\n    {\n      "chargeId": "IDDQD-1-1-ES-2",\n      "amount": {\n        "amount": 37,\n        "currency": "EUR"\n      }\n    }\n  ],\n  "reason": "discount"\n}',
		description: 'Allowance amount and post reason',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/bulk-allowances',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdBulk-allowancesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFolio-actionsByFolioIdBulk-allowancesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdBulk-allowancesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/bulk-allowances',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFolio-actionsByFolioIdBulk-allowancesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdPost-chargesPut_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdPost-chargesPut'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdPost-chargesPut_folioId"]}}/post-charges',
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdMove-paymentsPut_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdMove-paymentsPut'],
			},
		},
		default: '',
		description: 'The ID of the source folio from where the payments should be moved away',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdMove-paymentsPut_folioId"]}}/move-payments',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdMove-paymentsPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdMove-paymentsPut'],
			},
		},
		default:
			'{\n  "targetFolioId": "KFCSQUID-1",\n  "reason": "Test",\n  "paymentIds": [\n    "KFCSQUID-1-C-1",\n    "KFCSQUID-1-C-5"\n  ]\n}',
		description: 'See class',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/{folioId}/move-payments',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdMove-paymentsPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdCorrectPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdCorrectPost'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdCorrectPost_folioId"]}}/correct',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdCorrectPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdCorrectPost'],
			},
		},
		default:
			'{\n  "reason": "Minibar is not paid by the company",\n  "chargeIds": [\n    "IDDQD-1-C-1",\n    "IDDQD-1-C-5"\n  ],\n  "allowanceIds": [\n    "IDDQD-1-A-1",\n    "IDDQD-1-A-5"\n  ],\n  "transitoryChargeIds": [\n    "IDDQD-1-TC-1",\n    "IDDQD-1-TC-5"\n  ]\n}',
		description: 'Array of chargeIds to move and reason',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/correct',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdCorrectPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFolio-actionsByFolioIdCorrectPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdCorrectPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/correct',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFolio-actionsByFolioIdCorrectPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_folioId"]}}/charges/{chargeId}/split',
			},
		},
	},
	{
		displayName: 'ChargeId',
		name: 'FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_chargeId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost'],
			},
		},
		default: '',
		description: 'The ID of the charge',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/charges/={{$parameter["FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_chargeId"]}}/split',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost'],
			},
		},
		default: '{\n  "percent": 51,\n  "type": "ByPercent"\n}',
		description: 'See class',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/charges/{chargeId}/split',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/charges/{chargeId}/split',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost'],
			},
		},
		default: '',
		description: 'The folio ID',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/={{$parameter["FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_folioId"]}}/payments/{paymentId}/split',
			},
		},
	},
	{
		displayName: 'PaymentId',
		name: 'FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_paymentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost'],
			},
		},
		default: '',
		description: 'The ID of the payment',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/payments/={{$parameter["FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_paymentId"]}}/split',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost'],
			},
		},
		default: '{\n  "percent": 51,\n  "type": "ByPercent"\n}',
		description: 'See class',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/payments/{paymentId}/split',
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/payments/{paymentId}/split',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFoliosByFolioIdPaymentsGet_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsGet'],
			},
		},
		default: '',
		description: 'The folioId parameter',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByFolioIdPaymentsGet_folioId"]}}/payments',
			},
		},
	},
	{
		displayName: 'StatusCodes',
		name: 'FinanceFoliosByFolioIdPaymentsGet_statusCodes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsGet'],
			},
		},
		default: {},
		description: 'Filter payments by one or more status',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/payments',
				qs: {
					statusCodes: '={{$parameter["FinanceFoliosByFolioIdPaymentsGet_statusCodes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'statusCodesValues',
				displayName: 'StatusCodes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter payments by one or more status',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'FinanceFoliosByFolioIdPaymentsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/payments',
				qs: {
					pageNumber: '={{$parameter["FinanceFoliosByFolioIdPaymentsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'FinanceFoliosByFolioIdPaymentsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/payments',
				qs: {
					pageSize: '={{$parameter["FinanceFoliosByFolioIdPaymentsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'FinanceFoliosByFolioIdPaymentsGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/payments',
				qs: {
					expand: '={{$parameter["FinanceFoliosByFolioIdPaymentsGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFoliosByFolioIdPaymentsPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsPost'],
			},
		},
		default: '',
		description: 'The folioId parameter',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByFolioIdPaymentsPost_folioId"]}}/payments',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFoliosByFolioIdPaymentsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsPost'],
			},
		},
		default:
			'{\n  "method": "Cash",\n  "receipt": "BLIPKWXP-1",\n  "amount": {\n    "amount": 230,\n    "currency": "EUR"\n  },\n  "paidCharges": [\n    {\n      "chargeId": "BLIPKWXP-1-1-1",\n      "amount": 230\n    }\n  ]\n}',
		description: 'The definition of the payment',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments',
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdPaymentsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFoliosByFolioIdPaymentsPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFoliosByFolioIdPaymentsPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdGet_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdGet'],
			},
		},
		default: '',
		description: 'The folioId parameter',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByFolioIdPaymentsByPaymentIdGet_folioId"]}}/payments/{paymentId}',
			},
		},
	},
	{
		displayName: 'PaymentId',
		name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdGet_paymentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdGet'],
			},
		},
		default: '',
		description: 'The payment ID',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/payments/={{$parameter["FinanceFoliosByFolioIdPaymentsByPaymentIdGet_paymentId"]}}',
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/payments/{paymentId}',
				qs: {
					expand: '={{$parameter["FinanceFoliosByFolioIdPaymentsByPaymentIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFoliosByFolioIdPaymentsBy-terminalPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-terminalPost'],
			},
		},
		default: '',
		description: 'The folioId parameter',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByFolioIdPaymentsBy-terminalPost_folioId"]}}/payments/by-terminal',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFoliosByFolioIdPaymentsBy-terminalPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-terminalPost'],
			},
		},
		default:
			'{\n  "terminalId": "V400m-324689704",\n  "amount": {\n    "amount": 230,\n    "currency": "EUR"\n  },\n  "paidCharges": [\n    {\n      "chargeId": "BLIPKWXP-1-1-1",\n      "amount": 230\n    }\n  ]\n}',
		description: 'The definition of the payment',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/by-terminal',
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdPaymentsBy-terminalPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFoliosByFolioIdPaymentsBy-terminalPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-terminalPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/by-terminal',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFoliosByFolioIdPaymentsBy-terminalPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFoliosByFolioIdPaymentsBy-authorizationPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-authorizationPost'],
			},
		},
		default: '',
		description: 'The folioId parameter',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByFolioIdPaymentsBy-authorizationPost_folioId"]}}/payments/by-authorization',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFoliosByFolioIdPaymentsBy-authorizationPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-authorizationPost'],
			},
		},
		default:
			'{\n  "transactionReference": "564578124534890J",\n  "referenceType": "PspReference",\n  "amount": {\n    "amount": 330,\n    "currency": "EUR"\n  },\n  "paidCharges": [\n    {\n      "chargeId": "BLIPKWXP-1-1-1",\n      "amount": 230\n    }\n  ]\n}',
		description: 'The definition of the payment',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/by-authorization',
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdPaymentsBy-authorizationPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFoliosByFolioIdPaymentsBy-authorizationPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-authorizationPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/by-authorization',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFoliosByFolioIdPaymentsBy-authorizationPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFoliosByFolioIdPaymentsBy-payment-accountPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-payment-accountPost'],
			},
		},
		default: '',
		description: 'The folioId parameter',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByFolioIdPaymentsBy-payment-accountPost_folioId"]}}/payments/by-payment-account',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFoliosByFolioIdPaymentsBy-payment-accountPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-payment-accountPost'],
			},
		},
		default:
			'{\n  "amount": {\n    "amount": 230,\n    "currency": "EUR"\n  },\n  "paidCharges": [\n    {\n      "chargeId": "BLIPKWXP-1-1-1",\n      "amount": 200\n    }\n  ]\n}',
		description: 'The definition of the payment',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/by-payment-account',
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdPaymentsBy-payment-accountPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFoliosByFolioIdPaymentsBy-payment-accountPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-payment-accountPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/by-payment-account',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFoliosByFolioIdPaymentsBy-payment-accountPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFoliosByFolioIdPaymentsBy-linkPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-linkPost'],
			},
		},
		default: '',
		description: 'The folioId parameter',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByFolioIdPaymentsBy-linkPost_folioId"]}}/payments/by-link',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFoliosByFolioIdPaymentsBy-linkPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-linkPost'],
			},
		},
		default:
			'{\n  "expiresAt": "2025-08-21T17:39:32.4971412Z",\n  "countryCode": "de",\n  "description": "Prepayment for the group booking apaleo Summer party",\n  "payerEmail": "0chai@hemenal5.space",\n  "amount": {\n    "amount": 150,\n    "currency": "EUR"\n  },\n  "paidCharges": [\n    {\n      "chargeId": "BLIPKWXP-1-1-1",\n      "amount": 230\n    }\n  ]\n}',
		description: 'The definition of the payment link',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/by-link',
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdPaymentsBy-linkPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFoliosByFolioIdPaymentsBy-linkPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-linkPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/by-link',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFoliosByFolioIdPaymentsBy-linkPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut'],
			},
		},
		default: '',
		description: 'The folioId parameter',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut_folioId"]}}/payments/{paymentId}/cancel',
			},
		},
	},
	{
		displayName: 'PaymentId',
		name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut_paymentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut'],
			},
		},
		default: '',
		description: 'The ID of the payment',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folios/{folioId}/payments/={{$parameter["FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut_paymentId"]}}/cancel',
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFoliosByFolioIdRefundsGet_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsGet'],
			},
		},
		default: '',
		description: 'The folioId parameter',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByFolioIdRefundsGet_folioId"]}}/refunds',
			},
		},
	},
	{
		displayName: 'StatusCodes',
		name: 'FinanceFoliosByFolioIdRefundsGet_statusCodes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsGet'],
			},
		},
		default: {},
		description: 'Filter refunds by one or more status',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/refunds',
				qs: {
					statusCodes: '={{$parameter["FinanceFoliosByFolioIdRefundsGet_statusCodes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'statusCodesValues',
				displayName: 'StatusCodes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter refunds by one or more status',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'FinanceFoliosByFolioIdRefundsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/refunds',
				qs: {
					pageNumber: '={{$parameter["FinanceFoliosByFolioIdRefundsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'FinanceFoliosByFolioIdRefundsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/refunds',
				qs: {
					pageSize: '={{$parameter["FinanceFoliosByFolioIdRefundsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFoliosByFolioIdRefundsPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsPost'],
			},
		},
		default: '',
		description: 'The folioId parameter',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByFolioIdRefundsPost_folioId"]}}/refunds',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFoliosByFolioIdRefundsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsPost'],
			},
		},
		default:
			'{\n  "method": "Cash",\n  "amount": {\n    "amount": 10,\n    "currency": "EUR"\n  },\n  "receipt": "CSH-201824120003",\n  "businessDate": "2025-08-19",\n  "reason": "Refund for the cancelled service"\n}',
		description: 'The definition of the refund',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/refunds',
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdRefundsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFoliosByFolioIdRefundsPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/refunds',
				headers: {
					'Idempotency-Key': '={{$parameter["FinanceFoliosByFolioIdRefundsPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFoliosByFolioIdRefundsByRefundIdGet_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsByRefundIdGet'],
			},
		},
		default: '',
		description: 'The folioId parameter',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByFolioIdRefundsByRefundIdGet_folioId"]}}/refunds/{refundId}',
			},
		},
	},
	{
		displayName: 'RefundId',
		name: 'FinanceFoliosByFolioIdRefundsByRefundIdGet_refundId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsByRefundIdGet'],
			},
		},
		default: '',
		description: 'The refund ID',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/refunds/={{$parameter["FinanceFoliosByFolioIdRefundsByRefundIdGet_refundId"]}}',
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost'],
			},
		},
		default: '',
		description: 'The folioId parameter',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/={{$parameter["FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_folioId"]}}/payments/{paymentId}/refunds',
			},
		},
	},
	{
		displayName: 'PaymentId',
		name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_paymentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost'],
			},
		},
		default: '',
		description: 'The payment ID',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/={{$parameter["FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_paymentId"]}}/refunds',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost'],
			},
		},
		default:
			'{\n  "amount": {\n    "amount": 10,\n    "currency": "EUR"\n  },\n  "businessDate": "2025-08-19",\n  "reason": "Refund for the cancelled service"\n}',
		description: 'The definition of the refund',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/{paymentId}/refunds',
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/{paymentId}/refunds',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'LanguageCode',
		name: 'FinanceInvoicesPreview-pdfGet_languageCode',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesPreview-pdfGet'],
			},
		},
		default: '',
		description: 'The language in which the invoice should be produced',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices/preview-pdf',
				qs: {
					languageCode: '={{$parameter["FinanceInvoicesPreview-pdfGet_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceInvoicesPreview-pdfGet_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesPreview-pdfGet'],
			},
		},
		default: '',
		description: 'The ID of the folio for which the invoice should be created',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices/preview-pdf',
				qs: {
					folioId: '={{$parameter["FinanceInvoicesPreview-pdfGet_folioId"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceInvoicesPreviewGet_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesPreviewGet'],
			},
		},
		default: '',
		description: 'The ID of the folio for which the invoice should be created',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices/preview',
				qs: {
					folioId: '={{$parameter["FinanceInvoicesPreviewGet_folioId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'FinanceInvoicesPreviewGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesPreviewGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices/preview',
				qs: {
					expand: '={{$parameter["FinanceInvoicesPreviewGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'Number',
		name: 'FinanceInvoicesGet_number',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: '',
		description: 'The invoice number',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					number: '={{$parameter["FinanceInvoicesGet_number"]}}',
				},
			},
		},
	},
	{
		displayName: 'Status',
		name: 'FinanceInvoicesGet_status',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: 'FullyPaid',
		description: 'Filter by invoice status',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					status: '={{$parameter["FinanceInvoicesGet_status"]}}',
				},
			},
		},
		options: [
			{
				name: 'FullyPaid',
				value: 'FullyPaid',
			},
			{
				name: 'Unpaid',
				value: 'Unpaid',
			},
			{
				name: 'WrittenOff',
				value: 'WrittenOff',
			},
		],
	},
	{
		displayName: 'CheckedOutOnAccountsReceivable',
		name: 'FinanceInvoicesGet_checkedOutOnAccountsReceivable',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: false,
		description: 'If set to `true`, only return invoices with an open balance (AR) Otherwise, returns all',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					checkedOutOnAccountsReceivable:
						'={{$parameter["FinanceInvoicesGet_checkedOutOnAccountsReceivable"]}}',
				},
			},
		},
	},
	{
		displayName: 'OutstandingPaymentFilter',
		name: 'FinanceInvoicesGet_outstandingPaymentFilter',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: {},
		description: 'Filter for the outstanding balance for invoicesYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					outstandingPaymentFilter:
						'={{$parameter["FinanceInvoicesGet_outstandingPaymentFilter"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'outstandingPaymentFilterValues',
				displayName: 'OutstandingPaymentFilter',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter for the outstanding balance for invoicesYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
					},
				],
			},
		],
	},
	{
		displayName: 'DateFilter',
		name: 'FinanceInvoicesGet_dateFilter',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: {},
		description: 'Filter by invoice dateYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					dateFilter: '={{$parameter["FinanceInvoicesGet_dateFilter"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'dateFilterValues',
				displayName: 'DateFilter',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter by invoice dateYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyIds',
		name: 'FinanceInvoicesGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: {},
		description: 'Filter by property IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					propertyIds: '={{$parameter["FinanceInvoicesGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter by property IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'ReservationIds',
		name: 'FinanceInvoicesGet_reservationIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: {},
		description: 'Filter by reservation IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					reservationIds: '={{$parameter["FinanceInvoicesGet_reservationIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'reservationIdsValues',
				displayName: 'ReservationIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter by reservation IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'BookingIds',
		name: 'FinanceInvoicesGet_bookingIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: {},
		description: 'Filter by booking IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					bookingIds: '={{$parameter["FinanceInvoicesGet_bookingIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'bookingIdsValues',
				displayName: 'BookingIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter by booking IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'FolioIds',
		name: 'FinanceInvoicesGet_folioIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: {},
		description: 'Filter by folio IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					folioIds: '={{$parameter["FinanceInvoicesGet_folioIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'folioIdsValues',
				displayName: 'FolioIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter by folio IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'NameSearch',
		name: 'FinanceInvoicesGet_nameSearch',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: '',
		description:
			'Find invoices for a recipient name or company. Provide at least three characters.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					nameSearch: '={{$parameter["FinanceInvoicesGet_nameSearch"]}}',
				},
			},
		},
	},
	{
		displayName: 'PaymentSettled',
		name: 'FinanceInvoicesGet_paymentSettled',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: false,
		description:
			'If set to `true`, returns only invoices having no outstanding payments or marked as settled.\r\nIf set to `false`, returns only invoices with outstanding payment and not marked as settled.\r\nIf not set, returns all invoices. - <b>DEPRECATED: This field will be removed at 25.06.2022. Use filtering by `Status` instead</b>',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					paymentSettled: '={{$parameter["FinanceInvoicesGet_paymentSettled"]}}',
				},
			},
		},
	},
	{
		displayName: 'CompanyIds',
		name: 'FinanceInvoicesGet_companyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: {},
		description: 'Filter by company IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					companyIds: '={{$parameter["FinanceInvoicesGet_companyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'companyIdsValues',
				displayName: 'CompanyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter by company IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'RecipientType',
		name: 'FinanceInvoicesGet_recipientType',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: 'Company',
		description: 'If nothing is set, invoices addressed both companies and individuals will be returned. If set to `Person`, invoices that addressed to individuals will be returned. If set to `Company`, invoice that addressed to companies will be returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					recipientType: '={{$parameter["FinanceInvoicesGet_recipientType"]}}',
				},
			},
		},
		options: [
			{
				name: 'Company',
				value: 'Company',
			},
			{
				name: 'Person',
				value: 'Person',
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'FinanceInvoicesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					pageNumber: '={{$parameter["FinanceInvoicesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'FinanceInvoicesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					pageSize: '={{$parameter["FinanceInvoicesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'FinanceInvoicesGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: allowedActions, company. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
				qs: {
					expand: '={{$parameter["FinanceInvoicesGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: allowedActions, company. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'Body',
		name: 'FinanceInvoicesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesPost'],
			},
		},
		default: '{\n  "folioId": "HBCXQZ-1",\n  "languageCode": "en"\n}',
		description: 'The folio ID to create the invoice for',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/invoices',
				body: '={{JSON.parse($parameter["FinanceInvoicesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceInvoicesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/invoices',
				headers: {
					'Idempotency-Key': '={{$parameter["FinanceInvoicesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'FinanceInvoicesByIdPdfGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesByIdPdfGet'],
			},
		},
		default: '',
		description: 'The invoice ID',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices/={{$parameter["FinanceInvoicesByIdPdfGet_id"]}}/pdf',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'FinanceInvoicesByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesByIdGet'],
			},
		},
		default: '',
		description: 'The invoice ID',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices/={{$parameter["FinanceInvoicesByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'FinanceInvoicesByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices/{id}',
				qs: {
					expand: '={{$parameter["FinanceInvoicesByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'FinanceInvoice-actionsByIdPayPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['InvoiceAction'],
				operation: ['FinanceInvoice-actionsByIdPayPut'],
			},
		},
		default: '',
		description: 'The invoice ID',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/invoice-actions/={{$parameter["FinanceInvoice-actionsByIdPayPut_id"]}}/pay',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceInvoice-actionsByIdPayPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['InvoiceAction'],
				operation: ['FinanceInvoice-actionsByIdPayPut'],
			},
		},
		default: '{\n  "paymentMethod": "BankTransfer",\n  "receipt": "BANK-123456"\n}',
		description: 'See class',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/invoice-actions/{id}/pay',
				body: '={{JSON.parse($parameter["FinanceInvoice-actionsByIdPayPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'FinanceInvoice-actionsByIdCancelPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['InvoiceAction'],
				operation: ['FinanceInvoice-actionsByIdCancelPut'],
			},
		},
		default: '',
		description: 'The invoice ID',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/invoice-actions/={{$parameter["FinanceInvoice-actionsByIdCancelPut_id"]}}/cancel',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'FinanceInvoice-actionsByIdCancelPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['InvoiceAction'],
				operation: ['FinanceInvoice-actionsByIdCancelPut'],
			},
		},
		default: '{\n  "reasonCode": "ChangeOfRecipientDetails"\n}',
		description: 'See class',
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/invoice-actions/{id}/cancel',
				body: '={{JSON.parse($parameter["FinanceInvoice-actionsByIdCancelPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'FinanceAccountsAggregate-pairs-dailyPost_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-pairs-dailyPost'],
			},
		},
		default: '',
		description: 'Specifies the property transactions will be aggregated for',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-pairs-daily',
				qs: {
					propertyId: '={{$parameter["FinanceAccountsAggregate-pairs-dailyPost_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'FinanceAccountsAggregate-pairs-dailyPost_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-pairs-dailyPost'],
			},
		},
		default: '',
		description: 'The inclusive start date of the interval',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-pairs-daily',
				qs: {
					from: '={{$parameter["FinanceAccountsAggregate-pairs-dailyPost_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'FinanceAccountsAggregate-pairs-dailyPost_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-pairs-dailyPost'],
			},
		},
		default: '',
		description: 'The exclusive end date of the interval',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-pairs-daily',
				qs: {
					to: '={{$parameter["FinanceAccountsAggregate-pairs-dailyPost_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'Reference',
		name: 'FinanceAccountsAggregate-pairs-dailyPost_reference',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-pairs-dailyPost'],
			},
		},
		default: '',
		description: 'Filter transactions by reference (reservation ID/external folio ID/property ID for house folio)',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-pairs-daily',
				qs: {
					reference: '={{$parameter["FinanceAccountsAggregate-pairs-dailyPost_reference"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountNumber',
		name: 'FinanceAccountsAggregate-pairs-dailyPost_accountNumber',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-pairs-dailyPost'],
			},
		},
		default: '',
		description: 'Filter transactions by account number',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-pairs-daily',
				qs: {
					accountNumber:
						'={{$parameter["FinanceAccountsAggregate-pairs-dailyPost_accountNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountType',
		name: 'FinanceAccountsAggregate-pairs-dailyPost_accountType',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-pairs-dailyPost'],
			},
		},
		default: 'AccountsReceivable',
		description: 'Filter transactions by type',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-pairs-daily',
				qs: {
					accountType: '={{$parameter["FinanceAccountsAggregate-pairs-dailyPost_accountType"]}}',
				},
			},
		},
		options: [
			{
				name: 'AccountsReceivable',
				value: 'AccountsReceivable',
			},
			{
				name: 'CityTaxes',
				value: 'CityTaxes',
			},
			{
				name: 'House',
				value: 'House',
			},
			{
				name: 'Liabilities',
				value: 'Liabilities',
			},
			{
				name: 'LossOfAccountsReceivable',
				value: 'LossOfAccountsReceivable',
			},
			{
				name: 'Payments',
				value: 'Payments',
			},
			{
				name: 'Receivables',
				value: 'Receivables',
			},
			{
				name: 'Revenues',
				value: 'Revenues',
			},
			{
				name: 'SecondCityTax',
				value: 'SecondCityTax',
			},
			{
				name: 'TransitoryItems',
				value: 'TransitoryItems',
			},
			{
				name: 'Vat',
				value: 'Vat',
			},
			{
				name: 'VatOnLiabilities',
				value: 'VatOnLiabilities',
			},
		],
	},
	{
		displayName: 'AccountingSchema',
		name: 'FinanceAccountsAggregate-pairs-dailyPost_accountingSchema',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-pairs-dailyPost'],
			},
		},
		default: 'Extended',
		description:
			'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-pairs-daily',
				qs: {
					accountingSchema:
						'={{$parameter["FinanceAccountsAggregate-pairs-dailyPost_accountingSchema"]}}',
				},
			},
		},
		options: [
			{
				name: 'Extended',
				value: 'Extended',
			},
			{
				name: 'Simple',
				value: 'Simple',
			},
		],
	},
	{
		displayName: 'LanguageCode',
		name: 'FinanceAccountsAggregate-pairs-dailyPost_languageCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-pairs-dailyPost'],
			},
		},
		default: '',
		description: 'The language for the the report (2-letter ISO code)',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-pairs-daily',
				qs: {
					languageCode: '={{$parameter["FinanceAccountsAggregate-pairs-dailyPost_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceAccountsAggregate-pairs-dailyPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-pairs-dailyPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-pairs-daily',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceAccountsAggregate-pairs-dailyPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'FinanceAccountsAggregate-dailyPost_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-dailyPost'],
			},
		},
		default: '',
		description: 'Specifies the property transactions will be aggregated for',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-daily',
				qs: {
					propertyId: '={{$parameter["FinanceAccountsAggregate-dailyPost_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'FinanceAccountsAggregate-dailyPost_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-dailyPost'],
			},
		},
		default: '',
		description: 'The inclusive start date of the interval',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-daily',
				qs: {
					from: '={{$parameter["FinanceAccountsAggregate-dailyPost_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'FinanceAccountsAggregate-dailyPost_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-dailyPost'],
			},
		},
		default: '',
		description: 'The exclusive end date of the interval',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-daily',
				qs: {
					to: '={{$parameter["FinanceAccountsAggregate-dailyPost_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'Reference',
		name: 'FinanceAccountsAggregate-dailyPost_reference',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-dailyPost'],
			},
		},
		default: '',
		description: 'Filter transactions by reference (reservation ID/external folio ID/property ID for house folio)',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-daily',
				qs: {
					reference: '={{$parameter["FinanceAccountsAggregate-dailyPost_reference"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountNumber',
		name: 'FinanceAccountsAggregate-dailyPost_accountNumber',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-dailyPost'],
			},
		},
		default: '',
		description: 'Filter transactions by account number',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-daily',
				qs: {
					accountNumber: '={{$parameter["FinanceAccountsAggregate-dailyPost_accountNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountType',
		name: 'FinanceAccountsAggregate-dailyPost_accountType',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-dailyPost'],
			},
		},
		default: 'AccountsReceivable',
		description: 'Filter transactions by type',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-daily',
				qs: {
					accountType: '={{$parameter["FinanceAccountsAggregate-dailyPost_accountType"]}}',
				},
			},
		},
		options: [
			{
				name: 'AccountsReceivable',
				value: 'AccountsReceivable',
			},
			{
				name: 'CityTaxes',
				value: 'CityTaxes',
			},
			{
				name: 'House',
				value: 'House',
			},
			{
				name: 'Liabilities',
				value: 'Liabilities',
			},
			{
				name: 'LossOfAccountsReceivable',
				value: 'LossOfAccountsReceivable',
			},
			{
				name: 'Payments',
				value: 'Payments',
			},
			{
				name: 'Receivables',
				value: 'Receivables',
			},
			{
				name: 'Revenues',
				value: 'Revenues',
			},
			{
				name: 'SecondCityTax',
				value: 'SecondCityTax',
			},
			{
				name: 'TransitoryItems',
				value: 'TransitoryItems',
			},
			{
				name: 'Vat',
				value: 'Vat',
			},
			{
				name: 'VatOnLiabilities',
				value: 'VatOnLiabilities',
			},
		],
	},
	{
		displayName: 'AccountingSchema',
		name: 'FinanceAccountsAggregate-dailyPost_accountingSchema',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-dailyPost'],
			},
		},
		default: 'Extended',
		description:
			'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-daily',
				qs: {
					accountingSchema:
						'={{$parameter["FinanceAccountsAggregate-dailyPost_accountingSchema"]}}',
				},
			},
		},
		options: [
			{
				name: 'Extended',
				value: 'Extended',
			},
			{
				name: 'Simple',
				value: 'Simple',
			},
		],
	},
	{
		displayName: 'LanguageCode',
		name: 'FinanceAccountsAggregate-dailyPost_languageCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-dailyPost'],
			},
		},
		default: '',
		description: 'The language for the the report (2-letter ISO code)',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-daily',
				qs: {
					languageCode: '={{$parameter["FinanceAccountsAggregate-dailyPost_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceAccountsAggregate-dailyPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-dailyPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-daily',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceAccountsAggregate-dailyPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'FinanceAccountsAggregatePost_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregatePost'],
			},
		},
		default: '',
		description: 'Specifies the property for which transactions will be exported',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate',
				qs: {
					propertyId: '={{$parameter["FinanceAccountsAggregatePost_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'FinanceAccountsAggregatePost_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregatePost'],
			},
		},
		default: '',
		description: 'The inclusive start time of the posting date. Either posting date or business date interval should be specified.A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate',
				qs: {
					from: '={{$parameter["FinanceAccountsAggregatePost_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'FinanceAccountsAggregatePost_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregatePost'],
			},
		},
		default: '',
		description: 'The exclusive end time of the posting date. Either posting date or business date interval should be specified.A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate',
				qs: {
					to: '={{$parameter["FinanceAccountsAggregatePost_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountNumber',
		name: 'FinanceAccountsAggregatePost_accountNumber',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregatePost'],
			},
		},
		default: '',
		description: 'Filter transactions by account number',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate',
				qs: {
					accountNumber: '={{$parameter["FinanceAccountsAggregatePost_accountNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountType',
		name: 'FinanceAccountsAggregatePost_accountType',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregatePost'],
			},
		},
		default: 'AccountsReceivable',
		description: 'Filter transactions by type',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate',
				qs: {
					accountType: '={{$parameter["FinanceAccountsAggregatePost_accountType"]}}',
				},
			},
		},
		options: [
			{
				name: 'AccountsReceivable',
				value: 'AccountsReceivable',
			},
			{
				name: 'CityTaxes',
				value: 'CityTaxes',
			},
			{
				name: 'House',
				value: 'House',
			},
			{
				name: 'Liabilities',
				value: 'Liabilities',
			},
			{
				name: 'LossOfAccountsReceivable',
				value: 'LossOfAccountsReceivable',
			},
			{
				name: 'Payments',
				value: 'Payments',
			},
			{
				name: 'Receivables',
				value: 'Receivables',
			},
			{
				name: 'Revenues',
				value: 'Revenues',
			},
			{
				name: 'SecondCityTax',
				value: 'SecondCityTax',
			},
			{
				name: 'TransitoryItems',
				value: 'TransitoryItems',
			},
			{
				name: 'Vat',
				value: 'Vat',
			},
			{
				name: 'VatOnLiabilities',
				value: 'VatOnLiabilities',
			},
		],
	},
	{
		displayName: 'AccountingSchema',
		name: 'FinanceAccountsAggregatePost_accountingSchema',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregatePost'],
			},
		},
		default: 'Extended',
		description:
			'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate',
				qs: {
					accountingSchema: '={{$parameter["FinanceAccountsAggregatePost_accountingSchema"]}}',
				},
			},
		},
		options: [
			{
				name: 'Extended',
				value: 'Extended',
			},
			{
				name: 'Simple',
				value: 'Simple',
			},
		],
	},
	{
		displayName: 'LanguageCode',
		name: 'FinanceAccountsAggregatePost_languageCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregatePost'],
			},
		},
		default: '',
		description: 'The language for the the report',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate',
				qs: {
					languageCode: '={{$parameter["FinanceAccountsAggregatePost_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceAccountsAggregatePost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregatePost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate',
				headers: {
					'Idempotency-Key': '={{$parameter["FinanceAccountsAggregatePost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'FinanceAccountsExportPost_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExportPost'],
			},
		},
		default: '',
		description: 'Specifies the property for which transactions will be exported',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export',
				qs: {
					propertyId: '={{$parameter["FinanceAccountsExportPost_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'FinanceAccountsExportPost_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExportPost'],
			},
		},
		default: '',
		description: 'The inclusive start time of the posting date. Either posting date or business date interval should be specified.A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export',
				qs: {
					from: '={{$parameter["FinanceAccountsExportPost_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'FinanceAccountsExportPost_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExportPost'],
			},
		},
		default: '',
		description: 'The exclusive end time of the posting date. Either posting date or business date interval should be specified.A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export',
				qs: {
					to: '={{$parameter["FinanceAccountsExportPost_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountNumber',
		name: 'FinanceAccountsExportPost_accountNumber',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExportPost'],
			},
		},
		default: '',
		description: 'Filter transactions by account number',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export',
				qs: {
					accountNumber: '={{$parameter["FinanceAccountsExportPost_accountNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountType',
		name: 'FinanceAccountsExportPost_accountType',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExportPost'],
			},
		},
		default: 'AccountsReceivable',
		description: 'Filter transactions by type',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export',
				qs: {
					accountType: '={{$parameter["FinanceAccountsExportPost_accountType"]}}',
				},
			},
		},
		options: [
			{
				name: 'AccountsReceivable',
				value: 'AccountsReceivable',
			},
			{
				name: 'CityTaxes',
				value: 'CityTaxes',
			},
			{
				name: 'House',
				value: 'House',
			},
			{
				name: 'Liabilities',
				value: 'Liabilities',
			},
			{
				name: 'LossOfAccountsReceivable',
				value: 'LossOfAccountsReceivable',
			},
			{
				name: 'Payments',
				value: 'Payments',
			},
			{
				name: 'Receivables',
				value: 'Receivables',
			},
			{
				name: 'Revenues',
				value: 'Revenues',
			},
			{
				name: 'SecondCityTax',
				value: 'SecondCityTax',
			},
			{
				name: 'TransitoryItems',
				value: 'TransitoryItems',
			},
			{
				name: 'Vat',
				value: 'Vat',
			},
			{
				name: 'VatOnLiabilities',
				value: 'VatOnLiabilities',
			},
		],
	},
	{
		displayName: 'AccountingSchema',
		name: 'FinanceAccountsExportPost_accountingSchema',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExportPost'],
			},
		},
		default: 'Extended',
		description:
			'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export',
				qs: {
					accountingSchema: '={{$parameter["FinanceAccountsExportPost_accountingSchema"]}}',
				},
			},
		},
		options: [
			{
				name: 'Extended',
				value: 'Extended',
			},
			{
				name: 'Simple',
				value: 'Simple',
			},
		],
	},
	{
		displayName: 'LanguageCode',
		name: 'FinanceAccountsExportPost_languageCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExportPost'],
			},
		},
		default: '',
		description: 'The language for the the report',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export',
				qs: {
					languageCode: '={{$parameter["FinanceAccountsExportPost_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceAccountsExportPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExportPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export',
				headers: {
					'Idempotency-Key': '={{$parameter["FinanceAccountsExportPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'FinanceAccountsExport-dailyPost_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-dailyPost'],
			},
		},
		default: '',
		description: 'Specifies the property transactions will be aggregated for',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-daily',
				qs: {
					propertyId: '={{$parameter["FinanceAccountsExport-dailyPost_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'FinanceAccountsExport-dailyPost_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-dailyPost'],
			},
		},
		default: '',
		description: 'The inclusive start date of the interval',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-daily',
				qs: {
					from: '={{$parameter["FinanceAccountsExport-dailyPost_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'FinanceAccountsExport-dailyPost_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-dailyPost'],
			},
		},
		default: '',
		description: 'The exclusive end date of the interval',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-daily',
				qs: {
					to: '={{$parameter["FinanceAccountsExport-dailyPost_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'Reference',
		name: 'FinanceAccountsExport-dailyPost_reference',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-dailyPost'],
			},
		},
		default: '',
		description: 'Filter transactions by reference (reservation ID/external folio ID/property ID for house folio)',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-daily',
				qs: {
					reference: '={{$parameter["FinanceAccountsExport-dailyPost_reference"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountNumber',
		name: 'FinanceAccountsExport-dailyPost_accountNumber',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-dailyPost'],
			},
		},
		default: '',
		description: 'Filter transactions by account number',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-daily',
				qs: {
					accountNumber: '={{$parameter["FinanceAccountsExport-dailyPost_accountNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountType',
		name: 'FinanceAccountsExport-dailyPost_accountType',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-dailyPost'],
			},
		},
		default: 'AccountsReceivable',
		description: 'Filter transactions by type',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-daily',
				qs: {
					accountType: '={{$parameter["FinanceAccountsExport-dailyPost_accountType"]}}',
				},
			},
		},
		options: [
			{
				name: 'AccountsReceivable',
				value: 'AccountsReceivable',
			},
			{
				name: 'CityTaxes',
				value: 'CityTaxes',
			},
			{
				name: 'House',
				value: 'House',
			},
			{
				name: 'Liabilities',
				value: 'Liabilities',
			},
			{
				name: 'LossOfAccountsReceivable',
				value: 'LossOfAccountsReceivable',
			},
			{
				name: 'Payments',
				value: 'Payments',
			},
			{
				name: 'Receivables',
				value: 'Receivables',
			},
			{
				name: 'Revenues',
				value: 'Revenues',
			},
			{
				name: 'SecondCityTax',
				value: 'SecondCityTax',
			},
			{
				name: 'TransitoryItems',
				value: 'TransitoryItems',
			},
			{
				name: 'Vat',
				value: 'Vat',
			},
			{
				name: 'VatOnLiabilities',
				value: 'VatOnLiabilities',
			},
		],
	},
	{
		displayName: 'AccountingSchema',
		name: 'FinanceAccountsExport-dailyPost_accountingSchema',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-dailyPost'],
			},
		},
		default: 'Extended',
		description:
			'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-daily',
				qs: {
					accountingSchema: '={{$parameter["FinanceAccountsExport-dailyPost_accountingSchema"]}}',
				},
			},
		},
		options: [
			{
				name: 'Extended',
				value: 'Extended',
			},
			{
				name: 'Simple',
				value: 'Simple',
			},
		],
	},
	{
		displayName: 'LanguageCode',
		name: 'FinanceAccountsExport-dailyPost_languageCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-dailyPost'],
			},
		},
		default: '',
		description: 'The language for the the report (2-letter ISO code)',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-daily',
				qs: {
					languageCode: '={{$parameter["FinanceAccountsExport-dailyPost_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceAccountsExport-dailyPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-dailyPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-daily',
				headers: {
					'Idempotency-Key': '={{$parameter["FinanceAccountsExport-dailyPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'FinanceAccountsExport-gross-dailyPost_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-gross-dailyPost'],
			},
		},
		default: '',
		description: 'Specifies the property transactions will be aggregated for',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-gross-daily',
				qs: {
					propertyId: '={{$parameter["FinanceAccountsExport-gross-dailyPost_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'FinanceAccountsExport-gross-dailyPost_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-gross-dailyPost'],
			},
		},
		default: '',
		description: 'The inclusive start date of the interval',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-gross-daily',
				qs: {
					from: '={{$parameter["FinanceAccountsExport-gross-dailyPost_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'FinanceAccountsExport-gross-dailyPost_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-gross-dailyPost'],
			},
		},
		default: '',
		description: 'The exclusive end date of the interval',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-gross-daily',
				qs: {
					to: '={{$parameter["FinanceAccountsExport-gross-dailyPost_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'Reference',
		name: 'FinanceAccountsExport-gross-dailyPost_reference',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-gross-dailyPost'],
			},
		},
		default: '',
		description: 'Filter transactions by reference (reservation ID/external folio ID/property ID for house folio)',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-gross-daily',
				qs: {
					reference: '={{$parameter["FinanceAccountsExport-gross-dailyPost_reference"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountingSchema',
		name: 'FinanceAccountsExport-gross-dailyPost_accountingSchema',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-gross-dailyPost'],
			},
		},
		default: 'Extended',
		description:
			'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-gross-daily',
				qs: {
					accountingSchema:
						'={{$parameter["FinanceAccountsExport-gross-dailyPost_accountingSchema"]}}',
				},
			},
		},
		options: [
			{
				name: 'Extended',
				value: 'Extended',
			},
			{
				name: 'Simple',
				value: 'Simple',
			},
		],
	},
	{
		displayName: 'IdempotencyKey',
		name: 'FinanceAccountsExport-gross-dailyPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-gross-dailyPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-gross-daily',
				headers: {
					'Idempotency-Key':
						'={{$parameter["FinanceAccountsExport-gross-dailyPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'FinanceAccountsSchemaGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsSchemaGet'],
			},
		},
		default: '',
		description: 'Filter account list by property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/schema',
				qs: {
					propertyId: '={{$parameter["FinanceAccountsSchemaGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Depth',
		name: 'FinanceAccountsSchemaGet_depth',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsSchemaGet'],
			},
		},
		default: '',
		description: 'How many hierarchy levels to include (between 1 and 4, default is 1)',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/schema',
				qs: {
					depth: '={{$parameter["FinanceAccountsSchemaGet_depth"]}}',
				},
			},
		},
	},
	{
		displayName: 'IncludeArchived',
		name: 'FinanceAccountsSchemaGet_includeArchived',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsSchemaGet'],
			},
		},
		default: false,
		description: 'If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/schema',
				qs: {
					includeArchived: '={{$parameter["FinanceAccountsSchemaGet_includeArchived"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountingSchema',
		name: 'FinanceAccountsSchemaGet_accountingSchema',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsSchemaGet'],
			},
		},
		default: 'Extended',
		description:
			'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/schema',
				qs: {
					accountingSchema: '={{$parameter["FinanceAccountsSchemaGet_accountingSchema"]}}',
				},
			},
		},
		options: [
			{
				name: 'Extended',
				value: 'Extended',
			},
			{
				name: 'Simple',
				value: 'Simple',
			},
		],
	},
	{
		displayName: 'LanguageCode',
		name: 'FinanceAccountsSchemaGet_languageCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsSchemaGet'],
			},
		},
		default: '',
		description:
			'The language for the the report. If not specified, language code from "Accept-Language" will be used.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/schema',
				qs: {
					languageCode: '={{$parameter["FinanceAccountsSchemaGet_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'FinanceGlobal-accountsGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGlobal-accountsGet'],
			},
		},
		default: '',
		description: 'Filter account list by property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/global-accounts',
				qs: {
					propertyId: '={{$parameter["FinanceGlobal-accountsGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Parent',
		name: 'FinanceGlobal-accountsGet_parent',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGlobal-accountsGet'],
			},
		},
		default: '',
		description: 'Filter account list by the parent account\'s number',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/global-accounts',
				qs: {
					parent: '={{$parameter["FinanceGlobal-accountsGet_parent"]}}',
				},
			},
		},
	},
	{
		displayName: 'IncludeArchived',
		name: 'FinanceGlobal-accountsGet_includeArchived',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGlobal-accountsGet'],
			},
		},
		default: false,
		description: 'If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/global-accounts',
				qs: {
					includeArchived: '={{$parameter["FinanceGlobal-accountsGet_includeArchived"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountingSchema',
		name: 'FinanceGlobal-accountsGet_accountingSchema',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGlobal-accountsGet'],
			},
		},
		default: 'Extended',
		description: 'Allows to override the default accounting schema',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/global-accounts',
				qs: {
					accountingSchema: '={{$parameter["FinanceGlobal-accountsGet_accountingSchema"]}}',
				},
			},
		},
		options: [
			{
				name: 'Extended',
				value: 'Extended',
			},
			{
				name: 'Simple',
				value: 'Simple',
			},
		],
	},
	{
		displayName: 'LanguageCode',
		name: 'FinanceGlobal-accountsGet_languageCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGlobal-accountsGet'],
			},
		},
		default: '',
		description: 'The language for the the report',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/global-accounts',
				qs: {
					languageCode: '={{$parameter["FinanceGlobal-accountsGet_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'FinanceGlobal-accountsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGlobal-accountsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/global-accounts',
				qs: {
					pageNumber: '={{$parameter["FinanceGlobal-accountsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'FinanceGlobal-accountsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGlobal-accountsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/global-accounts',
				qs: {
					pageSize: '={{$parameter["FinanceGlobal-accountsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'FinanceGuest-accountsGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGuest-accountsGet'],
			},
		},
		default: '',
		description: 'Filter account list by property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/guest-accounts',
				qs: {
					propertyId: '={{$parameter["FinanceGuest-accountsGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'ReservationId',
		name: 'FinanceGuest-accountsGet_reservationId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGuest-accountsGet'],
			},
		},
		default: '',
		description: 'Filter account list by reservation ID',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/guest-accounts',
				qs: {
					reservationId: '={{$parameter["FinanceGuest-accountsGet_reservationId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Parent',
		name: 'FinanceGuest-accountsGet_parent',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGuest-accountsGet'],
			},
		},
		default: '',
		description: 'Filter account list by the parent account\'s number',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/guest-accounts',
				qs: {
					parent: '={{$parameter["FinanceGuest-accountsGet_parent"]}}',
				},
			},
		},
	},
	{
		displayName: 'LanguageCode',
		name: 'FinanceGuest-accountsGet_languageCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGuest-accountsGet'],
			},
		},
		default: '',
		description: 'The language for the the report',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/guest-accounts',
				qs: {
					languageCode: '={{$parameter["FinanceGuest-accountsGet_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'FinanceGuest-accountsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGuest-accountsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/guest-accounts',
				qs: {
					pageNumber: '={{$parameter["FinanceGuest-accountsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'FinanceGuest-accountsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGuest-accountsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/guest-accounts',
				qs: {
					pageSize: '={{$parameter["FinanceGuest-accountsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'FinanceExternal-accountsGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceExternal-accountsGet'],
			},
		},
		default: '',
		description: 'Filter account list by property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/external-accounts',
				qs: {
					propertyId: '={{$parameter["FinanceExternal-accountsGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'FolioId',
		name: 'FinanceExternal-accountsGet_folioId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceExternal-accountsGet'],
			},
		},
		default: '',
		description: 'Filter account list by folio ID',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/external-accounts',
				qs: {
					folioId: '={{$parameter["FinanceExternal-accountsGet_folioId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Parent',
		name: 'FinanceExternal-accountsGet_parent',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceExternal-accountsGet'],
			},
		},
		default: '',
		description: 'Filter account list by the parent account\'s number',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/external-accounts',
				qs: {
					parent: '={{$parameter["FinanceExternal-accountsGet_parent"]}}',
				},
			},
		},
	},
	{
		displayName: 'LanguageCode',
		name: 'FinanceExternal-accountsGet_languageCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceExternal-accountsGet'],
			},
		},
		default: '',
		description: 'The language for the the report',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/external-accounts',
				qs: {
					languageCode: '={{$parameter["FinanceExternal-accountsGet_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'FinanceExternal-accountsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceExternal-accountsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/external-accounts',
				qs: {
					pageNumber: '={{$parameter["FinanceExternal-accountsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'FinanceExternal-accountsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceExternal-accountsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/external-accounts',
				qs: {
					pageSize: '={{$parameter["FinanceExternal-accountsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Number',
		name: 'FinanceAccountsByNumberGet_number',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsByNumberGet'],
			},
		},
		default: '',
		description: 'The account number',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/={{$parameter["FinanceAccountsByNumberGet_number"]}}',
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'FinanceAccountsByNumberGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsByNumberGet'],
			},
		},
		default: '',
		description: 'Specifies the property the account is in',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/{number}',
				qs: {
					propertyId: '={{$parameter["FinanceAccountsByNumberGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'TransactionLimit',
		name: 'FinanceAccountsByNumberGet_transactionLimit',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsByNumberGet'],
			},
		},
		default: '',
		description: 'Limit how many transactions should be included in the view (between 0 and 50, defaults to 0)',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/{number}',
				qs: {
					transactionLimit: '={{$parameter["FinanceAccountsByNumberGet_transactionLimit"]}}',
				},
			},
		},
	},
	{
		displayName: 'IncludeArchived',
		name: 'FinanceAccountsByNumberGet_includeArchived',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsByNumberGet'],
			},
		},
		default: false,
		description: 'If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/{number}',
				qs: {
					includeArchived: '={{$parameter["FinanceAccountsByNumberGet_includeArchived"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountingSchema',
		name: 'FinanceAccountsByNumberGet_accountingSchema',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsByNumberGet'],
			},
		},
		default: 'Extended',
		description:
			'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/{number}',
				qs: {
					accountingSchema: '={{$parameter["FinanceAccountsByNumberGet_accountingSchema"]}}',
				},
			},
		},
		options: [
			{
				name: 'Extended',
				value: 'Extended',
			},
			{
				name: 'Simple',
				value: 'Simple',
			},
		],
	},
	{
		displayName: 'LanguageCode',
		name: 'FinanceAccountsByNumberGet_languageCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsByNumberGet'],
			},
		},
		default: '',
		description: 'The language for the the report',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/{number}',
				qs: {
					languageCode: '={{$parameter["FinanceAccountsByNumberGet_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'FinanceAccountsChild-accountsGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsChild-accountsGet'],
			},
		},
		default: '',
		description: 'Filter account list by property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/child-accounts',
				qs: {
					propertyId: '={{$parameter["FinanceAccountsChild-accountsGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Parent',
		name: 'FinanceAccountsChild-accountsGet_parent',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsChild-accountsGet'],
			},
		},
		default: '',
		description: 'Filter account list by the parent account\'s number',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/child-accounts',
				qs: {
					parent: '={{$parameter["FinanceAccountsChild-accountsGet_parent"]}}',
				},
			},
		},
	},
	{
		displayName: 'LanguageCode',
		name: 'FinanceAccountsChild-accountsGet_languageCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsChild-accountsGet'],
			},
		},
		default: '',
		description: 'The language for the the report',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/child-accounts',
				qs: {
					languageCode: '={{$parameter["FinanceAccountsChild-accountsGet_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'AccountingSchema',
		name: 'FinanceAccountsChild-accountsGet_accountingSchema',
		type: 'options',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsChild-accountsGet'],
			},
		},
		default: 'Extended',
		description: 'Allows to override the default accounting schema',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/child-accounts',
				qs: {
					accountingSchema: '={{$parameter["FinanceAccountsChild-accountsGet_accountingSchema"]}}',
				},
			},
		},
		options: [
			{
				name: 'Extended',
				value: 'Extended',
			},
			{
				name: 'Simple',
				value: 'Simple',
			},
		],
	},
	{
		displayName: 'IncludeArchived',
		name: 'FinanceAccountsChild-accountsGet_includeArchived',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsChild-accountsGet'],
			},
		},
		default: false,
		description: 'If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/child-accounts',
				qs: {
					includeArchived: '={{$parameter["FinanceAccountsChild-accountsGet_includeArchived"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'FinanceAccountsChild-accountsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsChild-accountsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/child-accounts',
				qs: {
					pageNumber: '={{$parameter["FinanceAccountsChild-accountsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'FinanceAccountsChild-accountsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsChild-accountsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/child-accounts',
				qs: {
					pageSize: '={{$parameter["FinanceAccountsChild-accountsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'IsoCountryCode',
		name: 'FinanceTypesVatGet_isoCountryCode',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Types'],
				operation: ['FinanceTypesVatGet'],
			},
		},
		default: '',
		description: 'The 2-letter ISO country code',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/types/vat',
				qs: {
					isoCountryCode: '={{$parameter["FinanceTypesVatGet_isoCountryCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'AtDate',
		name: 'FinanceTypesVatGet_atDate',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Types'],
				operation: ['FinanceTypesVatGet'],
			},
		},
		default: '',
		description: 'If specified, returns the VAT types that are effective for this specific date. If nothing specified, returns the VAT types that are effective for the current date in UTC timezone.',
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/types/vat',
				qs: {
					atDate: '={{$parameter["FinanceTypesVatGet_atDate"]}}',
				},
			},
		},
	},
	{
		displayName: 'Status',
		name: 'InventoryPropertiesGet_status',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesGet'],
			},
		},
		default: {},
		description: 'Filter result by property status',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/properties',
				qs: {
					status: '={{$parameter["InventoryPropertiesGet_status"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'statusValues',
				displayName: 'Status',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by property status',
					},
				],
			},
		],
	},
	{
		displayName: 'IncludeArchived',
		name: 'InventoryPropertiesGet_includeArchived',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesGet'],
			},
		},
		default: false,
		description: 'Include archived properties in the result. If not set, or set to false, it only returns non-archived properties.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/properties',
				qs: {
					includeArchived: '={{$parameter["InventoryPropertiesGet_includeArchived"]}}',
				},
			},
		},
	},
	{
		displayName: 'CountryCode',
		name: 'InventoryPropertiesGet_countryCode',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesGet'],
			},
		},
		default: {},
		description: 'Filter result by country code',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/properties',
				qs: {
					countryCode: '={{$parameter["InventoryPropertiesGet_countryCode"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'countryCodeValues',
				displayName: 'CountryCode',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by country code',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'InventoryPropertiesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/properties',
				qs: {
					pageNumber: '={{$parameter["InventoryPropertiesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'InventoryPropertiesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/properties',
				qs: {
					pageSize: '={{$parameter["InventoryPropertiesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'InventoryPropertiesGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/properties',
				qs: {
					expand: '={{$parameter["InventoryPropertiesGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'Body',
		name: 'InventoryPropertiesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesPost'],
			},
		},
		default:
			'{\n  "code": "MUC",\n  "name": {\n    "en": "Demo Hotel Munich",\n    "de": "Demo Hotel München"\n  },\n  "companyName": "Hotel Münchner GmbH",\n  "managingDirectors": "Franz-Josef Gruber",\n  "commercialRegisterEntry": "Amtsgericht München, HRB 279336",\n  "taxId": "DE311053702",\n  "description": {\n    "en": "This is the demo hotel Munich",\n    "de": "Dies ist das Demo Hotel München"\n  },\n  "location": {\n    "addressLine1": "Marienplatz 1",\n    "postalCode": "80331",\n    "city": "München",\n    "countryCode": "DE"\n  },\n  "bankAccount": {\n    "iban": "DE44 5001 0517 5407 3249 31",\n    "bic": "SSKMDEMMXXX",\n    "bank": "Stadtsparkasse München"\n  },\n  "paymentTerms": {\n    "en": "Pay on checkout",\n    "de": "Zahlung bei Checkout"\n  },\n  "timeZone": "Europe/Berlin",\n  "defaultCheckInTime": "17:00:00",\n  "defaultCheckOutTime": "11:00:00",\n  "currencyCode": "EUR"\n}',
		description: 'The definition of the property',
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/properties',
				body: '={{JSON.parse($parameter["InventoryPropertiesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'InventoryPropertiesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/properties',
				headers: {
					'Idempotency-Key': '={{$parameter["InventoryPropertiesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'InventoryPropertiesByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the property',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/properties/={{$parameter["InventoryPropertiesByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Languages',
		name: 'InventoryPropertiesByIdGet_languages',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesByIdGet'],
			},
		},
		default: {},
		description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/properties/{id}',
				qs: {
					languages: '={{$parameter["InventoryPropertiesByIdGet_languages"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'languagesValues',
				displayName: 'Languages',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
					},
				],
			},
		],
	},
	{
		displayName: 'Expand',
		name: 'InventoryPropertiesByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/properties/{id}',
				qs: {
					expand: '={{$parameter["InventoryPropertiesByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'InventoryPropertiesByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the property',
		routing: {
			request: {
				method: 'PATCH',
				url: '/inventory/v1/properties/={{$parameter["InventoryPropertiesByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'InventoryPropertiesByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/inventory/v1/properties/{id}',
				body: '={{JSON.parse($parameter["InventoryPropertiesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'InventoryUnitsByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the unit',
		routing: {
			request: {
				method: 'PATCH',
				url: '/inventory/v1/units/={{$parameter["InventoryUnitsByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'InventoryUnitsByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/inventory/v1/units/{id}',
				body: '={{JSON.parse($parameter["InventoryUnitsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'InventoryUnitsByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the unit',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/={{$parameter["InventoryUnitsByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Languages',
		name: 'InventoryUnitsByIdGet_languages',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsByIdGet'],
			},
		},
		default: {},
		description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/{id}',
				qs: {
					languages: '={{$parameter["InventoryUnitsByIdGet_languages"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'languagesValues',
				displayName: 'Languages',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
					},
				],
			},
		],
	},
	{
		displayName: 'Expand',
		name: 'InventoryUnitsByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/{id}',
				qs: {
					expand: '={{$parameter["InventoryUnitsByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'InventoryUnitsByIdHead_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsByIdHead'],
			},
		},
		default: '',
		description: 'The ID of the unit',
		routing: {
			request: {
				method: 'HEAD',
				url: '/inventory/v1/units/={{$parameter["InventoryUnitsByIdHead_id"]}}',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'InventoryUnitsByIdDelete_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsByIdDelete'],
			},
		},
		default: '',
		description: 'The ID of the unit',
		routing: {
			request: {
				method: 'DELETE',
				url: '/inventory/v1/units/={{$parameter["InventoryUnitsByIdDelete_id"]}}',
			},
		},
	},
	{
		displayName: 'UnitIds',
		name: 'InventoryUnitsPatch_unitIds',
		type: 'fixedCollection',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsPatch'],
			},
		},
		default: {},
		description: 'The unitIds parameter',
		routing: {
			request: {
				method: 'PATCH',
				url: '/inventory/v1/units',
				qs: {
					unitIds: '={{$parameter["InventoryUnitsPatch_unitIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitIdsValues',
				displayName: 'UnitIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The unitIds value',
					},
				],
			},
		],
	},
	{
		displayName: 'Body',
		name: 'InventoryUnitsPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/inventory/v1/units',
				body: '={{JSON.parse($parameter["InventoryUnitsPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'InventoryUnitsGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		default: '',
		description: 'Return units for specific property',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units',
				qs: {
					propertyId: '={{$parameter["InventoryUnitsGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'UnitGroupId',
		name: 'InventoryUnitsGet_unitGroupId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		default: '',
		description: 'Return units for the specific unit group - <b>DEPRECATED: This property will be removed 20.04.2022. Use `UnitGroupIds` instead</b>.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units',
				qs: {
					unitGroupId: '={{$parameter["InventoryUnitsGet_unitGroupId"]}}',
				},
			},
		},
	},
	{
		displayName: 'UnitGroupIds',
		name: 'InventoryUnitsGet_unitGroupIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		default: {},
		description: 'Return units with the specific unit groups',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units',
				qs: {
					unitGroupIds: '={{$parameter["InventoryUnitsGet_unitGroupIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupIdsValues',
				displayName: 'UnitGroupIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return units with the specific unit groups',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitAttributeIds',
		name: 'InventoryUnitsGet_unitAttributeIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		default: {},
		description: 'Return units with the specific unit attributes',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units',
				qs: {
					unitAttributeIds: '={{$parameter["InventoryUnitsGet_unitAttributeIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitAttributeIdsValues',
				displayName: 'UnitAttributeIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return units with the specific unit attributes',
					},
				],
			},
		],
	},
	{
		displayName: 'IsOccupied',
		name: 'InventoryUnitsGet_isOccupied',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		default: false,
		description: 'Return only occupied or vacant units',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units',
				qs: {
					isOccupied: '={{$parameter["InventoryUnitsGet_isOccupied"]}}',
				},
			},
		},
	},
	{
		displayName: 'MaintenanceType',
		name: 'InventoryUnitsGet_maintenanceType',
		type: 'options',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		default: 'OutOfInventory',
		description: 'Return units with the specific maintenance type',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units',
				qs: {
					maintenanceType: '={{$parameter["InventoryUnitsGet_maintenanceType"]}}',
				},
			},
		},
		options: [
			{
				name: 'OutOfInventory',
				value: 'OutOfInventory',
			},
			{
				name: 'OutOfOrder',
				value: 'OutOfOrder',
			},
			{
				name: 'OutOfService',
				value: 'OutOfService',
			},
		],
	},
	{
		displayName: 'Condition',
		name: 'InventoryUnitsGet_condition',
		type: 'options',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		default: 'Clean',
		description: 'Return units with a specific condition',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units',
				qs: {
					condition: '={{$parameter["InventoryUnitsGet_condition"]}}',
				},
			},
		},
		options: [
			{
				name: 'Clean',
				value: 'Clean',
			},
			{
				name: 'CleanToBeInspected',
				value: 'CleanToBeInspected',
			},
			{
				name: 'Dirty',
				value: 'Dirty',
			},
		],
	},
	{
		displayName: 'TextSearch',
		name: 'InventoryUnitsGet_textSearch',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		default: '',
		description:
			'This will filter all units where the provided text is contained in the unit name. The search is case insensitive.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units',
				qs: {
					textSearch: '={{$parameter["InventoryUnitsGet_textSearch"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'InventoryUnitsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units',
				qs: {
					pageNumber: '={{$parameter["InventoryUnitsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'InventoryUnitsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units',
				qs: {
					pageSize: '={{$parameter["InventoryUnitsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'InventoryUnitsGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units',
				qs: {
					expand: '={{$parameter["InventoryUnitsGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'Body',
		name: 'InventoryUnitsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsPost'],
			},
		},
		default:
			'{\n  "propertyId": "MUC",\n  "name": "S.102",\n  "description": {\n    "en": "Suite room",\n    "de": "Suite Zimmer"\n  },\n  "unitGroupId": "MUC-SUI",\n  "maxPersons": 3,\n  "condition": "Clean",\n  "attributes": [],\n  "connectedUnits": [\n    {\n      "unitId": "MUC-MTA"\n    },\n    {\n      "unitId": "MUC-JQI"\n    }\n  ]\n}',
		description: 'The definition of the unit',
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/units',
				body: '={{JSON.parse($parameter["InventoryUnitsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'InventoryUnitsPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/units',
				headers: {
					'Idempotency-Key': '={{$parameter["InventoryUnitsPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'InventoryUnits$countGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnits$countGet'],
			},
		},
		default: '',
		description: 'Return units for specific property',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/$count',
				qs: {
					propertyId: '={{$parameter["InventoryUnits$countGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'UnitGroupId',
		name: 'InventoryUnits$countGet_unitGroupId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnits$countGet'],
			},
		},
		default: '',
		description: 'Return units for the specific unit group - <b>DEPRECATED: This property will be removed 20.04.2022. Use `UnitGroupIds` instead</b>.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/$count',
				qs: {
					unitGroupId: '={{$parameter["InventoryUnits$countGet_unitGroupId"]}}',
				},
			},
		},
	},
	{
		displayName: 'UnitGroupIds',
		name: 'InventoryUnits$countGet_unitGroupIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnits$countGet'],
			},
		},
		default: {},
		description: 'Return units with the specific unit groups',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/$count',
				qs: {
					unitGroupIds: '={{$parameter["InventoryUnits$countGet_unitGroupIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupIdsValues',
				displayName: 'UnitGroupIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return units with the specific unit groups',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitAttributeIds',
		name: 'InventoryUnits$countGet_unitAttributeIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnits$countGet'],
			},
		},
		default: {},
		description: 'Return units with the specific unit attributes',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/$count',
				qs: {
					unitAttributeIds: '={{$parameter["InventoryUnits$countGet_unitAttributeIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitAttributeIdsValues',
				displayName: 'UnitAttributeIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return units with the specific unit attributes',
					},
				],
			},
		],
	},
	{
		displayName: 'IsOccupied',
		name: 'InventoryUnits$countGet_isOccupied',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnits$countGet'],
			},
		},
		default: false,
		description: 'Return only occupied or vacant units',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/$count',
				qs: {
					isOccupied: '={{$parameter["InventoryUnits$countGet_isOccupied"]}}',
				},
			},
		},
	},
	{
		displayName: 'MaintenanceType',
		name: 'InventoryUnits$countGet_maintenanceType',
		type: 'options',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnits$countGet'],
			},
		},
		default: 'OutOfInventory',
		description: 'Return units with the specific maintenance type',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/$count',
				qs: {
					maintenanceType: '={{$parameter["InventoryUnits$countGet_maintenanceType"]}}',
				},
			},
		},
		options: [
			{
				name: 'OutOfInventory',
				value: 'OutOfInventory',
			},
			{
				name: 'OutOfOrder',
				value: 'OutOfOrder',
			},
			{
				name: 'OutOfService',
				value: 'OutOfService',
			},
		],
	},
	{
		displayName: 'Condition',
		name: 'InventoryUnits$countGet_condition',
		type: 'options',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnits$countGet'],
			},
		},
		default: 'Clean',
		description: 'Return units with a specific condition',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/$count',
				qs: {
					condition: '={{$parameter["InventoryUnits$countGet_condition"]}}',
				},
			},
		},
		options: [
			{
				name: 'Clean',
				value: 'Clean',
			},
			{
				name: 'CleanToBeInspected',
				value: 'CleanToBeInspected',
			},
			{
				name: 'Dirty',
				value: 'Dirty',
			},
		],
	},
	{
		displayName: 'TextSearch',
		name: 'InventoryUnits$countGet_textSearch',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnits$countGet'],
			},
		},
		default: '',
		description:
			'This will filter all units where the provided text is contained in the unit name. The search is case insensitive.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/$count',
				qs: {
					textSearch: '={{$parameter["InventoryUnits$countGet_textSearch"]}}',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'InventoryUnitsBulkPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsBulkPost'],
			},
		},
		default:
			'{\n  "units": [\n    {\n      "propertyId": "MUC",\n      "name": "A.201",\n      "description": {\n        "en": "Single room",\n        "de": "Einzelzimmer"\n      },\n      "unitGroupId": "MUC-SGL",\n      "maxPersons": 1,\n      "condition": "Clean",\n      "attributes": [],\n      "connectedUnits": []\n    },\n    {\n      "propertyId": "MUC",\n      "name": "A.103",\n      "description": {\n        "en": "Double room",\n        "de": "Doppelzimmer"\n      },\n      "unitGroupId": "MUC-DBL",\n      "maxPersons": 2,\n      "condition": "Clean",\n      "attributes": [],\n      "connectedUnits": []\n    },\n    {\n      "propertyId": "MUC",\n      "name": "S.102",\n      "description": {\n        "en": "Suite room",\n        "de": "Suite Zimmer"\n      },\n      "unitGroupId": "MUC-SUI",\n      "maxPersons": 3,\n      "condition": "Clean",\n      "attributes": [],\n      "connectedUnits": [\n        {\n          "unitId": "MUC-MTA"\n        },\n        {\n          "unitId": "MUC-JQI"\n        }\n      ]\n    }\n  ]\n}',
		description: 'The definition of the units',
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/units/bulk',
				body: '={{JSON.parse($parameter["InventoryUnitsBulkPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'InventoryUnitsBulkPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsBulkPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/units/bulk',
				headers: {
					'Idempotency-Key': '={{$parameter["InventoryUnitsBulkPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'InventoryUnit-attributesByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the unit attribute',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-attributes/={{$parameter["InventoryUnit-attributesByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'InventoryUnit-attributesByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesByIdPatch'],
			},
		},
		default: '',
		description: 'ID of unit attribute',
		routing: {
			request: {
				method: 'PATCH',
				url: '/inventory/v1/unit-attributes/={{$parameter["InventoryUnit-attributesByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'InventoryUnit-attributesByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/inventory/v1/unit-attributes/{id}',
				body: '={{JSON.parse($parameter["InventoryUnit-attributesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'InventoryUnit-attributesByIdHead_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesByIdHead'],
			},
		},
		default: '',
		description: 'The ID of the unit attribute',
		routing: {
			request: {
				method: 'HEAD',
				url: '/inventory/v1/unit-attributes/={{$parameter["InventoryUnit-attributesByIdHead_id"]}}',
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'InventoryUnit-attributesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-attributes',
				qs: {
					pageNumber: '={{$parameter["InventoryUnit-attributesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'InventoryUnit-attributesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-attributes',
				qs: {
					pageSize: '={{$parameter["InventoryUnit-attributesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'InventoryUnit-attributesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesPost'],
			},
		},
		default: '{\n  "name": "Floor 1",\n  "description": "Floor number"\n}',
		description: 'The unit attribute',
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/unit-attributes',
				body: '={{JSON.parse($parameter["InventoryUnit-attributesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'InventoryUnit-attributesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/unit-attributes',
				headers: {
					'Idempotency-Key': '={{$parameter["InventoryUnit-attributesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'InventoryUnit-groupsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsPost'],
			},
		},
		default:
			'{\n  "code": "DBL",\n  "propertyId": "MUC",\n  "name": {\n    "en": "Double Room",\n    "de": "Doppelzimmer"\n  },\n  "description": {\n    "en": "This is a nice room with as kingsize bed and flat screen",\n    "de": "Dies ist ein schönes Zimmer mit Kingsize-Bett und Flachbildschirm"\n  },\n  "maxPersons": 4,\n  "rank": 1,\n  "type": "BedRoom"\n}',
		description: 'The definition of the unit group',
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/unit-groups',
				body: '={{JSON.parse($parameter["InventoryUnit-groupsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'InventoryUnit-groupsPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/unit-groups',
				headers: {
					'Idempotency-Key': '={{$parameter["InventoryUnit-groupsPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'InventoryUnit-groupsGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsGet'],
			},
		},
		default: '',
		description: 'Return unit groups for specific property',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups',
				qs: {
					propertyId: '={{$parameter["InventoryUnit-groupsGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'UnitGroupTypes',
		name: 'InventoryUnit-groupsGet_unitGroupTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsGet'],
			},
		},
		default: {},
		description: 'The unitGroupTypes parameter',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups',
				qs: {
					unitGroupTypes: '={{$parameter["InventoryUnit-groupsGet_unitGroupTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupTypesValues',
				displayName: 'UnitGroupTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The unitGroupTypes value',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'InventoryUnit-groupsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups',
				qs: {
					pageNumber: '={{$parameter["InventoryUnit-groupsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'InventoryUnit-groupsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups',
				qs: {
					pageSize: '={{$parameter["InventoryUnit-groupsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'InventoryUnit-groupsGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups',
				qs: {
					expand: '={{$parameter["InventoryUnit-groupsGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyId',
		name: 'InventoryUnit-groups$countGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groups$countGet'],
			},
		},
		default: '',
		description: 'Return unit groups for specific property',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups/$count',
				qs: {
					propertyId: '={{$parameter["InventoryUnit-groups$countGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'UnitGroupTypes',
		name: 'InventoryUnit-groups$countGet_unitGroupTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groups$countGet'],
			},
		},
		default: {},
		description: 'The unitGroupTypes parameter',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups/$count',
				qs: {
					unitGroupTypes: '={{$parameter["InventoryUnit-groups$countGet_unitGroupTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupTypesValues',
				displayName: 'UnitGroupTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The unitGroupTypes value',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'InventoryUnit-groupsByIdHead_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsByIdHead'],
			},
		},
		default: '',
		description: 'The ID of the unit group',
		routing: {
			request: {
				method: 'HEAD',
				url: '/inventory/v1/unit-groups/={{$parameter["InventoryUnit-groupsByIdHead_id"]}}',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'InventoryUnit-groupsByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the unit group',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups/={{$parameter["InventoryUnit-groupsByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Languages',
		name: 'InventoryUnit-groupsByIdGet_languages',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsByIdGet'],
			},
		},
		default: {},
		description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups/{id}',
				qs: {
					languages: '={{$parameter["InventoryUnit-groupsByIdGet_languages"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'languagesValues',
				displayName: 'Languages',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
					},
				],
			},
		],
	},
	{
		displayName: 'Expand',
		name: 'InventoryUnit-groupsByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups/{id}',
				qs: {
					expand: '={{$parameter["InventoryUnit-groupsByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'InventoryUnit-groupsByIdPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsByIdPut'],
			},
		},
		default: '',
		description: 'The ID of the unit group',
		routing: {
			request: {
				method: 'PUT',
				url: '/inventory/v1/unit-groups/={{$parameter["InventoryUnit-groupsByIdPut_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'InventoryUnit-groupsByIdPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsByIdPut'],
			},
		},
		default:
			'{\n  "name": {\n    "en": "Double Room",\n    "de": "Doppelzimmer"\n  },\n  "description": {\n    "en": "This is a nice room with as kingsize bed and flat screen",\n    "de": "Dies ist ein schönes Zimmer mit Kingsize-Bett und Flachbildschirm"\n  },\n  "maxPersons": 4,\n  "rank": 2\n}',
		description: 'The definition of the unit group',
		routing: {
			request: {
				method: 'PUT',
				url: '/inventory/v1/unit-groups/{id}',
				body: '={{JSON.parse($parameter["InventoryUnit-groupsByIdPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ReservationIds',
		name: 'LogsBookingReservationGet_reservationIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['BookingLogs'],
				operation: ['LogsBookingReservationGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by reservation IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/booking/reservation',
				qs: {
					reservationIds: '={{$parameter["LogsBookingReservationGet_reservationIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'reservationIdsValues',
				displayName: 'ReservationIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by reservation IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'EventTypes',
		name: 'LogsBookingReservationGet_eventTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['BookingLogs'],
				operation: ['LogsBookingReservationGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by event types',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/booking/reservation',
				qs: {
					eventTypes: '={{$parameter["LogsBookingReservationGet_eventTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'eventTypesValues',
				displayName: 'EventTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by event types',
					},
				],
			},
		],
	},
	{
		displayName: 'ClientIds',
		name: 'LogsBookingReservationGet_clientIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['BookingLogs'],
				operation: ['LogsBookingReservationGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by client IDs (which application triggered this event)',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/booking/reservation',
				qs: {
					clientIds: '={{$parameter["LogsBookingReservationGet_clientIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'clientIdsValues',
				displayName: 'ClientIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'Filter the log entries by client IDs (which application triggered this event)',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyIds',
		name: 'LogsBookingReservationGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['BookingLogs'],
				operation: ['LogsBookingReservationGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by property IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/booking/reservation',
				qs: {
					propertyIds: '={{$parameter["LogsBookingReservationGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by property IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'SubjectIds',
		name: 'LogsBookingReservationGet_subjectIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['BookingLogs'],
				operation: ['LogsBookingReservationGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by subject IDs (which user triggered this event)',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/booking/reservation',
				qs: {
					subjectIds: '={{$parameter["LogsBookingReservationGet_subjectIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'subjectIdsValues',
				displayName: 'SubjectIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by subject IDs (which user triggered this event)',
					},
				],
			},
		],
	},
	{
		displayName: 'DateFilter',
		name: 'LogsBookingReservationGet_dateFilter',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['BookingLogs'],
				operation: ['LogsBookingReservationGet'],
			},
		},
		default: {},
		description: 'Filter by event date and timeYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/booking/reservation',
				qs: {
					dateFilter: '={{$parameter["LogsBookingReservationGet_dateFilter"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'dateFilterValues',
				displayName: 'DateFilter',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter by event date and timeYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'LogsBookingReservationGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['BookingLogs'],
				operation: ['LogsBookingReservationGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/booking/reservation',
				qs: {
					pageNumber: '={{$parameter["LogsBookingReservationGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'LogsBookingReservationGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['BookingLogs'],
				operation: ['LogsBookingReservationGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/booking/reservation',
				qs: {
					pageSize: '={{$parameter["LogsBookingReservationGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'LogsBookingReservationGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['BookingLogs'],
				operation: ['LogsBookingReservationGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: changes. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/booking/reservation',
				qs: {
					expand: '={{$parameter["LogsBookingReservationGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: changes. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'FolioIds',
		name: 'LogsFinanceFolioGet_folioIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceFolioGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by folio IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/folio',
				qs: {
					folioIds: '={{$parameter["LogsFinanceFolioGet_folioIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'folioIdsValues',
				displayName: 'FolioIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by folio IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'EventTypes',
		name: 'LogsFinanceFolioGet_eventTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceFolioGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by event types',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/folio',
				qs: {
					eventTypes: '={{$parameter["LogsFinanceFolioGet_eventTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'eventTypesValues',
				displayName: 'EventTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by event types',
					},
				],
			},
		],
	},
	{
		displayName: 'ClientIds',
		name: 'LogsFinanceFolioGet_clientIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceFolioGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by client IDs (which application triggered this event)',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/folio',
				qs: {
					clientIds: '={{$parameter["LogsFinanceFolioGet_clientIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'clientIdsValues',
				displayName: 'ClientIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'Filter the log entries by client IDs (which application triggered this event)',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyIds',
		name: 'LogsFinanceFolioGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceFolioGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by property IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/folio',
				qs: {
					propertyIds: '={{$parameter["LogsFinanceFolioGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by property IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'SubjectIds',
		name: 'LogsFinanceFolioGet_subjectIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceFolioGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by subject IDs (which user triggered this event)',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/folio',
				qs: {
					subjectIds: '={{$parameter["LogsFinanceFolioGet_subjectIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'subjectIdsValues',
				displayName: 'SubjectIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by subject IDs (which user triggered this event)',
					},
				],
			},
		],
	},
	{
		displayName: 'DateFilter',
		name: 'LogsFinanceFolioGet_dateFilter',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceFolioGet'],
			},
		},
		default: {},
		description: 'Filter by event date and timeYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/folio',
				qs: {
					dateFilter: '={{$parameter["LogsFinanceFolioGet_dateFilter"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'dateFilterValues',
				displayName: 'DateFilter',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter by event date and timeYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'LogsFinanceFolioGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceFolioGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/folio',
				qs: {
					pageNumber: '={{$parameter["LogsFinanceFolioGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'LogsFinanceFolioGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceFolioGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/folio',
				qs: {
					pageSize: '={{$parameter["LogsFinanceFolioGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Statuses',
		name: 'LogsFinanceNight-auditGet_statuses',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceNight-auditGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by status',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/night-audit',
				qs: {
					statuses: '={{$parameter["LogsFinanceNight-auditGet_statuses"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'statusesValues',
				displayName: 'Statuses',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by status',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyIds',
		name: 'LogsFinanceNight-auditGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceNight-auditGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by property IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/night-audit',
				qs: {
					propertyIds: '={{$parameter["LogsFinanceNight-auditGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by property IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'SubjectIds',
		name: 'LogsFinanceNight-auditGet_subjectIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceNight-auditGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by subject IDs (which user triggered this event)',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/night-audit',
				qs: {
					subjectIds: '={{$parameter["LogsFinanceNight-auditGet_subjectIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'subjectIdsValues',
				displayName: 'SubjectIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by subject IDs (which user triggered this event)',
					},
				],
			},
		],
	},
	{
		displayName: 'DateFilter',
		name: 'LogsFinanceNight-auditGet_dateFilter',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceNight-auditGet'],
			},
		},
		default: {},
		description: 'Filter by event date and timeYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/night-audit',
				qs: {
					dateFilter: '={{$parameter["LogsFinanceNight-auditGet_dateFilter"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'dateFilterValues',
				displayName: 'DateFilter',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter by event date and timeYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'LogsFinanceNight-auditGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceNight-auditGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/night-audit',
				qs: {
					pageNumber: '={{$parameter["LogsFinanceNight-auditGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'LogsFinanceNight-auditGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceNight-auditGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/night-audit',
				qs: {
					pageSize: '={{$parameter["LogsFinanceNight-auditGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Types',
		name: 'LogsFinanceTransactions-exportGet_types',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceTransactions-exportGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by export log types',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/transactions-export',
				qs: {
					types: '={{$parameter["LogsFinanceTransactions-exportGet_types"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'typesValues',
				displayName: 'Types',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by export log types',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyIds',
		name: 'LogsFinanceTransactions-exportGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceTransactions-exportGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by property IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/transactions-export',
				qs: {
					propertyIds: '={{$parameter["LogsFinanceTransactions-exportGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by property IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'SubjectIds',
		name: 'LogsFinanceTransactions-exportGet_subjectIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceTransactions-exportGet'],
			},
		},
		default: {},
		description: 'Filter the log entries by subject IDs (which user triggered this event)',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/transactions-export',
				qs: {
					subjectIds: '={{$parameter["LogsFinanceTransactions-exportGet_subjectIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'subjectIdsValues',
				displayName: 'SubjectIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter the log entries by subject IDs (which user triggered this event)',
					},
				],
			},
		],
	},
	{
		displayName: 'DateFilter',
		name: 'LogsFinanceTransactions-exportGet_dateFilter',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceTransactions-exportGet'],
			},
		},
		default: {},
		description: 'Filter by event date and timeYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/transactions-export',
				qs: {
					dateFilter: '={{$parameter["LogsFinanceTransactions-exportGet_dateFilter"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'dateFilterValues',
				displayName: 'DateFilter',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter by event date and timeYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'LogsFinanceTransactions-exportGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceTransactions-exportGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/transactions-export',
				qs: {
					pageNumber: '={{$parameter["LogsFinanceTransactions-exportGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'LogsFinanceTransactions-exportGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceTransactions-exportGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/transactions-export',
				qs: {
					pageSize: '={{$parameter["LogsFinanceTransactions-exportGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'OperationsMaintenancesGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesGet'],
			},
		},
		default: '',
		description: 'Filter result by property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances',
				qs: {
					propertyId: '={{$parameter["OperationsMaintenancesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'UnitId',
		name: 'OperationsMaintenancesGet_unitId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesGet'],
			},
		},
		default: '',
		description: 'Filter result by unit ID',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances',
				qs: {
					unitId: '={{$parameter["OperationsMaintenancesGet_unitId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'OperationsMaintenancesGet_from',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesGet'],
			},
		},
		default: '',
		description: 'Filter all maintenance windows that end after the specified date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances',
				qs: {
					from: '={{$parameter["OperationsMaintenancesGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'OperationsMaintenancesGet_to',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesGet'],
			},
		},
		default: '',
		description: 'Filter all maintenance windows that start before the specified date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances',
				qs: {
					to: '={{$parameter["OperationsMaintenancesGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'Types',
		name: 'OperationsMaintenancesGet_types',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesGet'],
			},
		},
		default: {},
		description: 'Filter result by maintenance types',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances',
				qs: {
					types: '={{$parameter["OperationsMaintenancesGet_types"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'typesValues',
				displayName: 'Types',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by maintenance types',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'OperationsMaintenancesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances',
				qs: {
					pageNumber: '={{$parameter["OperationsMaintenancesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'OperationsMaintenancesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances',
				qs: {
					pageSize: '={{$parameter["OperationsMaintenancesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'OperationsMaintenancesGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: unit. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances',
				qs: {
					expand: '={{$parameter["OperationsMaintenancesGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: unit. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'Body',
		name: 'OperationsMaintenancesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesPost'],
			},
		},
		default:
			'{\n  "unitId": "MUC-JQI",\n  "from": "2025-08-19T12:27:45+02:00",\n  "to": "2025-08-21T12:27:45+02:00",\n  "type": "OutOfService",\n  "description": "The remote control for the TV needs to be replaced."\n}',
		description: 'The definition of the maintenance',
		routing: {
			request: {
				method: 'POST',
				url: '/operations/v1/maintenances',
				body: '={{JSON.parse($parameter["OperationsMaintenancesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'OperationsMaintenancesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/operations/v1/maintenances',
				headers: {
					'Idempotency-Key': '={{$parameter["OperationsMaintenancesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'OperationsMaintenances$countGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenances$countGet'],
			},
		},
		default: '',
		description: 'Filter result by property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances/$count',
				qs: {
					propertyId: '={{$parameter["OperationsMaintenances$countGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'UnitId',
		name: 'OperationsMaintenances$countGet_unitId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenances$countGet'],
			},
		},
		default: '',
		description: 'Filter result by unit ID',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances/$count',
				qs: {
					unitId: '={{$parameter["OperationsMaintenances$countGet_unitId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'OperationsMaintenances$countGet_from',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenances$countGet'],
			},
		},
		default: '',
		description: 'Filter all maintenance windows that end after the specified date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances/$count',
				qs: {
					from: '={{$parameter["OperationsMaintenances$countGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'OperationsMaintenances$countGet_to',
		type: 'dateTime',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenances$countGet'],
			},
		},
		default: '',
		description: 'Filter all maintenance windows that start before the specified date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances/$count',
				qs: {
					to: '={{$parameter["OperationsMaintenances$countGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'Types',
		name: 'OperationsMaintenances$countGet_types',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenances$countGet'],
			},
		},
		default: {},
		description: 'Filter result by maintenance types',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances/$count',
				qs: {
					types: '={{$parameter["OperationsMaintenances$countGet_types"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'typesValues',
				displayName: 'Types',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter result by maintenance types',
					},
				],
			},
		],
	},
	{
		displayName: 'Body',
		name: 'OperationsMaintenancesBulkPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesBulkPost'],
			},
		},
		default:
			'{\n  "maintenances": [\n    {\n      "unitId": "MUC-JQI",\n      "from": "2025-08-19T12:27:45+02:00",\n      "to": "2025-08-21T12:27:45+02:00",\n      "type": "OutOfService",\n      "description": "The remote control for the TV needs to be replaced."\n    },\n    {\n      "unitId": "MUC-MTA",\n      "from": "2025-08-19T12:27:45+02:00",\n      "to": "2025-08-21T12:27:45+02:00",\n      "type": "OutOfService",\n      "description": "The remote control for the TV needs to be replaced."\n    }\n  ]\n}',
		description: 'The definition of the maintenances',
		routing: {
			request: {
				method: 'POST',
				url: '/operations/v1/maintenances/bulk',
				body: '={{JSON.parse($parameter["OperationsMaintenancesBulkPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'OperationsMaintenancesBulkPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesBulkPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/operations/v1/maintenances/bulk',
				headers: {
					'Idempotency-Key': '={{$parameter["OperationsMaintenancesBulkPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'OperationsMaintenancesByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the maintenance',
		routing: {
			request: {
				method: 'PATCH',
				url: '/operations/v1/maintenances/={{$parameter["OperationsMaintenancesByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'OperationsMaintenancesByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/operations/v1/maintenances/{id}',
				body: '={{JSON.parse($parameter["OperationsMaintenancesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'OperationsMaintenancesByIdDelete_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesByIdDelete'],
			},
		},
		default: '',
		description: 'The ID of the maintenance',
		routing: {
			request: {
				method: 'DELETE',
				url: '/operations/v1/maintenances/={{$parameter["OperationsMaintenancesByIdDelete_id"]}}',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'OperationsMaintenancesByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the maintenance',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances/={{$parameter["OperationsMaintenancesByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'OperationsMaintenancesByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: unit. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances/{id}',
				qs: {
					expand: '={{$parameter["OperationsMaintenancesByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: unit. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'OperationsMaintenancesByIdHead_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesByIdHead'],
			},
		},
		default: '',
		description: 'The ID of the maintenance',
		routing: {
			request: {
				method: 'HEAD',
				url: '/operations/v1/maintenances/={{$parameter["OperationsMaintenancesByIdHead_id"]}}',
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'OperationsNight-auditPut_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Operations'],
				operation: ['OperationsNight-auditPut'],
			},
		},
		default: '',
		description: 'The property the night audit should be performed for',
		routing: {
			request: {
				method: 'PUT',
				url: '/operations/v1/night-audit',
				qs: {
					propertyId: '={{$parameter["OperationsNight-auditPut_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'SetReservationsToNoShow',
		name: 'OperationsNight-auditPut_setReservationsToNoShow',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Operations'],
				operation: ['OperationsNight-auditPut'],
			},
		},
		default: false,
		description: 'Flag if reservations in the state confirmed, which should have been checked in by now, should be marked as no show. The default value is true and we strongly advise against setting it to false, because different reports rely on setting reservations which were not checked in correctly to no show.',
		routing: {
			request: {
				method: 'PUT',
				url: '/operations/v1/night-audit',
				qs: {
					setReservationsToNoShow:
						'={{$parameter["OperationsNight-auditPut_setReservationsToNoShow"]}}',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'OperationsUnits-conditionPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Operations'],
				operation: ['OperationsUnits-conditionPut'],
			},
		},
		default:
			'{\n  "unitsConditions": [\n    {\n      "id": "UNI-EXA",\n      "condition": "Clean"\n    },\n    {\n      "id": "UNI-DBL",\n      "condition": "Dirty"\n    }\n  ]\n}',
		description: 'Array of unit IDs with their respective new condition',
		routing: {
			request: {
				method: 'PUT',
				url: '/operations/v1/units-condition',
				body: '={{JSON.parse($parameter["OperationsUnits-conditionPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SettingsAge-categoriesByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the age category',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/age-categories/={{$parameter["SettingsAge-categoriesByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Languages',
		name: 'SettingsAge-categoriesByIdGet_languages',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesByIdGet'],
			},
		},
		default: {},
		description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/age-categories/{id}',
				qs: {
					languages: '={{$parameter["SettingsAge-categoriesByIdGet_languages"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'languagesValues',
				displayName: 'Languages',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'SettingsAge-categoriesByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the age category to be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/age-categories/={{$parameter["SettingsAge-categoriesByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsAge-categoriesByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/age-categories/{id}',
				body: '={{JSON.parse($parameter["SettingsAge-categoriesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsAge-categoriesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesPost'],
			},
		},
		default:
			'{\n  "code": "BABY",\n  "propertyId": "MUC",\n  "name": {\n    "en": "Baby",\n    "de": "Kind"\n  },\n  "minAge": 0,\n  "maxAge": 2\n}',
		description: 'The definition of the age category',
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/age-categories',
				body: '={{JSON.parse($parameter["SettingsAge-categoriesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'SettingsAge-categoriesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/age-categories',
				headers: {
					'Idempotency-Key': '={{$parameter["SettingsAge-categoriesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'SettingsAge-categoriesGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesGet'],
			},
		},
		default: '',
		description: 'Return age categories for the specific property',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/age-categories',
				qs: {
					propertyId: '={{$parameter["SettingsAge-categoriesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'RateplanCancellation-policiesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesPost'],
			},
		},
		default:
			'{\n  "code": "FLE",\n  "name": {\n    "en": "Flexible",\n    "de": "Flexibel"\n  },\n  "description": {\n    "en": "Free cancellation until 36 hours before arrival.",\n    "de": "Kostenfreies Storno bis 36 Stunden vor Ankunft."\n  },\n  "propertyId": "MUC",\n  "periodFromReference": {\n    "hours": 12,\n    "days": 1\n  },\n  "reference": "PriorToArrival",\n  "fee": {\n    "vatType": "Reduced",\n    "percentValue": {\n      "percent": 100,\n      "limit": 1,\n      "includeServiceIds": [\n        "MUC-BRK"\n      ]\n    }\n  }\n}',
		description: 'The definition of the cancellation policy',
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/cancellation-policies',
				body: '={{JSON.parse($parameter["RateplanCancellation-policiesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'RateplanCancellation-policiesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/cancellation-policies',
				headers: {
					'Idempotency-Key': '={{$parameter["RateplanCancellation-policiesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'RateplanCancellation-policiesGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesGet'],
			},
		},
		default: '',
		description: 'Filter cancellation policies by the specified property',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/cancellation-policies',
				qs: {
					propertyId: '={{$parameter["RateplanCancellation-policiesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'RateplanCancellation-policiesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/cancellation-policies',
				qs: {
					pageNumber: '={{$parameter["RateplanCancellation-policiesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'RateplanCancellation-policiesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/cancellation-policies',
				qs: {
					pageSize: '={{$parameter["RateplanCancellation-policiesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'RateplanCancellation-policiesByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the cancellation policy',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/cancellation-policies/={{$parameter["RateplanCancellation-policiesByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Languages',
		name: 'RateplanCancellation-policiesByIdGet_languages',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesByIdGet'],
			},
		},
		default: {},
		description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/cancellation-policies/{id}',
				qs: {
					languages: '={{$parameter["RateplanCancellation-policiesByIdGet_languages"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'languagesValues',
				displayName: 'Languages',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'RateplanCancellation-policiesByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the cancellation policy to be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/cancellation-policies/={{$parameter["RateplanCancellation-policiesByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'RateplanCancellation-policiesByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/cancellation-policies/{id}',
				body: '={{JSON.parse($parameter["RateplanCancellation-policiesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'RateplanCompaniesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesPost'],
			},
		},
		default:
			'{\n  "code": "UMBRELLA",\n  "propertyId": "MUC",\n  "name": "Umbrella Corp.",\n  "invoicingEmail": "umbrella@corp.com",\n  "taxId": "Tax 123456",\n  "additionalTaxId": "123456789",\n  "address": {\n    "addressLine1": "Marienplatz 1",\n    "postalCode": "80331",\n    "city": "München",\n    "countryCode": "DE"\n  },\n  "canCheckOutOnAr": true,\n  "ratePlans": [\n    {\n      "id": "MUC-DBL",\n      "corporateCode": "UMBRELLAINC"\n    }\n  ]\n}',
		description: 'The definition of the company',
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/companies',
				body: '={{JSON.parse($parameter["RateplanCompaniesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'RateplanCompaniesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/companies',
				headers: {
					'Idempotency-Key': '={{$parameter["RateplanCompaniesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'RateplanCompaniesGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesGet'],
			},
		},
		default: '',
		description: 'Filter by the specified property',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/companies',
				qs: {
					propertyId: '={{$parameter["RateplanCompaniesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'RatePlanIds',
		name: 'RateplanCompaniesGet_ratePlanIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesGet'],
			},
		},
		default: {},
		description: 'Return companies with any of the specified rate plans',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/companies',
				qs: {
					ratePlanIds: '={{$parameter["RateplanCompaniesGet_ratePlanIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'ratePlanIdsValues',
				displayName: 'RatePlanIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return companies with any of the specified rate plans',
					},
				],
			},
		],
	},
	{
		displayName: 'CorporateCodes',
		name: 'RateplanCompaniesGet_corporateCodes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesGet'],
			},
		},
		default: {},
		description: 'Return companies that have any of the requested corporate codes',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/companies',
				qs: {
					corporateCodes: '={{$parameter["RateplanCompaniesGet_corporateCodes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'corporateCodesValues',
				displayName: 'CorporateCodes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return companies that have any of the requested corporate codes',
					},
				],
			},
		],
	},
	{
		displayName: 'TextSearch',
		name: 'RateplanCompaniesGet_textSearch',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesGet'],
			},
		},
		default: '',
		description: 'This will filter all companies for the provided free text. Currently it only looks up if the company name contains one of the provided values.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/companies',
				qs: {
					textSearch: '={{$parameter["RateplanCompaniesGet_textSearch"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'RateplanCompaniesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/companies',
				qs: {
					pageNumber: '={{$parameter["RateplanCompaniesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'RateplanCompaniesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/companies',
				qs: {
					pageSize: '={{$parameter["RateplanCompaniesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'RateplanCompaniesByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the company',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/companies/={{$parameter["RateplanCompaniesByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'RateplanCompaniesByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the company to be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/companies/={{$parameter["RateplanCompaniesByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'RateplanCompaniesByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/companies/{id}',
				body: '={{JSON.parse($parameter["RateplanCompaniesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'RateplanCorporate-codesCodesGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CorporateCodes'],
				operation: ['RateplanCorporate-codesCodesGet'],
			},
		},
		default: '',
		description: 'Return codes for a specific property',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/corporate-codes/codes',
				qs: {
					propertyId: '={{$parameter["RateplanCorporate-codesCodesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'RateplanCorporate-codesCodesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CorporateCodes'],
				operation: ['RateplanCorporate-codesCodesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/corporate-codes/codes',
				qs: {
					pageNumber: '={{$parameter["RateplanCorporate-codesCodesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'RateplanCorporate-codesCodesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CorporateCodes'],
				operation: ['RateplanCorporate-codesCodesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/corporate-codes/codes',
				qs: {
					pageSize: '={{$parameter["RateplanCorporate-codesCodesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'RateplanNo-show-policiesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesPost'],
			},
		},
		default:
			'{\n  "code": "NONREF",\n  "name": {\n    "en": "No-Show Fee",\n    "de": "No-Show Fee"\n  },\n  "description": {\n    "en": "100% of the accommodation fees, for the complete stay.",\n    "de": "100% of the accommodation fees, for the complete stay."\n  },\n  "propertyId": "MUC",\n  "fee": {\n    "vatType": "Null",\n    "fixedValue": {\n      "amount": 100,\n      "currency": "EUR"\n    }\n  }\n}',
		description: 'The definition of the no-show policy',
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/no-show-policies',
				body: '={{JSON.parse($parameter["RateplanNo-show-policiesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'RateplanNo-show-policiesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/no-show-policies',
				headers: {
					'Idempotency-Key': '={{$parameter["RateplanNo-show-policiesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'RateplanNo-show-policiesGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesGet'],
			},
		},
		default: '',
		description: 'Filter no-show policies by the specified property',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/no-show-policies',
				qs: {
					propertyId: '={{$parameter["RateplanNo-show-policiesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'RateplanNo-show-policiesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/no-show-policies',
				qs: {
					pageNumber: '={{$parameter["RateplanNo-show-policiesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'RateplanNo-show-policiesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/no-show-policies',
				qs: {
					pageSize: '={{$parameter["RateplanNo-show-policiesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'RateplanNo-show-policiesByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the no-show policy',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/no-show-policies/={{$parameter["RateplanNo-show-policiesByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Languages',
		name: 'RateplanNo-show-policiesByIdGet_languages',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesByIdGet'],
			},
		},
		default: {},
		description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/no-show-policies/{id}',
				qs: {
					languages: '={{$parameter["RateplanNo-show-policiesByIdGet_languages"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'languagesValues',
				displayName: 'Languages',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'RateplanNo-show-policiesByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the no-show policy to be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/no-show-policies/={{$parameter["RateplanNo-show-policiesByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'RateplanNo-show-policiesByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/no-show-policies/{id}',
				body: '={{JSON.parse($parameter["RateplanNo-show-policiesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'RateplanPromo-codesCodesGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['PromoCodes'],
				operation: ['RateplanPromo-codesCodesGet'],
			},
		},
		default: '',
		description: 'Return codes for a specific property',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/promo-codes/codes',
				qs: {
					propertyId: '={{$parameter["RateplanPromo-codesCodesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'RateplanPromo-codesCodesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['PromoCodes'],
				operation: ['RateplanPromo-codesCodesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/promo-codes/codes',
				qs: {
					pageNumber: '={{$parameter["RateplanPromo-codesCodesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'RateplanPromo-codesCodesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['PromoCodes'],
				operation: ['RateplanPromo-codesCodesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/promo-codes/codes',
				qs: {
					pageSize: '={{$parameter["RateplanPromo-codesCodesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'RateplanRate-plansByIdRatesGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRate-plansByIdRatesGet'],
			},
		},
		default: '',
		description: 'The ID of the rate plan',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans/={{$parameter["RateplanRate-plansByIdRatesGet_id"]}}/rates',
			},
		},
	},
	{
		displayName: 'From',
		name: 'RateplanRate-plansByIdRatesGet_from',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRate-plansByIdRatesGet'],
			},
		},
		default: '',
		description: 'The start of the time range to filter the rates by. All rates where the from date and time is equal or later than the specified date and optional time will be affectedSpecify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans/{id}/rates',
				qs: {
					from: '={{$parameter["RateplanRate-plansByIdRatesGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'RateplanRate-plansByIdRatesGet_to',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRate-plansByIdRatesGet'],
			},
		},
		default: '',
		description: 'The end of the time range to filter the rates by. All rates where the from date and time is earlier than the specified date and optional time will be affectedSpecify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans/{id}/rates',
				qs: {
					to: '={{$parameter["RateplanRate-plansByIdRatesGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'RateplanRate-plansByIdRatesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRate-plansByIdRatesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans/{id}/rates',
				qs: {
					pageNumber: '={{$parameter["RateplanRate-plansByIdRatesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'RateplanRate-plansByIdRatesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRate-plansByIdRatesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans/{id}/rates',
				qs: {
					pageSize: '={{$parameter["RateplanRate-plansByIdRatesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'RateplanRate-plansByIdRatesPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRate-plansByIdRatesPut'],
			},
		},
		default: '',
		description: 'The ID of the rate plan',
		routing: {
			request: {
				method: 'PUT',
				url: '/rateplan/v1/rate-plans/={{$parameter["RateplanRate-plansByIdRatesPut_id"]}}/rates',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'RateplanRate-plansByIdRatesPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRate-plansByIdRatesPut'],
			},
		},
		default:
			'{\n  "rates": [\n    {\n      "from": "2025-08-19T17:00:00+02:00",\n      "to": "2025-08-20T11:00:00+02:00",\n      "price": {\n        "amount": 123.5,\n        "currency": "EUR"\n      },\n      "restrictions": {\n        "minLengthOfStay": 1,\n        "maxLengthOfStay": 30,\n        "closed": false,\n        "closedOnArrival": true,\n        "closedOnDeparture": true\n      }\n    }\n  ]\n}',
		description: 'The definition of the rates',
		routing: {
			request: {
				method: 'PUT',
				url: '/rateplan/v1/rate-plans/{id}/rates',
				body: '={{JSON.parse($parameter["RateplanRate-plansByIdRatesPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'RatePlanIds',
		name: 'RateplanRatesPatch_ratePlanIds',
		type: 'fixedCollection',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRatesPatch'],
			},
		},
		default: {},
		description: 'Filter rates for patching by rate plan IDs',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/rates',
				qs: {
					ratePlanIds: '={{$parameter["RateplanRatesPatch_ratePlanIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'ratePlanIdsValues',
				displayName: 'RatePlanIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Filter rates for patching by rate plan IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'From',
		name: 'RateplanRatesPatch_from',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRatesPatch'],
			},
		},
		default: '',
		description: 'The start of the time range to filter the rates by. All rates where the from date and time is equal or later than the specified date and optional time will be affectedSpecify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/rates',
				qs: {
					from: '={{$parameter["RateplanRatesPatch_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'RateplanRatesPatch_to',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRatesPatch'],
			},
		},
		default: '',
		description: 'The end of the time range to filter the rates by. All rates where the from date and time is earlier than the specified date and optional time will be affectedSpecify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/rates',
				qs: {
					to: '={{$parameter["RateplanRatesPatch_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'RateplanRatesPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRatesPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/rates',
				body: '={{JSON.parse($parameter["RateplanRatesPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'WeekDays',
		name: 'RateplanRatesPatch_weekDays',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRatesPatch'],
			},
		},
		default: {},
		description:
			'The weekdays that will be patched. If not specified, all weekdays will be patched.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/rates',
				qs: {
					weekDays: '={{$parameter["RateplanRatesPatch_weekDays"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'weekDaysValues',
				displayName: 'WeekDays',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'The weekdays that will be patched. If not specified, all weekdays will be patched.',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyId',
		name: 'RateplanRate-plansGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: '',
		description: 'Return rate plans for the specific property',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					propertyId: '={{$parameter["RateplanRate-plansGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'RatePlanCodes',
		name: 'RateplanRate-plansGet_ratePlanCodes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'Return rate plans filtered by requested codes',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					ratePlanCodes: '={{$parameter["RateplanRate-plansGet_ratePlanCodes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'ratePlanCodesValues',
				displayName: 'RatePlanCodes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return rate plans filtered by requested codes',
					},
				],
			},
		],
	},
	{
		displayName: 'IncludedServiceIds',
		name: 'RateplanRate-plansGet_includedServiceIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'Return rate plans that have any of the requested included services',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					includedServiceIds: '={{$parameter["RateplanRate-plansGet_includedServiceIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'includedServiceIdsValues',
				displayName: 'IncludedServiceIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return rate plans that have any of the requested included services',
					},
				],
			},
		],
	},
	{
		displayName: 'ChannelCodes',
		name: 'RateplanRate-plansGet_channelCodes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'Return rate plans that are sold though any of the specified channels',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					channelCodes: '={{$parameter["RateplanRate-plansGet_channelCodes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'channelCodesValues',
				displayName: 'ChannelCodes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return rate plans that are sold though any of the specified channels',
					},
				],
			},
		],
	},
	{
		displayName: 'PromoCodes',
		name: 'RateplanRate-plansGet_promoCodes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'Return rate plans that have any of the requested promo codes',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					promoCodes: '={{$parameter["RateplanRate-plansGet_promoCodes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'promoCodesValues',
				displayName: 'PromoCodes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return rate plans that have any of the requested promo codes',
					},
				],
			},
		],
	},
	{
		displayName: 'CompanyIds',
		name: 'RateplanRate-plansGet_companyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'Return rate plans filtered by requested companies',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					companyIds: '={{$parameter["RateplanRate-plansGet_companyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'companyIdsValues',
				displayName: 'CompanyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return rate plans filtered by requested companies',
					},
				],
			},
		],
	},
	{
		displayName: 'BaseRatePlanIds',
		name: 'RateplanRate-plansGet_baseRatePlanIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'Return rate plans derived from any of the specified rate plans',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					baseRatePlanIds: '={{$parameter["RateplanRate-plansGet_baseRatePlanIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'baseRatePlanIdsValues',
				displayName: 'BaseRatePlanIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return rate plans derived from any of the specified rate plans',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupIds',
		name: 'RateplanRate-plansGet_unitGroupIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'Return rate plans with any of the specified unit groups',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					unitGroupIds: '={{$parameter["RateplanRate-plansGet_unitGroupIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupIdsValues',
				displayName: 'UnitGroupIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return rate plans with any of the specified unit groups',
					},
				],
			},
		],
	},
	{
		displayName: 'TimeSliceDefinitionIds',
		name: 'RateplanRate-plansGet_timeSliceDefinitionIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'Return rate plans with any of the specified time slice definitions',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					timeSliceDefinitionIds: '={{$parameter["RateplanRate-plansGet_timeSliceDefinitionIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'timeSliceDefinitionIdsValues',
				displayName: 'TimeSliceDefinitionIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return rate plans with any of the specified time slice definitions',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupTypes',
		name: 'RateplanRate-plansGet_unitGroupTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'Return rate plans with any of the specified unit group types',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					unitGroupTypes: '={{$parameter["RateplanRate-plansGet_unitGroupTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupTypesValues',
				displayName: 'UnitGroupTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return rate plans with any of the specified unit group types',
					},
				],
			},
		],
	},
	{
		displayName: 'TimeSliceTemplate',
		name: 'RateplanRate-plansGet_timeSliceTemplate',
		type: 'options',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: 'DayUse',
		description: "The time slice template, defaults to 'over night'",
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					timeSliceTemplate: '={{$parameter["RateplanRate-plansGet_timeSliceTemplate"]}}',
				},
			},
		},
		options: [
			{
				name: 'DayUse',
				value: 'DayUse',
			},
			{
				name: 'OverNight',
				value: 'OverNight',
			},
		],
	},
	{
		displayName: 'MinGuaranteeTypes',
		name: 'RateplanRate-plansGet_minGuaranteeTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'Return rate plans with any of the specified min guarantee types',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					minGuaranteeTypes: '={{$parameter["RateplanRate-plansGet_minGuaranteeTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'minGuaranteeTypesValues',
				displayName: 'MinGuaranteeTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return rate plans with any of the specified min guarantee types',
					},
				],
			},
		],
	},
	{
		displayName: 'CancellationPolicyIds',
		name: 'RateplanRate-plansGet_cancellationPolicyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'Return rate plans with any of the specified cancellation policies',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					cancellationPolicyIds: '={{$parameter["RateplanRate-plansGet_cancellationPolicyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'cancellationPolicyIdsValues',
				displayName: 'CancellationPolicyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return rate plans with any of the specified cancellation policies',
					},
				],
			},
		],
	},
	{
		displayName: 'NoShowPolicyIds',
		name: 'RateplanRate-plansGet_noShowPolicyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'Return rate plans with any of the specified no-show policies',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					noShowPolicyIds: '={{$parameter["RateplanRate-plansGet_noShowPolicyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'noShowPolicyIdsValues',
				displayName: 'NoShowPolicyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return rate plans with any of the specified no-show policies',
					},
				],
			},
		],
	},
	{
		displayName: 'IsDerived',
		name: 'RateplanRate-plansGet_isDerived',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: false,
		description: 'Return only derived or base rate plans',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					isDerived: '={{$parameter["RateplanRate-plansGet_isDerived"]}}',
				},
			},
		},
	},
	{
		displayName: 'DerivationLevelFilter',
		name: 'RateplanRate-plansGet_derivationLevelFilter',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description: 'This will filter rate plans based on their derivation level.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					derivationLevelFilter: '={{$parameter["RateplanRate-plansGet_derivationLevelFilter"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'derivationLevelFilterValues',
				displayName: 'DerivationLevelFilter',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'This will filter rate plans based on their derivation level.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'RateplanRate-plansGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					pageNumber: '={{$parameter["RateplanRate-plansGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'RateplanRate-plansGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					pageSize: '={{$parameter["RateplanRate-plansGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'RateplanRate-plansGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, cancellationPolicy, services, bookingPeriods, surcharges, ageCategories. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
				qs: {
					expand: '={{$parameter["RateplanRate-plansGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, cancellationPolicy, services, bookingPeriods, surcharges, ageCategories. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'Body',
		name: 'RateplanRate-plansPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansPost'],
			},
		},
		default:
			'{\n  "code": "NONREF",\n  "propertyId": "MUC",\n  "unitGroupId": "MUC-DBL",\n  "cancellationPolicyId": "MUC-FLE",\n  "channelCodes": [\n    "Direct",\n    "BookingCom",\n    "Ibe"\n  ],\n  "promoCodes": [\n    "APA55100",\n    "DISCOUNT20"\n  ],\n  "isSubjectToCityTax": true,\n  "timeSliceDefinitionId": "MUC-NIGHT",\n  "name": {\n    "de": "Nicht Stornierbar",\n    "en": "Non Refundable"\n  },\n  "description": {\n    "de": "Nicht Stornierbar",\n    "en": "Non Refundable"\n  },\n  "minGuaranteeType": "PM6Hold",\n  "priceCalculationMode": "Truncate",\n  "bookingPeriods": [\n    {\n      "from": "2025-08-12T13:05:44.4865773+02:00",\n      "to": "2025-08-26T13:05:44.4865773+02:00"\n    },\n    {\n      "from": "2025-08-29T13:05:44.4865773+02:00",\n      "to": "2025-10-18T13:05:44.4865773+02:00"\n    }\n  ],\n  "restrictions": {\n    "minAdvance": {\n      "hours": 12,\n      "days": 180\n    },\n    "maxAdvance": {\n      "months": 24\n    }\n  },\n  "pricingRule": {\n    "baseRatePlanId": "MUC-NONREF-SGL",\n    "type": "Absolute",\n    "value": 20\n  },\n  "surcharges": [\n    {\n      "adults": 2,\n      "type": "Absolute",\n      "value": 10\n    }\n  ],\n  "ageCategories": [\n    {\n      "id": "MUC-BABY",\n      "surcharges": [\n        {\n          "adults": 1,\n          "value": 20\n        }\n      ]\n    }\n  ],\n  "includedServices": [\n    {\n      "serviceId": "MUC-BRKF",\n      "grossPrice": {\n        "amount": 10,\n        "currency": "EUR"\n      }\n    }\n  ],\n  "companies": [\n    {\n      "id": "MUC-APA",\n      "corporateCode": "APA-DBL"\n    }\n  ],\n  "accountingConfigs": [\n    {\n      "state": "Unknown",\n      "vatType": "Normal",\n      "serviceType": "FoodAndBeverages",\n      "subAccountId": "ALCO",\n      "validFrom": "2021-01-01"\n    }\n  ]\n}',
		description: 'The definition of the rate plan',
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/rate-plans',
				body: '={{JSON.parse($parameter["RateplanRate-plansPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'RateplanRate-plansPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/rate-plans',
				headers: {
					'Idempotency-Key': '={{$parameter["RateplanRate-plansPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'RatePlanIds',
		name: 'RateplanRate-plansPatch_ratePlanIds',
		type: 'fixedCollection',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansPatch'],
			},
		},
		default: {},
		description: 'Comma-separated list of rate plan IDs, at least one',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/rate-plans',
				qs: {
					ratePlanIds: '={{$parameter["RateplanRate-plansPatch_ratePlanIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'ratePlanIdsValues',
				displayName: 'RatePlanIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Comma-separated list of rate plan IDs, at least one',
					},
				],
			},
		],
	},
	{
		displayName: 'Body',
		name: 'RateplanRate-plansPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/rate-plans',
				body: '={{JSON.parse($parameter["RateplanRate-plansPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'RateplanRate-plansByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the rate plan',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans/={{$parameter["RateplanRate-plansByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Languages',
		name: 'RateplanRate-plansByIdGet_languages',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansByIdGet'],
			},
		},
		default: {},
		description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans/{id}',
				qs: {
					languages: '={{$parameter["RateplanRate-plansByIdGet_languages"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'languagesValues',
				displayName: 'Languages',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
					},
				],
			},
		],
	},
	{
		displayName: 'Expand',
		name: 'RateplanRate-plansByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: property, cancellationPolicy. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans/{id}',
				qs: {
					expand: '={{$parameter["RateplanRate-plansByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: property, cancellationPolicy. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'RateplanRate-plansByIdPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansByIdPut'],
			},
		},
		default: '',
		description: 'The ID of the rate plan',
		routing: {
			request: {
				method: 'PUT',
				url: '/rateplan/v1/rate-plans/={{$parameter["RateplanRate-plansByIdPut_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'RateplanRate-plansByIdPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansByIdPut'],
			},
		},
		default:
			'{\n  "name": {\n    "de": "Nicht Stornierbar",\n    "en": "Non Refundable"\n  },\n  "description": {\n    "de": "Nicht Stornierbar",\n    "en": "Non Refundable"\n  },\n  "minGuaranteeType": "PM6Hold",\n  "priceCalculationMode": "Truncate",\n  "channelCodes": [\n    "Direct",\n    "BookingCom",\n    "Ibe"\n  ],\n  "cancellationPolicyId": "MUC-NONREF",\n  "bookingPeriods": [\n    {\n      "from": "2025-08-12T13:05:44.4865773+02:00",\n      "to": "2025-08-26T13:05:44.4865773+02:00"\n    },\n    {\n      "from": "2025-08-29T13:05:44.4865773+02:00",\n      "to": "2025-10-18T13:05:44.4865773+02:00"\n    }\n  ],\n  "restrictions": {\n    "minAdvance": {\n      "hours": 12,\n      "days": 180\n    },\n    "maxAdvance": {\n      "months": 24\n    }\n  },\n  "includedServices": [\n    {\n      "serviceId": "MUC-BRKF",\n      "grossPrice": {\n        "amount": 10,\n        "currency": "EUR"\n      }\n    },\n    {\n      "serviceId": "MUC-WLAN",\n      "grossPrice": {\n        "amount": 5,\n        "currency": "EUR"\n      }\n    }\n  ],\n  "companies": [\n    {\n      "id": "MUC-APA",\n      "corporateCode": "APA-DBL"\n    }\n  ],\n  "pricingRule": {\n    "baseRatePlanId": "MUC-NONREF-SGL",\n    "type": "Absolute",\n    "value": 20\n  },\n  "surcharges": [\n    {\n      "adults": 2,\n      "type": "Percent",\n      "value": 10\n    }\n  ],\n  "ageCategories": [\n    {\n      "id": "MUC-BABY",\n      "surcharges": [\n        {\n          "adults": 1,\n          "value": 10\n        }\n      ]\n    },\n    {\n      "id": "MUC-CHILD",\n      "surcharges": [\n        {\n          "adults": 1,\n          "value": 40\n        }\n      ]\n    }\n  ]\n}',
		description: 'The definition of the rate plan',
		routing: {
			request: {
				method: 'PUT',
				url: '/rateplan/v1/rate-plans/{id}',
				body: '={{JSON.parse($parameter["RateplanRate-plansByIdPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'RateplanServicesPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesPost'],
			},
		},
		default:
			'{\n  "code": "BRK",\n  "name": {\n    "en": "Breakfast",\n    "de": "Frühstück"\n  },\n  "description": {\n    "en": "Yummy yummy breakfast",\n    "de": "Leckeres Frühstück"\n  },\n  "propertyId": "MUC",\n  "defaultGrossPrice": {\n    "amount": 20,\n    "currency": "EUR"\n  },\n  "pricingUnit": "Person",\n  "postNextDay": true,\n  "availability": {\n    "mode": "Daily",\n    "quantity": 3,\n    "daysOfWeek": [\n      "Monday",\n      "Tuesday",\n      "Wednesday",\n      "Thursday",\n      "Friday",\n      "Saturday",\n      "Sunday"\n    ]\n  },\n  "channelCodes": [\n    "Direct",\n    "Ibe",\n    "BookingCom",\n    "ChannelManager"\n  ],\n  "accountingConfigs": [\n    {\n      "state": "Unknown",\n      "vatType": "Normal",\n      "serviceType": "FoodAndBeverages",\n      "subAccountId": "ALCO",\n      "validFrom": "2021-01-01"\n    }\n  ],\n  "ageCategoryId": "MUC-BABY"\n}',
		description: 'The definition of the service',
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/services',
				body: '={{JSON.parse($parameter["RateplanServicesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'RateplanServicesPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/services',
				headers: {
					'Idempotency-Key': '={{$parameter["RateplanServicesPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'RateplanServicesGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesGet'],
			},
		},
		default: '',
		description: 'Filter services by the specified property',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services',
				qs: {
					propertyId: '={{$parameter["RateplanServicesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'TextSearch',
		name: 'RateplanServicesGet_textSearch',
		type: 'string',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesGet'],
			},
		},
		default: '',
		description: 'This will filter all services for the provided free text. Currently it only looks up if the service name contains one of the provided values.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services',
				qs: {
					textSearch: '={{$parameter["RateplanServicesGet_textSearch"]}}',
				},
			},
		},
	},
	{
		displayName: 'OnlySoldAsExtras',
		name: 'RateplanServicesGet_onlySoldAsExtras',
		type: 'boolean',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesGet'],
			},
		},
		default: false,
		description:
			'If set to true, return only services that can be sold as extras. Otherwise, it returns both, extras, and include-only.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services',
				qs: {
					onlySoldAsExtras: '={{$parameter["RateplanServicesGet_onlySoldAsExtras"]}}',
				},
			},
		},
	},
	{
		displayName: 'ChannelCodes',
		name: 'RateplanServicesGet_channelCodes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesGet'],
			},
		},
		default: {},
		description: 'The channel codes the service is sold through',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services',
				qs: {
					channelCodes: '={{$parameter["RateplanServicesGet_channelCodes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'channelCodesValues',
				displayName: 'ChannelCodes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The channel codes the service is sold through',
					},
				],
			},
		],
	},
	{
		displayName: 'ServiceTypes',
		name: 'RateplanServicesGet_serviceTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesGet'],
			},
		},
		default: {},
		description: 'The service types offered',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services',
				qs: {
					serviceTypes: '={{$parameter["RateplanServicesGet_serviceTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'serviceTypesValues',
				displayName: 'ServiceTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The service types offered',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'RateplanServicesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services',
				qs: {
					pageNumber: '={{$parameter["RateplanServicesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'RateplanServicesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services',
				qs: {
					pageSize: '={{$parameter["RateplanServicesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'RateplanServicesGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services',
				qs: {
					expand: '={{$parameter["RateplanServicesGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'RateplanServicesByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the service',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/services/={{$parameter["RateplanServicesByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'RateplanServicesByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/services/{id}',
				body: '={{JSON.parse($parameter["RateplanServicesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'RateplanServicesByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the service',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services/={{$parameter["RateplanServicesByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Languages',
		name: 'RateplanServicesByIdGet_languages',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesByIdGet'],
			},
		},
		default: {},
		description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services/{id}',
				qs: {
					languages: '={{$parameter["RateplanServicesByIdGet_languages"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'languagesValues',
				displayName: 'Languages',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
					},
				],
			},
		],
	},
	{
		displayName: 'Expand',
		name: 'RateplanServicesByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services/{id}',
				qs: {
					expand: '={{$parameter["RateplanServicesByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyId',
		name: 'ReportsReportsOrdered-servicesGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsOrdered-servicesGet'],
			},
		},
		default: '',
		description: 'Property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/ordered-services',
				qs: {
					propertyId: '={{$parameter["ReportsReportsOrdered-servicesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'ServiceIds',
		name: 'ReportsReportsOrdered-servicesGet_serviceIds',
		type: 'fixedCollection',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsOrdered-servicesGet'],
			},
		},
		default: {},
		description: 'Service IDs the report should be generated for',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/ordered-services',
				qs: {
					serviceIds: '={{$parameter["ReportsReportsOrdered-servicesGet_serviceIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'serviceIdsValues',
				displayName: 'ServiceIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Service IDs the report should be generated for',
					},
				],
			},
		],
	},
	{
		displayName: 'From',
		name: 'ReportsReportsOrdered-servicesGet_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsOrdered-servicesGet'],
			},
		},
		default: '',
		description: 'The inclusive start date of the interval',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/ordered-services',
				qs: {
					from: '={{$parameter["ReportsReportsOrdered-servicesGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'ReportsReportsOrdered-servicesGet_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsOrdered-servicesGet'],
			},
		},
		default: '',
		description: 'The exclusive end date of the interval',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/ordered-services',
				qs: {
					to: '={{$parameter["ReportsReportsOrdered-servicesGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'ReportsReportsArrivalsGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsArrivalsGet'],
			},
		},
		default: '',
		description: 'Requested property',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/arrivals',
				qs: {
					propertyId: '={{$parameter["ReportsReportsArrivalsGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Month',
		name: 'ReportsReportsArrivalsGet_month',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsArrivalsGet'],
			},
		},
		default: '',
		description: 'Requested month for the report',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/arrivals',
				qs: {
					month: '={{$parameter["ReportsReportsArrivalsGet_month"]}}',
				},
			},
		},
	},
	{
		displayName: 'Year',
		name: 'ReportsReportsArrivalsGet_year',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsArrivalsGet'],
			},
		},
		default: '',
		description: 'Requested year for the report',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/arrivals',
				qs: {
					year: '={{$parameter["ReportsReportsArrivalsGet_year"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'ReportsReportsProperty-performanceGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		default: '',
		description: 'The ID of the property',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
				qs: {
					propertyId: '={{$parameter["ReportsReportsProperty-performanceGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'ReportsReportsProperty-performanceGet_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		default: '',
		description: 'The inclusive start date of the interval',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
				qs: {
					from: '={{$parameter["ReportsReportsProperty-performanceGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'ReportsReportsProperty-performanceGet_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		default: '',
		description: 'The inclusive end date of the interval',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
				qs: {
					to: '={{$parameter["ReportsReportsProperty-performanceGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'CompanyIds',
		name: 'ReportsReportsProperty-performanceGet_companyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		default: {},
		description: 'The company IDs used to filter the retrieved data',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
				qs: {
					companyIds: '={{$parameter["ReportsReportsProperty-performanceGet_companyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'companyIdsValues',
				displayName: 'CompanyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The company IDs used to filter the retrieved data',
					},
				],
			},
		],
	},
	{
		displayName: 'RatePlanIds',
		name: 'ReportsReportsProperty-performanceGet_ratePlanIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		default: {},
		description: 'The rate plan IDs used to filter the retrieved data',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
				qs: {
					ratePlanIds: '={{$parameter["ReportsReportsProperty-performanceGet_ratePlanIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'ratePlanIdsValues',
				displayName: 'RatePlanIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The rate plan IDs used to filter the retrieved data',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupTypes',
		name: 'ReportsReportsProperty-performanceGet_unitGroupTypes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		default: {},
		description: 'The unit group types used to filter the retrieved data',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
				qs: {
					unitGroupTypes: '={{$parameter["ReportsReportsProperty-performanceGet_unitGroupTypes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupTypesValues',
				displayName: 'UnitGroupTypes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The unit group types used to filter the retrieved data',
					},
				],
			},
		],
	},
	{
		displayName: 'UnitGroupIds',
		name: 'ReportsReportsProperty-performanceGet_unitGroupIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		default: {},
		description: 'The unit group IDs used to filter the retrieved data',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
				qs: {
					unitGroupIds: '={{$parameter["ReportsReportsProperty-performanceGet_unitGroupIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'unitGroupIdsValues',
				displayName: 'UnitGroupIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The unit group IDs used to filter the retrieved data',
					},
				],
			},
		],
	},
	{
		displayName: 'TimeSliceDefinitionIds',
		name: 'ReportsReportsProperty-performanceGet_timeSliceDefinitionIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		default: {},
		description: 'The time slice definition IDs used to filter the retrieved data',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
				qs: {
					timeSliceDefinitionIds:
						'={{$parameter["ReportsReportsProperty-performanceGet_timeSliceDefinitionIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'timeSliceDefinitionIdsValues',
				displayName: 'TimeSliceDefinitionIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The time slice definition IDs used to filter the retrieved data',
					},
				],
			},
		],
	},
	{
		displayName: 'ChannelCodes',
		name: 'ReportsReportsProperty-performanceGet_channelCodes',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		default: {},
		description: 'The channel codes used to filter the retrieved data',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
				qs: {
					channelCodes: '={{$parameter["ReportsReportsProperty-performanceGet_channelCodes"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'channelCodesValues',
				displayName: 'ChannelCodes',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The channel codes used to filter the retrieved data',
					},
				],
			},
		],
	},
	{
		displayName: 'MarketSegmentIds',
		name: 'ReportsReportsProperty-performanceGet_marketSegmentIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		default: {},
		description: 'The market segment IDs used to filter the retrieved data',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
				qs: {
					marketSegmentIds:
						'={{$parameter["ReportsReportsProperty-performanceGet_marketSegmentIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'marketSegmentIdsValues',
				displayName: 'MarketSegmentIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The market segment IDs used to filter the retrieved data',
					},
				],
			},
		],
	},
	{
		displayName: 'TravelPurpose',
		name: 'ReportsReportsProperty-performanceGet_travelPurpose',
		type: 'options',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		default: 'Business',
		description: 'The travel purpose to filter the retrieved data',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
				qs: {
					travelPurpose: '={{$parameter["ReportsReportsProperty-performanceGet_travelPurpose"]}}',
				},
			},
		},
		options: [
			{
				name: 'Business',
				value: 'Business',
			},
			{
				name: 'Leisure',
				value: 'Leisure',
			},
		],
	},
	{
		displayName: 'Expand',
		name: 'ReportsReportsProperty-performanceGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: businessDays. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
				qs: {
					expand: '={{$parameter["ReportsReportsProperty-performanceGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: businessDays. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyId',
		name: 'ReportsReportsCompany-invoices-vatGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsCompany-invoices-vatGet'],
			},
		},
		default: '',
		description: 'Property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/company-invoices-vat',
				qs: {
					propertyId: '={{$parameter["ReportsReportsCompany-invoices-vatGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'CompanyIds',
		name: 'ReportsReportsCompany-invoices-vatGet_companyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsCompany-invoices-vatGet'],
			},
		},
		default: {},
		description: 'Company IDs the report should be generated for',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/company-invoices-vat',
				qs: {
					companyIds: '={{$parameter["ReportsReportsCompany-invoices-vatGet_companyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'companyIdsValues',
				displayName: 'CompanyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Company IDs the report should be generated for',
					},
				],
			},
		],
	},
	{
		displayName: 'DateFilter',
		name: 'ReportsReportsCompany-invoices-vatGet_dateFilter',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsCompany-invoices-vatGet'],
			},
		},
		default: {},
		description: 'Set a date interval to get the report for. Cannot be more than 1 month.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7.',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/company-invoices-vat',
				qs: {
					dateFilter: '={{$parameter["ReportsReportsCompany-invoices-vatGet_dateFilter"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'dateFilterValues',
				displayName: 'DateFilter',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Set a date interval to get the report for. Cannot be more than 1 month.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7.',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyId',
		name: 'ReportsReportsRevenuesGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsRevenuesGet'],
			},
		},
		default: '',
		description: 'Property ID',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/revenues',
				qs: {
					propertyId: '={{$parameter["ReportsReportsRevenuesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'From',
		name: 'ReportsReportsRevenuesGet_from',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsRevenuesGet'],
			},
		},
		default: '',
		description: 'The inclusive start date of the interval',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/revenues',
				qs: {
					from: '={{$parameter["ReportsReportsRevenuesGet_from"]}}',
				},
			},
		},
	},
	{
		displayName: 'To',
		name: 'ReportsReportsRevenuesGet_to',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsRevenuesGet'],
			},
		},
		default: '',
		description: 'The exclusive end date of the interval. The interval is limited to one year.',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/revenues',
				qs: {
					to: '={{$parameter["ReportsReportsRevenuesGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'LanguageCode',
		name: 'ReportsReportsRevenuesGet_languageCode',
		type: 'string',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsRevenuesGet'],
			},
		},
		default: '',
		description: 'The language for the the report',
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/revenues',
				qs: {
					languageCode: '={{$parameter["ReportsReportsRevenuesGet_languageCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'SettingsCapture-policiesGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CapturePolicies'],
				operation: ['SettingsCapture-policiesGet'],
			},
		},
		default: '',
		description: 'Filter capture policies by the specified property',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/capture-policies',
				qs: {
					propertyId: '={{$parameter["SettingsCapture-policiesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'SettingsCapture-policiesGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CapturePolicies'],
				operation: ['SettingsCapture-policiesGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/capture-policies',
				qs: {
					pageNumber: '={{$parameter["SettingsCapture-policiesGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'SettingsCapture-policiesGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CapturePolicies'],
				operation: ['SettingsCapture-policiesGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/capture-policies',
				qs: {
					pageSize: '={{$parameter["SettingsCapture-policiesGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SettingsCapture-policiesByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CapturePolicies'],
				operation: ['SettingsCapture-policiesByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the capture policy',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/capture-policies/={{$parameter["SettingsCapture-policiesByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SettingsCapture-policiesByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CapturePolicies'],
				operation: ['SettingsCapture-policiesByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the capture policy to be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/capture-policies/={{$parameter["SettingsCapture-policiesByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsCapture-policiesByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CapturePolicies'],
				operation: ['SettingsCapture-policiesByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/capture-policies/{id}',
				body: '={{JSON.parse($parameter["SettingsCapture-policiesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsCity-taxPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CityTax'],
				operation: ['SettingsCity-taxPost'],
			},
		},
		default:
			'{\n  "name": {\n    "en": "City tax",\n    "de": "City-Tax"\n  },\n  "description": {\n    "en": "2 Euro per person and night. Business travellers and close family members of citizens do not have to pay city tax.",\n    "de": "2 Euro pro Person und Nacht. Geschäftsreisende und nahe Familienmitglieder von Anwohnern müssen keine City-Tax bezahlen."\n  },\n  "propertyId": "MUC",\n  "type": "PerPersonPerNight",\n  "taxHandlingType": "BeforeTax",\n  "value": 2,\n  "vatType": "Normal",\n  "code": "TAX",\n  "priority": 1,\n  "includeCityTaxInRateAmount": false,\n  "subcategories": [\n    {\n      "name": {\n        "en": "Children under 12 don\'t have to pay city tax",\n        "de": "Kinder unter 12 Jahren zahlen keine City-Tax"\n      },\n      "value": 0,\n      "age": {\n        "min": 0,\n        "max": 12\n      }\n    }\n  ],\n  "ignoredFor": [\n    {\n      "distributionChannel": {\n        "channelCode": "ChannelManager",\n        "sources": [\n          "bookingcom"\n        ]\n      }\n    }\n  ]\n}',
		description: 'The definition of the city tax',
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/city-tax',
				body: '={{JSON.parse($parameter["SettingsCity-taxPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'SettingsCity-taxPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CityTax'],
				operation: ['SettingsCity-taxPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/city-tax',
				headers: {
					'Idempotency-Key': '={{$parameter["SettingsCity-taxPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'SettingsCity-taxGet_propertyId',
		type: 'string',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CityTax'],
				operation: ['SettingsCity-taxGet'],
			},
		},
		default: '',
		description: 'Filter by the specified property',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/city-tax',
				qs: {
					propertyId: '={{$parameter["SettingsCity-taxGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SettingsCity-taxByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CityTax'],
				operation: ['SettingsCity-taxByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the city tax',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/city-tax/={{$parameter["SettingsCity-taxByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Languages',
		name: 'SettingsCity-taxByIdGet_languages',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CityTax'],
				operation: ['SettingsCity-taxByIdGet'],
			},
		},
		default: {},
		description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/city-tax/{id}',
				qs: {
					languages: '={{$parameter["SettingsCity-taxByIdGet_languages"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'languagesValues',
				displayName: 'Languages',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'SettingsCity-taxByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CityTax'],
				operation: ['SettingsCity-taxByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the city tax to be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/city-tax/={{$parameter["SettingsCity-taxByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsCity-taxByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CityTax'],
				operation: ['SettingsCity-taxByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/city-tax/{id}',
				body: '={{JSON.parse($parameter["SettingsCity-taxByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'SettingsSub-accountsGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsGet'],
			},
		},
		default: '',
		description: 'ID of the property',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/sub-accounts',
				qs: {
					propertyId: '={{$parameter["SettingsSub-accountsGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageNumber',
		name: 'SettingsSub-accountsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/sub-accounts',
				qs: {
					pageNumber: '={{$parameter["SettingsSub-accountsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'SettingsSub-accountsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/sub-accounts',
				qs: {
					pageSize: '={{$parameter["SettingsSub-accountsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsSub-accountsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsPost'],
			},
		},
		default:
			'{\n  "propertyId": "MUC",\n  "code": "TEA",\n  "name": "Finest green tea",\n  "type": "FoodAndBeverages"\n}',
		description: 'The definition of the sub-account',
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/sub-accounts',
				body: '={{JSON.parse($parameter["SettingsSub-accountsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'SettingsSub-accountsPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/sub-accounts',
				headers: {
					'Idempotency-Key': '={{$parameter["SettingsSub-accountsPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'SettingsSub-accounts$countGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accounts$countGet'],
			},
		},
		default: '',
		description: 'ID of the property',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/sub-accounts/$count',
				qs: {
					propertyId: '={{$parameter["SettingsSub-accounts$countGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SettingsSub-accountsByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the sub-account',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/sub-accounts/={{$parameter["SettingsSub-accountsByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SettingsSub-accountsByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the sub-account',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/sub-accounts/={{$parameter["SettingsSub-accountsByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsSub-accountsByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/sub-accounts/{id}',
				body: '={{JSON.parse($parameter["SettingsSub-accountsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SettingsSub-accountsByIdHead_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsByIdHead'],
			},
		},
		default: '',
		description: 'The ID of the sub-account',
		routing: {
			request: {
				method: 'HEAD',
				url: '/settings/v1/sub-accounts/={{$parameter["SettingsSub-accountsByIdHead_id"]}}',
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'SettingsFeaturesByPropertyIdGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['FeatureSettings'],
				operation: ['SettingsFeaturesByPropertyIdGet'],
			},
		},
		default: '',
		description: 'The ID of the property',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/features/={{$parameter["SettingsFeaturesByPropertyIdGet_propertyId"]}}',
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'SettingsFeaturesByPropertyIdPatch_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['FeatureSettings'],
				operation: ['SettingsFeaturesByPropertyIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the property you want to toggle features for',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/features/={{$parameter["SettingsFeaturesByPropertyIdPatch_propertyId"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsFeaturesByPropertyIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['FeatureSettings'],
				operation: ['SettingsFeaturesByPropertyIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/features/{propertyId}',
				body: '={{JSON.parse($parameter["SettingsFeaturesByPropertyIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'PropertyIds',
		name: 'SettingsInvoice-addressGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['InvoiceAddress'],
				operation: ['SettingsInvoice-addressGet'],
			},
		},
		default: {},
		description: 'The propertyIds parameter',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/invoice-address',
				qs: {
					propertyIds: '={{$parameter["SettingsInvoice-addressGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The propertyIds value',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyIds',
		name: 'SettingsInvoice-addressPut_propertyIds',
		type: 'fixedCollection',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['InvoiceAddress'],
				operation: ['SettingsInvoice-addressPut'],
			},
		},
		default: {},
		description: 'The propertyIds parameter',
		routing: {
			request: {
				method: 'PUT',
				url: '/settings/v1/invoice-address',
				qs: {
					propertyIds: '={{$parameter["SettingsInvoice-addressPut_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The propertyIds value',
					},
				],
			},
		],
	},
	{
		displayName: 'Body',
		name: 'SettingsInvoice-addressPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['InvoiceAddress'],
				operation: ['SettingsInvoice-addressPut'],
			},
		},
		default:
			'{\n  "addressLine1": "Marienplatz 1",\n  "postalCode": "80331",\n  "city": "München",\n  "regionCode": "DE-BY",\n  "countryCode": "DE"\n}',
		description: 'Address displayed on invoices',
		routing: {
			request: {
				method: 'PUT',
				url: '/settings/v1/invoice-address',
				body: '={{JSON.parse($parameter["SettingsInvoice-addressPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'PropertyIds',
		name: 'SettingsInvoice-addressPatch_propertyIds',
		type: 'fixedCollection',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['InvoiceAddress'],
				operation: ['SettingsInvoice-addressPatch'],
			},
		},
		default: {},
		description: 'The propertyIds parameter',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/invoice-address',
				qs: {
					propertyIds: '={{$parameter["SettingsInvoice-addressPatch_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The propertyIds value',
					},
				],
			},
		],
	},
	{
		displayName: 'Body',
		name: 'SettingsInvoice-addressPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['InvoiceAddress'],
				operation: ['SettingsInvoice-addressPatch'],
			},
		},
		default: '',
		description: 'Request body (JSON format). See API documentation for the expected schema.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/invoice-address',
				body: '={{JSON.parse($parameter["SettingsInvoice-addressPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsLanguagesPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['Languages'],
				operation: ['SettingsLanguagesPut'],
			},
		},
		default:
			'{\n  "languages": [\n    {\n      "code": "en",\n      "mandatory": true\n    },\n    {\n      "code": "de",\n      "mandatory": false\n    }\n  ]\n}',
		description: 'The definition of the language settings',
		routing: {
			request: {
				method: 'PUT',
				url: '/settings/v1/languages',
				body: '={{JSON.parse($parameter["SettingsLanguagesPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SettingsMarket-segmentsByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the market segment',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/market-segments/={{$parameter["SettingsMarket-segmentsByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SettingsMarket-segmentsByIdHead_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsByIdHead'],
			},
		},
		default: '',
		description: 'The ID of the market segment',
		routing: {
			request: {
				method: 'HEAD',
				url: '/settings/v1/market-segments/={{$parameter["SettingsMarket-segmentsByIdHead_id"]}}',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SettingsMarket-segmentsByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the market segment to be modified',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/market-segments/={{$parameter["SettingsMarket-segmentsByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsMarket-segmentsByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/market-segments/{id}',
				body: '={{JSON.parse($parameter["SettingsMarket-segmentsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'PropertyIds',
		name: 'SettingsMarket-segmentsGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsGet'],
			},
		},
		default: {},
		description: 'Return market segments with any of the specified property IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/market-segments',
				qs: {
					propertyIds: '={{$parameter["SettingsMarket-segmentsGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return market segments with any of the specified property IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'PageNumber',
		name: 'SettingsMarket-segmentsGet_pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsGet'],
			},
		},
		default: 1,
		description:
			'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/market-segments',
				qs: {
					pageNumber: '={{$parameter["SettingsMarket-segmentsGet_pageNumber"]}}',
				},
			},
		},
	},
	{
		displayName: 'PageSize',
		name: 'SettingsMarket-segmentsGet_pageSize',
		type: 'number',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsGet'],
			},
		},
		default: '',
		description:
			'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/market-segments',
				qs: {
					pageSize: '={{$parameter["SettingsMarket-segmentsGet_pageSize"]}}',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsMarket-segmentsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsPost'],
			},
		},
		default:
			'{\n  "code": "BUSR",\n  "name": "Business Groups",\n  "description": "Social groups (Weddings etc.)",\n  "propertyIds": [\n    "MUC",\n    "BER"\n  ]\n}',
		description: 'The definition of the market segment',
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/market-segments',
				body: '={{JSON.parse($parameter["SettingsMarket-segmentsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'SettingsMarket-segmentsPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/market-segments',
				headers: {
					'Idempotency-Key': '={{$parameter["SettingsMarket-segmentsPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'PropertyIds',
		name: 'SettingsMarket-segments$countGet_propertyIds',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segments$countGet'],
			},
		},
		default: {},
		description: 'Return market segments with any of the specified property IDs',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/market-segments/$count',
				qs: {
					propertyIds: '={{$parameter["SettingsMarket-segments$countGet_propertyIds"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'propertyIdsValues',
				displayName: 'PropertyIds',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Return market segments with any of the specified property IDs',
					},
				],
			},
		],
	},
	{
		displayName: 'ID',
		name: 'SettingsPropertiesByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['PropertySettings'],
				operation: ['SettingsPropertiesByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the property',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/properties/={{$parameter["SettingsPropertiesByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the property',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/properties/={{$parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet_propertyId"]}}/time-slice-definitions/{id}',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet'],
			},
		},
		default: '',
		description: 'The ID of the time slice definition',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/properties/{propertyId}/time-slice-definitions/={{$parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/properties/{propertyId}/time-slice-definitions/{id}',
				qs: {
					expand:
						'={{$parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyId',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the property',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/properties/={{$parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_propertyId"]}}/time-slice-definitions/{id}',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch'],
			},
		},
		default: '',
		description: 'The ID of the time slice definition',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/properties/{propertyId}/time-slice-definitions/={{$parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch'],
			},
		},
		default: '',
		description:
			'Define the list of operations to be applied to the resource. Learn more about JSON Patch here: http://jsonpatch.com/.',
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/properties/{propertyId}/time-slice-definitions/{id}',
				body: '={{JSON.parse($parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'PropertyId',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsGet_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsGet'],
			},
		},
		default: '',
		description: 'The ID of the property',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/properties/={{$parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsGet_propertyId"]}}/time-slice-definitions',
			},
		},
	},
	{
		displayName: 'Expand',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsGet_expand',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsGet'],
			},
		},
		default: {},
		description:
			'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/properties/{propertyId}/time-slice-definitions',
				qs: {
					expand:
						'={{$parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsGet_expand"]}}',
				},
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'expandValues',
				displayName: 'Expand',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description:
							'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
					},
				],
			},
		],
	},
	{
		displayName: 'PropertyId',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsPost_propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsPost'],
			},
		},
		default: '',
		description: 'The ID of the property',
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/properties/={{$parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsPost_propertyId"]}}/time-slice-definitions',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsPost'],
			},
		},
		default:
			'{\n  "name": "Over Night",\n  "template": "OverNight",\n  "checkInTime": "17:00:00",\n  "checkOutTime": "11:00:00"\n}',
		description: 'The payload of the time slice definition',
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/properties/{propertyId}/time-slice-definitions',
				body: '={{JSON.parse($parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'IdempotencyKey',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsPost_Idempotency-Key',
		type: 'string',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsPost'],
			},
		},
		default: '',
		description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/properties/{propertyId}/time-slice-definitions',
				headers: {
					'Idempotency-Key':
						'={{$parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsPost_Idempotency-Key"]}}',
				},
			},
		},
	},
	{
		displayName: 'Url',
		name: 'PingerPost_url',
		type: 'string',
		displayOptions: {
			show: {
				group: ['webhook-v1'],
				resource: ['HealthCheck'],
				operation: ['PingerPost'],
			},
		},
		default: '',
		description: 'The URL parameter',
		routing: {
			request: {
				method: 'POST',
				url: '/v1/pinger',
				qs: {
					url: '={{$parameter["PingerPost_url"]}}',
				},
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SubscriptionsPost_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['webhook-v1'],
				resource: ['Subscriptions'],
				operation: ['SubscriptionsPost'],
			},
		},
		default:
			'{\n  "endpointUrl": "https://example.com",\n  "events": [\n    "booking/created",\n    "booking/changed",\n    "reservation/*"\n  ],\n  "propertyIds": [\n    "MUC",\n    "BER"\n  ]\n}',
		description: 'Subscription details',
		routing: {
			request: {
				method: 'POST',
				url: '/v1/subscriptions',
				body: '={{JSON.parse($parameter["SubscriptionsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SubscriptionsByIdGet_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['webhook-v1'],
				resource: ['Subscriptions'],
				operation: ['SubscriptionsByIdGet'],
			},
		},
		default: '',
		description: 'The ID parameter',
		routing: {
			request: {
				method: 'GET',
				url: '/v1/subscriptions/={{$parameter["SubscriptionsByIdGet_id"]}}',
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SubscriptionsByIdPut_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['webhook-v1'],
				resource: ['Subscriptions'],
				operation: ['SubscriptionsByIdPut'],
			},
		},
		default: '',
		description: 'Subscription ID',
		routing: {
			request: {
				method: 'PUT',
				url: '/v1/subscriptions/={{$parameter["SubscriptionsByIdPut_id"]}}',
			},
		},
	},
	{
		displayName: 'Body',
		name: 'SubscriptionsByIdPut_body',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				group: ['webhook-v1'],
				resource: ['Subscriptions'],
				operation: ['SubscriptionsByIdPut'],
			},
		},
		default:
			'{\n  "endpointUrl": "https://www.example.com",\n  "events": [\n    "booking/created",\n    "booking/changed",\n    "reservation/*"\n  ],\n  "propertyIds": [\n    "MUC",\n    "BER"\n  ]\n}',
		description: 'Subscription details',
		routing: {
			request: {
				method: 'PUT',
				url: '/v1/subscriptions/{id}',
				body: '={{JSON.parse($parameter["SubscriptionsByIdPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'ID',
		name: 'SubscriptionsByIdDelete_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				group: ['webhook-v1'],
				resource: ['Subscriptions'],
				operation: ['SubscriptionsByIdDelete'],
			},
		},
		default: '',
		description: "Subscription's ID",
		routing: {
			request: {
				method: 'DELETE',
				url: '/v1/subscriptions/={{$parameter["SubscriptionsByIdDelete_id"]}}',
			},
		},
	},
];
