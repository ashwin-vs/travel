import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { HomeComponent } from './home/home.component';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'tours',component:TourPackagesComponent},
  {path:'flightbooking',component:FlightBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
