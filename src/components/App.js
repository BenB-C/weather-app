import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import SearchBar from './SearchBar';
import CurrentConditions from './CurrentConditions';
import DayForecastList from './DayForecastList';
import { fetchLocationFromIP } from './../actions';

function App(props) {
  console.log("app props:");
  console.log(props);
  let toRender;
  if (!props.location) {
    props.dispatch(fetchLocationFromIP());
  } else if (props.fetchingLocation) {
    toRender = <div>Fetching location</div>;
  } else if (props.fetchingWeather) {
    toRender = <div>Fetching weather</div>;
  } else {
    toRender = (
      <>
        <CurrentConditions />
        <DayForecastList />
      </>
    );
  }
  return (
    <div className="App">
      <SearchBar />
      {toRender}
    </div>
  );
}

export default connect(state => state)(App);
