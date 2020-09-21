import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CityService } from 'src/app/city.service';

import { Weather } from 'src/app/models';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  weathers$: Observable<Weather[]>;

  constructor(
    private citySvc: CityService,
    private weatherSvc: WeatherService
  ) {}

  ngOnInit(): void {
    this.citySvc.load();

    this.weathers$ = this.citySvc.cities$.pipe(
      switchMap((cities) =>
        combineLatest(cities.map((city) => this.weatherSvc.getWeather(city)))
      )
    );
  }
}
