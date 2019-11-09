import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }
  open(){
    $('.side-bar').toggle();
  };
  ngOnInit() {
    
  }

}
