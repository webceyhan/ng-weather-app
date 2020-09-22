interface CityResponse {
  name: string; // 'Istanbul'
  country: string; // 'Turkey'
  countryCode: string; // 'TR'
  region: string; // 'Istanbul Province';
  regionCode: string; // '34';
  latitude: number; // 41.01;
  longitude: number; // 28.960277777;
}

export interface CityListResponse {
  data: CityResponse[];
}

export interface City extends CityResponse {
  // from OpenWeatherMap API
  population?: number;
  timezone?: number; // offset from UTC in mseconds
  sunrise?: number; // sunrise time in mseconds
  sunset?: number; // sunset time in mseconds
}
