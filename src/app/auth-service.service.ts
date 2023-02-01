import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';

let token: any;

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService implements HttpInterceptor {
  name: any
  alert1= false


  constructor(private http: HttpClient, private router: Router) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    token = localStorage.getItem("currentUser")
    // console.log(`tokrn:${token}`);

    // let token1 = token;
    let jwttoken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`token:${token}`);

    return next.handle(jwttoken);
  }


  onLogin(data: any) {
    console.log(`---------`);
    console.log(data);

    console.log(`${(data.email, data.password)}`);

    // console.log(products);
    this.http
      .post<any>(
        ' https://travelsitenode.onrender.com/api/v1/user/loginUser',
        data
      )
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem('currentUser', res.token);
        localStorage.setItem('loggedUser', res.name)

        token = res.token;
        if (token) {
          // return token
          alert('login sucessfully');
          this.router.navigateByUrl('');

        }
      });
  }


}
