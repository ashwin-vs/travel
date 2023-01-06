import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {

  showMe:Boolean=true
  constructor() { }

  ngOnInit(): void {
  }

  activeTab:string = 'Account Details';
  onTabClick(tab:any){
    this.activeTab = tab;
  }
 
  activeTab4:string = 'true';
  onTabClick4(tab4:any){
    this.activeTab4 = tab4;
  }
 
 close(){
   this.onTabClick4==null
 }
}
