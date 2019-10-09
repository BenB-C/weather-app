import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather } from './../actions';

function HistoricalSearch(props) {
  let input;
  const style = { fontSize: '1.5em', marginBottom: '5px' };
  const error = props.error ? <p style={style}>Error: {props.error}</p> : null;
  let d = new Date(new Date() - 24 * 60 * 60 * 1000); // yesterday
  const maxDate = [
    d.getFullYear(),
    ('0' + (d.getMonth() + 1)).slice(-2),
    ('0' + d.getDate()).slice(-2)
  ].join('-'); // convert to yyyy-mm-dd format
  console.log(maxDate);
  return(
    <div className='HistoricalSearch'>
      <p style={style}>Search for past weather:</p>
      <form onSubmit={e => {
        e.preventDefault();
        const dateStr = input.value.replace(/-/g, '/')
        const date = new Date(dateStr);
        const time = date.getTime() / 1000;
        props.dispatch(fetchWeather(props.lat, props.lng, time));
      }}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <div style={style}>Date:</div>
          <input
            type='date' placeholder='mm/dd/yyyy' style={style}
            min='1900-01-01'
            max={maxDate}
            ref={n => {input = n;}}/>
          <button style={style}>Submit</button>
        </div>
      </form>
      {error}
    </div>
  );
}

HistoricalSearch.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
}

const mapStateToProps = state => ({
  lat: state.location.latitude,
  lng: state.location.longitude,
  error: state.weather.error,
});

export default connect(mapStateToProps)(HistoricalSearch);
