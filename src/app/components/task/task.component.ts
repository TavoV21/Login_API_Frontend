import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task:any=[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(){
    this.taskService.getTask().subscribe(data=>{
      this.task = data;
      console.log(this.task[0]);
      
    })
  }
}
