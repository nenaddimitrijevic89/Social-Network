import React from 'react';
import { Row } from 'react-materialize';

const VideoPostModal =({ writePost })=>{
    const posting=(event)=>{
        const post=event.target.value;
        writePost(post)
    }
    return(
        <Row>
            <h2>
                Video Post
            </h2>
            <hr></hr>                
            <div className="input-field col s12">
                <textarea id="textarea2" className="materialize-textarea" data-length="120" onChange={posting}></textarea>
                <label htmlFor="textarea2">Upload YouTube video</label>
            </div>
        </Row>
    )
}

export { VideoPostModal };