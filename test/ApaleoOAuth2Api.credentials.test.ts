// Dev-only test (not shipped in dist); node:test is fine here, the cloud import ban targets runtime code.
/* eslint-disable @n8n/community-nodes/no-restricted-imports */
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { ApaleoOAuth2Api } from '../credentials/ApaleoOAuth2Api.credentials.ts';

function property(credential: ApaleoOAuth2Api, name: string) {
	return credential.properties.find((entry) => entry.name === name);
}

describe('ApaleoOAuth2Api', () => {
	const credential = new ApaleoOAuth2Api();

	it('extends n8n OAuth2 client credentials so a 401 refreshes the token', () => {
		assert.deepEqual(credential.extends, ['oAuth2Api']);
		assert.equal(credential.preAuthentication, undefined);
		assert.equal(credential.authenticate, undefined);

		assert.equal(property(credential, 'grantType')?.type, 'hidden');
		assert.equal(property(credential, 'grantType')?.default, 'clientCredentials');
		assert.equal(
			property(credential, 'accessTokenUrl')?.default,
			'https://identity.apaleo.com/connect/token',
		);
		assert.equal(property(credential, 'authentication')?.default, 'header');
		assert.equal(property(credential, 'sessionToken'), undefined);
	});
});
