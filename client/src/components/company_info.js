import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectedBusinessReducer from '../reducers/selected_business_reducer';


class CompanyInfo extends Component {
  render() {

    return(
      <div className="test">
          <div>
            <div>
              <h2>{this.props.company.company_name}</h2>
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {company: state.selected_business};
}

export default connect(mapStateToProps)(CompanyInfo);
