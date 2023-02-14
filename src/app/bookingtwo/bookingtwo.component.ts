import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { TravelserviceService } from '../travelservice.service';

@Component({
  selector: 'app-bookingtwo',
  templateUrl: './bookingtwo.component.html',
  styleUrls: ['./bookingtwo.component.css']
})

export class BookingtwoComponent implements OnInit {
  username = '';
  productdata: any
  productnumber: any
  data: any
  datafield: any
  array: any
  arrayvalue: any



  constructor(private route: Router, private travelservice: TravelserviceService,
    private apiService: AuthServiceService, private router: Router,
    private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.arrayvalue = localStorage.getItem('productvalue')

    const value = this.arrayvalue
    const arr = Array.from({ length: value }, (_, index) => index + 1)
    this.array = arr;


    console.log(arr);
    this.data = JSON.parse(localStorage.getItem('productdata') || '{}');
  }
  stepfour() {
    this.route.navigateByUrl('stepthree')
  }
  login(){
    localStorage.getItem('currentUser');

  }



}
