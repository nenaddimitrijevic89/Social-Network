import React from 'react';
import { Card, Col, Row } from 'react-materialize';
import avatar from '../../../../images/user.png';
import style from './ProfileInfo.module.css';

const ProfileInfo =({ user, openModal })=>{
    return(
        <Row className={style.center}>
            <Col m={12} s={12} l={9} className={style.margin}>
                <Card>
                    <h1 className={`center-align ${style.nameWidth}`}>{user.fullName}</h1>
                    <h4 className={`center-align ${style.font}`}>{user.prefix}</h4>
                    <div className='center-align'>
                        <img src={user.avatarUrl ? user.avatarUrl : avatar} className={`${style.image} center-align`} alt='avatar' />
                    </div>
                    <div className='center-align'>
                        <h5 onClick={() => openModal(user)} className={style.edit}><i className={`fa fa-edit ${style.editIcon}`}></i> edit user</h5>
                    </div>
                    <h4 className={`center-align ${style.font}`}><i className='fa fa-envelope'></i> {user.email}</h4>
                    <h4 className={`center-align ${style.font}`}>{user.about}</h4>
                </Card>
            </Col>
        </Row>
    )
}

export { ProfileInfo };