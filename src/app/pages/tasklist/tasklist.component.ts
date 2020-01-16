import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../domain/models/task.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @Input() task : Task;

  constructor(private taskService : TaskService) { 

  }

  ngOnInit() {
    this.taskService = new TaskService();
  }

  listAll(){
    return this.taskService.listAll();
  }

  onClick(){
    console.log(this.task);
  }
}
