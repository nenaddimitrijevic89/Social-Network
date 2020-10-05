import React from 'react';
import { Card } from 'react-materialize';

const Comments = ({ isShown, comments }) => {
    console.log(comments)
    return(
        <>
        {isShown
        &&
        <>      
            <Card>
                <i className='fa fa-pencil'></i>
                <input type='text'/>
            </Card>
            <Card>
            {!comments
            ?<></>
            :<>{comments.map(comment => <p>{comment.body}</p>)}</>
            }
            </Card>
        </>
        }
        </>
    )
}

export { Comments };