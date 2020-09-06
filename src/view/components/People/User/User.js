import React from 'react';
import { Col, Row, Card, CardTitle } from 'react-materialize';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { firstName, lastName, email, id } = user;
    return (
        <Link to={`/people/${id}`}>
            <Row>
                {/* <Col s={12} m={6} l={4}>
                    <Card
                        header={<CardTitle></CardTitle>}
                    ></Card>
                </Col> */}
                <Col s={12} m={6} l={8}>
                    <Card className=''>
                        <h3 className=''>{`${firstName} ${lastName}`}</h3>
                        <h5>{email}</h5>
                    </Card>
                </Col>
            </Row>
        </Link>
    )
}

export { User };