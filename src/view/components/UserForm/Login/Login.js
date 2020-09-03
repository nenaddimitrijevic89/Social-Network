import React from 'react';
import { TextInput, Button } from 'react-materialize';

const Login =({insertData, submitData})=>{
    
    return(
        <>
        <TextInput
                onChange={insertData}
                id='TextInput-1'
                email
                label='Email'
                name="email"
                validate
            />
            <TextInput
                onChange={insertData}
                id='TextInput-2'
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
            Login
            </Button>
            </>
    )
}

export {Login}