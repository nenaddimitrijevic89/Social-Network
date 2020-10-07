import React from 'react';
import Modal from 'react-modal';
import { Button, Switch } from 'react-materialize';
import { customStyles } from '../../../../shared/constants';
import { PasswordChange } from './PasswordChange/PasswordChange';
import { InfoChange } from './InfoChange/InfoChange';
import { ProfileImageChange } from './ProfileImageChange/ProfileImageChange';

const ProfileModal = ({ insertData, submitData, modalIsOpen,
                        openModal, user, isPassword, saveNewPassword,
                        isProfileImage, isInfo, changeInfo,
                        changePassword, changeProfileImage }) => {

    return (
        <Modal
            isOpen={modalIsOpen}
            style={customStyles('')}
            ariaHideApp={false}
            onRequestClose={() => { openModal({}) }}
            contentLabel="modal"
        >
            <>
                {/* <Switch
                    className='center-align'
                    id="Switch-11"
                    offLabel="Info"
                    onChange={changeForm}
                    onLabel='Change Password'
                /> */}

                <Button onClick={changeInfo}>Info</Button>
                <Button onClick={changePassword}>Password</Button>
                <Button onClick={changeProfileImage}>Image</Button>

                {isPassword && <PasswordChange user={user} saveNewPassword={saveNewPassword} insertData={insertData}/>}

                {isInfo && <InfoChange user={user} submitData={submitData} insertData={insertData}/>} 

                 {isProfileImage && <ProfileImageChange user={user}/>}
            </>
        </Modal>
    )
}

export { ProfileModal };