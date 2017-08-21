/**
 * angular root module
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UserModule} from "../user/user.module";
import {AppComponent} from "./components/app.component";
import {GreetingFormComponent} from "./components/greeting-form/greeting-form.component";
import {GreetingListComponent} from "./components/greeting-list/greeting-list.component";
import {GreetingService} from "./services/greeting.service";
import {FormsModule} from "@angular/forms";
import {RedColorDirective} from './directives/red-color.directive';
import {UpperCasePipe} from './pipes/upper-case.pipe';

@NgModule({
    providers: [GreetingService],
    declarations: [
        AppComponent,
        GreetingFormComponent,
        GreetingListComponent,
        RedColorDirective,
        UpperCasePipe
    ],
    imports: [BrowserModule, UserModule, FormsModule],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule{

}
