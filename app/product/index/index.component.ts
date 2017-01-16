/**
 * Created by jiangyan on 2017/1/6.
 */
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IndexService } from './index.service';

declare var Swiper:any;

@Component({
    selector: '',
    templateUrl: 'app/product/index/index.html',
    styleUrls: ['app/product/index/index.css'],
    providers: [ IndexService ]
})

export class IndexComponent implements OnInit{
    constructor(
        private router:Router,
        private indexService:IndexService
    ){}

    private showLayer:boolean=false;

    show(){
        this.showLayer=true;
    }

    hide(){
        this.showLayer=false;
    }

    search(){
        this.router.navigate(['/product/list']);
    }

    ngOnInit(){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 800,
            autoplay:2500,
            loop:true,
            paginationType: 'progress'
        });
    }
}
