import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';
import NavBar from './navbar';
import { bindActionCreators } from 'redux';
import { fetchBusinessUser } from '../actions';

class BusinessProfile extends Component {

  componentDidMount() {
    this.props.fetch_business_user();
  }

  render() {
    return(
      <div>
        <NavBar/>
        <br/>
        <div className="application-preview-topbar">
          <h2>User id: {this.props.business_user.id}</h2>
          <p><i>Business Name: {this.props.business_user.business_name}</i></p>
          <p><i>e-mail: {this.props.business_user.email}</i></p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {business_user: state.business_user};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetch_business_user: fetchBusinessUser},
                            dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessProfile);
