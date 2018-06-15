import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Comments extends Component {
  // renderResponses() {
  //   // const responseArr = this.props.responses.data;
  //
  //   return _.map(this.props.responses.data, response => {
  //   });
  // }

  render() {
    return <div />;
    // return <div>{this.renderResponses()}</div>;
  }
}

function mapStateToProps({ responses }) {
  return { responses };
}

export default connect(mapStateToProps)(Comments);
