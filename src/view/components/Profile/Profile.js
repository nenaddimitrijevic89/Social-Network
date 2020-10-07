import React from 'react';
import { Container, Row } from 'react-materialize';
import { userService } from '../../../services/userService';
import { isLoggedIn } from '../../../shared/utilities';
import { ProfileModal } from './ProfileModal/ProfileModal';
import { authentication } from '../../../services/authService';
import { Loader } from '../Loader/Loader';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            modalIsOpen: false,
            isInfo: true,
            isPassword: false,
            isProfileImage: false,
            email: null,
            isLoading: true
        }
    }

    componentDidMount() {
        userService.getLoggedUser()
            .then(response => this.setState({ user: response, email: response.email }))
            .finally(()=> this.setState({ isLoading: false }))
    }

    openModal = () => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }))
    }

    insertData = (data, name) => {
        switch (name) {
            case 'firstName':
                this.setState({ firstName: data })
                break;
            case 'lastName':
                this.setState({ lastName: data })
                break;
            case 'about':
                this.setState({ about: data })
                break;
            case 'prefix':
                this.setState({ prefix: data })
                break;
            case 'email':
                this.setState({ email: data })
                break;
            case 'password':
                this.setState({ password: data })
                break;
            case 'newPassword':
                this.setState({ newPassword: data })
                break;
            default:
                return null

        }
    }

    saveNewPassword = () => {
        authentication.changePassword(this.state)
        .finally(()=>this.setState({ modalIsOpen: false }))
    }

    changeForm = () => {
        this.setState(prevState => ({ isPassword: !prevState.isPassword }))
    }

    changeInfo =()=>{
        this.setState({ isInfo: true, isProfileImage: false, isPassword: false })
    }

    changePassword =()=>{
        this.setState({ isInfo: false, isProfileImage: false, isPassword: true })
    }

    changeProfileImage =()=>{
        this.setState({ isInfo: false, isProfileImage: true, isPassword: false })
    }

    submitData = () => {
        const data = {}
        const { firstName, lastName, about, prefix } = this.state;
        data.firstName = firstName;
        data.lastName = lastName;
        data.about = about;
        data.prefix = prefix;

        userService.updateUser(this.state.user.id, data)
            .then(response => {
                console.log(response);
                window.location.reload()
            })
    }

    render() {

        const isAuthorized = isLoggedIn()
        if (!isAuthorized) {
            this.props.history.push('/')
        }

        return (
            <Container>
                {this.state.isLoading

                    ?<Loader />

                    : <Row>
                        <ProfileModal
                            user={this.state.user}
                            modalIsOpen={this.state.modalIsOpen}
                            openModal={this.openModal}
                            insertData={this.insertData}
                            submitData={this.submitData}
                            changeForm={this.changeForm}
                            isPassword={this.state.isPassword}
                            isProfileImage={this.state.isProfileImage}
                            isInfo={this.state.isInfo}
                            changeInfo={this.changeInfo}
                            changePassword={this.changePassword}
                            changeProfileImage={this.changeProfileImage}
                            saveNewPassword={this.saveNewPassword}
                        />
                        <ProfileInfo 
                            user={this.state.user}
                            openModal={this.openModal}
                        />
                    </Row>
                }
            </Container>
        )
    }
}

export { Profile };