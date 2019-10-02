import * as types from './../constants/ActionTypes';

export const changeDay = (newSelectedDayIndex) => ({
  type: types.CHANGE_DAY,
  newSelectedDayIndex,
});

export const changeLocation = (newLocation) => ({
  type: types.CHANGE_LOCATION,
  newLocation,
});

export const changeCurrentConditions = (newConditions) => ({
  type: types.CHANGE_CURRENT_CONDITIONS,
  newConditions,
});

export const changeDailyConditions = (newConditionsArray) => ({
  type: types.CHANGE_DAILY_CONDITIONS,
  newConditions: newConditionsArray,
});

export const requestLocation = () => ({
  type: types.REQUEST_LOCATION,
});

export const receiveLocation = () => ({
  type: types.RECEIVE_LOCATION,
});

export const requestWeather = () => ({
  type: types.REQUEST_WEATHER,
});

export const receiveWeather = () => ({
  type: types.RECEIVE_WEATHER,
});

export const fetchLocation = (locationQuery) => {
  return function (dispatch) {
    console.log("fetchingLocation");
    dispatch(requestLocation());
    const URL = process.env.REACT_APP_LOCATION_URL + locationQuery;
    return fetch(URL).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      const results = json.results;
      if (results[0] && results[0].locations[0]) {
        const location = results[0].locations[0];
        const { lat, lng } = location.latLng;
        const newLocation = {
          latitude: lat,
          longitude: lng,
        };
        const { adminArea1, adminArea3, adminArea5, postalCode } = location;
        // new location description = 'City, State Zip'
        newLocation.description = adminArea5 + ', ' + adminArea3 + ' ' + postalCode;
        if (adminArea1 !== 'US' && adminArea1 !== '') {
          // Location is from another country, append country abbreviation
          newLocation.description += ', ' + location.adminArea1;
        }
        dispatch(changeLocation(newLocation));
        console.log('received location');
        dispatch(requestWeather());
        dispatch(receiveLocation());
        fetchWeather(lat, lng, dispatch);
      } else {
        console.log('No location found matching ' + locationQuery);
      }
    });
  };
}

export const fetchWeather = (latitude, longitude, dispatch) => {
  console.log("fetching weather");
  const URL = process.env.REACT_APP_WEATHER_URL + latitude + ',' + longitude;
  return fetch(URL).then(
    response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(function(json) {
    dispatch(changeDay(null));
    dispatch(changeCurrentConditions(json.currently));
    dispatch(changeDailyConditions(json.daily.data));
    console.log('received weather');
    dispatch(receiveWeather());
  });
}

export function fetchLocationFromIP() {
  return function (dispatch) {
    dispatch(requestLocation());
    return fetch('http://ip-api.com/json').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      const newLocation = {
        description: json.city + ', ' + json.region,
        latitude: json.lat,
        longitude: json.lon,
      };
      dispatch(changeLocation(newLocation));
      dispatch(requestWeather());
      dispatch(receiveLocation());
      fetchWeather(json.lat, json.lon, dispatch);
    });
  };
}
