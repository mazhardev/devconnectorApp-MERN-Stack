import  axios  from 'axios'
import { GET_ERRORS } from './authConstants'
// register User
export const registerUser=(newUser,history)=>(dispatch)=>{
       axios
       .post("/api/users/register", newUser)
       .then(res => history.push("/login"))
       .catch(err =>
              dispatch({
                     type:GET_ERRORS,
                     payload:err.response.data
              })
       );
}
export const login=(user)=>(dispatch)=>{
       axios
       .post("api/users/login", user)
       .then(res => console.log(res.data))
       .catch(err =>
        dispatch({
               type:GET_ERRORS,
               payload:err.response.data
        })
       );
}