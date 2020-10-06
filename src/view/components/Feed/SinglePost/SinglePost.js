import React from 'react';
import { Container } from 'react-materialize';
import { postService } from '../../../../services/postService';
import { userService } from '../../../../services/userService';
import { Loader } from '../../Loader/Loader';
import { ImagePost } from '../ImagePost/ImagePost';
import { TextPost } from '../TextPost/TextPost';
import { VideoPost } from '../VideoPost/VideoPost';

class SinglePost extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            post: [],
            user: [],
            users: [],
            comments: null,
            isShown: true
        }
    }

    componentDidMount() {
        postService.getSinglePost(this.props.match.params.id)
        .then(response => this.setState({ post: response }))

        userService.getAllUsers()
        .then(response => this.setState({ users: response }))
        

        postService.getSinglePostComments(this.props.match.params.id)
        .then(response => this.setState({ comments: response }))
        .then(() => {
            userService.getSingleUser(this.state.post.owner)
            .then(response => this.setState({ user: response }))
        })
        .finally(()=> this.setState({ isLoading: false }))
    }

    createComment =(text)=>{
        this.setState({ body: text })
    }

    deletePost = (id) => {
        postService.deletePost(id)
        .then(() => window.location.reload())
    }

    render() {
        return (
            <Container>
                {this.state.isLoading
                
                ?<Loader />
            
                :<>
                {this.state.post.type === 'image' && <ImagePost post={this.state.post} user={this.state.user} deletePost={this.deletePost} isShown={true} comments={this.state.comments} users={this.state.users}/>}
                {this.state.post.type === 'text' && <TextPost post={this.state.post} user={this.state.user} deletePost={this.deletePost} isShown={true} comments={this.state.comments} users={this.state.users}/>}
                {this.state.post.type === 'video' && <VideoPost post={this.state.post} user={this.state.user} deletePost={this.deletePost} isShown={true} comments={this.state.comments} users={this.state.users}/>}
                </>
                }
            </Container>
        )
    }
}

export { SinglePost };