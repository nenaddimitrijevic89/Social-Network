import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import { Comments } from '../Comments/Comments';
import { PostUser } from '../PostUser/PostUser';
import style from './ImagePost.module.css';

const ImagePost = ({ post, user, deletePost, isShown, comments }) => {
  return (
    <Row className={style.center}>
      <Col m={12} s={12} l={9} className={style.margin}>
        <Card>
          <PostUser user={user} post={post} deletePost={deletePost} isShown={isShown}/>
          <img src={post.src} alt='imagePost' style={{ width: '100%' }} />
          <Comments isShown={isShown} comments={comments}/>
        </Card>
      </Col>
    </Row>
  )
}

export { ImagePost };