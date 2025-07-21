import { INodeProperties } from 'n8n-workflow';

export const resourcesByGroup = {
  "account-v1": [
    {
      "displayName": "Account",
      "value": "account"
    },
    {
      "displayName": "AccountActions",
      "value": "accountactions"
    }
  ],
  "availability-v1": [
    {
      "displayName": "Availability",
      "value": "availability"
    },
    {
      "displayName": "ReservationAvailability",
      "value": "reservationavailability"
    }
  ],
  "booking-v1": [
    {
      "displayName": "Block",
      "value": "block"
    },
    {
      "displayName": "BlockActions",
      "value": "blockactions"
    },
    {
      "displayName": "Booking",
      "value": "booking"
    },
    {
      "displayName": "Group",
      "value": "group"
    },
    {
      "displayName": "Offer",
      "value": "offer"
    },
    {
      "displayName": "Reservation",
      "value": "reservation"
    },
    {
      "displayName": "ReservationActions",
      "value": "reservationactions"
    },
    {
      "displayName": "Types",
      "value": "types"
    }
  ],
  "finance-v1": [
    {
      "displayName": "Folio",
      "value": "folio"
    },
    {
      "displayName": "FolioActions",
      "value": "folioactions"
    },
    {
      "displayName": "FolioPayments",
      "value": "foliopayments"
    },
    {
      "displayName": "Invoice",
      "value": "invoice"
    },
    {
      "displayName": "InvoiceAction",
      "value": "invoiceaction"
    },
    {
      "displayName": "SubLedger",
      "value": "subledger"
    },
    {
      "displayName": "Types",
      "value": "types"
    }
  ],
  "integration-v1": [
    {
      "displayName": "UiIntegrations",
      "value": "uiintegrations"
    }
  ],
  "inventory-v1": [
    {
      "displayName": "Property",
      "value": "property"
    },
    {
      "displayName": "PropertyActions",
      "value": "propertyactions"
    },
    {
      "displayName": "Types",
      "value": "types"
    },
    {
      "displayName": "Unit",
      "value": "unit"
    },
    {
      "displayName": "UnitAttribute",
      "value": "unitattribute"
    },
    {
      "displayName": "UnitGroup",
      "value": "unitgroup"
    }
  ],
  "logs-v1": [
    {
      "displayName": "BookingLogs",
      "value": "bookinglogs"
    },
    {
      "displayName": "FinanceLogs",
      "value": "financelogs"
    }
  ],
  "operations-v1": [
    {
      "displayName": "Maintenance",
      "value": "maintenance"
    },
    {
      "displayName": "Operations",
      "value": "operations"
    }
  ],
  "rateplan-v1": [
    {
      "displayName": "AgeCategory",
      "value": "agecategory"
    },
    {
      "displayName": "CancellationPolicy",
      "value": "cancellationpolicy"
    },
    {
      "displayName": "Company",
      "value": "company"
    },
    {
      "displayName": "CorporateCodes",
      "value": "corporatecodes"
    },
    {
      "displayName": "NoShowPolicy",
      "value": "noshowpolicy"
    },
    {
      "displayName": "PromoCodes",
      "value": "promocodes"
    },
    {
      "displayName": "Rate",
      "value": "rate"
    },
    {
      "displayName": "RatePlan",
      "value": "rateplan"
    },
    {
      "displayName": "Service",
      "value": "service"
    }
  ],
  "reports-v1": [
    {
      "displayName": "Reports",
      "value": "reports"
    }
  ],
  "settings-v1": [
    {
      "displayName": "CapturePolicies",
      "value": "capturepolicies"
    },
    {
      "displayName": "CityTax",
      "value": "citytax"
    },
    {
      "displayName": "CustomSubAccounts",
      "value": "customsubaccounts"
    },
    {
      "displayName": "FeatureSettings",
      "value": "featuresettings"
    },
    {
      "displayName": "InvoiceAddress",
      "value": "invoiceaddress"
    },
    {
      "displayName": "Languages",
      "value": "languages"
    },
    {
      "displayName": "MarketSegment",
      "value": "marketsegment"
    },
    {
      "displayName": "PropertySettings",
      "value": "propertysettings"
    },
    {
      "displayName": "TimeSliceDefinitions",
      "value": "timeslicedefinitions"
    }
  ],
  "webhook-v1": [
    {
      "displayName": "HealthCheck",
      "value": "healthcheck"
    },
    {
      "displayName": "Subscriptions",
      "value": "subscriptions"
    }
  ]
};

