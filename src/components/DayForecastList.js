import React from 'react';
import DayForecast from './DayForecast';
import './DayForecastList.css';
import sampleData from './sampleData.json';

function DayForecastList() {
  const dayForecastList = sampleData.daily.data.map(data => {
    return ({
      day: new Date(data.time * 100).toLocaleString('en-US', { weekday: 'short' }),
      icon: data.icon,
      high: Math.round(data.temperatureHigh),
      low: Math.round(data.temperatureLow),
    });
  });
  
  return (
    <div className="DayForecastList">
      {dayForecastList.map(
        (dayForecast, index) => <DayForecast {...dayForecast} key={index} />
      )}
    </div>
  );
}

export default DayForecastList;
