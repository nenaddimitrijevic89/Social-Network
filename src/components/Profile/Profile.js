import React from 'react';
import { Container } from 'react-materialize';
import { userService } from '../../services/userService';

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){
        userService.getAllUsers()
    }

    render(){
        return(
            <Container>
                <h1>My Profile</h1>
            </Container>
        )
    }
}

export {Profile};