export const initialState = {
  location: {
    description: null, // string
    latitude: 0, // number
    longitude: 0, //number
    isFetching: false, //number
    mapUrl: '', // string
  },
  weather: {
    summary: '', // string
    currentConditions: [], // array
    hourlyConditions: [], // array
    dailyConditions: [], // array
    selectedDayIndex: null, // number or null
    isFetching: false, // boolean
  },
};
