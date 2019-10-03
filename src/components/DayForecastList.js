import './DayForecastList.css';
import React from 'react';
import PropTypes from 'prop-types';
import DayForecast from './DayForecast';
import { connect } from 'react-redux';

function DayForecastList({ weather }) {
  if (weather.isFetching) {
    return null;
  }
  const numberOfDays = weather.dailyConditions.length;
  return (
    <div className="DayForecastList">
      {Array.from(Array(numberOfDays).keys()).map(
        (index) => <DayForecast index={index} key={index} />
      )}
    </div>
  );
}

DayForecastList.propTypes = {
  weather: PropTypes.object.isRequired,
}

const mapStateToProps = state => {

  return { weather: state.weather }
}

export default connect(mapStateToProps)(DayForecastList);
