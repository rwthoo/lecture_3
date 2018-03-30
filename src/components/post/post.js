import React from 'react';
import './post.css';
import { Avatar } from '../avatar';
import { Comment } from './comment.js';

export const Post = (props) => (
  <div className="post">
    <div className="post__header">
      <div className="post__avatar">
        <Avatar avatarUrl={props.owner.avatarUrl} />
      </div>
      <div className="post__header-info">
        <div><b>{props.owner.name}</b></div>
        <div>{props.location}</div>
      </div>
    </div>
    <img className="post__img" src={props.imageUrl} alt='post'/>
    <div className="post__body">
      <div className="post__likes"><b>{props.likes} likes</b></div>
      { props.comments.map(comment => <Comment owner={comment.owner} text={comment.text} />) }
      <hr className="post__body-separator" />
      <input placeholder="Add a comment..." className="post__comment-input"/>
    </div>
  </div>
);
