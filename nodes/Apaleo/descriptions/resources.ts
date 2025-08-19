import { INodeProperties } from 'n8n-workflow';

export const resourcesByGroup = {
	'availability-v1': [
		{
			displayName: 'Availability',
			value: 'Availability',
		},
		{
			displayName: 'ReservationAvailability',
			value: 'ReservationAvailability',
		},
	],
	'booking-v1': [
		{
			displayName: 'Block',
			value: 'Block',
		},
		{
			displayName: 'BlockActions',
			value: 'BlockActions',
		},
		{
			displayName: 'Booking',
			value: 'Booking',
		},
		{
			displayName: 'Group',
			value: 'Group',
		},
		{
			displayName: 'Offer',
			value: 'Offer',
		},
		{
			displayName: 'Reservation',
			value: 'Reservation',
		},
		{
			displayName: 'ReservationActions',
			value: 'ReservationActions',
		},
		{
			displayName: 'Types',
			value: 'Types',
		},
	],
	'finance-v1': [
		{
			displayName: 'Folio',
			value: 'Folio',
		},
		{
			displayName: 'FolioActions',
			value: 'FolioActions',
		},
		{
			displayName: 'FolioPayments',
			value: 'FolioPayments',
		},
		{
			displayName: 'Invoice',
			value: 'Invoice',
		},
		{
			displayName: 'InvoiceAction',
			value: 'InvoiceAction',
		},
		{
			displayName: 'SubLedger',
			value: 'SubLedger',
		},
		{
			displayName: 'Types',
			value: 'Types',
		},
	],
	'inventory-v1': [
		{
			displayName: 'Property',
			value: 'Property',
		},
		{
			displayName: 'Unit',
			value: 'Unit',
		},
		{
			displayName: 'UnitAttribute',
			value: 'UnitAttribute',
		},
		{
			displayName: 'UnitGroup',
			value: 'UnitGroup',
		},
	],
	'logs-v1': [
		{
			displayName: 'BookingLogs',
			value: 'BookingLogs',
		},
		{
			displayName: 'FinanceLogs',
			value: 'FinanceLogs',
		},
	],
	'operations-v1': [
		{
			displayName: 'Maintenance',
			value: 'Maintenance',
		},
		{
			displayName: 'Operations',
			value: 'Operations',
		},
	],
	'rateplan-v1': [
		{
			displayName: 'AgeCategory',
			value: 'AgeCategory',
		},
		{
			displayName: 'CancellationPolicy',
			value: 'CancellationPolicy',
		},
		{
			displayName: 'Company',
			value: 'Company',
		},
		{
			displayName: 'CorporateCodes',
			value: 'CorporateCodes',
		},
		{
			displayName: 'NoShowPolicy',
			value: 'NoShowPolicy',
		},
		{
			displayName: 'PromoCodes',
			value: 'PromoCodes',
		},
		{
			displayName: 'Rate',
			value: 'Rate',
		},
		{
			displayName: 'RatePlan',
			value: 'RatePlan',
		},
		{
			displayName: 'Service',
			value: 'Service',
		},
	],
	'reports-v1': [
		{
			displayName: 'Reports',
			value: 'Reports',
		},
	],
	'settings-v1': [
		{
			displayName: 'CapturePolicies',
			value: 'CapturePolicies',
		},
		{
			displayName: 'CityTax',
			value: 'CityTax',
		},
		{
			displayName: 'CustomSubAccounts',
			value: 'CustomSubAccounts',
		},
		{
			displayName: 'FeatureSettings',
			value: 'FeatureSettings',
		},
		{
			displayName: 'InvoiceAddress',
			value: 'InvoiceAddress',
		},
		{
			displayName: 'Languages',
			value: 'Languages',
		},
		{
			displayName: 'MarketSegment',
			value: 'MarketSegment',
		},
		{
			displayName: 'PropertySettings',
			value: 'PropertySettings',
		},
		{
			displayName: 'TimeSliceDefinitions',
			value: 'TimeSliceDefinitions',
		},
	],
	'webhook-v1': [
		{
			displayName: 'HealthCheck',
			value: 'HealthCheck',
		},
		{
			displayName: 'Subscriptions',
			value: 'Subscriptions',
		},
	],
};

