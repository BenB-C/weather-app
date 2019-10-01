import { initialState } from './../constants/InitialState';
import { CHANGE_CURRENT_CONDITIONS } from './../constants/ActionTypes';

const currentConditionsReducer = (state = initialState.currentConditions, action) => {
  switch (action.type) {
  case CHANGE_CURRENT_CONDITIONS:
    return action.newConditions;
  default:
    return state;
  }
};

export default currentConditionsReducer;
