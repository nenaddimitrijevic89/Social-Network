import React from 'react';
import { Row, Col, Card, Icon } from 'react-materialize';

const TextPost=()=>{
    return(
        <Row>
  <Col
    m={12}
    s={12}
  >
    <Card
      actions={[
        <a key="1">Text Post</a>,
        <a key="2">Comments</a>
      ]}
      className="blue-grey darken-1"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="white-text"
      title="Card title"
    >
      Post
    </Card>
  </Col>
</Row>
    )
}

export {TextPost};