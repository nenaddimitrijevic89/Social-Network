import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import Modal from 'react-modal';
import { customStyles }  from '../../../../shared/constants';
import { TextPostModal } from './TextPostModal.js/TextPostModal';
import { ImagePostModal } from './ImagePostModal/ImagePostModal';
import { VideoPostModal } from './VideoPostModal/VideoPostModal';

const PostModal =({ modalIsOpen, openModal, writePost, savePost,changeText, changeImage, changeVideo, isText, isImage, isVideo, uploadImage })=>{
    
    return(
        <Modal
            isOpen={modalIsOpen}
            style={customStyles('65%')}
            ariaHideApp={false}
            onRequestClose={() => { openModal() }}
            contentLabel="modal"
        >
            <Container>
                <Button onClick={changeText} name='text' style={{marginRight: '5px'}}><i className='fa fa-pencil'></i></Button>
                <Button onClick={changeImage} name='image' style={{marginRight: '5px'}}><i className='fa fa-image'></i></Button>
                <Button onClick={changeVideo} name='video'><i className='fa fa-play'></i></Button>

                {isText && <TextPostModal writePost={writePost} />}

                {isImage && <ImagePostModal writePost={writePost} />}
                
                {isVideo && <VideoPostModal writePost={writePost}/>}

                <Row>
                    {(isText || isVideo) && <Button onClick={savePost}>Save</Button>}
                    {isImage && <Button onClick={uploadImage}>Upload</Button>}
                    
                </Row>
            </Container>
        </Modal>
    )
}

export { PostModal };