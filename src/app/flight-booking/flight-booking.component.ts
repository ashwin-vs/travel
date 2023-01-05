import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activeTab:string = 'Account Details';
  onTabClick(tab:any){
    this.activeTab = tab;
  }
  activeTab1:string ='Personal Details1'
  onTabClick1(tab1:any){
    this.activeTab1=tab1;
  }
}
