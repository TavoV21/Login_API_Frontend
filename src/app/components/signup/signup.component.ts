import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    email:'',
    password:''

  }

  token:String='';
  constructor(private AuthService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  signUp(){
    console.log(this.user);
    this.AuthService.signUp(this.user).subscribe( data=>{
      console.log(data);
      localStorage.setItem('token', data.token);
      this.router.navigate(['/private-task']);
      console.log('registrado');
      
      
    },error=> console.log(error))
    
  }

  

}
