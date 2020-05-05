import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { DietService } from '../diet.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public addMealData = {} as any

  constructor(private alertService: AlertService,
    private _auth: AuthService,
    private _dietService: DietService) { }

  ngOnInit(): void {
  }


  addMeal() {
    this._auth.addMeal(this.addMealData).subscribe(
      res => {
        this.alertService.success('Meal successfully created')
        console.log(res)
      },
      err => {
        this.alertService.danger('Error occurred while creating a meal.')
        console.log(err)
      }
    )
  }

}
