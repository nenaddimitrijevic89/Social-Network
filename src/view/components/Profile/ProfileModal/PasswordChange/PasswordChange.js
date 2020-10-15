import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import { InputPassword } from '../Input/InputPassword';

const PasswordChange = ({ user, saveNewPassword, insertData }) => {
    return (
        <Container onKeyUp={event => event.keyCode === 13 && saveNewPassword()}>
            <p>
                Change password
            </p>
            <hr></hr>
            <Row>
                <InputPassword insertData={insertData} email={user.email} />
            </Row>
            <Row>
                <Button onClick={saveNewPassword}><i className='fa fa-send'></i></Button>
            </Row>
        </Container>
    )
}

export { PasswordChange };