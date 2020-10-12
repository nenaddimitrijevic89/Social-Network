import React from 'react';
import { Col, TextInput } from 'react-materialize';

const InputProfileImage =({ setImage })=>{

    const posting=(event)=>{
        const post=event.target.files;
        const formData= new FormData();
        formData.append('image', post[0], post[0].name)
        setImage(formData)
    }

    return(
        <Col>
            <TextInput
                onChange={posting}
                id='TextInput-15'
                type='file'
                label='Picture'
            />
            <TextInput
                id='TextInput-16'
                style={{ visibility: 'hidden' }}
            />
            <TextInput                
                id='TextInput-17'
                style={{ visibility: 'hidden' }}
            />
            <TextInput                
                id='TextInput-18'
                style={{ visibility: 'hidden' }}
            />
        </Col>
    )
}

export { InputProfileImage };