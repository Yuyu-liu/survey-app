import {Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../auth/authentication-service';
import {getCookie, setCookie} from '../../assets/cookies-util';
import {TokenService} from '../service/token.service';
import {UserService} from '../service/user.service';
import {CustomInterceptor} from '../auth/custom-interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CustomInterceptor]

})

export class AppComponent implements OnInit{
  title = 'survey-app';

  constructor(private authenticationService: AuthenticationService,
              private tokenService: TokenService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser('').subscribe(() => {}, error => {
      setCookie('XSRF-TOKEN', error.headers.get('XSRF-TOKEN'));
    });

    const token = getCookie('token');
    if (token && token.length !== 0) {
      this.tokenService.validateToken(token).subscribe(() => {}, () => {
        this.authenticationService.logout();
      });
    }
  }
}
