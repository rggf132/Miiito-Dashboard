import { combineReducers } from 'redux';
import ApplicationsReducer from './applications_reducer';
import JobsReducer from './jobs_reducer';
import JobsSearchReducer from './jobs_search_reducer';
import JobSearchStringReducer from './job_search_string_reducer';
import SelectedApplicationReducer from './selected_application_reducer';
import SelectedJobReducer from './selected_job_reducer';
import SelectedBusinessReducer from './selected_business_reducer';
import JobSearchResultsReducer from './job_search_results_reducer';
import StudentUserReducer from './student_user_reducer';
import BusinessUserReducer from './business_user_reducer';
import CurrentApplicationReducer from './current_application_reducer'
import CurrentJobReducer from './current_job_reducer'


const rootReducer = combineReducers({
  applications: ApplicationsReducer,
  jobs: JobsReducer,
  jobs_search: JobsSearchReducer,
  job_search_string: JobSearchStringReducer,
  selected_application: SelectedApplicationReducer,
  selected_job: SelectedJobReducer,
  current_application: CurrentApplicationReducer,
  current_job: CurrentJobReducer,
  selected_business: SelectedBusinessReducer,
  job_search_results: JobSearchResultsReducer,
  student_user: StudentUserReducer,
  business_user: BusinessUserReducer
});

export default rootReducer;
