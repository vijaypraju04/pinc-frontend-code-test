import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchResponses } from '../actions';
import _ from 'lodash';
import Comments from './Comments';
import {
  Container,
  Divider,
  Card,
  Header,
  Image,
  Input,
  Segment,
  Grid
} from 'semantic-ui-react';

class PostList extends Component {
  renderGroupName(post) {
    if (post.attributes.group['0']) {
      // console.log(post.attributes.group['0'].title);
      const groupTitle = post.attributes.group['0'].title;
      return <div>{groupTitle}</div>;
    }
  }

  renderResponses(questionId, answerInfo) {
    console.log(questionId);
    if (answerInfo.length > 0) {
      this.props.fetchResponses(questionId);
    }
    return;
  }

  componentDidUpdate() {
    if (this.props.posts) {
      _.map(this.props.posts, data => {
        const pagePosts = data['data'];
        _.map(pagePosts['data'], post => {
          {
            this.renderResponses(
              post.id,
              post.attributes.latest_answerers_info
            );
          }
        });
      });
    }
  }
  // componentDidMount() {
  //   this.props.fetchPosts();
  // }

  renderPosts() {
    return _.map(this.props.posts, data => {
      const pagePosts = data['data'];
      // console.log(pagePosts);
      return _.map(pagePosts['data'], post => {
        // console.log(post);
        return (
          <Grid columns={4} centered>
            <Grid.Column width={7}>
              <Container textAlign="center">
                <Card fluid color="violet">
                  <Card.Content>
                    <Card.Meta>
                      {this.renderGroupName(post)}
                      Date Posted:{' '}
                      {new Date(
                        post.attributes.created_at
                      ).toLocaleDateString()}
                    </Card.Meta>
                    <div>
                      <Image
                        circular
                        floated="left"
                        size="mini"
                        src={post.attributes.author_info.avatar_medium}
                      />
                      <h3 centered>{post.attributes.text}</h3>
                      <p>posted by {post.attributes.author_info.name}</p>
                    </div>
                  </Card.Content>
                  <Card.Description>
                    <Divider section />
                    <Comments postId={post.id} />
                    <Input
                      fluid
                      placeholder="Share your thoughts"
                      size="large"
                    />
                  </Card.Description>
                </Card>
              </Container>
            </Grid.Column>
          </Grid>
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
