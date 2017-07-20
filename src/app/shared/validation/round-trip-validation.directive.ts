import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';


@Directive({
  selector: 'form[roundTrip]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundTripValidationDirective,
      multi: true
    }
  ]
})
export class RoundTripValidationDirective implements Validator {

  validate(c: AbstractControl): object {
    let formGroup = c as FormGroup;

    let fromControl = formGroup.controls['from'];
    let toControl = formGroup.controls['to'];

    if (!fromControl || !toControl) return {};

    if (fromControl.value == toControl.value) {
      return { roundTrip: true }
    }

    return {};

  }


}
