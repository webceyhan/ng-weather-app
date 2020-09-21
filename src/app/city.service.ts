import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CityListResponse } from './models';

const API_URL = 'http://geodb-free-service.wirefreethought.com/v1/geo/cities';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  search(namePrefix: string) {
    return this.http
      .get<CityListResponse>(API_URL, { params: { namePrefix } })
      .pipe(map((response) => response.data));
  }
}
