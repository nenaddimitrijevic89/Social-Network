import React from 'react';
import Modal from 'react-modal';
import { Container, Row, Button } from 'react-materialize';
import { Input } from './Input';
import { InputPassword } from './InputPassword';

const ProfileModal = ({ insertData, submitData, modalIsOpen, openModal, user, isPass, changePassword, saveNewPassword }) => {

    const changeForm = () =>{
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
            {isPass

            ?<Container>
                <h2>
                Password
                </h2>
                <hr></hr>
                <Row>
                    <InputPassword insertData={insertData}/>
                </Row>
                <Row>
                    <Button onClick={saveNewPassword}>Save</Button>
                    <Button onClick={changeForm}>change</Button>
                </Row>
            </Container>

            :<Container onKeyUp={event => event.keyCode === 13 && submitData()}>
                <h2>
                {user.fullName}
                </h2>
                <i className='fa fa-key' onClick={changeForm}><span> change password</span></i>
                <hr></hr>
                <Row>
                    <Input
                        insertData={insertData}
                        submitData={submitData}    
                    />
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