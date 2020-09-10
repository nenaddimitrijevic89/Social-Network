import React from 'react';
import { TextInput, Col } from 'react-materialize';

const Input = ({ insertData }) => {
    return (
        <Col>
            <TextInput
                onChange={insertData}
                id='TextInput-7'
                label='First Name'
                name="firstName"
            />
            <TextInput
                onChange={insertData}
                id='TextInput-8'
                label='Last Name'
                name="lastName"
            />
            <TextInput
                onChange={insertData}
                id='TextInput-9'
                label='About'
                name="about"
            />
            <TextInput
                onChange={insertData}
                id='TextInput-4'
                label='Prefix'
                name="prefix"
            />
        </Col>
    )
}

export { Input }