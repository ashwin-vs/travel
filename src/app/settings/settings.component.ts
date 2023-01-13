import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activeTab: string = 'Personal Details';
  OnTabClick(tab: any) {
    this.activeTab = tab;
  }
}
