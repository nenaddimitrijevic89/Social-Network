import React from 'react';
import { Container } from 'react-materialize';
import { userService } from '../../../services/userService';
import { User } from './User/User';
import { isLoggedIn } from '../../../shared/utilities';
import { Loader } from '../Loader/Loader';

class People extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            isLoading: true
        }
    }

    componentDidMount() {
        userService.getAllUsers()
            .then(response => this.setState({ users: response }))
            .finally(()=> this.setState({ isLoading: false }))
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

                :<>{this.state.users.map(user => <User user={user} key={user.id} />)}</>

                }
            </Container>
        )
    }
}

export { People };