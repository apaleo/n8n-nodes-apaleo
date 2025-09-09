import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import { allProperties } from './descriptions';

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
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
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
			},
		},
		properties: allProperties,
	};
}
