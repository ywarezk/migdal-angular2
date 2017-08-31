/**
 * service to get the students data
 */

import {Injectable} from '@angular/core';
import {Student} from '../models/student';

@Injectable()
export class StudentService {
  private _students : Student[] = [
    new Student('Moshe H', 'babi', '111111', 27),
    new Student('Moshe B', 'The greatest developer in the world', '22222', 33),
    new Student('Andrei', 'no need for nickname', '33333', 25)
  ]

  public getAllStudents() : Student[] {
    return this._students;
  }

  public findStudentById(id : string) : Student {
    for (let i = 0; i<this._students.length; i++){
      if (this._students[i].id === id) return this._students[i];
    }
  }

  public findStudents(search : string) : Student[] {
    const newStudentsArray = [];
    for (let i = 0; i<this._students.length; i++){
      const student = this._students[i];
      if (student.name.indexOf(search) !== -1 || student.nickName.indexOf(search) != -1 || student.id.indexOf(search) !== -1){
        newStudentsArray.push(student);
      }
    }
    return newStudentsArray;
  }
}
