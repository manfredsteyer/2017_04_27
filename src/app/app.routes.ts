import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-booking/flight-edit/flight-edit.component';
import { LookaheadComponent } from './lookahead/lookahead.component';
import { BasketComponent } from './basket/basket.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'lookahead',
    component: LookaheadComponent
  },
  {
    path: 'flight-booking',
    loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]


export const AppRouterModule =
              RouterModule.forRoot(APP_ROUTES,
                {
                  preloadingStrategy: PreloadAllModules
                });
