import './CurrentConditions.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import timeFromUnixTime from './../helpers/timeFromUnixTime';
import { VictoryChart, VictoryLine, VictoryScatter, VictoryAxis } from 'victory';

function HourlyConditions({ hourlyConditions }) {
  console.log('hourlyConditions', hourlyConditions);
  if (hourlyConditions.length === 0) {
    return null;
  }
  const temperatureData = [];
  const xValues = [];
  const yValues = [];
  for (let i = 0; i < 24; i++) {
    const data = hourlyConditions[i];
    const time = timeFromUnixTime(data.time, 'hour');
    const temperature = data.temperature;
    temperatureData[i] = { x: time, y: temperature };
    xValues[i] = time;
    yValues[i] = temperature;
  }
  const yPadding = 2;
  const domain = {
    x: [Math.min(...xValues), Math.max(...xValues)],
    y: [Math.min(...yValues) - yPadding, Math.max(...yValues) + yPadding]
  };
  console.log(temperatureData);
  console.log(domain);
  return (
    <VictoryChart
      heigth={100}
    >
      <VictoryLine
        interpolation={'natural'}
        data={temperatureData}
        style={{ data: { stroke: 'orange' } }}
        domain={domain}
      />
      <VictoryScatter
        data={temperatureData}
        size={3}
        style={{ data: { fill: 'orange' } }}
        domain={domain}
      />
    </VictoryChart>
  );
}

HourlyConditions.propTypes = {
  hourlyConditions: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  hourlyConditions: state.weather.hourlyConditions,
});

export default connect(mapStateToProps)(HourlyConditions);
