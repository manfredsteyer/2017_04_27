
import { Flight } from '../../entities/flight';
import { Action } from '@ngrx/store';

export const FLIGHTS_LOAD = 'FLIGHTS_LOAD';
export const FLIGHTS_LOADED = 'FLIGHTS_LOADED';
export const FLIGHT_STATE_CHANGED = 'FLIGHT_STATE_CHANGED';


export interface FlightLoadParams {
  from: string;
  to: string;
}

export class FlightLoadAction implements Action {
  type = FLIGHTS_LOAD;
  constructor(public payload: FlightLoadParams) {
  }
}

export class FlightsLoadedAction implements Action {
  type = FLIGHTS_LOADED;
  public constructor(public payload: Flight[]) {
  }
}

export class FlightStateChangedAction implements Action {
  type = FLIGHT_STATE_CHANGED;
  public constructor(public payload: Flight) {
  }
}
