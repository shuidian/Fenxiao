import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template:''
})
export class LogoutComponent implements OnInit{
    constructor(private router:Router){}
    ngOnInit(){
        //登出时，清除缓存的信息
        window.localStorage.removeItem("Uid");
        window.localStorage.removeItem('Token');
        window.localStorage.removeItem('loginTime');
        // 登出成功后，路由到登录页
        this.router.navigate(['/user/login']);
    }
}