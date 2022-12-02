import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PublicApiModel } from '../models/public-api.model';
import { PublicApiResponse } from './PublicApiResponse';
import { PublicApiResponseModel } from './publicApiResponseModel';

@Injectable()
export class PublicApiService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PublicApiModel[]> {
    return this._httpClient.get<PublicApiResponse<PublicApiResponseModel[]>>(
      'https://api.publicapis.org/entries'
    ).pipe(
      map((response: PublicApiResponse<PublicApiResponseModel[]>) => {
        return response.entries.map((apiResponse: PublicApiResponseModel) => {
          return {
            api: apiResponse.Api,
            description: apiResponse.Description,
            auth: apiResponse.Auth,
            https: apiResponse.HTTPS,
            cors: apiResponse.Cors,
            link: apiResponse.Link,
            category: apiResponse.Category
          }
        })
      })
    )
  }

  delete(Api: string): Observable<void> {
    return this._httpClient.delete('https://api.publicapis.org/entries' + Api).pipe(map(_ => void 0));
  }
}
