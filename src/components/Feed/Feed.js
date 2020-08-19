import React from 'react';
import { TextPost } from './TextPost';
import { Container } from 'react-materialize';
import { serviceUsers } from '../../services/fetch';
import { ImagePost } from './ImagePost';

class Feed extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        serviceUsers.get()
    }
    render(){
        return(
            <Container>
            <TextPost/>
            <ImagePost/>
            </Container>
        )
    }
}

export {Feed}