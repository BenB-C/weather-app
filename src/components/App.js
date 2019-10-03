import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import Location from './Location';
import CurrentConditions from './CurrentConditions';
import DayForecastList from './DayForecastList';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Location />
      <CurrentConditions />
      <DayForecastList />
    </div>
  );
}

export default App;
