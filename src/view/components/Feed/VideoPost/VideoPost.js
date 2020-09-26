import React from 'react';
import { Row, Col } from 'react-materialize';

const VideoPost = ({ src }) => {
    return (
        <Row>
            <Col>
                <iframe src={src} title='post video'></iframe>
            </Col>
        </Row>
    )
}

export { VideoPost }