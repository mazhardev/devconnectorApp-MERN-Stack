import { combineReducers } from "redux";
import authReducer from "../../components/auth/authReducer";
import errorsReducer from "../../components/errors/errorsReducer";
import profileReducer from '../../components/dashboard/reducer';
import postReducer from '../../components/posts/postReducer';
export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  profile:profileReducer,
  post:postReducer
});
