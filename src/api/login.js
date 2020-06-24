import axios from "axios";

const apiAuthentication = {
    login(email, password){
        return axios.post('http://localhost:3000/login', {
            email,
            password
        }).then(response => {
            return response
        }).catch(e => {
            throw new Error(e.response.data)
        })
    }
};

export default apiAuthentication;