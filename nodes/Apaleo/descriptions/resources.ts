import { INodeProperties } from 'n8n-workflow';

export const resourcesByGroup = {
	'availability-v1': [
		{
			displayName: 'Availability',
			value: 'availability',
		},
		{
			displayName: 'Reservationavailability',
			value: 'reservationavailability',
		},
	],
	'booking-v1': [
		{
			displayName: 'Block',
			value: 'block',
		},
		{
			displayName: 'Blockactions',
			value: 'blockactions',
		},
		{
			displayName: 'Booking',
			value: 'booking',
		},
		{
			displayName: 'Group',
			value: 'group',
		},
		{
			displayName: 'Offer',
			value: 'offer',
		},
		{
			displayName: 'Reservation',
			value: 'reservation',
		},
		{
			displayName: 'Reservationactions',
			value: 'reservationactions',
		},
		{
			displayName: 'Types',
			value: 'types',
		},
	],
	'finance-v1': [
		{
			displayName: 'Folio',
			value: 'folio',
		},
		{
			displayName: 'Folioactions',
			value: 'folioactions',
		},
		{
			displayName: 'Foliopayments',
			value: 'foliopayments',
		},
		{
			displayName: 'Invoice',
			value: 'invoice',
		},
		{
			displayName: 'Invoiceaction',
			value: 'invoiceaction',
		},
		{
			displayName: 'Subledger',
			value: 'subledger',
		},
		{
			displayName: 'Types',
			value: 'types',
		},
	],
	'inventory-v1': [
		{
			displayName: 'Property',
			value: 'property',
		},
		{
			displayName: 'Unit',
			value: 'unit',
		},
		{
			displayName: 'Unitattribute',
			value: 'unitattribute',
		},
		{
			displayName: 'Unitgroup',
			value: 'unitgroup',
		},
	],
	'logs-v1': [
		{
			displayName: 'Bookinglogs',
			value: 'bookinglogs',
		},
		{
			displayName: 'Financelogs',
			value: 'financelogs',
		},
	],
	'operations-v1': [
		{
			displayName: 'Maintenance',
			value: 'maintenance',
		},
		{
			displayName: 'Operations',
			value: 'operations',
		},
	],
	'rateplan-v1': [
		{
			displayName: 'Agecategory',
			value: 'agecategory',
		},
		{
			displayName: 'Cancellationpolicy',
			value: 'cancellationpolicy',
		},
		{
			displayName: 'Company',
			value: 'company',
		},
		{
			displayName: 'Corporatecodes',
			value: 'corporatecodes',
		},
		{
			displayName: 'Noshowpolicy',
			value: 'noshowpolicy',
		},
		{
			displayName: 'Promocodes',
			value: 'promocodes',
		},
		{
			displayName: 'Rate',
			value: 'rate',
		},
		{
			displayName: 'Rateplan',
			value: 'rateplan',
		},
		{
			displayName: 'Service',
			value: 'service',
		},
	],
	'reports-v1': [
		{
			displayName: 'Reports',
			value: 'reports',
		},
	],
	'settings-v1': [
		{
			displayName: 'Capturepolicies',
			value: 'capturepolicies',
		},
		{
			displayName: 'Citytax',
			value: 'citytax',
		},
		{
			displayName: 'Customsubaccounts',
			value: 'customsubaccounts',
		},
		{
			displayName: 'Featuresettings',
			value: 'featuresettings',
		},
		{
			displayName: 'Invoiceaddress',
			value: 'invoiceaddress',
		},
		{
			displayName: 'Languages',
			value: 'languages',
		},
		{
			displayName: 'Marketsegment',
			value: 'marketsegment',
		},
		{
			displayName: 'Propertysettings',
			value: 'propertysettings',
		},
		{
			displayName: 'Timeslicedefinitions',
			value: 'timeslicedefinitions',
		},
	],
	'webhook-v1': [
		{
			displayName: 'Healthcheck',
			value: 'healthcheck',
		},
		{
			displayName: 'Subscriptions',
			value: 'subscriptions',
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
			{ name: 'Availability', value: 'availability' },
			{ name: 'Reservationavailability', value: 'reservationavailability' },
		],
		default: 'availability',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['booking-v1'] } },
		options: [
			{ name: 'Block', value: 'block' },
			{ name: 'Blockaction', value: 'blockactions' },
			{ name: 'Booking', value: 'booking' },
			{ name: 'Group', value: 'group' },
			{ name: 'Offer', value: 'offer' },
			{ name: 'Reservation', value: 'reservation' },
			{ name: 'Reservationaction', value: 'reservationactions' },
			{ name: 'Type', value: 'types' },
		],
		default: 'block',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['finance-v1'] } },
		options: [
			{ name: 'Folio', value: 'folio' },
			{ name: 'Folioaction', value: 'folioactions' },
			{ name: 'Foliopayment', value: 'foliopayments' },
			{ name: 'Invoice', value: 'invoice' },
			{ name: 'Invoiceaction', value: 'invoiceaction' },
			{ name: 'Subledger', value: 'subledger' },
			{ name: 'Type', value: 'types' },
		],
		default: 'folio',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['inventory-v1'] } },
		options: [
			{ name: 'Property', value: 'property' },
			{ name: 'Unit', value: 'unit' },
			{ name: 'Unitattribute', value: 'unitattribute' },
			{ name: 'Unitgroup', value: 'unitgroup' },
		],
		default: 'property',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['logs-v1'] } },
		options: [
			{ name: 'Bookinglog', value: 'bookinglogs' },
			{ name: 'Financelog', value: 'financelogs' },
		],
		default: 'bookinglogs',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['operations-v1'] } },
		options: [
			{ name: 'Maintenance', value: 'maintenance' },
			{ name: 'Operation', value: 'operations' },
		],
		default: 'maintenance',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['rateplan-v1'] } },
		options: [
			{ name: 'Agecategory', value: 'agecategory' },
			{ name: 'Cancellationpolicy', value: 'cancellationpolicy' },
			{ name: 'Company', value: 'company' },
			{ name: 'Corporatecode', value: 'corporatecodes' },
			{ name: 'Noshowpolicy', value: 'noshowpolicy' },
			{ name: 'Promocode', value: 'promocodes' },
			{ name: 'Rate', value: 'rate' },
			{ name: 'Rateplan', value: 'rateplan' },
			{ name: 'Service', value: 'service' },
		],
		default: 'agecategory',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['reports-v1'] } },
		options: [{ name: 'Report', value: 'reports' }],
		default: 'reports',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['settings-v1'] } },
		options: [
			{ name: 'Capturepolicy', value: 'capturepolicies' },
			{ name: 'Citytax', value: 'citytax' },
			{ name: 'Customsubaccount', value: 'customsubaccounts' },
			{ name: 'Featuresetting', value: 'featuresettings' },
			{ name: 'Invoiceaddress', value: 'invoiceaddress' },
			{ name: 'Language', value: 'languages' },
			{ name: 'Marketsegment', value: 'marketsegment' },
			{ name: 'Propertysetting', value: 'propertysettings' },
			{ name: 'Timeslicedefinition', value: 'timeslicedefinitions' },
		],
		default: 'capturepolicies',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { group: ['webhook-v1'] } },
		options: [
			{ name: 'Healthcheck', value: 'healthcheck' },
			{ name: 'Subscription', value: 'subscriptions' },
		],
		default: 'healthcheck',
	},
];
