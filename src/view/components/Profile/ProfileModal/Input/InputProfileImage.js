import React from 'react';
import { Col, TextInput } from 'react-materialize';

const InputProfileImage =({ setImage, imagePreview })=>{

    const posting=(event)=>{
        const post=event.target.files;
        const preview= URL.createObjectURL(event.target.files[0])
        const formData= new FormData();
        formData.append('image', post[0], post[0].name)
        imagePreview(preview)
        setImage(formData)
    }

    return(
        <Col s={12} m={6} l={6}>
            {/* <TextInput
                onChange={posting}
                id='TextInput-15'
                type='file'
                label='Picture'
            /> */}
             <div class="file-field input-field">
                <div class="btn">
                    <span>File</span>
                    <input type="file" onChange={posting}/>
                </div>
            </div>
            {/* <TextInput
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
            /> */}
        </Col>
    )
}

export { InputProfileImage };