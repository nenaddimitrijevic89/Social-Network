import React from 'react';
import { TextPost } from './TextPost/TextPost';
import { Container } from 'react-materialize';
import { ImagePost } from './ImagePost/ImagePost';
import { VideoPost } from './VideoPost/VideoPost';
import { postService } from '../../../services/postService';
import { isLoggedIn } from '../../../shared/utilities';

class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        postService.getAllPosts()
    }

    render() {
        
        const isAuthorized=isLoggedIn()
        if(!isAuthorized){
            this.props.history.push('/')
        }

        return (
            <Container>
                <TextPost />
                <ImagePost />
                <VideoPost />
            </Container>
        )
    }
}
export { Feed };