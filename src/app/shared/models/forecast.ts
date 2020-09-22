import { City } from './city';
import { Weather, WeatherResponse } from './weather';

export interface ForecastResponse {
  list: WeatherResponse[];
  city: {
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string; // code BE/TR/UK..
    population: number;
    timezone: number; // offset from UTC in seconds
    sunrise: number; // time in seconds
    sunset: number; // time in seconds
  };
}

export interface Forecast {
  city: City;
  days: Weather[];
}
