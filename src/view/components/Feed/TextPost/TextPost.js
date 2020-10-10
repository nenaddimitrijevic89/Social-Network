import React from 'react';
import { Row, Col, CardPanel } from 'react-materialize';
import { Comments } from '../Comments/Comments';
import { PostUser } from '../PostUser/PostUser';
import style from './TextPost.module.css';

const TextPost = ({ post, user, deletePost, isShown, comments, users, writeComment, saveComment, deleteComment, numbOfComments }) => {
  return (
    <Row className={style.center}>
      <Col m={12} s={12} l={9} className={style.margin}>
        <div className={style.card}>
          <PostUser user={user} post={post} deletePost={deletePost} isShown={isShown} numbOfComments={numbOfComments}/>
          <CardPanel className="grey" style={{ marginTop: '0px' }}>
            <span className="white-text">{post.src}</span>
          </CardPanel>
          <Comments isShown={isShown} comments={comments} users={users} writeComment={writeComment} saveComment={saveComment} deleteComment={deleteComment}/>
        </div>
      </Col>
    </Row>
  )
}

export { TextPost };