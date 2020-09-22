import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { City, Weather } from '../../shared/models';
import { CityService } from '../../shared/services/city.service';
import { WeatherService } from '../../shared/services/weather.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  city: City;
  weather$: Observable<Weather>;

  constructor(
    private router:Router,
    private citySvc: CityService,
    private weatherSvc: WeatherService
  ) {}

  ngOnInit(): void {}

  onSelect(city: City) {
    this.city = city;
    this.weather$ = this.weatherSvc.getWeather(city.name);
  }

  onAdd() {
    this.citySvc.add(this.city.name);
    this.router.navigate(['/']);
  }
}
