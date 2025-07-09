import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IHttpRequestOptions,
	IDataObject,
	NodeOperationError,
	NodeConnectionType,
} from 'n8n-workflow';

import { allProperties } from './descriptions';

export class Apaleo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apaleo',
		name: 'apaleo',
		icon: 'file:apaleo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: `Apaleo API documentation`, // Fixed here
		defaults: {
			name: 'Apaleo',
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

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		// Cast to string as getNodeParameter can return other types (e.g., boolean, number)
		const operation = this.getNodeParameter('operation', 0) as string;
		const resource = this.getNodeParameter('resource', 0) as string; // Also get resource for display options

		for (let i = 0; i < items.length; i++) {
			try {
				let responseData: any; // Using 'any' for initial response data as its structure varies

				const requestOptions: IHttpRequestOptions = {
					method: 'GET',
					baseURL: 'https://api.apaleo.com',
					url: '',
					json: true,
				};

				// Handle different resources and operations
				switch (`${resource}:${operation}`) {
					case 'account:AccountAccountsCurrentGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/account/v1/accounts/current`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'account:AccountAccountsCurrentPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/account/v1/accounts/current`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'account:AccountAccountsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/account/v1/accounts`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'AccountAccountsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['accountCodes'] !== undefined) {
							qs['accountCodes'] = additionalFields['accountCodes'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'account:AccountAccountsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/account/v1/accounts`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'AccountAccountsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'accountactions:AccountAccount-actionsCurrentSuspendPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/account/v1/account-actions/current/suspend`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'accountactions:AccountAccount-actionsCurrentSet-livePut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/account/v1/account-actions/current/set-live`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'availability:AvailabilityUnitsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/availability/v1/units`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const AvailabilityUnitsGet_propertyId_value = this.getNodeParameter(
							'AvailabilityUnitsGet_propertyId',
							i,
						);
						if (
							AvailabilityUnitsGet_propertyId_value !== undefined &&
							AvailabilityUnitsGet_propertyId_value !== '' &&
							(!Array.isArray(AvailabilityUnitsGet_propertyId_value) ||
								AvailabilityUnitsGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = AvailabilityUnitsGet_propertyId_value;
						}

						const AvailabilityUnitsGet_from_value = this.getNodeParameter(
							'AvailabilityUnitsGet_from',
							i,
						);
						if (
							AvailabilityUnitsGet_from_value !== undefined &&
							AvailabilityUnitsGet_from_value !== '' &&
							(!Array.isArray(AvailabilityUnitsGet_from_value) ||
								AvailabilityUnitsGet_from_value.length > 0)
						) {
							qs['from'] = AvailabilityUnitsGet_from_value;
						}

						const AvailabilityUnitsGet_to_value = this.getNodeParameter(
							'AvailabilityUnitsGet_to',
							i,
						);
						if (
							AvailabilityUnitsGet_to_value !== undefined &&
							AvailabilityUnitsGet_to_value !== '' &&
							(!Array.isArray(AvailabilityUnitsGet_to_value) ||
								AvailabilityUnitsGet_to_value.length > 0)
						) {
							qs['to'] = AvailabilityUnitsGet_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'AvailabilityUnitsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['unitGroupId'] !== undefined) {
							qs['unitGroupId'] = additionalFields['unitGroupId'];
						}

						if (additionalFields['includeOutOfService'] !== undefined) {
							qs['includeOutOfService'] = additionalFields['includeOutOfService'];
						}

						if (additionalFields['unitCondition'] !== undefined) {
							qs['unitCondition'] = additionalFields['unitCondition'];
						}

						if (additionalFields['unitAttributeIds'] !== undefined) {
							qs['unitAttributeIds'] = additionalFields['unitAttributeIds'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'availability:AvailabilityUnit-groupsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/availability/v1/unit-groups`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const AvailabilityUnit_groupsGet_propertyId_value = this.getNodeParameter(
							'AvailabilityUnit_groupsGet_propertyId',
							i,
						);
						if (
							AvailabilityUnit_groupsGet_propertyId_value !== undefined &&
							AvailabilityUnit_groupsGet_propertyId_value !== '' &&
							(!Array.isArray(AvailabilityUnit_groupsGet_propertyId_value) ||
								AvailabilityUnit_groupsGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = AvailabilityUnit_groupsGet_propertyId_value;
						}

						const AvailabilityUnit_groupsGet_from_value = this.getNodeParameter(
							'AvailabilityUnit_groupsGet_from',
							i,
						);
						if (
							AvailabilityUnit_groupsGet_from_value !== undefined &&
							AvailabilityUnit_groupsGet_from_value !== '' &&
							(!Array.isArray(AvailabilityUnit_groupsGet_from_value) ||
								AvailabilityUnit_groupsGet_from_value.length > 0)
						) {
							qs['from'] = AvailabilityUnit_groupsGet_from_value;
						}

						const AvailabilityUnit_groupsGet_to_value = this.getNodeParameter(
							'AvailabilityUnit_groupsGet_to',
							i,
						);
						if (
							AvailabilityUnit_groupsGet_to_value !== undefined &&
							AvailabilityUnit_groupsGet_to_value !== '' &&
							(!Array.isArray(AvailabilityUnit_groupsGet_to_value) ||
								AvailabilityUnit_groupsGet_to_value.length > 0)
						) {
							qs['to'] = AvailabilityUnit_groupsGet_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'AvailabilityUnit_groupsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['timeSliceTemplate'] !== undefined) {
							qs['timeSliceTemplate'] = additionalFields['timeSliceTemplate'];
						}

						if (additionalFields['unitGroupTypes'] !== undefined) {
							qs['unitGroupTypes'] = additionalFields['unitGroupTypes'];
						}

						if (additionalFields['timeSliceDefinitionIds'] !== undefined) {
							qs['timeSliceDefinitionIds'] = additionalFields['timeSliceDefinitionIds'];
						}

						if (additionalFields['unitGroupIds'] !== undefined) {
							qs['unitGroupIds'] = additionalFields['unitGroupIds'];
						}

						if (additionalFields['adults'] !== undefined) {
							qs['adults'] = additionalFields['adults'];
						}

						if (additionalFields['childrenAges'] !== undefined) {
							qs['childrenAges'] = additionalFields['childrenAges'];
						}

						if (additionalFields['onlySellable'] !== undefined) {
							qs['onlySellable'] = additionalFields['onlySellable'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'availability:AvailabilityUnit-groupsByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/availability/v1/unit-groups/${this.getNodeParameter('AvailabilityUnit_groupsByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const AvailabilityUnit_groupsByIdPatch_from_value = this.getNodeParameter(
							'AvailabilityUnit_groupsByIdPatch_from',
							i,
						);
						if (
							AvailabilityUnit_groupsByIdPatch_from_value !== undefined &&
							AvailabilityUnit_groupsByIdPatch_from_value !== '' &&
							(!Array.isArray(AvailabilityUnit_groupsByIdPatch_from_value) ||
								AvailabilityUnit_groupsByIdPatch_from_value.length > 0)
						) {
							qs['from'] = AvailabilityUnit_groupsByIdPatch_from_value;
						}

						const AvailabilityUnit_groupsByIdPatch_to_value = this.getNodeParameter(
							'AvailabilityUnit_groupsByIdPatch_to',
							i,
						);
						if (
							AvailabilityUnit_groupsByIdPatch_to_value !== undefined &&
							AvailabilityUnit_groupsByIdPatch_to_value !== '' &&
							(!Array.isArray(AvailabilityUnit_groupsByIdPatch_to_value) ||
								AvailabilityUnit_groupsByIdPatch_to_value.length > 0)
						) {
							qs['to'] = AvailabilityUnit_groupsByIdPatch_to_value;
						}

						const AvailabilityUnit_groupsByIdPatch_timeSliceTemplate_value = this.getNodeParameter(
							'AvailabilityUnit_groupsByIdPatch_timeSliceTemplate',
							i,
						);
						if (
							AvailabilityUnit_groupsByIdPatch_timeSliceTemplate_value !== undefined &&
							AvailabilityUnit_groupsByIdPatch_timeSliceTemplate_value !== '' &&
							(!Array.isArray(AvailabilityUnit_groupsByIdPatch_timeSliceTemplate_value) ||
								AvailabilityUnit_groupsByIdPatch_timeSliceTemplate_value.length > 0)
						) {
							qs['timeSliceTemplate'] = AvailabilityUnit_groupsByIdPatch_timeSliceTemplate_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'availability:AvailabilityServicesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/availability/v1/services`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const AvailabilityServicesGet_propertyId_value = this.getNodeParameter(
							'AvailabilityServicesGet_propertyId',
							i,
						);
						if (
							AvailabilityServicesGet_propertyId_value !== undefined &&
							AvailabilityServicesGet_propertyId_value !== '' &&
							(!Array.isArray(AvailabilityServicesGet_propertyId_value) ||
								AvailabilityServicesGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = AvailabilityServicesGet_propertyId_value;
						}

						const AvailabilityServicesGet_from_value = this.getNodeParameter(
							'AvailabilityServicesGet_from',
							i,
						);
						if (
							AvailabilityServicesGet_from_value !== undefined &&
							AvailabilityServicesGet_from_value !== '' &&
							(!Array.isArray(AvailabilityServicesGet_from_value) ||
								AvailabilityServicesGet_from_value.length > 0)
						) {
							qs['from'] = AvailabilityServicesGet_from_value;
						}

						const AvailabilityServicesGet_to_value = this.getNodeParameter(
							'AvailabilityServicesGet_to',
							i,
						);
						if (
							AvailabilityServicesGet_to_value !== undefined &&
							AvailabilityServicesGet_to_value !== '' &&
							(!Array.isArray(AvailabilityServicesGet_to_value) ||
								AvailabilityServicesGet_to_value.length > 0)
						) {
							qs['to'] = AvailabilityServicesGet_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'AvailabilityServicesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['timeSliceTemplate'] !== undefined) {
							qs['timeSliceTemplate'] = additionalFields['timeSliceTemplate'];
						}

						if (additionalFields['timeSliceDefinitionIds'] !== undefined) {
							qs['timeSliceDefinitionIds'] = additionalFields['timeSliceDefinitionIds'];
						}

						if (additionalFields['channelCodes'] !== undefined) {
							qs['channelCodes'] = additionalFields['channelCodes'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationavailability:AvailabilityReservationsByIdUnitsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/availability/v1/reservations/${this.getNodeParameter('AvailabilityReservationsByIdUnitsGet_id', i) as string}/units`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'AvailabilityReservationsByIdUnitsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['unitGroupId'] !== undefined) {
							qs['unitGroupId'] = additionalFields['unitGroupId'];
						}

						if (additionalFields['from'] !== undefined) {
							qs['from'] = additionalFields['from'];
						}

						if (additionalFields['to'] !== undefined) {
							qs['to'] = additionalFields['to'];
						}

						if (additionalFields['includeOutOfService'] !== undefined) {
							qs['includeOutOfService'] = additionalFields['includeOutOfService'];
						}

						if (additionalFields['unitCondition'] !== undefined) {
							qs['unitCondition'] = additionalFields['unitCondition'];
						}

						if (additionalFields['unitAttributeIds'] !== undefined) {
							qs['unitAttributeIds'] = additionalFields['unitAttributeIds'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'block:BookingBlocksPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/booking/v1/blocks`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingBlocksPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'block:BookingBlocksGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/blocks`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingBlocksGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['groupId'] !== undefined) {
							qs['groupId'] = additionalFields['groupId'];
						}

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['status'] !== undefined) {
							qs['status'] = additionalFields['status'];
						}

						if (additionalFields['unitGroupIds'] !== undefined) {
							qs['unitGroupIds'] = additionalFields['unitGroupIds'];
						}

						if (additionalFields['ratePlanIds'] !== undefined) {
							qs['ratePlanIds'] = additionalFields['ratePlanIds'];
						}

						if (additionalFields['timeSliceDefinitionIds'] !== undefined) {
							qs['timeSliceDefinitionIds'] = additionalFields['timeSliceDefinitionIds'];
						}

						if (additionalFields['unitGroupTypes'] !== undefined) {
							qs['unitGroupTypes'] = additionalFields['unitGroupTypes'];
						}

						if (additionalFields['timeSliceTemplate'] !== undefined) {
							qs['timeSliceTemplate'] = additionalFields['timeSliceTemplate'];
						}

						if (additionalFields['from'] !== undefined) {
							qs['from'] = additionalFields['from'];
						}

						if (additionalFields['to'] !== undefined) {
							qs['to'] = additionalFields['to'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'block:BookingBlocks$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/blocks/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingBlocks_countGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['groupId'] !== undefined) {
							qs['groupId'] = additionalFields['groupId'];
						}

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['status'] !== undefined) {
							qs['status'] = additionalFields['status'];
						}

						if (additionalFields['unitGroupIds'] !== undefined) {
							qs['unitGroupIds'] = additionalFields['unitGroupIds'];
						}

						if (additionalFields['ratePlanIds'] !== undefined) {
							qs['ratePlanIds'] = additionalFields['ratePlanIds'];
						}

						if (additionalFields['timeSliceDefinitionIds'] !== undefined) {
							qs['timeSliceDefinitionIds'] = additionalFields['timeSliceDefinitionIds'];
						}

						if (additionalFields['unitGroupTypes'] !== undefined) {
							qs['unitGroupTypes'] = additionalFields['unitGroupTypes'];
						}

						if (additionalFields['timeSliceTemplate'] !== undefined) {
							qs['timeSliceTemplate'] = additionalFields['timeSliceTemplate'];
						}

						if (additionalFields['from'] !== undefined) {
							qs['from'] = additionalFields['from'];
						}

						if (additionalFields['to'] !== undefined) {
							qs['to'] = additionalFields['to'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'block:BookingBlocksByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/blocks/${this.getNodeParameter('BookingBlocksByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingBlocksByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'block:BookingBlocksByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/booking/v1/blocks/${this.getNodeParameter('BookingBlocksByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'block:BookingBlocksByIdHead': {
						requestOptions.method = 'HEAD';
						requestOptions.url = `/booking/v1/blocks/${this.getNodeParameter('BookingBlocksByIdHead_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'blockactions:BookingBlock-actionsByIdConfirmPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/block-actions/${this.getNodeParameter('BookingBlock_actionsByIdConfirmPut_id', i) as string}/confirm`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'blockactions:BookingBlock-actionsByIdReleasePut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/block-actions/${this.getNodeParameter('BookingBlock_actionsByIdReleasePut_id', i) as string}/release`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'blockactions:BookingBlock-actionsByIdCancelPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/block-actions/${this.getNodeParameter('BookingBlock_actionsByIdCancelPut_id', i) as string}/cancel`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'blockactions:BookingBlock-actionsByIdWashPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/block-actions/${this.getNodeParameter('BookingBlock_actionsByIdWashPut_id', i) as string}/wash`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'blockactions:BookingBlock-actionsByIdAmendPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/block-actions/${this.getNodeParameter('BookingBlock_actionsByIdAmendPut_id', i) as string}/amend`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'booking:BookingBookingsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/booking/v1/bookings`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingBookingsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'booking:BookingBookingsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/bookings`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingBookingsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['reservationId'] !== undefined) {
							qs['reservationId'] = additionalFields['reservationId'];
						}

						if (additionalFields['groupId'] !== undefined) {
							qs['groupId'] = additionalFields['groupId'];
						}

						if (additionalFields['channelCode'] !== undefined) {
							qs['channelCode'] = additionalFields['channelCode'];
						}

						if (additionalFields['externalCode'] !== undefined) {
							qs['externalCode'] = additionalFields['externalCode'];
						}

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'booking:BookingBookings$forcePost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/booking/v1/bookings/$force`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingBookings_forcePost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'booking:BookingBookingsByIdReservationsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/booking/v1/bookings/${this.getNodeParameter('BookingBookingsByIdReservationsPost_id', i) as string}/reservations`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingBookingsByIdReservationsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'booking:BookingBookingsByIdReservations$forcePost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/booking/v1/bookings/${this.getNodeParameter('BookingBookingsByIdReservations_forcePost_id', i) as string}/reservations/$force`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingBookingsByIdReservations_forcePost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'booking:BookingBookingsByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/bookings/${this.getNodeParameter('BookingBookingsByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingBookingsByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'booking:BookingBookingsByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/booking/v1/bookings/${this.getNodeParameter('BookingBookingsByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'group:BookingGroupsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/booking/v1/groups`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingGroupsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'group:BookingGroupsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/groups`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingGroupsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['from'] !== undefined) {
							qs['from'] = additionalFields['from'];
						}

						if (additionalFields['to'] !== undefined) {
							qs['to'] = additionalFields['to'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'group:BookingGroupsByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/groups/${this.getNodeParameter('BookingGroupsByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingGroupsByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'group:BookingGroupsByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/booking/v1/groups/${this.getNodeParameter('BookingGroupsByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'group:BookingGroupsByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/booking/v1/groups/${this.getNodeParameter('BookingGroupsByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'group:BookingGroupsByIdHead': {
						requestOptions.method = 'HEAD';
						requestOptions.url = `/booking/v1/groups/${this.getNodeParameter('BookingGroupsByIdHead_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'group:BookingGroups$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/groups/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingGroups_countGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['from'] !== undefined) {
							qs['from'] = additionalFields['from'];
						}

						if (additionalFields['to'] !== undefined) {
							qs['to'] = additionalFields['to'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'group:BookingGroupsByIdReservationsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/booking/v1/groups/${this.getNodeParameter('BookingGroupsByIdReservationsPost_id', i) as string}/reservations`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingGroupsByIdReservationsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'offer:BookingOffersGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/offers`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const BookingOffersGet_propertyId_value = this.getNodeParameter(
							'BookingOffersGet_propertyId',
							i,
						);
						if (
							BookingOffersGet_propertyId_value !== undefined &&
							BookingOffersGet_propertyId_value !== '' &&
							(!Array.isArray(BookingOffersGet_propertyId_value) ||
								BookingOffersGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = BookingOffersGet_propertyId_value;
						}

						const BookingOffersGet_arrival_value = this.getNodeParameter(
							'BookingOffersGet_arrival',
							i,
						);
						if (
							BookingOffersGet_arrival_value !== undefined &&
							BookingOffersGet_arrival_value !== '' &&
							(!Array.isArray(BookingOffersGet_arrival_value) ||
								BookingOffersGet_arrival_value.length > 0)
						) {
							qs['arrival'] = BookingOffersGet_arrival_value;
						}

						const BookingOffersGet_departure_value = this.getNodeParameter(
							'BookingOffersGet_departure',
							i,
						);
						if (
							BookingOffersGet_departure_value !== undefined &&
							BookingOffersGet_departure_value !== '' &&
							(!Array.isArray(BookingOffersGet_departure_value) ||
								BookingOffersGet_departure_value.length > 0)
						) {
							qs['departure'] = BookingOffersGet_departure_value;
						}

						const BookingOffersGet_adults_value = this.getNodeParameter(
							'BookingOffersGet_adults',
							i,
						);
						if (
							BookingOffersGet_adults_value !== undefined &&
							BookingOffersGet_adults_value !== '' &&
							(!Array.isArray(BookingOffersGet_adults_value) ||
								BookingOffersGet_adults_value.length > 0)
						) {
							qs['adults'] = BookingOffersGet_adults_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingOffersGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['timeSliceTemplate'] !== undefined) {
							qs['timeSliceTemplate'] = additionalFields['timeSliceTemplate'];
						}

						if (additionalFields['timeSliceDefinitionIds'] !== undefined) {
							qs['timeSliceDefinitionIds'] = additionalFields['timeSliceDefinitionIds'];
						}

						if (additionalFields['unitGroupIds'] !== undefined) {
							qs['unitGroupIds'] = additionalFields['unitGroupIds'];
						}

						if (additionalFields['unitGroupTypes'] !== undefined) {
							qs['unitGroupTypes'] = additionalFields['unitGroupTypes'];
						}

						if (additionalFields['channelCode'] !== undefined) {
							qs['channelCode'] = additionalFields['channelCode'];
						}

						if (additionalFields['promoCode'] !== undefined) {
							qs['promoCode'] = additionalFields['promoCode'];
						}

						if (additionalFields['corporateCode'] !== undefined) {
							qs['corporateCode'] = additionalFields['corporateCode'];
						}

						if (additionalFields['childrenAges'] !== undefined) {
							qs['childrenAges'] = additionalFields['childrenAges'];
						}

						if (additionalFields['includeUnavailable'] !== undefined) {
							qs['includeUnavailable'] = additionalFields['includeUnavailable'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'offer:BookingRate-plan-offersGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/rate-plan-offers`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const BookingRate_plan_offersGet_ratePlanId_value = this.getNodeParameter(
							'BookingRate_plan_offersGet_ratePlanId',
							i,
						);
						if (
							BookingRate_plan_offersGet_ratePlanId_value !== undefined &&
							BookingRate_plan_offersGet_ratePlanId_value !== '' &&
							(!Array.isArray(BookingRate_plan_offersGet_ratePlanId_value) ||
								BookingRate_plan_offersGet_ratePlanId_value.length > 0)
						) {
							qs['ratePlanId'] = BookingRate_plan_offersGet_ratePlanId_value;
						}

						const BookingRate_plan_offersGet_arrival_value = this.getNodeParameter(
							'BookingRate_plan_offersGet_arrival',
							i,
						);
						if (
							BookingRate_plan_offersGet_arrival_value !== undefined &&
							BookingRate_plan_offersGet_arrival_value !== '' &&
							(!Array.isArray(BookingRate_plan_offersGet_arrival_value) ||
								BookingRate_plan_offersGet_arrival_value.length > 0)
						) {
							qs['arrival'] = BookingRate_plan_offersGet_arrival_value;
						}

						const BookingRate_plan_offersGet_departure_value = this.getNodeParameter(
							'BookingRate_plan_offersGet_departure',
							i,
						);
						if (
							BookingRate_plan_offersGet_departure_value !== undefined &&
							BookingRate_plan_offersGet_departure_value !== '' &&
							(!Array.isArray(BookingRate_plan_offersGet_departure_value) ||
								BookingRate_plan_offersGet_departure_value.length > 0)
						) {
							qs['departure'] = BookingRate_plan_offersGet_departure_value;
						}

						const BookingRate_plan_offersGet_adults_value = this.getNodeParameter(
							'BookingRate_plan_offersGet_adults',
							i,
						);
						if (
							BookingRate_plan_offersGet_adults_value !== undefined &&
							BookingRate_plan_offersGet_adults_value !== '' &&
							(!Array.isArray(BookingRate_plan_offersGet_adults_value) ||
								BookingRate_plan_offersGet_adults_value.length > 0)
						) {
							qs['adults'] = BookingRate_plan_offersGet_adults_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingRate_plan_offersGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['channelCode'] !== undefined) {
							qs['channelCode'] = additionalFields['channelCode'];
						}

						if (additionalFields['childrenAges'] !== undefined) {
							qs['childrenAges'] = additionalFields['childrenAges'];
						}

						if (additionalFields['includeUnavailable'] !== undefined) {
							qs['includeUnavailable'] = additionalFields['includeUnavailable'];
						}

						if (additionalFields['overridePrices'] !== undefined) {
							qs['overridePrices'] = additionalFields['overridePrices'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'offer:BookingService-offersGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/service-offers`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const BookingService_offersGet_ratePlanId_value = this.getNodeParameter(
							'BookingService_offersGet_ratePlanId',
							i,
						);
						if (
							BookingService_offersGet_ratePlanId_value !== undefined &&
							BookingService_offersGet_ratePlanId_value !== '' &&
							(!Array.isArray(BookingService_offersGet_ratePlanId_value) ||
								BookingService_offersGet_ratePlanId_value.length > 0)
						) {
							qs['ratePlanId'] = BookingService_offersGet_ratePlanId_value;
						}

						const BookingService_offersGet_arrival_value = this.getNodeParameter(
							'BookingService_offersGet_arrival',
							i,
						);
						if (
							BookingService_offersGet_arrival_value !== undefined &&
							BookingService_offersGet_arrival_value !== '' &&
							(!Array.isArray(BookingService_offersGet_arrival_value) ||
								BookingService_offersGet_arrival_value.length > 0)
						) {
							qs['arrival'] = BookingService_offersGet_arrival_value;
						}

						const BookingService_offersGet_departure_value = this.getNodeParameter(
							'BookingService_offersGet_departure',
							i,
						);
						if (
							BookingService_offersGet_departure_value !== undefined &&
							BookingService_offersGet_departure_value !== '' &&
							(!Array.isArray(BookingService_offersGet_departure_value) ||
								BookingService_offersGet_departure_value.length > 0)
						) {
							qs['departure'] = BookingService_offersGet_departure_value;
						}

						const BookingService_offersGet_adults_value = this.getNodeParameter(
							'BookingService_offersGet_adults',
							i,
						);
						if (
							BookingService_offersGet_adults_value !== undefined &&
							BookingService_offersGet_adults_value !== '' &&
							(!Array.isArray(BookingService_offersGet_adults_value) ||
								BookingService_offersGet_adults_value.length > 0)
						) {
							qs['adults'] = BookingService_offersGet_adults_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingService_offersGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['channelCode'] !== undefined) {
							qs['channelCode'] = additionalFields['channelCode'];
						}

						if (additionalFields['childrenAges'] !== undefined) {
							qs['childrenAges'] = additionalFields['childrenAges'];
						}

						if (additionalFields['onlyDefaultDates'] !== undefined) {
							qs['onlyDefaultDates'] = additionalFields['onlyDefaultDates'];
						}

						if (additionalFields['includeUnavailable'] !== undefined) {
							qs['includeUnavailable'] = additionalFields['includeUnavailable'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'offer:BookingOffer-indexGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/offer-index`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const BookingOffer_indexGet_ratePlanId_value = this.getNodeParameter(
							'BookingOffer_indexGet_ratePlanId',
							i,
						);
						if (
							BookingOffer_indexGet_ratePlanId_value !== undefined &&
							BookingOffer_indexGet_ratePlanId_value !== '' &&
							(!Array.isArray(BookingOffer_indexGet_ratePlanId_value) ||
								BookingOffer_indexGet_ratePlanId_value.length > 0)
						) {
							qs['ratePlanId'] = BookingOffer_indexGet_ratePlanId_value;
						}

						const BookingOffer_indexGet_from_value = this.getNodeParameter(
							'BookingOffer_indexGet_from',
							i,
						);
						if (
							BookingOffer_indexGet_from_value !== undefined &&
							BookingOffer_indexGet_from_value !== '' &&
							(!Array.isArray(BookingOffer_indexGet_from_value) ||
								BookingOffer_indexGet_from_value.length > 0)
						) {
							qs['from'] = BookingOffer_indexGet_from_value;
						}

						const BookingOffer_indexGet_to_value = this.getNodeParameter(
							'BookingOffer_indexGet_to',
							i,
						);
						if (
							BookingOffer_indexGet_to_value !== undefined &&
							BookingOffer_indexGet_to_value !== '' &&
							(!Array.isArray(BookingOffer_indexGet_to_value) ||
								BookingOffer_indexGet_to_value.length > 0)
						) {
							qs['to'] = BookingOffer_indexGet_to_value;
						}

						const BookingOffer_indexGet_channelCode_value = this.getNodeParameter(
							'BookingOffer_indexGet_channelCode',
							i,
						);
						if (
							BookingOffer_indexGet_channelCode_value !== undefined &&
							BookingOffer_indexGet_channelCode_value !== '' &&
							(!Array.isArray(BookingOffer_indexGet_channelCode_value) ||
								BookingOffer_indexGet_channelCode_value.length > 0)
						) {
							qs['channelCode'] = BookingOffer_indexGet_channelCode_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingOffer_indexGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservation:BookingReservationsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/reservations`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingReservationsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['bookingId'] !== undefined) {
							qs['bookingId'] = additionalFields['bookingId'];
						}

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['ratePlanIds'] !== undefined) {
							qs['ratePlanIds'] = additionalFields['ratePlanIds'];
						}

						if (additionalFields['companyIds'] !== undefined) {
							qs['companyIds'] = additionalFields['companyIds'];
						}

						if (additionalFields['unitIds'] !== undefined) {
							qs['unitIds'] = additionalFields['unitIds'];
						}

						if (additionalFields['unitGroupIds'] !== undefined) {
							qs['unitGroupIds'] = additionalFields['unitGroupIds'];
						}

						if (additionalFields['unitGroupTypes'] !== undefined) {
							qs['unitGroupTypes'] = additionalFields['unitGroupTypes'];
						}

						if (additionalFields['blockIds'] !== undefined) {
							qs['blockIds'] = additionalFields['blockIds'];
						}

						if (additionalFields['marketSegmentIds'] !== undefined) {
							qs['marketSegmentIds'] = additionalFields['marketSegmentIds'];
						}

						if (additionalFields['status'] !== undefined) {
							qs['status'] = additionalFields['status'];
						}

						if (additionalFields['dateFilter'] !== undefined) {
							qs['dateFilter'] = additionalFields['dateFilter'];
						}

						if (additionalFields['from'] !== undefined) {
							qs['from'] = additionalFields['from'];
						}

						if (additionalFields['to'] !== undefined) {
							qs['to'] = additionalFields['to'];
						}

						if (additionalFields['channelCode'] !== undefined) {
							qs['channelCode'] = additionalFields['channelCode'];
						}

						if (additionalFields['sources'] !== undefined) {
							qs['sources'] = additionalFields['sources'];
						}

						if (additionalFields['validationMessageCategory'] !== undefined) {
							qs['validationMessageCategory'] = additionalFields['validationMessageCategory'];
						}

						if (additionalFields['externalCode'] !== undefined) {
							qs['externalCode'] = additionalFields['externalCode'];
						}

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (additionalFields['balanceFilter'] !== undefined) {
							qs['balanceFilter'] = additionalFields['balanceFilter'];
						}

						if (additionalFields['allFoliosHaveInvoice'] !== undefined) {
							qs['allFoliosHaveInvoice'] = additionalFields['allFoliosHaveInvoice'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['sort'] !== undefined) {
							qs['sort'] = additionalFields['sort'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservation:BookingReservations$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/reservations/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingReservations_countGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['bookingId'] !== undefined) {
							qs['bookingId'] = additionalFields['bookingId'];
						}

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['ratePlanIds'] !== undefined) {
							qs['ratePlanIds'] = additionalFields['ratePlanIds'];
						}

						if (additionalFields['companyIds'] !== undefined) {
							qs['companyIds'] = additionalFields['companyIds'];
						}

						if (additionalFields['unitIds'] !== undefined) {
							qs['unitIds'] = additionalFields['unitIds'];
						}

						if (additionalFields['unitGroupIds'] !== undefined) {
							qs['unitGroupIds'] = additionalFields['unitGroupIds'];
						}

						if (additionalFields['unitGroupTypes'] !== undefined) {
							qs['unitGroupTypes'] = additionalFields['unitGroupTypes'];
						}

						if (additionalFields['blockIds'] !== undefined) {
							qs['blockIds'] = additionalFields['blockIds'];
						}

						if (additionalFields['marketSegmentIds'] !== undefined) {
							qs['marketSegmentIds'] = additionalFields['marketSegmentIds'];
						}

						if (additionalFields['status'] !== undefined) {
							qs['status'] = additionalFields['status'];
						}

						if (additionalFields['dateFilter'] !== undefined) {
							qs['dateFilter'] = additionalFields['dateFilter'];
						}

						if (additionalFields['from'] !== undefined) {
							qs['from'] = additionalFields['from'];
						}

						if (additionalFields['to'] !== undefined) {
							qs['to'] = additionalFields['to'];
						}

						if (additionalFields['channelCode'] !== undefined) {
							qs['channelCode'] = additionalFields['channelCode'];
						}

						if (additionalFields['sources'] !== undefined) {
							qs['sources'] = additionalFields['sources'];
						}

						if (additionalFields['validationMessageCategory'] !== undefined) {
							qs['validationMessageCategory'] = additionalFields['validationMessageCategory'];
						}

						if (additionalFields['externalCode'] !== undefined) {
							qs['externalCode'] = additionalFields['externalCode'];
						}

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (additionalFields['balanceFilter'] !== undefined) {
							qs['balanceFilter'] = additionalFields['balanceFilter'];
						}

						if (additionalFields['allFoliosHaveInvoice'] !== undefined) {
							qs['allFoliosHaveInvoice'] = additionalFields['allFoliosHaveInvoice'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservation:BookingReservationsByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/reservations/${this.getNodeParameter('BookingReservationsByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingReservationsByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservation:BookingReservationsByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/booking/v1/reservations/${this.getNodeParameter('BookingReservationsByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservation:BookingReservationsByIdOffersGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/reservations/${this.getNodeParameter('BookingReservationsByIdOffersGet_id', i) as string}/offers`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingReservationsByIdOffersGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['arrival'] !== undefined) {
							qs['arrival'] = additionalFields['arrival'];
						}

						if (additionalFields['departure'] !== undefined) {
							qs['departure'] = additionalFields['departure'];
						}

						if (additionalFields['adults'] !== undefined) {
							qs['adults'] = additionalFields['adults'];
						}

						if (additionalFields['childrenAges'] !== undefined) {
							qs['childrenAges'] = additionalFields['childrenAges'];
						}

						if (additionalFields['channelCode'] !== undefined) {
							qs['channelCode'] = additionalFields['channelCode'];
						}

						if (additionalFields['promoCode'] !== undefined) {
							qs['promoCode'] = additionalFields['promoCode'];
						}

						if (additionalFields['requote'] !== undefined) {
							qs['requote'] = additionalFields['requote'];
						}

						if (additionalFields['includeUnavailable'] !== undefined) {
							qs['includeUnavailable'] = additionalFields['includeUnavailable'];
						}

						if (additionalFields['unitGroupIds'] !== undefined) {
							qs['unitGroupIds'] = additionalFields['unitGroupIds'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservation:BookingReservationsByIdService-offersGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/reservations/${this.getNodeParameter('BookingReservationsByIdService_offersGet_id', i) as string}/service-offers`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingReservationsByIdService_offersGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['channelCode'] !== undefined) {
							qs['channelCode'] = additionalFields['channelCode'];
						}

						if (additionalFields['onlyDefaultDates'] !== undefined) {
							qs['onlyDefaultDates'] = additionalFields['onlyDefaultDates'];
						}

						if (additionalFields['includeUnavailable'] !== undefined) {
							qs['includeUnavailable'] = additionalFields['includeUnavailable'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservation:BookingReservationsByIdServicesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/reservations/${this.getNodeParameter('BookingReservationsByIdServicesGet_id', i) as string}/services`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservation:BookingReservationsByIdServicesDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/booking/v1/reservations/${this.getNodeParameter('BookingReservationsByIdServicesDelete_id', i) as string}/services`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const BookingReservationsByIdServicesDelete_serviceId_value = this.getNodeParameter(
							'BookingReservationsByIdServicesDelete_serviceId',
							i,
						);
						if (
							BookingReservationsByIdServicesDelete_serviceId_value !== undefined &&
							BookingReservationsByIdServicesDelete_serviceId_value !== '' &&
							(!Array.isArray(BookingReservationsByIdServicesDelete_serviceId_value) ||
								BookingReservationsByIdServicesDelete_serviceId_value.length > 0)
						) {
							qs['serviceId'] = BookingReservationsByIdServicesDelete_serviceId_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdAssign-unitPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdAssign_unitPut_id', i) as string}/assign-unit`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingReservation_actionsByIdAssign_unitPut_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['unitConditions'] !== undefined) {
							qs['unitConditions'] = additionalFields['unitConditions'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdAssign-unitByUnitIdPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdAssign_unitByUnitIdPut_id', i) as string}/assign-unit/${this.getNodeParameter('BookingReservation_actionsByIdAssign_unitByUnitIdPut_unitId', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingReservation_actionsByIdAssign_unitByUnitIdPut_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['from'] !== undefined) {
							qs['from'] = additionalFields['from'];
						}

						if (additionalFields['to'] !== undefined) {
							qs['to'] = additionalFields['to'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdUnassign-unitsPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdUnassign_unitsPut_id', i) as string}/unassign-units`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdCheckinPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdCheckinPut_id', i) as string}/checkin`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingReservation_actionsByIdCheckinPut_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['withCityTax'] !== undefined) {
							qs['withCityTax'] = additionalFields['withCityTax'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdRevert-checkinPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdRevert_checkinPut_id', i) as string}/revert-checkin`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdCheckoutPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdCheckoutPut_id', i) as string}/checkout`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdCancelPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdCancelPut_id', i) as string}/cancel`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdNoshowPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdNoshowPut_id', i) as string}/noshow`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdAmendPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdAmendPut_id', i) as string}/amend`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdAmend$forcePut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdAmend_forcePut_id', i) as string}/amend/$force`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdBook-servicePut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdBook_servicePut_id', i) as string}/book-service`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdBook-service$forcePut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdBook_service_forcePut_id', i) as string}/book-service/$force`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdRemove-city-taxPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdRemove_city_taxPut_id', i) as string}/remove-city-tax`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdAdd-city-taxPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdAdd_city_taxPut_id', i) as string}/add-city-tax`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdLock-unitPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdLock_unitPut_id', i) as string}/lock-unit`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reservationactions:BookingReservation-actionsByIdUnlock-unitPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/booking/v1/reservation-actions/${this.getNodeParameter('BookingReservation_actionsByIdUnlock_unitPut_id', i) as string}/unlock-unit`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'types:BookingTypesSourcesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/types/sources`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'types:BookingTypesByTypeAllowed-valuesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/booking/v1/types/${this.getNodeParameter('BookingTypesByTypeAllowed_valuesGet_type', i) as string}/allowed-values`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const BookingTypesByTypeAllowed_valuesGet_countryCode_value = this.getNodeParameter(
							'BookingTypesByTypeAllowed_valuesGet_countryCode',
							i,
						);
						if (
							BookingTypesByTypeAllowed_valuesGet_countryCode_value !== undefined &&
							BookingTypesByTypeAllowed_valuesGet_countryCode_value !== '' &&
							(!Array.isArray(BookingTypesByTypeAllowed_valuesGet_countryCode_value) ||
								BookingTypesByTypeAllowed_valuesGet_countryCode_value.length > 0)
						) {
							qs['countryCode'] = BookingTypesByTypeAllowed_valuesGet_countryCode_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'BookingTypesByTypeAllowed_valuesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['sort'] !== undefined) {
							qs['sort'] = additionalFields['sort'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folio:FinanceFoliosGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/folios`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['companyIds'] !== undefined) {
							qs['companyIds'] = additionalFields['companyIds'];
						}

						if (additionalFields['reservationIds'] !== undefined) {
							qs['reservationIds'] = additionalFields['reservationIds'];
						}

						if (additionalFields['bookingIds'] !== undefined) {
							qs['bookingIds'] = additionalFields['bookingIds'];
						}

						if (additionalFields['isEmpty'] !== undefined) {
							qs['isEmpty'] = additionalFields['isEmpty'];
						}

						if (additionalFields['checkedOutOnAccountsReceivable'] !== undefined) {
							qs['checkedOutOnAccountsReceivable'] =
								additionalFields['checkedOutOnAccountsReceivable'];
						}

						if (additionalFields['excludeClosed'] !== undefined) {
							qs['excludeClosed'] = additionalFields['excludeClosed'];
						}

						if (additionalFields['hasInvoices'] !== undefined) {
							qs['hasInvoices'] = additionalFields['hasInvoices'];
						}

						if (additionalFields['createdFrom'] !== undefined) {
							qs['createdFrom'] = additionalFields['createdFrom'];
						}

						if (additionalFields['createdTo'] !== undefined) {
							qs['createdTo'] = additionalFields['createdTo'];
						}

						if (additionalFields['updatedFrom'] !== undefined) {
							qs['updatedFrom'] = additionalFields['updatedFrom'];
						}

						if (additionalFields['updatedTo'] !== undefined) {
							qs['updatedTo'] = additionalFields['updatedTo'];
						}

						if (additionalFields['onlyMain'] !== undefined) {
							qs['onlyMain'] = additionalFields['onlyMain'];
						}

						if (additionalFields['type'] !== undefined) {
							qs['type'] = additionalFields['type'];
						}

						if (additionalFields['status'] !== undefined) {
							qs['status'] = additionalFields['status'];
						}

						if (additionalFields['externalFolioCode'] !== undefined) {
							qs['externalFolioCode'] = additionalFields['externalFolioCode'];
						}

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (additionalFields['balanceFilter'] !== undefined) {
							qs['balanceFilter'] = additionalFields['balanceFilter'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folio:FinanceFoliosPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folios`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folio:FinanceFolios$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/folios/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFolios_countGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['companyIds'] !== undefined) {
							qs['companyIds'] = additionalFields['companyIds'];
						}

						if (additionalFields['reservationIds'] !== undefined) {
							qs['reservationIds'] = additionalFields['reservationIds'];
						}

						if (additionalFields['bookingIds'] !== undefined) {
							qs['bookingIds'] = additionalFields['bookingIds'];
						}

						if (additionalFields['isEmpty'] !== undefined) {
							qs['isEmpty'] = additionalFields['isEmpty'];
						}

						if (additionalFields['checkedOutOnAccountsReceivable'] !== undefined) {
							qs['checkedOutOnAccountsReceivable'] =
								additionalFields['checkedOutOnAccountsReceivable'];
						}

						if (additionalFields['excludeClosed'] !== undefined) {
							qs['excludeClosed'] = additionalFields['excludeClosed'];
						}

						if (additionalFields['hasInvoices'] !== undefined) {
							qs['hasInvoices'] = additionalFields['hasInvoices'];
						}

						if (additionalFields['createdFrom'] !== undefined) {
							qs['createdFrom'] = additionalFields['createdFrom'];
						}

						if (additionalFields['createdTo'] !== undefined) {
							qs['createdTo'] = additionalFields['createdTo'];
						}

						if (additionalFields['updatedFrom'] !== undefined) {
							qs['updatedFrom'] = additionalFields['updatedFrom'];
						}

						if (additionalFields['updatedTo'] !== undefined) {
							qs['updatedTo'] = additionalFields['updatedTo'];
						}

						if (additionalFields['onlyMain'] !== undefined) {
							qs['onlyMain'] = additionalFields['onlyMain'];
						}

						if (additionalFields['type'] !== undefined) {
							qs['type'] = additionalFields['type'];
						}

						if (additionalFields['status'] !== undefined) {
							qs['status'] = additionalFields['status'];
						}

						if (additionalFields['externalFolioCode'] !== undefined) {
							qs['externalFolioCode'] = additionalFields['externalFolioCode'];
						}

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (additionalFields['balanceFilter'] !== undefined) {
							qs['balanceFilter'] = additionalFields['balanceFilter'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folio:FinanceFoliosByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folio:FinanceFoliosByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folio:FinanceFoliosByIdHead': {
						requestOptions.method = 'HEAD';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByIdHead_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folio:FinanceFoliosByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdChargesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdChargesPost_folioId', i) as string}/charges`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFolio_actionsByFolioIdChargesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdTransitory-chargesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdTransitory_chargesPost_folioId', i) as string}/transitory-charges`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFolio_actionsByFolioIdTransitory_chargesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdCancellation-feePost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdCancellation_feePost_folioId', i) as string}/cancellation-fee`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFolio_actionsByFolioIdCancellation_feePost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdNo-show-feePost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdNo_show_feePost_folioId', i) as string}/no-show-fee`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFolio_actionsByFolioIdNo_show_feePost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdClosePut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdClosePut_folioId', i) as string}/close`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdReopenPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdReopenPut_folioId', i) as string}/reopen`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdMove-chargesPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdMove_chargesPut_folioId', i) as string}/move-charges`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsBulk-movePut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/finance/v1/folio-actions/bulk-move`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdMove-all-chargesPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdMove_all_chargesPut_folioId', i) as string}/move-all-charges`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdChargesByChargeIdAllowancesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdChargesByChargeIdAllowancesPost_folioId', i) as string}/charges/${this.getNodeParameter('FinanceFolio_actionsByFolioIdChargesByChargeIdAllowancesPost_chargeId', i) as string}/allowances`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFolio_actionsByFolioIdChargesByChargeIdAllowancesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdAllowancesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdAllowancesPost_folioId', i) as string}/allowances`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFolio_actionsByFolioIdAllowancesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdBulk-allowancesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdBulk_allowancesPost_folioId', i) as string}/bulk-allowances`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFolio_actionsByFolioIdBulk_allowancesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdPost-chargesPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdPost_chargesPut_folioId', i) as string}/post-charges`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdMove-paymentsPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdMove_paymentsPut_folioId', i) as string}/move-payments`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdCorrectPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdCorrectPost_folioId', i) as string}/correct`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFolio_actionsByFolioIdCorrectPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdChargesByChargeIdSplitPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdChargesByChargeIdSplitPost_folioId', i) as string}/charges/${this.getNodeParameter('FinanceFolio_actionsByFolioIdChargesByChargeIdSplitPost_chargeId', i) as string}/split`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFolio_actionsByFolioIdChargesByChargeIdSplitPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'folioactions:FinanceFolio-actionsByFolioIdPaymentsByPaymentIdSplitPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folio-actions/${this.getNodeParameter('FinanceFolio_actionsByFolioIdPaymentsByPaymentIdSplitPost_folioId', i) as string}/payments/${this.getNodeParameter('FinanceFolio_actionsByFolioIdPaymentsByPaymentIdSplitPost_paymentId', i) as string}/split`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFolio_actionsByFolioIdPaymentsByPaymentIdSplitPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'foliopayments:FinanceFoliosByFolioIdPaymentsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByFolioIdPaymentsGet_folioId', i) as string}/payments`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosByFolioIdPaymentsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['statusCodes'] !== undefined) {
							qs['statusCodes'] = additionalFields['statusCodes'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'foliopayments:FinanceFoliosByFolioIdPaymentsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByFolioIdPaymentsPost_folioId', i) as string}/payments`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosByFolioIdPaymentsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'foliopayments:FinanceFoliosByFolioIdPaymentsByPaymentIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByFolioIdPaymentsByPaymentIdGet_folioId', i) as string}/payments/${this.getNodeParameter('FinanceFoliosByFolioIdPaymentsByPaymentIdGet_paymentId', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosByFolioIdPaymentsByPaymentIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'foliopayments:FinanceFoliosByFolioIdPaymentsBy-terminalPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByFolioIdPaymentsBy_terminalPost_folioId', i) as string}/payments/by-terminal`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosByFolioIdPaymentsBy_terminalPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'foliopayments:FinanceFoliosByFolioIdPaymentsBy-authorizationPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByFolioIdPaymentsBy_authorizationPost_folioId', i) as string}/payments/by-authorization`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosByFolioIdPaymentsBy_authorizationPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'foliopayments:FinanceFoliosByFolioIdPaymentsBy-payment-accountPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByFolioIdPaymentsBy_payment_accountPost_folioId', i) as string}/payments/by-payment-account`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosByFolioIdPaymentsBy_payment_accountPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'foliopayments:FinanceFoliosByFolioIdPaymentsBy-linkPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByFolioIdPaymentsBy_linkPost_folioId', i) as string}/payments/by-link`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosByFolioIdPaymentsBy_linkPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'foliopayments:FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut_folioId', i) as string}/payments/${this.getNodeParameter('FinanceFoliosByFolioIdPaymentsByPaymentIdCancelPut_paymentId', i) as string}/cancel`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'foliopayments:FinanceFoliosByFolioIdRefundsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByFolioIdRefundsGet_folioId', i) as string}/refunds`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosByFolioIdRefundsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['statusCodes'] !== undefined) {
							qs['statusCodes'] = additionalFields['statusCodes'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'foliopayments:FinanceFoliosByFolioIdRefundsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByFolioIdRefundsPost_folioId', i) as string}/refunds`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosByFolioIdRefundsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'foliopayments:FinanceFoliosByFolioIdRefundsByRefundIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByFolioIdRefundsByRefundIdGet_folioId', i) as string}/refunds/${this.getNodeParameter('FinanceFoliosByFolioIdRefundsByRefundIdGet_refundId', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'foliopayments:FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/folios/${this.getNodeParameter('FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_folioId', i) as string}/payments/${this.getNodeParameter('FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_paymentId', i) as string}/refunds`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'invoice:FinanceInvoicesPreview-pdfGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/invoices/preview-pdf`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceInvoicesPreview_pdfGet_languageCode_value = this.getNodeParameter(
							'FinanceInvoicesPreview_pdfGet_languageCode',
							i,
						);
						if (
							FinanceInvoicesPreview_pdfGet_languageCode_value !== undefined &&
							FinanceInvoicesPreview_pdfGet_languageCode_value !== '' &&
							(!Array.isArray(FinanceInvoicesPreview_pdfGet_languageCode_value) ||
								FinanceInvoicesPreview_pdfGet_languageCode_value.length > 0)
						) {
							qs['languageCode'] = FinanceInvoicesPreview_pdfGet_languageCode_value;
						}

						const FinanceInvoicesPreview_pdfGet_folioId_value = this.getNodeParameter(
							'FinanceInvoicesPreview_pdfGet_folioId',
							i,
						);
						if (
							FinanceInvoicesPreview_pdfGet_folioId_value !== undefined &&
							FinanceInvoicesPreview_pdfGet_folioId_value !== '' &&
							(!Array.isArray(FinanceInvoicesPreview_pdfGet_folioId_value) ||
								FinanceInvoicesPreview_pdfGet_folioId_value.length > 0)
						) {
							qs['folioId'] = FinanceInvoicesPreview_pdfGet_folioId_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'invoice:FinanceInvoicesPreviewGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/invoices/preview`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceInvoicesPreviewGet_folioId_value = this.getNodeParameter(
							'FinanceInvoicesPreviewGet_folioId',
							i,
						);
						if (
							FinanceInvoicesPreviewGet_folioId_value !== undefined &&
							FinanceInvoicesPreviewGet_folioId_value !== '' &&
							(!Array.isArray(FinanceInvoicesPreviewGet_folioId_value) ||
								FinanceInvoicesPreviewGet_folioId_value.length > 0)
						) {
							qs['folioId'] = FinanceInvoicesPreviewGet_folioId_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceInvoicesPreviewGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'invoice:FinanceInvoicesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/invoices`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceInvoicesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['number'] !== undefined) {
							qs['number'] = additionalFields['number'];
						}

						if (additionalFields['status'] !== undefined) {
							qs['status'] = additionalFields['status'];
						}

						if (additionalFields['checkedOutOnAccountsReceivable'] !== undefined) {
							qs['checkedOutOnAccountsReceivable'] =
								additionalFields['checkedOutOnAccountsReceivable'];
						}

						if (additionalFields['outstandingPaymentFilter'] !== undefined) {
							qs['outstandingPaymentFilter'] = additionalFields['outstandingPaymentFilter'];
						}

						if (additionalFields['dateFilter'] !== undefined) {
							qs['dateFilter'] = additionalFields['dateFilter'];
						}

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['reservationIds'] !== undefined) {
							qs['reservationIds'] = additionalFields['reservationIds'];
						}

						if (additionalFields['bookingIds'] !== undefined) {
							qs['bookingIds'] = additionalFields['bookingIds'];
						}

						if (additionalFields['folioIds'] !== undefined) {
							qs['folioIds'] = additionalFields['folioIds'];
						}

						if (additionalFields['nameSearch'] !== undefined) {
							qs['nameSearch'] = additionalFields['nameSearch'];
						}

						if (additionalFields['paymentSettled'] !== undefined) {
							qs['paymentSettled'] = additionalFields['paymentSettled'];
						}

						if (additionalFields['companyIds'] !== undefined) {
							qs['companyIds'] = additionalFields['companyIds'];
						}

						if (additionalFields['recipientType'] !== undefined) {
							qs['recipientType'] = additionalFields['recipientType'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'invoice:FinanceInvoicesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/invoices`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceInvoicesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'invoice:FinanceInvoicesByIdPdfGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/invoices/${this.getNodeParameter('FinanceInvoicesByIdPdfGet_id', i) as string}/pdf`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'invoice:FinanceInvoicesByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/invoices/${this.getNodeParameter('FinanceInvoicesByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceInvoicesByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'invoiceaction:FinanceInvoice-actionsByIdPayPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/finance/v1/invoice-actions/${this.getNodeParameter('FinanceInvoice_actionsByIdPayPut_id', i) as string}/pay`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'invoiceaction:FinanceInvoice-actionsByIdCancelPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/finance/v1/invoice-actions/${this.getNodeParameter('FinanceInvoice_actionsByIdCancelPut_id', i) as string}/cancel`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subledger:FinanceAccountsAggregate-pairs-dailyPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/accounts/aggregate-pairs-daily`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceAccountsAggregate_pairs_dailyPost_propertyId_value = this.getNodeParameter(
							'FinanceAccountsAggregate_pairs_dailyPost_propertyId',
							i,
						);
						if (
							FinanceAccountsAggregate_pairs_dailyPost_propertyId_value !== undefined &&
							FinanceAccountsAggregate_pairs_dailyPost_propertyId_value !== '' &&
							(!Array.isArray(FinanceAccountsAggregate_pairs_dailyPost_propertyId_value) ||
								FinanceAccountsAggregate_pairs_dailyPost_propertyId_value.length > 0)
						) {
							qs['propertyId'] = FinanceAccountsAggregate_pairs_dailyPost_propertyId_value;
						}

						const FinanceAccountsAggregate_pairs_dailyPost_from_value = this.getNodeParameter(
							'FinanceAccountsAggregate_pairs_dailyPost_from',
							i,
						);
						if (
							FinanceAccountsAggregate_pairs_dailyPost_from_value !== undefined &&
							FinanceAccountsAggregate_pairs_dailyPost_from_value !== '' &&
							(!Array.isArray(FinanceAccountsAggregate_pairs_dailyPost_from_value) ||
								FinanceAccountsAggregate_pairs_dailyPost_from_value.length > 0)
						) {
							qs['from'] = FinanceAccountsAggregate_pairs_dailyPost_from_value;
						}

						const FinanceAccountsAggregate_pairs_dailyPost_to_value = this.getNodeParameter(
							'FinanceAccountsAggregate_pairs_dailyPost_to',
							i,
						);
						if (
							FinanceAccountsAggregate_pairs_dailyPost_to_value !== undefined &&
							FinanceAccountsAggregate_pairs_dailyPost_to_value !== '' &&
							(!Array.isArray(FinanceAccountsAggregate_pairs_dailyPost_to_value) ||
								FinanceAccountsAggregate_pairs_dailyPost_to_value.length > 0)
						) {
							qs['to'] = FinanceAccountsAggregate_pairs_dailyPost_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceAccountsAggregate_pairs_dailyPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['reference'] !== undefined) {
							qs['reference'] = additionalFields['reference'];
						}

						if (additionalFields['accountNumber'] !== undefined) {
							qs['accountNumber'] = additionalFields['accountNumber'];
						}

						if (additionalFields['accountType'] !== undefined) {
							qs['accountType'] = additionalFields['accountType'];
						}

						if (additionalFields['accountingSchema'] !== undefined) {
							qs['accountingSchema'] = additionalFields['accountingSchema'];
						}

						if (additionalFields['languageCode'] !== undefined) {
							qs['languageCode'] = additionalFields['languageCode'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						const headers: IDataObject = {};

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subledger:FinanceAccountsAggregate-dailyPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/accounts/aggregate-daily`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceAccountsAggregate_dailyPost_propertyId_value = this.getNodeParameter(
							'FinanceAccountsAggregate_dailyPost_propertyId',
							i,
						);
						if (
							FinanceAccountsAggregate_dailyPost_propertyId_value !== undefined &&
							FinanceAccountsAggregate_dailyPost_propertyId_value !== '' &&
							(!Array.isArray(FinanceAccountsAggregate_dailyPost_propertyId_value) ||
								FinanceAccountsAggregate_dailyPost_propertyId_value.length > 0)
						) {
							qs['propertyId'] = FinanceAccountsAggregate_dailyPost_propertyId_value;
						}

						const FinanceAccountsAggregate_dailyPost_from_value = this.getNodeParameter(
							'FinanceAccountsAggregate_dailyPost_from',
							i,
						);
						if (
							FinanceAccountsAggregate_dailyPost_from_value !== undefined &&
							FinanceAccountsAggregate_dailyPost_from_value !== '' &&
							(!Array.isArray(FinanceAccountsAggregate_dailyPost_from_value) ||
								FinanceAccountsAggregate_dailyPost_from_value.length > 0)
						) {
							qs['from'] = FinanceAccountsAggregate_dailyPost_from_value;
						}

						const FinanceAccountsAggregate_dailyPost_to_value = this.getNodeParameter(
							'FinanceAccountsAggregate_dailyPost_to',
							i,
						);
						if (
							FinanceAccountsAggregate_dailyPost_to_value !== undefined &&
							FinanceAccountsAggregate_dailyPost_to_value !== '' &&
							(!Array.isArray(FinanceAccountsAggregate_dailyPost_to_value) ||
								FinanceAccountsAggregate_dailyPost_to_value.length > 0)
						) {
							qs['to'] = FinanceAccountsAggregate_dailyPost_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceAccountsAggregate_dailyPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['reference'] !== undefined) {
							qs['reference'] = additionalFields['reference'];
						}

						if (additionalFields['accountNumber'] !== undefined) {
							qs['accountNumber'] = additionalFields['accountNumber'];
						}

						if (additionalFields['accountType'] !== undefined) {
							qs['accountType'] = additionalFields['accountType'];
						}

						if (additionalFields['accountingSchema'] !== undefined) {
							qs['accountingSchema'] = additionalFields['accountingSchema'];
						}

						if (additionalFields['languageCode'] !== undefined) {
							qs['languageCode'] = additionalFields['languageCode'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						const headers: IDataObject = {};

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subledger:FinanceAccountsAggregatePost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/accounts/aggregate`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceAccountsAggregatePost_propertyId_value = this.getNodeParameter(
							'FinanceAccountsAggregatePost_propertyId',
							i,
						);
						if (
							FinanceAccountsAggregatePost_propertyId_value !== undefined &&
							FinanceAccountsAggregatePost_propertyId_value !== '' &&
							(!Array.isArray(FinanceAccountsAggregatePost_propertyId_value) ||
								FinanceAccountsAggregatePost_propertyId_value.length > 0)
						) {
							qs['propertyId'] = FinanceAccountsAggregatePost_propertyId_value;
						}

						const FinanceAccountsAggregatePost_from_value = this.getNodeParameter(
							'FinanceAccountsAggregatePost_from',
							i,
						);
						if (
							FinanceAccountsAggregatePost_from_value !== undefined &&
							FinanceAccountsAggregatePost_from_value !== '' &&
							(!Array.isArray(FinanceAccountsAggregatePost_from_value) ||
								FinanceAccountsAggregatePost_from_value.length > 0)
						) {
							qs['from'] = FinanceAccountsAggregatePost_from_value;
						}

						const FinanceAccountsAggregatePost_to_value = this.getNodeParameter(
							'FinanceAccountsAggregatePost_to',
							i,
						);
						if (
							FinanceAccountsAggregatePost_to_value !== undefined &&
							FinanceAccountsAggregatePost_to_value !== '' &&
							(!Array.isArray(FinanceAccountsAggregatePost_to_value) ||
								FinanceAccountsAggregatePost_to_value.length > 0)
						) {
							qs['to'] = FinanceAccountsAggregatePost_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceAccountsAggregatePost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['accountNumber'] !== undefined) {
							qs['accountNumber'] = additionalFields['accountNumber'];
						}

						if (additionalFields['accountType'] !== undefined) {
							qs['accountType'] = additionalFields['accountType'];
						}

						if (additionalFields['accountingSchema'] !== undefined) {
							qs['accountingSchema'] = additionalFields['accountingSchema'];
						}

						if (additionalFields['languageCode'] !== undefined) {
							qs['languageCode'] = additionalFields['languageCode'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						const headers: IDataObject = {};

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subledger:FinanceAccountsExportPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/accounts/export`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceAccountsExportPost_propertyId_value = this.getNodeParameter(
							'FinanceAccountsExportPost_propertyId',
							i,
						);
						if (
							FinanceAccountsExportPost_propertyId_value !== undefined &&
							FinanceAccountsExportPost_propertyId_value !== '' &&
							(!Array.isArray(FinanceAccountsExportPost_propertyId_value) ||
								FinanceAccountsExportPost_propertyId_value.length > 0)
						) {
							qs['propertyId'] = FinanceAccountsExportPost_propertyId_value;
						}

						const FinanceAccountsExportPost_from_value = this.getNodeParameter(
							'FinanceAccountsExportPost_from',
							i,
						);
						if (
							FinanceAccountsExportPost_from_value !== undefined &&
							FinanceAccountsExportPost_from_value !== '' &&
							(!Array.isArray(FinanceAccountsExportPost_from_value) ||
								FinanceAccountsExportPost_from_value.length > 0)
						) {
							qs['from'] = FinanceAccountsExportPost_from_value;
						}

						const FinanceAccountsExportPost_to_value = this.getNodeParameter(
							'FinanceAccountsExportPost_to',
							i,
						);
						if (
							FinanceAccountsExportPost_to_value !== undefined &&
							FinanceAccountsExportPost_to_value !== '' &&
							(!Array.isArray(FinanceAccountsExportPost_to_value) ||
								FinanceAccountsExportPost_to_value.length > 0)
						) {
							qs['to'] = FinanceAccountsExportPost_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceAccountsExportPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['accountNumber'] !== undefined) {
							qs['accountNumber'] = additionalFields['accountNumber'];
						}

						if (additionalFields['accountType'] !== undefined) {
							qs['accountType'] = additionalFields['accountType'];
						}

						if (additionalFields['accountingSchema'] !== undefined) {
							qs['accountingSchema'] = additionalFields['accountingSchema'];
						}

						if (additionalFields['languageCode'] !== undefined) {
							qs['languageCode'] = additionalFields['languageCode'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						const headers: IDataObject = {};

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subledger:FinanceAccountsExport-dailyPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/accounts/export-daily`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceAccountsExport_dailyPost_propertyId_value = this.getNodeParameter(
							'FinanceAccountsExport_dailyPost_propertyId',
							i,
						);
						if (
							FinanceAccountsExport_dailyPost_propertyId_value !== undefined &&
							FinanceAccountsExport_dailyPost_propertyId_value !== '' &&
							(!Array.isArray(FinanceAccountsExport_dailyPost_propertyId_value) ||
								FinanceAccountsExport_dailyPost_propertyId_value.length > 0)
						) {
							qs['propertyId'] = FinanceAccountsExport_dailyPost_propertyId_value;
						}

						const FinanceAccountsExport_dailyPost_from_value = this.getNodeParameter(
							'FinanceAccountsExport_dailyPost_from',
							i,
						);
						if (
							FinanceAccountsExport_dailyPost_from_value !== undefined &&
							FinanceAccountsExport_dailyPost_from_value !== '' &&
							(!Array.isArray(FinanceAccountsExport_dailyPost_from_value) ||
								FinanceAccountsExport_dailyPost_from_value.length > 0)
						) {
							qs['from'] = FinanceAccountsExport_dailyPost_from_value;
						}

						const FinanceAccountsExport_dailyPost_to_value = this.getNodeParameter(
							'FinanceAccountsExport_dailyPost_to',
							i,
						);
						if (
							FinanceAccountsExport_dailyPost_to_value !== undefined &&
							FinanceAccountsExport_dailyPost_to_value !== '' &&
							(!Array.isArray(FinanceAccountsExport_dailyPost_to_value) ||
								FinanceAccountsExport_dailyPost_to_value.length > 0)
						) {
							qs['to'] = FinanceAccountsExport_dailyPost_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceAccountsExport_dailyPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['reference'] !== undefined) {
							qs['reference'] = additionalFields['reference'];
						}

						if (additionalFields['accountNumber'] !== undefined) {
							qs['accountNumber'] = additionalFields['accountNumber'];
						}

						if (additionalFields['accountType'] !== undefined) {
							qs['accountType'] = additionalFields['accountType'];
						}

						if (additionalFields['accountingSchema'] !== undefined) {
							qs['accountingSchema'] = additionalFields['accountingSchema'];
						}

						if (additionalFields['languageCode'] !== undefined) {
							qs['languageCode'] = additionalFields['languageCode'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						const headers: IDataObject = {};

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subledger:FinanceAccountsExport-gross-dailyPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/finance/v1/accounts/export-gross-daily`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceAccountsExport_gross_dailyPost_propertyId_value = this.getNodeParameter(
							'FinanceAccountsExport_gross_dailyPost_propertyId',
							i,
						);
						if (
							FinanceAccountsExport_gross_dailyPost_propertyId_value !== undefined &&
							FinanceAccountsExport_gross_dailyPost_propertyId_value !== '' &&
							(!Array.isArray(FinanceAccountsExport_gross_dailyPost_propertyId_value) ||
								FinanceAccountsExport_gross_dailyPost_propertyId_value.length > 0)
						) {
							qs['propertyId'] = FinanceAccountsExport_gross_dailyPost_propertyId_value;
						}

						const FinanceAccountsExport_gross_dailyPost_from_value = this.getNodeParameter(
							'FinanceAccountsExport_gross_dailyPost_from',
							i,
						);
						if (
							FinanceAccountsExport_gross_dailyPost_from_value !== undefined &&
							FinanceAccountsExport_gross_dailyPost_from_value !== '' &&
							(!Array.isArray(FinanceAccountsExport_gross_dailyPost_from_value) ||
								FinanceAccountsExport_gross_dailyPost_from_value.length > 0)
						) {
							qs['from'] = FinanceAccountsExport_gross_dailyPost_from_value;
						}

						const FinanceAccountsExport_gross_dailyPost_to_value = this.getNodeParameter(
							'FinanceAccountsExport_gross_dailyPost_to',
							i,
						);
						if (
							FinanceAccountsExport_gross_dailyPost_to_value !== undefined &&
							FinanceAccountsExport_gross_dailyPost_to_value !== '' &&
							(!Array.isArray(FinanceAccountsExport_gross_dailyPost_to_value) ||
								FinanceAccountsExport_gross_dailyPost_to_value.length > 0)
						) {
							qs['to'] = FinanceAccountsExport_gross_dailyPost_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceAccountsExport_gross_dailyPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['reference'] !== undefined) {
							qs['reference'] = additionalFields['reference'];
						}

						if (additionalFields['accountingSchema'] !== undefined) {
							qs['accountingSchema'] = additionalFields['accountingSchema'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						const headers: IDataObject = {};

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subledger:FinanceAccountsSchemaGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/accounts/schema`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceAccountsSchemaGet_propertyId_value = this.getNodeParameter(
							'FinanceAccountsSchemaGet_propertyId',
							i,
						);
						if (
							FinanceAccountsSchemaGet_propertyId_value !== undefined &&
							FinanceAccountsSchemaGet_propertyId_value !== '' &&
							(!Array.isArray(FinanceAccountsSchemaGet_propertyId_value) ||
								FinanceAccountsSchemaGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = FinanceAccountsSchemaGet_propertyId_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceAccountsSchemaGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['depth'] !== undefined) {
							qs['depth'] = additionalFields['depth'];
						}

						if (additionalFields['includeArchived'] !== undefined) {
							qs['includeArchived'] = additionalFields['includeArchived'];
						}

						if (additionalFields['accountingSchema'] !== undefined) {
							qs['accountingSchema'] = additionalFields['accountingSchema'];
						}

						if (additionalFields['languageCode'] !== undefined) {
							qs['languageCode'] = additionalFields['languageCode'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subledger:FinanceGlobal-accountsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/global-accounts`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceGlobal_accountsGet_propertyId_value = this.getNodeParameter(
							'FinanceGlobal_accountsGet_propertyId',
							i,
						);
						if (
							FinanceGlobal_accountsGet_propertyId_value !== undefined &&
							FinanceGlobal_accountsGet_propertyId_value !== '' &&
							(!Array.isArray(FinanceGlobal_accountsGet_propertyId_value) ||
								FinanceGlobal_accountsGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = FinanceGlobal_accountsGet_propertyId_value;
						}

						const FinanceGlobal_accountsGet_parent_value = this.getNodeParameter(
							'FinanceGlobal_accountsGet_parent',
							i,
						);
						if (
							FinanceGlobal_accountsGet_parent_value !== undefined &&
							FinanceGlobal_accountsGet_parent_value !== '' &&
							(!Array.isArray(FinanceGlobal_accountsGet_parent_value) ||
								FinanceGlobal_accountsGet_parent_value.length > 0)
						) {
							qs['parent'] = FinanceGlobal_accountsGet_parent_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceGlobal_accountsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['includeArchived'] !== undefined) {
							qs['includeArchived'] = additionalFields['includeArchived'];
						}

						if (additionalFields['accountingSchema'] !== undefined) {
							qs['accountingSchema'] = additionalFields['accountingSchema'];
						}

						if (additionalFields['languageCode'] !== undefined) {
							qs['languageCode'] = additionalFields['languageCode'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subledger:FinanceGuest-accountsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/guest-accounts`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceGuest_accountsGet_propertyId_value = this.getNodeParameter(
							'FinanceGuest_accountsGet_propertyId',
							i,
						);
						if (
							FinanceGuest_accountsGet_propertyId_value !== undefined &&
							FinanceGuest_accountsGet_propertyId_value !== '' &&
							(!Array.isArray(FinanceGuest_accountsGet_propertyId_value) ||
								FinanceGuest_accountsGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = FinanceGuest_accountsGet_propertyId_value;
						}

						const FinanceGuest_accountsGet_reservationId_value = this.getNodeParameter(
							'FinanceGuest_accountsGet_reservationId',
							i,
						);
						if (
							FinanceGuest_accountsGet_reservationId_value !== undefined &&
							FinanceGuest_accountsGet_reservationId_value !== '' &&
							(!Array.isArray(FinanceGuest_accountsGet_reservationId_value) ||
								FinanceGuest_accountsGet_reservationId_value.length > 0)
						) {
							qs['reservationId'] = FinanceGuest_accountsGet_reservationId_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceGuest_accountsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['parent'] !== undefined) {
							qs['parent'] = additionalFields['parent'];
						}

						if (additionalFields['languageCode'] !== undefined) {
							qs['languageCode'] = additionalFields['languageCode'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subledger:FinanceExternal-accountsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/external-accounts`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceExternal_accountsGet_propertyId_value = this.getNodeParameter(
							'FinanceExternal_accountsGet_propertyId',
							i,
						);
						if (
							FinanceExternal_accountsGet_propertyId_value !== undefined &&
							FinanceExternal_accountsGet_propertyId_value !== '' &&
							(!Array.isArray(FinanceExternal_accountsGet_propertyId_value) ||
								FinanceExternal_accountsGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = FinanceExternal_accountsGet_propertyId_value;
						}

						const FinanceExternal_accountsGet_folioId_value = this.getNodeParameter(
							'FinanceExternal_accountsGet_folioId',
							i,
						);
						if (
							FinanceExternal_accountsGet_folioId_value !== undefined &&
							FinanceExternal_accountsGet_folioId_value !== '' &&
							(!Array.isArray(FinanceExternal_accountsGet_folioId_value) ||
								FinanceExternal_accountsGet_folioId_value.length > 0)
						) {
							qs['folioId'] = FinanceExternal_accountsGet_folioId_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceExternal_accountsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['parent'] !== undefined) {
							qs['parent'] = additionalFields['parent'];
						}

						if (additionalFields['languageCode'] !== undefined) {
							qs['languageCode'] = additionalFields['languageCode'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subledger:FinanceAccountsByNumberGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/accounts/${this.getNodeParameter('FinanceAccountsByNumberGet_number', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceAccountsByNumberGet_propertyId_value = this.getNodeParameter(
							'FinanceAccountsByNumberGet_propertyId',
							i,
						);
						if (
							FinanceAccountsByNumberGet_propertyId_value !== undefined &&
							FinanceAccountsByNumberGet_propertyId_value !== '' &&
							(!Array.isArray(FinanceAccountsByNumberGet_propertyId_value) ||
								FinanceAccountsByNumberGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = FinanceAccountsByNumberGet_propertyId_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceAccountsByNumberGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['transactionLimit'] !== undefined) {
							qs['transactionLimit'] = additionalFields['transactionLimit'];
						}

						if (additionalFields['includeArchived'] !== undefined) {
							qs['includeArchived'] = additionalFields['includeArchived'];
						}

						if (additionalFields['accountingSchema'] !== undefined) {
							qs['accountingSchema'] = additionalFields['accountingSchema'];
						}

						if (additionalFields['languageCode'] !== undefined) {
							qs['languageCode'] = additionalFields['languageCode'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subledger:FinanceAccountsChild-accountsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/accounts/child-accounts`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceAccountsChild_accountsGet_propertyId_value = this.getNodeParameter(
							'FinanceAccountsChild_accountsGet_propertyId',
							i,
						);
						if (
							FinanceAccountsChild_accountsGet_propertyId_value !== undefined &&
							FinanceAccountsChild_accountsGet_propertyId_value !== '' &&
							(!Array.isArray(FinanceAccountsChild_accountsGet_propertyId_value) ||
								FinanceAccountsChild_accountsGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = FinanceAccountsChild_accountsGet_propertyId_value;
						}

						const FinanceAccountsChild_accountsGet_parent_value = this.getNodeParameter(
							'FinanceAccountsChild_accountsGet_parent',
							i,
						);
						if (
							FinanceAccountsChild_accountsGet_parent_value !== undefined &&
							FinanceAccountsChild_accountsGet_parent_value !== '' &&
							(!Array.isArray(FinanceAccountsChild_accountsGet_parent_value) ||
								FinanceAccountsChild_accountsGet_parent_value.length > 0)
						) {
							qs['parent'] = FinanceAccountsChild_accountsGet_parent_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceAccountsChild_accountsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['languageCode'] !== undefined) {
							qs['languageCode'] = additionalFields['languageCode'];
						}

						if (additionalFields['accountingSchema'] !== undefined) {
							qs['accountingSchema'] = additionalFields['accountingSchema'];
						}

						if (additionalFields['includeArchived'] !== undefined) {
							qs['includeArchived'] = additionalFields['includeArchived'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'types:FinanceTypesCurrenciesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/types/currencies`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'types:FinanceTypesPayment-methodsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/types/payment-methods`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'types:FinanceTypesService-typesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/types/service-types`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'types:FinanceTypesVatGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/finance/v1/types/vat`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const FinanceTypesVatGet_isoCountryCode_value = this.getNodeParameter(
							'FinanceTypesVatGet_isoCountryCode',
							i,
						);
						if (
							FinanceTypesVatGet_isoCountryCode_value !== undefined &&
							FinanceTypesVatGet_isoCountryCode_value !== '' &&
							(!Array.isArray(FinanceTypesVatGet_isoCountryCode_value) ||
								FinanceTypesVatGet_isoCountryCode_value.length > 0)
						) {
							qs['isoCountryCode'] = FinanceTypesVatGet_isoCountryCode_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'FinanceTypesVatGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['atDate'] !== undefined) {
							qs['atDate'] = additionalFields['atDate'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'uiintegrations:IntegrationUi-integrationsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/integration/v1/ui-integrations`;
						requestOptions.baseURL = 'https://integration.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'uiintegrations:IntegrationUi-integrationsByTargetByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/integration/v1/ui-integrations/${this.getNodeParameter('IntegrationUi_integrationsByTargetByIdGet_target', i) as string}/${this.getNodeParameter('IntegrationUi_integrationsByTargetByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://integration.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'uiintegrations:IntegrationUi-integrationsByTargetByIdPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/integration/v1/ui-integrations/${this.getNodeParameter('IntegrationUi_integrationsByTargetByIdPut_target', i) as string}/${this.getNodeParameter('IntegrationUi_integrationsByTargetByIdPut_id', i) as string}`;
						requestOptions.baseURL = 'https://integration.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'uiintegrations:IntegrationUi-integrationsByTargetByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/integration/v1/ui-integrations/${this.getNodeParameter('IntegrationUi_integrationsByTargetByIdDelete_target', i) as string}/${this.getNodeParameter('IntegrationUi_integrationsByTargetByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://integration.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'uiintegrations:IntegrationUi-integrationsByTargetGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/integration/v1/ui-integrations/${this.getNodeParameter('IntegrationUi_integrationsByTargetGet_target', i) as string}`;
						requestOptions.baseURL = 'https://integration.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'uiintegrations:IntegrationUi-integrationsByTargetPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/integration/v1/ui-integrations/${this.getNodeParameter('IntegrationUi_integrationsByTargetPost_target', i) as string}`;
						requestOptions.baseURL = 'https://integration.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'uiintegrations:IntegrationUi-integrationsByTargetById$testGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/integration/v1/ui-integrations/${this.getNodeParameter('IntegrationUi_integrationsByTargetById_testGet_target', i) as string}/${this.getNodeParameter('IntegrationUi_integrationsByTargetById_testGet_id', i) as string}/$test`;
						requestOptions.baseURL = 'https://integration.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'property:InventoryPropertiesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/inventory/v1/properties`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryPropertiesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['status'] !== undefined) {
							qs['status'] = additionalFields['status'];
						}

						if (additionalFields['includeArchived'] !== undefined) {
							qs['includeArchived'] = additionalFields['includeArchived'];
						}

						if (additionalFields['countryCode'] !== undefined) {
							qs['countryCode'] = additionalFields['countryCode'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'property:InventoryPropertiesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/inventory/v1/properties`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryPropertiesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'property:InventoryProperties$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/inventory/v1/properties/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'property:InventoryPropertiesByIdHead': {
						requestOptions.method = 'HEAD';
						requestOptions.url = `/inventory/v1/properties/${this.getNodeParameter('InventoryPropertiesByIdHead_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'property:InventoryPropertiesByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/inventory/v1/properties/${this.getNodeParameter('InventoryPropertiesByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryPropertiesByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['languages'] !== undefined) {
							qs['languages'] = additionalFields['languages'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'property:InventoryPropertiesByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/inventory/v1/properties/${this.getNodeParameter('InventoryPropertiesByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'propertyactions:InventoryProperty-actionsByIdClonePost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/inventory/v1/property-actions/${this.getNodeParameter('InventoryProperty_actionsByIdClonePost_id', i) as string}/clone`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryProperty_actionsByIdClonePost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'propertyactions:InventoryProperty-actionsByIdArchivePut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/inventory/v1/property-actions/${this.getNodeParameter('InventoryProperty_actionsByIdArchivePut_id', i) as string}/archive`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'propertyactions:InventoryProperty-actionsByIdSet-livePut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/inventory/v1/property-actions/${this.getNodeParameter('InventoryProperty_actionsByIdSet_livePut_id', i) as string}/set-live`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'propertyactions:InventoryProperty-actionsByIdResetPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/inventory/v1/property-actions/${this.getNodeParameter('InventoryProperty_actionsByIdResetPut_id', i) as string}/reset`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'types:InventoryTypesCountriesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/inventory/v1/types/countries`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unit:InventoryUnitsByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/inventory/v1/units/${this.getNodeParameter('InventoryUnitsByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unit:InventoryUnitsByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/inventory/v1/units/${this.getNodeParameter('InventoryUnitsByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryUnitsByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['languages'] !== undefined) {
							qs['languages'] = additionalFields['languages'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unit:InventoryUnitsByIdHead': {
						requestOptions.method = 'HEAD';
						requestOptions.url = `/inventory/v1/units/${this.getNodeParameter('InventoryUnitsByIdHead_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unit:InventoryUnitsByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/inventory/v1/units/${this.getNodeParameter('InventoryUnitsByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unit:InventoryUnitsPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/inventory/v1/units`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const InventoryUnitsPatch_unitIds_value = this.getNodeParameter(
							'InventoryUnitsPatch_unitIds',
							i,
						);
						if (
							InventoryUnitsPatch_unitIds_value !== undefined &&
							InventoryUnitsPatch_unitIds_value !== '' &&
							(!Array.isArray(InventoryUnitsPatch_unitIds_value) ||
								InventoryUnitsPatch_unitIds_value.length > 0)
						) {
							qs['unitIds'] = InventoryUnitsPatch_unitIds_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unit:InventoryUnitsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/inventory/v1/units`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryUnitsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['unitGroupId'] !== undefined) {
							qs['unitGroupId'] = additionalFields['unitGroupId'];
						}

						if (additionalFields['unitGroupIds'] !== undefined) {
							qs['unitGroupIds'] = additionalFields['unitGroupIds'];
						}

						if (additionalFields['unitAttributeIds'] !== undefined) {
							qs['unitAttributeIds'] = additionalFields['unitAttributeIds'];
						}

						if (additionalFields['isOccupied'] !== undefined) {
							qs['isOccupied'] = additionalFields['isOccupied'];
						}

						if (additionalFields['maintenanceType'] !== undefined) {
							qs['maintenanceType'] = additionalFields['maintenanceType'];
						}

						if (additionalFields['condition'] !== undefined) {
							qs['condition'] = additionalFields['condition'];
						}

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unit:InventoryUnitsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/inventory/v1/units`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryUnitsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unit:InventoryUnits$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/inventory/v1/units/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryUnits_countGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['unitGroupId'] !== undefined) {
							qs['unitGroupId'] = additionalFields['unitGroupId'];
						}

						if (additionalFields['unitGroupIds'] !== undefined) {
							qs['unitGroupIds'] = additionalFields['unitGroupIds'];
						}

						if (additionalFields['unitAttributeIds'] !== undefined) {
							qs['unitAttributeIds'] = additionalFields['unitAttributeIds'];
						}

						if (additionalFields['isOccupied'] !== undefined) {
							qs['isOccupied'] = additionalFields['isOccupied'];
						}

						if (additionalFields['maintenanceType'] !== undefined) {
							qs['maintenanceType'] = additionalFields['maintenanceType'];
						}

						if (additionalFields['condition'] !== undefined) {
							qs['condition'] = additionalFields['condition'];
						}

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unit:InventoryUnitsBulkPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/inventory/v1/units/bulk`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryUnitsBulkPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitattribute:InventoryUnit-attributesByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/inventory/v1/unit-attributes/${this.getNodeParameter('InventoryUnit_attributesByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitattribute:InventoryUnit-attributesByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/inventory/v1/unit-attributes/${this.getNodeParameter('InventoryUnit_attributesByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitattribute:InventoryUnit-attributesByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/inventory/v1/unit-attributes/${this.getNodeParameter('InventoryUnit_attributesByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitattribute:InventoryUnit-attributesByIdHead': {
						requestOptions.method = 'HEAD';
						requestOptions.url = `/inventory/v1/unit-attributes/${this.getNodeParameter('InventoryUnit_attributesByIdHead_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitattribute:InventoryUnit-attributesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/inventory/v1/unit-attributes`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryUnit_attributesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitattribute:InventoryUnit-attributesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/inventory/v1/unit-attributes`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryUnit_attributesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitgroup:InventoryUnit-groupsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/inventory/v1/unit-groups`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryUnit_groupsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitgroup:InventoryUnit-groupsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/inventory/v1/unit-groups`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryUnit_groupsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['unitGroupTypes'] !== undefined) {
							qs['unitGroupTypes'] = additionalFields['unitGroupTypes'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitgroup:InventoryUnit-groups$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/inventory/v1/unit-groups/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryUnit_groups_countGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['unitGroupTypes'] !== undefined) {
							qs['unitGroupTypes'] = additionalFields['unitGroupTypes'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitgroup:InventoryUnit-groupsByIdHead': {
						requestOptions.method = 'HEAD';
						requestOptions.url = `/inventory/v1/unit-groups/${this.getNodeParameter('InventoryUnit_groupsByIdHead_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitgroup:InventoryUnit-groupsByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/inventory/v1/unit-groups/${this.getNodeParameter('InventoryUnit_groupsByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'InventoryUnit_groupsByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['languages'] !== undefined) {
							qs['languages'] = additionalFields['languages'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitgroup:InventoryUnit-groupsByIdPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/inventory/v1/unit-groups/${this.getNodeParameter('InventoryUnit_groupsByIdPut_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'unitgroup:InventoryUnit-groupsByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/inventory/v1/unit-groups/${this.getNodeParameter('InventoryUnit_groupsByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'bookinglogs:LogsBookingReservationGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/logs/v1/booking/reservation`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'LogsBookingReservationGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['reservationIds'] !== undefined) {
							qs['reservationIds'] = additionalFields['reservationIds'];
						}

						if (additionalFields['eventTypes'] !== undefined) {
							qs['eventTypes'] = additionalFields['eventTypes'];
						}

						if (additionalFields['clientIds'] !== undefined) {
							qs['clientIds'] = additionalFields['clientIds'];
						}

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['subjectIds'] !== undefined) {
							qs['subjectIds'] = additionalFields['subjectIds'];
						}

						if (additionalFields['dateFilter'] !== undefined) {
							qs['dateFilter'] = additionalFields['dateFilter'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'financelogs:LogsFinanceFolioGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/logs/v1/finance/folio`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'LogsFinanceFolioGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['folioIds'] !== undefined) {
							qs['folioIds'] = additionalFields['folioIds'];
						}

						if (additionalFields['eventTypes'] !== undefined) {
							qs['eventTypes'] = additionalFields['eventTypes'];
						}

						if (additionalFields['clientIds'] !== undefined) {
							qs['clientIds'] = additionalFields['clientIds'];
						}

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['subjectIds'] !== undefined) {
							qs['subjectIds'] = additionalFields['subjectIds'];
						}

						if (additionalFields['dateFilter'] !== undefined) {
							qs['dateFilter'] = additionalFields['dateFilter'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'financelogs:LogsFinanceNight-auditGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/logs/v1/finance/night-audit`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'LogsFinanceNight_auditGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['statuses'] !== undefined) {
							qs['statuses'] = additionalFields['statuses'];
						}

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['subjectIds'] !== undefined) {
							qs['subjectIds'] = additionalFields['subjectIds'];
						}

						if (additionalFields['dateFilter'] !== undefined) {
							qs['dateFilter'] = additionalFields['dateFilter'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'financelogs:LogsFinanceTransactions-exportGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/logs/v1/finance/transactions-export`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'LogsFinanceTransactions_exportGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['types'] !== undefined) {
							qs['types'] = additionalFields['types'];
						}

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['subjectIds'] !== undefined) {
							qs['subjectIds'] = additionalFields['subjectIds'];
						}

						if (additionalFields['dateFilter'] !== undefined) {
							qs['dateFilter'] = additionalFields['dateFilter'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'maintenance:OperationsMaintenancesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/operations/v1/maintenances`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'OperationsMaintenancesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['unitId'] !== undefined) {
							qs['unitId'] = additionalFields['unitId'];
						}

						if (additionalFields['from'] !== undefined) {
							qs['from'] = additionalFields['from'];
						}

						if (additionalFields['to'] !== undefined) {
							qs['to'] = additionalFields['to'];
						}

						if (additionalFields['types'] !== undefined) {
							qs['types'] = additionalFields['types'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'maintenance:OperationsMaintenancesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/operations/v1/maintenances`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'OperationsMaintenancesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'maintenance:OperationsMaintenances$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/operations/v1/maintenances/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'OperationsMaintenances_countGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['unitId'] !== undefined) {
							qs['unitId'] = additionalFields['unitId'];
						}

						if (additionalFields['from'] !== undefined) {
							qs['from'] = additionalFields['from'];
						}

						if (additionalFields['to'] !== undefined) {
							qs['to'] = additionalFields['to'];
						}

						if (additionalFields['types'] !== undefined) {
							qs['types'] = additionalFields['types'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'maintenance:OperationsMaintenancesBulkPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/operations/v1/maintenances/bulk`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'OperationsMaintenancesBulkPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'maintenance:OperationsMaintenancesByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/operations/v1/maintenances/${this.getNodeParameter('OperationsMaintenancesByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'maintenance:OperationsMaintenancesByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/operations/v1/maintenances/${this.getNodeParameter('OperationsMaintenancesByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'maintenance:OperationsMaintenancesByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/operations/v1/maintenances/${this.getNodeParameter('OperationsMaintenancesByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'OperationsMaintenancesByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'maintenance:OperationsMaintenancesByIdHead': {
						requestOptions.method = 'HEAD';
						requestOptions.url = `/operations/v1/maintenances/${this.getNodeParameter('OperationsMaintenancesByIdHead_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'operations:OperationsNight-auditPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/operations/v1/night-audit`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const OperationsNight_auditPut_propertyId_value = this.getNodeParameter(
							'OperationsNight_auditPut_propertyId',
							i,
						);
						if (
							OperationsNight_auditPut_propertyId_value !== undefined &&
							OperationsNight_auditPut_propertyId_value !== '' &&
							(!Array.isArray(OperationsNight_auditPut_propertyId_value) ||
								OperationsNight_auditPut_propertyId_value.length > 0)
						) {
							qs['propertyId'] = OperationsNight_auditPut_propertyId_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'OperationsNight_auditPut_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['setReservationsToNoShow'] !== undefined) {
							qs['setReservationsToNoShow'] = additionalFields['setReservationsToNoShow'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'operations:OperationsUnits-conditionPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/operations/v1/units-condition`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'agecategory:SettingsAge-categoriesByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/age-categories/${this.getNodeParameter('SettingsAge_categoriesByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsAge_categoriesByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['languages'] !== undefined) {
							qs['languages'] = additionalFields['languages'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'agecategory:SettingsAge-categoriesByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/settings/v1/age-categories/${this.getNodeParameter('SettingsAge_categoriesByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'agecategory:SettingsAge-categoriesByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/settings/v1/age-categories/${this.getNodeParameter('SettingsAge_categoriesByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'agecategory:SettingsAge-categoriesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/settings/v1/age-categories`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsAge_categoriesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'agecategory:SettingsAge-categoriesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/age-categories`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const SettingsAge_categoriesGet_propertyId_value = this.getNodeParameter(
							'SettingsAge_categoriesGet_propertyId',
							i,
						);
						if (
							SettingsAge_categoriesGet_propertyId_value !== undefined &&
							SettingsAge_categoriesGet_propertyId_value !== '' &&
							(!Array.isArray(SettingsAge_categoriesGet_propertyId_value) ||
								SettingsAge_categoriesGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = SettingsAge_categoriesGet_propertyId_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'cancellationpolicy:RateplanCancellation-policiesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/rateplan/v1/cancellation-policies`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanCancellation_policiesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'cancellationpolicy:RateplanCancellation-policiesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/cancellation-policies`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanCancellation_policiesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'cancellationpolicy:RateplanCancellation-policiesByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/cancellation-policies/${this.getNodeParameter('RateplanCancellation_policiesByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanCancellation_policiesByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['languages'] !== undefined) {
							qs['languages'] = additionalFields['languages'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'cancellationpolicy:RateplanCancellation-policiesByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/rateplan/v1/cancellation-policies/${this.getNodeParameter('RateplanCancellation_policiesByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'cancellationpolicy:RateplanCancellation-policiesByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/rateplan/v1/cancellation-policies/${this.getNodeParameter('RateplanCancellation_policiesByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'company:RateplanCompaniesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/rateplan/v1/companies`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanCompaniesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'company:RateplanCompaniesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/companies`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanCompaniesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['ratePlanIds'] !== undefined) {
							qs['ratePlanIds'] = additionalFields['ratePlanIds'];
						}

						if (additionalFields['corporateCodes'] !== undefined) {
							qs['corporateCodes'] = additionalFields['corporateCodes'];
						}

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'company:RateplanCompaniesByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/companies/${this.getNodeParameter('RateplanCompaniesByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'company:RateplanCompaniesByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/rateplan/v1/companies/${this.getNodeParameter('RateplanCompaniesByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'company:RateplanCompaniesByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/rateplan/v1/companies/${this.getNodeParameter('RateplanCompaniesByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'corporatecodes:RateplanCorporate-codesCodesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/corporate-codes/codes`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanCorporate_codesCodesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'noshowpolicy:RateplanNo-show-policiesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/rateplan/v1/no-show-policies`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanNo_show_policiesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'noshowpolicy:RateplanNo-show-policiesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/no-show-policies`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanNo_show_policiesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'noshowpolicy:RateplanNo-show-policiesByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/no-show-policies/${this.getNodeParameter('RateplanNo_show_policiesByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanNo_show_policiesByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['languages'] !== undefined) {
							qs['languages'] = additionalFields['languages'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'noshowpolicy:RateplanNo-show-policiesByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/rateplan/v1/no-show-policies/${this.getNodeParameter('RateplanNo_show_policiesByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'noshowpolicy:RateplanNo-show-policiesByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/rateplan/v1/no-show-policies/${this.getNodeParameter('RateplanNo_show_policiesByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'promocodes:RateplanPromo-codesCodesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/promo-codes/codes`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanPromo_codesCodesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rate:RateplanRate-plansByIdRatesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/rate-plans/${this.getNodeParameter('RateplanRate_plansByIdRatesGet_id', i) as string}/rates`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const RateplanRate_plansByIdRatesGet_from_value = this.getNodeParameter(
							'RateplanRate_plansByIdRatesGet_from',
							i,
						);
						if (
							RateplanRate_plansByIdRatesGet_from_value !== undefined &&
							RateplanRate_plansByIdRatesGet_from_value !== '' &&
							(!Array.isArray(RateplanRate_plansByIdRatesGet_from_value) ||
								RateplanRate_plansByIdRatesGet_from_value.length > 0)
						) {
							qs['from'] = RateplanRate_plansByIdRatesGet_from_value;
						}

						const RateplanRate_plansByIdRatesGet_to_value = this.getNodeParameter(
							'RateplanRate_plansByIdRatesGet_to',
							i,
						);
						if (
							RateplanRate_plansByIdRatesGet_to_value !== undefined &&
							RateplanRate_plansByIdRatesGet_to_value !== '' &&
							(!Array.isArray(RateplanRate_plansByIdRatesGet_to_value) ||
								RateplanRate_plansByIdRatesGet_to_value.length > 0)
						) {
							qs['to'] = RateplanRate_plansByIdRatesGet_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanRate_plansByIdRatesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rate:RateplanRate-plansByIdRatesPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/rateplan/v1/rate-plans/${this.getNodeParameter('RateplanRate_plansByIdRatesPut_id', i) as string}/rates`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rate:RateplanRate-plansByIdRatesDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/rateplan/v1/rate-plans/${this.getNodeParameter('RateplanRate_plansByIdRatesDelete_id', i) as string}/rates`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const RateplanRate_plansByIdRatesDelete_from_value = this.getNodeParameter(
							'RateplanRate_plansByIdRatesDelete_from',
							i,
						);
						if (
							RateplanRate_plansByIdRatesDelete_from_value !== undefined &&
							RateplanRate_plansByIdRatesDelete_from_value !== '' &&
							(!Array.isArray(RateplanRate_plansByIdRatesDelete_from_value) ||
								RateplanRate_plansByIdRatesDelete_from_value.length > 0)
						) {
							qs['from'] = RateplanRate_plansByIdRatesDelete_from_value;
						}

						const RateplanRate_plansByIdRatesDelete_to_value = this.getNodeParameter(
							'RateplanRate_plansByIdRatesDelete_to',
							i,
						);
						if (
							RateplanRate_plansByIdRatesDelete_to_value !== undefined &&
							RateplanRate_plansByIdRatesDelete_to_value !== '' &&
							(!Array.isArray(RateplanRate_plansByIdRatesDelete_to_value) ||
								RateplanRate_plansByIdRatesDelete_to_value.length > 0)
						) {
							qs['to'] = RateplanRate_plansByIdRatesDelete_to_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rate:RateplanRate-plansByIdRates$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/rate-plans/${this.getNodeParameter('RateplanRate_plansByIdRates_countGet_id', i) as string}/rates/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const RateplanRate_plansByIdRates_countGet_from_value = this.getNodeParameter(
							'RateplanRate_plansByIdRates_countGet_from',
							i,
						);
						if (
							RateplanRate_plansByIdRates_countGet_from_value !== undefined &&
							RateplanRate_plansByIdRates_countGet_from_value !== '' &&
							(!Array.isArray(RateplanRate_plansByIdRates_countGet_from_value) ||
								RateplanRate_plansByIdRates_countGet_from_value.length > 0)
						) {
							qs['from'] = RateplanRate_plansByIdRates_countGet_from_value;
						}

						const RateplanRate_plansByIdRates_countGet_to_value = this.getNodeParameter(
							'RateplanRate_plansByIdRates_countGet_to',
							i,
						);
						if (
							RateplanRate_plansByIdRates_countGet_to_value !== undefined &&
							RateplanRate_plansByIdRates_countGet_to_value !== '' &&
							(!Array.isArray(RateplanRate_plansByIdRates_countGet_to_value) ||
								RateplanRate_plansByIdRates_countGet_to_value.length > 0)
						) {
							qs['to'] = RateplanRate_plansByIdRates_countGet_to_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rate:RateplanRatesPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/rateplan/v1/rates`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const RateplanRatesPatch_ratePlanIds_value = this.getNodeParameter(
							'RateplanRatesPatch_ratePlanIds',
							i,
						);
						if (
							RateplanRatesPatch_ratePlanIds_value !== undefined &&
							RateplanRatesPatch_ratePlanIds_value !== '' &&
							(!Array.isArray(RateplanRatesPatch_ratePlanIds_value) ||
								RateplanRatesPatch_ratePlanIds_value.length > 0)
						) {
							qs['ratePlanIds'] = RateplanRatesPatch_ratePlanIds_value;
						}

						const RateplanRatesPatch_from_value = this.getNodeParameter(
							'RateplanRatesPatch_from',
							i,
						);
						if (
							RateplanRatesPatch_from_value !== undefined &&
							RateplanRatesPatch_from_value !== '' &&
							(!Array.isArray(RateplanRatesPatch_from_value) ||
								RateplanRatesPatch_from_value.length > 0)
						) {
							qs['from'] = RateplanRatesPatch_from_value;
						}

						const RateplanRatesPatch_to_value = this.getNodeParameter('RateplanRatesPatch_to', i);
						if (
							RateplanRatesPatch_to_value !== undefined &&
							RateplanRatesPatch_to_value !== '' &&
							(!Array.isArray(RateplanRatesPatch_to_value) ||
								RateplanRatesPatch_to_value.length > 0)
						) {
							qs['to'] = RateplanRatesPatch_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanRatesPatch_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['weekDays'] !== undefined) {
							qs['weekDays'] = additionalFields['weekDays'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rateplan:RateplanRate-plansGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/rate-plans`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanRate_plansGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['ratePlanCodes'] !== undefined) {
							qs['ratePlanCodes'] = additionalFields['ratePlanCodes'];
						}

						if (additionalFields['includedServiceIds'] !== undefined) {
							qs['includedServiceIds'] = additionalFields['includedServiceIds'];
						}

						if (additionalFields['channelCodes'] !== undefined) {
							qs['channelCodes'] = additionalFields['channelCodes'];
						}

						if (additionalFields['promoCodes'] !== undefined) {
							qs['promoCodes'] = additionalFields['promoCodes'];
						}

						if (additionalFields['companyIds'] !== undefined) {
							qs['companyIds'] = additionalFields['companyIds'];
						}

						if (additionalFields['baseRatePlanIds'] !== undefined) {
							qs['baseRatePlanIds'] = additionalFields['baseRatePlanIds'];
						}

						if (additionalFields['unitGroupIds'] !== undefined) {
							qs['unitGroupIds'] = additionalFields['unitGroupIds'];
						}

						if (additionalFields['timeSliceDefinitionIds'] !== undefined) {
							qs['timeSliceDefinitionIds'] = additionalFields['timeSliceDefinitionIds'];
						}

						if (additionalFields['unitGroupTypes'] !== undefined) {
							qs['unitGroupTypes'] = additionalFields['unitGroupTypes'];
						}

						if (additionalFields['timeSliceTemplate'] !== undefined) {
							qs['timeSliceTemplate'] = additionalFields['timeSliceTemplate'];
						}

						if (additionalFields['minGuaranteeTypes'] !== undefined) {
							qs['minGuaranteeTypes'] = additionalFields['minGuaranteeTypes'];
						}

						if (additionalFields['cancellationPolicyIds'] !== undefined) {
							qs['cancellationPolicyIds'] = additionalFields['cancellationPolicyIds'];
						}

						if (additionalFields['noShowPolicyIds'] !== undefined) {
							qs['noShowPolicyIds'] = additionalFields['noShowPolicyIds'];
						}

						if (additionalFields['isDerived'] !== undefined) {
							qs['isDerived'] = additionalFields['isDerived'];
						}

						if (additionalFields['derivationLevelFilter'] !== undefined) {
							qs['derivationLevelFilter'] = additionalFields['derivationLevelFilter'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rateplan:RateplanRate-plansPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/rateplan/v1/rate-plans`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanRate_plansPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rateplan:RateplanRate-plansPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/rateplan/v1/rate-plans`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const RateplanRate_plansPatch_ratePlanIds_value = this.getNodeParameter(
							'RateplanRate_plansPatch_ratePlanIds',
							i,
						);
						if (
							RateplanRate_plansPatch_ratePlanIds_value !== undefined &&
							RateplanRate_plansPatch_ratePlanIds_value !== '' &&
							(!Array.isArray(RateplanRate_plansPatch_ratePlanIds_value) ||
								RateplanRate_plansPatch_ratePlanIds_value.length > 0)
						) {
							qs['ratePlanIds'] = RateplanRate_plansPatch_ratePlanIds_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rateplan:RateplanRate-plansDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/rateplan/v1/rate-plans`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const RateplanRate_plansDelete_ratePlanIds_value = this.getNodeParameter(
							'RateplanRate_plansDelete_ratePlanIds',
							i,
						);
						if (
							RateplanRate_plansDelete_ratePlanIds_value !== undefined &&
							RateplanRate_plansDelete_ratePlanIds_value !== '' &&
							(!Array.isArray(RateplanRate_plansDelete_ratePlanIds_value) ||
								RateplanRate_plansDelete_ratePlanIds_value.length > 0)
						) {
							qs['ratePlanIds'] = RateplanRate_plansDelete_ratePlanIds_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rateplan:RateplanRate-plans$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/rate-plans/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanRate_plans_countGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['ratePlanCodes'] !== undefined) {
							qs['ratePlanCodes'] = additionalFields['ratePlanCodes'];
						}

						if (additionalFields['includedServiceIds'] !== undefined) {
							qs['includedServiceIds'] = additionalFields['includedServiceIds'];
						}

						if (additionalFields['channelCodes'] !== undefined) {
							qs['channelCodes'] = additionalFields['channelCodes'];
						}

						if (additionalFields['promoCodes'] !== undefined) {
							qs['promoCodes'] = additionalFields['promoCodes'];
						}

						if (additionalFields['companyIds'] !== undefined) {
							qs['companyIds'] = additionalFields['companyIds'];
						}

						if (additionalFields['baseRatePlanIds'] !== undefined) {
							qs['baseRatePlanIds'] = additionalFields['baseRatePlanIds'];
						}

						if (additionalFields['unitGroupIds'] !== undefined) {
							qs['unitGroupIds'] = additionalFields['unitGroupIds'];
						}

						if (additionalFields['timeSliceDefinitionIds'] !== undefined) {
							qs['timeSliceDefinitionIds'] = additionalFields['timeSliceDefinitionIds'];
						}

						if (additionalFields['unitGroupTypes'] !== undefined) {
							qs['unitGroupTypes'] = additionalFields['unitGroupTypes'];
						}

						if (additionalFields['timeSliceTemplate'] !== undefined) {
							qs['timeSliceTemplate'] = additionalFields['timeSliceTemplate'];
						}

						if (additionalFields['minGuaranteeTypes'] !== undefined) {
							qs['minGuaranteeTypes'] = additionalFields['minGuaranteeTypes'];
						}

						if (additionalFields['cancellationPolicyIds'] !== undefined) {
							qs['cancellationPolicyIds'] = additionalFields['cancellationPolicyIds'];
						}

						if (additionalFields['noShowPolicyIds'] !== undefined) {
							qs['noShowPolicyIds'] = additionalFields['noShowPolicyIds'];
						}

						if (additionalFields['isDerived'] !== undefined) {
							qs['isDerived'] = additionalFields['isDerived'];
						}

						if (additionalFields['derivationLevelFilter'] !== undefined) {
							qs['derivationLevelFilter'] = additionalFields['derivationLevelFilter'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rateplan:RateplanRate-plansByIdHead': {
						requestOptions.method = 'HEAD';
						requestOptions.url = `/rateplan/v1/rate-plans/${this.getNodeParameter('RateplanRate_plansByIdHead_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rateplan:RateplanRate-plansByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/rate-plans/${this.getNodeParameter('RateplanRate_plansByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanRate_plansByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['languages'] !== undefined) {
							qs['languages'] = additionalFields['languages'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rateplan:RateplanRate-plansByIdPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/rateplan/v1/rate-plans/${this.getNodeParameter('RateplanRate_plansByIdPut_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'rateplan:RateplanRate-plansByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/rateplan/v1/rate-plans/${this.getNodeParameter('RateplanRate_plansByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'service:RateplanServicesPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/rateplan/v1/services`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanServicesPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'service:RateplanServicesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/services`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanServicesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (additionalFields['onlySoldAsExtras'] !== undefined) {
							qs['onlySoldAsExtras'] = additionalFields['onlySoldAsExtras'];
						}

						if (additionalFields['channelCodes'] !== undefined) {
							qs['channelCodes'] = additionalFields['channelCodes'];
						}

						if (additionalFields['serviceTypes'] !== undefined) {
							qs['serviceTypes'] = additionalFields['serviceTypes'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'service:RateplanServicesByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/rateplan/v1/services/${this.getNodeParameter('RateplanServicesByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'service:RateplanServicesByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/services/${this.getNodeParameter('RateplanServicesByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanServicesByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['languages'] !== undefined) {
							qs['languages'] = additionalFields['languages'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'service:RateplanServicesByIdHead': {
						requestOptions.method = 'HEAD';
						requestOptions.url = `/rateplan/v1/services/${this.getNodeParameter('RateplanServicesByIdHead_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'service:RateplanServicesByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/rateplan/v1/services/${this.getNodeParameter('RateplanServicesByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'service:RateplanServices$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/rateplan/v1/services/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'RateplanServices_countGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['textSearch'] !== undefined) {
							qs['textSearch'] = additionalFields['textSearch'];
						}

						if (additionalFields['onlySoldAsExtras'] !== undefined) {
							qs['onlySoldAsExtras'] = additionalFields['onlySoldAsExtras'];
						}

						if (additionalFields['channelCodes'] !== undefined) {
							qs['channelCodes'] = additionalFields['channelCodes'];
						}

						if (additionalFields['serviceTypes'] !== undefined) {
							qs['serviceTypes'] = additionalFields['serviceTypes'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reports:ReportsReportsOrdered-servicesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/reports/v1/reports/ordered-services`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const ReportsReportsOrdered_servicesGet_propertyId_value = this.getNodeParameter(
							'ReportsReportsOrdered_servicesGet_propertyId',
							i,
						);
						if (
							ReportsReportsOrdered_servicesGet_propertyId_value !== undefined &&
							ReportsReportsOrdered_servicesGet_propertyId_value !== '' &&
							(!Array.isArray(ReportsReportsOrdered_servicesGet_propertyId_value) ||
								ReportsReportsOrdered_servicesGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = ReportsReportsOrdered_servicesGet_propertyId_value;
						}

						const ReportsReportsOrdered_servicesGet_serviceIds_value = this.getNodeParameter(
							'ReportsReportsOrdered_servicesGet_serviceIds',
							i,
						);
						if (
							ReportsReportsOrdered_servicesGet_serviceIds_value !== undefined &&
							ReportsReportsOrdered_servicesGet_serviceIds_value !== '' &&
							(!Array.isArray(ReportsReportsOrdered_servicesGet_serviceIds_value) ||
								ReportsReportsOrdered_servicesGet_serviceIds_value.length > 0)
						) {
							qs['serviceIds'] = ReportsReportsOrdered_servicesGet_serviceIds_value;
						}

						const ReportsReportsOrdered_servicesGet_from_value = this.getNodeParameter(
							'ReportsReportsOrdered_servicesGet_from',
							i,
						);
						if (
							ReportsReportsOrdered_servicesGet_from_value !== undefined &&
							ReportsReportsOrdered_servicesGet_from_value !== '' &&
							(!Array.isArray(ReportsReportsOrdered_servicesGet_from_value) ||
								ReportsReportsOrdered_servicesGet_from_value.length > 0)
						) {
							qs['from'] = ReportsReportsOrdered_servicesGet_from_value;
						}

						const ReportsReportsOrdered_servicesGet_to_value = this.getNodeParameter(
							'ReportsReportsOrdered_servicesGet_to',
							i,
						);
						if (
							ReportsReportsOrdered_servicesGet_to_value !== undefined &&
							ReportsReportsOrdered_servicesGet_to_value !== '' &&
							(!Array.isArray(ReportsReportsOrdered_servicesGet_to_value) ||
								ReportsReportsOrdered_servicesGet_to_value.length > 0)
						) {
							qs['to'] = ReportsReportsOrdered_servicesGet_to_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reports:ReportsReportsArrivalsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/reports/v1/reports/arrivals`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const ReportsReportsArrivalsGet_propertyId_value = this.getNodeParameter(
							'ReportsReportsArrivalsGet_propertyId',
							i,
						);
						if (
							ReportsReportsArrivalsGet_propertyId_value !== undefined &&
							ReportsReportsArrivalsGet_propertyId_value !== '' &&
							(!Array.isArray(ReportsReportsArrivalsGet_propertyId_value) ||
								ReportsReportsArrivalsGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = ReportsReportsArrivalsGet_propertyId_value;
						}

						const ReportsReportsArrivalsGet_month_value = this.getNodeParameter(
							'ReportsReportsArrivalsGet_month',
							i,
						);
						if (
							ReportsReportsArrivalsGet_month_value !== undefined &&
							ReportsReportsArrivalsGet_month_value !== '' &&
							(!Array.isArray(ReportsReportsArrivalsGet_month_value) ||
								ReportsReportsArrivalsGet_month_value.length > 0)
						) {
							qs['month'] = ReportsReportsArrivalsGet_month_value;
						}

						const ReportsReportsArrivalsGet_year_value = this.getNodeParameter(
							'ReportsReportsArrivalsGet_year',
							i,
						);
						if (
							ReportsReportsArrivalsGet_year_value !== undefined &&
							ReportsReportsArrivalsGet_year_value !== '' &&
							(!Array.isArray(ReportsReportsArrivalsGet_year_value) ||
								ReportsReportsArrivalsGet_year_value.length > 0)
						) {
							qs['year'] = ReportsReportsArrivalsGet_year_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reports:ReportsReportsProperty-performanceGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/reports/v1/reports/property-performance`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const ReportsReportsProperty_performanceGet_propertyId_value = this.getNodeParameter(
							'ReportsReportsProperty_performanceGet_propertyId',
							i,
						);
						if (
							ReportsReportsProperty_performanceGet_propertyId_value !== undefined &&
							ReportsReportsProperty_performanceGet_propertyId_value !== '' &&
							(!Array.isArray(ReportsReportsProperty_performanceGet_propertyId_value) ||
								ReportsReportsProperty_performanceGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = ReportsReportsProperty_performanceGet_propertyId_value;
						}

						const ReportsReportsProperty_performanceGet_from_value = this.getNodeParameter(
							'ReportsReportsProperty_performanceGet_from',
							i,
						);
						if (
							ReportsReportsProperty_performanceGet_from_value !== undefined &&
							ReportsReportsProperty_performanceGet_from_value !== '' &&
							(!Array.isArray(ReportsReportsProperty_performanceGet_from_value) ||
								ReportsReportsProperty_performanceGet_from_value.length > 0)
						) {
							qs['from'] = ReportsReportsProperty_performanceGet_from_value;
						}

						const ReportsReportsProperty_performanceGet_to_value = this.getNodeParameter(
							'ReportsReportsProperty_performanceGet_to',
							i,
						);
						if (
							ReportsReportsProperty_performanceGet_to_value !== undefined &&
							ReportsReportsProperty_performanceGet_to_value !== '' &&
							(!Array.isArray(ReportsReportsProperty_performanceGet_to_value) ||
								ReportsReportsProperty_performanceGet_to_value.length > 0)
						) {
							qs['to'] = ReportsReportsProperty_performanceGet_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'ReportsReportsProperty_performanceGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['companyIds'] !== undefined) {
							qs['companyIds'] = additionalFields['companyIds'];
						}

						if (additionalFields['ratePlanIds'] !== undefined) {
							qs['ratePlanIds'] = additionalFields['ratePlanIds'];
						}

						if (additionalFields['unitGroupTypes'] !== undefined) {
							qs['unitGroupTypes'] = additionalFields['unitGroupTypes'];
						}

						if (additionalFields['unitGroupIds'] !== undefined) {
							qs['unitGroupIds'] = additionalFields['unitGroupIds'];
						}

						if (additionalFields['timeSliceDefinitionIds'] !== undefined) {
							qs['timeSliceDefinitionIds'] = additionalFields['timeSliceDefinitionIds'];
						}

						if (additionalFields['channelCodes'] !== undefined) {
							qs['channelCodes'] = additionalFields['channelCodes'];
						}

						if (additionalFields['marketSegmentIds'] !== undefined) {
							qs['marketSegmentIds'] = additionalFields['marketSegmentIds'];
						}

						if (additionalFields['travelPurpose'] !== undefined) {
							qs['travelPurpose'] = additionalFields['travelPurpose'];
						}

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reports:ReportsReportsCompany-invoices-vatGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/reports/v1/reports/company-invoices-vat`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const ReportsReportsCompany_invoices_vatGet_propertyId_value = this.getNodeParameter(
							'ReportsReportsCompany_invoices_vatGet_propertyId',
							i,
						);
						if (
							ReportsReportsCompany_invoices_vatGet_propertyId_value !== undefined &&
							ReportsReportsCompany_invoices_vatGet_propertyId_value !== '' &&
							(!Array.isArray(ReportsReportsCompany_invoices_vatGet_propertyId_value) ||
								ReportsReportsCompany_invoices_vatGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = ReportsReportsCompany_invoices_vatGet_propertyId_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'ReportsReportsCompany_invoices_vatGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['companyIds'] !== undefined) {
							qs['companyIds'] = additionalFields['companyIds'];
						}

						if (additionalFields['dateFilter'] !== undefined) {
							qs['dateFilter'] = additionalFields['dateFilter'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'reports:ReportsReportsRevenuesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/reports/v1/reports/revenues`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const ReportsReportsRevenuesGet_propertyId_value = this.getNodeParameter(
							'ReportsReportsRevenuesGet_propertyId',
							i,
						);
						if (
							ReportsReportsRevenuesGet_propertyId_value !== undefined &&
							ReportsReportsRevenuesGet_propertyId_value !== '' &&
							(!Array.isArray(ReportsReportsRevenuesGet_propertyId_value) ||
								ReportsReportsRevenuesGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = ReportsReportsRevenuesGet_propertyId_value;
						}

						const ReportsReportsRevenuesGet_from_value = this.getNodeParameter(
							'ReportsReportsRevenuesGet_from',
							i,
						);
						if (
							ReportsReportsRevenuesGet_from_value !== undefined &&
							ReportsReportsRevenuesGet_from_value !== '' &&
							(!Array.isArray(ReportsReportsRevenuesGet_from_value) ||
								ReportsReportsRevenuesGet_from_value.length > 0)
						) {
							qs['from'] = ReportsReportsRevenuesGet_from_value;
						}

						const ReportsReportsRevenuesGet_to_value = this.getNodeParameter(
							'ReportsReportsRevenuesGet_to',
							i,
						);
						if (
							ReportsReportsRevenuesGet_to_value !== undefined &&
							ReportsReportsRevenuesGet_to_value !== '' &&
							(!Array.isArray(ReportsReportsRevenuesGet_to_value) ||
								ReportsReportsRevenuesGet_to_value.length > 0)
						) {
							qs['to'] = ReportsReportsRevenuesGet_to_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'ReportsReportsRevenuesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['languageCode'] !== undefined) {
							qs['languageCode'] = additionalFields['languageCode'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'capturepolicies:SettingsCapture-policiesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/capture-policies`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsCapture_policiesGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'capturepolicies:SettingsCapture-policiesByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/capture-policies/${this.getNodeParameter('SettingsCapture_policiesByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'capturepolicies:SettingsCapture-policiesByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/settings/v1/capture-policies/${this.getNodeParameter('SettingsCapture_policiesByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'citytax:SettingsCity-taxPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/settings/v1/city-tax`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsCity_taxPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'citytax:SettingsCity-taxGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/city-tax`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsCity_taxGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyId'] !== undefined) {
							qs['propertyId'] = additionalFields['propertyId'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'citytax:SettingsCity-taxByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/city-tax/${this.getNodeParameter('SettingsCity_taxByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsCity_taxByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['languages'] !== undefined) {
							qs['languages'] = additionalFields['languages'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'citytax:SettingsCity-taxByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/settings/v1/city-tax/${this.getNodeParameter('SettingsCity_taxByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'citytax:SettingsCity-taxByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/settings/v1/city-tax/${this.getNodeParameter('SettingsCity_taxByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'customsubaccounts:SettingsSub-accountsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/sub-accounts`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const SettingsSub_accountsGet_propertyId_value = this.getNodeParameter(
							'SettingsSub_accountsGet_propertyId',
							i,
						);
						if (
							SettingsSub_accountsGet_propertyId_value !== undefined &&
							SettingsSub_accountsGet_propertyId_value !== '' &&
							(!Array.isArray(SettingsSub_accountsGet_propertyId_value) ||
								SettingsSub_accountsGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = SettingsSub_accountsGet_propertyId_value;
						}

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsSub_accountsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'customsubaccounts:SettingsSub-accountsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/settings/v1/sub-accounts`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsSub_accountsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'customsubaccounts:SettingsSub-accounts$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/sub-accounts/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const SettingsSub_accounts_countGet_propertyId_value = this.getNodeParameter(
							'SettingsSub_accounts_countGet_propertyId',
							i,
						);
						if (
							SettingsSub_accounts_countGet_propertyId_value !== undefined &&
							SettingsSub_accounts_countGet_propertyId_value !== '' &&
							(!Array.isArray(SettingsSub_accounts_countGet_propertyId_value) ||
								SettingsSub_accounts_countGet_propertyId_value.length > 0)
						) {
							qs['propertyId'] = SettingsSub_accounts_countGet_propertyId_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'customsubaccounts:SettingsSub-accountsByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/sub-accounts/${this.getNodeParameter('SettingsSub_accountsByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'customsubaccounts:SettingsSub-accountsByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/settings/v1/sub-accounts/${this.getNodeParameter('SettingsSub_accountsByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'customsubaccounts:SettingsSub-accountsByIdHead': {
						requestOptions.method = 'HEAD';
						requestOptions.url = `/settings/v1/sub-accounts/${this.getNodeParameter('SettingsSub_accountsByIdHead_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'customsubaccounts:SettingsSub-accountsByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/settings/v1/sub-accounts/${this.getNodeParameter('SettingsSub_accountsByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'featuresettings:SettingsFeaturesByPropertyIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/features/${this.getNodeParameter('SettingsFeaturesByPropertyIdGet_propertyId', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'featuresettings:SettingsFeaturesByPropertyIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/settings/v1/features/${this.getNodeParameter('SettingsFeaturesByPropertyIdPatch_propertyId', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'invoiceaddress:SettingsInvoice-addressGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/invoice-address`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsInvoice_addressGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'invoiceaddress:SettingsInvoice-addressPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/settings/v1/invoice-address`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const SettingsInvoice_addressPut_propertyIds_value = this.getNodeParameter(
							'SettingsInvoice_addressPut_propertyIds',
							i,
						);
						if (
							SettingsInvoice_addressPut_propertyIds_value !== undefined &&
							SettingsInvoice_addressPut_propertyIds_value !== '' &&
							(!Array.isArray(SettingsInvoice_addressPut_propertyIds_value) ||
								SettingsInvoice_addressPut_propertyIds_value.length > 0)
						) {
							qs['propertyIds'] = SettingsInvoice_addressPut_propertyIds_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'invoiceaddress:SettingsInvoice-addressPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/settings/v1/invoice-address`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						const SettingsInvoice_addressPatch_propertyIds_value = this.getNodeParameter(
							'SettingsInvoice_addressPatch_propertyIds',
							i,
						);
						if (
							SettingsInvoice_addressPatch_propertyIds_value !== undefined &&
							SettingsInvoice_addressPatch_propertyIds_value !== '' &&
							(!Array.isArray(SettingsInvoice_addressPatch_propertyIds_value) ||
								SettingsInvoice_addressPatch_propertyIds_value.length > 0)
						) {
							qs['propertyIds'] = SettingsInvoice_addressPatch_propertyIds_value;
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'languages:SettingsLanguagesGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/languages`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'languages:SettingsLanguagesPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/settings/v1/languages`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'marketsegment:SettingsMarket-segmentsByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/market-segments/${this.getNodeParameter('SettingsMarket_segmentsByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'marketsegment:SettingsMarket-segmentsByIdHead': {
						requestOptions.method = 'HEAD';
						requestOptions.url = `/settings/v1/market-segments/${this.getNodeParameter('SettingsMarket_segmentsByIdHead_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'marketsegment:SettingsMarket-segmentsByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/settings/v1/market-segments/${this.getNodeParameter('SettingsMarket_segmentsByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'marketsegment:SettingsMarket-segmentsByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/settings/v1/market-segments/${this.getNodeParameter('SettingsMarket_segmentsByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'marketsegment:SettingsMarket-segmentsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/market-segments`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsMarket_segmentsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (additionalFields['pageNumber'] !== undefined) {
							qs['pageNumber'] = additionalFields['pageNumber'];
						}

						if (additionalFields['pageSize'] !== undefined) {
							qs['pageSize'] = additionalFields['pageSize'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'marketsegment:SettingsMarket-segmentsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/settings/v1/market-segments`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsMarket_segmentsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'marketsegment:SettingsMarket-segments$countGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/market-segments/$count`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsMarket_segments_countGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['propertyIds'] !== undefined) {
							qs['propertyIds'] = additionalFields['propertyIds'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'propertysettings:SettingsPropertiesByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/properties/${this.getNodeParameter('SettingsPropertiesByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'timeslicedefinitions:SettingsPropertiesByPropertyIdTime-slice-definitionsByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/properties/${this.getNodeParameter('SettingsPropertiesByPropertyIdTime_slice_definitionsByIdGet_propertyId', i) as string}/time-slice-definitions/${this.getNodeParameter('SettingsPropertiesByPropertyIdTime_slice_definitionsByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsPropertiesByPropertyIdTime_slice_definitionsByIdGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'timeslicedefinitions:SettingsPropertiesByPropertyIdTime-slice-definitionsByIdPatch': {
						requestOptions.method = 'PATCH';
						requestOptions.url = `/settings/v1/properties/${this.getNodeParameter('SettingsPropertiesByPropertyIdTime_slice_definitionsByIdPatch_propertyId', i) as string}/time-slice-definitions/${this.getNodeParameter('SettingsPropertiesByPropertyIdTime_slice_definitionsByIdPatch_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'timeslicedefinitions:SettingsPropertiesByPropertyIdTime-slice-definitionsByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/settings/v1/properties/${this.getNodeParameter('SettingsPropertiesByPropertyIdTime_slice_definitionsByIdDelete_propertyId', i) as string}/time-slice-definitions/${this.getNodeParameter('SettingsPropertiesByPropertyIdTime_slice_definitionsByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'timeslicedefinitions:SettingsPropertiesByPropertyIdTime-slice-definitionsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/settings/v1/properties/${this.getNodeParameter('SettingsPropertiesByPropertyIdTime_slice_definitionsGet_propertyId', i) as string}/time-slice-definitions`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsPropertiesByPropertyIdTime_slice_definitionsGet_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['expand'] !== undefined) {
							qs['expand'] = additionalFields['expand'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'timeslicedefinitions:SettingsPropertiesByPropertyIdTime-slice-definitionsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/settings/v1/properties/${this.getNodeParameter('SettingsPropertiesByPropertyIdTime_slice_definitionsPost_propertyId', i) as string}/time-slice-definitions`;
						requestOptions.baseURL = 'https://api.apaleo-staging.com';

						const headers: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'SettingsPropertiesByPropertyIdTime_slice_definitionsPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['Idempotency_Key'] !== undefined) {
							headers['Idempotency-Key'] = additionalFields['Idempotency_Key'] as string;
						}

						if (Object.keys(headers).length > 0) {
							requestOptions.headers = { ...requestOptions.headers, ...headers };
						}

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'healthcheck:PingerPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/v1/pinger`;
						requestOptions.baseURL = 'https://webhook.apaleo-staging.com';

						const qs: IDataObject = {};

						// Get additionalFields for optional parameters
						const additionalFields = this.getNodeParameter(
							'PingerPost_additionalFields',
							i,
						) as IDataObject;

						if (additionalFields['url'] !== undefined) {
							qs['url'] = additionalFields['url'];
						}

						if (Object.keys(qs).length > 0) {
							requestOptions.qs = qs;
						}

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subscriptions:SubscriptionsGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/v1/subscriptions`;
						requestOptions.baseURL = 'https://webhook.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subscriptions:SubscriptionsPost': {
						requestOptions.method = 'POST';
						requestOptions.url = `/v1/subscriptions`;
						requestOptions.baseURL = 'https://webhook.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subscriptions:SubscriptionsByIdGet': {
						requestOptions.method = 'GET';
						requestOptions.url = `/v1/subscriptions/${this.getNodeParameter('SubscriptionsByIdGet_id', i) as string}`;
						requestOptions.baseURL = 'https://webhook.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subscriptions:SubscriptionsByIdPut': {
						requestOptions.method = 'PUT';
						requestOptions.url = `/v1/subscriptions/${this.getNodeParameter('SubscriptionsByIdPut_id', i) as string}`;
						requestOptions.baseURL = 'https://webhook.apaleo-staging.com';

						requestOptions.body = this.getNodeParameter('body', i);

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					case 'subscriptions:SubscriptionsByIdDelete': {
						requestOptions.method = 'DELETE';
						requestOptions.url = `/v1/subscriptions/${this.getNodeParameter('SubscriptionsByIdDelete_id', i) as string}`;
						requestOptions.baseURL = 'https://webhook.apaleo-staging.com';

						responseData = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'apaleoOAuth2Api',
							requestOptions,
						);
						break;
					}

					default:
						throw new NodeOperationError(
							this.getNode(),
							`The operation ${operation} for resource ${resource} is not supported!`,
						);
				}

				if (Array.isArray(responseData)) {
					returnData.push(...responseData.map((item) => ({ json: item })));
				} else {
					returnData.push({ json: responseData });
				}
			} catch (error: any) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: error.message } });
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
