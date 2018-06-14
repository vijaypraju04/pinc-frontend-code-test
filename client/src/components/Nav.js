import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Menu,
  Icon,
  Input,
  Grid,
  Image,
  Container
} from 'semantic-ui-react';

class Nav extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderContent() {
    if (!this.props.user) {
      return <div>Loading</div>;
    }

    if (!this.props.user['0']) {
      return <div>Loading</div>;
    }
    return (
      <Image avatar src={this.props.user['0']['attributes']['avatar_thumb']} />
    );
  }

  render() {
    const { activeItem } = this.state;

    if (!this.props) {
      <div>Loading</div>;
    }

    const currentUser = this.props.user;

    // if (currentUser) {
    //   const userAttributes = currentUser['0'].attributes;
    //   console.log(userAttributes.avatar_thumb);
    // }

    return (
      <div>
        <Menu inverted pointing secondary icon="labeled" color="violet">
          <Container textAlign="center">
            <Link to="/feed">
              <Menu.Item
                name="Feed"
                active={activeItem === 'Feed'}
                onClick={this.handleItemClick}
              >
                <Icon name="home" />
                Feed
              </Menu.Item>
            </Link>
            <Link to="/groups">
              <Menu.Item
                name="Groups"
                active={activeItem === 'Groups'}
                onClick={this.handleItemClick}
              >
                <Icon name="compass outline" />
                Groups
              </Menu.Item>
            </Link>
            <Link to="/activity">
              <Menu.Item
                name="Activity"
                active={activeItem === 'Activity'}
                onClick={this.handleItemClick}
              >
                <Icon name="bell outline" />
                Activity
              </Menu.Item>
            </Link>
            <Menu.Menu position="right">
              <Menu.Item>
                <Grid>
                  <Grid.Row stretched>
                    <Input icon="search" size="large" placeholder="Search" />
                  </Grid.Row>
                </Grid>
              </Menu.Item>
              <Menu.Item>
                <Grid>
                  <Grid.Row stretched>{this.renderContent()}</Grid.Row>
                </Grid>
              </Menu.Item>
              <Menu.Item>
                <Grid>
                  <Grid.Row stretched>
                    <Button inverted color="violet" size="large">
                      Add Post
                    </Button>
                  </Grid.Row>
                </Grid>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  // { auth } destructured from state
  return { user };
  // auth: state.auth
}

export default connect(mapStateToProps)(Nav);
