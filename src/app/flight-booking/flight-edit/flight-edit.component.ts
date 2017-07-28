
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../flight-search/flight.service';
import { CityValidators } from '../../shared/validation/city.validators';
import { CanExit } from '../../shared/exit/can-exit';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, CanExit {



  id: string;
  showDetails: string;

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private flightService: FlightService) {

    this.form = fb.group({
      id:   [null],
      from: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          CityValidators.validate,
          CityValidators.validateAsync(flightService),
          CityValidators.validateWithParams(['Graz', 'Hamburg'])
        ]
      ],
      to:   [null],
      date: [null]
    });

    this.form.validator = Validators.compose([
      CityValidators.validateRoundTrip
    ]);

    this.form.valueChanges.subscribe(changes => {
      console.debug('changes', changes);
    })

    this.form.controls['from'].valueChanges.subscribe(changes => {
      console.debug('from changed', changes);
    })

  }


  exitWarning = {
    show: false,
    sender: null
  }

  decide(decision: boolean): void {
    this.exitWarning.show = false;
    this.exitWarning.sender.next(decision);
    this.exitWarning.sender.complete();
  }

  canExit(): any {
    if (!this.form.dirty) return true;

    this.exitWarning.show = true;

    return Observable.create((sender: Observer<boolean>) => {
      this.exitWarning.sender = sender;
    })
  }

  ngOnInit(): void {
    /*
    this.route.params.subscribe(
      p => {
        this.id = p['id'];
        this.flightService.findById(this.id).subscribe(f => {
          this.form.patchValue(f);
        });
        this.showDetails = p['showDetails'];
      }
    );
    */
    this.route
        // .params
        // .switchMap(p => this.flightService.findById(p['id']))
      .data
      .map(data => data['flight'])
        .subscribe(
          f => this.form.patchValue(f),
          err => console.error(err)
        );

    this.route.queryParams.subscribe(
      p => console.debug(p)
    )
  }
}
