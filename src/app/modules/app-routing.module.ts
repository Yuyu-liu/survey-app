import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveysComponent } from '../surveys/surveys.component';
import { ProfileComponent } from '../profile/profile.component';
import {SurveyComponent} from '../survey/survey.component';

const routes: Routes = [
  { path: 'home', component: SurveysComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'survey', component: SurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
