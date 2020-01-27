import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../domain/models/task.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  todoList : Task[] = []
  constructor(private taskService : TaskService) { 

  }

  ngOnInit() {
    this.todoList = this.listAll();
  }

  listAll(){
    return this.taskService.listAll();
  }

  add(taskTitle : string){
    console.log(taskTitle)
    this.taskService.add(taskTitle);
  }

  removeTask(task){
    this.taskService.remove(task);
  }

  updateTask(task){
    this.taskService.update(task);
  }
}
