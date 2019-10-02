import { createStore } from 'redux';
import currentConditionsReducer from './../../reducers/currentConditionsReducer';
import dayChangeReducer from './../../reducers/dayChangeReducer';
import dailyConditionsReducer from './../../reducers/dailyConditionsReducer';
import locationChangeReducer from './../../reducers/locationChangeReducer';
import rootReducer from './../../reducers/';
import { initialState } from './../../constants/InitialState';
import * as actions from './../../actions/';
import sampleData2 from './../../constants/sampleData2.json'

describe('Weather App', () => {
  const store = createStore(rootReducer, {});

  describe('currentConditionsReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(currentConditionsReducer(initialState.currentConditions, { type: null })).toEqual(initialState.currentConditions);
    });
  });

  describe('dailyConditionsReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(dailyConditionsReducer(initialState.dailyConditions, { type: null })).toEqual(initialState.dailyConditions);
    });
  });

  describe('dayChangeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(dayChangeReducer(initialState.selectedDayIndex, { type: null })).toEqual(initialState.selectedDayIndex);
    });

    it('Should change selected day index.', () => {
      expect(dayChangeReducer(initialState.selectedDayIndex, actions.changeDay(2))).toEqual(2);
    });
  });

  describe('locationChangeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(locationChangeReducer(initialState.location, { type: null })).toEqual(initialState.location);
    });
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    });

    it('Should contain logic from all reducers.', () => {
      expect(store.getState().currentConditions).toEqual(
        currentConditionsReducer(initialState.currentConditions, { type: null })
      );
      expect(store.getState().dailyConditions).toEqual(
        dailyConditionsReducer(initialState.dailyConditions, { type: null })
      );
      expect(store.getState().selectedDayIndex).toEqual(
        dayChangeReducer(initialState.selectedDayIndex, { type: null })
      );
      expect(store.getState().location).toEqual(
        locationChangeReducer(initialState.location, { type: null })
      );
    });
  });

});
