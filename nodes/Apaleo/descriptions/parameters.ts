import { INodeProperties } from 'n8n-workflow';

// This will contain all parameter fields for operations
export const parameterFields: INodeProperties[] = [
	{
		displayName: 'AvailabilityUnitsGet',
		name: 'AvailabilityUnitsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnitsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/units',
			},
		},
	},
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
				qs: {
					from: '={{$parameter["AvailabilityUnitsGet_from"] ? new Date($parameter["AvailabilityUnitsGet_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["AvailabilityUnitsGet_to"] ? new Date($parameter["AvailabilityUnitsGet_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Availability'],
				operation: ['AvailabilityUnitsGet'],
			},
		},
		options: [
			{
				displayName: 'IncludeOutOfService',
				name: 'includeOutOfService',
				type: 'boolean',
				default: false,
				description: 'Should units that are set OutOfService in the defined time period be returned as available',
				routing: {
					request: {
						qs: {
							includeOutOfService: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitAttributeIds',
				name: 'unitAttributeIds',
				type: 'string',
				default: '',
				description: 'Return units with the specific unit attributes',
				routing: {
					request: {
						qs: {
							unitAttributeIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitCondition',
				name: 'unitCondition',
				type: 'options',
				default: 'Clean',
				description: 'The unit condition',
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
				routing: {
					request: {
						qs: {
							unitCondition: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupId',
				name: 'unitGroupId',
				type: 'string',
				default: '',
				description: 'The unit group ID',
				routing: {
					request: {
						qs: {
							unitGroupId: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'AvailabilityUnit-groupsGet',
		name: 'AvailabilityUnit-groupsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/unit-groups',
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
				qs: {
					from: '={{$parameter["AvailabilityUnit-groupsGet_from"] ? new Date($parameter["AvailabilityUnit-groupsGet_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["AvailabilityUnit-groupsGet_to"] ? new Date($parameter["AvailabilityUnit-groupsGet_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsGet'],
			},
		},
		options: [
			{
				displayName: 'Adults',
				name: 'adults',
				type: 'number',
				default: '',
				description: 'The number of adults you want availability for, defaults to 1',
				routing: {
					request: {
						qs: {
							adults: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ChildrenAges',
				name: 'childrenAges',
				type: 'string',
				default: '',
				description: 'The ages of the children you want availability for',
				routing: {
					request: {
						qs: {
							childrenAges: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'OnlySellable',
				name: 'onlySellable',
				type: 'boolean',
				default: false,
				description: 'When set to \'true\', only the unit groups sold by the specified time slice template and time slice definition IDs are returned, otherwise all unit groups are returned',
				routing: {
					request: {
						qs: {
							onlySellable: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceDefinitionIds',
				name: 'timeSliceDefinitionIds',
				type: 'string',
				default: '',
				description: 'The time slice definition IDs',
				routing: {
					request: {
						qs: {
							timeSliceDefinitionIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceTemplate',
				name: 'timeSliceTemplate',
				type: 'options',
				default: 'DayUse',
				description: "The time slice template, defaults to 'over night'",
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
				routing: {
					request: {
						qs: {
							timeSliceTemplate: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupIds',
				name: 'unitGroupIds',
				type: 'string',
				default: '',
				description: 'The unit group IDs',
				routing: {
					request: {
						qs: {
							unitGroupIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupTypes',
				name: 'unitGroupTypes',
				type: 'string',
				default: '',
				description: 'Filter result by requested unit group types',
				routing: {
					request: {
						qs: {
							unitGroupTypes: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'AvailabilityUnit-groupsByIdPatch',
		name: 'AvailabilityUnit-groupsByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityUnit-groupsByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/availability/v1/unit-groups/{id}',
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
				url: '=/availability/v1/unit-groups/{{$value}}',
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
				qs: {
					from: '={{$parameter["AvailabilityUnit-groupsByIdPatch_from"] ? new Date($parameter["AvailabilityUnit-groupsByIdPatch_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["AvailabilityUnit-groupsByIdPatch_to"] ? new Date($parameter["AvailabilityUnit-groupsByIdPatch_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				body: '={{JSON.parse($parameter["AvailabilityUnit-groupsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'AvailabilityServicesGet',
		name: 'AvailabilityServicesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['Availability'],
				operation: ['AvailabilityServicesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/services',
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
				qs: {
					from: '={{$parameter["AvailabilityServicesGet_from"] ? new Date($parameter["AvailabilityServicesGet_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["AvailabilityServicesGet_to"] ? new Date($parameter["AvailabilityServicesGet_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Availability'],
				operation: ['AvailabilityServicesGet'],
			},
		},
		options: [
			{
				displayName: 'ChannelCodes',
				name: 'channelCodes',
				type: 'string',
				default: '',
				description: 'The channel code used to filter the services',
				routing: {
					request: {
						qs: {
							channelCodes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceDefinitionIds',
				name: 'timeSliceDefinitionIds',
				type: 'string',
				default: '',
				description: 'The time slice definition IDs',
				routing: {
					request: {
						qs: {
							timeSliceDefinitionIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceTemplate',
				name: 'timeSliceTemplate',
				type: 'options',
				default: 'DayUse',
				description: "The time slice template, defaults to 'over night'",
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
				routing: {
					request: {
						qs: {
							timeSliceTemplate: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'AvailabilityReservationsByIdUnitsGet',
		name: 'AvailabilityReservationsByIdUnitsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['availability-v1'],
				resource: ['ReservationAvailability'],
				operation: ['AvailabilityReservationsByIdUnitsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/availability/v1/reservations/{id}/units',
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
				url: '=/availability/v1/reservations/{{$value}}/units',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['ReservationAvailability'],
				operation: ['AvailabilityReservationsByIdUnitsGet'],
			},
		},
		options: [
			{
				displayName: 'From',
				name: 'from',
				type: 'dateTime',
				default: '',
				description: 'The from date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
				routing: {
					request: {
						qs: {
							from: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'IncludeOutOfService',
				name: 'includeOutOfService',
				type: 'boolean',
				default: false,
				description: 'Should units that are set OutOfService in the defined time period be returned as available',
				routing: {
					request: {
						qs: {
							includeOutOfService: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'dateTime',
				default: '',
				description: 'The to date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
				routing: {
					request: {
						qs: {
							to: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'UnitAttributeIds',
				name: 'unitAttributeIds',
				type: 'string',
				default: '',
				description: 'Return units with the specific unit attributes',
				routing: {
					request: {
						qs: {
							unitAttributeIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitCondition',
				name: 'unitCondition',
				type: 'options',
				default: 'Clean',
				description: 'The unit condition',
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
				routing: {
					request: {
						qs: {
							unitCondition: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupId',
				name: 'unitGroupId',
				type: 'string',
				default: '',
				description: 'The unit group ID',
				routing: {
					request: {
						qs: {
							unitGroupId: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingBlocksPost',
		name: 'BookingBlocksPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/blocks',
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
			'{\n  "groupId": "XPGMSXGF",\n  "ratePlanId": "MUC-NONREF-SGL",\n  "from": "2025-09-17",\n  "to": "2025-09-20",\n  "grossDailyRate": {\n    "amount": 160,\n    "currency": "EUR"\n  },\n  "timeSlices": [\n    {\n      "blockedUnits": 3\n    },\n    {\n      "blockedUnits": 0\n    },\n    {\n      "blockedUnits": 7\n    }\n  ]\n}',
		description: 'The details for the block you want to create',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["BookingBlocksPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Block'],
				operation: ['BookingBlocksPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingBlocksGet',
		name: 'BookingBlocksGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Block'],
				operation: ['BookingBlocksGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'From',
				name: 'from',
				type: 'dateTime',
				default: '',
				description: 'The start of the time range. All blocks that are overlapping with the interval specified by from and to will be returnedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							from: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'GroupId',
				name: 'groupId',
				type: 'string',
				default: '',
				description: 'Return blocks for the specific group',
				routing: {
					request: {
						qs: {
							groupId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Return blocks filtered by properties',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'RatePlanIds',
				name: 'ratePlanIds',
				type: 'string',
				default: '',
				description: 'Return blocks with any of the specified rate plans',
				routing: {
					request: {
						qs: {
							ratePlanIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Return blocks filtered by statuses',
				routing: {
					request: {
						qs: {
							status: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceDefinitionIds',
				name: 'timeSliceDefinitionIds',
				type: 'string',
				default: '',
				description: 'Return blocks with any of the specified time slice definitions',
				routing: {
					request: {
						qs: {
							timeSliceDefinitionIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceTemplate',
				name: 'timeSliceTemplate',
				type: 'options',
				default: 'DayUse',
				description: "The time slice template, defaults to 'over night'",
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
				routing: {
					request: {
						qs: {
							timeSliceTemplate: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'dateTime',
				default: '',
				description: 'The end of the time range. All blocks that are overlapping with the interval specified by from and to will be returnedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							to: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupIds',
				name: 'unitGroupIds',
				type: 'string',
				default: '',
				description: 'Return blocks with any of the specified unit groups',
				routing: {
					request: {
						qs: {
							unitGroupIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupTypes',
				name: 'unitGroupTypes',
				type: 'string',
				default: '',
				description: 'Return blocks with any of the specified unit group types',
				routing: {
					request: {
						qs: {
							unitGroupTypes: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingBlocks$countGet',
		name: 'BookingBlocks$countGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocks$countGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/$count',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Block'],
				operation: ['BookingBlocks$countGet'],
			},
		},
		options: [
			{
				displayName: 'From',
				name: 'from',
				type: 'dateTime',
				default: '',
				description: 'The start of the time range. All blocks that are overlapping with the interval specified by from and to will be returnedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							from: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'GroupId',
				name: 'groupId',
				type: 'string',
				default: '',
				description: 'Return blocks for the specific group',
				routing: {
					request: {
						qs: {
							groupId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Return blocks filtered by properties',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'RatePlanIds',
				name: 'ratePlanIds',
				type: 'string',
				default: '',
				description: 'Return blocks with any of the specified rate plans',
				routing: {
					request: {
						qs: {
							ratePlanIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Return blocks filtered by statuses',
				routing: {
					request: {
						qs: {
							status: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceDefinitionIds',
				name: 'timeSliceDefinitionIds',
				type: 'string',
				default: '',
				description: 'Return blocks with any of the specified time slice definitions',
				routing: {
					request: {
						qs: {
							timeSliceDefinitionIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceTemplate',
				name: 'timeSliceTemplate',
				type: 'options',
				default: 'DayUse',
				description: "The time slice template, defaults to 'over night'",
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
				routing: {
					request: {
						qs: {
							timeSliceTemplate: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'dateTime',
				default: '',
				description: 'The end of the time range. All blocks that are overlapping with the interval specified by from and to will be returnedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							to: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupIds',
				name: 'unitGroupIds',
				type: 'string',
				default: '',
				description: 'Return blocks with any of the specified unit groups',
				routing: {
					request: {
						qs: {
							unitGroupIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupTypes',
				name: 'unitGroupTypes',
				type: 'string',
				default: '',
				description: 'Return blocks with any of the specified unit group types',
				routing: {
					request: {
						qs: {
							unitGroupTypes: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingBlocksByIdGet',
		name: 'BookingBlocksByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Block'],
				operation: ['BookingBlocksByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/blocks/{id}',
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
				url: '=/booking/v1/blocks/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Block'],
				operation: ['BookingBlocksByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingBlock-actionsByIdConfirmPut',
		name: 'BookingBlock-actionsByIdConfirmPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['BlockActions'],
				operation: ['BookingBlock-actionsByIdConfirmPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/block-actions/{id}/confirm',
			},
		},
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
				url: '=/booking/v1/block-actions/{{$value}}/confirm',
			},
		},
	},
	{
		displayName: 'BookingBlock-actionsByIdReleasePut',
		name: 'BookingBlock-actionsByIdReleasePut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['BlockActions'],
				operation: ['BookingBlock-actionsByIdReleasePut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/block-actions/{id}/release',
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
				url: '=/booking/v1/block-actions/{{$value}}/release',
			},
		},
	},
	{
		displayName: 'BookingBlock-actionsByIdCancelPut',
		name: 'BookingBlock-actionsByIdCancelPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['BlockActions'],
				operation: ['BookingBlock-actionsByIdCancelPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/block-actions/{id}/cancel',
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
				url: '=/booking/v1/block-actions/{{$value}}/cancel',
			},
		},
	},
	{
		displayName: 'BookingBlock-actionsByIdWashPut',
		name: 'BookingBlock-actionsByIdWashPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['BlockActions'],
				operation: ['BookingBlock-actionsByIdWashPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/block-actions/{id}/wash',
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
				url: '=/booking/v1/block-actions/{{$value}}/wash',
			},
		},
	},
	{
		displayName: 'BookingBlock-actionsByIdAmendPut',
		name: 'BookingBlock-actionsByIdAmendPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['BlockActions'],
				operation: ['BookingBlock-actionsByIdAmendPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/block-actions/{id}/amend',
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
				url: '=/booking/v1/block-actions/{{$value}}/amend',
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
			'{\n  "from": "2025-09-17",\n  "to": "2025-09-20",\n  "grossDailyRate": {\n    "amount": 160,\n    "currency": "EUR"\n  },\n  "timeSlices": [\n    {\n      "blockedUnits": 3\n    },\n    {\n      "blockedUnits": 0\n    },\n    {\n      "blockedUnits": 7\n    }\n  ]\n}',
		description: 'The definition of the block',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["BookingBlock-actionsByIdAmendPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'BookingBookingsPost',
		name: 'BookingBookingsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings',
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
			'{\n  "paymentAccount": {\n    "accountNumber": "1111",\n    "accountHolder": "John Doe",\n    "expiryMonth": "8",\n    "expiryYear": "2018",\n    "paymentMethod": "visa",\n    "payerEmail": "s.hopper@test.com",\n    "payerReference": "4ea6462b-cca3-4c17-a035-c7b5132db83c",\n    "isVirtual": false\n  },\n  "booker": {\n    "title": "Mr",\n    "gender": "Male",\n    "firstName": "Jon",\n    "middleInitial": "D",\n    "lastName": "Doe",\n    "email": "john.d@doe.com",\n    "phone": "+4989123343",\n    "address": {\n      "addressLine1": "My Street 1",\n      "postalCode": "12453",\n      "city": "MyCity",\n      "countryCode": "GB"\n    }\n  },\n  "reservations": [\n    {\n      "arrival": "2025-09-14",\n      "departure": "2025-09-16",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "guestComment": "I need a wake up service",\n      "channelCode": "Direct",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Jon",\n        "middleInitial": "D",\n        "lastName": "Doe",\n        "email": "john.d@doe.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "Prepayment",\n      "travelPurpose": "Business",\n      "timeSlices": [\n        {\n          "ratePlanId": "MUC-NONREF-FAMILY"\n        },\n        {\n          "ratePlanId": "MUC-NONREF-FAMILY"\n        }\n      ],\n      "services": [\n        {\n          "serviceId": "MUC-BRKF"\n        },\n        {\n          "serviceId": "MUC-YOGA",\n          "dates": [\n            {\n              "serviceDate": "2025-09-15",\n              "amount": {\n                "amount": 35,\n                "currency": "EUR"\n              }\n            }\n          ]\n        }\n      ],\n      "prePaymentAmount": {\n        "amount": 50,\n        "currency": "EUR"\n      },\n      "externalReferences": {\n        "globalDistributionSystemId": "A2PA6WHY",\n        "onlineTravelAgencyId": "5247241379",\n        "onlineBookingToolId": "APA_HQL-C26181420|WAW-MUN-BC2-1U1",\n        "channelManagerId": "123295310",\n        "centralReservationSystemId": "91200088"\n      }\n    },\n    {\n      "arrival": "2025-09-15",\n      "departure": "2025-09-17",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "channelCode": "Direct",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Eric",\n        "middleInitial": "E",\n        "lastName": "Steinmetz",\n        "email": "eric.e@steinmetz.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "CreditCard",\n      "timeSlices": [\n        {\n          "ratePlanId": "BER-FLEX-DBL",\n          "totalAmount": {\n            "amount": 120,\n            "currency": "EUR"\n          }\n        },\n        {\n          "ratePlanId": "BER-FLEX-DBL",\n          "totalAmount": {\n            "amount": 125,\n            "currency": "EUR"\n          }\n        }\n      ],\n      "companyId": "BER-UMBRELLA",\n      "commission": {\n        "commissionAmount": {\n          "amount": 20,\n          "currency": "EUR"\n        },\n        "beforeCommissionAmount": {\n          "amount": 100,\n          "currency": "EUR"\n        }\n      },\n      "externalReferences": {\n        "globalDistributionSystemId": "A2PA6WHY",\n        "onlineTravelAgencyId": "5247241379",\n        "onlineBookingToolId": "APA_HQL-C26181420|WAW-MUN-BC2-1U1",\n        "channelManagerId": "123295310",\n        "centralReservationSystemId": "91200088"\n      }\n    }\n  ],\n  "transactionReference": "564578124534890J"\n}',
		description: 'The list of reservations you want to create',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["BookingBookingsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Booking'],
				operation: ['BookingBookingsPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingBookingsGet',
		name: 'BookingBookingsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/bookings',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Booking'],
				operation: ['BookingBookingsGet'],
			},
		},
		options: [
			{
				displayName: 'ChannelCode',
				name: 'channelCode',
				type: 'string',
				default: '',
				description: 'Filter result by the channel code. The resul set will contain all bookings having reservations with the specified channel code.',
				routing: {
					request: {
						qs: {
							channelCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ExternalCode',
				name: 'externalCode',
				type: 'string',
				default: '',
				description: 'Filter result by the external code. The result set will contain all bookings having reservations with external code starting with provided value.',
				routing: {
					request: {
						qs: {
							externalCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'GroupId',
				name: 'groupId',
				type: 'string',
				default: '',
				description: 'Filter result by group ID. The result set will contain all bookings having groups with the specified ID.',
				routing: {
					request: {
						qs: {
							groupId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ReservationId',
				name: 'reservationId',
				type: 'string',
				default: '',
				description: 'Filter result by reservation ID. The result set will contain all bookings having reservations with the specified ID.',
				routing: {
					request: {
						qs: {
							reservationId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TextSearch',
				name: 'textSearch',
				type: 'string',
				default: '',
				description: 'This will filter all bookings for the provided free text. Currently it only looks up if either the lastname, firstname, email or company name of the booker contains one of the provided values.',
				routing: {
					request: {
						qs: {
							textSearch: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingBookings$forcePost',
		name: 'BookingBookings$forcePost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookings$forcePost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings/$force',
			},
		},
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
			'{\n  "paymentAccount": {\n    "accountNumber": "1111",\n    "accountHolder": "John Doe",\n    "expiryMonth": "8",\n    "expiryYear": "2018",\n    "paymentMethod": "visa",\n    "payerEmail": "s.hopper@test.com",\n    "payerReference": "4ea6462b-cca3-4c17-a035-c7b5132db83c",\n    "isVirtual": false\n  },\n  "booker": {\n    "title": "Mr",\n    "gender": "Male",\n    "firstName": "Jon",\n    "middleInitial": "D",\n    "lastName": "Doe",\n    "email": "john.d@doe.com",\n    "phone": "+4989123343",\n    "address": {\n      "addressLine1": "My Street 1",\n      "postalCode": "12453",\n      "city": "MyCity",\n      "countryCode": "GB"\n    }\n  },\n  "reservations": [\n    {\n      "arrival": "2025-09-14",\n      "departure": "2025-09-16",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "guestComment": "I need a wake up service",\n      "channelCode": "Direct",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Jon",\n        "middleInitial": "D",\n        "lastName": "Doe",\n        "email": "john.d@doe.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "Prepayment",\n      "travelPurpose": "Business",\n      "timeSlices": [\n        {\n          "ratePlanId": "MUC-NONREF-FAMILY"\n        },\n        {\n          "ratePlanId": "MUC-NONREF-FAMILY"\n        }\n      ],\n      "services": [\n        {\n          "serviceId": "MUC-BRKF"\n        },\n        {\n          "serviceId": "MUC-YOGA",\n          "dates": [\n            {\n              "serviceDate": "2025-09-15",\n              "amount": {\n                "amount": 35,\n                "currency": "EUR"\n              }\n            }\n          ]\n        }\n      ],\n      "prePaymentAmount": {\n        "amount": 50,\n        "currency": "EUR"\n      },\n      "externalReferences": {\n        "globalDistributionSystemId": "A2PA6WHY",\n        "onlineTravelAgencyId": "5247241379",\n        "onlineBookingToolId": "APA_HQL-C26181420|WAW-MUN-BC2-1U1",\n        "channelManagerId": "123295310",\n        "centralReservationSystemId": "91200088"\n      }\n    },\n    {\n      "arrival": "2025-09-15",\n      "departure": "2025-09-17",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "channelCode": "Direct",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Eric",\n        "middleInitial": "E",\n        "lastName": "Steinmetz",\n        "email": "eric.e@steinmetz.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "CreditCard",\n      "timeSlices": [\n        {\n          "ratePlanId": "BER-FLEX-DBL",\n          "totalAmount": {\n            "amount": 120,\n            "currency": "EUR"\n          }\n        },\n        {\n          "ratePlanId": "BER-FLEX-DBL",\n          "totalAmount": {\n            "amount": 125,\n            "currency": "EUR"\n          }\n        }\n      ],\n      "companyId": "BER-UMBRELLA",\n      "commission": {\n        "commissionAmount": {\n          "amount": 20,\n          "currency": "EUR"\n        },\n        "beforeCommissionAmount": {\n          "amount": 100,\n          "currency": "EUR"\n        }\n      },\n      "externalReferences": {\n        "globalDistributionSystemId": "A2PA6WHY",\n        "onlineTravelAgencyId": "5247241379",\n        "onlineBookingToolId": "APA_HQL-C26181420|WAW-MUN-BC2-1U1",\n        "channelManagerId": "123295310",\n        "centralReservationSystemId": "91200088"\n      }\n    }\n  ],\n  "transactionReference": "564578124534890J"\n}',
		description: 'The list of reservations you want to create',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["BookingBookings$forcePost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Booking'],
				operation: ['BookingBookings$forcePost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingBookingsByIdReservationsPost',
		name: 'BookingBookingsByIdReservationsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdReservationsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings/{id}/reservations',
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
				url: '=/booking/v1/bookings/{{$value}}/reservations',
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
			'{\n  "reservations": [\n    {\n      "arrival": "2025-09-14",\n      "departure": "2025-09-16",\n      "adults": 1,\n      "comment": "I need a wake up service",\n      "externalCode": "812864414|381",\n      "channelCode": "BookingCom",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Jon",\n        "middleInitial": "D",\n        "lastName": "Doe",\n        "email": "john.d@doe.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "Prepayment",\n      "timeSlices": [\n        {\n          "ratePlanId": "MUC-NONREF-DBL"\n        },\n        {\n          "ratePlanId": "MUC-NONREF-DBL"\n        }\n      ],\n      "services": [\n        {\n          "serviceId": "MUC-BRKF"\n        },\n        {\n          "serviceId": "MUC-YOGA",\n          "dates": [\n            {\n              "serviceDate": "2025-09-15",\n              "amount": {\n                "amount": 35,\n                "currency": "EUR"\n              }\n            }\n          ]\n        }\n      ],\n      "companyId": "UMBRELLA",\n      "corporateCode": "UMBRELLA-MUC_NONREF_DBL"\n    },\n    {\n      "arrival": "2025-09-15",\n      "departure": "2025-09-17",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "channelCode": "Direct",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Eric",\n        "middleInitial": "E",\n        "lastName": "Steinmetz",\n        "email": "eric.e@steinmetz.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "CreditCard",\n      "timeSlices": [\n        {\n          "ratePlanId": "BER-FLEX-DBL"\n        },\n        {\n          "ratePlanId": "BER-FLEX-DBL"\n        }\n      ],\n      "commission": {\n        "commissionAmount": {\n          "amount": 20,\n          "currency": "EUR"\n        },\n        "beforeCommissionAmount": {\n          "amount": 100,\n          "currency": "EUR"\n        }\n      }\n    }\n  ],\n  "transactionReference": "RFEUFHEW"\n}',
		description: 'The list of reservations you want to add',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["BookingBookingsByIdReservationsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Booking'],
				operation: ['BookingBookingsByIdReservationsPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingBookingsByIdReservations$forcePost',
		name: 'BookingBookingsByIdReservations$forcePost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdReservations$forcePost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/bookings/{id}/reservations/$force',
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
				url: '=/booking/v1/bookings/{{$value}}/reservations/$force',
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
			'{\n  "reservations": [\n    {\n      "arrival": "2025-09-14",\n      "departure": "2025-09-16",\n      "adults": 1,\n      "comment": "I need a wake up service",\n      "externalCode": "812864414|381",\n      "channelCode": "BookingCom",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Jon",\n        "middleInitial": "D",\n        "lastName": "Doe",\n        "email": "john.d@doe.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "Prepayment",\n      "timeSlices": [\n        {\n          "ratePlanId": "MUC-NONREF-DBL"\n        },\n        {\n          "ratePlanId": "MUC-NONREF-DBL"\n        }\n      ],\n      "services": [\n        {\n          "serviceId": "MUC-BRKF"\n        },\n        {\n          "serviceId": "MUC-YOGA",\n          "dates": [\n            {\n              "serviceDate": "2025-09-15",\n              "amount": {\n                "amount": 35,\n                "currency": "EUR"\n              }\n            }\n          ]\n        }\n      ],\n      "companyId": "UMBRELLA",\n      "corporateCode": "UMBRELLA-MUC_NONREF_DBL"\n    },\n    {\n      "arrival": "2025-09-15",\n      "departure": "2025-09-17",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "channelCode": "Direct",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Eric",\n        "middleInitial": "E",\n        "lastName": "Steinmetz",\n        "email": "eric.e@steinmetz.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      },\n      "guaranteeType": "CreditCard",\n      "timeSlices": [\n        {\n          "ratePlanId": "BER-FLEX-DBL"\n        },\n        {\n          "ratePlanId": "BER-FLEX-DBL"\n        }\n      ],\n      "commission": {\n        "commissionAmount": {\n          "amount": 20,\n          "currency": "EUR"\n        },\n        "beforeCommissionAmount": {\n          "amount": 100,\n          "currency": "EUR"\n        }\n      }\n    }\n  ],\n  "transactionReference": "RFEUFHEW"\n}',
		description: 'The list of reservations you want to add',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["BookingBookingsByIdReservations$forcePost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Booking'],
				operation: ['BookingBookingsByIdReservations$forcePost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingBookingsByIdGet',
		name: 'BookingBookingsByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/bookings/{id}',
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
				url: '=/booking/v1/bookings/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Booking'],
				operation: ['BookingBookingsByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations, propertyValues. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingBookingsByIdPatch',
		name: 'BookingBookingsByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Booking'],
				operation: ['BookingBookingsByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/booking/v1/bookings/{id}',
			},
		},
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
				url: '=/booking/v1/bookings/{{$value}}',
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
				body: '={{JSON.parse($parameter["BookingBookingsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'BookingGroupsPost',
		name: 'BookingGroupsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/groups',
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
				body: '={{JSON.parse($parameter["BookingGroupsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Group'],
				operation: ['BookingGroupsPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingGroupsGet',
		name: 'BookingGroupsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/groups',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Group'],
				operation: ['BookingGroupsGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'From',
				name: 'from',
				type: 'dateTime',
				default: '',
				description: 'The start of the time range. All groups that have blocks overlapping with the interval specified by from and to will be returnedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							from: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested properties',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TextSearch',
				name: 'textSearch',
				type: 'string',
				default: '',
				description: 'This will filter all group bookings for the provided free text. Currently it only looks up if either the group name, lastname, firstname, email or company name of the booker contains one of the provided values.',
				routing: {
					request: {
						qs: {
							textSearch: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'dateTime',
				default: '',
				description: 'The end of the time range. All groups that have blocks overlapping with the interval specified by from and to will be returnedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							to: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingGroupsByIdGet',
		name: 'BookingGroupsByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/groups/{id}',
			},
		},
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
				url: '=/booking/v1/groups/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Group'],
				operation: ['BookingGroupsByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingGroupsByIdPatch',
		name: 'BookingGroupsByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/booking/v1/groups/{id}',
			},
		},
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
				url: '=/booking/v1/groups/{{$value}}',
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
				body: '={{JSON.parse($parameter["BookingGroupsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'BookingGroupsByIdReservationsPost',
		name: 'BookingGroupsByIdReservationsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Group'],
				operation: ['BookingGroupsByIdReservationsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/booking/v1/groups/{id}/reservations',
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
				url: '=/booking/v1/groups/{{$value}}/reservations',
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
			'{\n  "reservations": [\n    {\n      "blockId": "MUC-QJNXJR",\n      "arrival": "2025-09-14",\n      "departure": "2025-09-16",\n      "adults": 1,\n      "comment": "I need a wake up service",\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Jon",\n        "middleInitial": "D",\n        "lastName": "Doe",\n        "email": "john.d@doe.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "company": {\n          "name": "Company GmbH",\n          "taxId": "1442"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      }\n    },\n    {\n      "blockId": "MUC-WKMCKT",\n      "arrival": "2025-09-15",\n      "departure": "2025-09-17",\n      "adults": 1,\n      "childrenAges": [\n        6\n      ],\n      "primaryGuest": {\n        "title": "Mr",\n        "gender": "Male",\n        "firstName": "Eric",\n        "middleInitial": "E",\n        "lastName": "Steinmetz",\n        "email": "eric.e@steinmetz.com",\n        "phone": "+4989123343",\n        "address": {\n          "addressLine1": "My Street 1",\n          "postalCode": "12453",\n          "city": "MyCity",\n          "countryCode": "GB"\n        },\n        "vehicleRegistration": {\n          "number": "APA322",\n          "countryCode": "DE"\n        }\n      }\n    }\n  ]\n}',
		description: 'The list of reservations you want to create',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["BookingGroupsByIdReservationsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Group'],
				operation: ['BookingGroupsByIdReservationsPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingOffersGet',
		name: 'BookingOffersGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offers',
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
				qs: {
					adults: '={{$parameter["BookingOffersGet_adults"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Offer'],
				operation: ['BookingOffersGet'],
			},
		},
		options: [
			{
				displayName: 'ChannelCode',
				name: 'channelCode',
				type: 'options',
				default: 'AltoVita',
				description: 'Channel code, used to filter the rate plans',
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
				routing: {
					request: {
						qs: {
							channelCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ChildrenAges',
				name: 'childrenAges',
				type: 'string',
				default: '',
				description: 'The ages of the children you want offers for',
				routing: {
					request: {
						qs: {
							childrenAges: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CorporateCode',
				name: 'corporateCode',
				type: 'string',
				default: '',
				description: 'The code associated with a corporate rate',
				routing: {
					request: {
						qs: {
							corporateCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IncludeUnavailable',
				name: 'includeUnavailable',
				type: 'boolean',
				default: false,
				description: 'Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned.',
				routing: {
					request: {
						qs: {
							includeUnavailable: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PromoCode',
				name: 'promoCode',
				type: 'string',
				default: '',
				description: 'The promo code associated with a certain special offer',
				routing: {
					request: {
						qs: {
							promoCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceDefinitionIds',
				name: 'timeSliceDefinitionIds',
				type: 'string',
				default: '',
				description: 'Time slice definition IDs, used to filter rate plans',
				routing: {
					request: {
						qs: {
							timeSliceDefinitionIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceTemplate',
				name: 'timeSliceTemplate',
				type: 'options',
				default: 'DayUse',
				description:
					"The time slice template used to filter the rate plans, defaults to 'over night'",
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
				routing: {
					request: {
						qs: {
							timeSliceTemplate: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupIds',
				name: 'unitGroupIds',
				type: 'string',
				default: '',
				description: 'Unit group IDs, used to filter rate plans',
				routing: {
					request: {
						qs: {
							unitGroupIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupTypes',
				name: 'unitGroupTypes',
				type: 'string',
				default: '',
				description: 'Unit group types, used to filter rate plans',
				routing: {
					request: {
						qs: {
							unitGroupTypes: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingRate-Plan-offersGet',
		name: 'BookingRate-plan-offersGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingRate-plan-offersGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/rate-plan-offers',
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
				qs: {
					adults: '={{$parameter["BookingRate-plan-offersGet_adults"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Offer'],
				operation: ['BookingRate-plan-offersGet'],
			},
		},
		options: [
			{
				displayName: 'ChannelCode',
				name: 'channelCode',
				type: 'options',
				default: 'AltoVita',
				description: 'The channel code',
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
				routing: {
					request: {
						qs: {
							channelCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ChildrenAges',
				name: 'childrenAges',
				type: 'string',
				default: '',
				description: 'The ages of the children you want offers for',
				routing: {
					request: {
						qs: {
							childrenAges: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IncludeUnavailable',
				name: 'includeUnavailable',
				type: 'boolean',
				default: false,
				description: 'Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned.',
				routing: {
					request: {
						qs: {
							includeUnavailable: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'OverridePrices',
				name: 'overridePrices',
				type: 'string',
				default: '',
				description: 'Desired prices for each timeslice',
				routing: {
					request: {
						qs: {
							overridePrices: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingService-offersGet',
		name: 'BookingService-offersGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingService-offersGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/service-offers',
			},
		},
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
				qs: {
					adults: '={{$parameter["BookingService-offersGet_adults"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Offer'],
				operation: ['BookingService-offersGet'],
			},
		},
		options: [
			{
				displayName: 'ChannelCode',
				name: 'channelCode',
				type: 'options',
				default: 'AltoVita',
				description: 'The channel code used to filter the services',
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
				routing: {
					request: {
						qs: {
							channelCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ChildrenAges',
				name: 'childrenAges',
				type: 'string',
				default: '',
				description: 'The ages of the children you want offers for',
				routing: {
					request: {
						qs: {
							childrenAges: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IncludeUnavailable',
				name: 'includeUnavailable',
				type: 'boolean',
				default: false,
				description: 'Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned.',
				routing: {
					request: {
						qs: {
							includeUnavailable: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'OnlyDefaultDates',
				name: 'onlyDefaultDates',
				type: 'boolean',
				default: false,
				description: 'Depending on the postNextDay setting of a service it will be posted before or after midnight. Breakfast is usually delivered on the next morning, having \'postNextDay\' set to true. Its \'default dates\' are from the day after arrival until the departure day. For services like dinner \'postNextDay\' is false, and default dates are day of arrival until one day before departure. With this query parameter set to \'false\', you can also ask for dates outside of those default dates. It defaults to true.',
				routing: {
					request: {
						qs: {
							onlyDefaultDates: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingOffer-indexGet',
		name: 'BookingOffer-indexGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Offer'],
				operation: ['BookingOffer-indexGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/offer-index',
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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Offer'],
				operation: ['BookingOffer-indexGet'],
			},
		},
		options: [
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingReservationsGet',
		name: 'BookingReservationsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Reservation'],
				operation: ['BookingReservationsGet'],
			},
		},
		options: [
			{
				displayName: 'AllFoliosHaveInvoice',
				name: 'allFoliosHaveInvoice',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, returns only reservations, in which all folios are closed and have an invoice. If set to `false`, returns only reservations, in which some of the folios are open or don\'t have an invoice.',
				routing: {
					request: {
						qs: {
							allFoliosHaveInvoice: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'BalanceFilter',
				name: 'balanceFilter',
				type: 'string',
				default: '',
				description: 'This will filter reservations based on their balance.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
				routing: {
					request: {
						qs: {
							balanceFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'BlockIds',
				name: 'blockIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested blocks',
				routing: {
					request: {
						qs: {
							blockIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'BookingId',
				name: 'bookingId',
				type: 'string',
				default: '',
				description: 'Filter result by booking ID',
				routing: {
					request: {
						qs: {
							bookingId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ChannelCode',
				name: 'channelCode',
				type: 'string',
				default: '',
				description: 'Filter result by the channel code',
				routing: {
					request: {
						qs: {
							channelCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CompanyIds',
				name: 'companyIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested companies',
				routing: {
					request: {
						qs: {
							companyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'DateFilter',
				name: 'dateFilter',
				type: 'options',
				default: 'Arrival',
				description: 'Filter by date and time attributes of reservation. Use in combination with the \'To\' and \'From\' attributes. All filters will check if the date specified by the filter type is between from (included) and to (excluded). The exception being filtering for \'stay\', which will return all reservations that are overlapping with the interval specified by from and to.',
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
				routing: {
					request: {
						qs: {
							dateFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: booker, actions, timeSlices, services, assignedUnits, company. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ExternalCode',
				name: 'externalCode',
				type: 'string',
				default: '',
				description: 'Filter result by the external code. The result set will contain all reservations that have an external code starting with the provided value.',
				routing: {
					request: {
						qs: {
							externalCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ExternalReferences',
				name: 'externalReferences',
				type: 'string',
				default: '',
				description:
					'This will filter all reservation where the provided external references have an exact match on at least one of the properties in Apaleo.Api.Modules.Booking.Models.Reservation.ExternalReferencesModel',
				routing: {
					request: {
						qs: {
							externalReferences: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'From',
				name: 'from',
				type: 'dateTime',
				default: '',
				description: 'The start of the time interval. When filtering by date, at least one of \'from\' and \'to\' has to be specifiedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							from: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'IsPreCheckedIn',
				name: 'isPreCheckedIn',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, returns only the reservations marked as pre-checked-in. If set to `false`, returns only the reservations not marked as pre-checked-in.',
				routing: {
					request: {
						qs: {
							isPreCheckedIn: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'MarketSegmentIds',
				name: 'marketSegmentIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested market segments',
				routing: {
					request: {
						qs: {
							marketSegmentIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested properties',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'RatePlanIds',
				name: 'ratePlanIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested rate plans',
				routing: {
					request: {
						qs: {
							ratePlanIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				default: '',
				description:
					'List of all fields that can be used to sort the results. Possible values are: arrival:asc, arrival:desc, departure:asc, departure:desc, created:asc, created:desc, updated:asc, updated:desc, balance:asc, balance:desc, ID:asc, ID:desc, firstname:asc, firstname:desc, lastname:asc, lastname:desc, unitname:asc, unitname:desc. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							sort: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Sources',
				name: 'sources',
				type: 'string',
				default: '',
				description: 'Filter result by source',
				routing: {
					request: {
						qs: {
							sources: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Filter result by reservation status',
				routing: {
					request: {
						qs: {
							status: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TextSearch',
				name: 'textSearch',
				type: 'string',
				default: '',
				description: 'This will filter all reservations where the provided text is contained in: booker first name or last name or email or company name, primary guest first name or last name or email or company name, external code, reservation ID, unit name. The search is case insensitive.',
				routing: {
					request: {
						qs: {
							textSearch: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'dateTime',
				default: '',
				description: 'The end of the time interval, must be larger than \'from\'. When filtering by date, at least one of \'from\' and \'to\' has to be specifiedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							to: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupIds',
				name: 'unitGroupIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested unit groups',
				routing: {
					request: {
						qs: {
							unitGroupIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupTypes',
				name: 'unitGroupTypes',
				type: 'string',
				default: '',
				description: 'Filter result by requested unit group types',
				routing: {
					request: {
						qs: {
							unitGroupTypes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitIds',
				name: 'unitIds',
				type: 'string',
				default: '',
				description: 'Filter result by assigned units',
				routing: {
					request: {
						qs: {
							unitIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ValidationMessageCategory',
				name: 'validationMessageCategory',
				type: 'string',
				default: '',
				description: 'Filter result by validation message category',
				routing: {
					request: {
						qs: {
							validationMessageCategory: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingReservations$countGet',
		name: 'BookingReservations$countGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/$count',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Reservation'],
				operation: ['BookingReservations$countGet'],
			},
		},
		options: [
			{
				displayName: 'AllFoliosHaveInvoice',
				name: 'allFoliosHaveInvoice',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, returns only reservations, in which all folios are closed and have an invoice. If set to `false`, returns only reservations, in which some of the folios are open or don\'t have an invoice.',
				routing: {
					request: {
						qs: {
							allFoliosHaveInvoice: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'BalanceFilter',
				name: 'balanceFilter',
				type: 'string',
				default: '',
				description: 'This will filter reservations based on their balance.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
				routing: {
					request: {
						qs: {
							balanceFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'BlockIds',
				name: 'blockIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested blocks',
				routing: {
					request: {
						qs: {
							blockIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'BookingId',
				name: 'bookingId',
				type: 'string',
				default: '',
				description: 'Filter result by booking ID',
				routing: {
					request: {
						qs: {
							bookingId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ChannelCode',
				name: 'channelCode',
				type: 'string',
				default: '',
				description: 'Filter result by the channel code',
				routing: {
					request: {
						qs: {
							channelCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CompanyIds',
				name: 'companyIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested companies',
				routing: {
					request: {
						qs: {
							companyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'DateFilter',
				name: 'dateFilter',
				type: 'options',
				default: 'Arrival',
				description: 'Filter by date and time attributes of reservation. Use in combination with the \'To\' and \'From\' attributes. All filters will check if the date specified by the filter type is between from (included) and to (excluded). The exception being filtering for \'stay\', which will return all reservations that are overlapping with the interval specified by from and to.',
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
				routing: {
					request: {
						qs: {
							dateFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ExternalCode',
				name: 'externalCode',
				type: 'string',
				default: '',
				description: 'Filter result by the external code. The result set will contain all reservations that have an external code starting with the provided value.',
				routing: {
					request: {
						qs: {
							externalCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ExternalReferences',
				name: 'externalReferences',
				type: 'string',
				default: '',
				description:
					'This will filter all reservation where the provided external references have an exact match on at least one of the properties in Apaleo.Api.Modules.Booking.Models.Reservation.ExternalReferencesModel',
				routing: {
					request: {
						qs: {
							externalReferences: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'From',
				name: 'from',
				type: 'dateTime',
				default: '',
				description: 'The start of the time interval. When filtering by date, at least one of \'from\' and \'to\' has to be specifiedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							from: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'IsPreCheckedIn',
				name: 'isPreCheckedIn',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, returns only the reservations marked as pre-checked-in. If set to `false`, returns only the reservations not marked as pre-checked-in.',
				routing: {
					request: {
						qs: {
							isPreCheckedIn: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'MarketSegmentIds',
				name: 'marketSegmentIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested market segments',
				routing: {
					request: {
						qs: {
							marketSegmentIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested properties',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'RatePlanIds',
				name: 'ratePlanIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested rate plans',
				routing: {
					request: {
						qs: {
							ratePlanIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Sources',
				name: 'sources',
				type: 'string',
				default: '',
				description: 'Filter result by source',
				routing: {
					request: {
						qs: {
							sources: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Filter result by reservation status',
				routing: {
					request: {
						qs: {
							status: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TextSearch',
				name: 'textSearch',
				type: 'string',
				default: '',
				description: 'This will filter all reservations where the provided text is contained in: booker first name or last name or email or company name, primary guest first name or last name or email or company name, external code, reservation ID, unit name. The search is case insensitive.',
				routing: {
					request: {
						qs: {
							textSearch: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'dateTime',
				default: '',
				description: 'The end of the time interval, must be larger than \'from\'. When filtering by date, at least one of \'from\' and \'to\' has to be specifiedA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							to: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupIds',
				name: 'unitGroupIds',
				type: 'string',
				default: '',
				description: 'Filter result by requested unit groups',
				routing: {
					request: {
						qs: {
							unitGroupIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupTypes',
				name: 'unitGroupTypes',
				type: 'string',
				default: '',
				description: 'Filter result by requested unit group types',
				routing: {
					request: {
						qs: {
							unitGroupTypes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitIds',
				name: 'unitIds',
				type: 'string',
				default: '',
				description: 'Filter result by assigned units',
				routing: {
					request: {
						qs: {
							unitIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ValidationMessageCategory',
				name: 'validationMessageCategory',
				type: 'string',
				default: '',
				description: 'Filter result by validation message category',
				routing: {
					request: {
						qs: {
							validationMessageCategory: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingReservationsByIdGet',
		name: 'BookingReservationsByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}',
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
				url: '=/booking/v1/reservations/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: timeSlices, services, booker, actions, company, assignedUnits. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingReservationsByIdPatch',
		name: 'BookingReservationsByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/booking/v1/reservations/{id}',
			},
		},
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
				url: '=/booking/v1/reservations/{{$value}}',
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
				body: '={{JSON.parse($parameter["BookingReservationsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'BookingReservationsByIdOffersGet',
		name: 'BookingReservationsByIdOffersGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdOffersGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/offers',
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
				url: '=/booking/v1/reservations/{{$value}}/offers',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdOffersGet'],
			},
		},
		options: [
			{
				displayName: 'Adults',
				name: 'adults',
				type: 'number',
				default: '',
				description: 'Number of adults',
				routing: {
					request: {
						qs: {
							adults: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Arrival',
				name: 'arrival',
				type: 'string',
				default: '',
				description: 'Date and optional time of arrivalSpecify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
				routing: {
					request: {
						qs: {
							arrival: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ChannelCode',
				name: 'channelCode',
				type: 'options',
				default: 'AltoVita',
				description: 'The channel code used to filter the rate plans',
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
				routing: {
					request: {
						qs: {
							channelCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ChildrenAges',
				name: 'childrenAges',
				type: 'string',
				default: '',
				description: 'Ages of children',
				routing: {
					request: {
						qs: {
							childrenAges: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Departure',
				name: 'departure',
				type: 'string',
				default: '',
				description: 'Date and optional time of departure. Cannot be more than 5 years after arrival.Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							departure: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IncludeUnavailable',
				name: 'includeUnavailable',
				type: 'boolean',
				default: false,
				description: 'Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned.',
				routing: {
					request: {
						qs: {
							includeUnavailable: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PromoCode',
				name: 'promoCode',
				type: 'string',
				default: '',
				description: 'The promo code associated with a certain special offer, like corporate rate',
				routing: {
					request: {
						qs: {
							promoCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Requote',
				name: 'requote',
				type: 'boolean',
				default: false,
				description: 'Whether the offers should be re-quoted based on current prices, or only additions like change of number of adults should be calculated. Defaults to \'false\'.',
				routing: {
					request: {
						qs: {
							requote: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupIds',
				name: 'unitGroupIds',
				type: 'string',
				default: '',
				description: 'The list of unit groups used to filter the offers',
				routing: {
					request: {
						qs: {
							unitGroupIds: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingReservationsByIdService-offersGet',
		name: 'BookingReservationsByIdService-offersGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdService-offersGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/service-offers',
			},
		},
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
				url: '=/booking/v1/reservations/{{$value}}/service-offers',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdService-offersGet'],
			},
		},
		options: [
			{
				displayName: 'ChannelCode',
				name: 'channelCode',
				type: 'options',
				default: 'AltoVita',
				description: 'The channel code used to filter the services',
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
				routing: {
					request: {
						qs: {
							channelCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IncludeUnavailable',
				name: 'includeUnavailable',
				type: 'boolean',
				default: false,
				description: 'Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned.',
				routing: {
					request: {
						qs: {
							includeUnavailable: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'OnlyDefaultDates',
				name: 'onlyDefaultDates',
				type: 'boolean',
				default: false,
				description: 'Depending on the postNextDay setting of a service it will by default be posted before or after midnight. Breakfast is usually delivered on the next morning, so all the dates from the day after arrival to the departure day are default dates and will have this flag set to true. For services like a dinner it is the other way around. With this query parameter, you can also ask for the dates, that usually the service will not be booked. It defaults to true.',
				routing: {
					request: {
						qs: {
							onlyDefaultDates: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingReservationsByIdServicesGet',
		name: 'BookingReservationsByIdServicesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdServicesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/reservations/{id}/services',
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
				url: '=/booking/v1/reservations/{{$value}}/services',
			},
		},
	},
	{
		displayName: 'BookingReservationsByIdServicesDelete',
		name: 'BookingReservationsByIdServicesDelete',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Reservation'],
				operation: ['BookingReservationsByIdServicesDelete'],
			},
		},
		routing: {
			request: {
				method: 'DELETE',
				url: '/booking/v1/reservations/{id}/services',
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
				url: '=/booking/v1/reservations/{{$value}}/services',
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
				qs: {
					serviceId: '={{$parameter["BookingReservationsByIdServicesDelete_serviceId"]}}',
				},
			},
		},
	},
	{
		displayName: 'BookingReservation-actionsByIdAssign-unitPut',
		name: 'BookingReservation-actionsByIdAssign-unitPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAssign-unitPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/assign-unit',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/assign-unit',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAssign-unitPut'],
			},
		},
		options: [
			{
				displayName: 'UnitConditions',
				name: 'unitConditions',
				type: 'string',
				default: '',
				description: 'The optional unit conditions for unit that you want to auto assign for',
				routing: {
					request: {
						qs: {
							unitConditions: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingReservation-actionsByIdAssign-unitByUnitIdPut',
		name: 'BookingReservation-actionsByIdAssign-unitByUnitIdPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAssign-unitByUnitIdPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/assign-unit/{unitId}',
			},
		},
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
				url: '=/booking/v1/reservation-actions/{{$value}}/assign-unit/{unitId}',
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
				url: '=/booking/v1/reservation-actions/{id}/assign-unit/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAssign-unitByUnitIdPut'],
			},
		},
		options: [
			{
				displayName: 'From',
				name: 'from',
				type: 'string',
				default: '',
				description: 'The start date and optional time for the unit assignment. If not specified, the reservation\'s arrival will be used.Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							from: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'LockUnit',
				name: 'lockUnit',
				type: 'boolean',
				default: false,
				description:
					'Whether to lock the unit for the duration of the reservation. If not specified, the unit will not be locked.',
				routing: {
					request: {
						qs: {
							lockUnit: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'string',
				default: '',
				description: 'The end date and optional time for the unit assignment. If not specified, the reservation\'s departure will be used.Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							to: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingReservation-actionsByIdUnassign-unitsPut',
		name: 'BookingReservation-actionsByIdUnassign-unitsPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdUnassign-unitsPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/unassign-units',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/unassign-units',
			},
		},
	},
	{
		displayName: 'BookingReservation-actionsByIdCheckinPut',
		name: 'BookingReservation-actionsByIdCheckinPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdCheckinPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/checkin',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/checkin',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdCheckinPut'],
			},
		},
		options: [
			{
				displayName: 'WithCityTax',
				name: 'withCityTax',
				type: 'boolean',
				default: false,
				description:
					'Define if city tax should be added for this reservation or not. The default is "true".',
				routing: {
					request: {
						qs: {
							withCityTax: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'BookingReservation-actionsByIdRevert-checkinPut',
		name: 'BookingReservation-actionsByIdRevert-checkinPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdRevert-checkinPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/revert-checkin',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/revert-checkin',
			},
		},
	},
	{
		displayName: 'BookingReservation-actionsByIdCheckoutPut',
		name: 'BookingReservation-actionsByIdCheckoutPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdCheckoutPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/checkout',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/checkout',
			},
		},
	},
	{
		displayName: 'BookingReservation-actionsByIdCancelPut',
		name: 'BookingReservation-actionsByIdCancelPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdCancelPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/cancel',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/cancel',
			},
		},
	},
	{
		displayName: 'BookingReservation-actionsByIdNoshowPut',
		name: 'BookingReservation-actionsByIdNoshowPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdNoshowPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/noshow',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/noshow',
			},
		},
	},
	{
		displayName: 'BookingReservation-actionsByIdAmendPut',
		name: 'BookingReservation-actionsByIdAmendPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAmendPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/amend',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/amend',
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
			'{\n  "arrival": "2025-09-14T17:00:00+02:00",\n  "departure": "2025-09-16T11:00:00+02:00",\n  "adults": 1,\n  "childrenAges": [\n    6\n  ],\n  "requote": false,\n  "timeSlices": [\n    {\n      "ratePlanId": "MUC-NONREF-DBL",\n      "totalGrossAmount": {\n        "amount": 86,\n        "currency": "EUR"\n      }\n    },\n    {\n      "ratePlanId": "MUC-NONREF-DBL",\n      "totalGrossAmount": {\n        "amount": 101,\n        "currency": "EUR"\n      }\n    }\n  ]\n}',
		description: 'The new stay details that should be applied to the reservation',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["BookingReservation-actionsByIdAmendPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'BookingReservation-actionsByIdAmend$forcePut',
		name: 'BookingReservation-actionsByIdAmend$forcePut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAmend$forcePut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/amend/$force',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/amend/$force',
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
			'{\n  "arrival": "2025-09-14T17:00:00+02:00",\n  "departure": "2025-09-16T11:00:00+02:00",\n  "adults": 1,\n  "childrenAges": [\n    6\n  ],\n  "requote": false,\n  "timeSlices": [\n    {\n      "ratePlanId": "MUC-NONREF-DBL",\n      "totalGrossAmount": {\n        "amount": 86,\n        "currency": "EUR"\n      }\n    },\n    {\n      "ratePlanId": "MUC-NONREF-DBL",\n      "totalGrossAmount": {\n        "amount": 101,\n        "currency": "EUR"\n      }\n    }\n  ]\n}',
		description: 'The new stay details that should be applied to the reservation',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["BookingReservation-actionsByIdAmend$forcePut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'BookingReservation-actionsByIdBook-servicePut',
		name: 'BookingReservation-actionsByIdBook-servicePut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdBook-servicePut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/book-service',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/book-service',
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
			'{\n  "serviceId": "MUC-SPA",\n  "dates": [\n    {\n      "serviceDate": "2025-09-12",\n      "amount": {\n        "amount": 25,\n        "currency": "EUR"\n      }\n    },\n    {\n      "serviceDate": "2025-09-13"\n    }\n  ]\n}',
		description: 'Request body (JSON format). See API documentation for the expected schema.',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["BookingReservation-actionsByIdBook-servicePut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'BookingReservation-actionsByIdBook-service$forcePut',
		name: 'BookingReservation-actionsByIdBook-service$forcePut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdBook-service$forcePut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/book-service/$force',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/book-service/$force',
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
			'{\n  "serviceId": "MUC-SPA",\n  "dates": [\n    {\n      "serviceDate": "2025-09-12",\n      "amount": {\n        "amount": 25,\n        "currency": "EUR"\n      }\n    },\n    {\n      "serviceDate": "2025-09-13"\n    }\n  ]\n}',
		description: 'Request body (JSON format). See API documentation for the expected schema.',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["BookingReservation-actionsByIdBook-service$forcePut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'BookingReservation-actionsByIdRemove-City-taxPut',
		name: 'BookingReservation-actionsByIdRemove-city-taxPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdRemove-city-taxPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/remove-city-tax',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/remove-city-tax',
			},
		},
	},
	{
		displayName: 'BookingReservation-actionsByIdAdd-City-taxPut',
		name: 'BookingReservation-actionsByIdAdd-city-taxPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['ReservationActions'],
				operation: ['BookingReservation-actionsByIdAdd-city-taxPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/booking/v1/reservation-actions/{id}/add-city-tax',
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
				url: '=/booking/v1/reservation-actions/{{$value}}/add-city-tax',
			},
		},
	},
	{
		displayName: 'BookingTypesSourcesGet',
		name: 'BookingTypesSourcesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Types'],
				operation: ['BookingTypesSourcesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/types/sources',
			},
		},
	},
	{
		displayName: 'BookingTypesByTypeAllowed-valuesGet',
		name: 'BookingTypesByTypeAllowed-valuesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['booking-v1'],
				resource: ['Types'],
				operation: ['BookingTypesByTypeAllowed-valuesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/booking/v1/types/{type}/allowed-values',
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
				url: '=/booking/v1/types/{{$value}}/allowed-values',
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
				qs: {
					countryCode: '={{$parameter["BookingTypesByTypeAllowed-valuesGet_countryCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Types'],
				operation: ['BookingTypesByTypeAllowed-valuesGet'],
			},
		},
		options: [
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				default: '',
				description:
					'List of all fields that can be used to sort the results. Possible values are: value:asc, value:desc. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							sort: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TextSearch',
				name: 'textSearch',
				type: 'string',
				default: '',
				description: 'Filter the result by the provided free text. If specified, only values that contain one of the provided values will be returned.',
				routing: {
					request: {
						qs: {
							textSearch: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosGet',
		name: 'FinanceFoliosGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Folio'],
				operation: ['FinanceFoliosGet'],
			},
		},
		options: [
			{
				displayName: 'BalanceFilter',
				name: 'balanceFilter',
				type: 'string',
				default: '',
				description: 'This will filter reservations based on their balance.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
				routing: {
					request: {
						qs: {
							balanceFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'BookingIds',
				name: 'bookingIds',
				type: 'string',
				default: '',
				description: 'Filter folio list by booking IDs',
				routing: {
					request: {
						qs: {
							bookingIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CheckedOutOnAccountsReceivable',
				name: 'checkedOutOnAccountsReceivable',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, only return folios that have been checked out on accounts receivables Otherwise, returns all',
				routing: {
					request: {
						qs: {
							checkedOutOnAccountsReceivable: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CompanyIds',
				name: 'companyIds',
				type: 'string',
				default: '',
				description: 'Filter folio list by company IDs',
				routing: {
					request: {
						qs: {
							companyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CreatedFrom',
				name: 'createdFrom',
				type: 'dateTime',
				default: '',
				description: 'The inclusive start time of the date of creation. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							createdFrom:
								'={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'CreatedTo',
				name: 'createdTo',
				type: 'dateTime',
				default: '',
				description: 'The exclusive end time of the date of creation. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							createdTo:
								'={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'ExcludeClosed',
				name: 'excludeClosed',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, closed folios are filtered out from the result collection - <b>DEPRECATED: This field will be removed soon. Please use Status=Open instead.</b>.',
				routing: {
					request: {
						qs: {
							excludeClosed: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: allowances, allowedActions, transitoryCharges, charges, company, payments, warnings. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ExternalFolioCode',
				name: 'externalFolioCode',
				type: 'string',
				default: '',
				description:
					'Allows filtering external folios by code.\r\nUseful when you use external folios with custom codes.\r\nSpecifying this parameter will ignore the <b>Type</b> parameter and treat as if it would be set to "External" instead.',
				routing: {
					request: {
						qs: {
							externalFolioCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'HasInvoices',
				name: 'hasInvoices',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, only return folios that been invoices',
				routing: {
					request: {
						qs: {
							hasInvoices: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IsEmpty',
				name: 'isEmpty',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, only return empty folios (no unmoved [transitory] charges, no unmoved payments, no allowances). If set to `false`, only return non-empty folios.',
				routing: {
					request: {
						qs: {
							isEmpty: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'OnlyMain',
				name: 'onlyMain',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, only main folios are returned, otherwise all',
				routing: {
					request: {
						qs: {
							onlyMain: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Filter folio list by property IDs',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ReservationIds',
				name: 'reservationIds',
				type: 'string',
				default: '',
				description: 'Filter folio list by reservation IDs',
				routing: {
					request: {
						qs: {
							reservationIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: 'Closed',
				description: 'The status of the folio',
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
				routing: {
					request: {
						qs: {
							status: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TextSearch',
				name: 'textSearch',
				type: 'string',
				default: '',
				description: 'This will filter all folios where the provided text is contained in: debitor first name or last name or company name, folio ID. The search is case insensitive.',
				routing: {
					request: {
						qs: {
							textSearch: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'Booking',
				description: 'The type of the folio',
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
				routing: {
					request: {
						qs: {
							type: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UpdatedFrom',
				name: 'updatedFrom',
				type: 'dateTime',
				default: '',
				description: 'The inclusive start time of the date of the last update. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							updatedFrom:
								'={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'UpdatedTo',
				name: 'updatedTo',
				type: 'dateTime',
				default: '',
				description: 'The exclusive end time of the date of the last update. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							updatedTo:
								'={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosPost',
		name: 'FinanceFoliosPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios',
			},
		},
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
				body: '={{JSON.parse($parameter["FinanceFoliosPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Folio'],
				operation: ['FinanceFoliosPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFolios$countGet',
		name: 'FinanceFolios$countGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/$count',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Folio'],
				operation: ['FinanceFolios$countGet'],
			},
		},
		options: [
			{
				displayName: 'BalanceFilter',
				name: 'balanceFilter',
				type: 'string',
				default: '',
				description: 'This will filter reservations based on their balance.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
				routing: {
					request: {
						qs: {
							balanceFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'BookingIds',
				name: 'bookingIds',
				type: 'string',
				default: '',
				description: 'Filter folio list by booking IDs',
				routing: {
					request: {
						qs: {
							bookingIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CheckedOutOnAccountsReceivable',
				name: 'checkedOutOnAccountsReceivable',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, only return folios that have been checked out on accounts receivables Otherwise, returns all',
				routing: {
					request: {
						qs: {
							checkedOutOnAccountsReceivable: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CompanyIds',
				name: 'companyIds',
				type: 'string',
				default: '',
				description: 'Filter folio list by company IDs',
				routing: {
					request: {
						qs: {
							companyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CreatedFrom',
				name: 'createdFrom',
				type: 'dateTime',
				default: '',
				description: 'The inclusive start time of the date of creation. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							createdFrom:
								'={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'CreatedTo',
				name: 'createdTo',
				type: 'dateTime',
				default: '',
				description: 'The exclusive end time of the date of creation. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							createdTo:
								'={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'ExcludeClosed',
				name: 'excludeClosed',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, closed folios are filtered out from the result collection - <b>DEPRECATED: This field will be removed soon. Please use Status=Open instead.</b>.',
				routing: {
					request: {
						qs: {
							excludeClosed: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ExternalFolioCode',
				name: 'externalFolioCode',
				type: 'string',
				default: '',
				description:
					'Allows filtering external folios by code.\r\nUseful when you use external folios with custom codes.\r\nSpecifying this parameter will ignore the <b>Type</b> parameter and treat as if it would be set to "External" instead.',
				routing: {
					request: {
						qs: {
							externalFolioCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'HasInvoices',
				name: 'hasInvoices',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, only return folios that been invoices',
				routing: {
					request: {
						qs: {
							hasInvoices: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IsEmpty',
				name: 'isEmpty',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, only return empty folios (no unmoved [transitory] charges, no unmoved payments, no allowances). If set to `false`, only return non-empty folios.',
				routing: {
					request: {
						qs: {
							isEmpty: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'OnlyMain',
				name: 'onlyMain',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, only main folios are returned, otherwise all',
				routing: {
					request: {
						qs: {
							onlyMain: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Filter folio list by property IDs',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ReservationIds',
				name: 'reservationIds',
				type: 'string',
				default: '',
				description: 'Filter folio list by reservation IDs',
				routing: {
					request: {
						qs: {
							reservationIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: 'Closed',
				description: 'The status of the folio',
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
				routing: {
					request: {
						qs: {
							status: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TextSearch',
				name: 'textSearch',
				type: 'string',
				default: '',
				description: 'This will filter all folios where the provided text is contained in: debitor first name or last name or company name, folio ID. The search is case insensitive.',
				routing: {
					request: {
						qs: {
							textSearch: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'Booking',
				description: 'The type of the folio',
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
				routing: {
					request: {
						qs: {
							type: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UpdatedFrom',
				name: 'updatedFrom',
				type: 'dateTime',
				default: '',
				description: 'The inclusive start time of the date of the last update. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							updatedFrom:
								'={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'UpdatedTo',
				name: 'updatedTo',
				type: 'dateTime',
				default: '',
				description: 'The exclusive end time of the date of the last update. Mostly useful for external foliosA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>.',
				routing: {
					request: {
						qs: {
							updatedTo:
								'={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosByIdGet',
		name: 'FinanceFoliosByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{id}',
			},
		},
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
				url: '=/finance/v1/folios/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Folio'],
				operation: ['FinanceFoliosByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: folios. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosByIdPatch',
		name: 'FinanceFoliosByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/finance/v1/folios/{id}',
			},
		},
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
				url: '=/finance/v1/folios/{{$value}}',
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
				body: '={{JSON.parse($parameter["FinanceFoliosByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'FinanceFoliosByIdHead',
		name: 'FinanceFoliosByIdHead',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Folio'],
				operation: ['FinanceFoliosByIdHead'],
			},
		},
		routing: {
			request: {
				method: 'HEAD',
				url: '/finance/v1/folios/{id}',
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
				url: '=/finance/v1/folios/{{$value}}',
			},
		},
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdChargesPost',
		name: 'FinanceFolio-actionsByFolioIdChargesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/charges',
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
				url: '=/finance/v1/folio-actions/{{$value}}/charges',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdChargesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdTransitory-chargesPost',
		name: 'FinanceFolio-actionsByFolioIdTransitory-chargesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdTransitory-chargesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/transitory-charges',
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
				url: '=/finance/v1/folio-actions/{{$value}}/transitory-charges',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdTransitory-chargesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdTransitory-chargesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdCancellation-feePost',
		name: 'FinanceFolio-actionsByFolioIdCancellation-feePost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdCancellation-feePost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/cancellation-fee',
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
				url: '=/finance/v1/folio-actions/{{$value}}/cancellation-fee',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdCancellation-feePost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdCancellation-feePost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdNo-Show-feePost',
		name: 'FinanceFolio-actionsByFolioIdNo-show-feePost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdNo-show-feePost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/no-show-fee',
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
				url: '=/finance/v1/folio-actions/{{$value}}/no-show-fee',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdNo-show-feePost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdNo-show-feePost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdClosePut',
		name: 'FinanceFolio-actionsByFolioIdClosePut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdClosePut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/{folioId}/close',
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
				url: '=/finance/v1/folio-actions/{{$value}}/close',
			},
		},
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdReopenPut',
		name: 'FinanceFolio-actionsByFolioIdReopenPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdReopenPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/{folioId}/reopen',
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
				url: '=/finance/v1/folio-actions/{{$value}}/reopen',
			},
		},
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdMove-chargesPut',
		name: 'FinanceFolio-actionsByFolioIdMove-chargesPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdMove-chargesPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/{folioId}/move-charges',
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
				url: '=/finance/v1/folio-actions/{{$value}}/move-charges',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdMove-chargesPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'FinanceFolio-actionsBulk-movePut',
		name: 'FinanceFolio-actionsBulk-movePut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsBulk-movePut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/bulk-move',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsBulk-movePut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdMove-All-chargesPut',
		name: 'FinanceFolio-actionsByFolioIdMove-all-chargesPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdMove-all-chargesPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/{folioId}/move-all-charges',
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
				url: '=/finance/v1/folio-actions/{{$value}}/move-all-charges',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdMove-all-chargesPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost',
		name: 'FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/charges/{chargeId}/allowances',
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
				url: '=/finance/v1/folio-actions/{{$value}}/charges/{chargeId}/allowances',
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
				url: '=/finance/v1/folio-actions/{folioId}/charges/{{$value}}/allowances',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdAllowancesPost',
		name: 'FinanceFolio-actionsByFolioIdAllowancesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdAllowancesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/allowances',
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
				url: '=/finance/v1/folio-actions/{{$value}}/allowances',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdAllowancesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdAllowancesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdBulk-allowancesPost',
		name: 'FinanceFolio-actionsByFolioIdBulk-allowancesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdBulk-allowancesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/bulk-allowances',
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
				url: '=/finance/v1/folio-actions/{{$value}}/bulk-allowances',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdBulk-allowancesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdBulk-allowancesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdPost-chargesPut',
		name: 'FinanceFolio-actionsByFolioIdPost-chargesPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdPost-chargesPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/{folioId}/post-charges',
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
				url: '=/finance/v1/folio-actions/{{$value}}/post-charges',
			},
		},
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdMove-paymentsPut',
		name: 'FinanceFolio-actionsByFolioIdMove-paymentsPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdMove-paymentsPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folio-actions/{folioId}/move-payments',
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
				url: '=/finance/v1/folio-actions/{{$value}}/move-payments',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdMove-paymentsPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdCorrectPost',
		name: 'FinanceFolio-actionsByFolioIdCorrectPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdCorrectPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/correct',
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
				url: '=/finance/v1/folio-actions/{{$value}}/correct',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdCorrectPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdCorrectPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost',
		name: 'FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/charges/{chargeId}/split',
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
				url: '=/finance/v1/folio-actions/{{$value}}/charges/{chargeId}/split',
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
				url: '=/finance/v1/folio-actions/{folioId}/charges/{{$value}}/split',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost',
		name: 'FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folio-actions/{folioId}/payments/{paymentId}/split',
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
				url: '=/finance/v1/folio-actions/{{$value}}/payments/{paymentId}/split',
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
				url: '=/finance/v1/folio-actions/{folioId}/payments/{{$value}}/split',
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
				body: '={{JSON.parse($parameter["FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioActions'],
				operation: ['FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosByFolioIdPaymentsGet',
		name: 'FinanceFoliosByFolioIdPaymentsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/payments',
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
				url: '=/finance/v1/folios/{{$value}}/payments',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'StatusCodes',
				name: 'statusCodes',
				type: 'string',
				default: '',
				description: 'Filter payments by one or more status',
				routing: {
					request: {
						qs: {
							statusCodes: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosByFolioIdPaymentsPost',
		name: 'FinanceFoliosByFolioIdPaymentsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments',
			},
		},
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
				url: '=/finance/v1/folios/{{$value}}/payments',
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
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdPaymentsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosByFolioIdPaymentsByPaymentIdGet',
		name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/payments/{paymentId}',
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
				url: '=/finance/v1/folios/{{$value}}/payments/{paymentId}',
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
				url: '=/finance/v1/folios/{folioId}/payments/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosByFolioIdPaymentsBy-terminalPost',
		name: 'FinanceFoliosByFolioIdPaymentsBy-terminalPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-terminalPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/by-terminal',
			},
		},
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
				url: '=/finance/v1/folios/{{$value}}/payments/by-terminal',
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
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdPaymentsBy-terminalPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-terminalPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosByFolioIdPaymentsBy-authorizationPost',
		name: 'FinanceFoliosByFolioIdPaymentsBy-authorizationPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-authorizationPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/by-authorization',
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
				url: '=/finance/v1/folios/{{$value}}/payments/by-authorization',
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
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdPaymentsBy-authorizationPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-authorizationPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosByFolioIdPaymentsBy-Payment-accountPost',
		name: 'FinanceFoliosByFolioIdPaymentsBy-payment-accountPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-payment-accountPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/by-payment-account',
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
				url: '=/finance/v1/folios/{{$value}}/payments/by-payment-account',
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
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdPaymentsBy-payment-accountPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-payment-accountPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosByFolioIdPaymentsBy-linkPost',
		name: 'FinanceFoliosByFolioIdPaymentsBy-linkPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-linkPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/by-link',
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
				url: '=/finance/v1/folios/{{$value}}/payments/by-link',
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
			'{\n  "expiresAt": "2025-09-14T16:18:24.6685763Z",\n  "countryCode": "de",\n  "description": "Prepayment for the group booking apaleo Summer party",\n  "payerEmail": "0chai@hemenal5.space",\n  "amount": {\n    "amount": 150,\n    "currency": "EUR"\n  },\n  "paidCharges": [\n    {\n      "chargeId": "BLIPKWXP-1-1-1",\n      "amount": 230\n    }\n  ]\n}',
		description: 'The definition of the payment link',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdPaymentsBy-linkPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsBy-linkPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut',
		name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/folios/{folioId}/payments/{paymentId}/cancel',
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
				url: '=/finance/v1/folios/{{$value}}/payments/{paymentId}/cancel',
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
				url: '=/finance/v1/folios/{folioId}/payments/{{$value}}/cancel',
			},
		},
	},
	{
		displayName: 'FinanceFoliosByFolioIdRefundsGet',
		name: 'FinanceFoliosByFolioIdRefundsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/refunds',
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
				url: '=/finance/v1/folios/{{$value}}/refunds',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsGet'],
			},
		},
		options: [
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'StatusCodes',
				name: 'statusCodes',
				type: 'string',
				default: '',
				description: 'Filter refunds by one or more status',
				routing: {
					request: {
						qs: {
							statusCodes: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosByFolioIdRefundsPost',
		name: 'FinanceFoliosByFolioIdRefundsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/refunds',
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
				url: '=/finance/v1/folios/{{$value}}/refunds',
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
			'{\n  "method": "Cash",\n  "amount": {\n    "amount": 10,\n    "currency": "EUR"\n  },\n  "receipt": "CSH-201824120003",\n  "businessDate": "2025-09-12",\n  "reason": "Refund for the cancelled service"\n}',
		description: 'The definition of the refund',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdRefundsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceFoliosByFolioIdRefundsByRefundIdGet',
		name: 'FinanceFoliosByFolioIdRefundsByRefundIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdRefundsByRefundIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/folios/{folioId}/refunds/{refundId}',
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
				url: '=/finance/v1/folios/{{$value}}/refunds/{refundId}',
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
				url: '=/finance/v1/folios/{folioId}/refunds/{{$value}}',
			},
		},
	},
	{
		displayName: 'FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost',
		name: 'FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/folios/{folioId}/payments/{paymentId}/refunds',
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
				url: '=/finance/v1/folios/{{$value}}/payments/{paymentId}/refunds',
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
				url: '=/finance/v1/folios/{folioId}/payments/{{$value}}/refunds',
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
			'{\n  "amount": {\n    "amount": 10,\n    "currency": "EUR"\n  },\n  "businessDate": "2025-09-12",\n  "reason": "Refund for the cancelled service"\n}',
		description: 'The definition of the refund',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FolioPayments'],
				operation: ['FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceInvoicesPreview-pdfGet',
		name: 'FinanceInvoicesPreview-pdfGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesPreview-pdfGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices/preview-pdf',
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
				qs: {
					folioId: '={{$parameter["FinanceInvoicesPreview-pdfGet_folioId"]}}',
				},
			},
		},
	},
	{
		displayName: 'FinanceInvoicesPreviewGet',
		name: 'FinanceInvoicesPreviewGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesPreviewGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices/preview',
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
				qs: {
					folioId: '={{$parameter["FinanceInvoicesPreviewGet_folioId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Invoice'],
				operation: ['FinanceInvoicesPreviewGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceInvoicesGet',
		name: 'FinanceInvoicesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Invoice'],
				operation: ['FinanceInvoicesGet'],
			},
		},
		options: [
			{
				displayName: 'BookingIds',
				name: 'bookingIds',
				type: 'string',
				default: '',
				description: 'Filter by booking IDs',
				routing: {
					request: {
						qs: {
							bookingIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CheckedOutOnAccountsReceivable',
				name: 'checkedOutOnAccountsReceivable',
				type: 'boolean',
				default: false,
				description: 'If set to `true`, only return invoices with an open balance (AR) Otherwise, returns all',
				routing: {
					request: {
						qs: {
							checkedOutOnAccountsReceivable: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CompanyIds',
				name: 'companyIds',
				type: 'string',
				default: '',
				description: 'Filter by company IDs',
				routing: {
					request: {
						qs: {
							companyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'DateFilter',
				name: 'dateFilter',
				type: 'string',
				default: '',
				description: 'Filter by invoice dateYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
				routing: {
					request: {
						qs: {
							dateFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: allowedActions, company. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'FolioIds',
				name: 'folioIds',
				type: 'string',
				default: '',
				description: 'Filter by folio IDs',
				routing: {
					request: {
						qs: {
							folioIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'NameSearch',
				name: 'nameSearch',
				type: 'string',
				default: '',
				description:
					'Find invoices for a recipient name or company. Provide at least three characters.',
				routing: {
					request: {
						qs: {
							nameSearch: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Number',
				name: 'number',
				type: 'string',
				default: '',
				description: 'The invoice number',
				routing: {
					request: {
						qs: {
							number: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'OutstandingPaymentFilter',
				name: 'outstandingPaymentFilter',
				type: 'string',
				default: '',
				description: 'Filter for the outstanding balance for invoicesYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
				routing: {
					request: {
						qs: {
							outstandingPaymentFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PaymentSettled',
				name: 'paymentSettled',
				type: 'boolean',
				default: false,
				description:
					'If set to `true`, returns only invoices having no outstanding payments or marked as settled.\r\nIf set to `false`, returns only invoices with outstanding payment and not marked as settled.\r\nIf not set, returns all invoices. - <b>DEPRECATED: This field will be removed at 25.06.2022. Use filtering by `Status` instead</b>',
				routing: {
					request: {
						qs: {
							paymentSettled: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Filter by property IDs',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'RecipientType',
				name: 'recipientType',
				type: 'options',
				default: 'Company',
				description: 'If nothing is set, invoices addressed both companies and individuals will be returned. If set to `Person`, invoices that addressed to individuals will be returned. If set to `Company`, invoice that addressed to companies will be returned.',
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
				routing: {
					request: {
						qs: {
							recipientType: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ReservationIds',
				name: 'reservationIds',
				type: 'string',
				default: '',
				description: 'Filter by reservation IDs',
				routing: {
					request: {
						qs: {
							reservationIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: 'FullyPaid',
				description: 'Filter by invoice status',
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
				routing: {
					request: {
						qs: {
							status: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceInvoicesPost',
		name: 'FinanceInvoicesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/invoices',
			},
		},
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
				body: '={{JSON.parse($parameter["FinanceInvoicesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Invoice'],
				operation: ['FinanceInvoicesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceInvoicesByIdPdfGet',
		name: 'FinanceInvoicesByIdPdfGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesByIdPdfGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices/{id}/pdf',
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
				url: '=/finance/v1/invoices/{{$value}}/pdf',
			},
		},
	},
	{
		displayName: 'FinanceInvoicesByIdGet',
		name: 'FinanceInvoicesByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Invoice'],
				operation: ['FinanceInvoicesByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/invoices/{id}',
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
				url: '=/finance/v1/invoices/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Invoice'],
				operation: ['FinanceInvoicesByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceInvoice-actionsByIdPayPut',
		name: 'FinanceInvoice-actionsByIdPayPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['InvoiceAction'],
				operation: ['FinanceInvoice-actionsByIdPayPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/invoice-actions/{id}/pay',
			},
		},
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
				url: '=/finance/v1/invoice-actions/{{$value}}/pay',
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
				body: '={{JSON.parse($parameter["FinanceInvoice-actionsByIdPayPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'FinanceInvoice-actionsByIdCancelPut',
		name: 'FinanceInvoice-actionsByIdCancelPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['InvoiceAction'],
				operation: ['FinanceInvoice-actionsByIdCancelPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/finance/v1/invoice-actions/{id}/cancel',
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
				url: '=/finance/v1/invoice-actions/{{$value}}/cancel',
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
				body: '={{JSON.parse($parameter["FinanceInvoice-actionsByIdCancelPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'FinanceAccountsAggregate-Pairs-dailyPost',
		name: 'FinanceAccountsAggregate-pairs-dailyPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-pairs-dailyPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-pairs-daily',
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
				qs: {
					from: '={{$parameter["FinanceAccountsAggregate-pairs-dailyPost_from"] ? new Date($parameter["FinanceAccountsAggregate-pairs-dailyPost_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["FinanceAccountsAggregate-pairs-dailyPost_to"] ? new Date($parameter["FinanceAccountsAggregate-pairs-dailyPost_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-pairs-dailyPost'],
			},
		},
		options: [
			{
				displayName: 'AccountingSchema',
				name: 'accountingSchema',
				type: 'options',
				default: 'Extended',
				description:
					'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
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
				routing: {
					request: {
						qs: {
							accountingSchema: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'AccountNumber',
				name: 'accountNumber',
				type: 'string',
				default: '',
				description: 'Filter transactions by account number',
				routing: {
					request: {
						qs: {
							accountNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'AccountType',
				name: 'accountType',
				type: 'options',
				default: 'AccountsReceivable',
				description: 'Filter transactions by type',
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
				routing: {
					request: {
						qs: {
							accountType: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'LanguageCode',
				name: 'languageCode',
				type: 'string',
				default: '',
				description: 'The language for the the report (2-letter ISO code)',
				routing: {
					request: {
						qs: {
							languageCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Reference',
				name: 'reference',
				type: 'string',
				default: '',
				description: 'Filter transactions by reference (reservation ID/external folio ID/property ID for house folio)',
				routing: {
					request: {
						qs: {
							reference: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceAccountsAggregate-dailyPost',
		name: 'FinanceAccountsAggregate-dailyPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-dailyPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate-daily',
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
				qs: {
					from: '={{$parameter["FinanceAccountsAggregate-dailyPost_from"] ? new Date($parameter["FinanceAccountsAggregate-dailyPost_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["FinanceAccountsAggregate-dailyPost_to"] ? new Date($parameter["FinanceAccountsAggregate-dailyPost_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregate-dailyPost'],
			},
		},
		options: [
			{
				displayName: 'AccountingSchema',
				name: 'accountingSchema',
				type: 'options',
				default: 'Extended',
				description:
					'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
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
				routing: {
					request: {
						qs: {
							accountingSchema: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'AccountNumber',
				name: 'accountNumber',
				type: 'string',
				default: '',
				description: 'Filter transactions by account number',
				routing: {
					request: {
						qs: {
							accountNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'AccountType',
				name: 'accountType',
				type: 'options',
				default: 'AccountsReceivable',
				description: 'Filter transactions by type',
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
				routing: {
					request: {
						qs: {
							accountType: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'LanguageCode',
				name: 'languageCode',
				type: 'string',
				default: '',
				description: 'The language for the the report (2-letter ISO code)',
				routing: {
					request: {
						qs: {
							languageCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Reference',
				name: 'reference',
				type: 'string',
				default: '',
				description: 'Filter transactions by reference (reservation ID/external folio ID/property ID for house folio)',
				routing: {
					request: {
						qs: {
							reference: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceAccountsAggregatePost',
		name: 'FinanceAccountsAggregatePost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregatePost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/aggregate',
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
				qs: {
					from: '={{$parameter["FinanceAccountsAggregatePost_from"] ? new Date($parameter["FinanceAccountsAggregatePost_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["FinanceAccountsAggregatePost_to"] ? new Date($parameter["FinanceAccountsAggregatePost_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['SubLedger'],
				operation: ['FinanceAccountsAggregatePost'],
			},
		},
		options: [
			{
				displayName: 'AccountingSchema',
				name: 'accountingSchema',
				type: 'options',
				default: 'Extended',
				description:
					'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
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
				routing: {
					request: {
						qs: {
							accountingSchema: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'AccountNumber',
				name: 'accountNumber',
				type: 'string',
				default: '',
				description: 'Filter transactions by account number',
				routing: {
					request: {
						qs: {
							accountNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'AccountType',
				name: 'accountType',
				type: 'options',
				default: 'AccountsReceivable',
				description: 'Filter transactions by type',
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
				routing: {
					request: {
						qs: {
							accountType: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'LanguageCode',
				name: 'languageCode',
				type: 'string',
				default: '',
				description: 'The language for the the report',
				routing: {
					request: {
						qs: {
							languageCode: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceAccountsExportPost',
		name: 'FinanceAccountsExportPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExportPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export',
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
				qs: {
					from: '={{$parameter["FinanceAccountsExportPost_from"] ? new Date($parameter["FinanceAccountsExportPost_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["FinanceAccountsExportPost_to"] ? new Date($parameter["FinanceAccountsExportPost_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExportPost'],
			},
		},
		options: [
			{
				displayName: 'AccountingSchema',
				name: 'accountingSchema',
				type: 'options',
				default: 'Extended',
				description:
					'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
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
				routing: {
					request: {
						qs: {
							accountingSchema: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'AccountNumber',
				name: 'accountNumber',
				type: 'string',
				default: '',
				description: 'Filter transactions by account number',
				routing: {
					request: {
						qs: {
							accountNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'AccountType',
				name: 'accountType',
				type: 'options',
				default: 'AccountsReceivable',
				description: 'Filter transactions by type',
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
				routing: {
					request: {
						qs: {
							accountType: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'LanguageCode',
				name: 'languageCode',
				type: 'string',
				default: '',
				description: 'The language for the the report',
				routing: {
					request: {
						qs: {
							languageCode: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceAccountsExport-dailyPost',
		name: 'FinanceAccountsExport-dailyPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-dailyPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-daily',
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
				qs: {
					from: '={{$parameter["FinanceAccountsExport-dailyPost_from"] ? new Date($parameter["FinanceAccountsExport-dailyPost_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["FinanceAccountsExport-dailyPost_to"] ? new Date($parameter["FinanceAccountsExport-dailyPost_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-dailyPost'],
			},
		},
		options: [
			{
				displayName: 'AccountingSchema',
				name: 'accountingSchema',
				type: 'options',
				default: 'Extended',
				description:
					'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
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
				routing: {
					request: {
						qs: {
							accountingSchema: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'AccountNumber',
				name: 'accountNumber',
				type: 'string',
				default: '',
				description: 'Filter transactions by account number',
				routing: {
					request: {
						qs: {
							accountNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'AccountType',
				name: 'accountType',
				type: 'options',
				default: 'AccountsReceivable',
				description: 'Filter transactions by type',
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
				routing: {
					request: {
						qs: {
							accountType: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'LanguageCode',
				name: 'languageCode',
				type: 'string',
				default: '',
				description: 'The language for the the report (2-letter ISO code)',
				routing: {
					request: {
						qs: {
							languageCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Reference',
				name: 'reference',
				type: 'string',
				default: '',
				description: 'Filter transactions by reference (reservation ID/external folio ID/property ID for house folio)',
				routing: {
					request: {
						qs: {
							reference: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceAccountsExport-Gross-dailyPost',
		name: 'FinanceAccountsExport-gross-dailyPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-gross-dailyPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/finance/v1/accounts/export-gross-daily',
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
				qs: {
					from: '={{$parameter["FinanceAccountsExport-gross-dailyPost_from"] ? new Date($parameter["FinanceAccountsExport-gross-dailyPost_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["FinanceAccountsExport-gross-dailyPost_to"] ? new Date($parameter["FinanceAccountsExport-gross-dailyPost_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['SubLedger'],
				operation: ['FinanceAccountsExport-gross-dailyPost'],
			},
		},
		options: [
			{
				displayName: 'AccountingSchema',
				name: 'accountingSchema',
				type: 'options',
				default: 'Extended',
				description:
					'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
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
				routing: {
					request: {
						qs: {
							accountingSchema: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Reference',
				name: 'reference',
				type: 'string',
				default: '',
				description: 'Filter transactions by reference (reservation ID/external folio ID/property ID for house folio)',
				routing: {
					request: {
						qs: {
							reference: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceAccountsSchemaGet',
		name: 'FinanceAccountsSchemaGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsSchemaGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/schema',
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
				qs: {
					propertyId: '={{$parameter["FinanceAccountsSchemaGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['SubLedger'],
				operation: ['FinanceAccountsSchemaGet'],
			},
		},
		options: [
			{
				displayName: 'AccountingSchema',
				name: 'accountingSchema',
				type: 'options',
				default: 'Extended',
				description:
					'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
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
				routing: {
					request: {
						qs: {
							accountingSchema: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Depth',
				name: 'depth',
				type: 'number',
				default: '',
				description: 'How many hierarchy levels to include (between 1 and 4, default is 1)',
				routing: {
					request: {
						qs: {
							depth: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IncludeArchived',
				name: 'includeArchived',
				type: 'boolean',
				default: false,
				description: 'If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts.',
				routing: {
					request: {
						qs: {
							includeArchived: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'LanguageCode',
				name: 'languageCode',
				type: 'string',
				default: '',
				description:
					'The language for the the report. If not specified, language code from "Accept-Language" will be used.',
				routing: {
					request: {
						qs: {
							languageCode: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceGlobal-accountsGet',
		name: 'FinanceGlobal-accountsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGlobal-accountsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/global-accounts',
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
				qs: {
					parent: '={{$parameter["FinanceGlobal-accountsGet_parent"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['SubLedger'],
				operation: ['FinanceGlobal-accountsGet'],
			},
		},
		options: [
			{
				displayName: 'AccountingSchema',
				name: 'accountingSchema',
				type: 'options',
				default: 'Extended',
				description: 'Allows to override the default accounting schema',
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
				routing: {
					request: {
						qs: {
							accountingSchema: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IncludeArchived',
				name: 'includeArchived',
				type: 'boolean',
				default: false,
				description: 'If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts.',
				routing: {
					request: {
						qs: {
							includeArchived: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'LanguageCode',
				name: 'languageCode',
				type: 'string',
				default: '',
				description: 'The language for the the report',
				routing: {
					request: {
						qs: {
							languageCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceGuest-accountsGet',
		name: 'FinanceGuest-accountsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceGuest-accountsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/guest-accounts',
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
				qs: {
					reservationId: '={{$parameter["FinanceGuest-accountsGet_reservationId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['SubLedger'],
				operation: ['FinanceGuest-accountsGet'],
			},
		},
		options: [
			{
				displayName: 'LanguageCode',
				name: 'languageCode',
				type: 'string',
				default: '',
				description: 'The language for the the report',
				routing: {
					request: {
						qs: {
							languageCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Parent',
				name: 'parent',
				type: 'string',
				default: '',
				description: 'Filter account list by the parent account\'s number',
				routing: {
					request: {
						qs: {
							parent: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceExternal-accountsGet',
		name: 'FinanceExternal-accountsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceExternal-accountsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/external-accounts',
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
				qs: {
					folioId: '={{$parameter["FinanceExternal-accountsGet_folioId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['SubLedger'],
				operation: ['FinanceExternal-accountsGet'],
			},
		},
		options: [
			{
				displayName: 'LanguageCode',
				name: 'languageCode',
				type: 'string',
				default: '',
				description: 'The language for the the report',
				routing: {
					request: {
						qs: {
							languageCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Parent',
				name: 'parent',
				type: 'string',
				default: '',
				description: 'Filter account list by the parent account\'s number',
				routing: {
					request: {
						qs: {
							parent: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceAccountsByNumberGet',
		name: 'FinanceAccountsByNumberGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsByNumberGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/{number}',
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
				url: '=/finance/v1/accounts/{{$value}}',
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
				qs: {
					propertyId: '={{$parameter["FinanceAccountsByNumberGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['SubLedger'],
				operation: ['FinanceAccountsByNumberGet'],
			},
		},
		options: [
			{
				displayName: 'AccountingSchema',
				name: 'accountingSchema',
				type: 'options',
				default: 'Extended',
				description:
					'Allows to override the default accounting schema. Only specify this, when you know what you are doing.',
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
				routing: {
					request: {
						qs: {
							accountingSchema: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IncludeArchived',
				name: 'includeArchived',
				type: 'boolean',
				default: false,
				description: 'If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts.',
				routing: {
					request: {
						qs: {
							includeArchived: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'LanguageCode',
				name: 'languageCode',
				type: 'string',
				default: '',
				description: 'The language for the the report',
				routing: {
					request: {
						qs: {
							languageCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TransactionLimit',
				name: 'transactionLimit',
				type: 'number',
				default: '',
				description: 'Limit how many transactions should be included in the view (between 0 and 50, defaults to 0)',
				routing: {
					request: {
						qs: {
							transactionLimit: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceAccountsChild-accountsGet',
		name: 'FinanceAccountsChild-accountsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['SubLedger'],
				operation: ['FinanceAccountsChild-accountsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/accounts/child-accounts',
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
				qs: {
					parent: '={{$parameter["FinanceAccountsChild-accountsGet_parent"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['SubLedger'],
				operation: ['FinanceAccountsChild-accountsGet'],
			},
		},
		options: [
			{
				displayName: 'AccountingSchema',
				name: 'accountingSchema',
				type: 'options',
				default: 'Extended',
				description: 'Allows to override the default accounting schema',
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
				routing: {
					request: {
						qs: {
							accountingSchema: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IncludeArchived',
				name: 'includeArchived',
				type: 'boolean',
				default: false,
				description: 'If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts.',
				routing: {
					request: {
						qs: {
							includeArchived: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'LanguageCode',
				name: 'languageCode',
				type: 'string',
				default: '',
				description: 'The language for the the report',
				routing: {
					request: {
						qs: {
							languageCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'FinanceTypesCurrenciesGet',
		name: 'FinanceTypesCurrenciesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Types'],
				operation: ['FinanceTypesCurrenciesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/types/currencies',
			},
		},
	},
	{
		displayName: 'FinanceTypesPayment-methodsGet',
		name: 'FinanceTypesPayment-methodsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Types'],
				operation: ['FinanceTypesPayment-methodsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/types/payment-methods',
			},
		},
	},
	{
		displayName: 'FinanceTypesService-typesGet',
		name: 'FinanceTypesService-typesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Types'],
				operation: ['FinanceTypesService-typesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/types/service-types',
			},
		},
	},
	{
		displayName: 'FinanceTypesVatGet',
		name: 'FinanceTypesVatGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['finance-v1'],
				resource: ['Types'],
				operation: ['FinanceTypesVatGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/finance/v1/types/vat',
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
				qs: {
					isoCountryCode: '={{$parameter["FinanceTypesVatGet_isoCountryCode"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Types'],
				operation: ['FinanceTypesVatGet'],
			},
		},
		options: [
			{
				displayName: 'AtDate',
				name: 'atDate',
				type: 'dateTime',
				default: '',
				description: 'If specified, returns the VAT types that are effective for this specific date. If nothing specified, returns the VAT types that are effective for the current date in UTC timezone.',
				routing: {
					request: {
						qs: {
							atDate:
								'={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryPropertiesGet',
		name: 'InventoryPropertiesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/properties',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Property'],
				operation: ['InventoryPropertiesGet'],
			},
		},
		options: [
			{
				displayName: 'CountryCode',
				name: 'countryCode',
				type: 'string',
				default: '',
				description: 'Filter result by country code',
				routing: {
					request: {
						qs: {
							countryCode: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IncludeArchived',
				name: 'includeArchived',
				type: 'boolean',
				default: false,
				description: 'Include archived properties in the result. If not set, or set to false, it only returns non-archived properties.',
				routing: {
					request: {
						qs: {
							includeArchived: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Filter result by property status',
				routing: {
					request: {
						qs: {
							status: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryPropertiesPost',
		name: 'InventoryPropertiesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/properties',
			},
		},
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
				body: '={{JSON.parse($parameter["InventoryPropertiesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Property'],
				operation: ['InventoryPropertiesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryPropertiesByIdGet',
		name: 'InventoryPropertiesByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/properties/{id}',
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
				url: '=/inventory/v1/properties/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Property'],
				operation: ['InventoryPropertiesByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Languages',
				name: 'languages',
				type: 'string',
				default: '',
				description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
				routing: {
					request: {
						qs: {
							languages: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryPropertiesByIdPatch',
		name: 'InventoryPropertiesByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Property'],
				operation: ['InventoryPropertiesByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/inventory/v1/properties/{id}',
			},
		},
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
				url: '=/inventory/v1/properties/{{$value}}',
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
				body: '={{JSON.parse($parameter["InventoryPropertiesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'InventoryUnitsByIdPatch',
		name: 'InventoryUnitsByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/inventory/v1/units/{id}',
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
				url: '=/inventory/v1/units/{{$value}}',
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
				body: '={{JSON.parse($parameter["InventoryUnitsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'InventoryUnitsByIdGet',
		name: 'InventoryUnitsByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/{id}',
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
				url: '=/inventory/v1/units/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Unit'],
				operation: ['InventoryUnitsByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Languages',
				name: 'languages',
				type: 'string',
				default: '',
				description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
				routing: {
					request: {
						qs: {
							languages: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryUnitsByIdHead',
		name: 'InventoryUnitsByIdHead',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsByIdHead'],
			},
		},
		routing: {
			request: {
				method: 'HEAD',
				url: '/inventory/v1/units/{id}',
			},
		},
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
				url: '=/inventory/v1/units/{{$value}}',
			},
		},
	},
	{
		displayName: 'InventoryUnitsByIdDelete',
		name: 'InventoryUnitsByIdDelete',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsByIdDelete'],
			},
		},
		routing: {
			request: {
				method: 'DELETE',
				url: '/inventory/v1/units/{id}',
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
				url: '=/inventory/v1/units/{{$value}}',
			},
		},
	},
	{
		displayName: 'InventoryUnitsPatch',
		name: 'InventoryUnitsPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/inventory/v1/units',
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
				body: '={{JSON.parse($parameter["InventoryUnitsPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'InventoryUnitsGet',
		name: 'InventoryUnitsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Unit'],
				operation: ['InventoryUnitsGet'],
			},
		},
		options: [
			{
				displayName: 'Condition',
				name: 'condition',
				type: 'options',
				default: 'Clean',
				description: 'Return units with a specific condition',
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
				routing: {
					request: {
						qs: {
							condition: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IsOccupied',
				name: 'isOccupied',
				type: 'boolean',
				default: false,
				description: 'Return only occupied or vacant units',
				routing: {
					request: {
						qs: {
							isOccupied: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'MaintenanceType',
				name: 'maintenanceType',
				type: 'options',
				default: 'OutOfInventory',
				description: 'Return units with the specific maintenance type',
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
				routing: {
					request: {
						qs: {
							maintenanceType: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Return units for specific property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TextSearch',
				name: 'textSearch',
				type: 'string',
				default: '',
				description:
					'This will filter all units where the provided text is contained in the unit name. The search is case insensitive.',
				routing: {
					request: {
						qs: {
							textSearch: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitAttributeIds',
				name: 'unitAttributeIds',
				type: 'string',
				default: '',
				description: 'Return units with the specific unit attributes',
				routing: {
					request: {
						qs: {
							unitAttributeIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupId',
				name: 'unitGroupId',
				type: 'string',
				default: '',
				description: 'Return units for the specific unit group - <b>DEPRECATED: This property will be removed 20.04.2022. Use `UnitGroupIds` instead</b>.',
				routing: {
					request: {
						qs: {
							unitGroupId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupIds',
				name: 'unitGroupIds',
				type: 'string',
				default: '',
				description: 'Return units with the specific unit groups',
				routing: {
					request: {
						qs: {
							unitGroupIds: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryUnitsPost',
		name: 'InventoryUnitsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/units',
			},
		},
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
				body: '={{JSON.parse($parameter["InventoryUnitsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Unit'],
				operation: ['InventoryUnitsPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryUnits$countGet',
		name: 'InventoryUnits$countGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnits$countGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/units/$count',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Unit'],
				operation: ['InventoryUnits$countGet'],
			},
		},
		options: [
			{
				displayName: 'Condition',
				name: 'condition',
				type: 'options',
				default: 'Clean',
				description: 'Return units with a specific condition',
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
				routing: {
					request: {
						qs: {
							condition: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IsOccupied',
				name: 'isOccupied',
				type: 'boolean',
				default: false,
				description: 'Return only occupied or vacant units',
				routing: {
					request: {
						qs: {
							isOccupied: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'MaintenanceType',
				name: 'maintenanceType',
				type: 'options',
				default: 'OutOfInventory',
				description: 'Return units with the specific maintenance type',
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
				routing: {
					request: {
						qs: {
							maintenanceType: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Return units for specific property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TextSearch',
				name: 'textSearch',
				type: 'string',
				default: '',
				description:
					'This will filter all units where the provided text is contained in the unit name. The search is case insensitive.',
				routing: {
					request: {
						qs: {
							textSearch: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitAttributeIds',
				name: 'unitAttributeIds',
				type: 'string',
				default: '',
				description: 'Return units with the specific unit attributes',
				routing: {
					request: {
						qs: {
							unitAttributeIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupId',
				name: 'unitGroupId',
				type: 'string',
				default: '',
				description: 'Return units for the specific unit group - <b>DEPRECATED: This property will be removed 20.04.2022. Use `UnitGroupIds` instead</b>.',
				routing: {
					request: {
						qs: {
							unitGroupId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupIds',
				name: 'unitGroupIds',
				type: 'string',
				default: '',
				description: 'Return units with the specific unit groups',
				routing: {
					request: {
						qs: {
							unitGroupIds: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryUnitsBulkPost',
		name: 'InventoryUnitsBulkPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['Unit'],
				operation: ['InventoryUnitsBulkPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/units/bulk',
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
				body: '={{JSON.parse($parameter["InventoryUnitsBulkPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Unit'],
				operation: ['InventoryUnitsBulkPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryUnit-attributesByIdGet',
		name: 'InventoryUnit-attributesByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-attributes/{id}',
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
				url: '=/inventory/v1/unit-attributes/{{$value}}',
			},
		},
	},
	{
		displayName: 'InventoryUnit-attributesByIdPatch',
		name: 'InventoryUnit-attributesByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/inventory/v1/unit-attributes/{id}',
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
				url: '=/inventory/v1/unit-attributes/{{$value}}',
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
				body: '={{JSON.parse($parameter["InventoryUnit-attributesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'InventoryUnit-attributesByIdHead',
		name: 'InventoryUnit-attributesByIdHead',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesByIdHead'],
			},
		},
		routing: {
			request: {
				method: 'HEAD',
				url: '/inventory/v1/unit-attributes/{id}',
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
				url: '=/inventory/v1/unit-attributes/{{$value}}',
			},
		},
	},
	{
		displayName: 'InventoryUnit-attributesGet',
		name: 'InventoryUnit-attributesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-attributes',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesGet'],
			},
		},
		options: [
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryUnit-attributesPost',
		name: 'InventoryUnit-attributesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/unit-attributes',
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
				body: '={{JSON.parse($parameter["InventoryUnit-attributesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['UnitAttribute'],
				operation: ['InventoryUnit-attributesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryUnit-groupsPost',
		name: 'InventoryUnit-groupsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/inventory/v1/unit-groups',
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
				body: '={{JSON.parse($parameter["InventoryUnit-groupsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryUnit-groupsGet',
		name: 'InventoryUnit-groupsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Return unit groups for specific property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupTypes',
				name: 'unitGroupTypes',
				type: 'string',
				default: '',
				description: 'The unitGroupTypes parameter',
				routing: {
					request: {
						qs: {
							unitGroupTypes: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryUnit-groups$countGet',
		name: 'InventoryUnit-groups$countGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groups$countGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups/$count',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groups$countGet'],
			},
		},
		options: [
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Return unit groups for specific property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupTypes',
				name: 'unitGroupTypes',
				type: 'string',
				default: '',
				description: 'The unitGroupTypes parameter',
				routing: {
					request: {
						qs: {
							unitGroupTypes: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryUnit-groupsByIdHead',
		name: 'InventoryUnit-groupsByIdHead',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsByIdHead'],
			},
		},
		routing: {
			request: {
				method: 'HEAD',
				url: '/inventory/v1/unit-groups/{id}',
			},
		},
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
				url: '=/inventory/v1/unit-groups/{{$value}}',
			},
		},
	},
	{
		displayName: 'InventoryUnit-groupsByIdGet',
		name: 'InventoryUnit-groupsByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/inventory/v1/unit-groups/{id}',
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
				url: '=/inventory/v1/unit-groups/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Languages',
				name: 'languages',
				type: 'string',
				default: '',
				description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
				routing: {
					request: {
						qs: {
							languages: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'InventoryUnit-groupsByIdPut',
		name: 'InventoryUnit-groupsByIdPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['inventory-v1'],
				resource: ['UnitGroup'],
				operation: ['InventoryUnit-groupsByIdPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/inventory/v1/unit-groups/{id}',
			},
		},
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
				url: '=/inventory/v1/unit-groups/{{$value}}',
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
				body: '={{JSON.parse($parameter["InventoryUnit-groupsByIdPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'LogsBookingReservationGet',
		name: 'LogsBookingReservationGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['BookingLogs'],
				operation: ['LogsBookingReservationGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/booking/reservation',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['BookingLogs'],
				operation: ['LogsBookingReservationGet'],
			},
		},
		options: [
			{
				displayName: 'ClientIds',
				name: 'clientIds',
				type: 'string',
				default: '',
				description:
					'Filter the log entries by client IDs (which application triggered this event)',
				routing: {
					request: {
						qs: {
							clientIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'DateFilter',
				name: 'dateFilter',
				type: 'string',
				default: '',
				description: 'Filter by event date and timeYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
				routing: {
					request: {
						qs: {
							dateFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'EventTypes',
				name: 'eventTypes',
				type: 'string',
				default: '',
				description: 'Filter the log entries by event types',
				routing: {
					request: {
						qs: {
							eventTypes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: changes. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Filter the log entries by property IDs',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ReservationIds',
				name: 'reservationIds',
				type: 'string',
				default: '',
				description: 'Filter the log entries by reservation IDs',
				routing: {
					request: {
						qs: {
							reservationIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'SubjectIds',
				name: 'subjectIds',
				type: 'string',
				default: '',
				description: 'Filter the log entries by subject IDs (which user triggered this event)',
				routing: {
					request: {
						qs: {
							subjectIds: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'LogsFinanceFolioGet',
		name: 'LogsFinanceFolioGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceFolioGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/folio',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceFolioGet'],
			},
		},
		options: [
			{
				displayName: 'ClientIds',
				name: 'clientIds',
				type: 'string',
				default: '',
				description:
					'Filter the log entries by client IDs (which application triggered this event)',
				routing: {
					request: {
						qs: {
							clientIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'DateFilter',
				name: 'dateFilter',
				type: 'string',
				default: '',
				description: 'Filter by event date and timeYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
				routing: {
					request: {
						qs: {
							dateFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'EventTypes',
				name: 'eventTypes',
				type: 'string',
				default: '',
				description: 'Filter the log entries by event types',
				routing: {
					request: {
						qs: {
							eventTypes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'FolioIds',
				name: 'folioIds',
				type: 'string',
				default: '',
				description: 'Filter the log entries by folio IDs',
				routing: {
					request: {
						qs: {
							folioIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Filter the log entries by property IDs',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'SubjectIds',
				name: 'subjectIds',
				type: 'string',
				default: '',
				description: 'Filter the log entries by subject IDs (which user triggered this event)',
				routing: {
					request: {
						qs: {
							subjectIds: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'LogsFinanceNight-auditGet',
		name: 'LogsFinanceNight-auditGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceNight-auditGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/night-audit',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceNight-auditGet'],
			},
		},
		options: [
			{
				displayName: 'DateFilter',
				name: 'dateFilter',
				type: 'string',
				default: '',
				description: 'Filter by event date and timeYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
				routing: {
					request: {
						qs: {
							dateFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Filter the log entries by property IDs',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Statuses',
				name: 'statuses',
				type: 'string',
				default: '',
				description: 'Filter the log entries by status',
				routing: {
					request: {
						qs: {
							statuses: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'SubjectIds',
				name: 'subjectIds',
				type: 'string',
				default: '',
				description: 'Filter the log entries by subject IDs (which user triggered this event)',
				routing: {
					request: {
						qs: {
							subjectIds: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'LogsFinanceTransactions-exportGet',
		name: 'LogsFinanceTransactions-exportGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['logs-v1'],
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceTransactions-exportGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/logs/v1/finance/transactions-export',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['FinanceLogs'],
				operation: ['LogsFinanceTransactions-exportGet'],
			},
		},
		options: [
			{
				displayName: 'DateFilter',
				name: 'dateFilter',
				type: 'string',
				default: '',
				description: 'Filter by event date and timeYou can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
				routing: {
					request: {
						qs: {
							dateFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Filter the log entries by property IDs',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'SubjectIds',
				name: 'subjectIds',
				type: 'string',
				default: '',
				description: 'Filter the log entries by subject IDs (which user triggered this event)',
				routing: {
					request: {
						qs: {
							subjectIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Types',
				name: 'types',
				type: 'string',
				default: '',
				description: 'Filter the log entries by export log types',
				routing: {
					request: {
						qs: {
							types: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'OperationsMaintenancesGet',
		name: 'OperationsMaintenancesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: unit. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'From',
				name: 'from',
				type: 'dateTime',
				default: '',
				description: 'Filter all maintenance windows that end after the specified date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
				routing: {
					request: {
						qs: {
							from: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Filter result by property ID',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'dateTime',
				default: '',
				description: 'Filter all maintenance windows that start before the specified date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
				routing: {
					request: {
						qs: {
							to: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'Types',
				name: 'types',
				type: 'string',
				default: '',
				description: 'Filter result by maintenance types',
				routing: {
					request: {
						qs: {
							types: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitId',
				name: 'unitId',
				type: 'string',
				default: '',
				description: 'Filter result by unit ID',
				routing: {
					request: {
						qs: {
							unitId: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'OperationsMaintenancesPost',
		name: 'OperationsMaintenancesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/operations/v1/maintenances',
			},
		},
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
			'{\n  "unitId": "MUC-JQI",\n  "from": "2025-09-12T10:23:23+02:00",\n  "to": "2025-09-14T10:23:23+02:00",\n  "type": "OutOfService",\n  "description": "The remote control for the TV needs to be replaced."\n}',
		description: 'The definition of the maintenance',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["OperationsMaintenancesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'OperationsMaintenances$countGet',
		name: 'OperationsMaintenances$countGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenances$countGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances/$count',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Maintenance'],
				operation: ['OperationsMaintenances$countGet'],
			},
		},
		options: [
			{
				displayName: 'From',
				name: 'from',
				type: 'dateTime',
				default: '',
				description: 'Filter all maintenance windows that end after the specified date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
				routing: {
					request: {
						qs: {
							from: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Filter result by property ID',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'dateTime',
				default: '',
				description: 'Filter all maintenance windows that start before the specified date and timeA date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>',
				routing: {
					request: {
						qs: {
							to: '={{$value ? new Date($value).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
						},
					},
				},
			},
			{
				displayName: 'Types',
				name: 'types',
				type: 'string',
				default: '',
				description: 'Filter result by maintenance types',
				routing: {
					request: {
						qs: {
							types: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitId',
				name: 'unitId',
				type: 'string',
				default: '',
				description: 'Filter result by unit ID',
				routing: {
					request: {
						qs: {
							unitId: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'OperationsMaintenancesBulkPost',
		name: 'OperationsMaintenancesBulkPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesBulkPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/operations/v1/maintenances/bulk',
			},
		},
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
			'{\n  "maintenances": [\n    {\n      "unitId": "MUC-JQI",\n      "from": "2025-09-12T10:23:23+02:00",\n      "to": "2025-09-14T10:23:23+02:00",\n      "type": "OutOfService",\n      "description": "The remote control for the TV needs to be replaced."\n    },\n    {\n      "unitId": "MUC-MTA",\n      "from": "2025-09-12T10:23:23+02:00",\n      "to": "2025-09-14T10:23:23+02:00",\n      "type": "OutOfService",\n      "description": "The remote control for the TV needs to be replaced."\n    }\n  ]\n}',
		description: 'The definition of the maintenances',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["OperationsMaintenancesBulkPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesBulkPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'OperationsMaintenancesByIdPatch',
		name: 'OperationsMaintenancesByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/operations/v1/maintenances/{id}',
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
				url: '=/operations/v1/maintenances/{{$value}}',
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
				body: '={{JSON.parse($parameter["OperationsMaintenancesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'OperationsMaintenancesByIdDelete',
		name: 'OperationsMaintenancesByIdDelete',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesByIdDelete'],
			},
		},
		routing: {
			request: {
				method: 'DELETE',
				url: '/operations/v1/maintenances/{id}',
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
				url: '=/operations/v1/maintenances/{{$value}}',
			},
		},
	},
	{
		displayName: 'OperationsMaintenancesByIdGet',
		name: 'OperationsMaintenancesByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/operations/v1/maintenances/{id}',
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
				url: '=/operations/v1/maintenances/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: unit. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'OperationsMaintenancesByIdHead',
		name: 'OperationsMaintenancesByIdHead',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Maintenance'],
				operation: ['OperationsMaintenancesByIdHead'],
			},
		},
		routing: {
			request: {
				method: 'HEAD',
				url: '/operations/v1/maintenances/{id}',
			},
		},
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
				url: '=/operations/v1/maintenances/{{$value}}',
			},
		},
	},
	{
		displayName: 'OperationsNight-auditPut',
		name: 'OperationsNight-auditPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Operations'],
				operation: ['OperationsNight-auditPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/operations/v1/night-audit',
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
				qs: {
					propertyId: '={{$parameter["OperationsNight-auditPut_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Operations'],
				operation: ['OperationsNight-auditPut'],
			},
		},
		options: [
			{
				displayName: 'SetReservationsToNoShow',
				name: 'setReservationsToNoShow',
				type: 'boolean',
				default: false,
				description: 'Flag if reservations in the state confirmed, which should have been checked in by now, should be marked as no show. The default value is true and we strongly advise against setting it to false, because different reports rely on setting reservations which were not checked in correctly to no show.',
				routing: {
					request: {
						qs: {
							setReservationsToNoShow: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'OperationsUnits-conditionPut',
		name: 'OperationsUnits-conditionPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['operations-v1'],
				resource: ['Operations'],
				operation: ['OperationsUnits-conditionPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/operations/v1/units-condition',
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
				body: '={{JSON.parse($parameter["OperationsUnits-conditionPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SettingsAge-categoriesByIdGet',
		name: 'SettingsAge-categoriesByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/age-categories/{id}',
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
				url: '=/settings/v1/age-categories/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Languages',
				name: 'languages',
				type: 'string',
				default: '',
				description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
				routing: {
					request: {
						qs: {
							languages: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsAge-categoriesByIdPatch',
		name: 'SettingsAge-categoriesByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/age-categories/{id}',
			},
		},
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
				url: '=/settings/v1/age-categories/{{$value}}',
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
				body: '={{JSON.parse($parameter["SettingsAge-categoriesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SettingsAge-categoriesPost',
		name: 'SettingsAge-categoriesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/age-categories',
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
				body: '={{JSON.parse($parameter["SettingsAge-categoriesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsAge-categoriesGet',
		name: 'SettingsAge-categoriesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['AgeCategory'],
				operation: ['SettingsAge-categoriesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/age-categories',
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
				qs: {
					propertyId: '={{$parameter["SettingsAge-categoriesGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'RateplanCancellation-policiesPost',
		name: 'RateplanCancellation-policiesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/cancellation-policies',
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
				body: '={{JSON.parse($parameter["RateplanCancellation-policiesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanCancellation-policiesGet',
		name: 'RateplanCancellation-policiesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/cancellation-policies',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesGet'],
			},
		},
		options: [
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Filter cancellation policies by the specified property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanCancellation-policiesByIdGet',
		name: 'RateplanCancellation-policiesByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/cancellation-policies/{id}',
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
				url: '=/rateplan/v1/cancellation-policies/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Languages',
				name: 'languages',
				type: 'string',
				default: '',
				description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
				routing: {
					request: {
						qs: {
							languages: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanCancellation-policiesByIdPatch',
		name: 'RateplanCancellation-policiesByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CancellationPolicy'],
				operation: ['RateplanCancellation-policiesByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/cancellation-policies/{id}',
			},
		},
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
				url: '=/rateplan/v1/cancellation-policies/{{$value}}',
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
				body: '={{JSON.parse($parameter["RateplanCancellation-policiesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'RateplanCompaniesPost',
		name: 'RateplanCompaniesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/companies',
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
				body: '={{JSON.parse($parameter["RateplanCompaniesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Company'],
				operation: ['RateplanCompaniesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanCompaniesGet',
		name: 'RateplanCompaniesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/companies',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Company'],
				operation: ['RateplanCompaniesGet'],
			},
		},
		options: [
			{
				displayName: 'CorporateCodes',
				name: 'corporateCodes',
				type: 'string',
				default: '',
				description: 'Return companies that have any of the requested corporate codes',
				routing: {
					request: {
						qs: {
							corporateCodes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Filter by the specified property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'RatePlanIds',
				name: 'ratePlanIds',
				type: 'string',
				default: '',
				description: 'Return companies with any of the specified rate plans',
				routing: {
					request: {
						qs: {
							ratePlanIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TextSearch',
				name: 'textSearch',
				type: 'string',
				default: '',
				description: 'This will filter all companies for the provided free text. Currently it only looks up if the company name contains one of the provided values.',
				routing: {
					request: {
						qs: {
							textSearch: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanCompaniesByIdGet',
		name: 'RateplanCompaniesByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/companies/{id}',
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
				url: '=/rateplan/v1/companies/{{$value}}',
			},
		},
	},
	{
		displayName: 'RateplanCompaniesByIdPatch',
		name: 'RateplanCompaniesByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Company'],
				operation: ['RateplanCompaniesByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/companies/{id}',
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
				url: '=/rateplan/v1/companies/{{$value}}',
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
				body: '={{JSON.parse($parameter["RateplanCompaniesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'RateplanCorporate-codesCodesGet',
		name: 'RateplanCorporate-codesCodesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['CorporateCodes'],
				operation: ['RateplanCorporate-codesCodesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/corporate-codes/codes',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['CorporateCodes'],
				operation: ['RateplanCorporate-codesCodesGet'],
			},
		},
		options: [
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Return codes for a specific property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanNo-Show-policiesPost',
		name: 'RateplanNo-show-policiesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/no-show-policies',
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
				body: '={{JSON.parse($parameter["RateplanNo-show-policiesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanNo-Show-policiesGet',
		name: 'RateplanNo-show-policiesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/no-show-policies',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesGet'],
			},
		},
		options: [
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Filter no-show policies by the specified property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanNo-Show-policiesByIdGet',
		name: 'RateplanNo-show-policiesByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/no-show-policies/{id}',
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
				url: '=/rateplan/v1/no-show-policies/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Languages',
				name: 'languages',
				type: 'string',
				default: '',
				description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
				routing: {
					request: {
						qs: {
							languages: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanNo-Show-policiesByIdPatch',
		name: 'RateplanNo-show-policiesByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['NoShowPolicy'],
				operation: ['RateplanNo-show-policiesByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/no-show-policies/{id}',
			},
		},
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
				url: '=/rateplan/v1/no-show-policies/{{$value}}',
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
				body: '={{JSON.parse($parameter["RateplanNo-show-policiesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'RateplanPromo-codesCodesGet',
		name: 'RateplanPromo-codesCodesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['PromoCodes'],
				operation: ['RateplanPromo-codesCodesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/promo-codes/codes',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['PromoCodes'],
				operation: ['RateplanPromo-codesCodesGet'],
			},
		},
		options: [
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Return codes for a specific property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanRate-plansByIdRatesGet',
		name: 'RateplanRate-plansByIdRatesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRate-plansByIdRatesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans/{id}/rates',
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
				url: '=/rateplan/v1/rate-plans/{{$value}}/rates',
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
				qs: {
					to: '={{$parameter["RateplanRate-plansByIdRatesGet_to"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Rate'],
				operation: ['RateplanRate-plansByIdRatesGet'],
			},
		},
		options: [
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanRate-plansByIdRatesPut',
		name: 'RateplanRate-plansByIdRatesPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRate-plansByIdRatesPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/rateplan/v1/rate-plans/{id}/rates',
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
				url: '=/rateplan/v1/rate-plans/{{$value}}/rates',
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
			'{\n  "rates": [\n    {\n      "from": "2025-09-12T17:00:00+02:00",\n      "to": "2025-09-13T11:00:00+02:00",\n      "price": {\n        "amount": 123.5,\n        "currency": "EUR"\n      },\n      "restrictions": {\n        "minLengthOfStay": 1,\n        "maxLengthOfStay": 30,\n        "closed": false,\n        "closedOnArrival": true,\n        "closedOnDeparture": true\n      }\n    }\n  ]\n}',
		description: 'The definition of the rates',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["RateplanRate-plansByIdRatesPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'RateplanRatesPatch',
		name: 'RateplanRatesPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Rate'],
				operation: ['RateplanRatesPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/rates',
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
				body: '={{JSON.parse($parameter["RateplanRatesPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Rate'],
				operation: ['RateplanRatesPatch'],
			},
		},
		options: [
			{
				displayName: 'WeekDays',
				name: 'weekDays',
				type: 'string',
				default: '',
				description:
					'The weekdays that will be patched. If not specified, all weekdays will be patched.',
				routing: {
					request: {
						qs: {
							weekDays: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanRate-plansGet',
		name: 'RateplanRate-plansGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansGet'],
			},
		},
		options: [
			{
				displayName: 'BaseRatePlanIds',
				name: 'baseRatePlanIds',
				type: 'string',
				default: '',
				description: 'Return rate plans derived from any of the specified rate plans',
				routing: {
					request: {
						qs: {
							baseRatePlanIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CancellationPolicyIds',
				name: 'cancellationPolicyIds',
				type: 'string',
				default: '',
				description: 'Return rate plans with any of the specified cancellation policies',
				routing: {
					request: {
						qs: {
							cancellationPolicyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ChannelCodes',
				name: 'channelCodes',
				type: 'string',
				default: '',
				description: 'Return rate plans that are sold though any of the specified channels',
				routing: {
					request: {
						qs: {
							channelCodes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CompanyIds',
				name: 'companyIds',
				type: 'string',
				default: '',
				description: 'Return rate plans filtered by requested companies',
				routing: {
					request: {
						qs: {
							companyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'DerivationLevelFilter',
				name: 'derivationLevelFilter',
				type: 'string',
				default: '',
				description: 'This will filter rate plans based on their derivation level.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7',
				routing: {
					request: {
						qs: {
							derivationLevelFilter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, cancellationPolicy, services, bookingPeriods, surcharges, ageCategories. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IncludeArchived',
				name: 'includeArchived',
				type: 'boolean',
				default: false,
				description: 'Return archived rate plans. Defaults to false.',
				routing: {
					request: {
						qs: {
							includeArchived: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IncludedServiceIds',
				name: 'includedServiceIds',
				type: 'string',
				default: '',
				description: 'Return rate plans that have any of the requested included services',
				routing: {
					request: {
						qs: {
							includedServiceIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'IsDerived',
				name: 'isDerived',
				type: 'boolean',
				default: false,
				description: 'Return only derived or base rate plans',
				routing: {
					request: {
						qs: {
							isDerived: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'MinGuaranteeTypes',
				name: 'minGuaranteeTypes',
				type: 'string',
				default: '',
				description: 'Return rate plans with any of the specified min guarantee types',
				routing: {
					request: {
						qs: {
							minGuaranteeTypes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'NoShowPolicyIds',
				name: 'noShowPolicyIds',
				type: 'string',
				default: '',
				description: 'Return rate plans with any of the specified no-show policies',
				routing: {
					request: {
						qs: {
							noShowPolicyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PromoCodes',
				name: 'promoCodes',
				type: 'string',
				default: '',
				description: 'Return rate plans that have any of the requested promo codes',
				routing: {
					request: {
						qs: {
							promoCodes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Return rate plans for the specific property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'RatePlanCodes',
				name: 'ratePlanCodes',
				type: 'string',
				default: '',
				description: 'Return rate plans filtered by requested codes',
				routing: {
					request: {
						qs: {
							ratePlanCodes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceDefinitionIds',
				name: 'timeSliceDefinitionIds',
				type: 'string',
				default: '',
				description: 'Return rate plans with any of the specified time slice definitions',
				routing: {
					request: {
						qs: {
							timeSliceDefinitionIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceTemplate',
				name: 'timeSliceTemplate',
				type: 'options',
				default: 'DayUse',
				description: "The time slice template, defaults to 'over night'",
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
				routing: {
					request: {
						qs: {
							timeSliceTemplate: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupIds',
				name: 'unitGroupIds',
				type: 'string',
				default: '',
				description: 'Return rate plans with any of the specified unit groups',
				routing: {
					request: {
						qs: {
							unitGroupIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupTypes',
				name: 'unitGroupTypes',
				type: 'string',
				default: '',
				description: 'Return rate plans with any of the specified unit group types',
				routing: {
					request: {
						qs: {
							unitGroupTypes: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanRate-plansPost',
		name: 'RateplanRate-plansPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/rate-plans',
			},
		},
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
			'{\n  "code": "NONREF",\n  "propertyId": "MUC",\n  "unitGroupId": "MUC-DBL",\n  "cancellationPolicyId": "MUC-FLE",\n  "channelCodes": [\n    "Direct",\n    "BookingCom",\n    "Ibe"\n  ],\n  "promoCodes": [\n    "APA55100",\n    "DISCOUNT20"\n  ],\n  "isSubjectToCityTax": true,\n  "timeSliceDefinitionId": "MUC-NIGHT",\n  "name": {\n    "de": "Nicht Stornierbar",\n    "en": "Non Refundable"\n  },\n  "description": {\n    "de": "Nicht Stornierbar",\n    "en": "Non Refundable"\n  },\n  "minGuaranteeType": "PM6Hold",\n  "priceCalculationMode": "Truncate",\n  "bookingPeriods": [\n    {\n      "from": "2025-09-05T09:58:27.8698613+02:00",\n      "to": "2025-09-19T09:58:27.8698613+02:00"\n    },\n    {\n      "from": "2025-09-22T09:58:27.8698613+02:00",\n      "to": "2025-11-11T09:58:27.8698613+02:00"\n    }\n  ],\n  "restrictions": {\n    "minAdvance": {\n      "hours": 12,\n      "days": 180\n    },\n    "maxAdvance": {\n      "months": 24\n    }\n  },\n  "pricingRule": {\n    "baseRatePlanId": "MUC-NONREF-SGL",\n    "type": "Absolute",\n    "value": 20\n  },\n  "surcharges": [\n    {\n      "adults": 2,\n      "type": "Absolute",\n      "value": 10\n    }\n  ],\n  "ageCategories": [\n    {\n      "id": "MUC-BABY",\n      "surcharges": [\n        {\n          "adults": 1,\n          "value": 20\n        }\n      ]\n    }\n  ],\n  "includedServices": [\n    {\n      "serviceId": "MUC-BRKF",\n      "grossPrice": {\n        "amount": 10,\n        "currency": "EUR"\n      }\n    }\n  ],\n  "companies": [\n    {\n      "id": "MUC-APA",\n      "corporateCode": "APA-DBL"\n    }\n  ],\n  "accountingConfigs": [\n    {\n      "state": "Unknown",\n      "vatType": "Normal",\n      "serviceType": "FoodAndBeverages",\n      "subAccountId": "ALCO",\n      "validFrom": "2021-01-01"\n    }\n  ]\n}',
		description: 'The definition of the rate plan',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["RateplanRate-plansPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanRate-plansPatch',
		name: 'RateplanRate-plansPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/rate-plans',
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
				body: '={{JSON.parse($parameter["RateplanRate-plansPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'RateplanRate-plansByIdGet',
		name: 'RateplanRate-plansByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/rate-plans/{id}',
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
				url: '=/rateplan/v1/rate-plans/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: property, cancellationPolicy. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Languages',
				name: 'languages',
				type: 'string',
				default: '',
				description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
				routing: {
					request: {
						qs: {
							languages: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanRate-plansByIdPut',
		name: 'RateplanRate-plansByIdPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['RatePlan'],
				operation: ['RateplanRate-plansByIdPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/rateplan/v1/rate-plans/{id}',
			},
		},
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
				url: '=/rateplan/v1/rate-plans/{{$value}}',
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
			'{\n  "name": {\n    "de": "Nicht Stornierbar",\n    "en": "Non Refundable"\n  },\n  "description": {\n    "de": "Nicht Stornierbar",\n    "en": "Non Refundable"\n  },\n  "minGuaranteeType": "PM6Hold",\n  "priceCalculationMode": "Truncate",\n  "channelCodes": [\n    "Direct",\n    "BookingCom",\n    "Ibe"\n  ],\n  "cancellationPolicyId": "MUC-NONREF",\n  "bookingPeriods": [\n    {\n      "from": "2025-09-05T09:58:27.8698613+02:00",\n      "to": "2025-09-19T09:58:27.8698613+02:00"\n    },\n    {\n      "from": "2025-09-22T09:58:27.8698613+02:00",\n      "to": "2025-11-11T09:58:27.8698613+02:00"\n    }\n  ],\n  "restrictions": {\n    "minAdvance": {\n      "hours": 12,\n      "days": 180\n    },\n    "maxAdvance": {\n      "months": 24\n    }\n  },\n  "includedServices": [\n    {\n      "serviceId": "MUC-BRKF",\n      "grossPrice": {\n        "amount": 10,\n        "currency": "EUR"\n      }\n    },\n    {\n      "serviceId": "MUC-WLAN",\n      "grossPrice": {\n        "amount": 5,\n        "currency": "EUR"\n      }\n    }\n  ],\n  "companies": [\n    {\n      "id": "MUC-APA",\n      "corporateCode": "APA-DBL"\n    }\n  ],\n  "pricingRule": {\n    "baseRatePlanId": "MUC-NONREF-SGL",\n    "type": "Absolute",\n    "value": 20\n  },\n  "surcharges": [\n    {\n      "adults": 2,\n      "type": "Percent",\n      "value": 10\n    }\n  ],\n  "ageCategories": [\n    {\n      "id": "MUC-BABY",\n      "surcharges": [\n        {\n          "adults": 1,\n          "value": 10\n        }\n      ]\n    },\n    {\n      "id": "MUC-CHILD",\n      "surcharges": [\n        {\n          "adults": 1,\n          "value": 40\n        }\n      ]\n    }\n  ]\n}',
		description: 'The definition of the rate plan',
		routing: {
			request: {
				body: '={{JSON.parse($parameter["RateplanRate-plansByIdPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'RateplanServicesPost',
		name: 'RateplanServicesPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/rateplan/v1/services',
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
				body: '={{JSON.parse($parameter["RateplanServicesPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Service'],
				operation: ['RateplanServicesPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanServicesGet',
		name: 'RateplanServicesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Service'],
				operation: ['RateplanServicesGet'],
			},
		},
		options: [
			{
				displayName: 'ChannelCodes',
				name: 'channelCodes',
				type: 'string',
				default: '',
				description: 'The channel codes the service is sold through',
				routing: {
					request: {
						qs: {
							channelCodes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'OnlySoldAsExtras',
				name: 'onlySoldAsExtras',
				type: 'boolean',
				default: false,
				description:
					'If set to true, return only services that can be sold as extras. Otherwise, it returns both, extras, and include-only.',
				routing: {
					request: {
						qs: {
							onlySoldAsExtras: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Filter services by the specified property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'ServiceTypes',
				name: 'serviceTypes',
				type: 'string',
				default: '',
				description: 'The service types offered',
				routing: {
					request: {
						qs: {
							serviceTypes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TextSearch',
				name: 'textSearch',
				type: 'string',
				default: '',
				description: 'This will filter all services for the provided free text. Currently it only looks up if the service name contains one of the provided values.',
				routing: {
					request: {
						qs: {
							textSearch: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'RateplanServicesByIdPatch',
		name: 'RateplanServicesByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/rateplan/v1/services/{id}',
			},
		},
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
				url: '=/rateplan/v1/services/{{$value}}',
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
				body: '={{JSON.parse($parameter["RateplanServicesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'RateplanServicesByIdGet',
		name: 'RateplanServicesByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
				resource: ['Service'],
				operation: ['RateplanServicesByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/rateplan/v1/services/{id}',
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
				url: '=/rateplan/v1/services/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Service'],
				operation: ['RateplanServicesByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Languages',
				name: 'languages',
				type: 'string',
				default: '',
				description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
				routing: {
					request: {
						qs: {
							languages: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'ReportsReportsOrdered-servicesGet',
		name: 'ReportsReportsOrdered-servicesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsOrdered-servicesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/ordered-services',
			},
		},
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
				qs: {
					from: '={{$parameter["ReportsReportsOrdered-servicesGet_from"] ? new Date($parameter["ReportsReportsOrdered-servicesGet_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["ReportsReportsOrdered-servicesGet_to"] ? new Date($parameter["ReportsReportsOrdered-servicesGet_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
				},
			},
		},
	},
	{
		displayName: 'ReportsReportsArrivalsGet',
		name: 'ReportsReportsArrivalsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsArrivalsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/arrivals',
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
				qs: {
					year: '={{$parameter["ReportsReportsArrivalsGet_year"]}}',
				},
			},
		},
	},
	{
		displayName: 'ReportsReportsProperty-performanceGet',
		name: 'ReportsReportsProperty-performanceGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/property-performance',
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
				qs: {
					from: '={{$parameter["ReportsReportsProperty-performanceGet_from"] ? new Date($parameter["ReportsReportsProperty-performanceGet_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["ReportsReportsProperty-performanceGet_to"] ? new Date($parameter["ReportsReportsProperty-performanceGet_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['ReportsReportsProperty-performanceGet'],
			},
		},
		options: [
			{
				displayName: 'ChannelCodes',
				name: 'channelCodes',
				type: 'string',
				default: '',
				description: 'The channel codes used to filter the retrieved data',
				routing: {
					request: {
						qs: {
							channelCodes: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'CompanyIds',
				name: 'companyIds',
				type: 'string',
				default: '',
				description: 'The company IDs used to filter the retrieved data',
				routing: {
					request: {
						qs: {
							companyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: businessDays. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'MarketSegmentIds',
				name: 'marketSegmentIds',
				type: 'string',
				default: '',
				description: 'The market segment IDs used to filter the retrieved data',
				routing: {
					request: {
						qs: {
							marketSegmentIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'RatePlanIds',
				name: 'ratePlanIds',
				type: 'string',
				default: '',
				description: 'The rate plan IDs used to filter the retrieved data',
				routing: {
					request: {
						qs: {
							ratePlanIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TimeSliceDefinitionIds',
				name: 'timeSliceDefinitionIds',
				type: 'string',
				default: '',
				description: 'The time slice definition IDs used to filter the retrieved data',
				routing: {
					request: {
						qs: {
							timeSliceDefinitionIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'TravelPurpose',
				name: 'travelPurpose',
				type: 'options',
				default: 'Business',
				description: 'The travel purpose to filter the retrieved data',
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
				routing: {
					request: {
						qs: {
							travelPurpose: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupIds',
				name: 'unitGroupIds',
				type: 'string',
				default: '',
				description: 'The unit group IDs used to filter the retrieved data',
				routing: {
					request: {
						qs: {
							unitGroupIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'UnitGroupTypes',
				name: 'unitGroupTypes',
				type: 'string',
				default: '',
				description: 'The unit group types used to filter the retrieved data',
				routing: {
					request: {
						qs: {
							unitGroupTypes: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'ReportsReportsCompany-Invoices-vatGet',
		name: 'ReportsReportsCompany-invoices-vatGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsCompany-invoices-vatGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/company-invoices-vat',
			},
		},
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
				qs: {
					propertyId: '={{$parameter["ReportsReportsCompany-invoices-vatGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['ReportsReportsCompany-invoices-vatGet'],
			},
		},
		options: [
			{
				displayName: 'CompanyIds',
				name: 'companyIds',
				type: 'string',
				default: '',
				description: 'Company IDs the report should be generated for',
				routing: {
					request: {
						qs: {
							companyIds: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'DateFilter',
				name: 'dateFilter',
				type: 'string',
				default: '',
				description: 'Set a date interval to get the report for. Cannot be more than 1 month.You can provide an array of string expressions which all need to apply.Each expression has the form of \'OPERATION_VALUE\' where VALUE needs to be of the valid format of the property type and OPERATION can be:\'eq\' for equals\'neq\' for not equals\'lt\' for less than\'gt\' for greater than\'lte\' for less than or equals\'gte\' for greater than or equalsFor instance\'eq_5\' would mean the value should equal 5\'lte_7\' would mean the value should be less than or equal to 7.',
				routing: {
					request: {
						qs: {
							dateFilter: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'ReportsReportsRevenuesGet',
		name: 'ReportsReportsRevenuesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['reports-v1'],
				resource: ['Reports'],
				operation: ['ReportsReportsRevenuesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/reports/v1/reports/revenues',
			},
		},
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
				qs: {
					from: '={{$parameter["ReportsReportsRevenuesGet_from"] ? new Date($parameter["ReportsReportsRevenuesGet_from"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
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
				qs: {
					to: '={{$parameter["ReportsReportsRevenuesGet_to"] ? new Date($parameter["ReportsReportsRevenuesGet_to"]).toISOString().replace(/\\.\\d{3}Z$/, "Z") : ""}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['Reports'],
				operation: ['ReportsReportsRevenuesGet'],
			},
		},
		options: [
			{
				displayName: 'LanguageCode',
				name: 'languageCode',
				type: 'string',
				default: '',
				description: 'The language for the the report',
				routing: {
					request: {
						qs: {
							languageCode: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsCapture-policiesGet',
		name: 'SettingsCapture-policiesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CapturePolicies'],
				operation: ['SettingsCapture-policiesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/capture-policies',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['CapturePolicies'],
				operation: ['SettingsCapture-policiesGet'],
			},
		},
		options: [
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Filter capture policies by the specified property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsCapture-policiesByIdGet',
		name: 'SettingsCapture-policiesByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CapturePolicies'],
				operation: ['SettingsCapture-policiesByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/capture-policies/{id}',
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
				url: '=/settings/v1/capture-policies/{{$value}}',
			},
		},
	},
	{
		displayName: 'SettingsCapture-policiesByIdPatch',
		name: 'SettingsCapture-policiesByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CapturePolicies'],
				operation: ['SettingsCapture-policiesByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/capture-policies/{id}',
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
				url: '=/settings/v1/capture-policies/{{$value}}',
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
				body: '={{JSON.parse($parameter["SettingsCapture-policiesByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SettingsCity-taxPost',
		name: 'SettingsCity-taxPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CityTax'],
				operation: ['SettingsCity-taxPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/city-tax',
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
				body: '={{JSON.parse($parameter["SettingsCity-taxPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['CityTax'],
				operation: ['SettingsCity-taxPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsCity-taxGet',
		name: 'SettingsCity-taxGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CityTax'],
				operation: ['SettingsCity-taxGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/city-tax',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['CityTax'],
				operation: ['SettingsCity-taxGet'],
			},
		},
		options: [
			{
				displayName: 'PropertyId',
				name: 'propertyId',
				type: 'string',
				default: '',
				description: 'Filter by the specified property',
				routing: {
					request: {
						qs: {
							propertyId: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsCity-taxByIdGet',
		name: 'SettingsCity-taxByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CityTax'],
				operation: ['SettingsCity-taxByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/city-tax/{id}',
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
				url: '=/settings/v1/city-tax/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['CityTax'],
				operation: ['SettingsCity-taxByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Languages',
				name: 'languages',
				type: 'string',
				default: '',
				description: '\'all\' or comma-separated list of two-letter language codes (ISO Alpha-2)',
				routing: {
					request: {
						qs: {
							languages: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsCity-taxByIdPatch',
		name: 'SettingsCity-taxByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CityTax'],
				operation: ['SettingsCity-taxByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/city-tax/{id}',
			},
		},
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
				url: '=/settings/v1/city-tax/{{$value}}',
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
				body: '={{JSON.parse($parameter["SettingsCity-taxByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SettingsSub-accountsGet',
		name: 'SettingsSub-accountsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/sub-accounts',
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
				qs: {
					propertyId: '={{$parameter["SettingsSub-accountsGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsGet'],
			},
		},
		options: [
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsSub-accountsPost',
		name: 'SettingsSub-accountsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/sub-accounts',
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
				body: '={{JSON.parse($parameter["SettingsSub-accountsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsSub-accounts$countGet',
		name: 'SettingsSub-accounts$countGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accounts$countGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/sub-accounts/$count',
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
				qs: {
					propertyId: '={{$parameter["SettingsSub-accounts$countGet_propertyId"]}}',
				},
			},
		},
	},
	{
		displayName: 'SettingsSub-accountsByIdGet',
		name: 'SettingsSub-accountsByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/sub-accounts/{id}',
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
				url: '=/settings/v1/sub-accounts/{{$value}}',
			},
		},
	},
	{
		displayName: 'SettingsSub-accountsByIdPatch',
		name: 'SettingsSub-accountsByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/sub-accounts/{id}',
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
				url: '=/settings/v1/sub-accounts/{{$value}}',
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
				body: '={{JSON.parse($parameter["SettingsSub-accountsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SettingsSub-accountsByIdHead',
		name: 'SettingsSub-accountsByIdHead',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['CustomSubAccounts'],
				operation: ['SettingsSub-accountsByIdHead'],
			},
		},
		routing: {
			request: {
				method: 'HEAD',
				url: '/settings/v1/sub-accounts/{id}',
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
				url: '=/settings/v1/sub-accounts/{{$value}}',
			},
		},
	},
	{
		displayName: 'SettingsFeaturesByPropertyIdGet',
		name: 'SettingsFeaturesByPropertyIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['FeatureSettings'],
				operation: ['SettingsFeaturesByPropertyIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/features/{propertyId}',
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
				url: '=/settings/v1/features/{{$value}}',
			},
		},
	},
	{
		displayName: 'SettingsFeaturesByPropertyIdPatch',
		name: 'SettingsFeaturesByPropertyIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['FeatureSettings'],
				operation: ['SettingsFeaturesByPropertyIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/features/{propertyId}',
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
				url: '=/settings/v1/features/{{$value}}',
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
				body: '={{JSON.parse($parameter["SettingsFeaturesByPropertyIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SettingsInvoice-addressGet',
		name: 'SettingsInvoice-addressGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['InvoiceAddress'],
				operation: ['SettingsInvoice-addressGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/invoice-address',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['InvoiceAddress'],
				operation: ['SettingsInvoice-addressGet'],
			},
		},
		options: [
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'The propertyIds parameter',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsInvoice-addressPut',
		name: 'SettingsInvoice-addressPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['InvoiceAddress'],
				operation: ['SettingsInvoice-addressPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/settings/v1/invoice-address',
			},
		},
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
				body: '={{JSON.parse($parameter["SettingsInvoice-addressPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SettingsInvoice-addressPatch',
		name: 'SettingsInvoice-addressPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['InvoiceAddress'],
				operation: ['SettingsInvoice-addressPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/invoice-address',
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
				body: '={{JSON.parse($parameter["SettingsInvoice-addressPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SettingsLanguagesGet',
		name: 'SettingsLanguagesGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['Languages'],
				operation: ['SettingsLanguagesGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/languages',
			},
		},
	},
	{
		displayName: 'SettingsLanguagesPut',
		name: 'SettingsLanguagesPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['Languages'],
				operation: ['SettingsLanguagesPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/settings/v1/languages',
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
				body: '={{JSON.parse($parameter["SettingsLanguagesPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SettingsMarket-segmentsByIdGet',
		name: 'SettingsMarket-segmentsByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/market-segments/{id}',
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
				url: '=/settings/v1/market-segments/{{$value}}',
			},
		},
	},
	{
		displayName: 'SettingsMarket-segmentsByIdHead',
		name: 'SettingsMarket-segmentsByIdHead',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsByIdHead'],
			},
		},
		routing: {
			request: {
				method: 'HEAD',
				url: '/settings/v1/market-segments/{id}',
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
				url: '=/settings/v1/market-segments/{{$value}}',
			},
		},
	},
	{
		displayName: 'SettingsMarket-segmentsByIdPatch',
		name: 'SettingsMarket-segmentsByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/market-segments/{id}',
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
				url: '=/settings/v1/market-segments/{{$value}}',
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
				body: '={{JSON.parse($parameter["SettingsMarket-segmentsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SettingsMarket-segmentsGet',
		name: 'SettingsMarket-segmentsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/market-segments',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsGet'],
			},
		},
		options: [
			{
				displayName: 'PageNumber',
				name: 'pageNumber',
				type: 'number',
				default: 1,
				description:
					'Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.',
				routing: {
					request: {
						qs: {
							pageNumber: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: '',
				description:
					'Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.',
				routing: {
					request: {
						qs: {
							pageSize: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Return market segments with any of the specified property IDs',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsMarket-segmentsPost',
		name: 'SettingsMarket-segmentsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/market-segments',
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
				body: '={{JSON.parse($parameter["SettingsMarket-segmentsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segmentsPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsMarket-segments$countGet',
		name: 'SettingsMarket-segments$countGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segments$countGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/market-segments/$count',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['MarketSegment'],
				operation: ['SettingsMarket-segments$countGet'],
			},
		},
		options: [
			{
				displayName: 'PropertyIds',
				name: 'propertyIds',
				type: 'string',
				default: '',
				description: 'Return market segments with any of the specified property IDs',
				routing: {
					request: {
						qs: {
							propertyIds: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsPropertiesByIdGet',
		name: 'SettingsPropertiesByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['PropertySettings'],
				operation: ['SettingsPropertiesByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/properties/{id}',
			},
		},
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
				url: '=/settings/v1/properties/{{$value}}',
			},
		},
	},
	{
		displayName: 'SettingsPropertiesByPropertyIdTime-Slice-definitionsByIdGet',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/properties/{propertyId}/time-slice-definitions/{id}',
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
				url: '=/settings/v1/properties/{{$value}}/time-slice-definitions/{id}',
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
				url: '=/settings/v1/properties/{propertyId}/time-slice-definitions/{{$value}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsPropertiesByPropertyIdTime-Slice-definitionsByIdPatch',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch'],
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '/settings/v1/properties/{propertyId}/time-slice-definitions/{id}',
			},
		},
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
				url: '=/settings/v1/properties/{{$value}}/time-slice-definitions/{id}',
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
				url: '=/settings/v1/properties/{propertyId}/time-slice-definitions/{{$value}}',
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
				body: '={{JSON.parse($parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SettingsPropertiesByPropertyIdTime-Slice-definitionsGet',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/settings/v1/properties/{propertyId}/time-slice-definitions',
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
				url: '=/settings/v1/properties/{{$value}}/time-slice-definitions',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsGet'],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				default: '',
				description:
					'List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.',
				routing: {
					request: {
						qs: {
							expand: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SettingsPropertiesByPropertyIdTime-Slice-definitionsPost',
		name: 'SettingsPropertiesByPropertyIdTime-slice-definitionsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['settings-v1'],
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/settings/v1/properties/{propertyId}/time-slice-definitions',
			},
		},
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
				url: '=/settings/v1/properties/{{$value}}/time-slice-definitions',
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
				body: '={{JSON.parse($parameter["SettingsPropertiesByPropertyIdTime-slice-definitionsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['TimeSliceDefinitions'],
				operation: ['SettingsPropertiesByPropertyIdTime-slice-definitionsPost'],
			},
		},
		options: [
			{
				displayName: 'IdempotencyKey',
				name: 'Idempotency-Key',
				type: 'string',
				default: '',
				description: 'Unique key for safely retrying requests without accidentally performing the same operation twice. We\'ll always send back the same response for requests made with the same key, and keys can\'t be reused with different request parameters. Keys expire after 24 hours.',
				routing: {
					request: {
						headers: {
							'Idempotency-Key': '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'PingerPost',
		name: 'PingerPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['webhook-v1'],
				resource: ['HealthCheck'],
				operation: ['PingerPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/v1/pinger',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['HealthCheck'],
				operation: ['PingerPost'],
			},
		},
		options: [
			{
				displayName: 'Url',
				name: 'url',
				type: 'string',
				default: '',
				description: 'The URL parameter',
				routing: {
					request: {
						qs: {
							url: '={{$value}}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'SubscriptionsGet',
		name: 'SubscriptionsGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['webhook-v1'],
				resource: ['Subscriptions'],
				operation: ['SubscriptionsGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/v1/subscriptions',
			},
		},
	},
	{
		displayName: 'SubscriptionsPost',
		name: 'SubscriptionsPost',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['webhook-v1'],
				resource: ['Subscriptions'],
				operation: ['SubscriptionsPost'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/v1/subscriptions',
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
				body: '={{JSON.parse($parameter["SubscriptionsPost_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SubscriptionsByIdGet',
		name: 'SubscriptionsByIdGet',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['webhook-v1'],
				resource: ['Subscriptions'],
				operation: ['SubscriptionsByIdGet'],
			},
		},
		routing: {
			request: {
				method: 'GET',
				url: '/v1/subscriptions/{id}',
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
				url: '=/v1/subscriptions/{{$value}}',
			},
		},
	},
	{
		displayName: 'SubscriptionsByIdPut',
		name: 'SubscriptionsByIdPut',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['webhook-v1'],
				resource: ['Subscriptions'],
				operation: ['SubscriptionsByIdPut'],
			},
		},
		routing: {
			request: {
				method: 'PUT',
				url: '/v1/subscriptions/{id}',
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
				url: '=/v1/subscriptions/{{$value}}',
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
				body: '={{JSON.parse($parameter["SubscriptionsByIdPut_body"])}}',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		},
	},
	{
		displayName: 'SubscriptionsByIdDelete',
		name: 'SubscriptionsByIdDelete',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				group: ['webhook-v1'],
				resource: ['Subscriptions'],
				operation: ['SubscriptionsByIdDelete'],
			},
		},
		routing: {
			request: {
				method: 'DELETE',
				url: '/v1/subscriptions/{id}',
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
				url: '=/v1/subscriptions/{{$value}}',
			},
		},
	},
];
