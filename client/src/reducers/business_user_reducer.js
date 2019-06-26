import { FETCH_BUSINESS_USER } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_BUSINESS_USER:
      return action.payload;
    default:
      return state;
  }
}
