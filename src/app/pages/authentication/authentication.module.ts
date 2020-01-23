import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationComponent } from './authentication.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserBoxComponent } from './users-list/user-box/user-box.component';
import { RegisterUserFormModalComponent } from './users-list/user-box/register-user-form-modal/register-user-form-modal.component';
import { LoginUserFormModalComponent } from './users-list/user-box/login-user-form-modal/login-user-form-modal.component';
import { UserListService } from './users-list/shared/user-list.service';


@NgModule({
  declarations: [
    AuthenticationComponent,
    UsersListComponent,
    UserBoxComponent,
    RegisterUserFormModalComponent,
    LoginUserFormModalComponent
  ],
  entryComponents: [
    RegisterUserFormModalComponent,
    LoginUserFormModalComponent
  ],
  providers: [
    UserListService,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
