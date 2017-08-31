/**
 * student module
 */

import {NgModule} from '@angular/core';
import {StudentService} from './services/student.service';
import {StudentListComponent} from './components/student-list/student-list.component';
import {StudentDetailsComponent} from './components/student-details/student-details.component';
import {StudentRoutingModule} from "./student-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailsComponent
  ],
  providers: [
    StudentService
  ],
  imports: [
    StudentRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class StudentModule{

}
