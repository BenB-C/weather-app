import * as types from './../constants/ActionTypes.js';
import { initialState } from './../constants/InitialState';

const fetchingLocation = (state = initialState.fetchingLocation, action) => {
  switch (action.type) {
  case types.REQUEST_LOCATION:
    return true;
  case types.RECEIVE_LOCATION:
    return false;
  default:
    return state;
  }
};

export default fetchingLocation;
