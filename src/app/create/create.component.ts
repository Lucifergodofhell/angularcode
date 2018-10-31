import { Component, OnInit, Input, Inject } from '@angular/core';
import { User } from '../model/user';
import {ServicesService} from  '../services.service';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public user = new User();

  constructor(private service: ServicesService) { }

  ngOnInit() {
  }
  public createuser(): void {
    this.service.addData(this.user);
  }
}
