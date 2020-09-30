import React from 'react';
import { Row } from 'react-materialize';

const ImagePostModal =({ writePost })=>{
    const posting=(event)=>{
        const post=event.target.files;
        console.log(post[0])
        writePost(post[0])
    }
    return(
        <Row>
            <h2>
                Image Post
            </h2>
            <hr></hr>                
            <div className="file-field input-field">
                <div className="btn">
                    <span>File</span>
                    <input type="file" name='file'onChange={posting}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
            </div>
        </Row>
    )
}

export { ImagePostModal };