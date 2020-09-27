import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import { PostUser } from '../PostUser/PostUser';
import style from './VideoPost.module.css';

const VideoPost = ({ post, user }) => {
    return (
        <Row>
            <Col>
                <Card className={style.div}>
                    <PostUser user={user} post={post}/>
                    <iframe src={post.src} title='post video' className={style.video}></iframe>
                </Card>
            </Col>
        </Row>
    )
}

export { VideoPost }