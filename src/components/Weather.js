import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentConditions from './CurrentConditions';
import DayForecastList from './DayForecastList';
import HourlyConditions from './HourlyConditions';
import HistoricalSearch from './HistoricalSearch';

function Weather({ noLocation, weatherIsFetching, location }) {
  if (noLocation) return null;
  if (weatherIsFetching) {
    return <p>Fetching Weather</p>;
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
}

const mapStateToProps = state => ({
  weatherIsFetching: state.weather.isFetching,
  noLocation: state.location.isFetching === true ||
              state.location.description === null ||
              state.location.possibleLocations !== undefined,
  location: state.location,
});

export default connect(mapStateToProps)(Weather);
