import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Forecast, Weather } from 'src/app/shared/models';
import { CityService } from 'src/app/shared/services/city.service';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  forecast$: Observable<Forecast>;
  selectedDay: Weather;
  now = Date.now();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private citySvc: CityService,
    private weatherSvc: WeatherService
  ) {}

  ngOnInit(): void {
    const { city } = this.route.snapshot.params;

    this.forecast$ = this.weatherSvc
      .getForecast(city)
      .pipe(tap(({ days }) => (this.selectedDay = days[0])));
  }

  onSelect(day: Weather) {
    this.selectedDay = day;
  }

  onRemove() {
    const { city } = this.route.snapshot.params;
    this.citySvc.remove(city);
    this.router.navigate(['/']);
  }
}
