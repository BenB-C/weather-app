import * as types from './../constants/ActionTypes.js';
import { initialState } from './../constants/InitialState';

const fetchingWeather = (state = initialState.fetchingWeather, action) => {
  switch (action.type) {
    case types.REQUEST_WEATHER:
    return true;
  case types.RECEIVE_WEATHER:
    return false;
  default:
    return state;
  }
};

export default fetchingWeather;
