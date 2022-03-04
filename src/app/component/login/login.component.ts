import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../auth/authentication-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { setCookie } from '../../../assets/cookies-util';

@Component({
  selector: 'app-profile',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  token: string|undefined;
  captchaChecked = false;
  loginForm: FormGroup = this.buildLoginForm();

  constructor(private authenticationService: AuthenticationService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
  }

  buildLoginForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(undefined, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl(undefined, [Validators.required]),
      captcha: new FormControl(false, [Validators.required])
    });
  }

  login(): void {
    console.log(this.token);
    // this.authenticationService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
    //   .subscribe(userResponse => {
    //     this.authenticationService.isAuthenticated = true;
    //     setCookie('token', userResponse.token);
    //     setCookie('userId', userResponse.userId);
    //     this.router.navigateByUrl('/');
    //   }, () => {
    //     localStorage.removeItem('token');
    //     this.snackBar.open('Authentication failed', '', {duration: 3000, panelClass: ['snackbar']});
    //   });
  }

  callback(): void {
    console.log('here');

    this.captchaChecked = true;
  }
}
