import { Observable } from 'rxjs/Observable';

export interface CanExit {
  canExit(): Observable<boolean> | boolean;
}
