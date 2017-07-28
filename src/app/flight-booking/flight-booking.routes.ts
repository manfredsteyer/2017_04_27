import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightBookingComponent } from './flight-booking.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { ExitGuard } from '../shared/exit/exit.guard';
import { FlightEditResolver } from './flight-edit/flight-edit.resolver';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: 'flight-booking',
    component: FlightBookingComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
        canDeactivate: [ExitGuard],
        resolve: {
          flight: FlightEditResolver
        }
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      }
    ]
  },
];
