import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentConditions from './CurrentConditions';
import DayForecastList from './DayForecastList';
import HourlyConditions from './HourlyConditions';
import HistoricalSearch from './HistoricalSearch';

function Weather(props) {
  if (props.noLocation) return null;
  if (props.weatherIsFetching) {
    return <p className="Weather">Fetching Weather</p>;
  }
  if (props.fetchWeatherFailed) {
    return <p style={{fontSize: '1.5em'}}>Error fetching weather: {props.error}</p>;
  }
  return (
    <div className="Weather">
      <CurrentConditions />
      <DayForecastList />
      <HourlyConditions />
      <HistoricalSearch />
    </div>
  );
}

Weather.propTypes = {
  noLocation: PropTypes.bool.isRequired,
  weatherIsFetching: PropTypes.bool.isRequired,
  fetchWeatherFailed: PropTypes.bool,
  error: PropTypes.string,
}

const mapStateToProps = state => ({
  weatherIsFetching: state.weather.isFetching,
  fetchWeatherFailed: state.weather.fetchWeatherFailed,
  error: state.weather.error,
  noLocation: state.location.isFetching === true ||
              state.location.description === null ||
              state.location.fetchLocationFailed === true ||
              state.location.possibleLocations !== undefined,
  location: state.location,
});

export default connect(mapStateToProps)(Weather);
