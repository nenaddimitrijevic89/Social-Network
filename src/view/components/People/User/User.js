import React from 'react';
import { Col, Row } from 'react-materialize';
import { Link } from 'react-router-dom';
import avatar from '../../../../images/user.png';
import style from './User.module.css';

const User = ({ user }) => {
    const { email, id, fullName } = user;
    return (
        <Link to={`/people/${id}`}>
            <Row className={`${style.margin} ${style.center}`}>
                <Col className={`${style.user} ${style.marginSide}`} s={12} m={12} l={9}>
                    <div className=''>
                        <img className={style.image} src={user.avatarUrl ? user.avatarUrl : avatar} alt='avatar'></img>
                    </div>
                    <div className={style.info}>
                        <p><span className={style.bold}> {fullName}</span></p>
                        <p><i className="fa fa-envelope"></i><span> {email}</span></p>
                        <p>posts</p>
                        <p>comments</p>
                    </div>
                </Col>
            </Row>
        </Link>
    )
}

export { User };