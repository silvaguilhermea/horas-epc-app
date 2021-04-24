import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // tokenString = localStorage.getItem('access_token');
    const tokenString = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3aWxsaWFtLmdvbmNhbHZlc0BidXRhbnRhbi5nb3YuYnIiLCJleHAiOjE2MTkwNTYzMjF9.qgywAGvd2rMmRRMxvsC_kLXF9hYgGYIcNnfT_RYdrMLp8jmiCfmscmg9PZhaNciz0tpz2oW3Rw9qKty3XKHklQ';
    console.log(tokenString);
    const url = request.url;

    if( tokenString && !url.endsWith('/login') ){
      const token = JSON.parse(tokenString);
      const jwt = token.access_token;
      request = request.clone({
        setHeaders : {
          Authorization: jwt
        }
      })
    }

    return next.handle(request);
  }
}
