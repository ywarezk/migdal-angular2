import {Component} from "@angular/core";
import {GreetingService} from "../../services/greeting.service";

@Component({
    selector: 'greeting-list',
    templateUrl: './src/app/components/greeting-list/greeting-list.component.html'
})
export class GreetingListComponent{

    public greetings : string[] = [];

    constructor(private _greetingService : GreetingService){
        _greetingService.greetingSubject.subscribe(function next(greetings : string[]){
            // this.greetings = greetings;
            this.greetings = _greetingService.getAllGreeting();
        });
        // this.greetings = _greetingService.getAllGreeting();
    }

    deleteGreeting(index : number){
        this._greetingService.deleteGreeting(index);
    }
}