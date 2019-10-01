import { CHANGE_DAY } from './../constants/ActionTypes.js';
import { initialState } from './../constants/InitialState';

const songChangeReducer = (state = initialState.selectedDayIndex, action) => {
  switch (action.type) {
  case CHANGE_DAY:
    return action.newSelectedDayIndex;
  default:
    return state;
  }
};

export default songChangeReducer;
