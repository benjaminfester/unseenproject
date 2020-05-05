import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"
  private _addmealUrl = "http://localhost:3000/api/dietdiary"
  private _mealsUrl = "http://localhost:3000/api/diets"

  constructor(private http: HttpClient,
              private _router: Router,
              private alertService: AlertService) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
    this.alertService.info('Logged out user')
  }

  public getToken() {
    return localStorage.getItem('token')
  }

  addMeal(meal) {
    return this.http.post<any>(this._addmealUrl, meal)
  }

  getMeals() {
    return this.http.get<any>(this._mealsUrl)
  }

 
}
