import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormControl } from '@angular/forms';
import { TravelserviceService } from '../travelservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { query } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  myForm!: FormGroup
  returnform!: FormGroup
  // isloading=false
  productss: any
  loading = false;
  displayval = '';
  displayval2 = '';
  quantity: number = 1;
  quantity1: number = 0;
  returnproducts: any





  constructor(private flightsearch: TravelserviceService, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.initForm();

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


  searchflight() {
    this.loading = true
    // {queryParams:{query:
    this.flightsearch.searchFlights(this.myForm.value).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['/flightbooking'])

      this.productss = data.flights
      // return this.productss

      // console.log(`---------------------`);
      // console.log(`---------------------`);
      // console.log(`---------------------`);

      // console.log(data.baggageList.forEach((el: any) => {
      //   console.log(el)
      // }));

      // let i=0
      //  data.data.forEach((el:any)=>{
      //  this.products=el
      // el.OriginDestinationOptions[0].FlightSegments[0]
      // this.value[i]=el.OriginDestinationOptions[0].FlightSegments[0]
      // console.log(el.OriginDestinationOptions[0].FlightSegments[0]);

      // this.empList.push(el.OriginDestinationOptions[0].FlightSegments[0])
      // i++
      // });


      // console.log(this.empList);

      // this.products = data
      // console.log(this.products);
      // return this.products


    }, ((err: any) => {
      alert('network issue please try again later')
      this.loading = false;
      console.log(err);
    })
      // return this.productss

    )
  }

  searchroundtrip() {
    this.loading = true
    this.flightsearch.searchFlights(this.returnform.value).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['/flightbooking'])

      this.returnproducts = data.flights
    },((err: any) => {
      alert('network issue please try again later')
      this.loading = false;
      console.log(err);})
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



  activeTab: string = 'return';
  onTabClick(tab: any) {
    this.activeTab = tab;
  }
  activeTab1: string = 'Personal Details1'
  onTabClick1(tab1: any) {
    this.activeTab1 = tab1;
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 1000,
    smartSpeed: 1000,
    autoplaySpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  policyOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 1000,
    smartSpeed: 1000,
    autoplaySpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}




