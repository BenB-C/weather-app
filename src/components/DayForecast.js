import React from 'react';
import PropTypes from 'prop-types';
import imageForIcon from './../helpers/imageForIcon';
import { connect } from 'react-redux';
import { changeDay } from './../actions';
import './DayForecast.css';

function DayForecast(props) {
  // console.log("DayForecast props", props);
  function handleClick() {
    console.log('day ' + props.index + ' clicked');
    console.log(changeDay(props.index));
    props.dispatch(changeDay(props.index));
  }
  return (
    <div className="DayForecast" onClick={handleClick} >
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

const mapStateToProps = state => state;

export default connect(mapStateToProps)(DayForecast);
