import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { RecapchaComponent } from 'src/app/recapcha/recapcha.component';
import { RecapchaService } from 'src/app/recapcha/recapcha.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(RecapchaComponent,{ static: false }) captcha: RecapchaComponent;
  model: any = {};
  hide = true;
  constructor(private http: HttpService, private _nav: Router, public recapcha: RecapchaService ) { }

  ngOnInit() {
  }
  
  onLogin() {
    let auth = {
      username: this.model.username,
      password: this.model.password
    };
    if (this.recapcha.check()) {
    this.http.login(auth).subscribe(
      data => {
        localStorage.setItem('token', data.token);
  
        Swal.fire(
          'Logged In!',
          'Successfully login to your account',
          'success'
        );
        // this.toastr.success(data['response']);
        this._nav.navigate(['/'])


      },
      error => {


         


      }
    );

  }
  else{
    this.captcha.resetImg();
      Swal.fire({
        type: 'error',
        title: 'Recaptcha Confirmation',
        text: 'Please confirm you are not a robot',
        showConfirmButton: false,
        width: '512px',
        timer: 2000
      });
  }
}


}
