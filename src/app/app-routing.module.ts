import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TaskComponent } from './components/task/task.component';
import { PrivateTaskComponent } from './components/private-task/private-task.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo:'/task', pathMatch:'full'},
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},
  {path:'task', component: TaskComponent},
  {path:'private-task', component: PrivateTaskComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
