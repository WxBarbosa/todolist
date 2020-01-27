import { Injectable, Input } from '@angular/core';
import { Task } from '../domain/models/task.model';
import { StorageService } from './storage.service';


const taskListStorageKey = 'Todo_List';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  protected taskList : Task[]

  constructor(private _storageService : StorageService) { 
    this.taskList = _storageService.getData(taskListStorageKey) || []
  }

  save(){
    this._storageService.setData(taskListStorageKey,this.taskList);
  }

  private getLastId(){
    return this.taskList.sort().slice(0,0);
  }

  listAll(){
    return this.taskList;
  }

  get(task : Task){
    return this.taskList.find(t=>t.id === task.id);
  }

  add(taskTitle : string){
    this.taskList.push(new Task(Math.random(), taskTitle,false)); 
    this.save();
  }

  update(task : Task){
    const index = this.taskList.indexOf(task);
    this.taskList[index] = {...task};
    this.save();
  }

  remove(task : Task){
    const index = this.taskList.indexOf(task);
    this.taskList.splice(index, 1);
    this.save();
  }
}