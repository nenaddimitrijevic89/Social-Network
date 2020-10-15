import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import { InputInfo } from '../Input/InputInfo';

const InfoChange = ({ user, submitData, insertData }) => {
    return (
        <Container onKeyUp={event => event.keyCode === 13 && submitData()}>
            <p>
                Update info
            </p>
            <hr></hr>
            <Row>
                <InputInfo insertData={insertData} />
            </Row>
            <Row>
                <Button onClick={submitData}><i className='fa fa-send'></i></Button>
            </Row>
        </Container>
    )
}

export { InfoChange };