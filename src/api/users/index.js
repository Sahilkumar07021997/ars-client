import Request from "../request";
import BaseApi from "../base-api";
	/**
	 * UserApi Class
	 * 
	 * Provides methods to interact with user-related API endpoints.
	 */
class UserApi extends BaseApi {
	/**
	 * Authenticates a user using username and password.
	 * 
	 * @param {string} username - The username of the user.
	 * @param {string} password - The password of the user.
	 * @returns {Promise<Object>} The result of the authentication request.
	 */
	authenticate = async (username, password) => {
		const request = new Request({
			path: "login",
			subSystem: "AUTH",
			method: "GET",
		});
		request.setHeaders(
			new Headers({
				Authorization: "Basic " + btoa(`${username}:${password}`),
			})
		);
		return await this._execute(request);
	};

	/**
	 * Authenticates a user using single sign-on with Azure token.
	 * 
	 * @param {string} username - The username of the user.
	 * @param {string} azureToken - The Azure token for authentication.
	 * @returns {Promise<Object>} The result of the SSO authentication request.
	 */
	ssoauthenticate = async (username, azureToken) => {
		const request = new Request({
			path: "loginsso",
			subSystem: "AUTH",
			method: "GET",
		});
		request.setHeaders(
			new Headers({
				'Authorization': `Bearer ${azureToken}`
			})
		);
		request.addRequestParameter("un", username);
		return await this._execute(request);
	};

	/**
	 * Retrieves information about the authenticated user.
	 * 
	 * @returns {Promise<Object>} The result of the user information request.
	 */
	getUserInfo = async () => {
		const request = new Request({
			path: "userinfo",
			subSystem: "USER",
			method: "GET",
		});
		return await this._execute(request);
	};

	/**
	 * Retrieves a list of all users.
	 * 
	 * @returns {Promise<Object>} The result of the users list request.
	 */
	getAllUsersList = async () => {
		debugger;
		const request = new Request({
			path: "access-sources",
			subSystem: "USER",
			method: "GET",
		});
		return await this._execute(request);
	};

	/**
	 * Retrieves a list of users based on a search id.
	 * 
	 * @param {string} search - The search term to filter users.
	 * @returns {Promise<Object>} The result of the users list request.
	 */
	getUserById = async (id) => {
		const request = new Request({
			path: "access-sources",
			subSystem: "USER",
			method: "GET",
		});
		request.addRequestParameter("source_id", id);
		return await this._execute(request);
	};
}

const userApi = new UserApi();
export default userApi;
