import React from 'react';
import { Col, Row } from 'react-materialize';
import style from './ProfileCard.module.css';

const ProfileCard =({ user, openModal })=>{
    return(
        <Row className={style.center}>
            <Col m={12} s={12} l={9} className={style.margin}>
                <div className={style.card}>
                <div className={style.cardHeader}>
                    <img src={user.avatarUrl} alt="Profile Image" className={style.profileImg} />
                </div>
                <div className={style.cardBody}>
                    <p className={style.fullName}>{user.fullName}</p>
                    <p className={style.username}><i className='fa fa-envelope'></i> {user.email}</p>
                    <p className={style.city}>{user.prefix}</p>
                    <p className={style.desc}>{user.about}</p>
                    <p>
                        <i onClick={openModal} className="fa fa-facebook-f"></i>
                        {/* <a href="#" className="social-icon twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="social-icon tumblr"><i className="fa fa-tumblr"></i></a>
                        <a href="#" className="social-icon youtube"><i className="fa fa-youtube"></i></a>
                        <a href="#" className="social-icon linkedin"><i className="fa fa-linkedin"></i></a>
                        <a href="#" className="social-icon google-plus"><i className="fa fa-google-plus"></i></a> */}
                    </p>
                </div>
                <div className={style.cardFooter}>
                    <div className={`${style.col} ${style.vr}`}>
                        <p><span className={style.count}>1.8K</span> Followers</p>
                    </div>
                    <div className={style.col}>
                        <p><span className={style.count}>2.0K</span> Following</p>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
    )
}

export { ProfileCard };