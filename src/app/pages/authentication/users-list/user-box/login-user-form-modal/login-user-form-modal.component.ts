import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUser } from 'src/app/shared/models/loginUser';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { ErrorRequestResult } from 'src/app/shared/models/error-request-result';
import { misMatchValidator } from 'src/app/shared/helpers/validators/form/mis-match-validator';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'auth-login-user-form-modal',
  templateUrl: './login-user-form-modal.component.html',
  styleUrls: ['./login-user-form-modal.component.css']
})
export class LoginUserFormModalComponent implements OnInit {

  public username: string;
  public activeFieldName = '';
  public loginUserForm: FormGroup;
  public onClose: Subject<boolean>;

  private errors = [];

  constructor(private bsModalRef: BsModalRef, private authService: AuthenticationService) { }

  public ngOnInit() {
    this.onClose = new Subject();

    this.loginUserForm = new FormGroup({
      username: new FormControl(this.username, Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    if (this.loginUserForm.invalid) {
      return;
    }

    const username = this.loginUserForm.get('username').value;
    const isUsernameContainsEmail = username.includes('@');

    const loginUserData: LoginUser = {
      email: isUsernameContainsEmail ? username : '',
      username: isUsernameContainsEmail ? '' : username,
      password: this.loginUserForm.get('password').value
    };

    this.authService.login(loginUserData).subscribe((data) => {
      this.close(true);
    }, (err: ErrorRequestResult) => {
      this.errors = err.errors;
    });
  }

  public setActiveFieldName(fieldName: string) {
    this.activeFieldName = fieldName;
  }

  public close(result: boolean) {
    this.onClose.next(result);
    this.bsModalRef.hide();
  }

}
