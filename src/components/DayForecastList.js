import React from 'react';
import DayForecast from './DayForecast';
import { v4 } from 'uuid';

function DayForecastList() {
  const dayForecastList = [
    {
      day:'Sat',
      description: 'Mostly Cloudy',
      high: 71,
      low: 58,
    },
    {
      day:'Sun',
      description: 'Rain',
      high: 66,
      low: 53,
    },
    {
      day:'Mon',
      description: 'Partly Cloudy',
      high: 69,
      low: 56,
    },
    {
      day:'Tue',
      description: 'Partly Cloudy',
      high: 69,
      low: 52,
    },
    {
      day:'Wed',
      description: 'Partly Cloudy',
      high: 67,
      low: 52,
    },
    {
      day:'Thu',
      description: 'Showers',
      high: 61,
      low: 49,
    },
    {
      day:'Fri',
      description: 'Showers',
      high: 59,
      low: 47,
    },
    {
      day:'Sat',
      description: 'Mostly Cloudy',
      high: 58,
      low: 46,
    },
  ]
  return (
    <div className="DayForecastList">
      {dayForecastList.map(
        (dayForecast, index) => <DayForecast {...dayForecast} key={index} />
      )}
    </div>
  );
}

export default DayForecastList;
