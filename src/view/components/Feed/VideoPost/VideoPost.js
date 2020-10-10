import React from 'react';
import { Row, Col } from 'react-materialize';
import { Comments } from '../Comments/Comments';
import { PostUser } from '../PostUser/PostUser';
import style from './VideoPost.module.css';

const VideoPost = ({ post, user, deletePost, isShown, comments, users, writeComment, saveComment, deleteComment, numbOfComments }) => {
    return (
        <Row className={style.center}>
            <Col m={12} s={12} l={9} className={style.margin}>
                <div className={style.card}>
                    <PostUser user={user} post={post} deletePost={deletePost} isShown={isShown} numbOfComments={numbOfComments}/>
                    <iframe src={post.src} title='post video' className={style.video}></iframe>
                    <Comments isShown={isShown} comments={comments} users={users} writeComment={writeComment} saveComment={saveComment} deleteComment={deleteComment}/>
                </div>
            </Col>
        </Row>
    )
}

export { VideoPost }