import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateJobSearchString, fetchJobSearchResults } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.props.update_job_search_string(event.target.value);
    this.props.update_search_results(event.target.value);
  }

  render() {
    return(
      <div className="search-bar">
        <input value={this.props.search_string} className="form-control" placeholder="Search for jobs ..." onChange={this.onInputChange}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { search_string: state.job_search_string };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({update_job_search_string: updateJobSearchString,
                            update_search_results: fetchJobSearchResults}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
