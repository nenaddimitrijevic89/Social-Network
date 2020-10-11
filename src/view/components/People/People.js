import React from 'react';
import { Container } from 'react-materialize';
import { userService } from '../../../services/userService';
import { User } from './User/User';
import { isLoggedIn } from '../../../shared/utilities';
import { Loader } from '../Loader/Loader';
import { postService } from '../../../services/postService';
import { commentService } from '../../../services/commentService';

class People extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            posts: [],
            comments: [],
            isLoading: true
        }
    }

    componentDidMount() {
        userService.getAllUsers()
            .then(response => this.setState({ users: response }))
        
        postService.getAllPosts()
        .then(response => this.setState({ posts: response }))

        commentService.getAllComments()
        .then(response => this.setState({ comments: response }))
        .finally(()=> this.setState({ isLoading: false }))
    }

    filterPostOwner=(id)=>{
        const postOwner=this.state.posts.filter(post => post.owner===id);
        return postOwner.length;
    }

    filterCommentOwner=(id)=>{
        const commentOwner=this.state.comments.filter(comment => comment.owner===id);
        return commentOwner.length;
    }

    render() {

        const isAuthorized=isLoggedIn()
        if(!isAuthorized){
            this.props.history.push('/')
        }

        return (
            <Container>
                {this.state.isLoading

                ?<Loader/>

                :<>{this.state.users.map(user => <User
                                                    user={user}
                                                    key={user.id}
                                                    numbOfPosts={this.filterPostOwner(user.id)}
                                                    numbOfComments={this.filterCommentOwner(user.id)}
                                                    />)}</>

                }
            </Container>
        )
    }
}

export { People };