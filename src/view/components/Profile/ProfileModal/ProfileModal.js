import React from 'react';
import Modal from 'react-modal';
import { Button } from 'react-materialize';
import { customStyles } from '../../../../shared/constants';
import { PasswordChange } from './PasswordChange/PasswordChange';
import { InfoChange } from './InfoChange/InfoChange';
import { ProfileImageChange } from './ProfileImageChange/ProfileImageChange';

const ProfileModal = ({ insertData, submitData, modalIsOpen,
                        openModal, user, isPassword, saveNewPassword,
                        isProfileImage, isInfo, changeInfo,
                        changePassword, changeProfileImage, uploadImage, setImage }) => {

    return (
        <Modal
            isOpen={modalIsOpen}
            style={customStyles('')}
            ariaHideApp={false}
            onRequestClose={() => { openModal({}) }}
            contentLabel="modal"
        >
            <>
                <Button onClick={changeInfo} style={{marginRight: '5px'}}><i className='fa fa-info'></i></Button>
                <Button onClick={changePassword} style={{marginRight: '5px'}}><i className='fa fa-key'></i></Button>
                <Button onClick={changeProfileImage}><i className='fa fa-user-circle-o'></i></Button>

                {isPassword && <PasswordChange user={user} saveNewPassword={saveNewPassword} insertData={insertData}/>}

                {isInfo && <InfoChange user={user} submitData={submitData} insertData={insertData}/>} 

                {isProfileImage && <ProfileImageChange user={user} uploadImage={uploadImage} setImage={setImage}/>}
            </>
        </Modal>
    )
}

export { ProfileModal };