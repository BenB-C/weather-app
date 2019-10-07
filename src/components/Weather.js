import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentConditions from './CurrentConditions';
import DayForecastList from './DayForecastList';
import HourlyConditions from './HourlyConditions';

function Weather({locationIsFetching, weatherIsFetching, locationDescription}) {
  if (locationIsFetching || locationDescription === null) return null;
  if (weatherIsFetching) {
    return <p>Fetching Weather</p>;
  }
  return (
    <div className="Weather">
      <CurrentConditions />
      <DayForecastList />
      <HourlyConditions />
    </div>
  );
}

Weather.propTypes = {
  locationIsFetching: PropTypes.bool.isRequired,
  weatherIsFetching: PropTypes.bool.isRequired,
  locationDescription: PropTypes.string,
}

const mapStateToProps = state => ({
  locationIsFetching: state.location.isFetching,
  weatherIsFetching: state.weather.isFetching,
  locationDescription: state.location.description,
});

export default connect(mapStateToProps)(Weather);
