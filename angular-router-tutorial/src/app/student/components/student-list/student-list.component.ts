/**
 * displays the list of students
 */

import {Component} from '@angular/core';
import {Student} from '../../models/student';
import {StudentService} from '../../services/student.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'student-list',
  template: `
  <h1>
    Student list
  </h1>
  <form (ngSubmit)="searchStudents()">
    <label>
      Search Students
    </label>
    <input type="text" [(ngModel)]="searchTerm" name="search" /> <br/>
    <button type="submit">Submit</button>
  </form>
  <ul>
    <li *ngFor="let student of students" (click)="gotoStudentPage(student)" >
      <h3>
        {{student.name}}
      </h3>
      <p>
        {{student.nickName}}
      </p>
    </li>
  </ul>
  `
})
export class StudentListComponent {
  public students : Array<Student> = [];
  public searchTerm : string = '';

  constructor(private _studentService : StudentService,
              private _router : Router,
              private _activatedRoute : ActivatedRoute
  ){
    this.students = _studentService.getAllStudents();
    _activatedRoute.queryParams.subscribe((params) => {
      if (params['search']) {
        this.searchTerm = params['search'];
        this.searchStudents();
      }
    });
  }

  /**
   * to navigate to the student details page
   * @param student
   */
  gotoStudentPage(student : Student) {
    this._router.navigateByUrl(`/students/${student.id}`);
  }

  searchStudents(){
    this.students = this._studentService.findStudents(this.searchTerm);
    this._router.navigateByUrl(`/students?search=${this.searchTerm}`);
  }
}
