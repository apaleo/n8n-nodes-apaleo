import type { ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

// n8n only retries a 401 from a paginated HTTP Request when the credential
// extends oAuth2Api. A cached session token never reaches that path.
export class ApaleoOAuth2Api implements ICredentialType {
	name = 'apaleoOAuth2Api';
	extends = ['oAuth2Api'];
	displayName = 'Apaleo OAuth2 API';
	documentationUrl = 'https://docs.apaleo.com/';

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'clientCredentials',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://identity.apaleo.com/connect/authorize',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://identity.apaleo.com/connect/token',
			required: true,
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
			description: 'Client ID for the Apaleo API (Custom App)',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: {
				password: true,
				hideValue: true,
			},
			default: '',
			required: true,
			description: 'Client Secret for the Apaleo API (Custom App)',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'header',
		},
	];

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.apaleo.com',
			url: '/account/v1/accounts/current',
		},
	};
}
