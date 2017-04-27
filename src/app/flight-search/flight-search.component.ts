
import { Component } from '@angular/core';
import { Flight } from '../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  // private http: Http;

  constructor(private http: Http) {
    // this.http = http;
  }

  search(): void {

    let url = 'http://www.angular.at/api/flight';

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let search = new URLSearchParams();
    search.set('from', this.from);
    search.set('to', this.to);



    this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json())
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
