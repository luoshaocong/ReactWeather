import axios from 'axios';

const API_KEY = '490ee52687e364c445723fbe704015d5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
