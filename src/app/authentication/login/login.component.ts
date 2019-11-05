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
      this.http.IsActive(auth).subscribe(res =>{
        if(res.Message == 'Account is Active' ){
        
    this.http.login(auth).subscribe(
      data => {
        localStorage.setItem('token', data.token);
  
        Swal.fire(
          'Logged In!',
          'Successfully login to your account',
          'success'
        );
        // this.toastr.success(data['response']);
        if( res.Role == 'U'){
           this._nav.navigate(['/aboutus'])
        }
        else if (res.Role == 'V')
        this._nav.navigate(['/'])
      })
    }
    else if (res.Message == 'Account is Inactive' ) {
      Swal.fire({
        type: 'error',
        title: 'Your Account is Inactive ',
        text: 'Please Check Your Email for Activation link ',
        showConfirmButton: false,
        width: '512px',
        timer: 2000
      });
    }
    else if (res.Message == 'Username or Password are wrong' ){
      Swal.fire({
        type: 'error',
        title: 'Oops',
        text: res.Message,
        showConfirmButton: false,
        width: '512px',
        timer: 2000
      });
    }
    },
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
