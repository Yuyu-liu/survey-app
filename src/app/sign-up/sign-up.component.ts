import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth/authentication-service';
import { Router } from '@angular/router';
import { setCookie } from '../../assets/cookies-util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = this.buildSignUpForm();

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  buildSignUpForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(undefined, [Validators.required]),
      password: new FormControl(undefined, [Validators.required]),
    });
  }

  signUp(): void {
    this.authenticationService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value)
        .subscribe(userResponse => {
          setCookie('token', userResponse.token);
          setCookie('userId', userResponse.userId);
          this.authenticationService.isAuthenticated = true;
        });
    this.router.navigateByUrl('/home');
  }
}
