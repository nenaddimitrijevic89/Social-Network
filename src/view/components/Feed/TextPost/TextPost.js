import React from 'react';
import { Row, Col, CardPanel, Card } from 'react-materialize';
import { PostUser } from '../PostUser/PostUser';

const TextPost = ({ src }) => {
  return (
    <Row>
      <Col m={12} s={12}>
        <Card>
          <PostUser />
          <CardPanel className="teal">
            <span className="white-text">{src}</span>
          </CardPanel>
        </Card>
      </Col>
    </Row>
  )
}

export { TextPost };