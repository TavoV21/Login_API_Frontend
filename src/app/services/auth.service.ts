import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private URL="http://localhost:3000/api";

  constructor(private HttpClient: HttpClient, private router:Router) {}

  signUp(user:any){
    let HttpPost= this.HttpClient.post<any>(`${this.URL}${'/signup'}`,user);
    return HttpPost;
  }

  signIn(user:any){
    let HttpPost= this.HttpClient.post<any>(`${this.URL}${'/signin'}`,user);
    return HttpPost;
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getTokken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }
}
