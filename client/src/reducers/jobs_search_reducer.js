import _ from 'lodash';
import { FETCH_JOBS_SEARCH } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_JOBS_SEARCH:
      return _.mapKeys(action.payload.data.jobs, 'id');
    default:
      return state;
  }
}
