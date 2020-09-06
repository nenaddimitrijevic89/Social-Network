import React from 'react';
import { TextPost } from './TextPost/TextPost';
import { Container } from 'react-materialize';
import { ImagePost } from './ImagePost/ImagePost';
import { VideoPost } from './VideoPost/VideoPost';
import { storageService } from '../../../services/storageService';
import { postService } from '../../../services/postService';

class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        postService.getAllPosts()
    }

    isLogon = () => {
        const token = storageService.get('token');
        if (!token) {
            this.props.history.push('/')
        }
    }

    render() {
        this.isLogon()
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