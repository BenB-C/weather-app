import { createStore } from 'redux';
import location from './../../reducers/location';
import weather from './../../reducers/weather';
import rootReducer from './../../reducers/';
import { initialState } from './../../constants/initialState';
// import sampleData from './../../constants/sampleData';
import * as actions from './../../actions/';
import thunkMiddleware from 'redux-thunk';

// const initialState = {
//   location: {
//     description: 'Portland, OR',
//     latitude: sampleData.latitude,
//     longitude: sampleData.longitude,
//     isFetching: false,
//   },
//   weather: {
//     currentConditions: sampleData.currently,
//     dailyConditions: sampleData.daily.data,
//     selectedDayIndex: null,
//     isFetching: false,
//   },
// }

const applyMiddleware = require('redux').applyMiddleware
const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));

describe('Weather App Reducers', () => {
  describe('location reducer', () => {
    it('Should accept and return initial state.', () => {
      expect(location(initialState.location, { type: null })).toEqual(initialState.location);
    });
  });

  describe('weather reducer', () => {
    it('Should accept and return initial state.', () => {
      expect(weather(initialState.weather, { type: null })).toEqual(initialState.weather);
    });
  });

  describe('rootReducer reducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    });

    it('Should contain logic from all reducers.', () => {
      expect(store.getState().location).toEqual(
        location(initialState.location, { type: null })
      );
      expect(store.getState().weather).toEqual(
        weather(initialState.weather, { type: null })
      );
    });
  });

});
