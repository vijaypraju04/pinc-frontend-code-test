import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  render() {
    console.log(this.props);
    return <div>Comments</div>;
  }
}

function mapStateToProps({ responses }) {
  return { responses };
}

export default connect(mapStateToProps)(Comments);
