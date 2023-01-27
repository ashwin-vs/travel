import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TravelserviceService } from '../travelservice.service';
import axios from 'axios';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: any

  constructor(private route: Router, private http: HttpClient, private userdata: TravelserviceService) {
    // this.userdata.users().subscribe((data) => {
    //   this.users = data;
    // })
  }


  ngOnInit(): void {

  }
  edit() {
    this.route.navigateByUrl('edit')
  }
  
}
