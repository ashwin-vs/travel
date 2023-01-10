import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingtwoComponent } from './bookingtwo/bookingtwo.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { HomeComponent } from './home/home.component';
import { StepOneComponent } from './step-one/step-one.component';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'tours',component:TourPackagesComponent},
  {path:'flightbooking',component:FlightBookingComponent},
  {path:'stepone',component:StepOneComponent},
  {path:'steptwo',component:BookingtwoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
