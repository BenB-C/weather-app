import { combineReducers } from 'redux';
import currentConditionsReducer from './currentConditionsReducer';
import dailyConditionsReducer from './dailyConditionsReducer';
import dayChangeReducer from './dayChangeReducer';
import locationChangeReducer from './locationChangeReducer';

const rootReducer = combineReducers({
  selectedDayIndex: dayChangeReducer,
  location: locationChangeReducer,
  currentConditions: currentConditionsReducer,
  dailyConditions: dailyConditionsReducer,
});

export default rootReducer;
