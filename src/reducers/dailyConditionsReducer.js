import { initialState } from './../constants/initialState';

const dailyConditionsReducer = (state = initialState.dailyConditions, action) => {
  switch (action.type) {
  case 'CHANGE_DAILY_CONDITIONS':
    return action.newConditions;
  default:
    return state;
  }
};

export default dailyConditionsReducer;
