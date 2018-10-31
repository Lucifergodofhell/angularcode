import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
  public user =new User();
  List: JSON[]; 
  constructor(private service:ServicesService) { }

  ngOnInit() {
  }

  showlist(){
    this.List=this.service.getData();
    console.log("sdcnerjhcerihjiu")
  }
  
}
