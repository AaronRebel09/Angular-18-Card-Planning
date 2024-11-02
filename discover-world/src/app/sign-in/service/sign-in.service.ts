import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private apiUserUrl = 'http://localhost:3001/users';

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<any> {
    return this.http.get<Observable<any>>(this.apiUserUrl);
  }

}
