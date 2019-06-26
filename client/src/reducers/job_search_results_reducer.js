import { FETCH_JOB_SEARCH_RESULTS, FETCH_JOBS_SEARCH } from '../actions';

export default function(state = "", action) {
  switch(action.type) {
    case FETCH_JOB_SEARCH_RESULTS:
      return action.payload.data;
    case FETCH_JOBS_SEARCH:
      return _.mapKeys(action.payload.data.jobs, 'id');
    default:
      return state;
  }
}
