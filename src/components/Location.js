import './Location.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLocationFromIP, changeLocation } from './../actions';

function Location(props) {
  const { isFetching, description, dispatch, fetchLocationFailed, possibleLocations } = props
  const handleClick = location => {
    const newLocation = {
      description: locationDescription(location),
      latitude: location.latLng.lat,
      longitude: location.latLng.lng,
      isFetching: false,
    }
    dispatch(changeLocation(newLocation));
  }
  if (isFetching) {
    return (<div className="Location">Fetching Location</div>);
  }
  if (possibleLocations) {
    return (
      <div className="Location">
        <ul>
        {possibleLocations.map((location, index) =>
          <li onClick={() => handleClick(location)} key={index} style={{cursor: 'pointer'}}>
            {locationDescription(location)}
          </li>)}
        </ul>
      </div>
    );
  }
  if (!description){
    if (!fetchLocationFailed) {
      dispatch(fetchLocationFromIP());
    }
    return null;
  }
  return (<div className="Location">{description}</div>);
}

Location.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  description: PropTypes.string,
  fetchLocationFailed: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
return ({
  possibleLocations: state.location.possibleLocations,
  isFetching: state.location.isFetching,
  description: state.location.description,
  fetchLocationFailed: state.location.fetchLocationFailed,
});
}

const locationDescription = location => {
  const street = location.street;
  const postalCode = location.postalCode;
  const city = location.adminArea5;
  const county = location.adminArea4;
  const state = location.adminArea3;
  const country = location.adminArea1;
  let dataArray = [ street, city, county, state, postalCode, country ];
  return dataArray.filter(d => d !== '').join(', ');
}

export default connect(mapStateToProps)(Location);
