/**
 * Created by jiangyan on 2017/1/5.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations:[
    UserComponent,
    LoginComponent,
    RegisterComponent
  ]
})

export class UserModule{}
