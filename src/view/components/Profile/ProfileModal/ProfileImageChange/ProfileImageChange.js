import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import { InputProfileImage } from '../Input/InputProfileImage';

const ProfileImageChange = ({ user }) => {
    return(
        <Container>
            <h2>
                {user.fullName}
            </h2>
            <hr></hr>
            <Row>
                <InputProfileImage />
            </Row>
            <Row>
                <Button >Save</Button>
            </Row>
        </Container>
    )
}

export { ProfileImageChange };