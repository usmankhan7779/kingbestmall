import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.listurl;
  userUrl = environment.userurl;
  loginUrl= environment.loginUrl;
   


  constructor(private http: HttpClient) {

  }
 
  get_token(){
    return localStorage.getItem('token')
  }


  GetAllCategories(): Observable<any> {
    return this.http.get(this.baseUrl + 'Category/').pipe(
        tap(_ => {
        }, error => {
          console.log(error);
        })
      );
  }
  GetAllCategories_sub(id): Observable<any> {
    return this.http.get( 'https://apis.kingbestmall.com/'+id+'/List/SubCategory/').pipe(
        tap(_ => {
        }, error => {
          console.log(error);
        })
      );
  }

  // http://192.168.29.148:8000/1/List/SubCategory/

    // User Login APi
    login(auth): Observable<any> {
      const s = this.http.post(this.loginUrl + 'api-token-auth/', auth)
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
      const s = this.http.post(this.loginUrl + 'User/IsActive/', auth)
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
// User Login APi
Add_new_product(auth1 ): Observable<any> {
  //  let auth =auth1+auth2+auth3
  const s = this.http.post(this.loginUrl + 'Product/', auth1)
    .pipe(
      tap(_ => {
      }, error => {
        console.log(error)
      })
    );
  return s;
}
//gget images
images(input_file): Observable<any> {
  //  let auth =auth1+auth2+auth3
  console.log(input_file)
  let uth ={
    "input_file":input_file 
  }
  const s = this.http.post(this.loginUrl + 'picupload',uth )
    .pipe(
      tap(_ => {
      }, error => {
        console.log(error)
      })
    );
  return s;
}


//change password
changepassword(uth): Observable<any> {
 
  const s = this.http.post(this.userUrl + 'ChangePassword/',uth )
    .pipe(
      tap(_ => {
      }, error => {
        console.log(error)
      })
    );
  return s;
}
// /User/ChangePassword/
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

  // return this.http.post(this.userUrl + 'ChangePassword', {
  //   // 'email': username,
  //   'current': currPass,
  //   'pass1': pass1,
  //   'pass2': pass2
  // })  
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
