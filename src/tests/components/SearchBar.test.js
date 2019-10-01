import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './../../components/SearchBar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './../../reducers/';
import initialState from './../../constants/InitialState.js';

const store = createStore(rootReducer, initialState);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider><SearchBar /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
