import React from 'react';
import { Card } from 'react-materialize';

const Comments = ({ showComments }) => {
    return(
        <>
        {showComments
        &&        
            <Card>
                Comments    
            </Card>
        }
        </>
    )
}

export { Comments };