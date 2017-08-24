import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'child',
  template: `
  <h4>{{message}}</h4>
  <button (click)="passMessageToParent()" >
    Click on child button
  </button >
  <input type="text" (input)="changeTwoWayAndEmit($event)" [value]="twoWay" />
  `
})
export class ChildComponent{
  @Input('messageFromParent') public message : string = '';
  @Output() clickOnChild : EventEmitter<string> = new EventEmitter();
  @Input() public twoWay : string = '';
  @Output() public twoWayChange : EventEmitter<string> = new EventEmitter();

  passMessageToParent(){
    const message : string = 'hello from child';
    this.clickOnChild.emit(message);
  }

  changeTwoWayAndEmit(event) {
    this.twoWay = event.currentTarget.value;
    this.twoWayChange.emit(this.twoWay);
  }

  public sayHello(){
    return 'hello template variable';
  }
}
