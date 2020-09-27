import React from 'react';
import { TextPost } from './TextPost/TextPost';
import { Container } from 'react-materialize';
import { ImagePost } from './ImagePost/ImagePost';
import { VideoPost } from './VideoPost/VideoPost';
import { postService } from '../../../services/postService';
import { isLoggedIn } from '../../../shared/utilities';
import { userService } from '../../../services/userService';
import { Loader } from '../Loader/Loader';

class Feed extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            users: [],
            isLoading: true
        }
    }

    componentDidMount() {
        userService.getAllUsers()
            .then(response => this.setState({ users: response }))

        postService.getAllPosts()
            .then(response=>this.setState({ posts: response }))
            .finally(()=> this.setState({ isLoading: false }))
    }

    filterPostUser=(id)=>{
        const postUser=this.state.users.filter(user=>user.id===id);
        return postUser;
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

                :<>{this.state.posts.map(post => {
                    if(post.type==="text"){
                        return <TextPost key={post.id} post={post} user={this.filterPostUser(post.owner)}/>
                    }
                    if(post.type==="video"){
                        return <VideoPost key={post.id} post={post} user={this.filterPostUser(post.owner)}/>
                    }else{
                        return <ImagePost key={post.id} post={post} user={this.filterPostUser(post.owner)}/>
                    }
                })}</>
                
                }
            </Container>
        )
    }
}
export { Feed };