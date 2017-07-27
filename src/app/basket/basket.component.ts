import { Component, OnInit } from '@angular/core';
import { FlightEvents } from '../shared/events/flight.events';
import { Flight } from '../entities/flight';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private flightEvents: FlightEvents) { }

  flights: Flight[] = [];

  ngOnInit() {
    this.flightEvents.flightSelected.subscribe(
      flight => {

        if (!flight) return;

        console.debug('new selected flight', flight);
        this.flights.push(flight);
        if (this.flights.length > 3) {
          this.flights = this.flights.slice(1);
        }
      }
    )
  }

}
