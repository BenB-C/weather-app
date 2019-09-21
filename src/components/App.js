import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import CurrentConditions from './CurrentConditions';

function App() {
  const currentConditionsData = {
    location: 'Portland, OR 97205',
    time: 'Saturday 9:00 AM',
    description: 'Mostly Cloudy',
    temp: 59,
    precipitation: 0,
    humidity: 86,
    windspeed: 2,
  }
  return (
    <div className="App">
      <SearchBar />
      <CurrentConditions {... currentConditionsData} />
    </div>
  );
}

export default App;
