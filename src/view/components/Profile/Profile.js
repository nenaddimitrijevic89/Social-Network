import React from 'react';
import { Container, Row } from 'react-materialize';
import { userService } from '../../../services/userService';
import avatar from '../../../images/user.png';
import style from './Profile.module.css';
import { isLoggedIn } from '../../../shared/utilities';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        userService.getLoggedUser()
        .then(response=>this.setState({ user: response }))
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
                    <h1 className='center-align'>{this.state.user.fullName}</h1>
                    <div className='center-align'>
                        <img src={avatar} className={`${style.user} center-align`} alt='avatar' />
                    </div>
                    <h4 className='center-align'>{this.state.user.email}</h4>
                </Row>
                :<></>
            }
            </Container>
        )
    }
}

export { Profile };