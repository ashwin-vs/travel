import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingtwo',
  templateUrl: './bookingtwo.component.html',
  styleUrls: ['./bookingtwo.component.css']
})
export class BookingtwoComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  stepfour(){
    this.route.navigateByUrl('stepthree')
  }
}
