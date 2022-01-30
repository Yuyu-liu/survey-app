import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveysComponent } from '../surveys/surveys.component';
import { LoginComponent } from '../login/login.component';
import { SurveyComponent } from '../survey/survey.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

const routes: Routes = [
  { path: 'home', component: SurveysComponent },
  { path: 'login', component: LoginComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'signUp', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
