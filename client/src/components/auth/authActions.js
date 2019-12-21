import axios from 'axios'
import { GET_ERRORS } from './authConstants'
import setAuthToken from '../../app/common/util/setAuthToken'
import jwt_decode from 'jwt-decode'
import { SET_CURRENT_USER } from './authConstants'
// register User
export const registerUser = (newUser, history) => (dispatch) => {
       axios
              .post("/api/users/register", newUser)
              .then(res => history.push("/login"))
              .catch(err =>
                     dispatch({
                            type: GET_ERRORS,
                            payload: err.response.data
                     })
              );
}
export const login = user => (dispatch) => {
       axios
              .post("api/users/login", user)
              .then(res => {
                     // Save to localStorage
                     const { token } = res.data;
                     // Set token to ls
                     localStorage.setItem('jwtToken', token);
                     // Set token to Auth header
                     setAuthToken(token);
                     // Decode token to get user data
                     const decoded = jwt_decode(token);
                     // Set current user
                     dispatch(setCurrentUser(decoded));
              })
              .catch(err =>
                     dispatch({
                            type: GET_ERRORS,
                            payload: err.response.data
                     })
                     //  console.log(err)
              );
}
export const setCurrentUser = (decoded) => {
       return {
              type: SET_CURRENT_USER,
              payload: decoded
       }
}
export const logout = () => (dispatch) => {
       //Remove from local storage
       localStorage.removeItem('jwtToken');
       //Remove auth header from future requestd
       setAuthToken(false);
       //set current user to {} which will set isAuthenticated to false
       dispatch(setCurrentUser({}))
}