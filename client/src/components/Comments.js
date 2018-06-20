import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider, Image, Segment, Grid } from 'semantic-ui-react';
import _ from 'lodash';

class Comments extends Component {
  // shouldComponentUpdate(nextProps) {
  //   console.log(nextProps.responses);
  //   // console.log(this.props.responses);
  //   // if (
  //   //   this.props.responses &&
  //   //   _.isEqual(this.props.responses, nextProps.responses)
  //   // ) {
  //   //   return false;
  //   // }
  //   // console.log('postId', this.props.postId, 'props', this.props);
  //   return true;
  // }

  renderResponses() {
    const responses = this.props.responses;
    console.log(responses);
    return _.map(responses, response => {
      return _.map(response, res => {
        if (res.attributes) {
          return (
            <Grid very padded>
              <Grid.Row>
                <Image src={res.attributes.author_info.avatar_thumb} avatar />
                {res.attributes.author_info.name}: {res.attributes.text}{' '}
              </Grid.Row>
              <Divider />
            </Grid>
          );
        }
      });
    });
  }

  render() {
    if (!this.props.responses) {
      return <div />;
    }
    return <div>{this.renderResponses()}</div>;
  }
}

function mapStateToProps({ responses }, ownProps) {
  // console.warn('postId', ownProps.postId);
  // console.log('postId', ownProps.postId, 'ownProps', ownProps);
  // console.warn('responses', responses[ownProps.postId]);
  return { responses: responses[ownProps.postId] };

  // return { responses: ownProps.responses };
}

export default connect(mapStateToProps)(Comments);
