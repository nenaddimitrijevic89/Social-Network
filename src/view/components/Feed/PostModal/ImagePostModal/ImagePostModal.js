import React from 'react';
import { Row } from 'react-materialize';

const ImagePostModal =({ writePost })=>{
    const posting=(event)=>{
        const post=event.target.files;
        const formData= new FormData();
        formData.append('image', post[0], post[0].name)
        writePost(formData)
    }
    return(
        <Row style={{ marginBottom: '26px' }}>
            <h4>Image Post</h4>
            <hr></hr>
            <img style={{ width: '100%', height: '269px', backgroundColor: 'lightGrey'}}/>                
            <div className="file-field input-field col s12">
            
                <div className="btn">
                    <i className='fa fa-upload'></i>
                    <input type="file" name='file' accept='image/jpeg' onChange={posting}/>
                </div>
                {/* <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div> */}
            </div>
        </Row>
    )
}

export { ImagePostModal };