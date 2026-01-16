import { INodeType, INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';

import { allProperties } from './descriptions';
import { version } from '../../package.json';

export class Apaleo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apaleo Official',
		name: 'apaleo',
		icon: 'file:apaleo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: `Interact with Apaleo API`,
		defaults: {
			name: 'Apaleo Official',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'apaleoOAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.apaleo.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'X-Source': 'n8n-apaleo',
				'X-Source-Version': version, 
			},
		},
		properties: allProperties,
	};
}
