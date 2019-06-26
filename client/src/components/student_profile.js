import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import Card from '../components/card';
import { bindActionCreators } from 'redux';
import { fetchStudentUser } from '../actions';

class StudentProfile extends Component {

  componentDidMount() {
    this.props.fetch_student_user();
  }

  render() {
    return(
      <div>
        <NavBar/>
        <br/>
        <div className="application-preview-topbar">
          <h2>User id: {this.props.student_user.id}</h2>
          <p><i>Name: {this.props.student_user.fullname}</i></p>
          <p><i>e-mail: {this.props.student_user.email}</i></p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {student_user: state.student_user};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetch_student_user: fetchStudentUser},
                            dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile);
