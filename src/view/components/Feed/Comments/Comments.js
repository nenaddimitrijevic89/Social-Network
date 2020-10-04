import React from 'react';
import { Card } from 'react-materialize';

const Comments = ({ isShown, comments }) => {
    return(
        <>
        {isShown
        &&      
        <Card>
            <i className='fa fa-pencil'></i>
            <input type='text'/>
            {comments.map(comment => <p>{comment.body}</p>)}
        </Card>
        }
        </>
    )
}

export { Comments };