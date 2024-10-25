import { createSlice } from '@reduxjs/toolkit';
/**
 * User Slice
 * 
 * Defines the user-related state and actions for the Redux store.
 * 
 * @returns {Object} The reducer for managing user state.
 */
// Define the initial state for the user slice
const initialState = {
	name: '',
	email: '',
	isLoggedIn: false,
};
// Create a slice for user-related state and actions
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// Action to log in a user
		login(state, action) {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.isLoggedIn = true;
		},
		// Action to log out a user
		logout(state) {
			state.name = '';
			state.email = '';
			state.isLoggedIn = false;
		},
	},
});
// Export the action creators for usage in components
export const { login, logout } = userSlice.actions;

// Export the reducer to be used in the store
export default userSlice.reducer;

