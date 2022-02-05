import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { UserResponse } from '../models/userResponse';
import { Router } from '@angular/router';
import { UserRequest } from '../models/userRequest';
import { BehaviorSubject, Observable } from 'rxjs';
import { deleteCookie, getCookie } from '../../assets/cookies-util';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  isAuthenticated = false;
  user = new BehaviorSubject<any>(null);

  constructor(private httpClient: HttpClient,
              private router: Router) {}

  login(email: string, password: string): Observable<UserResponse> {
    const body: UserRequest = {
      email,
      password
    };
    this.user.next(email);
    localStorage.setItem('userInfo', body.email);
    return this.httpClient.post<UserResponse>(`${environment.user}/login`, body);
  }

  signup(email: string, password: string): Observable<UserResponse> {
    const body: UserRequest = {
      email,
      password
    };
    this.user.next(email);
    localStorage.setItem('userInfo', body.email);
    return this.httpClient.post<UserResponse>(`${environment.user}/signUp`, body );
  }

  verifyTokenExpiration(token: string): Observable<boolean> {
    return this.httpClient.post<boolean>(`${environment.token}/${getCookie('userId')}`, token);
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
