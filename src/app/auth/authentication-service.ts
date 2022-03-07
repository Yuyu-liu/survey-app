import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserResponse } from '../models/userResponse';
import { Router } from '@angular/router';
import { UserRequest } from '../models/userRequest';
import { BehaviorSubject, Observable } from 'rxjs';
import { deleteCookie } from '../../assets/cookies-util';
import {UserService} from '../service/user.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private httpClient: HttpClient,
              private router: Router,
              private userService: UserService) {}
  isAuthenticated = false;
  user = new BehaviorSubject<any>(null);

  login(email: string, password: string): Observable<UserResponse> {
    const body: UserRequest = {
      email,
      password
    };
    this.user.next(email);
    localStorage.setItem('userInfo', body.email);
    return this.userService.login(body);
  }

  signup(email: string, password: string): Observable<UserResponse> {
    const body: UserRequest = {
      email,
      password
    };
    this.user.next(email);
    localStorage.setItem('userInfo', body.email);
    return this.userService.createUser(body);
  }

  logout(): void {
    deleteCookie('token');
    deleteCookie('userId');
    localStorage.removeItem('userInfo');
    this.user.next(null);
    this.isAuthenticated = false;
    this.router.navigateByUrl('/login');
  }

  autoLogin(): void {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      this.user.next(null);
      return;
    }
    this.isAuthenticated = true;
    this.user.next(userInfo);
  }
}
