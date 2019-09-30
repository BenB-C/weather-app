import { combineReducers } from 'redux';
import dayChangeReducer from './dayChangeReducer';

const rootReducer = combineReducers({
  selectedDayIndex: dayChangeReducer,
});

export default rootReducer;
