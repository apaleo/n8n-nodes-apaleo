import { INodeProperties } from 'n8n-workflow';

export const groups = {
	'availability-v1': 'AvailabilityV1',
	'booking-v1': 'BookingV1',
	'finance-v1': 'FinanceV1',
	'inventory-v1': 'InventoryV1',
	'logs-v1': 'LogsV1',
	'operations-v1': 'OperationsV1',
	'rateplan-v1': 'RateplanV1',
	'reports-v1': 'ReportsV1',
	'settings-v1': 'SettingsV1',
	'webhook-v1': 'WebhookV1',
};

export const groupOptions: INodeProperties = {
	displayName: 'Group',
	name: 'group',
	type: 'options',
	noDataExpression: true,
	options: [
		{ name: 'AvailabilityV1', value: 'availability-v1' },
		{ name: 'BookingV1', value: 'booking-v1' },
		{ name: 'FinanceV1', value: 'finance-v1' },
		{ name: 'InventoryV1', value: 'inventory-v1' },
		{ name: 'LogsV1', value: 'logs-v1' },
		{ name: 'OperationsV1', value: 'operations-v1' },
		{ name: 'RateplanV1', value: 'rateplan-v1' },
		{ name: 'ReportsV1', value: 'reports-v1' },
		{ name: 'SettingsV1', value: 'settings-v1' },
		{ name: 'WebhookV1', value: 'webhook-v1' },
	],
	default: 'availability-v1',
};
