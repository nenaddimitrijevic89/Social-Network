const { baseURL } = require("../shared/baseURL");
const { HEADERS } = require("../shared/constants");

class PostService {

    getAllPosts() {
        return baseURL.get('posts', {
            headers: HEADERS()
        })
            .then(response => console.log(response))
    }
}

export const postService = new PostService()