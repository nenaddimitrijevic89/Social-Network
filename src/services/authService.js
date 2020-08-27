import { HEADERS } from "../shared/constants";
import { baseURL } from "../shared/baseURL";

class Authentication{
    register({email, password, firstName, lastName}){
        return baseURL.post('auth/register', {email, password, firstName, lastName}, HEADERS)
        .then(response=>console.log(response))
    }
    logIn({email, password}){
        return baseURL.post('auth/login', {email, password}, HEADERS)
    }
}

export const authentication=new Authentication();