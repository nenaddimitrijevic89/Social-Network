import React from 'react';
import style from './PostUser.module.css';
import avatar from '../../../../images/user.png';
import { convertDate } from '../../../../shared/utilities';

const PostUser =({ user, post })=> {
    console.log(user)
    return(
        <div className={style.user}>
            <div className={style.img}>
                <img className={style.radius} src={user.avatarUrl ? user.avatarUrl: avatar } alt='user'></img>
            </div>
            <div className={style.info}>
                <p><span> </span></p>
                <p><span> {user[0] ? user[0].fullName : 'unknown'}</span></p>
                <p>created:<span> {convertDate(post.createdAt)}</span></p>
            </div>
        </div>
    )
}

export { PostUser };