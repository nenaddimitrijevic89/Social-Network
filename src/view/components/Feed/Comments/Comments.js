import React from 'react';
import { Card } from 'react-materialize';
import { Comment } from './Comment/Comment';

const Comments = ({ isShown, comments, users }) => {

   

    return(
        <>
        {isShown
        &&
        <>      
            <Card>
                <i className='fa fa-pencil'> Write comment</i>
                <input type='text'/>
            </Card>
            <>
            {comments.length
            ?<>{comments.map(comment => <Comment comment={comment} users={users}/>)}</>
            :<></>
            }
            </>
        </>
        }
        </>
    )
}

export { Comments };