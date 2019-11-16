import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showlogin:boolean= false;
  constructor( private router: Router) { }

  ngOnInit() {

  }

  get_show_menu(){
    if (localStorage.getItem('user') == 'yes'){
      this.router.navigate(['/user-dashboard']);
    }
    else if (localStorage.getItem('user') == null){
      this.router.navigate(['/login']);
    }
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
