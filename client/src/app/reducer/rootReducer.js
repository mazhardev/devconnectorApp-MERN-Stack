import { combineReducers } from "redux";
import authReducer from "../../components/auth/authReducer";
export default combineReducers({
  auth: authReducer
});
