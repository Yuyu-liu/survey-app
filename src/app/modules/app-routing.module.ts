import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveysComponent } from '../surveys/surveys.component';
import { LoginComponent } from '../login/login.component';
import { SurveyComponent } from '../survey/survey.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginGuard } from '../auth/login.guard';

const routes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SurveysComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [LoginGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
