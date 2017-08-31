/**
 * routes for the student module
 * /students
 * /students/:id
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StudentDetailsComponent} from "./components/student-details/student-details.component";
import {StudentListComponent} from "./components/student-list/student-list.component";

@NgModule({
  imports: [
    RouterModule.forChild(
      [
        {path: 'students/:id', component: StudentDetailsComponent},
        {path: 'students', component: StudentListComponent},
      ]
    )
  ],
  exports: [RouterModule]
})
export class StudentRoutingModule{

}

