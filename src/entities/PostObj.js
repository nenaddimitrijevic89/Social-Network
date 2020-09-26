import { cut } from "../shared/constants";

class Post{
    constructor(post){
        if(post.type==='video'){
            this.id=post._id;
            this.createdAt = post.createdAt;
            this.owner = post.owner; 
            this.src = cut(post.src);
            this.type = post.type;
            this.updatedAt = post.updatedAt;
        } else {
            this.id=post._id;
            this.createdAt = post.createdAt;
            this.owner = post.owner; 
            this.src = post.src;
            this.type = post.type;
            this.updatedAt = post.updatedAt;
        }
    }
}

export { Post };