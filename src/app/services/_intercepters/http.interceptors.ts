import {Injectable,Injector} from '@angular/core';
import {tap} from 'rxjs/operators';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { HttpService } from '../http.service';


@Injectable()
export class HttpInterceptors implements HttpInterceptor {
  constructor(private injector :Injector) {
  }

  // function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // how to update the request Parameters
    let updatedRequest: any;
    let token = this.injector.get(HttpService)
    // if (token ) {
      // alert(token)
      
      console.log(localStorage.getItem('token'), 'Client Tag');
      updatedRequest = request.clone({
        // headers: request.headers.set("Authorization", "Token " + token)

        setHeaders: {

          Authorization: `JWT ${token.get_token()}`
           

        }


        

      });
    // } else {
    //   updatedRequest = request.clone({
    //     // headers: request.headers.set('Content-Type', 'application/json');

    //     setHeaders: {
    //       'Content-Type': 'application/json',
    //     }

    //   });
    // }

    return next.handle(updatedRequest).pipe(
      tap(
        event => {
          // logging the http response to browser's console in case of a success
          if (event instanceof HttpResponse) {
            console.log('api call success :', event);
          }
        },
        error => {
          // logging the http response to browser's console in case of a failuer
          if (event instanceof HttpResponse) {
            console.log('api call error :', event);
          }
        }
      )
    );

  }
}
