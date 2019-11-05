import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
 
import Swal from 'sweetalert2';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-verfiy-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerfiyEmailComponent implements OnInit {
  sub;
  blogs;
  query;
  password1;
  password2;
  searchQuery;
  Waitcall = false;
  key: any;
  email: any;
  is_set = false;
  is_send = false;
  is_match_error = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private http: HttpService,
              private route: ActivatedRoute,
              private _nav: Router) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)){
    window.scrollTo(0, 0);
      this.sub = this.route.params.subscribe(params => {
        this.key = params['key'] || '0';
      });
      if ( this.key === '0')  {
        this._nav.navigate(['/login']);
      }

      this.http.UserConfirm(this.key).subscribe( data => {
        Swal.fire({
          title: 'Welcome Back. Thanks for verifying your account.',
          type: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.value) {
            this._nav.navigate(['/sigin'])
          }
        })
      });

      console.log('KEY is:', this.key);
    }

  }

  // resedcode( ) {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.Waitcall = true;
  //     this.obj.sendmail(localStorage.getItem('email'))
  //       .subscribe(
  //         data => {
  //           // this.alertService.success('Registration successful', true);
  //           this.is_send = true;
  //           this.is_match_error = false;
  //           this.Waitcall = false;
  //           // alert('success')
  //         },
  //         error => {
  //           this.is_send = false;
  //           this.is_match_error = true;
  //           this.Waitcall = false;

  //         });
  //   }
  // }

  

}