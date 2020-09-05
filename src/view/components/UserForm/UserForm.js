import React from 'react';
import { Container, Button } from 'react-materialize';
import { authentication } from '../../../services/authService';
import { Login } from './Login/Login';
import { Register } from './Register/Register';

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
            <Container>
                <Button
                    onClick={this.registerOrLog}
                >Switch</Button>
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
            </Container>
        )
    }
}

export { UserForm }