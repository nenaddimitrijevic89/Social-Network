import React from 'react';
import { Container, Row } from 'react-materialize';
import { userService } from '../../../services/userService';
import { isLoggedIn } from '../../../shared/utilities';
import { ProfileModal } from './ProfileModal/ProfileModal';
import { authentication } from '../../../services/authService';
import { Loader } from '../Loader/Loader';
import { ProfileCard } from './ProfileCard/ProfileCard';

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            numbOfPosts: null,
            numbOfComments: null,
            image: null,
            modalIsOpen: false,
            isInfo: true,
            isPassword: false,
            isProfileImage: false,
            email: null,
            isLoading: true,
            avatar: null
        }
    }

    componentDidMount() {
        userService.getLoggedUser()
            .then(response => this.setState({ user: response, email: response.email }))
            .then(() => {
                userService.getSingleUserPosts(this.state.user.id)
                .then(response => this.setState({ numbOfPosts: response }))

                userService.getSingleUserComments(this.state.user.id)
                .then(response => this.setState({ numbOfComments: response }))
                .finally(() => this.setState({ isLoading: false }))
            })
    }

    openModal = () => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen, avatar: null }))
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
        this.setState({ modalIsOpen: false })
        authentication.changePassword(this.state)
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

    setImage =(img)=>{
        this.setState({ image: img })
    }

    uploadImage =()=>{
        this.setState({ isLoading: true })
        userService.uploadProfileImage(this.state.user.id, this.state.image)
        .then(()=>{
            userService.getLoggedUser()
            .then(response => this.setState({ user: response, modalIsOpen: false }))
            .finally(() => this.setState({ isLoading: false }))
        })
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

    imagePreview=(image)=>{
        this.setState({ avatar: image })
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
                            isPassword={this.state.isPassword}
                            isProfileImage={this.state.isProfileImage}
                            isInfo={this.state.isInfo}
                            changeInfo={this.changeInfo}
                            changePassword={this.changePassword}
                            changeProfileImage={this.changeProfileImage}
                            saveNewPassword={this.saveNewPassword}
                            uploadImage={this.uploadImage}
                            setImage={this.setImage}
                            avatar={this.state.avatar}
                            imagePreview={this.imagePreview}
                        />
                        <ProfileCard
                            user={this.state.user}
                            openModal={this.openModal}
                            numbOfPosts={this.state.numbOfPosts}
                            numbOfComments={this.state.numbOfComments}    
                        />
                    </Row>
                }
            </Container>
        )
    }
}

export { Profile };