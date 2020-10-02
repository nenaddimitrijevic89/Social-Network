import React from 'react';
import { Card } from 'react-materialize';

const Comments = ({ isShown }) => {
    return(
        <>
        {isShown
        &&      
        <Card>
            Comments    
        </Card>
        }
        </>
    )
}

export { Comments };