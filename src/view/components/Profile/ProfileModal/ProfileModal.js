import React from 'react';
import Modal from 'react-modal';
import { Container, Row, Button, Switch } from 'react-materialize';
import style from './ProfileModal.module.css';
import { InputInfo } from './Input/InputInfo';
import { InputPassword } from './Input/InputPassword';

const ProfileModal = ({ insertData, submitData, modalIsOpen, openModal, user, isPass, changePassword, saveNewPassword }) => {

    const changeForm = () => {
        changePassword()
    }

    const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(218, 218, 218, 0.5)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

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
                    onLabel={<i className='fa fa-key'><span className={style.font}> Change Password</span></i>}
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