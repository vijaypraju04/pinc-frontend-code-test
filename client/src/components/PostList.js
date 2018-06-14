import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import Comments from './Comments';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts.data, post => {
      // console.log(post.attributes.text);
      return (
        <div>
          <h1>{post.attributes.author_info.name}</h1>
          <img src={post.attributes.author_info.avatar_medium} />
          <h1>{new Date(post.attributes.created_at).toLocaleDateString()}</h1>
          <h2>{post.attributes.text}</h2>
          <Comments props={post.attributes} />
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts.data);
    return <div>{this.renderPosts()}</div>;
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
