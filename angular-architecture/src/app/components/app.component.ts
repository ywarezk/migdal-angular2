
import {Component} from "@angular/core";

@Component({
    selector: 'app-component',
    // selector: '.app-component' // for class
    // selector: '[app-component]' // for attribute

    template: `
    <div>
        <greeting-form></greeting-form>
        <greeting-list></greeting-list>
    </div>
    `
})
export class AppComponent{

}
