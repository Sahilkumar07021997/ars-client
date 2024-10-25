import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';
/**
 * Redux Store Configuration
 * 
 * Configures and creates the Redux store using the root reducer 
 * for managing the application's global state.
 * 
 * @returns {Object} The configured Redux store.
 */
const store = configureStore({
	reducer: rootReducer,
},
);

export default store;