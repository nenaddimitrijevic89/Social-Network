import React from 'react';
import { TextPost } from './TextPost/TextPost';
import { Container } from 'react-materialize';
import { ImagePost } from './ImagePost/ImagePost';
import { VideoPost } from './VideoPost/VideoPost';
import { postService } from '../../../services/postService';
import { isLoggedIn } from '../../../shared/utilities';

class Feed extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getAllPosts()
        .then(response=>this.setState({ posts: response }))
    }

    render() {
        
        const isAuthorized=isLoggedIn()
        if(!isAuthorized){
            this.props.history.push('/')
        }

        return (
            <Container>
                {this.state.posts.map(post => {
                    if(post.type==="text"){
                        return <TextPost key={post.id} src={post.src} />
                    }
                    if(post.type==="video"){
                        return <VideoPost key={post.id} src={post.src}/>
                    }else{
                        return <ImagePost key={post.id} src={post.src}/>
                    }
                })}
            </Container>
        )
    }
}
export { Feed };