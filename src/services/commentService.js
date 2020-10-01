import { HEADERS } from "../shared/constants";
const { baseURL } = require("../shared/baseURL");

class CommmentService {
    
    createComment({ postId, body }) {
        return baseURL.post('comments', { postId, body }, {
            headers: HEADERS()
        })
        .then(response => console.log(response))
    }
}

export const commentService = new CommmentService();