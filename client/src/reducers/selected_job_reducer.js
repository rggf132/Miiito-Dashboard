import { FETCH_UPDATE_SELECTED_JOB } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_UPDATE_SELECTED_JOB:
      return action.payload.data;
    default:
      return state;
  }
}
