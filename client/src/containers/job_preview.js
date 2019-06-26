import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobCard from '../components/job_card';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { updateSelectedApplication } from '../actions';

class JobPreview extends Component {
  constructor(props) {
    super(props);

    this.renderApplication = this.renderApplication.bind(this);
  }

  onApplicationClick(application_data) {
    this.props.update_selected_application(application_data);
  }

  renderApplication(application_data) {
    const application_id = application_data.id;
    const job_id = application_data.job_id;
    const status = application_data.status;
    const date_applied = application_data.created_at;

    return (
      <li className="application_list_item list-group-item">
        <h3>Application id: {application_id} </h3>
        <Link to={`/job_application/${application_id}`}>
          <button className="btn btn-primary open-application-btn" onClick={() => this.onApplicationClick(application_data)} key={application_id}>Open Application</button>
        </Link>
        <h3>Job_id: {job_id} </h3>
        <h5>Status: {status} </h5>
        <p><i>Date_applied: {date_applied}</i></p>
      </li>
    );
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <ul className="list-group">
          {_.map(this.props.job, this.renderApplication)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {job: state.selected_job.applications};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({update_selected_application: updateSelectedApplication},
                            dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPreview);
