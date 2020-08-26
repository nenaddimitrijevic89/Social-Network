import axios from "axios";

const data={
    "email": "dimi@gmail.com",
    "password": "1234567",
    "firstName": "dimi",
    "lastName": "Smith"
}

const headers={
    "Content-type": "application/json; charset=UTF-8",
    "x-api-key": "1vaHd3v",
    Authorization: 'Bearer sn-token'
}

class Authentication{
    register(){
        return axios.post('https://backend-social-network.herokuapp.com/auth/register', data, headers)
        .then(response=>console.log(response))
    }
    logIn(data){
        return axios.post('https://backend-social-network.herokuapp.com/auth/login')
        .then(response=>console.log(response))
    }
}

export const authentication=new Authentication();