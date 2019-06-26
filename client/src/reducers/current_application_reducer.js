import { FETCH_CURRENT_APPLICATION } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CURRENT_APPLICATION:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
