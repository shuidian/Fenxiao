/**
 * Created by jiangyan on 2017/1/5.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path:'',
        //canActivateChild: [AuthGuard],
        children:[
          {
            path: 'login',
            component: LoginComponent
          },{
            path: 'register',
            component: RegisterComponent
          },{
            path: '',
            component: LoginComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(userRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class UserRoutingModule{}
