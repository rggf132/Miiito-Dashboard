import { FETCH_STUDENT_USER } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_STUDENT_USER:
      return action.payload;
    default:
      return state;
  }
}
