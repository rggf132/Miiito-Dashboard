import { FETCH_CURRENT_JOB } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CURRENT_JOB:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
