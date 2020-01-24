import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-top-bar',
  templateUrl: './home-top-bar.component.html',
  styleUrls: ['./home-top-bar.component.css']
})
export class HomeTopBarComponent implements OnInit {

  public greeting = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService
    ) { }

  ngOnInit() {
    this.greeting = `Hello ${this.authService.currentUserValue.username}`;
  }

  public onLogout() {
    this.authService.logout();
    this.router.navigate(['/authentication']);
  }

}
