import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { TravelserviceService } from '../travelservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute, Router } from '@angular/router';
const mistiflyApi = 'https://api.mistifly.com/flights/search';




@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})

export class FlightBookingComponent implements OnInit {

  // DepartureDateTime: any
  // OriginLocationCode: any
  // DestinationLocationCode: any
  // flights:any
  isloading = false;


  datas: any
  myForm!: FormGroup
  returnform!: FormGroup
  // value1! []:[]
  //  value1 !:[]
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "content-Type": "application/json",
  //     "Authorization": "Bearer 18AEA8F0-5B21-41ED-9993-DD7A8123B0D2-1560"
  //   })
  // }

  dataoneway: any
  search: any
  products: any
  productsround: any

  productsfare: any
  prod: any
  productdata: any
  productnumber: any
  quantity: number = 1;
  quantity1: number = 0;
  displayval = '';
  displayval2 = '';
  searchResult:any
  dataround:any



  // empList!: Array<any>


  constructor(private http: HttpClient, private route: Router, private flightsearch: TravelserviceService, private activeroute: ActivatedRoute) {

  }



  ngOnInit(): void {
    this.initForm()
    
    this.dataround = JSON.parse(localStorage.getItem('returnproducts') || '[]');
    this.dataoneway = JSON.parse(localStorage.getItem('productss') || '[]');


  }

  initForm() {
    this.myForm = new FormGroup({
      OriginLocationCode: new FormControl(null),
      DestinationLocationCode: new FormControl(null),
      DepartureWindow: new FormControl(null),
      DepartureDateTime: new FormControl(null),
      OriginDestinationInformation: new FormControl(null),
      ADT: new FormControl(null),
      CHD: new FormControl(null),
      AirType: new FormControl('OneWay'),
    })
    console.log(this.myForm);

    this.returnform = new FormGroup({
      OriginLocationCode: new FormControl(null),
      OriginLocationCode1: new FormControl(null),
      DestinationLocationCode: new FormControl(null),
      DestinationLocationCode1: new FormControl(null),
      DepartureWindow: new FormControl(null),
      DepartureDateTime: new FormControl(null),
      DepartureDateTime1: new FormControl(null),
      OriginDestinationInformation: new FormControl(null),
      ADT: new FormControl(null),
      CHD: new FormControl(null),
      AirType: new FormControl('return'),
    })

  }



  searchFlights() {
    this.isloading = true

    // console.log(this.myForm.value);

    this.flightsearch.searchFlights(this.myForm.value).subscribe((data: any) => {
      localStorage.removeItem('returnproducts');

      this.isloading = false

      console.log(data);
      console.log(data.flights);

      this.products = data.flights;


    }, ((err: any) => {
      console.log(err);
      alert("server issue please try again later")
      this.isloading = false




    })

    )
  }




  searchroundtrip() {
    this.isloading = true
    this.flightsearch.searchFlights(this.returnform.value).subscribe((data: any) => {
      localStorage.removeItem('productss')

      this.isloading = false

      console.log(data);
      // localStorage.setItem('flights', data.flightDetails)

      this.productsround = data.flights


    }, ((err: any) => {
      console.log(err);
      alert("server issue please try again later")
      this.isloading = false

    })

    )
  }

  getvalue(value: any) {
    console.log(value);
    this.displayval = value

  }
  getvalue2(value2: any) {
    console.log(value2);
    this.displayval2 = value2

  }





  i = 1;
  j = 0;
  plus() {
    if (this.i != 8) {
      this.i++;
      this.quantity = this.i
    }
  }
  minus() {
    if (this.i > 1) {
      this.i--;
      this.quantity = this.i
    }
  }


  plusj() {
    if (this.j != 8) {
      this.j++;
      this.quantity1 = this.j
    }
  }
  minus1() {
    if (this.j > 0) {
      this.j--;
      this.quantity1 = this.j
    }
  }


  // getflight(){
  //   this.flightsearch.searchResults = this.dat
  // }

  // https://restapidemo.myfarebox.com/api/v1/Search/Flight



  activeTab: string = 'Account Details';
  onTabClick(tab: any) {
    this.activeTab = tab;
  }
  //     this.activeTab = tab;


  activeTab4: string = 'true';
  onTabClick4(tab4: any) {
    this.activeTab4 = tab4;
  }

  close() {
    this.onTabClick4 == null
  }
}
