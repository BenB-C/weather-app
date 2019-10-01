import { CHANGE_DAILY_CONDITIONS } from './../constants/ActionTypes.js';
import { initialState } from './../constants/InitialState';

const dailyConditionsReducer = (state = initialState.dailyConditions, action) => {
  switch (action.type) {
  case CHANGE_DAILY_CONDITIONS:
    return action.newConditions;
  default:
    return state;
  }
};

export default dailyConditionsReducer;
