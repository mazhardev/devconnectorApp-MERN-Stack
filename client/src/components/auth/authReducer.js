import { TEST_DISPATCH,GET_ERRORS } from "./authConstants"
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
    default:
      return state;
  }
}
