import sampleData from './sampleData.json';

export const initialState = {
  selectedDayIndex: null,
  location: {
    description: 'Portland, OR 97205',
    latitude: 45.52,
    longitude: -122.69,
  },
  currentConditions: sampleData.currently,
  dailyConditions: sampleData.daily.data,
};
