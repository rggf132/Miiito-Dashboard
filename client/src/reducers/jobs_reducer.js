import _ from 'lodash';
import { FETCH_JOBS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
