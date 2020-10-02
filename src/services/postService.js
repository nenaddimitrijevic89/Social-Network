import { Post } from "../entities/PostObj";
import { storageService } from "./storageService";
const { baseURL } = require("../shared/baseURL");
const { HEADERS, handlePostTypeDisplay } = require("../shared/constants");

class PostService {

    getAllPosts() {
        return baseURL.get('posts', {
            headers: HEADERS()
        })
            .then(response => {
                const posts = response.data.data.map(post => {
                    handlePostTypeDisplay(post)
                    return new Post(post)
                })
                return posts
            })
            .catch(error => console.log(error))

    }

    getSinglePost(id) {
        return baseURL.get(`posts/${id}`, {
            headers: HEADERS()
        })
            .then(response => console.log(response))
    }

    getAllPostComments(id) {
        return baseURL.get(`posts/${id}/comments`, {
            headers: HEADERS()
        })
            .then(response => console.log(response))
    }

    createPost({ type, src }) {
        return baseURL.post('posts', { type, src }, {
            headers: HEADERS()
        })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    createImagePost({ src }) {
        const token = storageService.get('token');
        return baseURL.post('posts?type=image', src, {
            headers: {
                "x-api-key": "1vaHd3v",
                Authorization: token,
            }
        })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    deletePost(id) {
        return baseURL.delete(`posts/${id}`, {
            headers: HEADERS()
        })
            .catch(error => console.log(error))
    }
}

export const postService = new PostService()