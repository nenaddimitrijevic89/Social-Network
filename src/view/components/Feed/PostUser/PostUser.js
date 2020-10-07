import React from 'react';
import style from './PostUser.module.css';
import avatar from '../../../../images/user.png';
import { convertDate } from '../../../../shared/utilities';
import { Link } from 'react-router-dom';

const PostUser = ({ user, post, deletePost, isShown, numbOfComments }) => {
    return (
        <div className={style.user}>
            <div className={style.img}>
                {isShown
                ? <img className={style.radius} src={user?.avatarUrl || avatar} alt='user'></img>
                : <img className={style.radius} src={user?.avatarUrl || avatar} alt='user'></img>}
            </div>
            <div className={style.info}>
                {isShown
                ? <p><span className={style.bold}> {user?.fullName || 'Deleted Account'}</span></p>
                : <p><span className={style.bold}> {user?.fullName || 'Deleted Account'}</span></p>}
                <p><span> {convertDate(post.createdAt)}</span></p>
            </div>
            <i className={`${style.trash} fa fa-trash`} onClick={() => deletePost(post.id)}></i>
            {!isShown && <Link to={`/feed/post/${post.id}`}>
                            <i className={`${style.comment} fa fa-comment`}>
                                <span className={style.numb}>{numbOfComments === 0 ? '' : numbOfComments}</span>
                            </i>
                        </Link>}
        </div>
    )
}

export { PostUser };