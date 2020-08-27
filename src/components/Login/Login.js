import React from 'react';
import { TextInput, Container, Button } from 'react-materialize';
import { authentication } from '../../services/authService';
import { storageService } from '../../services/storageService';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            token: null
        }
    }

    insertData=(event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }

    submitData=()=>{
        authentication.logIn(this.state)
        .then(response=>storageService.set('token', response.data.token))
        this.props.history.push('/feed')
    }

    render(){
        return(
        <Container>
            <TextInput
                onChange={this.insertData}
                email
                label='Email'
                name="email"
                validate
            />
            <TextInput
                onChange={this.insertData}
                label='Password'
                name="password"
                password
            />
            <Button
                onClick={this.submitData}
                node="button"
                type="submit"
                waves="light"
            >
            Submit
            </Button>
        </Container>
        )
    }
}

export { Login }