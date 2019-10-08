import { CHANGE_LOCATION } from './../constants/ActionTypes.js';
import { initialState } from './../constants/InitialState';
import * as types from './../constants/ActionTypes';
import locationDescription from './../helpers/locationDescription';

const location = (state = initialState.location, action) => {
  switch (action.type) {
  case CHANGE_LOCATION:
    const newLocation = action.newLocation;
    if (newLocation.possibleLocations) {
      return newLocation;
    }
    const location = {
      // Assumes action.newLocation is an object from json returned from api fetch
      description: locationDescription(newLocation),
      latitude: newLocation.latLng.lat,
      longitude: newLocation.latLng.lng,
      mapUrl: newLocation.mapUrl,
      isFetching: false,
    }
    return location;
  case types.REQUEST_LOCATION:
    return { isFetching: true };
  case types.FETCH_LOCATION_FAILED:
    return { isFetching: false, fetchLocationFailed: true };
  default:
    return state;
  }
};

// Helper Functions


export default location;
