import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-booking/flight-edit/flight-edit.component';
import { LookaheadComponent } from './lookahead/lookahead.component';

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
    path: '**',
    redirectTo: 'home'
  }
]


export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
