import React, { Component } from 'react';
import NavBar from './navbar';
import JobsList from '../containers/jobs_list';
import JobPreview from '../containers/job_preview';
import CompanyInfo from './company_info';
import { fetchJobs, updateSelectedJob, updateSelectedPublicBusiness } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BusinessDashboard extends Component {

  componentDidMount() {
    this.props.fetch_jobs();
  }

  componentDidUpdate() {
    this.onDashboardLoad(this.props.jobs.undefined[0]);
  }



  onDashboardLoad(job_data) {
    this.props.update_selected_job(job_data.id);
    this.props.update_selected_business(job_data.id);
  }

  render() {
    if(!this.props.jobs.nil) {
      console.log(this.props);
      // this.onDashboardLoad(this.props.applications[2]);
      return (
        <div>
          <NavBar/>
          <br/>

          <div className="align-top d-inline-block col-3"><JobsList/></div>
          <div className="align-top d-inline-block col-5 vis-divs"><JobPreview/></div>
          <div className="align-top d-inline-block col-3 vis-divs"><CompanyInfo/></div>

        </div>
      );
    } else {
      return(
        <div>
          <NavBar/>
          <br/>

          <div>
            <h2>Please add Jobs</h2>
          </div>

        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { jobs: state.jobs };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetch_jobs: fetchJobs,
                            update_selected_job: updateSelectedJob,
                            update_selected_business: updateSelectedPublicBusiness},
                            dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BusinessDashboard);
