import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
    .ng-invalid{
      border: 2px solid red;
    }
    .is-username-invalid.ng-invalid{
      border: 3px solid blue;
    }
    `
  ]
})
export class AppComponent {
  username = 'yariv@nerdeez.com';
}
