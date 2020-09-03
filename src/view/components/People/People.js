import React from 'react';
import { Container } from 'react-materialize';
import { userService } from '../../../services/userService';

class People extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users: []
        }
    }

    componentDidMount(){
        userService.getAllUsers()
        .then(response=>this.setState({users: response}))
    }

    render(){
        return(
            <Container>
                <>People</>
            </Container>
        )
    }
}

export {People};