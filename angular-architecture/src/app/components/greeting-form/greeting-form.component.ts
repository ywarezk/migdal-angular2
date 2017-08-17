/**
 * greetin form input
 */

import {Component} from "@angular/core";
import {GreetingService} from "../../services/greeting.service";

@Component({
    selector: 'greeting-form',
    templateUrl: './src/app/components/greeting-form/greeting-form.component.html',
})
export class GreetingFormComponent{
    public greetingInput : string = "";
    constructor(private _greetingService : GreetingService){}

    public addGreeting(){
        this._greetingService.addGreeting(this.greetingInput);
    }
}
