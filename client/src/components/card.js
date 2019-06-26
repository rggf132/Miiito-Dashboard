import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {
  render() {
    return(
      <div className="card application-preview-card">
        <h4>Application Info</h4>
        {this.props.selected_application}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {appliction: state.selected_application};
}
Card.defaultProps = { application: 'Title' };
export default connect(mapStateToProps)(Card);
