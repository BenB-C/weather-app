import './CurrentConditions.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import timeFromUnixTime from './../helpers/timeFromUnixTime';
import { VictoryChart, VictoryArea, VictoryScatter, VictoryAxis } from 'victory';

function HourlyConditions({ selectedDayIndex, hourlyConditions }) {
  console.log('hourlyConditions', hourlyConditions);
  if (hourlyConditions.length === 0 || selectedDayIndex > 0) {
    return null;
  }
  const temperatureData = [];
  const yValues = [];
  const xLabels = [];
  for (let i = 0; i < 24; i++) {
    const data = hourlyConditions[i];
    const temperature = data.temperature;
    temperatureData[i] = { x: i, y: temperature };
    xLabels[i] = timeFromUnixTime(data.time, 'hour');
    yValues[i] = temperature;
  }
  const yPadding = 2;
  const domain = {
    x: [0, 23],
    y: [Math.min(...yValues) - yPadding, Math.max(...yValues) + yPadding]
  };
  console.log(temperatureData);
  console.log(domain);
  return (
    <VictoryChart height={150} padding={{ top: 25, bottom: 25, left: 25, right: 25}}>
      <VictoryAxis
        tickCount={8}
        tickValues={xLabels}
      />
      <VictoryArea
        interpolation={'natural'}
        data={temperatureData}
        style={{ data: { fill: '#FEF5CC', stroke: '#FFCC01' } }}
        domain={domain}
      />
      <VictoryScatter
        data={temperatureData}
        size={2}
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
  selectedDayIndex: state.weather.selectedDayIndex,
  hourlyConditions: state.weather.hourlyConditions,
});

export default connect(mapStateToProps)(HourlyConditions);
