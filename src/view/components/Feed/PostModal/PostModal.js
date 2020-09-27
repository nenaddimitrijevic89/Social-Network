import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import Modal from 'react-modal';
import { customStyles }  from '../../../../shared/constants';

const PostModal =({ modalIsOpen, openModal })=>{

    return(
        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            ariaHideApp={false}
            onRequestClose={() => { openModal({}) }}
            contentLabel="modal"
        >
            <Container>
                        <h2>
                            Modal
                        </h2>
                        <hr></hr>
                        <Row>
                           
                        </Row>
                        <Row>
                            <Button>Save</Button>
                        </Row>
                    </Container>
        </Modal>
    )
}

export { PostModal };