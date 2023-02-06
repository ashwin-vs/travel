import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelserviceService } from '../travelservice.service';


@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  productdata: any
  productnumber:any
  data:any

  constructor(private router: Router, private activatedroute: ActivatedRoute,private travelservice:TravelserviceService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data: any) => {
      this.productdata = data['FareSourceCode']
    })
    this.travelservice.viewproduct(this.productdata).subscribe((item:any)=>{
      console.log(item);
      
      this.productnumber=item.data.Data.PricedItineraries
      localStorage.setItem('productdata',JSON.stringify(this.productnumber));

    })
    
  }
  
  steptwo() {
    this.router.navigateByUrl('steptwo')
  }

}