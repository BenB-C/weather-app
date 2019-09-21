import React from 'react';
import PropTypes from 'prop-types';
import './CurrentConditions.css';
import imageForCondition from './../helpers/imageForCondition'

function CurrentConditions(props) {
  return (
    <div className="CurrentConditions">
      <div className="CurrentConditions-row1">
        <p className="CurrentConditions-location">{props.location}</p>
        <p className="CurrentConditions-time">{props.time}</p>
        <p className="CurrentConditions-description">{props.description}</p>
      </div>
      <div className="CurrentConditions-row2">
        <div className="CurrentConditions-icon-temp">
          <img src={imageForCondition(props.description)} />
          <p>{props.temp}°F</p>
        </div>
        <div className="CurrentConditions-misc-data">
          <p>Precipitation: {props.precipitation}%</p>
          <p>Humidity: {props.humidity}%</p>
          <p>Wind: {props.windspeed} mph</p>
        </div>
      </div>
    </div>
  );
}

CurrentConditions.propTypes = {
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  precipitation: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windspeed: PropTypes.number.isRequired,
}

export default CurrentConditions;
