import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ForecastResponse, WeatherResponse } from './models';

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
    return this.get<WeatherResponse>('/weather', city);
  }

  getForecast(city: string) {
    return this.get<ForecastResponse>('/forecast', city);
  }
}
