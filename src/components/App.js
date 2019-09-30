import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import CurrentConditions from './CurrentConditions';
import DayForecastList from './DayForecastList';

function App(props) {
  return (
    <div className="App">
      <SearchBar />
      <CurrentConditions />
      <DayForecastList />
    </div>
  );
}

export default App;
