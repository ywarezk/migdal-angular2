import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
/**
 * Created by yarivkatz on 17/08/2017.
 */

@Injectable()
export class GreetingService {
    public greetingSubject : Subject<string[]> = new Subject();
    private _greetings : string[] = [];

    public addGreeting(message : string) {
        this._greetings.push(message);
        this.greetingSubject.next(this._greetings);
    }

    public getAllGreeting() : string[] {
        return this._greetings;
    }

    /**
     * delete the index greeting from _greetings
     * @param index
     */
    public deleteGreeting(index : number){
        const newGreetingsArray = [];
        for (let i=0; i<this._greetings.length; i++){
            if(index === i) continue;
            newGreetingsArray.push(this._greetings[i]);
        }
        this._greetings = newGreetingsArray;
        this.greetingSubject.next(this._greetings);
    }
}