import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormControl } from '@angular/forms';
import { TravelserviceService } from '../travelservice.service';
import { HttpClient } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
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
  searchResult:any
  searchInput:any
  
saveValue1:any
saveValue2:any





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
    this.flightsearch.searchFlights3(this.myForm.value).subscribe((data: any) => {
      this.loading = false

      console.log(data);
      localStorage.removeItem('returnproducts');

      this.productss = data.flights
      localStorage.setItem('productss',JSON.stringify(this.productss));
      this.route.navigate(['/flightbooking'])


      


    }, ((err: any) => {
      alert('network issue please try again later')
      this.loading = false;
      console.log(err);
    })
      // return this.productss

    )
  }

  // searchroundtrip() {
  //   this.loading = true
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: { 'query': (this.returnform.value)}

  //   }
  //   this.route.navigate(['/flightbooking'],navigationExtras) 

  //   this.flightsearch.searchFlights3(this.returnform.value).subscribe((data: any) => {
  //     console.log(data);
  //     this.route.navigate(['/flightbooking'],navigationExtras),

  //     this.returnproducts = data.flights
  //   },((err: any) => {
  //     alert('network issue please try again later')
  //     this.loading = false;
  //     console.log(err);})
  //     )
  // }

  


  searchroundtrip(){
    
    this.loading = true
    this.flightsearch.searchFlights(this.returnform.value).subscribe((data: any) => {
      console.log(data);
      

      this.loading = false

      console.log(data);
      // localStorage.setItem('flights', data.flightDetails)
      localStorage.removeItem('productss')

      this.returnproducts = data.flights
      localStorage.setItem('returnproducts',JSON.stringify(this.returnproducts));
      this.route.navigate(['/flightbooking'])


    }, ((err: any) => {
      console.log(err);
      alert("server issue please try again later")
      this.loading = false

    })

    )
  }
  submitSearch(val:string){
    // console.warn(val)
  this.route.navigate([`flightbooking/${val}`]);
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




