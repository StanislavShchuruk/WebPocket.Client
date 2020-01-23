import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ModalModule } from 'ngx-bootstrap';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule,
    ModalModule.forRoot()
  ],
  providers: [
    AuthenticationService
  ],
  exports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    ModalModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(faUser, faUserPlus);
  }
 }
