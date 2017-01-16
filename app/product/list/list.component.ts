/**
 * Created by jiangyan on 2017/1/6.
 */
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListService } from './list.service';

@Component({
    selector: '',
    templateUrl: 'app/product/list/list.html',
    styleUrls: ['app/product/list/list.css'],
    providers: [ ListService ]
})

export class ListComponent implements OnInit{
    constructor(
        private router:Router,
        private listService:ListService
    ){}

    ngOnInit(){}
}
