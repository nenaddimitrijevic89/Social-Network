import React from 'react';
import Modal from 'react-modal';
import { Container, Row, Button, Switch } from 'react-materialize';
import { InputInfo } from './Input/InputInfo';
import { InputPassword } from './Input/InputPassword';
import { customStyles } from '../../../../shared/constants';

const ProfileModal = ({ insertData, submitData, modalIsOpen, openModal, user, isPass, changeForm, saveNewPassword }) => {

    return (
        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            ariaHideApp={false}
            onRequestClose={() => { openModal({}) }}
            contentLabel="modal"
        >
            <>
                <Switch
                    className='center-align'
                    id="Switch-11"
                    offLabel="Info"
                    onChange={changeForm}
                    onLabel='Change Password'
                />
                {isPass

                    ? <Container onKeyUp={event => event.keyCode === 13 && saveNewPassword()}>
                        <h2>
                            {user.fullName}
                        </h2>
                        <hr></hr>
                        <Row>
                            <InputPassword insertData={insertData} email={user.email} />
                        </Row>
                        <Row>
                            <Button onClick={saveNewPassword}>Save</Button>
                        </Row>
                    </Container>

                    : <Container onKeyUp={event => event.keyCode === 13 && submitData()}>
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
                }
            </>
        </Modal>
    )
}

export { ProfileModal };