export { groupOptions, groups } from './groups';
export { resourcesByGroup, resourceOptions } from './resources';
export { operationsByResource, operationOptions } from './operations';
export { parameterFields } from './parameters';

import { INodeProperties } from 'n8n-workflow';
import { groupOptions } from './groups';
import { resourceOptions } from './resources';
import { operationOptions } from './operations';
import { parameterFields } from './parameters';

export const allProperties: INodeProperties[] = [
	groupOptions,
	...resourceOptions,
	...operationOptions,
	...parameterFields,
];
