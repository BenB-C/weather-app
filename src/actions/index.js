import { CHANGE_DAY, CHANGE_LOCATION } from './../constants/ActionTypes';

export const changeDay = (newSelectedDayIndex) => ({
  type: CHANGE_DAY,
  newSelectedDayIndex,
});

export const changeLocation = (newLocation) => ({
  type: CHANGE_LOCATION,
  newLocation,
});

export function fetchLocation(providedLocation) {
  return function (dispatch) {
    const URL = process.env.REACT_APP_LOCATION_URL + providedLocation;
    return fetch(URL).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log('LOCATION API RESPONSE:');
      console.log(json);
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
        fetchWeather(lat, lng);
        dispatch(changeLocation(newLocation));
      } else {
        console.log('No location found matching ' + providedLocation);
      }
    });
  };
}

export function fetchWeather(latitude, longitude) {
  const URL = process.env.REACT_APP_WEATHER_URL + latitude + ',' + longitude;
  return fetch(URL).then(
    response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(function(json) {
    console.log('WEATHER API RESPONSE:');
    console.log(json);
  });
}
