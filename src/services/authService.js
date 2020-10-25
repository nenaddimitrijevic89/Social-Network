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
                    return response
                }
            })
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
    }

    changePassword({ email, password, newPassword}){
        return baseURL.patch('auth/password/change', { email, password, newPassword }, {
            headers: HEADERS()
        })
        .then(response => console.log(response))
    }
}

export const authentication = new Authentication();