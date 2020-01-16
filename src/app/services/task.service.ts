import { Injectable, Input } from '@angular/core';
import { Task } from '../domain/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  protected taskList : Task[]

  constructor() { 
    this.taskList = [
      new Task(1,'Comer comida saudável.',false),
      new Task(2,'Voltar a treinar algum esporte.',false)
    ];
  }

  listAll(){
    return this.taskList;
  }

  get(task : Task){
    return this.taskList.find(t=>t.id === task.id);
  }

  add(task : Task){
    this.taskList.push(task);
  }

  remove(task : Task){
    this.taskList.map(t=>t.id != task.id);
  }
}
