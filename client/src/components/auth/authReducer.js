import { GET_ERRORS,SET_CURRENT_USER } from "./authConstants"
import isEmpty from '../../app/common/util/validations/is-empty'
const initialState = {
  isAuthenticated: false,
  user: {},
  errors:{}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return{
        ...state,
        errors:action.payload
      }
    case SET_CURRENT_USER:
        return{
          ...state,
          isAuthenticated:!isEmpty(action.payload),
          user:action.payload
        }
    default:
      return state;
  }
}
