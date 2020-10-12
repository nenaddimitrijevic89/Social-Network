import React from 'react';
import { Container } from 'react-materialize';
import { userService } from '../../../../services/userService';
import { ProfileCard } from '../../Profile/ProfileCard/ProfileCard';
import { Loader } from '../../Loader/Loader';

class SingleUser extends React.Component {
    constructor() {
        super()
        this.state = {
            user: null,
            loggedUser: null,
            numbOfPosts: null,
            numbOfComments: null,
            isLoading: true
        }
    }

    componentDidMount() {
        userService.getLoggedUser()
        .then(response => this.setState({ loggedUser: response }))

        userService.getSingleUser(this.props.match.params.id)
        .then(response => this.setState({ user: response }))
        .then(() => {
            userService.getSingleUserPosts(this.props.match.params.id)
            .then(response => this.setState({ numbOfPosts: response }))
    
            userService.getSingleUserComments(this.props.match.params.id)
            .then(response => this.setState({ numbOfComments: response }))
        })
        .finally(() => this.setState({ isLoading: false }))
        

    }

    removeUser = () => {
        userService.deleteSingleUser(this.props.match.params.id, this.state.user)
            .then(() => {
                this.props.history.push('/')
            })
    }

    render() {
        return (
            <Container>
                {this.state.isLoading

                ? <Loader />
                
                :<>{this.state.loggedUser.id===this.state.user.id
                    ?
                    this.props.history.push('/profile')
                    :<ProfileCard
                    user={this.state.user}
                    numbOfComments={this.state.numbOfComments}
                    numbOfPosts={this.state.numbOfPosts}
                    />
                    }</>

                }
            </Container>
        )
    }
}

export { SingleUser }