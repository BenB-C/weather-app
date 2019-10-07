import { initialState } from './../constants/InitialState';
import * as types from './../constants/ActionTypes';

const weather = (state = initialState.weather, action) => {
  switch (action.type) {
  case types.UPDATE_WEATHER:
    return action.newWeather;
  case types.CHANGE_CURRENT_CONDITIONS:
    return Object.assign({}, state, { currentConditions: action.newConditions });
  case types.CHANGE_DAILY_CONDITIONS:
    return Object.assign({}, state, { dailyConditions: action.newConditions });
  case types.CHANGE_DAY:
    return Object.assign({}, state, { selectedDayIndex: action.newSelectedDayIndex });
  case types.REQUEST_WEATHER:
    return Object.assign({}, state, { isFetching: true });
  case types.FETCH_WEATHER_FAILED:
    return { ...state, isFetching: false, fetchWeatherFailed: true };
  default:
    return state;
  }
};

export default weather;
