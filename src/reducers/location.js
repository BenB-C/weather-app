import { CHANGE_LOCATION } from './../constants/ActionTypes.js';
import { initialState } from './../constants/InitialState';
import * as types from './../constants/ActionTypes';

const location = (state = initialState.location, action) => {
  switch (action.type) {
  case CHANGE_LOCATION:
    return action.newLocation;
  case types.REQUEST_LOCATION:
    return { ...state, isFetching: true };
  case types.FETCH_LOCATION_FAILED:
    return { ...state, isFetching: false, fetchLocationFailed: true };
  default:
    return state;
  }
};

export default location;
