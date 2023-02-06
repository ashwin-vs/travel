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
productnumber:any
data:any
datafield:any

  constructor(private route:Router,private travelservice:TravelserviceService, 
    private apiService:AuthServiceService,private router: Router, 
    private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('productdata') || '{}');
    console.log(this.data);
    
    // this.datafield = this.data[0].AirItineraryPricingInfo.PTC_FareBreakdowns[0].PassengerTypeQuantity.Quantity
  }
  stepfour(){
    this.route.navigateByUrl('stepthree')
  }
}
