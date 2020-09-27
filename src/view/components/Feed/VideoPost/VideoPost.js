import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import { PostUser } from '../PostUser/PostUser';

const VideoPost = ({ src }) => {
    return (
        <Row>
            <Col>
                <Card>
                    <PostUser/>
                    <iframe src={src} title='post video' width='720px' height='400px'></iframe>
                </Card>
            </Col>
        </Row>
    )
}

export { VideoPost }