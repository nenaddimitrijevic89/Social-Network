import React from 'react';
import { TextPost } from './TextPost';
import { Container } from 'react-materialize';
import { authentication } from '../../services/fetch';
import { ImagePost } from './ImagePost';
import { VideoPost } from './VideoPost';

class Feed extends React.Component{
    constructor(props){
        super(props)
        this.state={
            token:null
        }
    }
    componentDidMount(){
        // authentication.register()
        // .then(response=>{
        //     this.setState({token:response.data.token})
        // })
    }
    render(){
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