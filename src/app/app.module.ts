import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { BASE_URL } from './app.tokens';
import { CityPipe } from './shared/pipe/city.pipe';
import { FlightCardComponent } from './flight-booking/flight-search/flight-card.component';
import { AppRouterModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-booking/flight-edit/flight-edit.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { LookaheadComponent } from './lookahead/lookahead.component';
import { BasketComponent } from './basket/basket.component';
import { StoreModule } from '@ngrx/store';
import { appReducerMap } from './model/app.reducer';
import { initAppState } from './model/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRouterModule,
    ReactiveFormsModule,
    FlightBookingModule,
    StoreModule.forRoot(appReducerMap, {
      initialState: initAppState
    }),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [
    // Shell
    AppComponent,
    HomeComponent,
    LookaheadComponent,
    BasketComponent
  ],
  providers: [
    { provide: BASE_URL, useValue: 'http://www.angular.at/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
