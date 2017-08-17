/**
 * angular root module
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UserModule} from "../user/user.module";
import {AppComponent} from "./components/app.component";

@NgModule({
    providers: [],
    declarations: [AppComponent],
    imports: [BrowserModule, UserModule],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule{

}
