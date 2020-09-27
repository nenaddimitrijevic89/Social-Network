import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import { PostUser } from '../PostUser/PostUser';

const ImagePost = ({ post, user }) => {
  return (
    <Row>
      <Col m={12} s={12} l={12}>
        <Card>
          <PostUser user={user} post={post}/>
          <img src={post.src} alt='imagePost' style={{ width: '100%' }}/>
        </Card>
      </Col>
    </Row>
  )
}

export { ImagePost };