import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserListService } from './shared/user-list.service';
import { ErrorRequestResult } from 'src/app/shared/models/error-request-result';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users = [];
  private errors = [];

  constructor(private userListService: UserListService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.userListService.GetUsers().subscribe((data: User[]) => {
      this.users = data;
    }, (err: ErrorRequestResult) => {
      this.errors = err.errors;
    });
  }

}
