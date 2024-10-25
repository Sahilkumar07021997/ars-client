/**
 * ApiConfig Function
 * 
 * Generates API configuration URLs based on the environment.
 * 
 * @returns {Object} An object containing the home URL, API URL, and batch API URL.
 */
export const ApiConfig = () => {
	const urls = {
		home: 'http://localhost:3000',
		api: 'http://localhost:8000',
		batchApi: 'http://xyz',
		serviceName: 'ARS_SERVICE',
	};
	if (process.env.BRANCH_ENV) {
		return {
			...urls,
			home: process.env.REACT_APP_HOME,
			api: process.env.REACT_APP_API,
			batchApi: process.env.REACT_APP_BATCH_API,
			serviceName: process.env.REACT_APP_SERVICE_NAME
		}
	} else return urls;
}