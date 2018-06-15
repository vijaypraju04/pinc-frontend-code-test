import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Segment, Grid, Container, Divider } from 'semantic-ui-react';
import Conversation from './Conversation';
// import { connect } from 'react-redux';
// import * as actions from '../actions';

const Feed = () => {
  return (
    <Grid columns={2} padded centered>
      <Grid.Column>
        <Container textAlign="center">
          <Conversation />
        </Container>
        <Divider hidden />
        <Divider hidden />
        <Container textAlign="center">
          <Link to="/feed/posts">
            <Button inverted color="violet">
              Posts
            </Button>
          </Link>
          <Link to="/feed/polls">
            <Button inverted color="violet">
              Polls
            </Button>
          </Link>
        </Container>
        <Divider />
      </Grid.Column>
    </Grid>
  );
};

export default Feed;
