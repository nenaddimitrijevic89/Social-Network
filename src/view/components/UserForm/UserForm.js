import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import { authentication } from '../../../services/authService';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import style from './UserForm.module.css';

class UserForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isLog: true
        }
    }

    insertData = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitData = () => {
        if(this.state.isLog){
            authentication.logIn(this.state)
                .then(() => {
                    this.props.history.push('/feed')
                })
        } else{
            authentication.register(this.state)
            .then(()=>{
                this.props.history.push('/feed')
            })
        }
    }

    registerForm = () => {
        this.setState({ isLog: false })
    }

    loginForm = () => {
        this.setState({ isLog: true })
    }

    render() {
        return (
            <Container className={style.form} onKeyUp={ event => event.keyCode === 13 && this.submitData() }>
                <h1 className={`center-align ${style.padding}`}>Social Network</h1>
                <Row>
                <div>
                    <span className={`${style.right} ${this.state.isLog && style.activeR}`} onClick={this.loginForm}>LOGIN</span>
                    <span className={`${style.left} ${!this.state.isLog && style.activeL}`} onClick={this.registerForm}>REGISTER</span>
                </div>
                <Col l={6} className={style.margin}>
                {this.state.isLog
                    ? <Login
                        insertData={this.insertData}
                        submitData={this.submitData}
                    />
                    : <Register
                        insertData={this.insertData}
                        submitData={this.submitData}
                    />
                }
                </Col>
                <Col l={6} className={style.info}>
                <p>If you don't want to Register account you can get in as Demo User.</p>
                <p>email: <span className={style.account}>demo@gmail.com</span></p>
                <p>password: <span className={style.account}>demodemo</span></p>
                </Col>
                </Row>
            </Container>
        )
    }
}

export { UserForm }