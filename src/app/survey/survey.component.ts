import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  informationForm: FormGroup = this.buildInformationForm();
  questionsForm: FormGroup = this.buildQuestionsForm();
  options: string[] = ['Yes', 'No', 'Sometimes'];


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buildInformationForm(): FormGroup {
    return new FormGroup({
      firstName: new FormControl(undefined, [Validators.required]),
      lastName: new FormControl(undefined, [Validators.required]),
      email: new FormControl(undefined, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
    });
  }

  buildQuestionsForm(): FormGroup {
    return new FormGroup({
      timeWakeUp: new FormControl(undefined, [Validators.required]),
      actionWakeUp: new FormControl(undefined, [Validators.required]),
      bigBreakfast: new FormControl(undefined, [Validators.required]),
      morningPerson: new FormControl(undefined, [Validators.required])
    });
  }

  submitForms(): void {
    this.router.navigateByUrl('/surveys');
  }
}
