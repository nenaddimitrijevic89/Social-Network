import { HEADERS } from "../shared/constants";
import { baseURL } from "../shared/baseURL";
import { storageService } from './storageService';


class Authentication {

    register({ email, password, firstName, lastName }) {
        return baseURL.post('auth/register', { email, password, firstName, lastName }, HEADERS())
            .then((response)=>{
                console.log(response);
                if(response.status === 200){
                    storageService.set('token', response.data.token)
                    console.log(response)
                }
            })
            .catch(error => console.log(error))
    }

    logIn({ email, password }) {
        return baseURL.post('auth/login', { email, password }, HEADERS())
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    storageService.set('token', response.data.token)
                    return response
                }
            })
            .catch(error => console.log(error))
    }
}

export const authentication = new Authentication();