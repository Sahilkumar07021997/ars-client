import { combineReducers } from "redux";
import userReducer from "./modules/user/userSlice";
import consoleReducer from "./modules/console/consoleSlice.js";
/**
 * Root Reducer
 *
 * Combines all individual reducers into a single root reducer
 * for managing the application's state structure.
 *
 * @returns {Function}
 */
const rootReducer = combineReducers({
  user: userReducer,
  console: consoleReducer,
  // Add additional reducers here as needed
});

export default rootReducer;
