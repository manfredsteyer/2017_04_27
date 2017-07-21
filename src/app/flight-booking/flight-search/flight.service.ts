import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
import { publish } from 'rxjs/operator/publish';

@Injectable()
export class FlightService {

  constructor(
    private http: Http,
    @Inject(BASE_URL) private baseUrl: string) {
    console.debug('ctor');
  }

  public flights: Flight[] = [];

  find(from: string, to: string): void {
    let url = this.baseUrl + '/flight';

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let search = new URLSearchParams();
    search.set('from', from);
    search.set('to', to);

    let o = this
            .http
            .get(url, { headers, search })
            .map(resp => resp.json())
            .subscribe(
              flights => this.flights = flights,
              err => console.error(err)
            );

  }

  findObservable(from: string, to: string): Observable<Flight[]> {
    let url = this.baseUrl + '/flight';

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let search = new URLSearchParams();
    search.set('from', from);
    search.set('to', to);

    return this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json());


  }


  findById(id: string): Observable<Flight> {
    let url = this.baseUrl + '/flight';

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let search = new URLSearchParams();
    search.set('id', id);

    return this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json());
  }


  save(flight: Flight): Observable<Flight> {
    let url = this.baseUrl + '/flight';

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .post(url, flight, { headers })
      .map(resp => resp.json());
  }

}
