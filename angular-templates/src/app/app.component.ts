import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stamNumber : number = 12;
  public displayCommunicationMessage : string = 'hello from class instance';
  public userEmail : string = 'yariv@nerdeez.com';
  public userEmail2 : string = 'yariv2@nerdeez.com';
  public messageFromParent : string = 'hello child component from parent';
  public pTestNgModel : string = 'hello child component from parent';

  public twoWayBindingToChild : string = 'initial two way to child';

  public groceryList : Array<string> = [
    'Milk',
    'Sugar',
    'Eggs'
  ];

  public randomNumber() : number {
    return Math.random();
  }

  clickOnParagraph(event : any) : void {
    alert(event.currentTarget.innerText);
  }

  messageFromChild(message : string){
    alert(message);
  }

  passTemplateVariable(p : any){
    // debugger;
  }

  booleanMethodOfP() : boolean {
    return true;
  }

  functionThatReturnsClasses() {
    return {
      'migdal': true,
      'migdal2': true,
      'hidden': true
    }
  }
}
