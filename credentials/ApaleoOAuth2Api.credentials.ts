import type { ICredentialType, INodeProperties } from 'n8n-workflow';
export class ApaleoOAuth2Api implements ICredentialType {
	name = 'apaleoOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Apaleo OAuth2 API';

	documentationUrl = 'https://apaleo.dev';

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://identity.apaleo.com/connect/authorize',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://identity.apaleo.com/connect/token',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'string',
			default:
				'offline_access account.manage account.suspend accounting.read authorizations.manage authorizations.read availability.manage availability.read charges.delete companies.manage companies.read depositItems.manage deposits.manage deposits.read folios.manage folios.payment-with-charges folios.read identity:account-users.manage identity:account-users.read invoices.manage invoices.read logs.read maintenances.manage maintenances.read offer-index.read offers.read openid operations.change-room-state operations.trigger-night-audit payment-accounts.manage payment-accounts.read payments.manage payments.read prepayment-notices.read profile rateplans.read-corporate rateplans.read-negotiated rates.manage rates.read reports.read reservations.force-manage reservations.manage reservations.read routings.create routings.manage routings.read servicegroups.create servicegroups.manage servicegroups.read setup.manage setup.read transactional-data.delete',
		},
	];
}
