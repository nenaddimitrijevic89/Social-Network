import React from 'react';
import { TextPost } from './TextPost';
import { Container } from 'react-materialize';

class Feed extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <Container>
            <TextPost/>
            </Container>
        )
    }
}

export {Feed}