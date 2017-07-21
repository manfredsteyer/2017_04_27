
import { async, TestBed } from '@angular/core/testing';
import { FlightBookingModule } from '../flight-booking.module';
import { HttpModule } from '@angular/http';
import { FlightSearchComponent } from './flight-search.component';

import 'rxjs';

import { BASE_URL } from '../../app.tokens';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

let dummyFlights: Flight[] = [
  { id: 4711, from: 'hier', to: 'dort', date: 'jetzt'},
  { id: 4712, from: 'hier', to: 'dort', date: 'jetzt'},
  { id: 4713, from: 'hier', to: 'dort', date: 'jetzt'}
];

let flightServiceMock = {
  flights:  [],
  find(from: string, to: string): void {
    this.flights = dummyFlights;
  }
}

describe('FlightSearchComponent', () => {

  beforeEach(async(() => {
    // Vorbereitungsaufgaben

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        FlightBookingModule
      ],
      declarations: [
      ],
      providers: [
        { provide: BASE_URL, useValue: 'http://www.angular.at/api' }
      ]
    }).compileComponents();

    TestBed.overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          {
            provide: FlightService,
            useValue: flightServiceMock
          }
        ]
      }
    }).compileComponents();
  }));

  it('should not have any flight initially', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    expect(comp.flights).not.toBeUndefined();
    expect(comp.flights.length).toBe(0);
  })

  it('should not load flights w/o from and to', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    comp.from = '';
    comp.to = ''
    comp.search();

    expect(comp.flights.length).toBe(0);

  })

  it('should load flights w/ from and to', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    comp.from = 'Hamburg';
    comp.to = 'Graz'
    comp.search();

    expect(comp.flights.length).toBe(3);
  })

})
