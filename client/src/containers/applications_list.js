import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateSelectedApplication, updateSelectedPublicBusiness } from '../actions';
import ApplicationsListItem from '../components/applications_list_item';

class ApplicationsList extends Component {
  constructor(props) {
    super(props);

    this.renderApplication = this.renderApplication.bind(this);
  }

  onApplicationClick(application_data) {
    this.props.update_selected_application(application_data);
    this.props.update_selected_business(application_data.job_id);
  }

  renderApplication(application_data) {
    const application_id = application_data.id;
    const job_id = application_data.job_id;
    const status = application_data.status;
    const date_applied = application_data.created_at;
    console.log(window.location.href.split('/')[3]);

    return (
      <li className="application_list_item list-group-item" onClick={() => this.onApplicationClick(application_data)} key={application_id}>
        <h3>Application id: {application_id} </h3>
        <h3>Job_id: {job_id} </h3>
        <h5>Status: {status} </h5>
        <p><i>Date_applied: {date_applied}</i></p>
      </li>
    );
  }

  render() {
    return(
      <div>
        <ul className="list-group">
          {_.map(this.props.applications, this.renderApplication)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { applications: state.applications.undefined };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({update_selected_application: updateSelectedApplication,
                            update_selected_business: updateSelectedPublicBusiness},
                            dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsList);
