import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user={
    email:'',
    password:''

  }

  constructor(public AuthService: AuthService, private router:Router) { 
  }

  ngOnInit(): void {
  }

  signIn(){
    console.log(this.user);
    this.AuthService.signIn(this.user).subscribe(data=>{
       console.log(data);
        localStorage.setItem('token', data.token);
        this.router.navigate(['/private-task']);
        console.log('ingreso autorizado');

    },err => console.log(err)
    )
    
  }



}
