import React from 'react';
import PropTypes from 'prop-types';
import './CurrentConditions.css';
import imageForIcon from './../helpers/imageForIcon'

function CurrentConditions(props) {
  return (
    <div className="CurrentConditions">
      <div className="CurrentConditions-row1">
        <div className="CurrentConditions-location">{props.location}</div>
        <div className="CurrentConditions-time">{props.time}</div>
        <div className="CurrentConditions-summary">{props.summary}</div>
      </div>
      <div className="CurrentConditions-row2">
        <div className="CurrentConditions-icon-temp">
          <img src={imageForIcon(props.iconName)} alt="weather icon"/>
          <div className="CurrentConditions-temp">{props.temp}</div>
          <div className="temp-units">°F</div>
        </div>
        <div className="CurrentConditions-misc-data">
          <div>Precipitation: {props.precipProbability}%</div>
          <div>Humidity: {props.humidity}%</div>
          <div>Wind: {props.windspeed} mph</div>
        </div>
      </div>
    </div>
  );
}

CurrentConditions.propTypes = {
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  precipProbability: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windspeed: PropTypes.number.isRequired,
}

export default CurrentConditions;
