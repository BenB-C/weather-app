import dayChangeReducer from './../../reducers/dayChangeReducer';
import locationChangeReducer from './../../reducers/locationChangeReducer';
import rootReducer from './../../reducers/';
// import * as types from './../../constants/ActionTypes';
import {initialState} from './../../constants/initialState.js';
import { createStore } from 'redux';
import * as actions from './../../actions/';

describe('Weather App', () => {
  const store = createStore(rootReducer, initialState);

  describe('dayChangeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(dayChangeReducer(initialState, { type: null })).toEqual(initialState);
    });

    it('Should change selected day index.', () => {
      expect(dayChangeReducer(initialState.selectedDayIndex, actions.changeDay(2))).toEqual(2);
    });
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    });

    it('Should contain logic from all reducers.', () => {
      expect(store.getState().selectedDayIndex).toEqual(dayChangeReducer(null, { type: null }));
    });
  });

});
