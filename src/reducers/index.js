import { combineReducers } from 'redux';
import dayChangeReducer from './dayChangeReducer';
import locationChangeReducer from './locationChangeReducer';
import currentConditionsReducer from './currentConditionsReducer';
import dailyConditionsReducer from './dailyConditionsReducer';

const rootReducer = combineReducers({
  selectedDayIndex: dayChangeReducer,
  location: locationChangeReducer,
  currentConditions: currentConditionsReducer,
  dailyConditions: dailyConditionsReducer,
});

export default rootReducer;
