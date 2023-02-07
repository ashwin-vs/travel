import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelserviceService } from '../travelservice.service';

// let product :any

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  productdata: any
  productnumber:any
  data:any
  passengerquantity:any
  product:any
  chd:any
  adt:any
  value:any
  constructor(private router: Router, private activatedroute: ActivatedRoute,private travelservice:TravelserviceService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data: any) => {
      this.productdata = data['FareSourceCode']
    })
    this.travelservice.viewproduct(this.productdata).subscribe((item:any)=>{
      console.log(item);
      
      this.productnumber=item.data.Data.PricedItineraries
     localStorage.setItem('productdata',JSON.stringify(this.productnumber));

      // this.product=item
      
      console.log(this.product.data.Data.PricedItineraries[0].AirItineraryPricingInfo.PTC_FareBreakdowns[1]===undefined );
      if(this.product.data.Data.PricedItineraries[0].AirItineraryPricingInfo.PTC_FareBreakdowns[1]===undefined  ){
        console.log(`---`);
        this.adt=this.product.data.Data.PricedItineraries[0].AirItineraryPricingInfo.PTC_FareBreakdowns[0].PassengerTypeQuantity.Quantity
        console.log(this.adt);
      
        console.log(`-------`);
        console.log(`-------`);
        console.log(`-------`);

        localStorage.setItem('productvalue',this.adt)

        
      }
      else{
        console.log(`-`);
        
        this.chd=this.product.data.Data.PricedItineraries[0].AirItineraryPricingInfo.PTC_FareBreakdowns[1].PassengerTypeQuantity.Quantity
        this.adt=this.product.data.Data.PricedItineraries[0].AirItineraryPricingInfo.PTC_FareBreakdowns[0].PassengerTypeQuantity.Quantity
        console.log(this.chd,this.adt);
        this.value=this.adt+this.chd
        localStorage.setItem('productvalue',this.value)
    
      }
     
    })
    
  }

  
  steptwo() {
    
 
    this.router.navigateByUrl('steptwo')
  }

}