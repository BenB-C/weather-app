import { initialState } from './../constants/initialState';

const locationChangeReducer = (state = initialState.location, action) => {
  switch (action.type) {
  case 'CHANGE_LOCATION':
    return action.newLocation;
  default:
    return state;
  }
};

export default locationChangeReducer;
