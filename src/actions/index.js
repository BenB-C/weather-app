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

export const fetchLocationFailed = (error) => ({
  type: types.FETCH_LOCATION_FAILED,
  error,
});

export const fetchWeatherFailed = (error) => ({
  type: types.FETCH_WEATHER_FAILED,
  error,
});

export const fetchHistoricalWeatherFailed = (error) => ({
  type: types.FETCH_HISTORICAL_WEATHER_FAILED,
  error,
});

export const fetchLocations = (locationQuery, fromIP) => {
  return function (dispatch) {
    dispatch(requestLocation());
    const URL = process.env.REACT_APP_LOCATION_URL + locationQuery;
    return fetch(URL).then(
      response => response.json(),
      error => {
        console.log('An error occurred fetching location.', error.toString());
        dispatch(fetchLocationFailed(error.toString()))
      }
    ).then(function(json) {
      if (json && json.info.statuscode === 0) {
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
      } else if (json) {
        console.log('An error occurred fetching location.', json.info.messages);
        dispatch(fetchLocationFailed(json.info.messages.join('\n')));
      }
    });
  };
}

export const fetchLocationFromIP = () => {
  return function (dispatch) {
    dispatch(requestLocation());
    return fetch('http://ip-api.com/json').then(
      response => response.json(),
      error => {
        console.log('An error occurred fetching location from IP.', error);
        dispatch(fetchLocationFailed(error.toString()));
      }
    ).then(function(json) {
      if (json && json.status === 'success') {
        dispatch(fetchLocations(json.lat + ',' + json.lon, true));
      } else if (json) {
        console.log('An error occured fetching location from IP.', json);
        dispatch(fetchLocationFailed(json.message));
      }
    });
  };
}

export const fetchWeather = (latitude, longitude, time) => {
  return function(dispatch) {
    dispatch(requestWeather());
    const URL = process.env.REACT_APP_WEATHER_URL + latitude + ',' + longitude + (time ? ',' + time : '');
    return fetch(URL).then(
      response => response.json(),
      error => {
        console.log('An error occurred fetching weather.', error.toString())
        if (time) {
          dispatch(fetchHistoricalWeatherFailed(error.toString()))
        } else {
          dispatch(fetchWeatherFailed(error.toString()));
        }
      }
    ).then(function(json) {
      if (json && !json.error) {
        dispatch(updateWeather({
          summary: json.daily && json.daily.summary,
          currentConditions: json.currently,
          hourlyConditions: json.hourly && json.hourly.data,
          dailyConditions: json.daily && json.daily.data,
          selectedDayIndex: null,
          isFetching: false,
          isHistoric: time ? true : false,
        }));
      } else if (json){
        if (time) {
          dispatch(fetchHistoricalWeatherFailed(json.error))
        } else {
          dispatch(fetchWeatherFailed(json.error));
        }
      }
    });
  }
}
