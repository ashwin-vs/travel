import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SiteLayoutModule } from './site-layout/site-layout.module';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { StepOneComponent } from './step-one/step-one.component';
import { BookingtwoComponent } from './bookingtwo/bookingtwo.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { EditprofileComponent } from './editprofile/editprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourPackagesComponent,
    FlightBookingComponent,
    StepOneComponent,
    BookingtwoComponent,
    StepThreeComponent,
    DashboardComponent,
    CancellationComponent,
    ProfileComponent,
    SettingsComponent,
    EditprofileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SiteLayoutModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
