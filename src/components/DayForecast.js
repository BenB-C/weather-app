import React from 'react';
import PropTypes from 'prop-types';
import imageForIcon from './../helpers/imageForIcon';
import { connect } from 'react-redux';
import { changeDay } from './../actions';
import timeFromUnixTime from './../helpers/timeFromUnixTime.js';
import './DayForecast.css';

function DayForecast({ index, selectedDayIndex, dailyConditions, dispatch }) {
  const data = dailyConditions[index];
  const handleClick = () => dispatch(changeDay(index));
  let dayForcastStyle = {};
  if (index === selectedDayIndex) {
    dayForcastStyle = {
      border: '5px solid lightblue',
      borderRadius: '5px',
      transform: 'translate(0, -5px)',
    };
  }
  return (
    <div className="DayForecast" onClick={handleClick} style={dayForcastStyle} >
      <div>{timeFromUnixTime(data.time, 'weekdayShort')}</div>
      <img src={imageForIcon(data.icon)} alt="weather icon"/>
      <div className="DayForecast-high-low">
        <span className="DayForecast-high">{Math.round(data.temperatureHigh)}°</span>
        <span className="DayForecast-low">{Math.round(data.temperatureLow)}°</span>
      </div>
    </div>
  );
}

DayForecast.propTypes = {
  index: PropTypes.number.isRequired, // passed from DayForecastList
  selectedDayIndex: PropTypes.number, // from state
  dailyConditions: PropTypes.array.isRequired, // from state
  dispatch: PropTypes.func.isRequired, // from connect
}

const mapStateToProps = state => ({
  dailyConditions: state.weather.dailyConditions,
  selectedDayIndex: state.weather.selectedDayIndex,
});

export default connect(mapStateToProps)(DayForecast);
