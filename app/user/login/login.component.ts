import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
    selector: '',
    templateUrl: 'app/user/login/login.html',
    styleUrls: ['app/user/login/login.css'],
    providers: [ LoginService ]
})

export class LoginComponent implements OnInit{
    constructor(
        private loginService:LoginService,
        private router:Router
    ){}

    // 手机号码
    private mobile_number:string;
    // 密码
    private password:string;
    // 记住账号
    private rememberAccount:boolean;

    // 输入检测
    private canLogin(){
        if(!this.mobile_number){
            alert("请输入手机号码");
            return false;
        }else if(!this.password){
            alert("请输入密码");
            return false;
        }else{
            return true;
        }
    }

    // 执行登录
    private login(){

        // 提交之前进行输入检测
        if(!this.canLogin()){
            return;
        }

        // 记住账号的处理
        if(this.rememberAccount){
            setAccount(this.mobile_number);
        }else{
            delAccount();
        }

        //把账号存入localstorage的工具方法
        function setAccount(account:string){
            if(window.localStorage){
                window.localStorage.setItem('account', account);
            }else{
                alert("您的浏览器不支持H5新特性，建议升级新版浏览器");
            }
        }
        //把账号从localstorage清除的工具方法
        function delAccount(){
            if(window.localStorage){
                window.localStorage.removeItem('account');
            }else{
                alert("您的浏览器不支持H5新特性，建议升级新版浏览器");
            }
        }


        //登录时提交的数据
        var loginData={
            mobile_number:this.mobile_number,
            password:this.password
        };

    }

    //登陆页面加载完毕后，
    // 到localstorage中查看是否存在账号信息，
    // 如果存在则直接获取并填充到输入框中
    ngOnInit(){

        // 实例化登录模块后，检测localstorage中是否有用户登录信息，
        // 如果有，说名用户曾经登录过（但并不确定登录信息一定有效），直接跳转到工作流页面

    }
}
