import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class ApaleoOAuth2Api implements ICredentialType {
	name = 'apaleoOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Apaleo OAuth2 API';

	documentationUrl =
		'https://apaleo.dev/guides/oauth-connection/simple-client.html#example-curl-request';

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
			displayName: 'Enabled Scopes',
			name: 'enabledScopes',
			type: 'string',
			required: true,
			default: '',
			placeholder: 'openid offline_access',
			description: 'Space-separated list of scopes to request.',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
			description:
				'For some services additional query parameters have to be set which can be defined here',
			placeholder: '',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '={{ $self.enabledScopes }}',
		},
	];
}
