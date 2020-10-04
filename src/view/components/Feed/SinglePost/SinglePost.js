import React from 'react';
import { Container } from 'react-materialize';
import { postService } from '../../../../services/postService';
import { userService } from '../../../../services/userService';
import { Loader } from '../../Loader/Loader';
import { ImagePost } from '../ImagePost/ImagePost';

class SinglePost extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            post: [],
            user: [],
            comments: null
        }
    }

    componentDidMount() {
        postService.getSinglePost(this.props.match.params.id)
        .then(response => this.setState({ post: response }))
        

        postService.getSinglePostComments(this.props.match.params.id)
        .then(response => this.setState({ comments: response }))
        .then(() => userService.getSingleUser(this.state.post.owner)
        .then(response => this.setState({ user: response, isLoading: false })))
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
                {this.state.post.type === 'image' && <ImagePost post={this.state.post} user={this.state.user} deletePost={this.deletePost} isShown={true} comments={this.state.comments}/>}
                </>
                }
            </Container>
        )
    }
}

export { SinglePost };