import { FlightState, initFlightState } from './flights/flights.state';

export interface AppState {
  flights: FlightState;
  otherThings: any;
}

export const initAppState: AppState = {
  flights: initFlightState,
  otherThings: null
}
