import React from 'react';
import ReactDOM from 'react-dom';
import App from './../../components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './../../reducers/';
import initialState from './../../constants/initialState.js';

const store = createStore(rootReducer, initialState);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
