import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { UserApiResponse } from './UserApiResponse';
import { UserModelResponse } from './UserModelResponse';

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UserModel[]> {
    return this._httpClient.get<UserApiResponse<UserModelResponse[]>>(
      'https://reqres.in/api/users'
    ).pipe(
      map((response: UserApiResponse<UserModelResponse[]>) => {
        return response.data.map((usersresponse: UserModelResponse) => {
          return {
            id: usersresponse.id,
            email: usersresponse.email,
            first_name: usersresponse.first_name,
            last_name: usersresponse.last_name,
            avatar: usersresponse.avatar

          }
        })
      }));
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete(`https://reqres.in/api/users/${id}`).pipe(map (_ => void 0));
  }
}
