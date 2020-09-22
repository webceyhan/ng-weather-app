export type WeatherCondition =
  | 'Clear'
  | 'Clouds'
  | 'Rain'
  | 'Drizzle'
  | 'Thunderstorm'
  | 'Snow'
  | 'Atmosphere';

export interface WeatherResponse {
  name: string; // city name
  timezone: number;
  dt_txt: string; // datetime string
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
