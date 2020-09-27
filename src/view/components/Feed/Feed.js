import React from 'react';
import { TextPost } from './TextPost/TextPost';
import { Button, Container, Icon } from 'react-materialize';
import { ImagePost } from './ImagePost/ImagePost';
import { VideoPost } from './VideoPost/VideoPost';
import { postService } from '../../../services/postService';
import { isLoggedIn } from '../../../shared/utilities';
import { userService } from '../../../services/userService';
import { Loader } from '../Loader/Loader';
import { PostModal } from './PostModal/PostModal';

class Feed extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            users: [],
            isLoading: true,
            modalIsOpen: false
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
        const postUser=this.state.users.filter(user => user.id === id);
        return postUser;
    }

    openModal = () => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }))
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

                :<><PostModal openModal={this.openModal} modalIsOpen={this.state.modalIsOpen}/>
                    {this.state.posts.map(post => {
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
                <Button
                    onClick={this.openModal}
                    className="red"
                    fab
                    icon={<i className='fa fa-plus'></i>}
                    floating
                    large
                    node="button"
                ></Button>
            </Container>
        )
    }
}
export { Feed };