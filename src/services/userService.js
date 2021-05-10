import { handleImageDisplay, HEADERS } from "../shared/constants";
import { User } from "../entities/UserObj";
import { storageService } from "./storageService";
const { baseURL } = require("../shared/baseURL");

class UserService {

    getAllUsers() {
        return baseURL.get('users?limit=100&offset=0', {
                headers: HEADERS()
            })
            .then(response => {
                const usersList = response.data.data;
                const newUsersList = usersList.map(user =>{
                    handleImageDisplay(user)
                    return new User(user)
                })
                return newUsersList;
            })
            .catch(error => console.log(error))
    }

    getLoggedUser() {
        return baseURL.get('users/me', {
                headers: HEADERS()
            })
            .then(response => {
                const buffer=response.data;
                handleImageDisplay(buffer)
                const user = new User(buffer);
                return user;
            })
    }

    getSingleUser(id) {
        return baseURL.get(`users/${id}`, {
                headers: HEADERS()
            })
            .then(response => {
                const buffer=response.data.data;
                handleImageDisplay(buffer)
                const user = new User(buffer)
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

    uploadProfileImage(id, data) {
        const token = storageService.get('token');
        return baseURL.post(`users/${id}/image`, data, {
            headers: {
                "x-api-key": "1vaHd3v",
                Authorization: token,
            }
        })
    }

    getSingleUserPosts(id) {
        return baseURL.get(`users/${id}/posts`, {
                headers: HEADERS()
            })
            .then(response => response.data.total)
            .catch(error => console.log(error))
    }

    getSingleUserComments(id) {
        return baseURL.get(`users/${id}/comments`, {
            headers: HEADERS()
        })
        .then(response => response.data.total)
        .catch(error => console.log(error))
    }

    deleteSingleUser(id, data) {
        return baseURL.delete(`users/${id}`, {
                headers: HEADERS()
            }, data)
            .then(response => {
                storageService.remove('token')
            })
            .catch(error => console.log(error))
    }
}

export const userService = new UserService();