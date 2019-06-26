import React, { Component } from 'react';
import NavBar from './navbar';
import ApplicationsList from '../containers/applications_list';
import ApplicationPreview from '../containers/application_preview';
import CompanyInfo from './company_info';
import { fetchApplications, updateSelectedApplication, updateSelectedPublicBusiness } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class StudentDashboard extends Component {

  componentDidMount() {
    this.props.fetch_applications();
  }

  componentDidUpdate() {
    this.onDashboardLoad(this.props.applications.undefined[0]);
  }

  onDashboardLoad(application_data) {
    this.props.update_selected_application(application_data);
    this.props.update_selected_business(application_data.job_id);
  }

  render() {
    if(!this.props.applications.nil) {
      console.log(this.props.applications[2]);
      // this.onDashboardLoad(this.props.applications[2]);
      return (
        <div>
          <NavBar/>
          <br/>

          <div className="align-top d-inline-block col-3"><ApplicationsList/></div>
          <div className="align-top d-inline-block col-5  vis-divs"><ApplicationPreview/></div>
          <div className="align-top d-inline-block col-3  vis-divs"><CompanyInfo/></div>

        </div>
      );
    } else {
      return(
        <div>
          <NavBar/>
          <br/>

          <div>
            <h2>Please add Applications</h2>
          </div>

        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { applications: state.applications };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetch_applications: fetchApplications,
                            update_selected_application: updateSelectedApplication,
                            update_selected_business: updateSelectedPublicBusiness},
                            dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
