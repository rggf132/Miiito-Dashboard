import React, { Component } from 'react';
import Card from '../components/card';
import NavBar from '../components/navbar';
import { Link } from 'react-router-dom';
import { fetchCurrentApplication } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Application extends Component {

  componentDidMount() {
    this.props.fetch_current_application(window.location.href.split('/')[4]);
  }

  render() {
    if(this.props.application.data){
      return(
        <div>
          <NavBar/>
          <br/>
          <div className="application-preview-topbar">
            <h2>Application id: {this.props.application.data.application[0].id}</h2>
            <p><i>Date applied {this.props.application.data.application[0].created_at}</i></p>

            <p>Job specific message {this.props.application.data.application[0].job_message}</p>
          </div>

          <div>
            <Card/>
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

          <div>
            <Card/>
          </div>

        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { application: state.current_application };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetch_current_application: fetchCurrentApplication},
                            dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Application);
