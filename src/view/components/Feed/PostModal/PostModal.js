import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import Modal from 'react-modal';
import { customStyles }  from '../../../../shared/constants';
import { TextPostModal } from './TextPostModal.js/TextPostModal';
import { ImagePostModal } from './ImagePostModal/ImagePostModal';

const PostModal =({ modalIsOpen, openModal, writePost, savePost })=>{
    
    return(
        <Modal
            isOpen={modalIsOpen}
            style={customStyles('65%')}
            ariaHideApp={false}
            onRequestClose={() => { openModal() }}
            contentLabel="modal"
        >
            <Container>
                <TextPostModal writePost={writePost} />
                <ImagePostModal/>
                <Row>
                    <Button onClick={savePost}>Save</Button>
                </Row>
            </Container>
        </Modal>
    )
}

export { PostModal };