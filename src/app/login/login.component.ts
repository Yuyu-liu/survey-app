import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.buildLoginForm();

  constructor() { }

  ngOnInit(): void {
  }

  buildLoginForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(undefined, [Validators.required]),
      password: new FormControl(undefined, [Validators.required]),
    });
  }

}
