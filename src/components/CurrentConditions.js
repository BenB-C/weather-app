import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CurrentConditions.css';
import imageForIcon from './../helpers/imageForIcon';
import timeFromUnixTime from './../helpers/timeFromUnixTime';

function CurrentConditions(props) {
  const conditions = props.conditions;
  let time;
  let temp;
  if (props.selectedDayIndex == null) {
    time = timeFromUnixTime(conditions.time, 'weekdayAndTime');
    temp = Math.round(conditions.temperature);
  } else {
    time = timeFromUnixTime(conditions.time, 'weekdayAndDate');
    temp = Math.round(conditions.temperatureHigh);
  }
  return (
    <div className="CurrentConditions">
      <div className="CurrentConditions-row1">
        <div className="CurrentConditions-location">{props.location}</div>
        <div className="CurrentConditions-time">{time}</div>
        <div className="CurrentConditions-summary">{conditions.summary}</div>
      </div>
      <div className="CurrentConditions-row2">
        <div className="CurrentConditions-icon-temp">
          <img src={imageForIcon(conditions.icon)} alt="weather icon"/>
          <div className="CurrentConditions-temp">{temp}</div>
          <div className="temp-units">°F</div>
        </div>
        <div className="CurrentConditions-misc-data">
          <div>Precipitation: {Math.round(conditions.precipProbability * 100)}%</div>
          <div>Humidity: {Math.round(conditions.humidity * 100)}%</div>
          <div>Wind: {Math.round(conditions.windSpeed)} mph</div>
        </div>
      </div>
    </div>
  );
}

CurrentConditions.propTypes = {
  selectedDayIndex: PropTypes.number,
  conditions: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
  const dayIndex = state.selectedDayIndex;
  // const dayIndex = 3;
  return({
    selectedDayIndex: dayIndex,
    conditions: state.dailyConditions[dayIndex] || state.currentConditions,
    location: state.location.description,
  });
};


export default connect(mapStateToProps)(CurrentConditions);
