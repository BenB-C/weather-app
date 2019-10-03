import './Location.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLocationFromIP } from './../actions';

function Location({ isFetching, description, dispatch }) {
  if (isFetching) {
    return (<div>Fetching Location</div>);
  }
  if (!description){
    dispatch(fetchLocationFromIP());
    return (<div>Search for a location</div>);
  }
  return (<div className="Location">{description}</div>);
}

Location.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  description: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => {


return ({
  isFetching: state.location.isFetching,
  description: state.location.description,
});
}

export default connect(mapStateToProps)(Location);
