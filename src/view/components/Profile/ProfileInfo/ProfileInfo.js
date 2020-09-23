import React from 'react';
import avatar from '../../../../images/user.png';
import style from '../Profile.module.css';

const ProfileInfo =({ user, openModal })=>{
    return(
        <>
            <h1 className={`center-align ${style.nameWidth}`}>{user.fullName}</h1>
            <h4 className='center-align'>{user.prefix}</h4>
            <div className='center-align'>
                <img src={avatar} className={`${style.image} center-align`} alt='avatar' />
            </div>
            <div className='center-align'>
                <h5 onClick={() => openModal(user)} className={style.edit}><i className={`fa fa-edit ${style.editIcon}`}></i> edit user</h5>
            </div>
            <h4 className='center-align'><i className='fa fa-envelope'></i> {user.email}</h4>
            <h4 className='center-align'>{user.about}</h4>
        </>
    )
}

export { ProfileInfo };