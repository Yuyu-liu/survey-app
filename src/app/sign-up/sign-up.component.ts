import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = this.buildSignUpForm();

  constructor() { }

  ngOnInit(): void {
  }

  buildSignUpForm(): FormGroup {
    return new FormGroup({
      firstName: new FormControl(undefined, [Validators.required]),
      lastName: new FormControl(undefined, [Validators.required]),
      email: new FormControl(undefined, [Validators.required]),
      password: new FormControl(undefined, [Validators.required]),
    });
  }
}
