import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from './register.service';

@Component({
    selector: '',
    templateUrl: 'app/user/register/register.html',
    styleUrls: ['app/user/register/register.css'],
    providers: [ RegisterService ]
})

export class RegisterComponent{
    constructor(
        private registerService:RegisterService,
        private router:Router
    ){}

    // 手机号码
    private mobile_number:string;
    // 密码
    private password:string;
    // 验证码
    private mobile_code:string;
    // 标志用户是否已阅读并同意协议的复选框
    private agree:boolean;
    // 标志用户是否存在的标识
    private userExist:boolean=false;
    // 控制密码框类型的变量
    private passwordType:string='password';
    // 显示密码按钮的文本内容
    private pwdBtnText:string='显示密码';

    // 发送验证码的方法
    private sendVerify(){

        //发送验证码前检测手机号码是否输入
        if(!this.mobile_number){
            alert("请输入手机号码");
            return;
        }

        // 定义发送验证码需要的数据
        var data={
            mobile_number:this.mobile_number
        };
    }

    // 显示密码的方法
    private togglePassword(){
        if(this.passwordType=='password'){
            this.passwordType='text';
            this.pwdBtnText='隐藏密码';
        }else{
            this.passwordType='password';
            this.pwdBtnText='显示密码';
        }
    }

    //检测输入的方法
    private canSubmit(){
        if(!this.mobile_number){
            alert("请输入手机号码");
            return false;
        }else if(!this.mobile_code){
            alert("请输入验证码");
            return false;
        }else if(!this.password){
            alert("请设置密码");
            return false;
        }else if(this.password.length<6){
            alert("密码最少6位");
            return false;
        }else if(!this.agree){
            alert("请阅读并同意电子合同服务条例");
            return false;
        }else{
            return true;
        }
    }

    // 检测用户是否存在的方法
    private checkUserExist(){
        //检测用户是否存在前检测手机号码是否输入

    }

    // 发送注册信息
    private submit(){
        // 提交之前进行输入检测
        if(!this.canSubmit()){
            return;
        };

        // 定义注册要提交的数据对象
        var registerData={
            mobile_number:this.mobile_number,
            mobile_code:this.mobile_code,
            password:this.password
        };
    }
}
