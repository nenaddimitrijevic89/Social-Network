import React from 'react';
import { Row } from 'react-materialize';
import { embed } from '../../../../../shared/utilities';

const VideoPostModal =({ writePost, src })=>{
    const posting=(event)=>{
        const post=event.target.value;
        writePost(post)
    }
    return(
        <Row>
            <h4>Video Post</h4>
            <hr></hr>
            <iframe src={embed(src)} style={{ width: '100%', height: '269px', backgroundColor: 'lightGrey'}}/>                
            <div className="input-field col s12">
                
                <textarea id="textarea2" className="materialize-textarea" data-length="120" onChange={posting}></textarea>
                <label htmlFor="textarea2">Upload YouTube video</label>
            </div>
        </Row>
    )
}

export { VideoPostModal };