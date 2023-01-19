import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelserviceService {

  constructor(private http: HttpClient) { }
  users(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
// https://jsonplaceholder.typicode.com/users