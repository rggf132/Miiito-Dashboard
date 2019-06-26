import React, { Component } from 'react';
import CheckboxListItem from '../components/checkbox_list_item';

export default class SearchOptionsSidebar extends Component {
  render() {
    return(
      <div id="sidebar-wrapper">
        <div className="search-sidebar-filters">
          Filters
          <ul className="sidebar-nav">
            <CheckboxListItem/>
          </ul>
        </div>

        <div className="search-sidebar-categories">
          Categories
          <ul className="sidebar-nav">
            <CheckboxListItem/>
          </ul>
        </div>

      </div>
    );
  }
}
