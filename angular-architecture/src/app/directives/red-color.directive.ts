/**
 * Created by yarivkatz on 21/08/2017.
 */

import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[red-color]'
})
export class RedColorDirective{

    constructor(private _element : ElementRef){
        this._element.nativeElement.style.backgroundColor = 'red';
    }
}