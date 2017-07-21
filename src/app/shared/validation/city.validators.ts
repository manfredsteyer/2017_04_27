import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FlightService } from '../../flight-booking/flight-search/flight.service';
export class CityValidators {

  static validate(c: AbstractControl): object {
    if (c.value == 'Graz' || c.value == 'Hamburg') {
      return { };
    }
    return {
      city: true
    }
  }

  static validateWithParams(allowedCities: string[]): object {
    return (c: AbstractControl) => {

      if (allowedCities.indexOf(c.value) > -1) {
        return {};
      }
      return {
        city: true
      }
    }
  }


  static validateAsync(flightService: FlightService) {
    return (c: AbstractControl): Observable<object> => {

      return flightService
        .findObservable(c.value, '')
        .map(flights => flights.length > 0)
        .map(ok => ok ? {} : {asyncCity: true});

    }
  }

  static validateRoundTrip(c: AbstractControl): object {
    if (c.value.from == c.value.to) {
      return { roundTrip: true }
    }
    return {};
  }



}
