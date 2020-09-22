import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CityService } from 'src/app/shared/services/city.service';
import { City, Weather } from 'src/app/shared/models';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  city: City;
  weather$: Observable<Weather>;

  constructor(
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
  }
}
