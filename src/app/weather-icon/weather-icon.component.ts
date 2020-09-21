import { Component, Input } from '@angular/core';

type Condition = 'sunny' | 'cloudy' | 'rainy' | 'windy' | 'stormy' | 'snowy';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css'],
})
export class WeatherIconComponent  {
  @Input()
  condition: Condition = 'sunny';
}
