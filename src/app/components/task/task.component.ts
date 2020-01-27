import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Task } from 'src/app/domain/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task : Task;
  @Output() remove : EventEmitter<Task> = new EventEmitter();
  @Output() update : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeTask(task : Task){
    this.remove.emit(task);
  }

  completeTask(task : Task){
    task.isDone = !task.isDone;
    this.update.emit(task.isDone);
  }

}
