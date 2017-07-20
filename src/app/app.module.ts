import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { BASE_URL } from './app.tokens';
import { CityPipe } from './shared/pipe/city.pipe';
import { TestComponent } from './test/test.component';
import { TestPipe } from './test.pipe';
import { FlightCardComponent } from './flight-booking/flight-search/flight-card.component';
import { AppRouterModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-booking/flight-edit/flight-edit.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRouterModule,
    FlightBookingModule
  ],
  declarations: [
    // Shell
    AppComponent,
    HomeComponent,
  ],
  providers: [
    { provide: BASE_URL, useValue: 'http://www.angular.at/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
