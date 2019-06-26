import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobCard from '../components/job_card';
import NavBar from '../components/navbar';
import { Link } from 'react-router-dom';

class Job extends Component {

  componentDidMount() {
    this.props.fetch_current_application(window.location.href.split('/')[4]);
  }

  render() {
    if(this.props.job.data){
      return(
        <div>
          <NavBar/>
          <br/>
          <div className="application-preview-topbar">
            <h2>Job id: {this.props.job.data.job[0].id}</h2>
            <p><i>Date applied {this.props.job.data.job[0].created_at}</i></p>

          </div>

          <div>
            <JobCard selected_job={this.props.job.data.job[0].description}/>
          </div>

        </div>
      );
    } else {
      return(
        <div>
          <NavBar/>
          <br/>
          <div className="application-preview-topbar">
            <h2>Loading...</h2>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {job: state.current_job};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetch_current_job: fetchCurrentJob},
                            dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Job);
