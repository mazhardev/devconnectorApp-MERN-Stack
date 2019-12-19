import axios from 'axios'

const setAuthToken = (Token) => {
    if (Token) {
        //apply to every request
        axios.defaults.headers.common['Authorization'] = Token;
    } else {
        //delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }

}
export default setAuthToken;