import './Location.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLocationFromIP, changeLocation } from './../actions';
import locationDescription from './../helpers/locationDescription';

function Location(props) {
  const {
    isFetching,
    description,
    fetchLocationFailed,
    possibleLocations,
    mapUrl,
    dispatch,
  } = props
  if (isFetching) {
    return (<div className="Location">Fetching Location</div>);
  }
  if (possibleLocations) {
    return (
      <div className="Location">
        <ul>
        {possibleLocations.map((location, index) =>
          <li
            key={index}
            onClick={() => dispatch(changeLocation(location))}
            style={{cursor: 'pointer'}}
          >
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
  return (
    <div className="Location">
      <div>{description}</div>
      <img className='Location-map' src={mapUrl} alt='location map' />
    </div>
  );
}

Location.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  description: PropTypes.string,
  fetchLocationFailed: PropTypes.bool,
  mapUrl: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
return ({
  possibleLocations: state.location.possibleLocations,
  isFetching: state.location.isFetching,
  description: state.location.description,
  mapUrl: state.location.mapUrl,
  fetchLocationFailed: state.location.fetchLocationFailed,
});
}



export default connect(mapStateToProps)(Location);
