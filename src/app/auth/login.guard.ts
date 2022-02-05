import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication-service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<true | UrlTree> {
    this.authenticationService.autoLogin();
    return this.authenticationService.user.pipe(take(1), map(user => {
      const isAuth = !!user;
      if (isAuth) {
        return true;
      } else {
        return this.router.createUrlTree(['/login']);
      }
    }));
  }
}
