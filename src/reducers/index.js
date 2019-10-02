import { combineReducers } from 'redux';
import currentConditionsReducer from './currentConditionsReducer';
import dailyConditionsReducer from './dailyConditionsReducer';
import dayChangeReducer from './dayChangeReducer';
import locationChangeReducer from './locationChangeReducer';
import fetchingLocation from './fetchingLocation';
import fetchingWeather from './fetchingWeather';

const rootReducer = combineReducers({
  selectedDayIndex: dayChangeReducer,
  location: locationChangeReducer,
  currentConditions: currentConditionsReducer,
  dailyConditions: dailyConditionsReducer,
  fetchingLocation,
  fetchingWeather,
});

export default rootReducer;
