import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../services/records.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  records = {};

  constructor(private myFirstService : RecordsService) { }

  ngOnInit() {
    this.initializeServerList(); 
  }
  
  initializeServerList(){
    this.records = this.myFirstService.getData();
  }

  getRecords(){
    return this.records;
  }

}
