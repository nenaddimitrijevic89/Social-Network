import React from 'react';
import { Col } from 'react-materialize';
import { Link } from 'react-router-dom';

const User=({ user })=>{
    const {firstName, lastName, email, id} = user;
    return(
        <Link to={`/people/${id}`}><Col>
            <h4>{`${firstName} ${lastName}`}</h4>
            <h6>{email}</h6>
        </Col></Link>
    )
}

export { User };