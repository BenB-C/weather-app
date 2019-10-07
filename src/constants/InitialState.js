export const initialState = {
  location: {
    description: null, // string
    latitude: 0, // number
    longitude: 0, //number
    isFetching: false, //number
  },
  weather: {
    currentConditions: [], // array
    hourlyConditions: [], // array
    dailyConditions: [], // array
    selectedDayIndex: null, // number or null
    isFetching: false, // boolean
  },
};
