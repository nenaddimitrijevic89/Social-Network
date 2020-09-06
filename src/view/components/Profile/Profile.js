import React from 'react';
import { Container } from 'react-materialize';
import { userService } from '../../../services/userService';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        userService.getSingleUser(this.props.match.params.id)
            .then(response => this.setState({ user: response }))
    }

    render() {
        return (
            <Container>
                <h1>My Profile</h1>
            </Container>
        )
    }
}

export { Profile };