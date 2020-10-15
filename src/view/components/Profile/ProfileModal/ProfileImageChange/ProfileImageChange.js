import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import { InputProfileImage } from '../Input/InputProfileImage';

const ProfileImageChange = ({ user, uploadImage, setImage, avatar, imagePreview }) => {
    console.log(avatar)
    return (
        <Container>
            <p>
                Update profile image
            </p>
            <hr></hr>
            <Row>
                <img src={avatar} style={{ width: '320px', height: '269px', backgroundColor: 'grey' }} />
                <InputProfileImage setImage={setImage} imagePreview={imagePreview} />
            </Row>
            <Row>
                <Button onClick={uploadImage}><i className='fa fa-send'></i></Button>
            </Row>
        </Container>
    )
}

export { ProfileImageChange };