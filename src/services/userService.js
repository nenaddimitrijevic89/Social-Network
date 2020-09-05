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

    getSingleUser(id){
        return baseURL.get(`users/${id}`, {
            headers: HEADERS()
        })
        .then(response=>{
            const user= new User(response.data.data)
            return user;
        })
        .catch(error=>console.log(error))
    }

    getSingleUserPosts(id){
        return baseURL.get(`users/${id}/posts`,{
            headers: HEADERS()
        })
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }

    deleteSingleUser(id, data){
        return baseURL.delete(`users/${id}`, {
            headers: HEADERS()
        }, data)
        .then(response=>console.log(response))
    }
}

export const userService = new UserService();