import React from 'react';
import { userService } from '../../../../services/userService';
import { Button } from 'react-materialize';

class SingleUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            posts: []
        }
    }

    componentDidMount() {
        userService.getSingleUser(this.props.match.params.id)
            .then(response => this.setState({ user: response }))
        userService.getSingleUserPosts(this.props.match.params.id)
    }

    removeUser = () => {
        userService.deleteSingleUser(this.props.match.params.id, this.state.user)
            .then(() => {
                this.props.history.push('/')
            })
    }

    render() {
        return (
            <>
                <Button
                    onClick={this.removeUser}
                >Remove User
                </Button>
            </>
        )
    }
}

export { SingleUser }