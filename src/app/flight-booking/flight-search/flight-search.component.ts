
import { Component } from '@angular/core';
import { Flight } from '../../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: []
})
export class FlightSearchComponent {

  from: string;
  to: string;
  // flights: Array<Flight> = [];

  // TypeScript: let x = comp.flights;
  // JAVA: let x = comp.getFlight();
  get flights() {
    return this.flightService.flights;
  }

  selectedFlight: Flight;

  basket: any = {
    "3": true,
    "4": false,
    "5": true
  };

  // private http: Http;

  constructor(private flightService: FlightService) {
    console.debug('ctor');
  }

  search(): void {

    if (!this.from || !this.to) return;

    this.flightService.find(this.from, this.to);


  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }


}
