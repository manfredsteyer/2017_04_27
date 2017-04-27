
import { Component } from '@angular/core';
import { Flight } from '../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  providers: [FlightService]
})
export class FlightSearchComponent {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  // private http: Http;

  constructor(private flightService: FlightService) {
    console.debug('ctor');
  }

  search(): void {
    this.flightService
        .find(this.from, this.to)
        .subscribe(
          (flights) => {
            this.flights = flights;
          },
          (errResponse) => {
            console.debug('Error', errResponse);
          }
        );

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }


}
