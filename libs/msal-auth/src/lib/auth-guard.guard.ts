import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const role = sessionStorage.getItem('role');
    if (role) {
      if (role == 'passenger') {
        return false;
      }
      if (role == 'Mod') {
        return true;
      }
      if (role == 'Admin') {
        return true;
      } else return false;
    } else return false;
  }
}
