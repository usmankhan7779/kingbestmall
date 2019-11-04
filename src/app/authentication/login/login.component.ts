import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  hide = true;
  constructor(private http: HttpService, private _nav: Router ) { }

  ngOnInit() {
  }
  
  onLogin() {
    let auth = {
      user: this.model.username,
      pass: this.model.password
    };
    this.http.login(auth).subscribe(
      data => {
        localStorage.setItem('role', 'true');

        // this.toastr.success(data['response']);
        // this._nav.navigate(['/metrics'])


      },
      error => {


         


      }
    );

  }

}
