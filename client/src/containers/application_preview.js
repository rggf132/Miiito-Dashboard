import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';
import { Link } from 'react-router-dom';

class ApplicationPreview extends Component {
  render() {
    return(
      <div>
        <div className="application-preview-topbar">
          <h2>Application id: {this.props.application.id}</h2>
          <p><i>Date applied {this.props.application.created_at}</i></p>

            <Link to={`/application/${this.props.application.id}`}>
              <button className="btn btn-primary open-application-btn">Open Application</button>
            </Link>

        </div>

        <div>
          <Card selected_application={this.props.application.job_message}/>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {application: state.selected_application};
}

export default connect(mapStateToProps)(ApplicationPreview);
