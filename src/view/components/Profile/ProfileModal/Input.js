import React from 'react';
import { TextInput, Col } from 'react-materialize';

const Input = ({ insertData }) => {
    const a=(event)=>{
        const data={}
        data[event.target.name] = event.target.value;
        insertData(data)    
    }
    return (
        <Col>
            <TextInput
                onChange={a}
                id='TextInput-7'
                label='First Name'
                name="firstName"
            />
            <TextInput
                onChange={a}
                id='TextInput-8'
                label='Last Name'
                name="lastName"
            />
            <TextInput
                onChange={a}
                id='TextInput-9'
                label='About'
                name="about"
            />
            <TextInput
                onChange={a}
                id='TextInput-4'
                label='Prefix'
                name="prefix"
            />
        </Col>
    )
}

export { Input }