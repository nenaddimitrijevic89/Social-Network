import { HEADERS } from "../shared/constants";
import { User } from "../entities/UserObj";
import { storageService } from "./storageService";
const { baseURL } = require("../shared/baseURL");

class UserService {

    getAllUsers() {
        return baseURL.get('users', {
                headers: HEADERS()
            })
            .then(response => {
                const usersList = response.data.data;
                console.log(usersList)
                const newUsersList = usersList.map(user => new User(user))
                return newUsersList;
            })
            .catch(error => console.log(error))
    }

    getLoggedUser() {
        return baseURL.get('users/me', {
                headers: HEADERS()
            })
            .then(response => {
                const user = new User(response.data);
                return user;
            })
    }

    getSingleUser(id) {
        return baseURL.get(`users/${id}`, {
                headers: HEADERS()
            })
            .then(response => {
                console.log(response);
                const user = new User(response.data.data)
                return user;
            })
            .catch(error => console.log(error))
    }

    updateUser(id, data) {
        return baseURL.patch(`users/${id}`, data, {
                headers: HEADERS()
            })
            .catch(error=>console.log(error))
    }

    getSingleUserPosts(id) {
        return baseURL.get(`users/${id}/posts`, {
                headers: HEADERS()
            })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    deleteSingleUser(id, data) {
        return baseURL.delete(`users/${id}`, {
                headers: HEADERS()
            }, data)
            .then(response => {
                storageService.remove('token')
                console.log(response)
            })
            .catch(error => console.log(error))
    }
}

export const userService = new UserService();