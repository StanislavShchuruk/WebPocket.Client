import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { RegisterUser } from '../../../../../shared/models/registerUser';
import { misMatchValidator } from 'src/app/shared/helpers/validators/form/mis-match-validator';
import { ErrorRequestResult } from 'src/app/shared/models/error-request-result';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-auth-register-user-form-modal',
  templateUrl: './register-user-form-modal.component.html',
  styleUrls: ['./register-user-form-modal.component.css']
})
export class RegisterUserFormModalComponent implements OnInit {

  public activeFieldName = '';
  public registerUserForm: FormGroup;
  public errors = [];
  public onClose: Subject<boolean>;

  constructor(private bsModalRef: BsModalRef, private authService: AuthenticationService) { }

  public get isEmailIncorrect(): boolean {
    const emailControl = this.registerUserForm.get('email');
    return emailControl.touched && emailControl.invalid && emailControl.value;
  }
  public get isEmailReuiredError(): boolean {
    const emailControl = this.registerUserForm.get('email');
    return emailControl.touched && emailControl.invalid && !emailControl.value;
  }

  public get isUsernameInvalid(): boolean {
    const usernameControl = this.registerUserForm.get('username');
    return usernameControl.touched && usernameControl.invalid;
  }

  public get isPasswordInvalid(): boolean {
    const passwordControl = this.registerUserForm.get('password');
    return passwordControl.touched && passwordControl.invalid;
  }

  public get isPasswordsMismatch(): boolean {
    return this.registerUserForm.get('password').touched
        && this.registerUserForm.get('confirmPassword').touched
        && this.registerUserForm.getError('misMatch');
  }

  public ngOnInit() {
    this.onClose = new Subject();

    this.registerUserForm = new FormGroup({
      email: new FormControl('stanis@email.com', [Validators.required, Validators.email]),
      username: new FormControl('stanis', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('qwerty', [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl('qwerty'),
    }, {
      validators: misMatchValidator('password', 'confirmPassword')
    });
  }

  public onSubmit() {
    if (this.registerUserForm.invalid) {
      return;
    }
    const registerUserData: RegisterUser = {
      email: this.registerUserForm.get('email').value,
      username: this.registerUserForm.get('username').value,
      password: this.registerUserForm.get('password').value
    };

    this.authService.registerUser(registerUserData).subscribe((data) => {
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
