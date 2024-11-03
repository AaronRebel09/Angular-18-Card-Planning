import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {
  private apiUsersUrl = 'http://localhost:3001/users';

  constructor(private http: HttpClient) {}

  postNewUser(data: unknown): Observable<any> {
    return this.http.post(this.apiUsersUrl, data);
  }
}
