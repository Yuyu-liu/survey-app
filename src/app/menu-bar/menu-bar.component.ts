import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication-service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {}

  logOut(): void {
    this.authenticationService.logout();
  }
}
