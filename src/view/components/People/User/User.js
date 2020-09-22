import React from 'react';
import { Col, Row } from 'react-materialize';
import { Link } from 'react-router-dom';
import avatar from '../../../../images/user.png';
import style from './User.module.css';

const User = ({ user }) => {
    const { firstName, lastName, email, id } = user;
    return (
        <Link to={`/people/${id}`}>
            <Row className={style.margin}>
                <Col className={style.user} lg={12}>
                    <div className=''>
                        <img className={style.image} src={avatar} alt='avatar'></img>
                    </div>
                    <div className={style.info}>
                        <p><span> {firstName} {lastName}</span></p>
                        <p><i className="fa fa-envelope"></i><span> {email}</span></p>
                    {/* </div>
                    <div className={style.info}> */}
                        <p>posts</p>
                        <p>comments</p>
                    </div>
                </Col>
            </Row>
        </Link>
    )
}

export { User };