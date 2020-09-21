import { Component, Input } from '@angular/core';
import { Weather } from '../models';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent {
  @Input()
  weather: Weather;
}
