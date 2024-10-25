import { createSlice } from "@reduxjs/toolkit";
/**
 * Console Slice
 *
 * Defines the console-related state and actions for the Redux store.
 *
 * @returns {Object} The reducer for managing console state.
 */
// Define the initial state for the console slice
const initialState = {
  tabname: "Console",
  tabDisplay:"Console",
  tabid: 0,
  path: "/console",
  consoleSettings: {},
};
// Create a slice for console-related state and actions
const consoleSlice = createSlice({
  name: "console",
  initialState,
  reducers: {
    //Console Actions
    updateTab(state, action) {
      state.tabname = action.payload.tabname;
      state.tabDisplay = action.payload.tabDisplay;
      state.tabid = action.payload.tabid;
      state.path = action.payload.path;
      state.consoleSettings = action.payload.consoleSettings;
    },
    // Add more reducers!
  },
});
// Export the action creators for usage in components
export const { updateTab } = consoleSlice.actions;

// Export the reducer to be used in the store
export default consoleSlice.reducer;
