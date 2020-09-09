import React from 'react';
import { Container, Row, Button } from 'react-materialize';
import { userService } from '../../../services/userService';
import avatar from '../../../images/user.png';
import style from './Profile.module.css';
import { isLoggedIn } from '../../../shared/utilities';
import { ProfileModal } from './ProfileModal/ProfileModal';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            modalIsOpen: false,
            userUpdate : {
                firstName: "John ",
                lastName: "Smith",
                about: "something about yourself",
                prefix: "Developer"
              }
        }
    }

    componentDidMount() {
        userService.getLoggedUser()
        .then(response=>this.setState({ user: response }))
    }

    openModal = ({}) => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }))
    }

    insertData=(event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }

    submitData=()=>{
        userService.updateUser(this.state.user.id, this.state.userUpdate )
    }

    render() {

        const isAuthorized=isLoggedIn()
        if(!isAuthorized){
            this.props.history.push('/')
        }

        return (
            <Container>
                {this.state.user
                ?<Row>
                    <ProfileModal
                        user={this.state.user}
                        modalIsOpen={this.state.modalIsOpen}
                        openModal={this.openModal}
                        insertData={this.insertData}
                        submitData={this.submitData}
                    />
                    <h1 className='center-align'>{this.state.user.fullName}</h1>
                    <div className='center-align'>
                        <img src={avatar} className={`${style.user} center-align`} alt='avatar' />
                    </div>
                    <h4 className='center-align'>{this.state.user.email}</h4>
                    <Button onClick={()=>this.openModal(this.state.user)}>Modal</Button>
                </Row> 
                :<></>
            }
            </Container>
        )
    }
}

export { Profile };