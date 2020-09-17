import React from 'react';
import Modal from 'react-modal';
import { Container, Row, Button } from 'react-materialize';
import { Input } from './Input';

const ProfileModal = ({ insertData, submitData, modalIsOpen, openModal, user, isPass, changePassword }) => {

    const a = () =>{
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
            ariaHideApp={true}
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
                    Password
                </Row>
                <Row>
                    <Button>Save</Button>
                    <Button onClick={a}>change</Button>
                </Row>
            </Container>

            :<Container onKeyUp={event=>event.keyCode === 13 && submitData()}>
                <h2>
                {user.fullName}
                </h2>
                <hr></hr>
                <Row>
                    <Input
                        insertData={insertData}
                        submitData={submitData}    
                    />
                </Row>
                <Row>
                    <Button onClick={submitData}>Save</Button>
                    <Button onClick={a}><i className='fa fa-key'><span> change password</span></i></Button>
                </Row>
            </Container>
            }
            


            
            </>
        </Modal>
    )
}

export { ProfileModal };