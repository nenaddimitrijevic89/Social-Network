import { HEADERS } from "../shared/constants";
import { User } from "../entities/UserObj";
const { baseURL } = require("../shared/baseURL");

class UserService {
    getAllUsers() {
        return baseURL.get('users', {
            headers: HEADERS()
        })
            .then(response=>{
                const usersList=response.data.data;
                const newUsersList=usersList.map(user=> new User(user))
                return newUsersList;
            })
            .catch(error => console.log(error))
    }
}

export const userService = new UserService();