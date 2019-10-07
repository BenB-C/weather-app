import './CurrentConditions.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import timeFromUnixTime from './../helpers/timeFromUnixTime';
import Graph from './Graph';

class HourlyConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toShow: 'temp' };
  }

  showTemp = () => {
    this.setState({ toShow: 'temp' });
  }

  showPrecip = () => {
    this.setState({ toShow: 'precip' });
  }

  render() {
    const { selectedDayIndex, hourlyConditions } = this.props;
    if (hourlyConditions.length === 0 || selectedDayIndex > 0) {
      return null;
    }
    const domain = { x: [0, 23] };
    const data = [];
    const xLabels = [];
    const yValues = [];
    let yLabels, areaColor, lineColor;

    for (let i = 0; i < 24; i++) {
      const datum = hourlyConditions[i];
      xLabels[i] = timeFromUnixTime(datum.time, 'hour');
      let yValue;
      if (this.state.toShow === 'temp') {
        yValue = Math.round(datum.temperature);
      } else if (this.state.toShow === 'precip') {
        yValue = Math.round(datum.precipProbability * 100);
      }
      data[i] = { x: i, y: yValue };
      yValues[i] = yValue;
    }
    if (this.state.toShow === 'temp') {
      yLabels = yValues;
      domain.y = [Math.min(...yValues, 0), Math.max(...yValues)];
      areaColor = '#FEF5CC';
      lineColor = '#FFCC01';
    } else if (this.state.toShow === 'precip') {
      yLabels = yValues.map(y => y + '%');
      domain.y = [0, 100];
      areaColor = '#60eafc';
      lineColor = '#0194ff';
    }
    const graphProps = {xLabels, yLabels, domain, data, areaColor, lineColor}
    return (
      <div>
        <button onClick={this.showTemp}>Temperature</button>
        <button onClick={this.showPrecip}>Precipitation</button>
        <Graph {...graphProps} />
      </div>
    );
  }
}

HourlyConditions.propTypes = {
  selectedDayIndex: PropTypes.number,
  hourlyConditions: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  selectedDayIndex: state.weather.selectedDayIndex,
  hourlyConditions: state.weather.hourlyConditions,
});

export default connect(mapStateToProps)(HourlyConditions);
