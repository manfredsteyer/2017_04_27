import { FlightsStatistics, FlightState } from './flights.state';
import { Action } from '@ngrx/store';
import { FLIGHT_STATE_CHANGED, FLIGHTS_LOADED, FlightsLoadedAction, FlightStateChangedAction } from './flights.actions';
import { Flight } from '../../entities/flight';


export function flightReducer(
                  state: FlightState, action: Action): FlightState {

  switch(action.type) {
    case FLIGHTS_LOADED:
      return flightsLoaded(state, action as FlightsLoadedAction);
    case FLIGHT_STATE_CHANGED:
      return flightStateChanged(state, action as FlightStateChangedAction);
    default:
      return state;
  }


}

function flightsLoaded(state: FlightState, flightsLoadedAction: FlightsLoadedAction): FlightState {
  return {
    flights: flightsLoadedAction.payload,
    statistics: calcStatistics(flightsLoadedAction.payload)
  }
}

function calcStatistics(payload: Flight[]): FlightsStatistics {
  return {
    countDelayed: payload.filter(f => f.delayed).length,
    countInTime: payload.filter(f => !f.delayed).length
  }
}

function flightStateChanged(
            state: FlightState, action: FlightStateChangedAction): FlightState {

  let newFlight = action.payload;
  let oldFlights = state.flights;
  let index = oldFlights.findIndex(f => f.id === newFlight.id);

  let newFlights: Flight[] = [
    ...oldFlights.slice(0, index),
    newFlight,
    ...oldFlights.slice(index + 1)
  ];

  return {
    flights: newFlights,
    statistics: calcStatistics(newFlights)
  };
}
