import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import CurrentConditions from './CurrentConditions';
import DayForecastList from './DayForecastList';
import sampleData from './sampleData.json';

function App() {
  const currently = sampleData.currently;
  const unixTime = currently.time;
  const date = new Date(unixTime * 1000);
  const currentConditionsData = {
    location: 'Portland, OR 97205', //TODO: get location from lat,long in json
    time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
    summary: currently.summary,
    icon: currently.icon,
    temp: Math.round(currently.temperature),
    precipitation: Math.round(currently.precipProbability * 100),
    humidity: Math.round(currently.humidity * 100),
    windspeed: Math.round(currently.windSpeed),
  }
  return (
    <div className="App">
      <SearchBar />
      <CurrentConditions {...currentConditionsData} />
      <DayForecastList />
    </div>
  );
}

export default App;
