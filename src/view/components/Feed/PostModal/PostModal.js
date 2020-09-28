import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import Modal from 'react-modal';
import { customStyles }  from '../../../../shared/constants';

const PostModal =({ modalIsOpen, openModal, writePost, savePost })=>{
    
    const posting=(event)=>{
        const post=event.target.value;
        writePost(post)
    }

    return(
        <Modal
            isOpen={modalIsOpen}
            style={customStyles('65%')}
            ariaHideApp={false}
            onRequestClose={() => { openModal() }}
            contentLabel="modal"
        >
            <Container>
                <h2>
                    Text Post
                </h2>
                <hr></hr>
                <Row>
                    <div className="input-field col s12">
                        <textarea id="textarea2" className="materialize-textarea" data-length="120" onChange={posting}></textarea>
                        <label htmlFor="textarea2">Write something...</label>
                    </div>
                </Row>
                <Row>
                    <Button onClick={savePost}>Save</Button>
                </Row>
            </Container>
        </Modal>
    )
}

export { PostModal };