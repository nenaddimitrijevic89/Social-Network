import React from 'react';
import { Row, Col } from 'react-materialize';

const TextPost = ({ text }) => {
  return (
    <Row>
      <Col m={12} s={12}>
        <>{text}</>
      </Col>
    </Row>
  )
}

export { TextPost };