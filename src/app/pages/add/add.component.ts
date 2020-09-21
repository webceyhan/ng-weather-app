import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CityService } from 'src/app/city.service';
import { City, Weather } from 'src/app/models';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  weather$: Observable<Weather>;

  constructor(
    private citySvc: CityService,
    private weatherSvc: WeatherService
  ) {}

  ngOnInit(): void {}

  onSelect(city: City) {
    this.weather$ = this.weatherSvc.getWeather(city.name);
  }

  onAdd(name: string) {
    this.citySvc.add(name);
  }
}
