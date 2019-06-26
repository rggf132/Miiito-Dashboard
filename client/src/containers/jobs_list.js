import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateSelectedJob, updateSelectedPublicBusiness } from "../actions";
import ApplicationsListItem from "../components/applications_list_item";

class JobsList extends Component {
  constructor(props) {
    super(props);

    this.renderJob = this.renderJob.bind(this);
    this.onJobClick = this.onJobClick.bind(this);
  }

  onJobClick(job_data) {
    this.props.update_selected_job(job_data.id);
    this.props.update_selected_business(job_data.id);
    console.log(this.props.update_selected_job(job_data.id));
  }

  renderJob(job_data) {
    const job_id = job_data.id;
    const job_title = job_data.title;
    const job_length = job_data.job_length;
    const job_vacancy = job_data.job_vacancy;
    const date_applied = job_data.created_at;
    console.log(this.props.promise);

    return (
      <li
        className="application_list_item list-group-item"
        onClick={() => this.onJobClick(job_data)}
        key={job_id}
      >
        <h3>Job_id: {job_id} </h3>
        <h3>Job Title: {job_title} </h3>
        <h5>Job length: {job_length} </h5>
        <h5>Job Vacancy: {job_vacancy} </h5>
        <p>
          <i>Date_applied: {date_applied}</i>
        </p>
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul className="list-group">{_.map(this.props.jobs, this.renderJob)}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { jobs: state.jobs.undefined };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      update_selected_job: updateSelectedJob,
      update_selected_business: updateSelectedPublicBusiness
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsList);
