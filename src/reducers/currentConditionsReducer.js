import { initialState } from './../constants/initialState';

const currentConditionsReducer = (state = initialState.currentConditions, action) => {
  switch (action.type) {
  case 'CHANGE_CURRENT_CONDITIONS':
    return action.newConditions;
  default:
    return state;
  }
};

export default currentConditionsReducer;
