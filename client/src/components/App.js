import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Nav from './Nav';
import Feed from './Feed';
import PostList from './PostList';
import { Divider } from 'semantic-ui-react';

const Groups = () => <h2>Groups</h2>;
const Activity = () => <h2>Activity</h2>;
// dummy components

class App extends Component {
  componentDidMount() {
    this.props.fetchAPI();
    this.props.fetchPosts();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Divider hidden />
          <Route path="/feed" component={Feed} />
          <Route path="/feed/posts" component={PostList} />
          <Route path="/groups" component={Groups} />
          <Route path="/activity" component={Activity} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
