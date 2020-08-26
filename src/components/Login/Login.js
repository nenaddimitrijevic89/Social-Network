import React from 'react';
import { TextInput, Container, Button } from 'react-materialize';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    logIn=(event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }

    render(){
        return(
        <Container>
            <TextInput
                onChange={this.logIn}
                email
                label='Email'
                name="email"
                validate
            />
            <TextInput
                onChange={this.logIn}
                label='Password'
                name="password"
                password
            />
            <Button
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