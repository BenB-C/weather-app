import './Location.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLocationFromIP } from './../actions';

function Location(props) {
  const { isFetching, description, dispatch, fetchLocationFailed } = props
  if (isFetching) {
    return (<div>Fetching Location</div>);
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
  isFetching: state.location.isFetching,
  description: state.location.description,
  fetchLocationFailed: state.location.fetchLocationFailed,
});
}

export default connect(mapStateToProps)(Location);
