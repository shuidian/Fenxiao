/**
 * Created by jiangyan on 2017/1/6.
 */
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DetailService } from './detail.service';

@Component({
    selector: '',
    templateUrl: 'app/product/detail/detail.html',
    styleUrls: ['app/product/detail/detail.css'],
    providers: [ DetailService ]
})

export class DetailComponent implements OnInit{
    constructor(
        private router:Router,
        private detailService:DetailService
    ){}

    private show:string='detail';

    changeShow(index:number):void{
        var items=['detail','reply','after-sale'];
        this.show=items[index];
    }

    ngOnInit(){}
}
