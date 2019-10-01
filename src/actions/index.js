import { CHANGE_DAY } from './../constants/ActionTypes';

export const changeDay = (newSelectedDayIndex) => ({
  type: CHANGE_DAY,
  newSelectedDayIndex
});

export function fetchLocation(providedLocation) {
  return function (dispatch) {
    const URL = process.env.REACT_APP_LOCATION_URL + providedLocation;
    return fetch(URL).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log('CHECK OUT THIS SWEET API RESPONSE:', json)
    });
  };
}
