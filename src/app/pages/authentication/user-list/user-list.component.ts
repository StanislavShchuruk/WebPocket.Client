import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserListService } from './shared/user-list.service';
import { ErrorRequestResult } from 'src/app/shared/models/error-request-result';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users = [];
  public loading = false;
  public bgColoros = ['#6C9575', '#83B799', '#E2CD6D', '#C2B28F', '#E4D8B4', '#E86F68'];
  private errors = [];

  constructor(private userListService: UserListService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.loading = true;
    this.userListService.GetUsers().subscribe((data: User[]) => {
      this.loading = false;
      this.users = data;
    }, (err: ErrorRequestResult) => {
      this.loading = false;
      this.errors = err.errors;
    });
  }

}
