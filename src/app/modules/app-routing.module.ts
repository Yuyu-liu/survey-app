import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveysComponent } from '../component/surveys/surveys.component';
import { LoginComponent } from '../component/login/login.component';
import { SurveyComponent } from '../component/survey/survey.component';
import { SignUpComponent } from '../component/sign-up/sign-up.component';
import { LoginGuard } from '../auth/login.guard';
import {ProfileComponent} from '../component/profile/profile.component';

const routes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: SurveysComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [LoginGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
