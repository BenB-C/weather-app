import React from 'react';
import DayForecast from './DayForecast';
import './DayForecastList.css';
// import { connect } from 'react-redux';

function DayForecastList(props) {
  const numberOfDays = 8;

  return (
    <div className="DayForecastList">
      {Array.from(Array(numberOfDays).keys()).map(
        (index) => <DayForecast index={index} key={index} />
      )}
    </div>
  );
}

// function mapStateToProps(state) {
//   return ({
//     dailyConditions: state.dailyConditions
//   });
// }

// export default connect(mapStateToProps)(DayForecastList);
export default DayForecastList;
