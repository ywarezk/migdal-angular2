/**
 * task service to communicate with rest server task api
 */

import { Http, Response } from '@angular/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';
import { Task } from '../models/task';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  constructor(private _http : Http){}

  getAllTasks() : Observable<Task[]>{
    return this._http.get('https://nztodo.herokuapp.com/api/task/?format=json')
      .map((res : Response) => {
        const json = res.json();
        const tasksArray : Task[] = [];
        for(let i=0; i< json.length; i++){
          const newTask = new Task(json[i]);
          tasksArray.push(newTask);
        }
        return tasksArray;
      });
  }

}
