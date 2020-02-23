import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { RegisterUser } from '../models/registerUser';
import { LoginUser } from '../models/loginUser';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private apiUrl = 'auth';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.getValue();
  }

  public registerUser(data: RegisterUser) {
    return this.http.post<User>(`${this.apiUrl}/register`, data)
      .pipe(
        map(user => {
          this.saveUserToStorage(user);
          return user;
      }));
  }

  public login(data: LoginUser) {
    return this.http.post<User>(`${this.apiUrl}/login`, data)
      .pipe(
        map(user => {
          this.saveUserToStorage(user);
          return user;
      }));
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private saveUserToStorage(user: User) {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
}
