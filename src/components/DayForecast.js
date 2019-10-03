import React from 'react';
import PropTypes from 'prop-types';
import imageForIcon from './../helpers/imageForIcon';
import { connect } from 'react-redux';
import { changeDay } from './../actions';
import timeFromUnixTime from './../helpers/timeFromUnixTime.js';
import './DayForecast.css';

function DayForecast({ index, dailyConditions, dispatch }) {
  const data = dailyConditions[index];
  const handleClick = () => dispatch(changeDay(index));
  return (
    <div className="DayForecast" onClick={handleClick} >
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
  index: PropTypes.number.isRequired, // passed prop
  dailyConditions: PropTypes.array.isRequired, // from state
  dispatch: PropTypes.func.isRequired, // from connect
}

const mapStateToProps = state => ({
  dailyConditions: state.weather.dailyConditions,
});

export default connect(mapStateToProps)(DayForecast);
