/**
 * Created by jiangyan on 2017/1/5.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const productRoutes: Routes = [
    {
        path: '',
        component: ProductComponent,
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'index',
                component: IndexComponent
            },
            {
                path: 'list',
                component: ListComponent
            },
            {
                path: 'detail',
                component: DetailComponent
            }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(productRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class ProductRoutingModule{}
