import { INodeProperties } from 'n8n-workflow';

export const groups = {
  "availability-v1": "Availability-v1",
  "booking-v1": "Booking-v1",
  "finance-v1": "Finance-v1",
  "inventory-v1": "Inventory-v1",
  "logs-v1": "Logs-v1",
  "operations-v1": "Operations-v1",
  "rateplan-v1": "Rateplan-v1",
  "reports-v1": "Reports-v1",
  "settings-v1": "Settings-v1",
  "webhook-v1": "Webhook-v1"
};

export const groupOptions: INodeProperties = {
	displayName: 'Group',
	name: 'group',
	type: 'options',
	noDataExpression: true,
	options: [
		{ name: 'Availability-v1', value: 'availability-v1' },
		{ name: 'Booking-v1', value: 'booking-v1' },
		{ name: 'Finance-v1', value: 'finance-v1' },
		{ name: 'Inventory-v1', value: 'inventory-v1' },
		{ name: 'Logs-v1', value: 'logs-v1' },
		{ name: 'Operations-v1', value: 'operations-v1' },
		{ name: 'Rateplan-v1', value: 'rateplan-v1' },
		{ name: 'Reports-v1', value: 'reports-v1' },
		{ name: 'Settings-v1', value: 'settings-v1' },
		{ name: 'Webhook-v1', value: 'webhook-v1' }
	],
	default: 'availability-v1',
};
