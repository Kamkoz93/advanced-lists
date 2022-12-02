import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { BeerModel } from '../models/beer.model';

@Injectable()
export class BeersService {
  constructor(private _httpClient: HttpClient) {
  }

  // getAll(index: string, size: string): Observable<BeerModel[]> {
  //   return this._httpClient.get<BeerModel[]>(`https://api.punkapi.com/v2/beers?page=${index}&per_page=${size}`);
  // }

  getPaginatedData(index: number): Observable<BeerModel[]> {
    const path = `https://api.punkapi.com/v2/beers?page=${index}&per_page=5`;
    return this._httpClient.get<BeerModel[]>(path);
  }
}
