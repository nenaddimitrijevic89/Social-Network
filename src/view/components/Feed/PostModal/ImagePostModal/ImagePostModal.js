import React from 'react';
import { Row } from 'react-materialize';

const ImagePostModal =({ writePost })=>{
    const posting=(event)=>{
        const post=event.target.value;
        writePost(post)
    }
    return(
        <Row>
            <h2>
                Image Post
            </h2>
            <hr></hr>                
            <div class="file-field input-field">
                <div class="btn">
                    <span>File</span>
                    <input type="file"/>
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" onDrag={posting}/>
                </div>
            </div>
        </Row>
    )
}

export { ImagePostModal };