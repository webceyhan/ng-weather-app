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
  country?: string;
  population?: number;
  timezone?: number;
  sunrise?: number;
  sunset?: number;
  condition: WeatherCondition;
  description: string;
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
  humidity: number;
  wind: number;
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
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface CityListResponse {
  data: City[];
}
