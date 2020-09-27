import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import { PostUser } from '../PostUser/PostUser';

const ImagePost = ({ src }) => {
  return (
    <Row>
      <Col m={12} s={12} l={12}>
        <Card>
          <PostUser/>
          <img src={src} alt='imagePost' style={{ width: '100%' }}/>
        </Card>
      </Col>
    </Row>
  )
}

export { ImagePost }