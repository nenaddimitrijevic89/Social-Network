import React from 'react';
import { TextPost } from './TextPost';
import { Container } from 'react-materialize';
// import { authentication } from '../../services/authService';
import { ImagePost } from './ImagePost';
import { VideoPost } from './VideoPost';
import { storageService } from '../../services/storageService';

class Feed extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        // authentication.register()
        // .then(response=>{
        //     this.setState({token:response.data.token})
        // })
    }
    
    render(){
        const token=storageService.get('token');
        console.log(token)
        if(!token){
            this.props.history.push('/')
        }
        return(
            <Container>
            <TextPost/>
            <ImagePost/>
            <VideoPost/>
            </Container>
        )
    }
}
export { Feed };