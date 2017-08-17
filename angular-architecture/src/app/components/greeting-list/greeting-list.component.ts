import {Component} from "@angular/core";
import {GreetingService} from "../../services/greeting.service";

@Component({
    selector: 'greeting-list',
    templateUrl: './src/app/components/greeting-list/greeting-list.component.html'
})
export class GreetingListComponent{

    public greetings : string[] = [];

    constructor(private _greetingService : GreetingService){
        this.greetings = this._greetingService.getAllGreeting();
    }
}