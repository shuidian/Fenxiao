import './rxjs-extensions';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { UserModule }           from './user/user.module';
import { ProductModule } from './product/product.module';

@NgModule({
  imports:[
      BrowserModule,
      HttpModule,
      AppRoutingModule,
      UserModule,
      ProductModule
  ],
  declarations:[
      AppComponent
  ],
  bootstrap:[
      AppComponent
  ]
})

export class AppModule {}
