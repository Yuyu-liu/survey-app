import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialModule } from './modules/material.module';
import { LoginComponent } from './login/login.component';
import { SurveyComponent } from './survey/survey.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    LoginComponent,
    SurveyComponent,
    SignUpComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
