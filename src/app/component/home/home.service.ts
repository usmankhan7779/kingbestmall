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

    Get_productfromAll(): Observable<any> {
      return this.http.get(this.baseUrl + 'DailyDeals/').pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          })
        );
    }

    GetAllFeaturedProducts(): Observable<any> {
      return this.http.get(this.baseUrl + 'FeatureDeals/').pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          })
        );
    }

    
  
  
}
