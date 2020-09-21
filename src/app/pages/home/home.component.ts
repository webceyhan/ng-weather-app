import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

import { Weather } from 'src/app/models';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  weathers$: Observable<Weather[]>;

  constructor(private weatherSvc: WeatherService) {}

  ngOnInit(): void {
    const cities = ['miami', 'brussels', 'tokyo'];

    this.weathers$ = combineLatest(
      cities.map((city) => this.weatherSvc.getWeather(city))
    );
  }
}
