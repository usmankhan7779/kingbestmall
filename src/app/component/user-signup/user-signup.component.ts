import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from './password-validator.component';
import swal from 'sweetalert2';

import { RecapchaService } from '../../recapcha/recapcha.service';
import { RecapchaComponent } from 'src/app/recapcha/recapcha.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  @ViewChild(RecapchaComponent, { static: true }) captcha: RecapchaComponent;
  register: FormGroup;
  emailonly = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  usernameOnly = '[a-zA-Z0-9_.]+';
  isequal;
  hide = true;
  hide1 = true;
  password_regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[\/\\\!\"#$%&()*+,£^.:;=?\\\\[\\]\\-\'<>~|@_{}]).{8,}$';
  constructor(private fb: FormBuilder,
    private router: Router, private http: HttpService,
    private recapcha: RecapchaService) { }

  ngOnInit() {
    this.register = this.fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.pattern(this.usernameOnly)])],
      'email': ['', Validators.compose([Validators.required, Validators.pattern(this.emailonly), Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(this.password_regex)])],
      'Fname': ['', Validators.compose([Validators.required])],
      'Lname': ['', Validators.compose([Validators.required])],
      'confirmpassword': ['', Validators.compose([Validators.required, Validators.pattern(this.password_regex)])],
    },
      {
        validator: PasswordValidation.MatchPassword // your validation method
      });
  }
  
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }
  displayFieldCss(form: FormGroup, field: string) {
    return {
      'has-error': this.isFieldValid(form, field),
      'has-feedback': this.isFieldValid(form, field)
    };
  }
  disabledAgreement: boolean = true;
  changeCheck(event){
    this.disabledAgreement = !event.checked;
  }
  onRegister(value) {
    // alert(this.model.profile_image);
    console.log(this.register.value)
    if (this.recapcha.check()) {
      this.isequal = true;
      this.http.register(this.register.value).subscribe(
        data => {
          swal.fire({
            type: 'success',
            title: 'Please check your email for account activation instructions',
            showConfirmButton: true,
            width: '512px',
          });
          this.router.navigate(['/signin']);
        },
        error => {
        });
    }
    else {

      this.captcha.resetImg();
      this.isequal = false;

      swal.fire({
        type: 'error',
        title: 'Please confirm that you are not a robot',
        showConfirmButton: false,
        width: '512px',
        timer: 2000
      });
    }
  }

}
