import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class CanAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so return true
            return true;
        }

        // logged in so redirect back to page
        this.router.navigate(['/home']);
        return false;
    }
}
