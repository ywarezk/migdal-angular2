/**
 * seperate the routes of the app module
 * place routes for app module here
 */

import {NgModule} from '@angular/core';
import {RouterModule, Router} from "@angular/router";
import {AboutComponent} from './components/about/about.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {Error404Component} from './components/error-404/error-404.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'about', component: AboutComponent
      },
      {
        path: '', component: WelcomeComponent
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{

}
