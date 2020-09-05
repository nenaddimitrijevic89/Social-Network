import React from 'react';
import { TextInput, Button } from 'react-materialize';

const Register =({insertData, submitData})=>{
    return(
        <>
        <TextInput
                onChange={insertData}
                id='TextInput-3'
                label='First Name'
                name="firstName"
            />
        <TextInput
                onChange={insertData}
                id='TextInput-4'
                label='Last Name'
                name="lastName"
            />    
        <TextInput
                onChange={insertData}
                id='TextInput-5'
                email
                label='Email'
                name="email"
                validate
            />
            <TextInput
                onChange={insertData}
                id='TextInput-6'
                label='Password'
                name="password"
                password
            />
            <Button
                onClick={submitData}
                node="button"
                type="submit"
                waves="light"
            >
            Register
            </Button>
            </>
    )
}

export {Register};