import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {getCookie} from '../../assets/cookies-util';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private httpClient: HttpClient) { }

  validateToken(token: string): Observable<boolean> {
    return this.httpClient.post<boolean>(`${environment.token}/${getCookie('userId')}`, token);
  }
}
