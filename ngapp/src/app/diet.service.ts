import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  private _mealsUrl = "http://localhost/api/dietdiary"

  constructor(private http: HttpClient) { }

  getMeals() {
    return this.http.get<any>(this._mealsUrl)
  }
}
