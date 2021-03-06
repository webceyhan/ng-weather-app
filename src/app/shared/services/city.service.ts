import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { CityListResponse } from '../models';

// Refer to server.js
const API_URL = '/api/cities';
// const API_URL = 'http://geodb-free-service.wirefreethought.com/v1/geo/cities';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  cities$ = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {}

  load() {
    const cities = JSON.parse(localStorage.getItem('cities'));

    this.cities$.next(cities || []);
  }

  add(name: string) {
    const cities = [...this.cities$.value, name];

    this.cities$.next(cities);
    localStorage.setItem('cities', JSON.stringify(cities));
  }

  remove(name: string) {
    const cities = this.cities$.value.filter((city) => city !== name);

    this.cities$.next(cities);
    localStorage.setItem('cities', JSON.stringify(cities));
  }

  search(namePrefix: string) {
    return this.http
      .get<CityListResponse>(API_URL, { params: { namePrefix } })
      .pipe(map((response) => response.data));
  }
}
