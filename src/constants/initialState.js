import sampleData from './sampleData.json';
import timeFromUnixTime from './../helpers/timeFromUnixTime.js'
const currently = sampleData.currently;

export const initialState = {
  selectedDayIndex: null,
  location: {
    description: 'Portland, OR 97205',
    latitude: 45.52,
    longitude: -122.69,
  },
  currentConditions: {
    time: timeFromUnixTime(currently.time),
    summary: currently.summary,
    iconName: currently.icon,
    temp: Math.round(currently.temperature),
    precipProbability: Math.round(currently.precipProbability * 100),
    humidity: Math.round(currently.humidity * 100),
    windspeed: Math.round(currently.windSpeed),
  },
};
