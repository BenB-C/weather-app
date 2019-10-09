import { initialState } from './../constants/InitialState';
import * as types from './../constants/ActionTypes';

const weather = (state = initialState.weather, action) => {
  switch (action.type) {
  case types.UPDATE_WEATHER:
    return action.newWeather;
  case types.CHANGE_CURRENT_CONDITIONS:
    return { ...state, currentConditions: action.newConditions };
  case types.CHANGE_DAILY_CONDITIONS:
    return { ...state, dailyConditions: action.newConditions };
  case types.CHANGE_DAY:
    return { ...state, selectedDayIndex: action.newSelectedDayIndex };
  case types.REQUEST_WEATHER:
    return { ...state, isFetching: true };
  case types.FETCH_WEATHER_FAILED:
    return { ...state, isFetching: false, fetchWeatherFailed: true, error: action.error };
  case types.FETCH_HISTORICAL_WEATHER_FAILED:
    return { ...state, isFetching: false, fetchHistoricalWeatherFailed: true, error: action.error };
  default:
    return state;
  }
};

export default weather;
