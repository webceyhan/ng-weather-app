import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, exhaustMap } from 'rxjs/operators';

import { City } from '../models';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  @Output()
  select = new EventEmitter<City>();

  cities$: Observable<City[]>;
  search$ = new Subject<string>();

  constructor(private citySvc: CityService) {}

  ngOnInit(): void {
    this.cities$ = this.search$.pipe(
      distinctUntilChanged(),
      exhaustMap((name) =>
        name.length > 0 ? this.citySvc.search(name) : of([])
      )
    );
  }

  onSearch({ value }: HTMLInputElement) {
    this.search$.next(value);
  }

  onSelect(city: City) {
    this.select.emit(city);
  }
}
