import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _authService: AuthService,
              private _router: Router) { }
  
  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true //der er en token
    } else {
      this._router.navigate(['/login'])
      return false //der er ikke en token og brugeren bliver navigeret til loginsiden
    }
  }
}