export const resourceOptions: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['availability-v1'] } },
		options: [
			{ name: 'Availability', value: 'Availability' },
			{ name: 'ReservationAvailability', value: 'ReservationAvailability' },
		],
		default: 'Availability',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['booking-v1'] } },
		options: [
			{ name: 'Block', value: 'Block' },
			{ name: 'BlockAction', value: 'BlockActions' },
			{ name: 'Booking', value: 'Booking' },
			{ name: 'Group', value: 'Group' },
			{ name: 'Offer', value: 'Offer' },
			{ name: 'Reservation', value: 'Reservation' },
			{ name: 'ReservationAction', value: 'ReservationActions' },
			{ name: 'Type', value: 'Types' },
		],
		default: 'Block',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['finance-v1'] } },
		options: [
			{ name: 'Folio', value: 'Folio' },
			{ name: 'FolioAction', value: 'FolioActions' },
			{ name: 'FolioPayment', value: 'FolioPayments' },
			{ name: 'Invoice', value: 'Invoice' },
			{ name: 'InvoiceAction', value: 'InvoiceAction' },
			{ name: 'SubLedger', value: 'SubLedger' },
			{ name: 'Type', value: 'Types' },
		],
		default: 'Folio',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['inventory-v1'] } },
		options: [
			{ name: 'Property', value: 'Property' },
			{ name: 'Unit', value: 'Unit' },
			{ name: 'UnitAttribute', value: 'UnitAttribute' },
			{ name: 'UnitGroup', value: 'UnitGroup' },
		],
		default: 'Property',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['logs-v1'] } },
		options: [
			{ name: 'BookingLog', value: 'BookingLogs' },
			{ name: 'FinanceLog', value: 'FinanceLogs' },
		],
		default: 'BookingLogs',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['operations-v1'] } },
		options: [
			{ name: 'Maintenance', value: 'Maintenance' },
			{ name: 'Operation', value: 'Operations' },
		],
		default: 'Maintenance',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['rateplan-v1'] } },
		options: [
			{ name: 'AgeCategory', value: 'AgeCategory' },
			{ name: 'CancellationPolicy', value: 'CancellationPolicy' },
			{ name: 'Company', value: 'Company' },
			{ name: 'CorporateCode', value: 'CorporateCodes' },
			{ name: 'NoShowPolicy', value: 'NoShowPolicy' },
			{ name: 'PromoCode', value: 'PromoCodes' },
			{ name: 'Rate', value: 'Rate' },
			{ name: 'RatePlan', value: 'RatePlan' },
			{ name: 'Service', value: 'Service' },
		],
		default: 'AgeCategory',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['reports-v1'] } },
		options: [{ name: 'Report', value: 'Reports' }],
		default: 'Reports',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['settings-v1'] } },
		options: [
			{ name: 'CapturePolicy', value: 'CapturePolicies' },
			{ name: 'CityTax', value: 'CityTax' },
			{ name: 'CustomSubAccount', value: 'CustomSubAccounts' },
			{ name: 'FeatureSetting', value: 'FeatureSettings' },
			{ name: 'InvoiceAddress', value: 'InvoiceAddress' },
			{ name: 'Language', value: 'Languages' },
			{ name: 'MarketSegment', value: 'MarketSegment' },
			{ name: 'PropertySetting', value: 'PropertySettings' },
			{ name: 'TimeSliceDefinition', value: 'TimeSliceDefinitions' },
		],
		default: 'CapturePolicies',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['webhook-v1'] } },
		options: [
			{ name: 'HealthCheck', value: 'HealthCheck' },
			{ name: 'Subscription', value: 'Subscriptions' },
		],
		default: 'HealthCheck',
	},
];
