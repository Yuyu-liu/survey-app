import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../auth/authentication-service';
import { Router } from '@angular/router';
import { setCookie } from '../../../assets/cookies-util';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = this.buildSignUpForm();

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  buildSignUpForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(undefined, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl(undefined, [Validators.required, Validators.minLength(8), Validators.pattern('[^a-zA-Z0-9]') ]),
    });
  }

  signUp(): void {
    this.authenticationService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value)
        .subscribe(userResponse => {
          setCookie('token', userResponse.token);
          setCookie('userId', userResponse.userId);
          this.authenticationService.isAuthenticated = true;
          this.router.navigateByUrl('/');
        }, () => {
          localStorage.removeItem('token');
          this.snackbar.open('Sign up failed', '', {duration: 3000, panelClass: ['snackbar']});
        });
  }
}
