import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ForecastResponse, Weather, WeatherResponse } from './models';
import { map } from 'rxjs/operators';

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
      map(({ name, weather, main, wind }) => {
        return <Weather>{
          city: name,
          condition: weather[0].main,
          description: weather[0].description,
          temperature: main.temp,
          minTemperature: main.temp_min,
          maxTemperature: main.temp_max,
          humidity: main.humidity,
          wind: wind.speed,
        };
      })
    );
  }

  getForecast(city: string) {
    return this.get<ForecastResponse>('/forecast', city);
  }
}
