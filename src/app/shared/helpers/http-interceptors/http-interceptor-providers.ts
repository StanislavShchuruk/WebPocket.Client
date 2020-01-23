import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiPrefixInterceptor } from './api-prefix.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { HeadersInterceptor } from './hearders.interceptor';
import { JwtInterceptor } from './jwt.interceptor';
import { ResponseInterceptor } from './response.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
