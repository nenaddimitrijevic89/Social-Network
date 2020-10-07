import React from 'react';
import { Col, TextInput } from 'react-materialize';

const InputProfileImage =()=>{
    return(
        <Col>
            <TextInput
            // onChange={changeData}
                id='TextInput-15'
                type='file'
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