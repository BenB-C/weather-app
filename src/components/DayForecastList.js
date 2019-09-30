import React from 'react';
import DayForecast from './DayForecast';
import './DayForecastList.css';
import { connect } from 'react-redux';
import timeFromUnixTime from './../helpers/timeFromUnixTime.js'

function DayForecastList(props) {
  const dayForecastList = props.dailyConditions.map(data => {
    return ({
      day: timeFromUnixTime(data.time, 'weekdayShort'),
      icon: data.icon,
      high: Math.round(data.temperatureHigh),
      low: Math.round(data.temperatureLow),
    });
  });

  return (
    <div className="DayForecastList">
      {dayForecastList.map(
        (dayForecast, index) => <DayForecast {...dayForecast} index={index} key={index} />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return ({
    dailyConditions: state.dailyConditions
  });
}

export default connect(mapStateToProps)(DayForecastList);
