import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  cancel(){
this.route.navigateByUrl('profile')
  }

}
