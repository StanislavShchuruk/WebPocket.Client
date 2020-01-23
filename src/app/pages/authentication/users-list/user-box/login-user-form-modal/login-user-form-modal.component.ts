import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUser } from 'src/app/shared/models/loginUser';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { ErrorRequestResult } from 'src/app/shared/models/error-request-result';
import { misMatchValidator } from 'src/app/shared/helpers/validators/form/mis-match-validator';

@Component({
  selector: 'auth-login-user-form-modal',
  templateUrl: './login-user-form-modal.component.html',
  styleUrls: ['./login-user-form-modal.component.css']
})
export class LoginUserFormModalComponent implements OnInit {

  public username: string;
  public activeFieldName = '';
  public loginUserForm: FormGroup;

  private errors = [];

  constructor(private authService: AuthenticationService) { }

  public ngOnInit() {
    this.loginUserForm = new FormGroup({
      username: new FormControl(this.username, Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    if (this.loginUserForm.invalid) {
      console.log(this.loginUserForm);
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
      console.log(data);
    }, (err: ErrorRequestResult) => {
      this.errors = err.errors;
    });
  }

  public setActiveFieldName(fieldName: string) {
    this.activeFieldName = fieldName;
  }

}
