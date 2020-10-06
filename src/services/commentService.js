import { HEADERS } from "../shared/constants";
import { Comment } from '../entities/CommentObj';
const { baseURL } = require("../shared/baseURL");

class CommmentService {

    getAllComments() {
        return baseURL.get('comments', {
            headers: HEADERS()
        })
        .then(response => {
            const comments = response.data.data.map(comment => new Comment(comment))
            return comments;
        })
    }
    
    createComment({ postId, body }) {
        return baseURL.post('comments', { postId, body }, {
            headers: HEADERS()
        })
        .catch(error => console.log(error))
    }

    deleteComment(id){
        return baseURL.delete(`comments/${id}`, {
            headers: HEADERS()
        })
        .catch(()=> alert('This is not your comment. You can not delete it!'))
    }
}

export const commentService = new CommmentService();