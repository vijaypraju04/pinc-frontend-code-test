import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchResponses } from '../actions';
import _ from 'lodash';
import Comments from './Comments';
import { Container, Divider } from 'semantic-ui-react';

class PostList extends Component {
  renderGroupName(post) {
    if (post.attributes.group['0']) {
      // console.log(post.attributes.group['0'].title);
      const groupTitle = post.attributes.group['0'].title;
      return <div>Category: {groupTitle}</div>;
    }
  }

  renderResponses(questionId, answerInfo) {
    // console.log(questionId);
    if (answerInfo.length > 0) {
      this.props.fetchResponses(questionId);
    }
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, data => {
      const pagePosts = data['data'];
      // console.log(pagePosts);
      return _.map(pagePosts['data'], post => {
        // console.log(post);
        return (
          <div>
            <Container textAlign="center">
              <div>{this.renderGroupName(post)}</div>
              <h1>
                {new Date(post.attributes.created_at).toLocaleDateString()}
              </h1>
              <p>{post.attributes.author_info.name}</p>
              <img src={post.attributes.author_info.avatar_medium} />
              <p>{post.attributes.text}</p>
              <h3>
                {this.renderResponses(
                  post.id,
                  post.attributes.latest_answerers_info
                )}
              </h3>
              <Comments />
              <Divider hidden />
            </Container>
          </div>
        );
      });
    });
  }

  // Date(post.attributes.created_at).toLocaleDateString()}</h1>

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts, fetchResponses })(
  PostList
);
