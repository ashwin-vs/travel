import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { catchError, Observable, throwError } from 'rxjs';
import { observable, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TravelserviceService {
  flightUrl: string = '../assets/flights.json';
  err: any
  searchResults: any
  search:any

  constructor(private http: HttpClient) { }
  users() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  // getAllFlights(): Observable<IflightDetails[]> {

  //   return this.http.get<IflightDetails[]>(this.flightUrl).pipe(
  //     catchError(this.err));
  // }
  searchFlights(dat: any) {
    
    
    console.log(dat);

    // this.http.post<any>('https://travelsitenode.onrender.com/api/v1/mystifly/searchFlights', dat).subscribe((data) => {

    //    this.searchResults = data.flights
    //   console.log(this.searchResults);
    //   return this.searchResults;

    // })
  const baseurl='https://travelsitenode.onrender.com/api/v1/mystifly/searchFlights';
  return this.http.post<any>(baseurl,dat);
  }




  searchFlights3(dat: any) {
    
    
    console.log(dat);

    // this.http.post<any>('https://travelsitenode.onrender.com/api/v1/mystifly/searchFlights', dat).subscribe((data) => {

    //    this.searchResults = data.flights
    //   console.log(this.searchResults);
    //   return this.searchResults;

    // })
  const baseurl='https://travelsitenode.onrender.com/api/v1/mystifly/searchFlights';
  return this.http.post<any>(baseurl,dat);
  }
  
  
  viewproduct(FareSourceCode: any) {
    const baseurl = 'https://travelsitenode.onrender.com/api/v1/mystifly/revalidateFlights/id'+FareSourceCode

    return this.http.post<any>(baseurl,FareSourceCode);
  }

  // searchtwo(){
  //   this.search = this.flight.productss
  //   return this.search
  // }


}

// https://jsonplaceholder.typicode.com/users