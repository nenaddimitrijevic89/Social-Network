import React from 'react';
import { Row, Col, CardPanel, Card } from 'react-materialize';
import { PostUser } from '../PostUser/PostUser';

const TextPost = ({ post, user }) => {
  return (
    <Row>
      <Col m={12} s={12}>
        <Card>
          <PostUser user={user} post={post}/>
          <CardPanel className="teal">
            <span className="white-text">{post.src}</span>
          </CardPanel>
        </Card>
      </Col>
    </Row>
  )
}

export { TextPost };