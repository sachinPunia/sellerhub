import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {

  token: string;
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this.token = localStorage.getItem("userToken");
    if (this.token) {
      const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', this.token) });
      return next.handle(tokenizedReq).pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 401 || event.status === 500) {
            //Logout 
            localStorage.removeItem("userToken")
            this.router.navigateByUrl('/');
          }
        }
        return event;
      }));
    } 
    // this.router.navigateByUrl('/');
    return next.handle(req);
  }
}
