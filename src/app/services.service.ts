import { Injectable } from '@angular/core';
import {User} from '../app/model/user';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public user=new User();
  data;
  constructor(private http : HttpClient) { 
    
this.getData();

  }
  public addData(newuser:User):void 
  {
    this.http.post('https://localhost:44398/api' +'/users',newuser).subscribe(data=>{
    },(err:any)=>{
      debugger;
    })
  }
  public getData() : JSON[]{
    this.http.get('https://localhost:44398/api'+'/users').subscribe(
      data => {
        this.data= data;
      },
      (err: any) => {
        console.log (err.message);
      }
    );
   return this.data; 
  }
}
