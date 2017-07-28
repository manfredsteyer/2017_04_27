import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BASE_URL } from './app.tokens';
import { AppRouterModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { LookaheadComponent } from './lookahead/lookahead.component';
import { BasketComponent } from './basket/basket.component';
import { StoreModule } from '@ngrx/store';
import { appReducerMap } from './model/app.reducer';
import { initAppState } from './model/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FlightsEffects } from './model/flights/flights.effects';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRouterModule,
    SharedModule,
    ReactiveFormsModule,
    // FlightBookingModule,
    StoreModule.forRoot(appReducerMap, {
      initialState: initAppState
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([FlightsEffects]),
    AuthModule.forRoot()
  ],

  declarations: [
    // Shell
    AppComponent,
    HomeComponent,
    LookaheadComponent,
    BasketComponent
  ],
  providers: [
    FlightService,
    { provide: BASE_URL, useValue: 'http://www.angular.at/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
