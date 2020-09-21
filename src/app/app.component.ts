import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { CityService } from './city.service';
import { City } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  cities$: Observable<City[]>;
  cityName$ = new Subject<string>();

  constructor(private citySvc: CityService) {}

  ngOnInit(): void {
    this.cities$ = this.cityName$.pipe(
      exhaustMap((name) =>
        name.length > 0 ? this.citySvc.search(name) : of([])
      )
    );
  }

  onCitySearch({ value }: HTMLInputElement) {
    this.cityName$.next(value);
  }
}
