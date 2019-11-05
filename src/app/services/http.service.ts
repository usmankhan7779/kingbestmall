import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.apiUrl;
  userUrl = environment.userurl;
  loginUrl= environment.loginUrl;
   


  constructor(private http: HttpClient) {

  }
    // User Login APi
    login(auth): Observable<any> {
      const s = this.http.post(this.loginUrl + '/api-token-auth/', auth)
        .pipe(
          tap(_ => {
          }, error => {
            console.log(error)
          })
        );
      return s;
    }


// User Login APi
  register(auth): Observable<any> {
  const s = this.http.post(this.userUrl + 'SignUp/', auth)
    .pipe(
      tap(_ => {
      }, error => {
        console.log(error)
      })
    );
  return s;
}

    // /User/SignUp/
}
