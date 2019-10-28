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
    // /metrics/metric/11
    Getall_cat(): Observable<any> {
      return this.http.get(this.baseUrl + 'Getallcat')
        .pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          })
        );
    }
  
}
