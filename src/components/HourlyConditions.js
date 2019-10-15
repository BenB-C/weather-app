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
    this.buttonStyle = {
      fontSize: '1.5em',
      backgroundColor: 'lightgray',
      marginRight: '5px',
      outline: 'none',
      cursor: 'pointer',
    };
    this.highlightButtonStyle = {
      ...this.buttonStyle,
      border: '5px solid lightblue',
      borderRadius: '5px',
    };
    this.tempButtonStyle = this.highlightButtonStyle;
    this.precipButtonStyle = this.buttonStyle;
  }

  handleTempClick = () => {
    this.setState({ toShow: 'temp' });
    this.tempButtonStyle = this.highlightButtonStyle;
    this.precipButtonStyle = this.buttonStyle;
  }

  handlePrecipClick = () => {
    this.setState({ toShow: 'precip' });
    this.precipButtonStyle = this.highlightButtonStyle;
    this.tempButtonStyle = this.buttonStyle;
  }

  render() {
    const { selectedDayIndex, hourlyConditions } = this.props;
    if (!hourlyConditions || hourlyConditions.length === 0 || selectedDayIndex > 0) {
      return null;
    }
    const domain = { x: [0, 23] };
    const data = [];
    const xLabels = [];
    const yValues = [];
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
    let areaColor, lineColor, label;
    if (this.state.toShow === 'temp') {
      domain.y = [Math.min(...yValues, 0), Math.max(...yValues, 100)];
      areaColor = '#FEF5CC';
      lineColor = '#FFCC01';
      label = 'Temperature (°F)';
    } else if (this.state.toShow === 'precip') {
      domain.y = [0, 100];
      areaColor = '#60eafc';
      lineColor = '#0194ff';
      label = 'Chance of Rain (%)';
    }
    const graphProps = { xLabels, yValues, domain, data, areaColor, lineColor, label };
    return (
      <div>
        <Graph {...graphProps} />
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <button onClick={this.handleTempClick} style={this.tempButtonStyle}>
            Temperature
          </button>
          <button onClick={this.handlePrecipClick} style={this.precipButtonStyle}>
            Precipitation
          </button>
        </div>
      </div>
    );
  }
}

HourlyConditions.propTypes = {
  selectedDayIndex: PropTypes.number,
  hourlyConditions: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  selectedDayIndex: state.weather.selectedDayIndex,
  hourlyConditions: state.weather.hourlyConditions,
});

export default connect(mapStateToProps)(HourlyConditions);
