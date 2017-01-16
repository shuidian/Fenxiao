import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService{
    constructor(private http: Http){}

    // 注册用户信息的地址
    private registertUrl='/bizcontract/register';
    // 请求发送验证码的地址
    private verifyUrl='/bizcontract/register/sendMobileCode';
    // 检测用户是否存在的地址
    private isExistUrl='/bizcontract/register/checkMobileNumber';


    // 注册用户信息的方法


    // 请求发送验证码的方法


    // 检测用户是否已经存在的方法

    // 当有返回数据时，把json字符串解析为对象
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    // 当无返回数据时，直接返回响应体
    private withoutData(res: Response) {
        let body = res;
        return body || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
