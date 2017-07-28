
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { FlightService } from '../../flight-booking/flight-search/flight.service';
import { FlightLoadAction, FLIGHTS_LOAD, FlightsLoadedAction } from './flights.actions';

@Injectable()
export class FlightsEffects {
  constructor(
    private flightService: FlightService,
    private actions$: Actions
  ) {
  }

  @Effect()
  loadedFlights = this
                    .actions$
                    .ofType(FLIGHTS_LOAD)
                    .switchMap((a: FlightLoadAction ) =>
                      this.flightService.find(a.payload.from, a.payload.to))
                    .map(flights => new FlightsLoadedAction(flights));

}
