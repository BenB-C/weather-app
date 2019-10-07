import './CurrentConditions.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import imageForIcon from './../helpers/imageForIcon';
import timeFromUnixTime from './../helpers/timeFromUnixTime';

function CurrentConditions({ weather }) {
  if (weather.currentConditions.length === 0) {
    return null;
  }
  if (weather.isFetching) {
    return (<div>Fetching Weather</div>);
  }
  const dayIndex = weather.selectedDayIndex;
  let time;
  let temp;
  let sunriseTime;
  let sunsetTime;
  let conditions;
  if (dayIndex == null) {
    conditions = weather.currentConditions;
    time = timeFromUnixTime(conditions.time, 'weekdayAndTime');
    temp = Math.round(conditions.temperature);
    sunriseTime = timeFromUnixTime(weather.dailyConditions[0].sunriseTime, 'hourAndMinutes');
    sunsetTime = timeFromUnixTime(weather.dailyConditions[0].sunsetTime, 'hourAndMinutes');
  } else {
    conditions = weather.dailyConditions[dayIndex];
    time = timeFromUnixTime(conditions.time, 'weekdayAndDate');
    temp = Math.round(conditions.temperatureHigh);
    sunriseTime = timeFromUnixTime(weather.dailyConditions[dayIndex].sunriseTime, 'hourAndMinutes')
    sunsetTime = timeFromUnixTime(weather.dailyConditions[dayIndex].sunsetTime, 'hourAndMinutes')
  } return (
    <div className="CurrentConditions">
      <div className="CurrentConditions-row1">
        <div className="CurrentConditions-time">{time}</div>
        <div className="CurrentConditions-summary">{conditions.summary}</div>
      </div>
      <div className="CurrentConditions-row2">
        <div className="CurrentConditions-icon-and-temp">
          <img
            className="CurrentConditions-icon"
            src={imageForIcon(conditions.icon)}
            alt="weather icon"
          />
          <div className="CurrentConditions-temp">{temp}</div>
          <div className="CurrentConditions-temp-units">°F</div>
        </div>
        <div className="CurrentConditions-misc-data">
          <div>Chance of Rain: {Math.round(conditions.precipProbability * 100)}%</div>
          <div>Humidity: {Math.round(conditions.humidity * 100)}%</div>
          <div>Wind: {Math.round(conditions.windSpeed)} mph</div>
          <div>Sunrise: {sunriseTime}</div>
          <div>Sunset: {sunsetTime}</div>
        </div>
      </div>
    </div>
  );
}

CurrentConditions.propTypes = {
  weather: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  weather: state.weather,
});

export default connect(mapStateToProps)(CurrentConditions);
