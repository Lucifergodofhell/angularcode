import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a='';
  MyCreateFunction(){
     this.a='1';
  }
  MyReplaceFunction(){
    this.a='2';
  }
  MyUpdateFunction(){
    this.a='3';
  }
  MyDeleteFunction(){
    this.a='4';
  }
  MyShowallFunction(){
    this.a='5';
  }
  }
