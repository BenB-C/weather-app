import React from 'react';
import ReactDOM from 'react-dom';
import CurrentConditions from './../../components/CurrentConditions';
import sampleData from './../../constants/sampleData.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './../../reducers/';
import initialState from './../../constants/InitialState.js';

const store = createStore(rootReducer, initialState);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><CurrentConditions /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
