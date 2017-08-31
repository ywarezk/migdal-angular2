/**
 * Created by yarivkatz on 31/08/2017.
 */

import {Component} from '@angular/core';
import {Student} from "../../models/student";
import {ActivatedRoute} from '@angular/router';
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'student-details',
  template: `
  <h1>
    Student {{student.name}}
  </h1>
  <p>
    <strong>id: </strong> {{student.id}}
  </p>
  <p>
    <strong>name: </strong> {{student.name}}
  </p>
  <p>
    <strong>nickname: </strong> {{student.nickName}}
  </p>
  `
})
export class StudentDetailsComponent{
  public student : Student = null;

  // TODO get the student fronm the list of students

  constructor(private _activatedRoute : ActivatedRoute, private _studentService : StudentService){
    this._activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.student = _studentService.findStudentById(id);
    });
  }
}
