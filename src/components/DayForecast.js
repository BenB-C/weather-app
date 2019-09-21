import React from 'react';
import PropTypes from 'prop-types';
import imageForCondition from './../helpers/imageForCondition';

function DayForecast(props) {
  return (
    <div className="DayForecast">
      <div>{props.day}</div>
      <img src={imageForCondition(props.description)} alt="weather icon"/>
      <div className="DayForecast-high-low">
        <div className="DayForecast-high">{props.high}°</div>
        <div className="DayForecast-low">{props.low}°</div>
      </div>
    </div>
  );
}

DayForecast.propTypes = {
  day: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,

}

export default DayForecast;
