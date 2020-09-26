import React from 'react';
import { Row, Col } from 'react-materialize';

const ImagePost = ({ src }) => {
  return (
    <Row>
      <Col m={12} s={12}>
        <img src={src} alt='imagePost'/>
      </Col>
    </Row>
  )
}

export { ImagePost }