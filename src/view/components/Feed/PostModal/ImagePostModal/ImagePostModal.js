import React from 'react';
import { Row } from 'react-materialize';

const ImagePostModal =({ writePost })=>{
    const posting=(event)=>{
        const post=event.target.value;
        console.log(post)
        writePost(post)
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
                    <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" onChange={posting}/>
                </div>
            </div>
        </Row>
    )
}

export { ImagePostModal };