import { Component, Input } from '@angular/core';

@Component({
  selector: 'validation-errors',
  templateUrl: './validation-errors.component.html'
})
export class ValidationErrorsComponent {

  @Input() errors: object;


}
