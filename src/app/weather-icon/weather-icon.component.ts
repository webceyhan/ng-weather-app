import { Component, Input, ViewEncapsulation } from '@angular/core';
import { WeatherCondition } from '../models';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherIconComponent {
  @Input()
  condition: WeatherCondition;
}
