import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'tours',component:TourPackagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
