import React from 'react';
import { Button, Card } from 'react-materialize';
import { Comment } from './Comment/Comment';

const Comments = ({ isShown, comments, users, writeComment, saveComment, deleteComment }) => {

    const writing =(event)=>{
        const text = event.target.value;
        writeComment(text)
    }

    return(
        <>
        {isShown
        &&
        <>      
            <Card>
                <i className='fa fa-pencil'> Write comment</i>
                <input type='text'onChange={writing}/><Button onClick={saveComment}>Save</Button>
            </Card>
            <>
            {comments.length
            ?<>{comments.map(comment => <Comment comment={comment} users={users} deleteComment={deleteComment}/>)}</>
            :<></>
            }
            </>
        </>
        }
        </>
    )
}

export { Comments };