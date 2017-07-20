
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipe/city.pipe';
import { CityValidationDirective } from './validation/city-validation.directive';
import { ValidationErrorsComponent } from './validation/validation-errors/validation-errors.component';
import { RoundTripValidationDirective } from './validation/round-trip-validation.directive';
import { AsyncCityValidationDirective } from './validation/async-city-validation.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    CityValidationDirective,
    ValidationErrorsComponent,
    RoundTripValidationDirective,
    AsyncCityValidationDirective
  ],
  exports: [
    CityPipe,
    CityValidationDirective,
    ValidationErrorsComponent,
    RoundTripValidationDirective,
    AsyncCityValidationDirective
  ]
})
export class SharedModule {
}
