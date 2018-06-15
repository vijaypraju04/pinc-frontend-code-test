import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Modal,
  Input,
  Image,
  Checkbox,
  Icon,
  Segment,
  Divider
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Conversation extends Component {
  state = { open: false };

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  renderContent() {
    if (!this.props.user) {
      return <div>Loading</div>;
    }

    const userAttributes = this.props.user['0'].attributes;
    console.log(userAttributes);

    return (
      <div>
        <Segment>
          <Image avatar src={userAttributes.avatar_thumb} />
          <span>{userAttributes.name}</span>
        </Segment>
      </div>
    );
  }

  render() {
    const { open, size } = this.state;

    return (
      <div>
        <Input
          action={{
            color: 'yellow',
            icon: 'circle outline'
          }}
          actionPosition="left"
          onClick={this.show('tiny')}
          fluid
          placeholder="Start a conversation"
        />
        <Modal
          size={size}
          open={open}
          onClose={this.close}
          centered={false}
          closeIcon
        >
          <div> {this.renderContent()} </div>
          <Modal.Content>
            <Input
              size="huge"
              centered
              transparent
              fluid
              placeholder="What is your question? Make it short and simple"
            />
            <Divider hidden>
              <Icon color="grey" size="small" name="angle right" />
            </Divider>
          </Modal.Content>
          <Modal.Actions>
            <Checkbox label="Be anonymous" />
            <Button
              color="violet"
              icon="checkmark"
              labelPosition="right"
              content="Post"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

{
  /* <Button onClick={this.show('tiny')}>Tiny</Button> */
}

function mapStateToProps({ user }) {
  return { user };
}
export default connect(mapStateToProps)(Conversation);
