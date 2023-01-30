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
  // value1! []:[]
  //  value1 !:[]
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "content-Type": "application/json",
  //     "Authorization": "Bearer 18AEA8F0-5B21-41ED-9993-DD7A8123B0D2-1560"
  //   })
  // }

  dat: any
  search: any
  products: any
  productsfare: any
  prod: any
  productdata: any
  productnumber: any



  // empList!: Array<any>


  constructor(private http: HttpClient, private route: Router, private flightsearch: TravelserviceService, private activeroute: ActivatedRoute) {

  }



  ngOnInit(): void {
    this.initForm()
    // let query = this.activeroute.snapshot.paramMap.get('query');
    // query && this.flightsearch.searchFlights(query).subscribe((data)=>{
    //   this.prod=data
    // })
    this.activeroute.params.subscribe((data: any) => {
      this.productdata = data
    })
    this.flightsearch.searchFlights(this.productdata).subscribe((item: any) => {
      this.productnumber = item.flights
    })
    
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

  }

   

  searchFlights() {
    this.isloading = true

    console.log(this.myForm.value);

    this.flightsearch.searchFlights(this.myForm.value).subscribe((data: any) => {

      this.isloading = false

      console.log(data);
      localStorage.setItem('flights', data.flightDetails)

      this.products = data.flights


    }, ((err: any) => {
      console.log(err);
      alert("server issue please try again later")
      this.isloading = false


      //  this.route.navigateByUrl('')

    })
      // this.search = this.flightsearch.searchResults
      // this.http.post(this.myForm.value)
    )
  }
  searchflighttwo() {
    this.prod = this.flightsearch.search
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
