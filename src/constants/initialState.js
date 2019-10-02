// import sampleData from './sampleData.json';
//
// export const initialState = {
//   fetchingWeather: false,
//   fetchingLocation: false,
//   selectedDayIndex: null,
//   location: {
//     description: 'Portland, OR 97205',
//     latitude: 45.52,
//     longitude: -122.69,
//   },
//   currentConditions: sampleData.currently,
//   dailyConditions: sampleData.daily.data,
// };

export const initialState = {
  fetchingWeather: false, // boolean
  fetchingLocation: false, // boolean
  selectedDayIndex: null, // number or null
  location: null,
  // {
  //   description: '', // string
  //   latitude: 0, // number
  //   longitude: 0, //number
  // },
  currentConditions: [], // array
  dailyConditions: [], // array
};
