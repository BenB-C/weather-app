import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import Location from './Location';
import CurrentConditions from './CurrentConditions';
import DayForecastList from './DayForecastList';
import HourlyConditions from './HourlyConditions';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Location />
      <CurrentConditions />
      <DayForecastList />
      <HourlyConditions />
    </div>
  );
}

export default App;
