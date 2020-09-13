import React from 'react';
import { TextInput, Col } from 'react-materialize';

const Input = ({ insertData }) => {

    const changeData=(event)=>{
        let name=event.target.name;
        let data = event.target.value;
        insertData(data, name)    
    }
    
    return (
        <Col>
            <TextInput
                onChange={changeData}
                id='TextInput-7'
                label='First Name'
                name="firstName"
            />
            <TextInput
                onChange={changeData}
                id='TextInput-8'
                label='Last Name'
                name="lastName"
            />
            <TextInput
                onChange={changeData}
                id='TextInput-9'
                label='About'
                name="about"
            />
            <TextInput
                onChange={changeData}
                id='TextInput-4'
                label='Prefix'
                name="prefix"
            />
        </Col>
    )
}

export { Input }