import _ from 'lodash';
import { FETCH_APPLICATIONS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_APPLICATIONS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
