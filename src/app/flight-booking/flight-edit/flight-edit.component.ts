
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../flight-search/flight.service';
import { CityValidators } from '../../shared/validation/city.validators';
@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements  OnInit{

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
        .params
        .switchMap(p => this.flightService.findById(p['id']))
        .subscribe(
          f => this.form.patchValue(f),
          err => console.error(err)
        );

    this.route.queryParams.subscribe(
      p => console.debug(p)
    )
  }
}
