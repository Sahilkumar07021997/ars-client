import { SubSystem } from "../constants/api-constants";
/**
 * Request Class
 * 
 * Represents a network request with subsystems, paths, methods, and parameters.
 * Provides methods to manage the request's properties and parameters.
 */
export default class Request {
	constructor(info) {
		this._subSystem = SubSystem[info.subSystem];
		this._path = info.path;
		this._method = info.method;
		this._key = "";
		this.requestParameters = [];
	}

	/**
	 * Get the subsystem for the request.
	 * 
	 * @returns {string} The subsystem associated with the request.
	 * @throws {Error} If the subsystem is not defined.
	 */
	subSystem = () => {
		if (!this._subSystem) {
			throw new Error('Request SubSystem is not defined');
		}

		return this._subSystem;
	}

	/**
	 * Get the path for the request.
	 * 
	 * @returns {string} The path associated with the request.
	 * @throws {Error} If the path is not defined.
	 */
	path = () => {
		if (!this._path) {
			throw new Error('Request Path is not defined');
		}
		return this._path;
	}

	/**
	 * Set the payload for the request.
	 * 
	 * @param {Object} payload - The payload to be sent with the request.
	 */
	setPayLoad = payload => {
		this.payload = payload;
	}

	/**
	 * Add a request parameter.
	 * 
	 * @param {string} name - The name of the parameter.
	 * @param {string} value - The value of the parameter, which will be URI-encoded.
	 */
	addRequestParameter = (name, value) => {
		this.requestParameters.push({ name: name, value: encodeURIComponent(value) });
	}

	/**
	 * Add key parameters for the request.
	 * 
	 * @param {string} key - The key parameter to be added.
	 */
	addKeyParams = (key) => {
		this._key = key;
	}

	/**
	 * Get the unique key for the request.
	 * 
	 * @returns {string} The generated key in the format: method_subSystem_path_key.
	 */
	getKey = () => {
		return `${this._method}_${this._subSystem}_${this._path}_${this._key}`;
	}

	/**
	 * Get the method for the request.
	 * 
	 * @returns {string} The method associated with the request.
	 * @throws {Error} If the method is not defined.
	 */
	method = () => {
		if (!this._method) {
			throw new Error('Request Method is not defined');
		}
		return this._method;
	}

	/**
	 * Set the headers for the request.
	 * 
	 * @param {Object} headers - The headers to be included with the request.
	 */
	setHeaders(headers) {
		this.headers = headers;
	}
}
