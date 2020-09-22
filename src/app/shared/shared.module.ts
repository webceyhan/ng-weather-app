import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddCardComponent } from './components/add-card/add-card.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { TimezonePipe } from './pipes/timezone.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';

const DECLARATIONS = [
  AddCardComponent,
  WeatherCardComponent,
  WeatherIconComponent,
  CitySearchComponent,
  TimezonePipe,
  TemperaturePipe,
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, FormsModule, NgbModule],
  exports: [CommonModule, FormsModule, NgbModule, ...DECLARATIONS],
})
export class SharedModule {}
