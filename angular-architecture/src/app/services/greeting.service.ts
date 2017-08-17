import {Injectable} from "@angular/core";
/**
 * Created by yarivkatz on 17/08/2017.
 */

@Injectable()
export class GreetingService {

    private _greetings : string[] = [];

    public addGreeting(message : string) {
        this._greetings.push(message);
    }

    public getAllGreeting() : string[] {
        return this._greetings;
    }
}