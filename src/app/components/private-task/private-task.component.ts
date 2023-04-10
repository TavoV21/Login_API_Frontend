import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-private-task',
  templateUrl: './private-task.component.html',
  styleUrls: ['./private-task.component.css']
})
export class PrivateTaskComponent implements OnInit {
  task:any=[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getprivateTask();
  }

  getprivateTask(){
    this.taskService.getPrivateTask().subscribe(data=>{
      this.task = data;
      console.log(this.task[0]);
      
    })
  }
}
