import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hallo Welt!!';

  showBasket: boolean = true;

  toggleShowBasket(): void {
    this.showBasket = !this.showBasket;
  }
}
