import { HEADERS } from "../shared/constants";
const { baseURL } = require("../shared/baseURL");

class UserService{
    getAllUsers(){
        return baseURL.get('users', {
            headers: HEADERS
        })
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }
}

export const userService = new UserService();