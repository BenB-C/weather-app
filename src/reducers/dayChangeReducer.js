// import * as types from './../constants/ActionTypes.js';
import { initialState } from './../constants/initialState';

const songChangeReducer = (state = initialState.selectedDayIndex, action) => {
  switch (action.type) {
  case 'CHANGE_DAY':
    return action.newSelectedDayIndex;
  default:
    return state;
  }
};

export default songChangeReducer;
