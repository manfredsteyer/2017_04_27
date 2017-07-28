import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { CanExit } from './can-exit';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


export class ExitGuard implements CanDeactivate<CanExit> {

  canDeactivate(
    component: CanExit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | boolean  {

   return component.canExit();

  }

}
