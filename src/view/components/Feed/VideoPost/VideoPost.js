import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import { Comments } from '../Comments/Comments';
import { PostUser } from '../PostUser/PostUser';
import style from './VideoPost.module.css';

const VideoPost = ({ post, user, deletePost, isShown, comments, users, writeComment, saveComment }) => {
    return (
        <Row className={style.center}>
            <Col m={12} s={12} l={9} className={style.margin}>
                <Card className={style.div}>
                    <PostUser user={user} post={post} deletePost={deletePost} isShown={isShown}/>
                    <iframe src={post.src} title='post video' className={style.video}></iframe>
                    <Comments isShown={isShown} comments={comments} users={users} writeComment={writeComment} saveComment={saveComment}/>
                </Card>
            </Col>
        </Row>
    )
}

export { VideoPost }