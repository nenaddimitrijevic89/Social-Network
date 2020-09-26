import React from 'react';
import { Row, Col } from 'react-materialize';

const TextPost = ({ src }) => {
  return (
    <Row>
      <Col m={12} s={12}>
        <h1>{src}</h1>
      </Col>
    </Row>
  )
}

export { TextPost };