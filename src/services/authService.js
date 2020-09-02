import { HEADERS } from "../shared/constants";
import { baseURL } from "../shared/baseURL";

class Authentication{
    register({email, password, firstName, lastName}){
        return baseURL.post('auth/register', {email, password, firstName, lastName}, HEADERS)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }
    logIn({email, password}){
        return baseURL.post('auth/login', {email, password}, HEADERS)
        .then(response=>{
            return response.data.token
        })
        .catch(error=>console.log(error))
    }
}

export const authentication=new Authentication();