import React from 'react';
import { Container, Row, Switch, Col } from 'react-materialize';
import { authentication } from '../../../services/authService';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import style from './UserForm.module.css';

class UserForm extends React.Component {
    constructor(props) {
        super(props)
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

    registerOrLog = () => {
        this.setState(prevState => ({ isLog: !prevState.isLog }))
    }

    render() {
        return (
            <Container className={style.form} onKeyUp={ event => event.keyCode === 13 && this.submitData() }>
                <h1 className={`center-align ${style.padding}`}>Social Network</h1>
                <Row>
                <Switch
                    className='center-align'
                    id="Switch-11"
                    offLabel="Login"
                    onChange={this.registerOrLog}
                    onLabel="Register"
                />
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
                Social Network Social Network Social Network Social Network Social Network Social Network
                 Social Network Social Network Social Network Social Network 
                </Col>
                </Row>
            </Container>
        )
    }
}

export { UserForm }