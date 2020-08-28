import { HEADERS } from "../shared/constants";

const { baseURL } = require("../shared/baseURL");

class UserService{
    getAllUsers(){
        return baseURL.get('users?limit=10&offset=0', {
            headers: HEADERS
        })
        .then(response=>console.log(response))
        
    }
}

export const userService = new UserService();