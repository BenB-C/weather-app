import React from 'react';
import ReactDOM from 'react-dom';
import CurrentConditions from './../../components/CurrentConditions';

it('renders without crashing', () => {
  const currentConditionsData = {
    location: 'Portland, OR 97205',
    time: 'Saturday 9:00 AM',
    description: 'Mostly Cloudy',
    temp: 59,
    precipitation: 0,
    humidity: 86,
    windspeed: 2,
  }
  const div = document.createElement('div');
  ReactDOM.render(<CurrentConditions {...currentConditionsData}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
