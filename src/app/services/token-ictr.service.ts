import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenIctrService implements HttpInterceptor{


  constructor(private authService: AuthService) { }

  intercept(req, next){
    const tknreq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${this.authService.getTokken()}`
      }
    })      
    return next.handle(tknreq);
  }

 
}
