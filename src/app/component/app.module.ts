import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialModule } from '../modules/material.module';
import { LoginComponent } from './login/login.component';
import { SurveyComponent } from './survey/survey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuard } from '../auth/login.guard';
import { ProfileComponent } from './profile/profile.component';
import {RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings} from 'ng-recaptcha';
import {environment} from '../../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    LoginComponent,
    SurveyComponent,
    SignUpComponent,
    ProfileComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RecaptchaModule,
        RecaptchaFormsModule,
    ],
  providers: [
    LoginGuard,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
