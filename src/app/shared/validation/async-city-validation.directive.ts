import { Directive, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validator } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


@Directive({
  selector: 'input[asyncCity]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityValidationDirective,
      multi: true
    }
  ]
})
export class AsyncCityValidationDirective implements AsyncValidator {

  constructor(private http: Http) {
  }

  validate(c: AbstractControl): Observable<object> {

    let city = c.value;

    let url = 'http://www.angular.at/api/airport';

    return this.http.get(url)
            .map(resp => resp.json())
            .map((airports: string[]) => {
                if (airports.find(c => c == city)) {
                  return {};
                }
                return {
                  asyncCity: true
                }
              });
              //.delay(5000);

  }


}
