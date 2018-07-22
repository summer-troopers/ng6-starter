import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuardService implements CanActivate {

  isLoggedIn = true;

  constructor() {
  }

  canActivate() {
    return this.isLoggedIn;
  }
}
