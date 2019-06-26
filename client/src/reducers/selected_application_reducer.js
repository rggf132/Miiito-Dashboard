import { UPDATE_SELECTED_APPLICATION } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case UPDATE_SELECTED_APPLICATION:
      return action.payload;
    default:
      return state;
  }
}
