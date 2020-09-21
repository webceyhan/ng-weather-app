import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { HomeComponent } from './pages/home/home.component';
import { TemperaturePipe } from './temperature.pipe';
import { AddComponent } from './pages/add/add.component';

@NgModule({
  declarations: [AppComponent, WeatherIconComponent, CitySearchComponent, WeatherCardComponent, HomeComponent, TemperaturePipe, AddComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
