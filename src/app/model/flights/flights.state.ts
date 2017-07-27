import { Flight } from '../../entities/flight';

export interface FlightState {
  flights: Flight[];
  statistics: FlightsStatistics;
}

export interface FlightsStatistics {
  countDelayed: number;
  countInTime: number;
}

export const initFlightState: FlightState = {
  flights: [],
  statistics: {
    countDelayed: 0,
    countInTime: 0
  }
}
