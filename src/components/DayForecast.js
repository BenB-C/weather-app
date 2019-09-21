import React from 'react';
import PropTypes from 'prop-types';
import imageForIcon from './../helpers/imageForIcon';
import './DayForecast.css';

function DayForecast(props) {
  return (
    <div className="DayForecast">
      <div>{props.day}</div>
      <img src={imageForIcon(props.icon)} alt="weather icon"/>
      <div className="DayForecast-high-low">
        <span className="DayForecast-high">{props.high}°</span>
        <span className="DayForecast-low">{props.low}°</span>
      </div>
    </div>
  );
}

DayForecast.propTypes = {
  day: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,

}

export default DayForecast;
