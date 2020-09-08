import React from 'react';
import { Container } from 'react-materialize';
import { userService } from '../../../services/userService';
import { User } from './User/User';
import { isLoggedIn } from '../../../shared/utilities';

class People extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        userService.getAllUsers()
            .then(response => this.setState({ users: response }))
    }

    render() {

        const isAuthorized=isLoggedIn()
        if(!isAuthorized){
            this.props.history.push('/')
        }

        return (
            <Container>
                {this.state.users.map(user => <User user={user} key={user.id} />)}
            </Container>
        )
    }
}

export { People };