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

export const fetchLocation = (locationQuery) => {
  return function (dispatch) {
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
      } else {
      }
    });
  };
}

export const fetchLocationFromIP = () => {
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
        isFetching: false,
      };

      dispatch(changeLocation(newLocation));
      fetchWeather(json.lat, json.lon, dispatch);
    });
  };
}

export const fetchWeather = (latitude, longitude, dispatch) => {
  dispatch(requestWeather());
  const URL = process.env.REACT_APP_WEATHER_URL + latitude + ',' + longitude;
  return fetch(URL).then(
    response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(function(json) {
    dispatch(updateWeather({
      currentConditions: json.currently,
      hourlyConditions: json.hourly.data,
      dailyConditions: json.daily.data,
      selectedDayIndex: null,
      isFetching: false,
    }));
  });
}