export const resourceOptions: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				group: ['account-v1'],
			},
		},
		options: [
			{
				name: 'Account',
				value: 'account',
			},
			{
				name: 'AccountAction',
				value: 'accountactions',
			}
		],
		default: 'account',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				group: ['availability-v1'],
			},
		},
		options: [
			{
				name: 'Availability',
				value: 'availability',
			},
			{
				name: 'ReservationAvailability',
				value: 'reservationavailability',
			}
		],
		default: 'availability',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				group: ['booking-v1'],
			},
		},
		options: [
			{
				name: 'Block',
				value: 'block',
			},
			{
				name: 'BlockAction',
				value: 'blockactions',
			},
			{
				name: 'Booking',
				value: 'booking',
			},
			{
				name: 'Group',
				value: 'group',
			},
			{
				name: 'Offer',
				value: 'offer',
			},
			{
				name: 'Reservation',
				value: 'reservation',
			},
			{
				name: 'ReservationAction',
				value: 'reservationactions',
			},
			{
				name: 'Type',
				value: 'types',
			}
		],
		default: 'block',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				group: ['finance-v1'],
			},
		},
		options: [
			{
				name: 'Folio',
				value: 'folio',
			},
			{
				name: 'FolioAction',
				value: 'folioactions',
			},
			{
				name: 'FolioPayment',
				value: 'foliopayments',
			},
			{
				name: 'Invoice',
				value: 'invoice',
			},
			{
				name: 'InvoiceAction',
				value: 'invoiceaction',
			},
			{
				name: 'SubLedger',
				value: 'subledger',
			},
			{
				name: 'Type',
				value: 'types',
			}
		],
		default: 'folio',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				group: ['integration-v1'],
			},
		},
		options: [
			{
				name: 'UiIntegration',
				value: 'uiintegrations',
			}
		],
		default: 'uiintegrations',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				group: ['inventory-v1'],
			},
		},
		options: [
			{
				name: 'Property',
				value: 'property',
			},
			{
				name: 'PropertyAction',
				value: 'propertyactions',
			},
			{
				name: 'Type',
				value: 'types',
			},
			{
				name: 'Unit',
				value: 'unit',
			},
			{
				name: 'UnitAttribute',
				value: 'unitattribute',
			},
			{
				name: 'UnitGroup',
				value: 'unitgroup',
			}
		],
		default: 'property',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				group: ['logs-v1'],
			},
		},
		options: [
			{
				name: 'BookingLog',
				value: 'bookinglogs',
			},
			{
				name: 'FinanceLog',
				value: 'financelogs',
			}
		],
		default: 'bookinglogs',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				group: ['operations-v1'],
			},
		},
		options: [
			{
				name: 'Maintenance',
				value: 'maintenance',
			},
			{
				name: 'Operation',
				value: 'operations',
			}
		],
		default: 'maintenance',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				group: ['rateplan-v1'],
			},
		},
		options: [
			{
				name: 'AgeCategory',
				value: 'agecategory',
			},
			{
				name: 'CancellationPolicy',
				value: 'cancellationpolicy',
			},
			{
				name: 'Company',
				value: 'company',
			},
			{
				name: 'CorporateCode',
				value: 'corporatecodes',
			},
			{
				name: 'NoShowPolicy',
				value: 'noshowpolicy',
			},
			{
				name: 'PromoCode',
				value: 'promocodes',
			},
			{
				name: 'Rate',
				value: 'rate',
			},
			{
				name: 'RatePlan',
				value: 'rateplan',
			},
			{
				name: 'Service',
				value: 'service',
			}
		],
		default: 'agecategory',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				group: ['reports-v1'],
			},
		},
		options: [
			{
				name: 'Report',
				value: 'reports',
			}
		],
		default: 'reports',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				group: ['settings-v1'],
			},
		},
		options: [
			{
				name: 'CapturePolicy',
				value: 'capturepolicies',
			},
			{
				name: 'CityTax',
				value: 'citytax',
			},
			{
				name: 'CustomSubAccount',
				value: 'customsubaccounts',
			},
			{
				name: 'FeatureSetting',
				value: 'featuresettings',
			},
			{
				name: 'InvoiceAddress',
				value: 'invoiceaddress',
			},
			{
				name: 'Language',
				value: 'languages',
			},
			{
				name: 'MarketSegment',
				value: 'marketsegment',
			},
			{
				name: 'PropertySetting',
				value: 'propertysettings',
			},
			{
				name: 'TimeSliceDefinition',
				value: 'timeslicedefinitions',
			}
		],
		default: 'capturepolicies',
	},
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				group: ['webhook-v1'],
			},
		},
		options: [
			{
				name: 'HealthCheck',
				value: 'healthcheck',
			},
			{
				name: 'Subscription',
				value: 'subscriptions',
			}
		],
		default: 'healthcheck',
	}
];
