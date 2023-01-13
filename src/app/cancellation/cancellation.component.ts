import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activeTab:string='personal details';
  OnTabClick(tab:any){
    this.activeTab=tab;
  }

}
