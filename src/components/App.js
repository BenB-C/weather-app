import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import CurrentConditions from './CurrentConditions';
import DayForecastList from './DayForecastList';
import sampleData from './sampleData.json';
import timeFromUnixTime from './../helpers/timeFromUnixTime';

class App extends React.Component {
  constructor(props) {
    super(props);
    const currently = sampleData.currently;
    this.state = {
      selectedDayIndex: null,
      location: {
        description: 'Portland, OR 97205',
        latitude: 45.52,
        longitude: -122.69,
      },
      currentConditions: {
        time: timeFromUnixTime(currently.time),
        summary: currently.summary,
        iconName: currently.icon,
        temp: Math.round(currently.temperature),
        precipProbability: Math.round(currently.precipProbability * 100),
        humidity: Math.round(currently.humidity * 100),
        windspeed: Math.round(currently.windSpeed),
      },
    };
  }
  render() {
    const props = Object.assign({}, this.state.currentConditions, {location: this.state.location.description})
    return (
      <div className="App">
        <SearchBar />
        <CurrentConditions {...props} />
        <DayForecastList />
      </div>
    );
  }
}

export default App;
