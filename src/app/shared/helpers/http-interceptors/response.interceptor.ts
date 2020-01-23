import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthenticationService } from '../../services/authentication.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(map(event => {
            if (event instanceof HttpResponse) {
              const modEvent = event.clone({ body: event.body.obj });
              return modEvent;
            }
        }));
    }
}
