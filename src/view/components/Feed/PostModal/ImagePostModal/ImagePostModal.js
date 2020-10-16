import React from 'react';
import { Row } from 'react-materialize';

const ImagePostModal =({ writePost, imagePreview, postImage })=>{
    const posting=(event)=>{
        const post=event.target.files;
        const preview=URL.createObjectURL(post[0])
        const formData= new FormData();
        formData.append('image', post[0], post[0].name)
        imagePreview(preview)
        writePost(formData)
    }
    return(
        <Row style={{ marginBottom: '26px' }}>
            <h4>Image Post</h4>
            <hr></hr>
            <img src={postImage} style={{ width: '100%', height: '269px', backgroundColor: 'lightGrey', objectFit: 'cover'}}/>                
            <div className="file-field input-field col s12" style={{ marginBottom: '23px'}}>
                <div className="btn">
                    <i className='fa fa-upload'></i>
                    <input type="file" name='file' onChange={posting} accept="image/png, image/jpeg"/>
                </div>
            </div>
        </Row>
    )
}

export { ImagePostModal };