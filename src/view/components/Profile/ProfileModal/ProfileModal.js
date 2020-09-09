import React from 'react';
import Modal from 'react-modal';
import { Container, Row } from 'react-materialize';
import { Input } from './Input';

const ProfileModal = ({ insertData, submitData, modalIsOpen, openModal, user }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => { openModal({}) }}
            contentLabel="modal"
        >
            <Container>
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
            </Container>
        </Modal>
    )
}

export { ProfileModal };