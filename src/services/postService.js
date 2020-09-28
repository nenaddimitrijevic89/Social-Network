import { Post } from "../entities/PostObj";
const { baseURL } = require("../shared/baseURL");
const { HEADERS, handlePostTypeDisplay } = require("../shared/constants");

class PostService {

    getAllPosts() {
        return baseURL.get('posts', {
            headers: HEADERS()
        })
        .then(response =>{
            const posts=response.data.data.map(post=>{
                console.log(post)
                handlePostTypeDisplay(post)
                return new Post(post)
            })
            return posts
        })
        .catch(error => console.log(error))
            
    }

    createPost({ type, src }) {
        return baseURL.post('posts', { type, src }, {
            headers: HEADERS()
        })
        .then(response=>console.log(response))
    }
}

export const postService = new PostService()