import React from 'react';
import './avatar.css';

export const Avatar = (props) => (
  <div className="avatar">
    <img className="avatar__img" src={props.avatarUrl} alt="avatar"/>
    <button className="like"></button>
);
//$('.like').click(function() {
//    $('.unlike').hide();
//    $('.like').show();
//});
//$('.unlike').click(function() {
//    $('.like').show();
//    $('.unlike').hide();
//});
