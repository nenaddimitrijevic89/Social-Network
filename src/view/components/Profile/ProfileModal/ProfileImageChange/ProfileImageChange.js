import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import { InputProfileImage } from '../Input/InputProfileImage';

const ProfileImageChange = ({ user, uploadImage, setImage }) => {
    return(
        <Container>
            <h2>
                {user.fullName}
            </h2>
            <hr></hr>
            <Row>
                <InputProfileImage setImage={setImage}/>
            </Row>
            <Row>
                <Button onClick={uploadImage}>Save</Button>
            </Row>
        </Container>
    )
}

export { ProfileImageChange };