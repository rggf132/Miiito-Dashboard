import React, { Component } from 'react';

import NavBar from './navbar';
import SearchOptionsSidebar from '../containers/search_options_sidebar';
import SearchBar from './search_bar';
import SearchList from '../containers/search_list'

export default class StudentJobSearch extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <SearchBar/>
        <br/>

        <div className="align-top d-inline"> <SearchOptionsSidebar/> </div>
        <div className="align-top d-inline"> <SearchList/> </div>
      </div>
    );
  }
}
