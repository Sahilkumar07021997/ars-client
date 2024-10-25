import _ from 'lodash';
import { ApiResponseType } from '../constants/api-constants';
import { ApiConfig } from '../configuartions/api-config';

const RequestMapper = new Map();

/**
	 * BaseApi Class
	 * 
	 * Provides methods to execute API requests and construct request URLs.
	 */
export default class BaseApi {
	/**
	 * Executes a network request based on the provided Request object.
	 * 
	 * @param {Request} request - The Request object containing request details.
	 * @param {boolean} isbatch - Indicates if the request is a batch request.
	 * @param {ApiResponseType} apiResponseType - The expected type of the API response.
	 * 
	 * @returns {Promise<Object>} The result of the API call, including data and status.
	 */
	async _execute(request, isbatch, apiResponseType = ApiResponseType.JSON) {
		const requestKey = request.getKey();
		request.timestamp = +new Date();
		RequestMapper.set(requestKey, request.timestamp);

		const url = this._url(request, isbatch);
		const headers = !_.isUndefined(request.headers) ? request.headers : new Headers();

		const options = {
			method: request.method(),
			headers: headers,
			credentials: "include"
		};
		if (!_.isEmpty(request.payload)) {
			options.body = JSON.stringify(request.payload);
		}

		try {
			const result = await fetch(url, options);
			if (result.ok) {
				if (RequestMapper.get(requestKey) !== request.timestamp) {
					return {
						data: null,
						ok: false
					};
				}

				RequestMapper.delete(requestKey);

				if (apiResponseType === ApiResponseType.BUFFER) {
					let data = await result.arrayBuffer();
					return { data: data, ok: true };
				}

				if (
					request._path === "login" ||
					request._path === "loginsso" ||
					request._path === "refreshtoken" ||
					request._path === "clrproxytoken"
				) {
					return { data: result, ok: true };
				} else if (request._path === "logout") {
					window.location = "/login";
				}

				const parsedResult = await result.json();
				return {
					data: parsedResult,
					ok: true
				};
			} else {
				if (result.status === 401) {
					if (window.location.pathname !== "/login" || window.location.pathname !== "/ssologin") {
						window.location = "/login";
						return {
							status: 401,
							ok: false
						};
					}
				}
			}
		} catch (error) {
			console.error(error);
			return {
				ok: false,
				excption: 'xhr',
				description: error
			};
		}
	}

	/**
	 * Constructs the URL for the API request based on the provided Request object.
	 * 
	 * @param {Request} request - The Request object containing the subsystem and path.
	 * @param {boolean} [isbatch=false] - Optional. Indicates if the request is a batch request (default is false).
	 * 
	 * @returns {string} The constructed URL for the API request.
	 */
	_url(request, isbatch = false) {
		let url = `${(isbatch ? ApiConfig().batchApi : ApiConfig().api)}/${ApiConfig().serviceName}/${request.subSystem()}/${request.path()}`;
		const parameters = _.map(request.requestParameters, param => (`${param.name}=${param.value}`)).join('&');
		if (parameters) {
			url = `${url}?${parameters}`;
		}
		return url;
	}
}
