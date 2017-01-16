/**
 * Created by jiangyan on 2017/1/5.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ProductComponent } from './product.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ProductRoutingModule
    ],
    declarations:[
        ProductComponent,
        IndexComponent,
        ListComponent,
        DetailComponent
    ]
})

export class ProductModule{}
