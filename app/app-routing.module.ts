import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path:'',
        redirectTo:'product/index',
        pathMatch:'full'
    },
    {
        path:'user',
        loadChildren:'app/user/user.module#UserModule'
    },
    {
        path:'product',
        loadChildren:'app/product/product.module#ProductModule'
    },
    //{
    //    path:'my-contract',
    //    loadChildren:'app/my-contract/my-contract.module#MyContractModule'
    //}
];


@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes,{ useHash: true })
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}

//export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });
