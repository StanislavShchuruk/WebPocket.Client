import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RegisterUserFormModalComponent } from './register-user-form-modal/register-user-form-modal.component';
import { LoginUserFormModalComponent } from './login-user-form-modal/login-user-form-modal.component';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {

  @Input()
  public user: User;
  @Input()
  public isNewUser: boolean;

  public icon: string;

  private bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  public ngOnInit() {
    if (this.isNewUser) {
      this.icon = 'user-plus';
    } else {
      this.icon = 'user';
    }
  }

  public onClick() {
    if (this.isNewUser) {
      this.openRegisterUserForm();
    } else {
      this.openLoginUserForm();
    }
  }

  private openRegisterUserForm() {
    this.bsModalRef = this.modalService.show(RegisterUserFormModalComponent);
  }

  private openLoginUserForm() {
    const initialState = {
      username: this.user.username
    };

    this.bsModalRef = this.modalService.show(LoginUserFormModalComponent, {initialState});
  }

}
