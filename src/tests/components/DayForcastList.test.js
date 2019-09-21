import React from 'react';
import ReactDOM from 'react-dom';
import DayForecastList from './../../components/DayForecastList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DayForecastList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
