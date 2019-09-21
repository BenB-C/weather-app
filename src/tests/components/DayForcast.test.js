import React from 'react';
import ReactDOM from 'react-dom';
import DayForecast from './../../components/DayForecast';

it('renders without crashing', () => {
  const props = { day: 'Sat', icon: 'partly-cloudy-day', high: 74, low: 58 };
  const div = document.createElement('div');
  ReactDOM.render(<DayForecast {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
