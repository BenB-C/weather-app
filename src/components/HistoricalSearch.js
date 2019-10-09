import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function HistoricalSearch(props) {
  let input;
  return(
    <div className='HistoricalSearch'>
      <p>Search for past weather:</p>
      <form onSubmit={e => {
        e.preventDefault();
        const yearMonthDayRegex = /(\d\d\d\d)-(\d\d)-(\d\d)/;
        const dateStr = input.value.replace(/-/g, '/')
        console.log(dateStr);
        console.log(new Date(dateStr));
      }}>
        Date:
        <input type="date" placeholder='mm/dd/yyyy' ref={n => {input = n;}}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

HistoricalSearch.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
});

export default connect(mapStateToProps)(HistoricalSearch);
