import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchJobsSearch } from "../actions";
import SearchListItem from "../components/search_list_item";
import { updateSelectedJob, updateSelectedPublicBusiness } from "../actions";

class SearchList extends Component {
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

  componentDidMount() {
    this.props.fetch_jobs_search();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    if (this.props.search_string === "") {
      console.log(prevProps);
    }
  }

  renderJob(job_data) {
    const job_id = job_data.id;
    const job_title = job_data.title;
    const job_length = job_data.job_length;
    const job_vacancy = job_data.job_vacancy;
    const date_applied = job_data.created_at;
    if (job_data.id !== undefined) {
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
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {_.map(this.props.search_results, this.renderJob)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search_string: state.job_search_string,
    search_results: state.job_search_results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetch_jobs_search: fetchJobsSearch,
      update_selected_job: updateSelectedJob,
      update_selected_business: updateSelectedPublicBusiness
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);
