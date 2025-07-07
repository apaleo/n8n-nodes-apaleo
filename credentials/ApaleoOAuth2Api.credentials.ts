import {
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	IHttpRequestHelper,
	IHttpRequestOptions,
	INodeProperties,
} from 'n8n-workflow';

export class ApaleoOAuth2Api implements ICredentialType {
	name = 'apaleoOAuth2Api';
	displayName = 'Apaleo OAuth2 API';
	documentationUrl = 'https://docs.apaleo.com/';

	properties: INodeProperties[] = [
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			default: '',
			required: true,
			typeOptions: {
				password: true,
			},
		},
		{
			displayName: 'API Base URL',
			name: 'apiBaseUrl',
			type: 'hidden',
			default: 'https://api.apaleo-staging.com',
			required: true,
		},
		{
			displayName: 'Auth URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://identity.apaleo-staging.com/connect/token',
			required: true,
		},
		{
			displayName: 'AccessToken',
			name: 'accessToken',
			type: 'hidden',
			default: '',
			typeOptions: {
				expirable: true,
			},
		},
	];

	async preAuthentication(this: IHttpRequestHelper, credentials: ICredentialDataDecryptedObject) {
		const url = credentials.authUrl as string;
		const clientId = credentials.clientId as string;
		const clientSecret = credentials.clientSecret as string;

		// Create Base64 encoded Basic token from clientId and clientSecret
		const basicToken = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

		const res = (await this.helpers.httpRequest({
			method: 'POST',
			url,
			body: {
				grant_type: 'client_credentials',
			},
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${basicToken}`,
			},
		})) as { access_token: string; expires_in: number };

		return {
			accessToken: res.access_token,
			expiresIn: res.expires_in,
		};
	}

	async authenticate(
		credentials: ICredentialDataDecryptedObject,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		requestOptions.headers = {
			...(requestOptions.headers || {}),
			Authorization: 'Bearer ' + credentials.accessToken,
			'Content-Type': 'application/json',
		};
		return requestOptions;
	}

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.apiBaseUrl}}',
			url: '/logs/v1/booking/reservation',
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};
}
