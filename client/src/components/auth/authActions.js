import { TEST_DISPATCH } from './authConstants'
// register User
export const registerUser=(newUser)=>{

       return{
              type:TEST_DISPATCH,
              payload:newUser
       }
       // axios
       // .post("/api/users/register", newUser)
       // .then(res => console.log(res.data))
       // .catch(err =>
       //        dispatch({
       //               type:GET_ERRORS,
       //               payload:err.response.data
       //        })
       // );
}
