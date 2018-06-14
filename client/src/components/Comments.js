import React, { Component } from 'react';

const Comments = props => {
  console.log(props);
  if (props.latest_answerers_info !== []) {
    console.log(props.latest_answerers_info);
  }
  return <div>Comments</div>;
};

export default Comments;
