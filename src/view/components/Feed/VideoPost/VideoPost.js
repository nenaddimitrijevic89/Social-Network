import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import { PostUser } from '../PostUser/PostUser';
import style from './VideoPost.module.css';

const VideoPost = ({ post, user }) => {
    return (
        <Row className={style.center}>
            <Col m={12} s={12} l={9} className={style.margin}>
                <Card className={style.div}>
                    <PostUser user={user} post={post}/>
                    <iframe src={post.src} title='post video' className={style.video}></iframe>
                </Card>
            </Col>
        </Row>
    )
}

export { VideoPost }