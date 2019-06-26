import { FETCH_UPDATE_PUBLIC_BUSINESS_TEST } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_UPDATE_PUBLIC_BUSINESS_TEST:
      return action.payload.data;
    default:
      return state;
  }
}

// {public_company: {business_name: "Changed Company"}}
