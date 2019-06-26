import { UPDATE_JOB_SEARCH_STRING } from '../actions';

export default function(state = "", action) {
  switch(action.type) {
    case UPDATE_JOB_SEARCH_STRING:
      return action.payload;
    default:
      return state;
  }
}
