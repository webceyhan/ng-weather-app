export type WeatherCondition =
  | 'Clear'
  | 'Clouds'
  | 'Rain'
  | 'Drizzle'
  | 'Thunderstorm'
  | 'Snow'
  | 'Atmosphere';

export interface City {
  name: string; // 'Istanbul'
  country: string; // 'Turkey'
  countryCode: string; // 'TR'
  region: string; // 'Istanbul Province';
  regionCode: string; // '34';
  latitude: number; // 41.01;
  longitude: number; // 28.960277777;
}

export interface Weather {
  city: string;
  date?: string;
  condition: WeatherCondition;
  description: string;
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
  humidity: number;
  wind: number;
}

export interface Forecast {
  city: {
    name: string;
    country: string;
    population: number;
    timezone: number; // offset from UTC in mseconds
    sunrise: number; // sunrise time in mseconds
    sunset: number; // sunset time in mseconds
  };
  days: Weather[];
}

interface WeatherPartialResponse {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    main: WeatherCondition;
    description: string; // condition description
  }[];
  wind: {
    speed: number;
  };
  dt_txt: string; // datetime string
}

export interface WeatherResponse extends WeatherPartialResponse {
  name: string; // city name
  timezone: number;
}

export interface ForecastResponse {
  list: WeatherPartialResponse[];
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

export interface CityListResponse {
  data: City[];
}
