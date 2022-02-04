import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {}

  logOut(): void {
    this.authenticationService.logout();
  }

  navigateLogin(): void {
    this.router.navigateByUrl('/login');
  }

  navigateHome(): void {
    this.router.navigateByUrl('/');
  }
}
