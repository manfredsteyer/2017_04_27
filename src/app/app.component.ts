import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hallo Welt!!';

  showBasket: boolean = true;
  showLoadingIndicator: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {

      if (event instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      else if (
        event instanceof NavigationEnd
        || event instanceof NavigationCancel
        || event instanceof NavigationError
      ) {
        this.showLoadingIndicator = false;
      }

    })
  }

  toggleShowBasket(): void {
    this.showBasket = !this.showBasket;
  }
}
