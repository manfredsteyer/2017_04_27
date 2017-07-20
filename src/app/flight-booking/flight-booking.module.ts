
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-search/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightService } from './flight-search/flight.service';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    FlightSearchComponent,
    PassengerSearchComponent,

    FlightCardComponent,
    FlightEditComponent,

  ],
  providers: [
    FlightService
  ],
  exports: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    PassengerSearchComponent
  ]
})
export class FlightBookingModule {
}
