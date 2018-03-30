import React from 'react';
import './post.css';
import { Avatar } from '../avatar';
import { Comment } from './comment.js';

export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
  }

  handleCommentSubmission(event){
    event.preventDefault();
    const text = event.target[0].value;

//create a comments
const comment = {
  owner: "rwthoo",
  text: text,
}

// add comment and create a new state
const comments = this.state.comments;
comments.push(comment);

//update the state
this.setState({
  comments: comments
})

event.target[0].value ="";
  }
}

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
