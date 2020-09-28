import React from 'react';
import style from './PostUser.module.css';
import avatar from '../../../../images/user.png';
import { convertDate } from '../../../../shared/utilities';

const PostUser =({ user, post })=> {
    if(!user[0]){
        return <></>
    }
    return(
        <div className={style.user}>
            <div className={style.img}>
                <img className={style.radius} src={user[0].avatarUrl ? user[0].avatarUrl: avatar } alt='user'></img>
            </div>
            <div className={style.info}>
                <p><span className={style.bold}> {user[0] ? user[0].fullName : 'unknown'}</span></p>
                <p>created:<span> {convertDate(post.createdAt)}</span></p>
            </div>
        </div>
    )
}

export { PostUser };