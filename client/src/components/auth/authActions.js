import  axios  from 'axios'
import { TEST_DISPATCH,GET_ERRORS } from './authConstants'
// register User
export const registerUser=(newUser)=>(dispatch)=>{
       axios
       .post("/api/users/register", newUser)
       .then(res => console.log(res.data))
       .catch(err =>
              dispatch({
                     type:GET_ERRORS,
                     payload:err.response.data
              })
       );
}
