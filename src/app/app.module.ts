import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './pages/authentication/authentication.module';

import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './shared/helpers/http-interceptors/http-interceptor-providers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthenticationModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
