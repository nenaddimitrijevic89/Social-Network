import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import { InputInfo } from '../Input/InputInfo';

const InfoChange =({ user, submitData, insertData })=>{
    return(
        <Container onKeyUp={event => event.keyCode === 13 && submitData()}>
            <h2>
                {user.fullName}
            </h2>
            <hr></hr>
            <Row>
                <InputInfo insertData={insertData} />
            </Row>
            <Row>
                <Button onClick={submitData}>Save</Button>
            </Row>
        </Container>
    )
}

export { InfoChange };