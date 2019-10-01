import { CHANGE_LOCATION } from './../constants/ActionTypes.js';
import { initialState } from './../constants/InitialState';

const locationChangeReducer = (state = initialState.location, action) => {
  switch (action.type) {
  case CHANGE_LOCATION:
    return action.newLocation;
  default:
    return state;
  }
};

export default locationChangeReducer;
