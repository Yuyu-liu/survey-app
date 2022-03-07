import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {getCookie} from '../../assets/cookies-util';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = getCookie('XSRF-TOKEN');
    if (!token) {
      token = 'null';
    }
    if (!req.headers.has('XSRF-TOKEN')) {
      req = req.clone({ headers: req.headers.set('XSRF-TOKEN', token) });
    }
    return next.handle(req);
  }
}
