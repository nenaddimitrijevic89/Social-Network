import React from 'react';
import { TextPost } from './TextPost/TextPost';
import { Button, Container } from 'react-materialize';
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
            modalIsOpen: false,
            type: null,
            src: null,
            isText: true,
            isImage: false
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
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen, type: 'text' }))
    }

    writePost = (post) => {
        this.setState({ src: post })
    }

    savePost = () => {
        postService.createPost(this.state)
        .then(() => window.location.reload())
    }

    deletePost = (id) => {
        postService.deletePost(id)
        .then(() => window.location.reload())
    }

    change =()=>{
        this.setState(prevState => ({ isText: !prevState.isText, isImage: !prevState.isImage }),
        ()=>{
            if(this.state.isText){
                this.setState({ type: 'text'})
            }else{
                this.setState({ type: 'image' })
            }
        }
        )
        
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

                :<><PostModal
                        openModal={this.openModal}
                        modalIsOpen={this.state.modalIsOpen}
                        writePost={this.writePost}
                        savePost={this.savePost}
                        change={this.change}
                        isText={this.state.isText}
                    />
                    {this.state.posts.map(post => {
                        if(post.type==="text"){
                            return <TextPost key={post.id} post={post} user={this.filterPostUser(post.owner)} deletePost={this.deletePost}/>
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