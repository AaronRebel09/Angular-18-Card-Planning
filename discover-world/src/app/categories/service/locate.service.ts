import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {travel} from '../interface/travel-interface';

@Injectable({
  providedIn: 'root'
})
export class LocateService {
  private apiUrl = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) {}

  postData(data: unknown): Observable<unknown> {
    return this.http.post<unknown>(this.apiUrl, data);
  }

  editData(data: any): Observable<unknown> {
    console.warn(data.id);
    return this.http.put<any>(`${this.apiUrl}/${data.id}`, data);
  }

  deleteData(data: any): Observable<unknown> {
    return this.http.delete<any>(`${this.apiUrl}/${data.id}`);
  }

  getAllData(): Observable<travel> {
    return this.http.get<travel>(this.apiUrl);
  }

}
