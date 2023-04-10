import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL="http://localhost:3000/api";

  constructor(private HttpClient : HttpClient) { }

  getTask(){
    let HttpGet= this.HttpClient.get<any>(`${this.URL}${'/task'}`);
    return HttpGet;
  }

  getPrivateTask(){
    let HttpGet= this.HttpClient.get<any>(`${this.URL}${'/private-task'}`);
    return HttpGet;
  }
}
