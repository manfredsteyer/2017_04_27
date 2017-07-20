
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipe/city.pipe';
import { CityValidationDirective } from './validation/city-validation.directive';
import { ValidationErrorsComponent } from './validation/validation-errors/validation-errors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    CityValidationDirective,
    ValidationErrorsComponent
  ],
  exports: [
    CityPipe,
    CityValidationDirective,
    ValidationErrorsComponent
  ]
})
export class SharedModule {
}
