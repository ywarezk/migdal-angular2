import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'child',
  template: `
  <h4>{{message}}</h4>
  <button (click)="passMessageToParent()" >
    Click on child button
  </button>
  `
})
export class ChildComponent{
  @Input('messageFromParent') public message : string = '';
  @Output() clickOnChild : EventEmitter<string> = new EventEmitter();

  passMessageToParent(){
    const message : string = 'hello from child';
    this.clickOnChild.emit(message);
  }
}
