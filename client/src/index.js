import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import promise from "redux-promise";

import StudentDashboard from './components/student_dashboard';
import BusinessDashboard from './components/business_dashboard';
import StudentJobSearch from './components/student_job_search';
import StudentProfile from './components/student_profile';
import BusinessProfile from './components/business_profile';
import Application from './containers/application';
import JobApplication from './containers/job_application';
import Job from './containers/job';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <Switch>
        <Route path="/business_dashboard" component={BusinessDashboard} />
        <Route path="/job/:job" component={Job} />
        <Route path="/application/:application" component={Application} />
        <Route path="/job_application/:application" component={JobApplication} />
        <Route path="/profile_business" component={BusinessProfile} />
        <Route path="/profile" component={StudentProfile} />
        <Route path="/search" component={StudentJobSearch} />
        <Route path="/" component={StudentDashboard} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
