import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Forecast, ForecastResponse, Weather, WeatherResponse } from './models';

const transformWeather = (response: WeatherResponse): Weather => {
  const { name, weather, main, wind, dt_txt } = response;

  return {
    city: name,
    date: dt_txt,
    condition: weather[0].main,
    description: weather[0].description,
    temperature: main.temp,
    minTemperature: main.temp_min,
    maxTemperature: main.temp_max,
    humidity: main.humidity,
    wind: wind.speed,
  };
};

const transformForecast = (response: ForecastResponse): Forecast => {
  const { city, list } = response;

  // remove duplicates of same day
  const days = list.reduce((all, curr) => {
    const [date, time] = curr.dt_txt.split(' ');
    return { ...all, [date]: transformWeather(<any>curr) };
  }, {});

  return <Forecast>{
    city: {
      ...city,
      // convert to mseconds
      timezone: city.timezone * 1000,
      sunrise: city.sunrise * 1000,
      sunset: city.sunset * 1000,
    },
    days: Object.values(days),
  };
};

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  private get<T>(path: string, query?: string) {
    return this.http.get<T>(environment.apiUrl + path, {
      params: {
        q: query,
        units: environment.apiUnit,
        appid: environment.apiKey,
      },
    });
  }

  getWeather(city: string) {
    return this.get<WeatherResponse>('/weather', city).pipe(
      map(transformWeather)
    );
  }

  getForecast(city: string) {
    return this.get<ForecastResponse>('/forecast', city).pipe(
      map(transformForecast)
    );
  }
}
