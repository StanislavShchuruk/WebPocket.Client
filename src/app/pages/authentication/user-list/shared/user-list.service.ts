import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';

@Injectable()
export class UserListService {

  private apiUrl = 'user';

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/get-users`);
  }
}
