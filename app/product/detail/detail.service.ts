import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class DetailService{
    constructor(private http: Http){}
}
