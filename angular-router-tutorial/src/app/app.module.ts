import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {Error404Component} from "./components/error-404/error-404.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {AppRoutingModule} from "./app-routing.module";
import {StudentModule} from "./student/student.module";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    Error404Component,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    StudentModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
