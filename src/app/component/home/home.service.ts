import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
 

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }
   
    Getall_cat(): Observable<any> {
      return this.http.get(this.baseUrl + 'Getallcat').pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          })
        );
    }
    Getlikeforyou(): Observable<any> {
      return this.http.get(this.baseUrl + 'getFunProductsHome/').pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          })
        );
    }
  //   Getlikeforyou() {
  
  //     // let headers = new Headers();
  //     // headers.append('Content-Type', 'application/json');
   
  //     // // console.log('pofile', localStorage.getItem('Authorization'));
  //     return this.http.get(this.baseUrl + 'getFunProductsHome/', { headers: headers }).map(response => response.json());
     
  //     // https://apis.officedoor.ai/office/property_detail_by_id/465/
  // }
  
}
