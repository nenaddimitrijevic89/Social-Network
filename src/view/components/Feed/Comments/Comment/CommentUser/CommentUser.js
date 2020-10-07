import React from 'react';
import { convertDate } from '../../../../../../shared/utilities';
import style from './CommentUser.module.css';
import avatar from '../../../../../../images/user.png';

const CommentUser =({ comment, commentUser, deleteComment })=>{
    return(
        <div className={style.user}>
            <div className={style.img}>
                <img className={style.radius} src={commentUser?.avatarUrl || avatar} alt='user'></img>
            </div>
            <div className={style.info}>
                <p><span className={style.bold}> {commentUser?.fullName || 'Deleted Account'}</span></p>
                <p><span> {convertDate(comment.createdAt)}</span></p>
            </div>
            <i className={`${style.trash} fa fa-trash`} onClick={() => deleteComment(comment.id)}></i>
        </div>
    )
}

export { CommentUser };