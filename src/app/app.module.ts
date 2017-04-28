import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './flight-search/flight.service';
import { BASE_URL } from './app.tokens';
import { CityPipe } from './shared/pipe/city.pipe';
import { TestComponent } from './test/test.component';
import { TestPipe } from './test.pipe';
import { FlightCardComponent } from './flight-search/flight-card.component';
import { AppRouterModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    CityPipe,
    HomeComponent,
    PassengerSearchComponent
  ],
  providers: [
    { provide: BASE_URL, useValue: 'http://www.angular.at/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
