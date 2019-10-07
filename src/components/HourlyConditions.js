import './CurrentConditions.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import timeFromUnixTime from './../helpers/timeFromUnixTime';
import { VictoryChart, VictoryArea, VictoryScatter, VictoryAxis } from 'victory';

function HourlyConditions({ selectedDayIndex, hourlyConditions }) {
  if (hourlyConditions.length === 0 || selectedDayIndex > 0) {
    return null;
  }
  const temperatureData = [];
  const yValues = [];
  const xLabels = [];
  for (let i = 0; i < 24; i++) {
    const data = hourlyConditions[i];
    const temperature = Math.round(data.temperature);
    temperatureData[i] = { x: i, y: temperature };
    xLabels[i] = timeFromUnixTime(data.time, 'hour');
    yValues[i] = temperature;
  }
  const yPadding = 2;
  const domain = {
    x: [0, 23],
    y: [Math.min(...yValues, 0), Math.max(...yValues)]
  };
  return (
    <VictoryChart
      height={150} width={450}
      padding={{ top: 25, bottom: 25, left: 25, right: 25}}
    >
      <VictoryAxis
        tickCount={12}
        tickValues={xLabels}
        style={{
          tickLabels: { fontSize: 10, padding: 0 },
          ticks: { stroke: 'black', size: 2 }
        }}
      />
      <VictoryArea
        interpolation={'natural'}
        data={temperatureData}
        style={{ data: { fill: '#FEF5CC', stroke: '#FFCC01' } }}
        domain={domain}
      />
      <VictoryScatter
        data={temperatureData}
        size={0}
        domain={domain}
        labels={yValues}
        style={{
          data: { fill: 'orange' },
          labels: { fontSize: 10, padding: 1 }
        }}
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
