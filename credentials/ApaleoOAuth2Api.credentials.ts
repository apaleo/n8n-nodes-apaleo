import {
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	IHttpRequestHelper,
	IHttpRequestOptions,
	INodeProperties,
	IAuthenticateGeneric,
} from 'n8n-workflow';
import { Buffer } from 'buffer';

export class ApaleoOAuth2Api implements ICredentialType {
	name = 'apaleoOAuth2Api';
	displayName = 'Apaleo OAuth2 API';
	documentationUrl = 'https://docs.apaleo.com/';

	properties: INodeProperties[] = [
		{
			displayName: 'Session Token',
			name: 'sessionToken',
			type: 'hidden',
			typeOptions: {
				expirable: true,
			},
			default: '',
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
			default: '',
			required: true,
			description: 'Client Secret for the Apaleo API (Custom App)',
		},
	];

	async preAuthentication(this: IHttpRequestHelper, credentials: ICredentialDataDecryptedObject) {
		const url = `https://identity.apaleo.com/connect/token`;
		const basicToken = Buffer.from(credentials.clientId + ':' + credentials.clientSecret).toString(
			'base64',
		);

		const requestOptions: IHttpRequestOptions = {
			method: 'POST',
			url: url,
			body: {
				grant_type: 'client_credentials',
			},
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + basicToken,
			},
		};

		const { access_token, expires_in } = (await this.helpers.httpRequest(requestOptions)) as {
			access_token: string;
			expires_in: number;
		};

		return {
			sessionToken: access_token,
			expiresIn: expires_in,
		};
	}

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.sessionToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			url: 'https://api.apaleo.com/account/v1/accounts/current',
			headers: {
				Authorization: '=Bearer {{$credentials.sessionToken}}',
			},
		},
	};
}
