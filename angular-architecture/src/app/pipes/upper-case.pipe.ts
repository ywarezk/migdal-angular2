/**
 * Created by yarivkatz on 21/08/2017.
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'migdalUpperCase'
})
export class UpperCasePipe implements PipeTransform{
    transform(value : string) : any{
        return value.toUpperCase();
    }
}