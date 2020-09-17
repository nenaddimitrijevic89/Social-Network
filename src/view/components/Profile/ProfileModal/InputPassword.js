import React from 'react';
import { TextInput, Col } from 'react-materialize';

const InputPassword = ({ insertData }) => {

    const changeData=(event)=>{
        let name=event.target.name;
        let data = event.target.value;
        insertData(data, name)    
    }
    
    return (
        <Col>
            <TextInput
                onChange={changeData}
                id='TextInput-11'
                label='Email'
                name="email"
            />
            <TextInput
                onChange={changeData}
                id='TextInput-12'
                label='Password'
                name="password"
            />
            <TextInput
                onChange={changeData}
                id='TextInput-13'
                label='New Password'
                name="newPassword"
            />
        </Col>
    )
}

export { InputPassword }