/**
 * task model
 */

export class Task{
  public id : number;
  public title : string;
  public description : string;
  public group : string;
  public when : Date;

  constructor(json : {[key: string]: any}){
    this.id = json.id;
    this.title = json.title;
    this.description = json.description;
    this.group = json.group;
    this.when = new Date(json.when);
  }
}
