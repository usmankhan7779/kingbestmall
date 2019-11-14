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
  loginUrl= environment.usman;
   


  constructor(private http: HttpClient) {

  }
 
  GetAllCategories(): Observable<any> {
    return this.http.get(this.baseUrl + 'Getallcat').pipe(
        tap(_ => {
        }, error => {
          console.log(error);
        })
      );
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
     IsActive(auth): Observable<any> {
      const s = this.http.post(this.userUrl + 'IsActive/', auth)
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

// User verfiy  APi
UserConfirm(auth): Observable<any> {
  const s = this.http.post(this.userUrl +'EmailConfirm/', auth)
    .pipe(
      tap(_ => {
      }, error => {
        console.log(error)
      })
    );
  return s;
}
changepass( currPass: string, pass1: string, pass2: string) {

  return this.http.post(this.userUrl + 'ChangePassword', {
    // 'email': username,
    'current': currPass,
    'pass1': pass1,
    'pass2': pass2
  })  .map((res: Response) => {

    if (res) {
      if (res.status === 201 || res.status === 200) {
        const responce_data = res.json();
        return responce_data;
      }
    }
  }).catch((error: any) => {

    if (error.status !== 404) {
      if (error.status === 401) {
        console.log(error);

        return Observable.throw(new Error(error.status));
      }


    } else {
      console.log(error);
      //   this._nav.navigate(['/login']);

      return Observable.throw(new Error(error.status));
    }
  }); 
}



// GetStoreInformationByUserId() {
//   const headers = new Headers();

//   headers.append('Content-Type', 'application/json');
//   headers.append('Authorization', 'Token ' + localStorage.getItem('Authorization'));
//   // console.log('pofile', localStorage.getItem('Authorization'));
//   return this._http.get(this.productsUrl + 'all_stores_names/' ,{headers :headers}).map((response: Response) => response.json());
//   // http://192.168.30.225:8000/products/all_stores_names/
//   //  this.StoreServerUrl 
// }
    // /User/SignUp/
}
