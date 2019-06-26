import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {
  render() {
    return(
      <div className="card application-preview-card">
        <h4>Job Info</h4>
        {this.props.selected_job}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {job: state.selected_job};
}
Card.defaultProps = { application: 'Title' };
export default connect(mapStateToProps)(Card);
