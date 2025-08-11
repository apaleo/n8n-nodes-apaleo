import type {
	IHookFunctions,
	IWebhookFunctions,
	IDataObject,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	IHttpRequestOptions,
	IHttpRequestMethods,
} from 'n8n-workflow';
import { NodeConnectionType, NodeOperationError } from 'n8n-workflow';

import { ACCOUNT_LEVEL_EVENTS } from '../../constants';

/**
 * Make an API request to Apaleo
 */
async function apaleoApiRequest(
	this: IHookFunctions | IWebhookFunctions,
	method: IHttpRequestMethods,
	resource: string,
	body: any = {},
	qs: IDataObject = {},
	uri?: string,
): Promise<any> {
	const options: IHttpRequestOptions = {
		method,
		body,
		qs,
		url: uri || `https://webhook.apaleo-staging.com/v1${resource}`,
		json: true,
	};

	try {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'apaleoOAuth2Api', options);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), error as Error);
	}
}

export class ApaleoTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apaleo Official Trigger',
		name: 'apaleoTrigger',
		icon: 'file:apaleo.svg',
		group: ['trigger'],
		version: 1,
		description: 'Apaleo Official Trigger Node',
		defaults: {
			name: 'Apaleo Official Trigger',
		},
		eventTriggerDescription: 'Waiting for Apaleo webhook events',
		activationMessage: 'Your Apaleo webhook is now active and will trigger on the selected events.',
		inputs: [],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'apaleoOAuth2Api',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		triggerPanel: {
			header: 'Apaleo Webhook Events',
			executionsHelp: {
				inactive:
					"Webhooks have two modes: test and production. <br /><br /><b>Use test mode while you build your workflow</b>. Click the 'listen' button, then trigger events in Apaleo. The executions will show up in the editor.<br /><br /><b>Use production mode to run your workflow automatically</b>. Activate the workflow, then events from Apaleo will trigger executions automatically.",
				active:
					"Webhooks have two modes: test and production. <br /><br /><b>Use test mode while you build your workflow</b>. Click the 'listen' button, then trigger events in Apaleo. The executions will show up in the editor.<br /><br /><b>Use production mode to run your workflow automatically</b>. Since the workflow is activated, events from Apaleo will trigger executions automatically.",
			},
			activationHint:
				"Once you've finished building your workflow, activate it to start receiving Apaleo webhook events automatically.",
		},
		properties: [
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				options: [
					{
						name: 'Account - All Events',
						value: 'account/*',
						description: 'Receive notifications for all account events',
					},
					{
						name: 'Account - Set To Live',
						value: 'account/set-to-live',
						description: 'Receive notifications when a account is set to live',
					},
					{
						name: 'Account - Suspended',
						value: 'account/suspended',
						description: 'Receive notifications when a account is suspended',
					},
					{
						name: 'Block - All Events',
						value: 'block/*',
						description: 'Receive notifications for all block events',
					},
					{
						name: 'Block - Cancelled',
						value: 'block/cancelled',
						description: 'Receive notifications when a block is cancelled',
					},
					{
						name: 'Block - Changed',
						value: 'block/changed',
						description: 'Receive notifications when a block is changed',
					},
					{
						name: 'Block - Confirmed',
						value: 'block/confirmed',
						description: 'Receive notifications when a block is confirmed',
					},
					{
						name: 'Block - Created',
						value: 'block/created',
						description: 'Receive notifications when a block is created',
					},
					{
						name: 'Block - Deleted',
						value: 'block/deleted',
						description: 'Receive notifications when a block is deleted',
					},
					{
						name: 'Block - Released',
						value: 'block/released',
						description: 'Receive notifications when a block is released',
					},
					{
						name: 'Block - Washed',
						value: 'block/washed',
						description: 'Receive notifications when a block is washed',
					},
					{
						name: 'Booking - All Events',
						value: 'booking/*',
						description: 'Receive notifications for all booking events',
					},
					{
						name: 'Booking - Changed',
						value: 'booking/changed',
						description: 'Receive notifications when a booking is changed',
					},
					{
						name: 'Booking - Created',
						value: 'booking/created',
						description: 'Receive notifications when a booking is created',
					},
					{
						name: 'Booking - Deleted',
						value: 'booking/deleted',
						description: 'Receive notifications when a booking is deleted',
					},
					{
						name: 'Citytax - All Events',
						value: 'citytax/*',
						description: 'Receive notifications for all citytax events',
					},
					{
						name: 'Citytax - Changed',
						value: 'citytax/changed',
						description: 'Receive notifications when a citytax is changed',
					},
					{
						name: 'Citytax - Created',
						value: 'citytax/created',
						description: 'Receive notifications when a citytax is created',
					},
					{
						name: 'Citytax - Deleted',
						value: 'citytax/deleted',
						description: 'Receive notifications when a citytax is deleted',
					},
					{
						name: 'Company - All Events',
						value: 'company/*',
						description: 'Receive notifications for all company events',
					},
					{
						name: 'Company - Changed',
						value: 'company/changed',
						description: 'Receive notifications when a company is changed',
					},
					{
						name: 'Company - Created',
						value: 'company/created',
						description: 'Receive notifications when a company is created',
					},
					{
						name: 'Company - Deleted',
						value: 'company/deleted',
						description: 'Receive notifications when a company is deleted',
					},
					{
						name: 'Folio - All Events',
						value: 'folio/*',
						description: 'Receive notifications for all folio events',
					},
					{
						name: 'Folio - Allowance Moved From Folio',
						value: 'folio/allowance-moved-from-folio',
						description: 'Receive notifications when a folio is allowance moved from folio',
					},
					{
						name: 'Folio - Allowance Moved To Folio',
						value: 'folio/allowance-moved-to-folio',
						description: 'Receive notifications when a folio is allowance moved to folio',
					},
					{
						name: 'Folio - Allowance Posted',
						value: 'folio/allowance-posted',
						description: 'Receive notifications when a folio is allowance posted',
					},
					{
						name: 'Folio - Balance Changed',
						value: 'folio/balance-changed',
						description: 'Receive notifications when a folio is balance changed',
					},
					{
						name: 'Folio - Charge Moved From Folio',
						value: 'folio/charge-moved-from-folio',
						description: 'Receive notifications when a folio is charge moved from folio',
					},
					{
						name: 'Folio - Charge Moved To Folio',
						value: 'folio/charge-moved-to-folio',
						description: 'Receive notifications when a folio is charge moved to folio',
					},
					{
						name: 'Folio - Charge Posted',
						value: 'folio/charge-posted',
						description: 'Receive notifications when a folio is charge posted',
					},
					{
						name: 'Folio - Charges Changed',
						value: 'folio/charges-changed',
						description: 'Receive notifications when a folio is charges changed',
					},
					{
						name: 'Folio - Closed',
						value: 'folio/closed',
						description: 'Receive notifications when a folio is closed',
					},
					{
						name: 'Folio - Created',
						value: 'folio/created',
						description: 'Receive notifications when a folio is created',
					},
					{
						name: 'Folio - Debitor Changed',
						value: 'folio/debitor-changed',
						description: 'Receive notifications when a folio is debitor changed',
					},
					{
						name: 'Folio - Deleted',
						value: 'folio/deleted',
						description: 'Receive notifications when a folio is deleted',
					},
					{
						name: 'Folio - Deposit Item Added',
						value: 'folio/deposit-item-added',
						description: 'Receive notifications when a folio is deposit item added',
					},
					{
						name: 'Folio - Deposit Item Changed',
						value: 'folio/deposit-item-changed',
						description: 'Receive notifications when a folio is deposit item changed',
					},
					{
						name: 'Folio - Deposit Item Deleted',
						value: 'folio/deposit-item-deleted',
						description: 'Receive notifications when a folio is deposit item deleted',
					},
					{
						name: 'Folio - Payment Added',
						value: 'folio/payment-added',
						description: 'Receive notifications when a folio is payment added',
					},
					{
						name: 'Folio - Payment Canceled',
						value: 'folio/payment-canceled',
						description: 'Receive notifications when a folio is payment canceled',
					},
					{
						name: 'Folio - Payment Failed',
						value: 'folio/payment-failed',
						description: 'Receive notifications when a folio is payment failed',
					},
					{
						name: 'Folio - Payment Moved From Folio',
						value: 'folio/payment-moved-from-folio',
						description: 'Receive notifications when a folio is payment moved from folio',
					},
					{
						name: 'Folio - Payment Moved To Folio',
						value: 'folio/payment-moved-to-folio',
						description: 'Receive notifications when a folio is payment moved to folio',
					},
					{
						name: 'Folio - Payment Posted',
						value: 'folio/payment-posted',
						description: 'Receive notifications when a folio is payment posted',
					},
					{
						name: 'Folio - Refund Added',
						value: 'folio/refund-added',
						description: 'Receive notifications when a folio is refund added',
					},
					{
						name: 'Folio - Refund Failed',
						value: 'folio/refund-failed',
						description: 'Receive notifications when a folio is refund failed',
					},
					{
						name: 'Folio - Refund Moved From Folio',
						value: 'folio/refund-moved-from-folio',
						description: 'Receive notifications when a folio is refund moved from folio',
					},
					{
						name: 'Folio - Refund Moved To Folio',
						value: 'folio/refund-moved-to-folio',
						description: 'Receive notifications when a folio is refund moved to folio',
					},
					{
						name: 'Folio - Refund Posted',
						value: 'folio/refund-posted',
						description: 'Receive notifications when a folio is refund posted',
					},
					{
						name: 'Folio - Reopened',
						value: 'folio/reopened',
						description: 'Receive notifications when a folio is reopened',
					},
					{
						name: 'Folio - Transitory Charge Moved From Folio',
						value: 'folio/transitory-charge-moved-from-folio',
						description: 'Receive notifications when a folio is transitory charge moved from folio',
					},
					{
						name: 'Folio - Transitory Charge Moved To Folio',
						value: 'folio/transitory-charge-moved-to-folio',
						description: 'Receive notifications when a folio is transitory charge moved to folio',
					},
					{
						name: 'Folio - Transitory Charge Posted',
						value: 'folio/transitory-charge-posted',
						description: 'Receive notifications when a folio is transitory charge posted',
					},
					{
						name: 'Group - All Events',
						value: 'group/*',
						description: 'Receive notifications for all group events',
					},
					{
						name: 'Group - Changed',
						value: 'group/changed',
						description: 'Receive notifications when a group is changed',
					},
					{
						name: 'Group - Created',
						value: 'group/created',
						description: 'Receive notifications when a group is created',
					},
					{
						name: 'Group - Deleted',
						value: 'group/deleted',
						description: 'Receive notifications when a group is deleted',
					},
					{
						name: 'Invoice - All Events',
						value: 'invoice/*',
						description: 'Receive notifications for all invoice events',
					},
					{
						name: 'Invoice - Canceled',
						value: 'invoice/canceled',
						description: 'Receive notifications when a invoice is canceled',
					},
					{
						name: 'Invoice - Created',
						value: 'invoice/created',
						description: 'Receive notifications when a invoice is created',
					},
					{
						name: 'Invoice - Paid',
						value: 'invoice/paid',
						description: 'Receive notifications when a invoice is paid',
					},
					{
						name: 'Invoice - Rendered',
						value: 'invoice/rendered',
						description: 'Receive notifications when a invoice is rendered',
					},
					{
						name: 'Invoice - Signed',
						value: 'invoice/signed',
						description: 'Receive notifications when a invoice is signed',
					},
					{
						name: 'Invoice - Written Off',
						value: 'invoice/written-off',
						description: 'Receive notifications when a invoice is written off',
					},
					{
						name: 'Maintenance - All Events',
						value: 'maintenance/*',
						description: 'Receive notifications for all maintenance events',
					},
					{
						name: 'Maintenance - Changed',
						value: 'maintenance/changed',
						description: 'Receive notifications when a maintenance is changed',
					},
					{
						name: 'Maintenance - Created',
						value: 'maintenance/created',
						description: 'Receive notifications when a maintenance is created',
					},
					{
						name: 'Maintenance - Deleted',
						value: 'maintenance/deleted',
						description: 'Receive notifications when a maintenance is deleted',
					},
					{
						name: 'Nightaudit - All Events',
						value: 'nightaudit/*',
						description: 'Receive notifications for all nightaudit events',
					},
					{
						name: 'Nightaudit - Failed',
						value: 'nightaudit/failed',
						description: 'Receive notifications when a nightaudit is failed',
					},
					{
						name: 'Nightaudit - Started',
						value: 'nightaudit/started',
						description: 'Receive notifications when a nightaudit is started',
					},
					{
						name: 'Nightaudit - Succeeded',
						value: 'nightaudit/succeeded',
						description: 'Receive notifications when a nightaudit is succeeded',
					},
					{
						name: 'Paymenttransaction - All Events',
						value: 'paymenttransaction/*',
						description: 'Receive notifications for all paymenttransaction events',
					},
					{
						name: 'Paymenttransaction - Authorization Adjusted',
						value: 'paymenttransaction/authorization-adjusted',
						description:
							'Receive notifications when a paymenttransaction is authorization adjusted',
					},
					{
						name: 'Paymenttransaction - Authorized',
						value: 'paymenttransaction/authorized',
						description: 'Receive notifications when a paymenttransaction is authorized',
					},
					{
						name: 'Paymenttransaction - Cancellation Denied',
						value: 'paymenttransaction/cancellation-denied',
						description: 'Receive notifications when a paymenttransaction is cancellation denied',
					},
					{
						name: 'Paymenttransaction - Cancelled',
						value: 'paymenttransaction/cancelled',
						description: 'Receive notifications when a paymenttransaction is cancelled',
					},
					{
						name: 'Paymenttransaction - Capture Denied',
						value: 'paymenttransaction/capture-denied',
						description: 'Receive notifications when a paymenttransaction is capture denied',
					},
					{
						name: 'Paymenttransaction - Chargeback Reversed',
						value: 'paymenttransaction/chargeback-reversed',
						description: 'Receive notifications when a paymenttransaction is chargeback reversed',
					},
					{
						name: 'Paymenttransaction - Chargeback Reversed On Merchant Account',
						value: 'paymenttransaction/chargeback-reversed-on-merchant-account',
						description:
							'Receive notifications when a paymenttransaction is chargeback reversed on merchant account',
					},
					{
						name: 'Paymenttransaction - Charged Back',
						value: 'paymenttransaction/charged-back',
						description: 'Receive notifications when a paymenttransaction is charged back',
					},
					{
						name: 'Paymenttransaction - Charged Back From Merchant Account',
						value: 'paymenttransaction/charged-back-from-merchant-account',
						description:
							'Receive notifications when a paymenttransaction is charged back from merchant account',
					},
					{
						name: 'Paymenttransaction - Dispute Information Requested',
						value: 'paymenttransaction/dispute-information-requested',
						description:
							'Receive notifications when a paymenttransaction is dispute information requested',
					},
					{
						name: 'Paymenttransaction - Dispute Information Supplied',
						value: 'paymenttransaction/dispute-information-supplied',
						description:
							'Receive notifications when a paymenttransaction is dispute information supplied',
					},
					{
						name: 'Paymenttransaction - Dispute Lost',
						value: 'paymenttransaction/dispute-lost',
						description: 'Receive notifications when a paymenttransaction is dispute lost',
					},
					{
						name: 'Paymenttransaction - Dispute Opened',
						value: 'paymenttransaction/dispute-opened',
						description: 'Receive notifications when a paymenttransaction is dispute opened',
					},
					{
						name: 'Paymenttransaction - Dispute Won',
						value: 'paymenttransaction/dispute-won',
						description: 'Receive notifications when a paymenttransaction is dispute won',
					},
					{
						name: 'Paymenttransaction - Fraud Detected',
						value: 'paymenttransaction/fraud-detected',
						description: 'Receive notifications when a paymenttransaction is fraud detected',
					},
					{
						name: 'Paymenttransaction - Refund Denied',
						value: 'paymenttransaction/refund-denied',
						description: 'Receive notifications when a paymenttransaction is refund denied',
					},
					{
						name: 'Paymenttransaction - Refund Reversed',
						value: 'paymenttransaction/refund-reversed',
						description: 'Receive notifications when a paymenttransaction is refund reversed',
					},
					{
						name: 'Paymenttransaction - Refunded',
						value: 'paymenttransaction/refunded',
						description: 'Receive notifications when a paymenttransaction is refunded',
					},
					{
						name: 'Paymenttransaction - Refunded From Merchant Account',
						value: 'paymenttransaction/refunded-from-merchant-account',
						description:
							'Receive notifications when a paymenttransaction is refunded from merchant account',
					},
					{
						name: 'Paymenttransaction - Refused',
						value: 'paymenttransaction/refused',
						description: 'Receive notifications when a paymenttransaction is refused',
					},
					{
						name: 'Paymenttransaction - Second Time Charged Back',
						value: 'paymenttransaction/second-time-charged-back',
						description:
							'Receive notifications when a paymenttransaction is second time charged back',
					},
					{
						name: 'Paymenttransaction - Second Time Charged Back From Merchant Account',
						value: 'paymenttransaction/second-time-charged-back-from-merchant-account',
						description:
							'Receive notifications when a paymenttransaction is second time charged back from merchant account',
					},
					{
						name: 'Paymenttransaction - Sent For Refund',
						value: 'paymenttransaction/sent-for-refund',
						description: 'Receive notifications when a paymenttransaction is sent for refund',
					},
					{
						name: 'Paymenttransaction - Sent For Refund Reversed',
						value: 'paymenttransaction/sent-for-refund-reversed',
						description:
							'Receive notifications when a paymenttransaction is sent for refund reversed',
					},
					{
						name: 'Paymenttransaction - Sent For Settle',
						value: 'paymenttransaction/sent-for-settle',
						description: 'Receive notifications when a paymenttransaction is sent for settle',
					},
					{
						name: 'Paymenttransaction - Sent For Settle Reversed',
						value: 'paymenttransaction/sent-for-settle-reversed',
						description:
							'Receive notifications when a paymenttransaction is sent for settle reversed',
					},
					{
						name: 'Paymenttransaction - Settled',
						value: 'paymenttransaction/settled',
						description: 'Receive notifications when a paymenttransaction is settled',
					},
					{
						name: 'Paymenttransaction - Settled On Merchant Account',
						value: 'paymenttransaction/settled-on-merchant-account',
						description:
							'Receive notifications when a paymenttransaction is settled on merchant account',
					},
					{
						name: 'Property - All Events',
						value: 'property/*',
						description: 'Receive notifications for all property events',
					},
					{
						name: 'Property - Archived',
						value: 'property/archived',
						description: 'Receive notifications when a property is archived',
					},
					{
						name: 'Property - Changed',
						value: 'property/changed',
						description: 'Receive notifications when a property is changed',
					},
					{
						name: 'Property - Created',
						value: 'property/created',
						description: 'Receive notifications when a property is created',
					},
					{
						name: 'Property - Deleted',
						value: 'property/deleted',
						description: 'Receive notifications when a property is deleted',
					},
					{
						name: 'Property - Set To Live',
						value: 'property/set-to-live',
						description: 'Receive notifications when a property is set to live',
					},
					{
						name: 'Rateplan - All Events',
						value: 'rateplan/*',
						description: 'Receive notifications for all rateplan events',
					},
					{
						name: 'Rateplan - Changed',
						value: 'rateplan/changed',
						description: 'Receive notifications when a rateplan is changed',
					},
					{
						name: 'Rateplan - Created',
						value: 'rateplan/created',
						description: 'Receive notifications when a rateplan is created',
					},
					{
						name: 'Rateplan - Deleted',
						value: 'rateplan/deleted',
						description: 'Receive notifications when a rateplan is deleted',
					},
					{
						name: 'Reservation - All Events',
						value: 'reservation/*',
						description: 'Receive notifications for all reservation events',
					},
					{
						name: 'Reservation - Amended',
						value: 'reservation/amended',
						description: 'Receive notifications when a reservation is amended',
					},
					{
						name: 'Reservation - Canceled',
						value: 'reservation/canceled',
						description: 'Receive notifications when a reservation is canceled',
					},
					{
						name: 'Reservation - Changed',
						value: 'reservation/changed',
						description: 'Receive notifications when a reservation is changed',
					},
					{
						name: 'Reservation - Check In Reverted',
						value: 'reservation/check-in-reverted',
						description: 'Receive notifications when a reservation is check in reverted',
					},
					{
						name: 'Reservation - Checked In',
						value: 'reservation/checked-in',
						description: 'Receive notifications when a reservation is checked in',
					},
					{
						name: 'Reservation - Checked Out',
						value: 'reservation/checked-out',
						description: 'Receive notifications when a reservation is checked out',
					},
					{
						name: 'Reservation - Created',
						value: 'reservation/created',
						description: 'Receive notifications when a reservation is created',
					},
					{
						name: 'Reservation - Deleted',
						value: 'reservation/deleted',
						description: 'Receive notifications when a reservation is deleted',
					},
					{
						name: 'Reservation - Payment Account Removed',
						value: 'reservation/payment-account-removed',
						description: 'Receive notifications when a reservation is payment account removed',
					},
					{
						name: 'Reservation - Payment Account Set',
						value: 'reservation/payment-account-set',
						description: 'Receive notifications when a reservation is payment account set',
					},
					{
						name: 'Reservation - Set To No Show',
						value: 'reservation/set-to-no-show',
						description: 'Receive notifications when a reservation is set to no show',
					},
					{
						name: 'Reservation - Unit Assigned',
						value: 'reservation/unit-assigned',
						description: 'Receive notifications when a reservation is unit assigned',
					},
					{
						name: 'Reservation - Unit Unassigned',
						value: 'reservation/unit-unassigned',
						description: 'Receive notifications when a reservation is unit unassigned',
					},
					{
						name: 'Service - All Events',
						value: 'service/*',
						description: 'Receive notifications for all service events',
					},
					{
						name: 'Service - Changed',
						value: 'service/changed',
						description: 'Receive notifications when a service is changed',
					},
					{
						name: 'Service - Created',
						value: 'service/created',
						description: 'Receive notifications when a service is created',
					},
					{
						name: 'Service - Deleted',
						value: 'service/deleted',
						description: 'Receive notifications when a service is deleted',
					},
					{
						name: 'Unit - All Events',
						value: 'unit/*',
						description: 'Receive notifications for all unit events',
					},
					{
						name: 'Unit - Changed',
						value: 'unit/changed',
						description: 'Receive notifications when a unit is changed',
					},
					{
						name: 'Unit - Created',
						value: 'unit/created',
						description: 'Receive notifications when a unit is created',
					},
					{
						name: 'Unit - Deleted',
						value: 'unit/deleted',
						description: 'Receive notifications when a unit is deleted',
					},
					{
						name: 'Unitattributedefinition - All Events',
						value: 'unitattributedefinition/*',
						description: 'Receive notifications for all unitattributedefinition events',
					},
					{
						name: 'Unitattributedefinition - Changed',
						value: 'unitattributedefinition/changed',
						description: 'Receive notifications when a unitattributedefinition is changed',
					},
					{
						name: 'Unitattributedefinition - Created',
						value: 'unitattributedefinition/created',
						description: 'Receive notifications when a unitattributedefinition is created',
					},
					{
						name: 'Unitattributedefinition - Deleted',
						value: 'unitattributedefinition/deleted',
						description: 'Receive notifications when a unitattributedefinition is deleted',
					},
					{
						name: 'Unitgroup - All Events',
						value: 'unitgroup/*',
						description: 'Receive notifications for all unitgroup events',
					},
					{
						name: 'Unitgroup - Changed',
						value: 'unitgroup/changed',
						description: 'Receive notifications when a unitgroup is changed',
					},
					{
						name: 'Unitgroup - Created',
						value: 'unitgroup/created',
						description: 'Receive notifications when a unitgroup is created',
					},
					{
						name: 'Unitgroup - Deleted',
						value: 'unitgroup/deleted',
						description: 'Receive notifications when a unitgroup is deleted',
					},
				],
				default: [],
				required: true,
				description: 'Select the Apaleo events you want to trigger on',
			},
			{
				displayName: 'Property IDs',
				name: 'propertyIds',
				type: 'string',
				placeholder: 'e.g., PROP1,PROP2',
				description:
					'Comma-separated list of property IDs to filter events. Leave empty to receive events for all properties.',
				default: '',
			},
			{
				displayName: 'Options',
				name: 'options',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {},
				},
				default: {},
				options: [
					{
						displayName: 'Ignore Account Level Events Property Filter',
						name: 'ignoreAccountLevelFilter',
						type: 'boolean',
						default: true,
						description:
							'Whether to ignore property filters for account-level events (recommended). Account-level events are not property-specific.',
					},
				],
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const webhookData = this.getWorkflowStaticData('node');
				const events = this.getNodeParameter('events') as string[];
				const propertyIds = this.getNodeParameter('propertyIds') as string;

				const propertyIdsList = propertyIds ? propertyIds.split(',').map((id) => id.trim()) : [];

				try {
					const subscriptions = await apaleoApiRequest.call(this, 'GET', '/subscriptions');

					for (const subscription of subscriptions) {
						if (subscription.endpointUrl === webhookUrl) {
							// Check if events match
							const subscriptionEvents = subscription.events || [];
							const eventsMatch =
								events.length === subscriptionEvents.length &&
								events.every((event) => subscriptionEvents.includes(event));

							// Check if property IDs match
							const subscriptionPropertyIds = subscription.propertyIds || [];
							const propertyIdsMatch =
								propertyIdsList.length === subscriptionPropertyIds.length &&
								propertyIdsList.every((id) => subscriptionPropertyIds.includes(id));

							if (eventsMatch && propertyIdsMatch) {
								webhookData.webhookId = subscription.id;
								return true;
							}
						}
					}
				} catch (error) {
					return false;
				}

				return false;
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				const webhookUrl = this.getNodeWebhookUrl('default');
				const events = this.getNodeParameter('events') as string[];
				const propertyIds = this.getNodeParameter('propertyIds') as string;
				const options = this.getNodeParameter('options') as IDataObject;

				const propertyIdsList = propertyIds ? propertyIds.split(',').map((id) => id.trim()) : [];

				// Filter out account-level events if property filter is provided and option is enabled
				let filteredEvents = events;
				if (propertyIdsList.length > 0 && options.ignoreAccountLevelFilter) {
					filteredEvents = events.filter((event) => {
						const [topic, eventType] = event.split('/');
						return !ACCOUNT_LEVEL_EVENTS.some(
							(accountEvent) =>
								accountEvent.topic === topic &&
								(accountEvent.event === eventType || event.endsWith('/*')),
						);
					});
				}

				const body: IDataObject = {
					endpointUrl: webhookUrl,
					events: filteredEvents,
				};

				// Only add propertyIds if they are specified
				if (propertyIdsList.length > 0) {
					body.propertyIds = propertyIdsList;
				}

				try {
					const responseData = await apaleoApiRequest.call(this, 'POST', '/subscriptions', body);

					webhookData.webhookId = responseData.id as string;
					return true;
				} catch (error) {
					throw new NodeOperationError(this.getNode(), error as Error);
				}
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');

				if (webhookData.webhookId !== undefined) {
					await apaleoApiRequest.call(this, 'DELETE', `/subscriptions/${webhookData.webhookId}`);

					delete webhookData.webhookId;
				}

				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		try {
			const bodyData = this.getBodyData();
			const headers = this.getHeaderData();
			const query = this.getQueryData();

			// Ensure we have data to work with
			if (!bodyData) {
				return {
					workflowData: [
						this.helpers.returnJsonArray({
							error: 'No webhook data received',
							timestamp: new Date().toISOString(),
						}),
					],
				};
			}

			// Add metadata to the webhook data
			const enrichedData = {
				...bodyData,
				_metadata: {
					timestamp: new Date().toISOString(),
					source: 'apaleo-webhook',
					headers: headers,
					query: query,
				},
			};

			// Return the data in the correct format for n8n
			return {
				workflowData: [this.helpers.returnJsonArray(enrichedData)],
			};
		} catch (error) {
			// Even if there's an error, return a response so the trigger doesn't stop
			return {
				workflowData: [
					this.helpers.returnJsonArray({
						error: 'Error processing webhook',
						errorMessage: error instanceof Error ? error.message : 'Unknown error',
						timestamp: new Date().toISOString(),
					}),
				],
			};
		}
	}
}
