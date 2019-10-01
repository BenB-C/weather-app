import React from 'react';
import PropTypes from 'prop-types';
import imageForIcon from './../helpers/imageForIcon';
import { connect } from 'react-redux';
import { changeDay } from './../actions';
import timeFromUnixTime from './../helpers/timeFromUnixTime.js';
import './DayForecast.css';

function DayForecast(props) {
  const data = props.dailyConditions[props.index];

  const handleClick = () => props.dispatch(changeDay(props.index));

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
  index: PropTypes.number.isRequired,
}

const mapStateToProps = state => {
  return({
    dailyConditions: state.dailyConditions,
  });
}
export default connect(mapStateToProps)(DayForecast);
