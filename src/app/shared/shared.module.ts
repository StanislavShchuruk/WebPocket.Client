import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ModalModule } from 'ngx-bootstrap';
import { PreloaderComponent } from './helpers/preloader/preloader.component';


@NgModule({
  declarations: [PreloaderComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule,
    ModalModule.forRoot()
  ],
  providers: [
  ],
  exports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    ModalModule,
    ReactiveFormsModule,
    PreloaderComponent
  ]
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(faUser, faUserPlus, faPlus);
  }
 }
