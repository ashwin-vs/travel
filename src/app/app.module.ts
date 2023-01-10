import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SiteLayoutModule } from './site-layout/site-layout.module';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { StepOneComponent } from './step-one/step-one.component';
import { BookingtwoComponent } from './bookingtwo/bookingtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourPackagesComponent,
    FlightBookingComponent,
    StepOneComponent,
    BookingtwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SiteLayoutModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
