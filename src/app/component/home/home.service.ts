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
  baseUrl = environment.userurl;
  listurl = environment.listurl
  producturl = environment.producturl;

  constructor(private http: HttpClient) { }
   
    Getall_cat(): Observable<any> {
      return this.http.get(this.listurl + 'Category/').pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          })
        );
    }
    Getlikeforyou(): Observable<any> {
      return this.http.get(this.producturl + 'Recommended/').pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          })
        );
    }

    Get_productfromAll(): Observable<any> {
      return this.http.get(this.producturl + 'DailyDeals/').pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          })
        );
    }

    GetAllFeaturedProducts(): Observable<any> {
      return this.http.get(this.producturl + 'FeatureDeals/').pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          })
        );
    }

    
  
  
}
