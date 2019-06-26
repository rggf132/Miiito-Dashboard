import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-md bg-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">Job Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile_business">Test Business Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/business_dashboard">Business Dashboard</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
