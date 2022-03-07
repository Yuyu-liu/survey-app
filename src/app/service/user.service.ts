import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {UserResponse} from '../models/userResponse';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {UserRequest} from '../models/userRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  createUser(userRequest: UserRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`${environment.user}/signUp`, userRequest );
  }

  login(userRequest: UserRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`${environment.user}/login`, userRequest);
  }

  getUser(email: string): Observable<HttpResponse<UserResponse>> {
    return this.httpClient.get<UserResponse>(`${environment.user}/${email}`, {observe: 'response'});
  }
}
