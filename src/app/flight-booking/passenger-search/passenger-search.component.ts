
import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
@Component({
  selector: 'passenger-search',
  template: `
    <h1>Passenger Search</h1>
    
    <input class="form-control" [value]="userName">
    
    <p>This is a dummy page!</p>
  `
})
export class PassengerSearchComponent {

  constructor(private authSerice: AuthService) {

  }

  get userName() {
    return this.authSerice.userName;
  }

}
