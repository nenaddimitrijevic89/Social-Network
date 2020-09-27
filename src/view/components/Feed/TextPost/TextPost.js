import React from 'react';
import { Row, Col, CardPanel, Card } from 'react-materialize';
import { PostUser } from '../PostUser/PostUser';
import style from './TextPost.module.css';

const TextPost = ({ post, user }) => {
  return (
    <Row className={style.center}>
      <Col m={12} s={12} l={9} className={style.margin}>
        <Card>
          <PostUser user={user} post={post}/>
          <CardPanel className="teal" style={{marginTop: '0px'}}>
            <span className="white-text">{post.src}</span>
          </CardPanel>
        </Card>
      </Col>
    </Row>
  )
}

export { TextPost };