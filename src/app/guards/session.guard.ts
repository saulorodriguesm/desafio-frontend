import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/AuthService';

@Injectable({ providedIn: 'root' })
export class SessionGuard implements CanActivate {
  constructor(private router: Router, private _authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this._authService.GetAccessToken();
    if (token) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
