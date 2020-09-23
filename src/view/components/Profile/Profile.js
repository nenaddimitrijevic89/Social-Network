import React from 'react';
import { Container, Row } from 'react-materialize';
import { userService } from '../../../services/userService';
import avatar from '../../../images/user.png';
import style from './Profile.module.css';
import { isLoggedIn } from '../../../shared/utilities';
import { ProfileModal } from './ProfileModal/ProfileModal';
import { authentication } from '../../../services/authService';
import { Loader } from '../Loader/Loader';

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            modalIsOpen: false,
            isPass: false,
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
    }

    changeForm = () => {
        this.setState(prevState => ({ isPass: !prevState.isPass }))
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

                    : <Row className={style.user}>
                        <ProfileModal
                            user={this.state.user}
                            modalIsOpen={this.state.modalIsOpen}
                            openModal={this.openModal}
                            insertData={this.insertData}
                            submitData={this.submitData}
                            changeForm={this.changeForm}
                            isPass={this.state.isPass}
                            saveNewPassword={this.saveNewPassword}
                        />
                        <h1 className={`center-align ${style.nameWidth}`}>{this.state.user.fullName}</h1>
                        <h4 className='center-align'>{this.state.user.prefix}</h4>
                        <div className='center-align'>
                            <img src={avatar} className={`${style.image} center-align`} alt='avatar' />
                        </div>
                        <div className='center-align'>
                            <h5 onClick={() => this.openModal(this.state.user)} className={style.edit}><i className={`fa fa-edit ${style.editIcon}`}></i> edit user</h5>
                        </div>
                        <h4 className='center-align'><i className='fa fa-envelope'></i> {this.state.user.email}</h4>
                        <h4 className='center-align'>{this.state.user.about}</h4>

                    </Row>
                }
            </Container>
        )
    }
}

export { Profile };