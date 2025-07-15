import { INodeProperties } from 'n8n-workflow';

export const groupOptions: INodeProperties = {
	displayName: 'Group',
	name: 'group',
	type: 'options',
	noDataExpression: true,
	options: [
		{ name: 'account-v1', value: 'account-v1' },
		{ name: 'availability-v1', value: 'availability-v1' },
		{ name: 'booking-v1', value: 'booking-v1' },
		{ name: 'finance-v1', value: 'finance-v1' },
		{ name: 'integration-v1', value: 'integration-v1' },
		{ name: 'inventory-v1', value: 'inventory-v1' },
		{ name: 'logs-v1', value: 'logs-v1' },
		{ name: 'operations-v1', value: 'operations-v1' },
		{ name: 'rateplan-v1', value: 'rateplan-v1' },
		{ name: 'reports-v1', value: 'reports-v1' },
		{ name: 'settings-v1', value: 'settings-v1' },
		{ name: 'webhook-v1', value: 'webhook-v1' }
	],
	default: 'account-v1',
};

export const groups = [
  {
    "displayName": "account-v1",
    "value": "account-v1"
  },
  {
    "displayName": "availability-v1",
    "value": "availability-v1"
  },
  {
    "displayName": "booking-v1",
    "value": "booking-v1"
  },
  {
    "displayName": "finance-v1",
    "value": "finance-v1"
  },
  {
    "displayName": "integration-v1",
    "value": "integration-v1"
  },
  {
    "displayName": "inventory-v1",
    "value": "inventory-v1"
  },
  {
    "displayName": "logs-v1",
    "value": "logs-v1"
  },
  {
    "displayName": "operations-v1",
    "value": "operations-v1"
  },
  {
    "displayName": "rateplan-v1",
    "value": "rateplan-v1"
  },
  {
    "displayName": "reports-v1",
    "value": "reports-v1"
  },
  {
    "displayName": "settings-v1",
    "value": "settings-v1"
  },
  {
    "displayName": "webhook-v1",
    "value": "webhook-v1"
  }
];
