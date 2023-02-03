import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelserviceService } from '../travelservice.service';

@Component({
  selector: 'app-stepone-oneway',
  templateUrl: './stepone-oneway.component.html',
  styleUrls: ['./stepone-oneway.component.css']
})
export class SteponeOnewayComponent implements OnInit {
  productdata: any
  productnumber:any

  constructor(private router: Router, private activatedroute: ActivatedRoute,private travelservice:TravelserviceService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data: any) => {
      this.productdata = data['FareSourceCode']
    })
    this.travelservice.viewproduct(this.productdata).subscribe((item:any)=>{
      console.log(item);
      
      this.productnumber=item.data.Data.PricedItineraries
    })
    
  }
  steptwo() {
    this.router.navigateByUrl('steptwo')
  }

}
