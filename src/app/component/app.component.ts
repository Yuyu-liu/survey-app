import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication-service';
import { getCookie } from '../../assets/cookies-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'survey-app';

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    const token = getCookie('token');
    if (token && token.length !== 0) {
      this.authenticationService.verifyTokenExpiration(token).subscribe(() => {}, () => {
        this.authenticationService.logout();
      });
    }
  }
}
