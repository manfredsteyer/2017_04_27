
import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { FlightService } from './flight.service';
import { FlightEvents } from '../../shared/events/flight.events';
import { AppState } from '../../model/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FlightsStatistics } from '../../model/flights/flights.state';
import { FlightLoadAction, FlightStateChangedAction } from '../../model/flights/flights.actions';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: []
})
export class FlightSearchComponent implements OnInit {


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

  flights$: Observable<Flight[]>;
  statistic$: Observable<FlightsStatistics>;

  constructor(
    private store: Store<AppState>,
    private flightEvents: FlightEvents,
    private flightService: FlightService) {
    console.debug('ctor');
  }

  ngOnInit(): void {
    this.flights$ = this.store.select(s => s.flights.flights);
    this.statistic$ = this.store.select(s => s.flights.statistics);
  }

  changeState(flight: Flight, delayed: boolean) {
    let newFlight = { ...flight, delayed };
    this.store.dispatch(new FlightStateChangedAction(newFlight));
  }

  search(): void {

    if (!this.from || !this.to) return;

    // this.flightService.find(this.from, this.to);
    this.store.dispatch(
      new FlightLoadAction(
        {from: this.from, to: this.to}));

  }

  select(f: Flight, selected: boolean): void {
    this.basket[f.id] = selected;
    if (selected) {
      this.flightEvents.flightSelected.next(f);
    }
  }


}
