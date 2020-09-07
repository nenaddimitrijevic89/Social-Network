import React from 'react';
import { TextInput, Button, Col } from 'react-materialize';

const Login = ({ insertData, submitData }) => {

    return (
        <>
        <Col l={6}>
            <TextInput
                onChange={insertData}
                id='TextInput-1'
                email
                label='Email'
                name="email"
                validate
            />
        </Col>
        <Col l={6}>    
            <TextInput
                onChange={insertData}
                id='TextInput-2'
                label='Password'
                name="password"
                password
            />
        </Col>
        <Col l={12}>    
            <Button
                onClick={submitData}
                node="button"
                type="submit"
                waves="light"
            >
                Login
            </Button>
        </Col>
        </>
    )
}

export { Login }