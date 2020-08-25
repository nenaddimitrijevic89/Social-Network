import Axios from "axios";

const { baseURL } = require("../shared/baseURL");
const data={
    "email": "john@gmail.com",
    "password": "1234567",
    "firstName": "John",
    "lastName": "Smith"
  }

class Authentication{
    register(){
        return Axios.post(baseURL('/auth/register'),
        JSON.stringify(data),
        {"Content-type": "application/json; charset=UTF-8",
        "x-api-key": "1vaHd3v",
        Authorization: 'Bearer sn-token'})
        .then(response=>console.log(response))
    }
}

export const authentication=new Authentication()