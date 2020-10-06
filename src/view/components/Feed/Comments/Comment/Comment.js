import React from 'react';
import { Card, CardPanel } from 'react-materialize';
import { convertDate } from '../../../../../shared/utilities';
import style from './Comment.module.css';
import avatar from '../../../../../images/user.png';

const Comment =({ comment, users, deleteComment })=>{
   
    const filterCommentUser=(id)=>{
        const commUser = users.filter(user => user.id === id);
        return commUser[0];
    }

    const commentUser=filterCommentUser(comment.owner)
     
    return(
        <Card>
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
            <CardPanel className="grey" style={{ marginTop: '0px' }}>
            <span className="white-text">{comment.body}</span>
          </CardPanel>
        </Card>
    )
}

export { Comment };