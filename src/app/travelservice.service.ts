import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelserviceService {

  constructor(private http: HttpClient) { }
  imageupload(name: string,
    email: string,
    password: string,
    place: string,
    image: File,
    number: string,
    city: string,
    country: string,
    pincode: string,
    state: string
  ): Observable<any> {
    var formData: any = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("place", place);
    formData.append("filetoUpload", image);
    formData.append("number", number);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("pincode", pincode);
    formData.append("state", state);
    return this.http.post<any>("https://travelsitenode.onrender.com/api/v1/user/registerUser", formData, {

      reportProgress: true,
      observe:'events'

    }
    ).pipe(
      catchError((err:any) => {
        alert(err.message);
        return throwError(err.message)
      })
    )
  }
}
