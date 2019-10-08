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

export const updateWeather = (newWeather) => ({
  type: types.UPDATE_WEATHER,
  newWeather,
});

export const requestLocation = () => ({
  type: types.REQUEST_LOCATION,
});

export const requestWeather = () => ({
  type: types.REQUEST_WEATHER,
});

export const fetchLocationFailed = () => ({
  type: types.FETCH_LOCATION_FAILED,
});

export const fetchWeatherFailed = () => ({
  type: types.FETCH_WEATHER_FAILED,
});

export const fetchLocation = (locationQuery) => {
  return function (dispatch) {
    dispatch(requestLocation());
    const URL = process.env.REACT_APP_LOCATION_URL + locationQuery;
    return fetch(URL).then(
      response => response.json(),
      error => console.log('An error occurred fetching location.', error)
    ).then(function(json) {
      if (json) {
        const results = json.results;
        if (results[0] && results[0].locations[0]) {
          const location = results[0].locations[0];
          const { lat, lng } = location.latLng;
          const newLocation = {
            latitude: lat,
            longitude: lng,
            isFetching: false,
          };
          const { adminArea1, adminArea3, adminArea5, postalCode } = location;
          // new location description = 'City, State Zip'
          newLocation.description = adminArea5 + ', ' + adminArea3 + ' ' + postalCode;
          if (adminArea1 !== 'US' && adminArea1 !== '') {
            // Location is from another country, append country abbreviation
            newLocation.description += ', ' + location.adminArea1;
          }
          dispatch(changeLocation(newLocation));
          fetchWeather(lat, lng, dispatch);
        }
      } else {
        dispatch(fetchLocationFailed());
      }
    });
  };
}

export const fetchLocations = (locationQuery, fromIP) => {
  return function (dispatch) {
    dispatch(requestLocation());
    const URL = process.env.REACT_APP_LOCATION_URL + locationQuery;
    return fetch(URL).then(
      response => response.json(),
      error => console.log('An error occurred fetching location.', error)
    ).then(function(json) {
      if (json) {
        const results = json.results;
        if (fromIP) {
          const location = results[0].locations[0];
          dispatch(changeLocation(location));
          dispatch(fetchWeather(location.latLng.lat, location.latLng.lng));
        } else {
          const possibleLocations = results[0].locations;
          const location = {
            isFetching: false,
            possibleLocations,
          };
          dispatch(changeLocation(location));
        }
      } else {
        dispatch(fetchLocationFailed());
      }
    });
  };
}

export const fetchLocationFromIP = () => {
  return function (dispatch) {
    dispatch(requestLocation());
    return fetch('http://ip-api.com/json').then(
      response => response.json(),
      error => console.log('An error occurred fetching location from IP.', error)
    ).then(function(json) {
      if (json) {
        dispatch(fetchLocations(json.lat + ',' + json.lon, true));
      } else {
        dispatch(fetchLocationFailed());
      }
    });
  };
}

export const fetchWeather = (latitude, longitude) => {
  return function(dispatch) {
    dispatch(requestWeather());
    const URL = process.env.REACT_APP_WEATHER_URL + latitude + ',' + longitude;
    return fetch(URL).then(
      response => response.json(),
      error => console.log('An error occurred fetching weather.', error)
    ).then(function(json) {
      if (json) {
        dispatch(updateWeather({
          summary: json.daily.summary,
          currentConditions: json.currently,
          hourlyConditions: json.hourly.data,
          dailyConditions: json.daily.data,
          selectedDayIndex: null,
          isFetching: false,
        }));
      } else {
        dispatch(fetchWeatherFailed());
      }
    });
  }
}
